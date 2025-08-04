import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    
    // Get parameters from URL or use defaults
    const title = searchParams.get('title') || 'Invest in African Government Bonds'
    const description = searchParams.get('description') || 'Access high-yield government bonds from Africa\'s fastest-growing economies. Earn competitive returns while supporting sustainable development.'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #d1fae5 100%)',
            position: 'relative',
          }}
        >
          {/* Background Pattern */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.1) 0%, transparent 50%)',
            }}
          />
          
          {/* Content Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
              maxWidth: '1000px',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Logo/Brand */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#059669',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '24px',
                  boxShadow: '0 10px 25px rgba(5, 150, 105, 0.3)',
                }}
              >
                <div
                  style={{
                    color: 'white',
                    fontSize: '36px',
                    fontWeight: 'bold',
                  }}
                >
                  B
                </div>
              </div>
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#059669',
                  letterSpacing: '-0.02em',
                }}
              >
                BoraBond
              </div>
            </div>

            {/* Main Title */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                color: '#111827',
                lineHeight: 1.1,
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              {title}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: '24px',
                color: '#6b7280',
                lineHeight: 1.4,
                marginBottom: '40px',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              {description}
            </div>

            {/* Stats/Features */}
            <div
              style={{
                display: 'flex',
                gap: '60px',
                alignItems: 'center',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#059669',
                  }}
                >
                  12%+
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                  }}
                >
                  Average Returns
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#059669',
                  }}
                >
                  6
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                  }}
                >
                  African Markets
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#059669',
                  }}
                >
                  $50M+
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: '#6b7280',
                  }}
                >
                  Assets Managed
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: '40px',
                padding: '16px 32px',
                backgroundColor: '#059669',
                borderRadius: '12px',
                color: 'white',
                fontSize: '20px',
                fontWeight: '600',
                boxShadow: '0 4px 14px rgba(5, 150, 105, 0.4)',
              }}
            >
              Start Investing Today
            </div>
          </div>

          {/* Bottom Brand */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              right: '40px',
              fontSize: '16px',
              color: '#9ca3af',
            }}
          >
            borabond.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : 'Unknown error'
    console.log(`Failed to generate image: ${errorMessage}`)
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
