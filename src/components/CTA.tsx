'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RocketLaunchIcon, CalendarDaysIcon, XMarkIcon, GlobeAltIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid'

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-green bg-opacity-10"></div>
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
        <motion.div
          className="w-96 h-96 bg-white bg-opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          className="text-3xl lg:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Start Your African Bond Journey?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-emerald-100 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Invest with purpose. Build your future. Power Africa’s.
        </motion.p>
        
        {/* Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <GlobeAltIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-emerald-100">Fuel Africa&apos;s future through your investments</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <UserGroupIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-emerald-100">Built by licensed professionals who share your story</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <HeartIcon className="w-10 h-10 text-white" />
            </div>
            <div className="text-emerald-100">Created by Africans abroad—for Africans abroad</div>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://app.borabond.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RocketLaunchIcon className="w-5 h-5 mr-2" />
            Start Investing Today
          </motion.a>
          <motion.button 
            onClick={openModal}
            className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CalendarDaysIcon className="w-5 h-5 mr-2" />
            Schedule a Demo
          </motion.button>
        </motion.div>
      </div>
      
      {/* Schedule Demo Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
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
