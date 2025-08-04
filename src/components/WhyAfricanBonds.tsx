'use client'

import { motion } from 'framer-motion'
import { ArrowTrendingUpIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export default function WhyAfricanBonds() {
  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: "High Returns",
      description: "African government bonds typically offer yields of 8-15%, significantly higher than developed market alternatives.",
      color: "text-emerald-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Government Backed",
      description: "Sovereign bonds are backed by the full faith and credit of African governments, providing institutional-grade security.",
      color: "text-blue-600"
    },
    {
      icon: GlobeAltIcon,
      title: "Diversification",
      description: "Access emerging market exposure and diversify your portfolio beyond traditional Western markets.",
      color: "text-purple-600"
    }
  ]

  return (
    <section id="bonds" className="pt-0 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why African Government Bonds?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Africa&apos;s growing economies offer unique investment opportunities with attractive returns 
            and the potential for significant portfolio diversification.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 ${benefit.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Stats Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">6.2%</div>
              <div className="text-sm text-gray-600">Average GDP Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">1.4B</div>
              <div className="text-sm text-gray-600">Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">54</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">$3.4T</div>
              <div className="text-sm text-gray-600">Combined GDP</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
