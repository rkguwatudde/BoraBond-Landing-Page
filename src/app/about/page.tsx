import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = generateMetadata({
  title: 'About BoraBond - Leading African Bond Investment Platform',
  description: 'Learn about BoraBond\'s mission to democratize African government bond investments. $50M+ AUM, 5,000+ investors, serving 6 African markets with 12%+ average returns.',
  keywords: [
    'about BoraBond',
    'African investment company',
    'bond platform history',
    'investment team',
    'company mission',
    'African markets expertise'
  ],
  canonical: 'https://borabond.com/about',
})

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  )
}
