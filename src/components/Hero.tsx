'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRightIcon, PlayIcon, CalendarDaysIcon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlayVideo = () => {
    const video = document.getElementById('hero-video') as HTMLVideoElement
    if (video) {
      video.play()
      setIsVideoPlaying(true)
    }
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Invest in{' '}
              <span className="text-emerald-600">African</span>
              <br />Government Bonds
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Access attractive, government-backed bonds from Africa&apos;s fastest-growing economies. 
              Earn competitive returns while supporting sustainable development across the continent.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://app.borabond.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center group"
              >
                <span>Start Investing</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={openModal}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors flex items-center justify-center group"
              >
                <CalendarDaysIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                <span>Talk to Our Team</span>
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">12%+</div>
                <div className="text-sm text-gray-600">Average Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">15+</div>
                <div className="text-sm text-gray-600">African Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">$50M+</div>
                <div className="text-sm text-gray-600">Assets Managed</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Video Section - Right Side */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              {/* Background Video */}
              <video 
                id="hero-video"
                className={`w-full aspect-video object-cover ${isVideoPlaying ? 'block' : 'block'}`}
                loop
                playsInline
                controls={isVideoPlaying}
                poster="/images/bonds.png"
                onEnded={() => setIsVideoPlaying(false)}
              >
                
                <source src="/videos/landing-hero.mp4" type="video/mp4" />
                {/* Fallback gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800"></div>
              </video>
              
              {/* Custom Play Button Overlay */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer" onClick={handlePlayVideo}>
                  <motion.div 
                    className="bg-white bg-opacity-90 rounded-full p-6 shadow-2xl border-4 border-white hover:bg-opacity-100 transition-all group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <PlayIcon className="w-16 h-16 text-emerald-600 ml-1 group-hover:text-emerald-700 transition-colors" />
                  </motion.div>
                  
                  {/* Optional overlay text */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                      <p className="text-sm font-medium">Click to Watch Our Story</p>
                      <p className="text-xs opacity-90">Discover African Investment Opportunities</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
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
