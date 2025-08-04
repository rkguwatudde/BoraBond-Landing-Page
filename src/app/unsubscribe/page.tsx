import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import UnsubscribeForm from '@/components/UnsubscribeForm'

export const metadata: Metadata = generateMetadata({
  title: 'Unsubscribe - BoraBond Newsletter',
  description: 'Unsubscribe from BoraBond newsletter. Manage your email preferences and stop receiving our investment updates.',
  keywords: [
    'unsubscribe newsletter',
    'email preferences',
    'stop emails',
    'BoraBond unsubscribe'
  ],
  canonical: 'https://borabond.com/unsubscribe',
  noIndex: true, // Don't index unsubscribe pages
})

interface UnsubscribePageProps {
  searchParams: Promise<{
    email?: string
    success?: string
    error?: string
  }>
}

export default async function UnsubscribePage({ searchParams }: UnsubscribePageProps) {
  const { email, success, error } = await searchParams

  return (
    <UnsubscribeForm 
      initialEmail={email}
      autoSuccess={success === 'true'}
      error={error}
    />
  )
}
