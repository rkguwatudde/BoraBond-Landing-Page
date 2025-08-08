'use client'

import { motion } from 'framer-motion'
import { CheckIcon, HeartIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import { 
  RocketLaunchIcon,
  LightBulbIcon,
  BuildingLibraryIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  UserIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  CalendarIcon
} from '@heroicons/react/24/outline'
import React from 'react'

export default function AboutUs() {
  // Barriers to investment list
  // const investmentBarriers = [
  //   "Couldn't access bonds outside Uganda",
  //   "Couldn't open bank accounts across borders",
  //   "U.S. platforms required $100K and only offered limited options"
  // ]
  
  // Mission value cards
  const valueCards = [
    {
      title: "Rooted in the Diaspora",
      icon: UserGroupIcon,
      description: "Built by and for the African diaspora, with a clear mission: to make building lasting wealth back home a reality."
    },
    {
      title: "Built for Trust",
      icon: ShieldCheckIcon,
      description: "Fully licensed, professionally operated, and held to the highest regulatory standards."
    },
    {
      title: "Investing in Africa's Future",
      icon: LightBulbIcon,
      description: "Investment that powers real progress, funding the infrastructure, services, and opportunities Africa needs to thrive."
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-emerald-100 overflow-hidden relative">
        {/* Background decoration */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-300 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Frustration to Vision: Why I Built BoraBond
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A personal challenge led me to create a platform for the African diaspora to invest back home, securely, 
              transparently, and meaningfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* McKinsey & The Constraint */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Wake-Up Call</h2>
          </motion.div>
          
          {/* Side-by-side cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {/* McKinsey Policy Card */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-blue-100">
                  <BuildingLibraryIcon className="w-8 h-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">McKinsey Policy</h3>
              <p className="text-gray-600 text-center text-lg">
                I couldn&apos;t invest in U.S. stocks because McKinsey had a strict policy, consultants weren&apos;t allowed to, given our access to privileged information
              </p>
            </motion.div>
            
            {/* The Question Card */}
            <motion.div
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-amber-100">
                  <GlobeAltIcon className="w-8 h-8 text-amber-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">The Connection Home</h3>
              <p className="text-gray-600 text-center text-lg">
              With U.S. stocks off the table, I began looking elsewhere. As an African, the answer felt deeply personal. I&apos;ve always envisioned building a life back home, so if I hoped to live and work there, Africa was a must-invest destination.
              </p>
            </motion.div>
          </div>

          {/* Discovery in Uganda */}
          <motion.div
            className="text-center mt-16 mb-8 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* African pattern background */}
            <div className="absolute inset-0 opacity-5 -z-10 overflow-hidden">
              <div className="grid grid-cols-10 gap-2 h-full w-full">
                {Array(40).fill(0).map((_, i) => (
                  <div key={i} className="h-3 w-3 bg-emerald-600 rounded-full transform rotate-45"></div>
                ))}
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">A Better Way</h2>
          </motion.div>

          {/* Quote Block */}
          <motion.div 
            className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 text-center mb-12 border-l-4 border-emerald-500 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-medium text-gray-800 italic">
              &quot;I wanted something that was transparent, professional, and built to last.&quot;
            </p>
          </motion.div>

          {/* Bond Interest Chart */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              className=""
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-4">
                For too long, the African diaspora has tried investing back home, through family, through friends, in real estate, farms, small businesses. I&apos;d watched these investments fail time and again, each one more heartbreaking than the last
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-5">
                <p className="text-red-700 font-medium">
                  &quot;We don&apos;t just lose money, we lose relationships. We lose trust. These failures cut deeper than financial loss alone, with no recourse, no accountability.&quot;
                </p>
              </div>
              
              {/* Visual separator */}
              <div className="flex items-center justify-center my-6">
                <div className="h-px w-16 bg-gray-300"></div>
                <div className="mx-4 text-gray-400">
                  <QuestionMarkCircleIcon className="h-6 w-6" />
                </div>
                <div className="h-px w-16 bg-gray-300"></div>
              </div>
              
              <p className="text-lg text-gray-700 mb-4">
                I was determined to find something different. I wanted investments backed by real institutions, ones with transparency, professional management, and true accountability
              </p>
              
              {/* Visual separator */}
              <div className="flex items-center justify-center my-6">
                <div className="h-px w-16 bg-gray-300"></div>
                <div className="mx-4 text-gray-400">
                  <LightBulbIcon className="h-6 w-6" />
                </div>
                <div className="h-px w-16 bg-gray-300"></div>
              </div>
              
              <p className="text-lg text-gray-700 mb-4">
                While visiting Uganda, I was just about to settle for a simple fixed deposit, until a bank manager mentioned government bonds. I bought my first 20-year bond with a 17.5% coupon. The moment I locked in that return, a level virtually unheard of in Western markets, I felt a wave of excitement and relief.
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4">
                <p className="text-emerald-700 font-medium">
                  &quot;This wasn&apos;t just an investment; it was a revelation about the untapped potential of African government bonds.&quot;
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Uganda Government Bond</h3>
                <p className="text-gray-500 flex items-center justify-center">
                  <span className="mr-2">20-Year Term</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
              
                </p>
              </div>
              
              {/* Visual Chart - Uganda Bond Rate Only */}
              <div className="relative h-52 mb-6 mt-2">
                {/* Circular percentage display */}
                <div className="flex justify-center mb-2">
                  <div className="relative w-32 h-32">
                    {/* Outer circle - track */}
                    <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>
                    
                    {/* Inner circle - progress */}
                    <div className="absolute inset-0 rounded-full border-8 border-emerald-500 shadow-lg"
                         style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)' }}></div>
                    
                    {/* Percentage display */}
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-emerald-700">17.5%</span>
                      <span className="text-sm text-gray-500">Annual Coupon</span>
                    </div>
                  </div>
                </div>
                
                {/* Key features */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mt-6">
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-blue-100">
                      <CalendarIcon className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Term Length</div>
                      <div className="text-xl font-bold">20 Years</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                    <div className="mr-3 p-2 rounded-full bg-amber-100">
                      <BuildingLibraryIcon className="h-5 w-5 text-amber-700" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Issuer</div>
                      <div className="text-xl font-bold">Uganda</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-2 border-t border-gray-100">
                <div className="inline-flex items-center bg-emerald-100 text-emerald-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                  <LockClosedIcon className="w-4 h-4 mr-2" />
                  Locked in for 20 years
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Journey to Diversify */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Quest for More</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">After a few years of investing in Ugandan bonds, I wanted to diversify beyond Uganda</p>
          </motion.div>
          
          {/* Journey Timeline */}
          <div className="max-w-5xl mx-auto">
            {/* Step 1: Love for the asset class */}
            <motion.div
              className="grid md:grid-cols-12 gap-8 mb-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Icon column */}
              <div className="md:col-span-2 flex justify-center">
                <div className="p-6 bg-emerald-100 rounded-full shadow-md">
                  <HeartIcon className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
              
              {/* Content column */}
              <div className="md:col-span-10">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-3 text-emerald-700">Fell in Love with the Asset Class</h3>
                  <p className="mb-4 text-gray-800 text-lg">High yields and institutional backing that ensured transparency made African government bonds a natural fit for an African diaspora investor like me.</p>
                  
                  {/* Bond cards */}
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {/* Target countries */}
                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 flex flex-col items-center shadow-md">
                      <span className="font-semibold text-emerald-700 mb-2">Uganda</span>
                      <span className="text-emerald-600 text-2xl font-bold">✓</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center shadow-sm">
                      <span className="font-semibold text-gray-700 mb-2">Kenya</span>
                      <span className="text-orange-600 text-2xl font-bold">?</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex flex-col items-center shadow-sm">
                      <span className="font-semibold text-gray-700 mb-2">Nigeria</span>
                      <span className="text-orange-600 text-2xl font-bold">?</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 2: Barrier - US Brokerages */}
            <motion.div
              className="grid md:grid-cols-12 gap-8 mb-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon column */}
              <div className="md:col-span-2 flex justify-center">
                <div className="p-6 bg-red-100 rounded-full shadow-md">
                  <PhoneIcon className="w-12 h-12 text-red-600" />
                </div>
              </div>
              
              {/* Content column */}
              <div className="md:col-span-10">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-red-700">No Bridge to African Bonds</h3>
                  
                  <p className="text-gray-800 text-lg mb-5">
                    &quot;I couldn&apos;t just fly to another African country to do this, the only option was going through a US brokerage.
                    However, I couldn&apos;t find a US brokerage that could get me local currency bonds from the continent.&quot;
                  </p>
                  
                  {/* Platform search - Simplified */}
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-5">
                    <div className="flex items-center mb-3">
                      <PhoneIcon className="h-5 w-5 text-gray-700 mr-2" />
                      <p className="text-gray-800 font-medium">Determined to invest, I contacted multiple US brokerage trade desks</p>
                    </div>
                    <p className="text-gray-700 italic pl-7">
                      None could provide access to the African government bonds I wanted to invest in.
                    </p>
                  </div>
                  
                  {/* Call result - Focused on Fidelity */}
                  <div className="bg-red-50 p-5 rounded-lg border border-red-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <PhoneIcon className="h-6 w-6 text-red-600 mr-2" />
                      <span className="font-bold text-red-700">The one exception: Fidelity</span>
                    </div>
                    <p className="text-gray-800 text-lg mb-4 font-medium">
                      A single exception: one brokerage could offer South African bonds, but with a prohibitive barrier:
                    </p>
                    <div className="bg-white rounded-lg p-4 border-2 border-red-300 inline-block shadow-sm">
                      <p className="text-2xl font-bold text-red-600">$100K minimum per transaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Step 3: Institutional Access */}
            <motion.div
              className="grid md:grid-cols-12 gap-8 mb-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Icon column */}
              <div className="md:col-span-2 flex justify-center">
                <div className="p-6 bg-blue-100 rounded-full shadow-md">
                  <NewspaperIcon className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              
              {/* Content column */}
              <div className="md:col-span-10">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-blue-700">Exclusive Access Only</h3>
                  <p className="text-gray-800 text-lg mb-5">
                    I discovered that African government bonds <span className="italic">were</span> available to US-based investors, but with clear gatekeeping:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Asset Managers */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-3">
                        <BuildingOfficeIcon className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-800">Asset Managers</span>
                      </div>
                      <div className="flex justify-center">
                        <CheckIcon className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    
                    {/* High Net Worth */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
                      <div className="flex items-center mb-3">
                        <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                        <span className="font-semibold text-blue-800">High Net Worth ($1M+)</span>
                      </div>
                      <div className="flex justify-center">
                        <CheckIcon className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Diaspora Investor */}
                  <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6 shadow-sm">
                    <div className="flex items-center mb-3">
                      <UserIcon className="h-6 w-6 text-red-600 mr-2" />
                      <span className="font-semibold text-red-800">African Diaspora Investor</span>
                    </div>
                    <div className="flex justify-center">
                      <span className="text-red-600 font-bold text-2xl">✗</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
                    <p className="text-gray-800 text-center font-medium">
                      The market clearly wasn&apos;t designed for people like me, the African diaspora
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* The Conclusion */}
            <motion.div
              className="flex justify-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-amber-200 to-orange-100 text-orange-800 text-lg font-medium px-10 py-5 rounded-xl border-2 border-orange-300 max-w-2xl text-center shadow-md relative">
                {/* Bridge icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md border-2 border-orange-300">
                  <RocketLaunchIcon className="w-9 h-9 text-orange-500" />
                </div>
                <p className="mt-2">
                  <span className="font-bold text-2xl block mb-3">The problem was clear:</span> 
                  <span className="text-xl text-orange-900">There was no bridge for the African diaspora to invest in these opportunities.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">So I Built BoraBond</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              A platform built on three core values that drive everything we do:
            </p>
          </motion.div>
          
          {/* Value cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {valueCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-emerald-100">
                    <card.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{card.title}</h3>
                <p className="text-gray-600 text-center">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Founder Signature */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-2xl text-gray-800 max-w-3xl mx-auto font-medium italic mb-10">
              &quot;We’re building the bridge I wish I had, so you can invest with confidence, not compromise.&quot;
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-emerald-100 mb-4 flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Kalule Guwatudde</h3>
              <p className="text-gray-600">Founder & CEO, BoraBond</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Join Our Investment Community
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Welcome to BoraBond. Start your African bond investment journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.borabond.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Start Investing Today
              </motion.a>
              <motion.a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
