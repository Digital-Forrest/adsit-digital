import { NextRequest, NextResponse } from 'next/server';
import HighLevel from '@gohighlevel/api-client';

// Initialize GHL SDK with environment variables
const ghl = new HighLevel({
  privateIntegrationToken: process.env.GHL_PIT_TOKEN,
});

export async function POST(request: NextRequest) {
  try {
    // Get form data from request
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'All fields are required: firstName, lastName, email, and phone' 
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

    // Create contact in GHL
    const contactData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
    };

    const response = await ghl.contacts.create({
      ...contactData,
      locationId: process.env.GHL_LOCATION_ID,
    });

    // Log success (for testing purposes)
    console.log('Contact created successfully:', response);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact created successfully in GHL',
        contactId: response.id 
      },
      { status: 200 }
    );

  } catch (error: any) {
    // Log error for debugging
    console.error('Error creating contact in GHL:', error);

    // Return user-friendly error message
    const errorMessage = error?.message || 'Failed to create contact in GHL';
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

