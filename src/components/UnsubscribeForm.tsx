'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface UnsubscribeFormProps {
  initialEmail?: string
  autoSuccess?: boolean
  error?: string
}

export default function UnsubscribeForm({ initialEmail, autoSuccess, error }: UnsubscribeFormProps) {
  const [email, setEmail] = useState(initialEmail || '')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(autoSuccess || false)

  useEffect(() => {
    if (autoSuccess) {
      setMessage('You have been successfully unsubscribed from our newsletter.')
      setIsSuccess(true)
    } else if (error) {
      switch (error) {
        case 'service_unavailable':
          setMessage('Unsubscribe service is temporarily unavailable. Please try again later.')
          break
        case 'failed':
          setMessage('Failed to unsubscribe. Please try again or contact support.')
          break
        default:
          setMessage('An error occurred. Please try again.')
      }
      setIsSuccess(false)
    }
  }, [autoSuccess, error])

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
      const response = await fetch('/api/unsubscribe', {
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
        setMessage(data.error || 'Failed to unsubscribe. Please try again.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('Unsubscribe error:', error)
      setMessage('An error occurred. Please try again later.')
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <EnvelopeIcon className="mx-auto h-12 w-12 text-emerald-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Newsletter Unsubscribe
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re sorry to see you go. You can unsubscribe from our newsletter below.
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                    placeholder="Enter your email address"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  whileHover={!isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? 'Unsubscribing...' : 'Unsubscribe'}
                </motion.button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <CheckCircleIcon className="mx-auto h-12 w-12 text-emerald-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Successfully Unsubscribed
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                You will no longer receive newsletter emails from BoraBond.
              </p>
            </div>
          )}

          {/* Success/Error Message */}
          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-md ${
                isSuccess 
                  ? 'bg-emerald-50 border border-emerald-200' 
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  {isSuccess ? (
                    <CheckCircleIcon className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <ExclamationCircleIcon className="h-5 w-5 text-red-400" />
                  )}
                </div>
                <div className="ml-3">
                  <p className={`text-sm ${
                    isSuccess ? 'text-emerald-800' : 'text-red-800'
                  }`}>
                    {message}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-emerald-600 hover:text-emerald-500 font-medium"
            >
              ← Back to BoraBond
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Why are you leaving?
          </h3>
          <div className="space-y-3 text-sm text-gray-600">
            <p>We&apos;d love to improve our newsletter. Common reasons for unsubscribing:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Too many emails</li>
              <li>Content not relevant</li>
              <li>Changed email address</li>
              <li>No longer interested in investments</li>
            </ul>
            <p className="mt-4">
              <strong>Contact us:</strong> If you have feedback or want to update your preferences instead of unsubscribing, 
              please reach out to us at{' '}
              <a href="mailto:info@borabond.com" className="text-emerald-600 hover:text-emerald-500">
                info@borabond.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
