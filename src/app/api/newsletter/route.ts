import { NextRequest, NextResponse } from 'next/server'

// Function to send welcome email via Brevo
async function sendWelcomeEmail(email: string) {
  const BREVO_API_KEY = process.env.BREVO_API_KEY
  
  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY not configured')
  }

  const welcomeEmailData = {
    sender: {
      name: 'BoraBond Team',
      email: 'info@borabond.com'
    },
    to: [
      {
        email: email,
        name: email.split('@')[0] // Use part before @ as name
      }
    ],
    subject: 'Welcome to BoraBond Newsletter! 🎉',
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to BoraBond Newsletter</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to BoraBond! 🎉</h1>
          <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Your gateway to African government bonds</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
          <h2 style="color: #059669; margin-top: 0;">Thank you for subscribing!</h2>
          
          <p>We're excited to have you join our community of investors interested in African government bonds and emerging market opportunities.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
            <h3 style="margin-top: 0; color: #059669;">What to expect:</h3>
            <ul style="padding-left: 20px;">
              <li><strong>Market Insights:</strong> Weekly analysis of African bond markets</li>
              <li><strong>Investment Opportunities:</strong> Exclusive access to high-yield bond offerings</li>
              <li><strong>Economic Updates:</strong> Key developments across our 6 target markets</li>
              <li><strong>Expert Analysis:</strong> Professional insights from our investment team</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://app.borabond.com/" style="background: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Start Investing Today</a>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 5px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; font-size: 14px;"><strong>💡 Pro Tip:</strong> Follow us on social media for real-time market updates and investment tips!</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <div style="text-align: center; color: #6b7280; font-size: 14px;">
            <p><strong>BoraBond, LLC</strong><br>
            266 Waverly St, 333, Framingham, MA 01702<br>
            Phone: (313) 247-4604 | Email: support@borabond.com</p>
            
            <p style="margin-top: 20px;">
              <a href="https://borabond.com/api/unsubscribe?email=${encodeURIComponent(email)}" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a> | 
              <a href="https://borabond.com/privacy" style="color: #6b7280; text-decoration: underline;">Privacy Policy</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
    textContent: `
      Welcome to BoraBond Newsletter!
      
      Thank you for subscribing to our newsletter. We're excited to have you join our community of investors interested in African government bonds.
      
      What to expect:
      • Market Insights: Weekly analysis of African bond markets
      • Investment Opportunities: Exclusive access to high-yield bond offerings  
      • Economic Updates: Key developments across our 6 target markets
      • Expert Analysis: Professional insights from our investment team
      
      Start investing today: https://app.borabond.com/
      
      Best regards,
      The BoraBond Team
      
      BoraBond, LLC
      266 Waverly St, 333, Framingham, MA 01702
      Phone: (313) 247-4604 | Email: support@borabond.com
      
      Unsubscribe: https://borabond.com/api/unsubscribe?email=${encodeURIComponent(email)}
    `
  }

  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify(welcomeEmailData),
  })

  if (!response.ok) {
    const errorData = await response.json()
    console.error('Brevo email API error:', errorData)
    throw new Error(`Failed to send welcome email: ${response.status}`)
  }

  const result = await response.json()
  console.log('Welcome email sent successfully:', result)
  return result
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Brevo API configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '2' // Default list ID

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      )
    }

    // Add contact to Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(BREVO_LIST_ID)],
        attributes: {
          FNAME: '', // Can be expanded later
          LNAME: '',
        },
        updateEnabled: true, // Update if contact already exists
      }),
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      
      // Handle case where contact already exists
      if (brevoResponse.status === 400 && errorData.code === 'duplicate_parameter') {
        return NextResponse.json({
          success: true,
          message: 'You are already subscribed to our newsletter!'
        })
      }

      console.error('Brevo API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    const result = await brevoResponse.json()
    console.log('Successfully added contact to Brevo:', result)

    // Send welcome email
    try {
      await sendWelcomeEmail(email)
    } catch (emailError) {
      console.error('Failed to send welcome email:', emailError)
      // Don't fail the subscription if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to our newsletter! Check your email for confirmation.'
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}
