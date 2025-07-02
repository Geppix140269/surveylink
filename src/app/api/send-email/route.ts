import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email template function
const welcomeEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SurveyLink</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #0f172a;">
    <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #064e3b 0%, #059669 100%);">
        <!-- Header -->
        <div style="padding: 40px 20px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <h1 style="color: #ffffff; font-size: 32px; margin: 0;">
                Welcome to <span style="color: #10b981;">SurveyLink</span>
            </h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin-top: 10px;">
                Italy's Premier Property Survey Platform
            </p>
        </div>
        
        <!-- Welcome Message -->
        <div style="padding: 30px 20px; text-align: center; background: rgba(0,0,0,0.2); margin: 20px; border-radius: 16px;">
            <h2 style="color: #10b981; font-size: 26px; margin-bottom: 15px;">
                Benvenuto ${data.full_name}! 🎉
            </h2>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.6;">
                Congratulations on joining SurveyLink's exclusive network of professional surveyors. 
                Your journey to increased earnings and international clients starts now!
            </p>
        </div>
        
        <!-- Profile Details -->
        <div style="background: rgba(0,0,0,0.3); margin: 20px; padding: 20px; border-radius: 16px;">
            <h3 style="color: #ffffff; font-size: 18px; margin-bottom: 20px;">
                📋 Your Registration Details
            </h3>
            <table style="width: 100%; color: #ffffff;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 10px 0; color: rgba(255,255,255,0.7);">Professional Title:</td>
                    <td style="padding: 10px 0; font-weight: bold;">${data.professional_title}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 10px 0; color: rgba(255,255,255,0.7);">Location:</td>
                    <td style="padding: 10px 0; font-weight: bold;">${data.city}, ${data.region}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 10px 0; color: rgba(255,255,255,0.7);">Base Rate:</td>
                    <td style="padding: 10px 0; font-weight: bold;">€${data.base_rate}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: rgba(255,255,255,0.7);">Specializations:</td>
                    <td style="padding: 10px 0; font-weight: bold;">${data.specializations}</td>
                </tr>
            </table>
        </div>
        
        <!-- Next Steps -->
        <div style="background: rgba(0,0,0,0.3); margin: 20px; padding: 20px; border-radius: 16px;">
            <h3 style="color: #ffffff; font-size: 18px; margin-bottom: 20px;">
                🚀 Your Next Steps
            </h3>
            <p style="color: rgba(255,255,255,0.9); line-height: 1.8;">
                1️⃣ <strong>Profile Verification:</strong> We'll verify your credentials within 24-48 hours<br>
                2️⃣ <strong>Complete Your Profile:</strong> Add photos and portfolio for better visibility<br>
                3️⃣ <strong>Start Earning:</strong> Receive survey requests from international clients
            </p>
        </div>
        
        <!-- CTA -->
        <div style="text-align: center; padding: 30px 20px;">
            <a href="https://surveylink.com/dashboard" style="display: inline-block; background: #10b981; color: #ffffff; padding: 15px 35px; text-decoration: none; border-radius: 10px; font-weight: bold; font-size: 16px;">
                Access Your Dashboard
            </a>
        </div>
        
        <!-- Footer -->
        <div style="background: rgba(0,0,0,0.4); padding: 30px 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: rgba(255,255,255,0.7); font-size: 14px; line-height: 1.8; margin: 0;">
                Questions? Contact us at<br>
                📧 support@surveylink.com | 📱 +39 123 456 789
            </p>
        </div>
    </div>
</body>
</html>
`;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Send welcome email
    const { data: emailData, error } = await resend.emails.send({
      from: 'SurveyLink <onboarding@resend.dev>', // Change to your domain when verified
      to: [data.email],
      subject: `Welcome to SurveyLink ${data.full_name}! 🎉`,
      html: welcomeEmailTemplate(data),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Optional: Send admin notification
    await resend.emails.send({
      from: 'SurveyLink <onboarding@resend.dev>',
      to: ['admin@surveylink.com'], // Your admin email
      subject: `New Surveyor Registration: ${data.full_name}`,
      html: `
        <h2>New Surveyor Registration</h2>
        <p><strong>Name:</strong> ${data.full_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Title:</strong> ${data.professional_title}</p>
        <p><strong>Location:</strong> ${data.city}, ${data.region}</p>
        <p><strong>License:</strong> ${data.license_number}</p>
      `,
    });

    return NextResponse.json({ success: true, id: emailData?.id });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
