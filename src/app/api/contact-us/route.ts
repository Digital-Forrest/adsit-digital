import { NextRequest, NextResponse } from 'next/server';
import { HighLevel } from '@gohighlevel/api-client';
import { rateLimit, addRateLimitHeaders } from '@/lib/rate-limit';

// Initialize GHL SDK with environment variables
const ghl = new HighLevel({
  privateIntegrationToken: process.env.GHL_PIT_TOKEN || '',
});

interface ContactFormBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  turnstileToken?: string;
}

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

/**
 * Validates a Turnstile token with Cloudflare's Siteverify API
 */
async function validateTurnstileToken(
  token: string,
  remoteip?: string
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not set in environment variables');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    const formData = new FormData();
    formData.append('secret', secretKey);
    formData.append('response', token);
    if (remoteip) {
      formData.append('remoteip', remoteip);
    }

    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = (await response.json()) as TurnstileVerifyResponse;

    if (!result.success) {
      const errorCodes = result['error-codes'] || ['unknown-error'];
      console.error('Turnstile validation failed:', errorCodes);
      return {
        success: false,
        error: `Verification failed: ${errorCodes.join(', ')}`,
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error validating Turnstile token:', error);
    return {
      success: false,
      error: 'Failed to verify token',
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting: 5 requests per minute per IP
    const rateLimitResponse = await rateLimit(request, {
      maxRequests: 5,
      windowMs: 60000, // 1 minute
      errorMessage: 'Too many requests. Please try again in a minute.',
    });

    if (rateLimitResponse) {
      return rateLimitResponse;
    }

    // Get form data from request
    const body = (await request.json()) as ContactFormBody;
    const { firstName, lastName, email, phone, company, message, turnstileToken } = body;

    // Validate Turnstile token first
    if (!turnstileToken) {
      return NextResponse.json(
        {
          success: false,
          error: 'Verification challenge is required',
        },
        { status: 400 }
      );
    }

    // Get client IP for validation (Cloudflare provides this header)
    const clientIp =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
      request.headers.get('X-Real-IP') ||
      undefined;

    const turnstileValidation = await validateTurnstileToken(turnstileToken, clientIp);
    
    if (!turnstileValidation.success) {
      return NextResponse.json(
        {
          success: false,
          error: turnstileValidation.error || 'Verification failed. Please try again.',
        },
        { status: 400 }
      );
    }

    // Input length validation to prevent DoS attacks
    const MAX_FIELD_LENGTH = 500;
    const MAX_MESSAGE_LENGTH = 5000;
    
    if (firstName && firstName.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'First name is too long' },
        { status: 400 }
      );
    }
    
    if (lastName && lastName.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Last name is too long' },
        { status: 400 }
      );
    }
    
    if (email && email.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Email is too long' },
        { status: 400 }
      );
    }
    
    if (phone && phone.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Phone number is too long' },
        { status: 400 }
      );
    }
    
    if (company && company.length > MAX_FIELD_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Company name is too long' },
        { status: 400 }
      );
    }
    
    if (message && message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { success: false, error: 'Message is too long' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'First name, last name, and email are required' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.GHL_PIT_TOKEN) {
      console.error('GHL_PIT_TOKEN is not set in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error' 
        },
        { status: 500 }
      );
    }

    if (!process.env.GHL_LOCATION_ID) {
      console.error('GHL_LOCATION_ID is not set in environment variables');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error' 
        },
        { status: 500 }
      );
    }

    // Prepare contact data for GHL
    const contactData: {
      firstName: string;
      lastName: string;
      email: string;
      locationId: string;
      phone?: string;
      companyName?: string;
    } = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      locationId: process.env.GHL_LOCATION_ID,
    };

    // Add optional fields if provided
    if (phone) {
      contactData.phone = phone.trim();
    }

    if (company) {
      contactData.companyName = company.trim();
    }

    // Add message as a note or custom field if needed
    // For now, we'll store it in a note after contact creation
    const messageText = message?.trim();

    // Create contact in GHL
    const response = await ghl.contacts.createContact(contactData);

    // If there's a message, add it as a note to the contact
    if (messageText && response.contact?.id) {
      try {
        await ghl.contacts.createNote(
          { contactId: response.contact.id },
          {
            body: messageText,
          }
        );
      } catch (noteError) {
        // Log but don't fail the request if note creation fails
        console.error('Failed to create note for contact:', noteError);
      }
    }

    // Log success (for testing purposes)
    console.log('Contact created successfully from Contact Us form:', response);

    const successResponse = NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll be in touch soon.',
        contactId: response.contact?.id 
      },
      { status: 200 }
    );

    // Add rate limit headers to successful response
    return addRateLimitHeaders(successResponse, request, {
      maxRequests: 5,
      windowMs: 60000,
    });

  } catch (error: unknown) {
    // Log error for debugging
    console.error('Error creating contact in GHL:', error);

    // Return user-friendly error message
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit your information. Please try again.';
    const statusCode = (error as { statusCode?: number; status?: number })?.statusCode || (error as { statusCode?: number; status?: number })?.status || 500;

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: statusCode }
    );
  }
}

