'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address')
      setIsSuccess(false)
      return
    }

    setIsLoading(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage(data.message)
        setIsSuccess(true)
        setEmail('') // Clear the form
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setMessage('An error occurred. Please try again later.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div 
      className="mt-12 pt-8 border-t border-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
          <p className="text-gray-300">
            Get the latest insights on African bond markets and investment opportunities.
          </p>
        </div>
        <div className="space-y-3">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              disabled={isLoading}
              required
            />
            <motion.button 
              type="submit"
              disabled={isLoading}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all"
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </motion.button>
          </form>
          
          {/* Success/Error Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-2 p-3 rounded-lg ${
                isSuccess 
                  ? 'bg-emerald-900/50 border border-emerald-700 text-emerald-300' 
                  : 'bg-red-900/50 border border-red-700 text-red-300'
              }`}
            >
              {isSuccess ? (
                <CheckCircleIcon className="w-5 h-5 flex-shrink-0" />
              ) : (
                <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm">{message}</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
