import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Full Name, Email Address, Subject, and Message are required fields.' },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'info@oxcmunankara.com';

    console.log('[Contact Form Submission]:', {
      name,
      email,
      subject,
      message,
      recipientEmail,
      timestamp: new Date().toISOString(),
    });

    // Send email using Nodemailer if SMTP configuration is present
    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #0f172a; margin: 0; padding: 20px; color: #f8fafc; }
              .container { max-width: 600px; margin: 0 auto; background: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155; }
              .header { background: #020617; padding: 24px 30px; text-align: center; border-bottom: 4px solid #D9278E; }
              .header h1 { color: #ffffff; margin: 0; font-size: 20px; text-transform: uppercase; }
              .content { padding: 30px; }
              .field { margin-bottom: 18px; }
              .label { color: #94a3b8; font-size: 12px; text-transform: uppercase; font-weight: bold; margin-bottom: 4px; }
              .value { color: #ffffff; font-size: 15px; background: #0f172a; padding: 10px 14px; border-radius: 8px; border: 1px solid #334155; }
              .footer { background-color: #020617; padding: 16px; text-align: center; color: #64748b; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>OXCMUN Contact Form Message</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value"><a href="mailto:${email}" style="color: #D9278E;">${email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was submitted from oxcmunankara.com contact section.</p>
              </div>
            </div>
          </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"OXCMUN Web Contact" <${emailUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `[OXCMUN Contact] ${subject} - ${name}`,
        html: htmlContent,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been delivered to our team. We will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
}
