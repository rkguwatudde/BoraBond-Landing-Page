'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { UserPlusIcon, MagnifyingGlassIcon, CreditCardIcon, ChartBarIcon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const steps = [
    {
      icon: UserPlusIcon,
      title: "Create Account",
      description: "Sign up in minutes with our streamlined onboarding process. Complete KYC verification to get started.",
      step: "01"
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Browse Bonds",
      description: "Start building your investment strategy, explore curated African bonds or let us help you choose the best options.",
      step: "02"
    },
    {
      icon: CreditCardIcon,
      title: "Invest Securely",
      description: "Fund your account and purchase bonds with our secure, institutional-grade trading platform.",
      step: "03"
    },
    {
      icon: ChartBarIcon,
      title: "Track & Earn",
      description: "Monitor your portfolio performance and receive regular interest payments directly to your account.",
      step: "04"
    }
  ]

  return (
    <section id="how-it-works" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How to Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start investing in African government bonds in four simple steps. 
            Our platform makes it easy to access these high-yield opportunities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-emerald-300 transform -translate-y-1/2 z-0">
                  <motion.div
                    className="h-full bg-emerald-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'left' }}
                  />
                </div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10">
                {/* Step Number */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full text-xl font-bold mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.step}
                </motion.div>
                
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-full h-full" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join other African Diaspora investors who are already earning attractive returns 
              while supporting Africa&apos;s economic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="https://app.borabond.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Free Account
              </motion.a>
              <motion.button 
                onClick={openModal}
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CalendarDaysIcon className="w-5 h-5" />
                Schedule a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Schedule Demo Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Schedule Your Demo
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Pick a time that works best for you
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-gray-200 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <XMarkIcon className="w-6 h-6 text-gray-500" />
                  </button>
                </div>
                
                {/* HubSpot Embed */}
                <div className="h-[600px] md:h-[700px]">
                  <iframe
                    src="https://meetings.hubspot.com/kalule-guwatudde"
                    className="w-full h-full border-0"
                    title="Schedule a Demo with BoraBond"
                    loading="lazy"
                  />
                </div>
                
                {/* Modal Footer */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-sm text-gray-500 text-center">
                    Having trouble? Email us at{' '}
                    <a 
                      href="mailto:support@borabond.com" 
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      support@borabond.com
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
