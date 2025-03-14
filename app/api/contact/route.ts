import { NextResponse } from 'next/server';

// Define the handler for POST requests
export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    
    const body = await request.json();
    const { name, email, phone, message, formType, restaurant } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Construct the email content
    const emailContent = `
      New message from ${formType || 'Contact Form'}:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      ${restaurant ? `Restaurant: ${restaurant}` : ''}
      
      Message:
      ${message}
    `;
    
    // Return success for now
    return NextResponse.json({ 
      success: true, 
      message: 'Form submission received. Email functionality will be enabled soon.'
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Define a GET handler to ensure the file is recognized as a proper route module
export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint is working' });
}

// Export configuration
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
