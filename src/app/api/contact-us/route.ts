import { NextRequest, NextResponse } from 'next/server';
import { HighLevel } from '@gohighlevel/api-client';

// Initialize GHL SDK with environment variables
const ghl = new HighLevel({
  privateIntegrationToken: process.env.GHL_PIT_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

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
    const contactData: any = {
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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll be in touch soon.',
        contactId: response.contact?.id || response.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    // Log error for debugging
    console.error('Error creating contact in GHL:', error);

    // Return user-friendly error message
    const errorMessage = error?.message || 'Failed to submit your information. Please try again.';
    const statusCode = error?.statusCode || error?.status || 500;

    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: statusCode }
    );
  }
}

