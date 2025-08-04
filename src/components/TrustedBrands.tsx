'use client'

import { motion } from 'framer-motion'

export default function AvailableMarkets() {
  const markets = [
    { name: 'Uganda', flag: '🇺🇬', status: 'active', description: 'Currently Available' },
    { name: 'Kenya', flag: '🇰🇪', status: 'coming-soon', description: 'Coming Soon' },
    { name: 'Tanzania', flag: '🇹🇿', status: 'coming-soon', description: 'Coming Soon' },
    { name: 'Ghana', flag: '🇬🇭', status: 'coming-soon', description: 'Coming Soon' },
    { name: 'Nigeria', flag: '🇳🇬', status: 'coming-soon', description: 'Coming Soon' },
    { name: 'South Africa', flag: '🇿🇦', status: 'coming-soon', description: 'Coming Soon' }
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Available Markets
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Invest in government bonds across Africa&apos;s most promising economies. 
            We&apos;re currently live in Uganda with more markets launching soon.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {markets.map((market, index) => (
            <motion.div
              key={market.name}
              className={`flex items-center justify-center p-6 rounded-lg shadow-sm border transition-all duration-300 group ${
                market.status === 'active' 
                  ? 'bg-emerald-50 border-emerald-200 hover:shadow-lg' 
                  : 'bg-white border-gray-100 hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {market.flag}
                </div>
                <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                  market.status === 'active' 
                    ? 'text-emerald-700' 
                    : 'text-gray-700 group-hover:text-emerald-600'
                }`}>
                  {market.name}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  market.status === 'active' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {market.description}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Market Stats Section */}
        {/* <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">6</div>
            <div className="text-gray-600">African Markets</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">1</div>
            <div className="text-gray-600">Currently Active</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">2025</div>
            <div className="text-gray-600">Expansion Year</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
