'use client'

import { motion } from 'framer-motion'
import { ExclamationTriangleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Disclaimer() {
  const risks = [
    {
      title: "Political Risk",
      description: "The risk an investment's returns could suffer as a result of political changes or instability in a country. This risk increases with longer investment horizons."
    },
    {
      title: "Taxation",
      description: "Foreign investments are subject to taxation in their source country. Profits may then be taxed again when the investor repatriates the funds."
    },
    {
      title: "Currency Risk",
      description: "Where an investment uses a different currency, exchange rate changes may adversely affect value, price, or derived income."
    }
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        className="bg-gray-50 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* SEC Disclaimer */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <ShieldCheckIcon className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">SEC Registration</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Check the background of BoraBond&apos;s investment professionals on{' '}
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              SEC&apos;s Investment Adviser Public Disclosure
            </a>{' '}
            website. BoraBond, LLC is located at 266 Waverly St, 333, Framingham, MA, 01702, (313) 247-4604
          </p>
        </motion.div>
        
        {/* Registration Notice */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 leading-relaxed">
            BoraBond, LLC is an SEC Registered Investment Adviser. Registration with the SEC does not imply a certain level of skill or training. 
            Please contact your financial advisor for information regarding services offered and fees charged.
          </p>
        </motion.div>
        
        {/* Investment Risks */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <ExclamationTriangleIcon className="w-6 h-6 text-orange-600 mr-2" />
            <h4 className="text-lg font-semibold text-gray-800">Investment Risks</h4>
          </div>
          <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">
            Investing involves risks, including possible loss of principal. Several levels of investment risks are inherent in foreign investing:
          </p>
          
          {/* Risk Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.title}
                className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <h5 className="font-semibold text-blue-600 mb-2 text-sm">{risk.title}</h5>
                <p className="text-xs text-gray-600 leading-snug">
                  {risk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Final Notice */}
        <motion.div 
          className="pt-6 mt-6 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          
          <p className="text-sm text-gray-600 leading-relaxed">
            Advisory services provided by BoraBond, LLC, an SEC Registered Investment Adviser. 
            For further information about our advisory services and fees, please refer to our Form ADV available on the{' '}
            <a 
              href="https://adviserinfo.sec.gov/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
            >
              SEC&apos;s Investment Adviser Public Disclosure
            </a>{' '}
            website.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
