import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us - Get Investment Support | BoraBond',
  description: 'Contact BoraBond for investment support, questions about African government bonds, or technical assistance. Our expert team is ready to help you start investing.',
  keywords: [
    'contact BoraBond',
    'investment support',
    'African bonds help',
    'customer service',
    'investment consultation',
    'bond investment questions'
  ],
  canonical: 'https://borabond.com/contact',
})

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  )
}
