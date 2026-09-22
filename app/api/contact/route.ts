import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, institution, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, Email, and Message are required fields.' },
        { status: 400 }
      );
    }

    console.log('[Contact Form Submission]:', {
      name,
      institution: institution || 'N/A',
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          'Thank you for reaching out to Oxford Corridor. Our admissions and academic consulting team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
