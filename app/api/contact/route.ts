import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, university, projectType, budgetRange, deadline, message } = body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD, // App password stored in environment variable
      },
    });

    // Email content
    const mailOptions = {
      from: 'fluxxappmail@gmail.com',
      to: 'fluxxappmail@gmail.com',
      subject: `LEAAS Launch Consultation Request: ${name}`,
      html: `
        <h1>🚀 New Launch Consultation Request</h1>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2>Contact Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company/Organization:</strong> ${university || 'Not provided'}</p>
        </div>
        
        <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2>Project Details</h2>
          <p><strong>What they want to build:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budgetRange || 'Not specified'}</p>
          <p><strong>Launch Timeline:</strong> ${deadline || 'Not specified'}</p>
        </div>
        
        <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2>Their Idea</h2>
          <p>${message}</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p><em>This is a launch consultation request from the LEAAS website.</em></p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email', error: String(error) },
      { status: 500 }
    );
  }
} 