import { Metadata } from 'next'

export const siteConfig = {
  name: 'BoraBond',
  title: 'BoraBond - Invest in African Government Bonds | High-Yield Investment Platform',
  description: 'Invest in high-yield African government bonds with BoraBond. Access exclusive investment opportunities in Uganda, Kenya, Tanzania, Ghana, Nigeria & South Africa. Start with $100.',
  url: 'https://borabond.com',
  ogImage: 'https://borabond.com/api/og',
  keywords: [
    'African government bonds',
    'high yield bonds',
    'Uganda bonds',
    'Kenya government bonds',
    'Tanzania bonds',
    'Ghana bonds',
    'Nigeria bonds',
    'South Africa bonds',
    'emerging market bonds',
    'fixed income investment',
    'bond investment platform',
    'African investment',
    'government securities',
    'treasury bonds',
    'sovereign bonds',
    'investment platform',
    'financial technology',
    'fintech Africa',
    'bond trading',
    'investment opportunities'
  ],
  authors: [
    {
      name: 'BoraBond Team',
      url: 'https://borabond.com/about',
    },
  ],
  creator: 'BoraBond',
  publisher: 'BoraBond',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export function generateMetadata({
  title,
  description,
  image = siteConfig.ogImage,
  noIndex = false,
  keywords,
  canonical,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
  keywords?: string[]
  canonical?: string
} = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const metaDescription = description || siteConfig.description
  const metaKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    formatDetection: siteConfig.formatDetection,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonical || siteConfig.url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonical || siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [image],
      creator: '@borabond',
      site: '@borabond',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'BoraBond',
  description: 'Investment platform for African government bonds offering high-yield opportunities in emerging markets',
  url: 'https://borabond.com',
  logo: 'https://borabond.com/icons/android-chrome-512x512.png',
  image: 'https://borabond.com/icons/android-chrome-512x512.png',
  telephone: '+1-313-247-4604',
  email: 'support@borabond.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '266 Waverly St, 333',
    addressLocality: 'Framingham',
    addressRegion: 'MA',
    postalCode: '01702',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '42.3001',
    longitude: '-71.4162',
  },
  sameAs: [
    'https://twitter.com/borabond',
    'https://linkedin.com/company/borabond',
    'https://facebook.com/borabond',
  ],
  serviceType: 'Investment Services',
  areaServed: [
    {
      '@type': 'Country',
      name: 'Uganda',
    },
    {
      '@type': 'Country',
      name: 'Kenya',
    },
    {
      '@type': 'Country',
      name: 'Tanzania',
    },
    {
      '@type': 'Country',
      name: 'Ghana',
    },
    {
      '@type': 'Country',
      name: 'Nigeria',
    },
    {
      '@type': 'Country',
      name: 'South Africa',
    },
  ],
  offers: {
    '@type': 'Offer',
    name: 'African Government Bond Investment',
    description: 'High-yield government bond investment opportunities',
    category: 'Financial Investment',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '1247',
    bestRating: '5',
    worstRating: '1',
  },
}

export const breadcrumbStructuredData = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const faqStructuredData = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
