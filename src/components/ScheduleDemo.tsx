'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function ScheduleDemo() {
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
    <>
      {/* Schedule Demo Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Investing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our investment experts to learn how 
              BoraBond can help you access African government bonds.
            </p>
            
            <motion.button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CalendarDaysIcon className="w-6 h-6 mr-3" />
              Schedule a Demo
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              Free 30-minute consultation • No commitment required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
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
    </>
  )
}
