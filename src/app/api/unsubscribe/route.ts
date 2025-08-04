import { NextRequest, NextResponse } from 'next/server'

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

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Unsubscribe service not configured' },
        { status: 500 }
      )
    }

    // Remove contact from Brevo
    const brevoResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      
      // Handle case where contact doesn't exist
      if (brevoResponse.status === 404) {
        return NextResponse.json({
          success: true,
          message: 'Email address not found in our newsletter list.'
        })
      }

      console.error('Brevo API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to unsubscribe from newsletter' },
        { status: 500 }
      )
    }

    console.log('Successfully removed contact from Brevo:', email)

    return NextResponse.json({
      success: true,
      message: 'Successfully unsubscribed from our newsletter. We\'re sorry to see you go!'
    })

  } catch (error) {
    console.error('Newsletter unsubscribe error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}

// Handle GET requests for direct unsubscribe links
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.redirect(new URL('/unsubscribe', request.url))
  }

  try {
    // Auto-unsubscribe via GET request (for email links)
    const BREVO_API_KEY = process.env.BREVO_API_KEY

    if (!BREVO_API_KEY) {
      return NextResponse.redirect(new URL('/unsubscribe?error=service_unavailable', request.url))
    }

    const brevoResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'api-key': BREVO_API_KEY,
      },
    })

    if (brevoResponse.ok || brevoResponse.status === 404) {
      return NextResponse.redirect(new URL('/unsubscribe?success=true', request.url))
    } else {
      return NextResponse.redirect(new URL('/unsubscribe?error=failed', request.url))
    }

  } catch (error) {
    console.error('Auto-unsubscribe error:', error)
    return NextResponse.redirect(new URL('/unsubscribe?error=failed', request.url))
  }
}
