'use client'

import { motion } from 'framer-motion'
import { ArrowTrendingUpIcon, GlobeAltIcon, SunIcon } from '@heroicons/react/24/outline'

export default function WhyAfricanBonds() {
  const benefits = [
    {
      icon: ArrowTrendingUpIcon,
      title: "Higher Yields",
      description: "African government bonds often offer yields 2–3x higher than those in most developed markets.",
      color: "text-emerald-600"
    },
    
    {
      icon: GlobeAltIcon,
      title: "Diversification",
      description: "Access emerging market exposure and diversify your portfolio beyond traditional Western markets.",
      color: "text-purple-600"
    },
    {
      icon: SunIcon,
      title: "Shape Africa’s Future",
      description: "Your investment powers real progress, funding the infrastructure, services, and opportunities Africa needs to thrive",
      color: "text-blue-600"
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
          Africa’s growing economies offer a unique opportunity to earn strong returns, diversify your portfolio, and contribute to the continent’s development.
            
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


        <div className="text-xl text-gray-600 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
             
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The Opportunity is Massive—And So is the Diaspora’s Potential to Shape It!
          </p>
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
              <div className="text-3xl font-bold text-emerald-600 mb-2">$130 - 170B</div>
              <div className="text-sm text-gray-600">What Africa needs to build infrastructure like roads, hospitals & energy each year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">$68 - 108B</div>
              <div className="text-sm text-gray-600">Unmet funding needed to close the infrastructure gap each year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">$100B</div>
              <div className="text-sm text-gray-600">Capital sent back home, enough to close Africa’s infrastructure gap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">+2% GDP Boost</div>
              <div className="text-sm text-gray-600">It’s more than GDP—it’s dignity, mobility, health, and hope</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
