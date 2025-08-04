// Google Analytics 4 Setup
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Google Analytics 4 functions
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track investment-related events
export const trackInvestmentEvent = (eventName: string, bondCountry?: string, amount?: number) => {
  event({
    action: eventName,
    category: 'Investment',
    label: bondCountry,
    value: amount,
  })
}

// Track user engagement events
export const trackEngagementEvent = (eventName: string, section?: string) => {
  event({
    action: eventName,
    category: 'Engagement',
    label: section,
  })
}

// Track conversion events
export const trackConversionEvent = (eventName: string, value?: number) => {
  event({
    action: eventName,
    category: 'Conversion',
    value: value,
  })
}

// Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'

// Facebook Pixel
export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'XXXXXXXXXXXXXXX'

export const fbpixel = {
  track: (eventName: string, parameters?: object) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters)
    }
  },
  trackCustom: (eventName: string, parameters?: object) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters)
    }
  },
}

// LinkedIn Insight Tag
export const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'XXXXXXX'

// Microsoft Clarity
export const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'XXXXXXXXX'

// Hotjar
export const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID || 'XXXXXXX'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    clarity: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
