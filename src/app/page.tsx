import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhyAfricanBonds from '@/components/WhyAfricanBonds'
import InvestmentStrategy from '@/components/InvestmentStrategy'
import HowItWorks from '@/components/HowItWorks'
import AvailableMarkets from '@/components/TrustedBrands'
import Features from '@/components/Features'
import CTA from '@/components/CTA'
import Disclaimer from '@/components/Disclaimer'
import Footer from '@/components/Footer'
import { generateMetadata, faqStructuredData } from '@/lib/seo'
// import ScheduleDemo from '@/components/ScheduleDemo'

export const metadata: Metadata = generateMetadata({
  title: 'Invest in African Government Bonds | High-Yield Investment Platform',
  description: 'Start investing in high-yield African government bonds with BoraBond. Access exclusive opportunities in Uganda, Kenya, Tanzania, Ghana, Nigeria & South Africa. Minimum $100 investment.',
  keywords: [
    'African government bonds',
    'high yield investment',
    'emerging market bonds',
    'Uganda treasury bonds',
    'Kenya government securities',
    'bond investment platform',
    'fixed income Africa',
    'sovereign bonds'
  ],
  canonical: 'https://borabond.com',
})

const faqData = [
  {
    question: 'What are African government bonds?',
    answer: 'African government bonds are debt securities issued by African governments to raise capital for infrastructure and development projects. They offer attractive yields and are backed by sovereign guarantees.'
  },
  {
    question: 'What is the minimum investment amount?',
    answer: 'You can start investing in African government bonds with as little as $100 through our platform.'
  },
  {
    question: 'Which African countries can I invest in?',
    answer: 'Currently, you can invest in government bonds from Uganda, Kenya, Tanzania, Ghana, Nigeria, and South Africa through our platform.'
  },
  {
    question: 'What returns can I expect?',
    answer: 'African government bonds typically offer yields ranging from 8% to 15% annually, significantly higher than developed market bonds.'
  },
  {
    question: 'How secure are these investments?',
    answer: 'Government bonds are backed by the full faith and credit of the issuing government, making them among the most secure investment options in each country.'
  }
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData(faqData)),
        }}
      />
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <WhyAfricanBonds />
        <InvestmentStrategy />
        <HowItWorks />
        <AvailableMarkets />
        <Features />
        <CTA />
        <Disclaimer />
        <Footer />
        {/* <ScheduleDemo /> */}
      </main>
    </>
  )
}
