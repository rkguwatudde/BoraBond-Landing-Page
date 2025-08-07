'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export default function InvestmentStrategy() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Smart Investment Planning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides comprehensive tools to plan, track, and optimize your African bond investments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Investment Interface Mockup */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                <ChartBarIcon className="w-6 h-6 text-emerald-600 mr-3" />
                Investment Strategy
              </h3>
              <p className="text-gray-600">Plan your African bond portfolio allocation</p>
            </div>

            {/* Initial Investment */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Initial Investment</h4>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700">Investment Amount:</span>
                  <span className="font-bold text-gray-900">$25,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Platform Fee (1.0%):</span>
                  <span className="font-bold text-gray-900">$250</span>
                </div>
              </div>
            </div>

            {/* Capital Growth Projection */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">5-Year Interest Earnings Estimate</h4>
              <div className="space-y-3">
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Annual Interest (12%) - (Illustrative):</span>
                    <span className="font-bold text-emerald-600">$3,000/year</span>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Projected Earnings (5 years):</span>
                    <span className="font-bold text-blue-600">$15,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Portfolio Completion</span>
                <span>75%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div 
                  className="bg-emerald-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '75%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
            <p>Projected figures are illustrative and not guaranteed. Bond yields can fluctuate depending on market conditions and reinvestment strategies.</p>
          </motion.div>

          {/* Features List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 rounded-lg p-3">
                <CurrencyDollarIcon className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Investment Amounts</h4>
                <p className="text-gray-600">Start with as little as <b>$100</b> and scale your portfolio over time with our flexible investment options.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <ChartBarIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Real-Time Analytics</h4>
                <p className="text-gray-600">Track your portfolio performance with comprehensive analytics and detailed reporting tools.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <CalendarDaysIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Automated Reinvestment</h4>
                <p className="text-gray-600"> Set up recurring monthly investments or reinvest your interest automatically to maximize compounding</p>
              </div>
            </div>

            <motion.a 
              href="https://app.borabond.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
