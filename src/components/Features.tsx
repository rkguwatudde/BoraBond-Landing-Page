'use client'

import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  GlobeAltIcon, 
  ClockIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline'

export default function Features() {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Institutional Security",
      description: "Bank-grade security with multi-factor authentication and encrypted transactions to protect your investments.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      icon: ChartBarIcon,
      title: "Real-Time Analytics",
      description: "Comprehensive portfolio tracking with detailed performance metrics and market insights.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Competitive Fees",
      description: "Low platform fees starting at 0.5% with transparent pricing and no hidden charges.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: GlobeAltIcon,
      title: "Global Access",
      description: "Access bonds from 15+ African countries with detailed country risk assessments and ratings.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: ClockIcon,
      title: "24/7 Trading",
      description: "Trade African government bonds around the clock with our automated matching engine.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: UserGroupIcon,
      title: "Expert Support",
      description: "Dedicated relationship managers and investment advisors to guide your African bond strategy.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BoraBond?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with deep African market expertise 
            to deliver the best possible investment experience.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Value Props */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">12%+</div>
              <div className="text-emerald-100">Average Annual Returns</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$1,000</div>
              <div className="text-emerald-100">Minimum Investment</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5-10 Years</div>
              <div className="text-emerald-100">Typical Bond Terms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
