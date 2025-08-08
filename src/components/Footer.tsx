'use client'

import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import NewsletterSubscription from './NewsletterSubscription'
// If you haven't already, run: npm install react-icons
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Blog', href: '/blog' }
    ],
    products: [
      { name: 'African Bonds', href: '#bonds' },
      { name: 'Portfolio Management', href: '#portfolio' },
      { name: 'Analytics', href: '#analytics' },
     
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Status', href: '#status' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Risk Disclosure', href: '#risk' },
      { name: 'Compliance', href: '#compliance' }
    ]
  }


  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'YouTube', href: '#', icon: FaYoutube }
  ];

  // ...

  // In your return statement, replace the placeholder with:
  // Social Links Section Example:
  // <div className="flex space-x-4 mt-6">
  //   {socialLinks.map((link) => (
  //     <a
  //       key={link.name}
  //       href={link.href}
  //       aria-label={link.name}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full"
  //     >
  //       <link.icon />
  //     </a>
  //   ))}
  // </div>

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">BoraBond</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your gateway to African government bonds. Invest in Africa&apos;s growth 
              while earning attractive returns with institutional-grade security.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-full"
                >
                  <link.icon />
                </a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 mr-3 text-emerald-400" />
                <span className="text-sm">266 Waverly St, 333, Framingham, MA 01702</span>
              </div>
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 mr-3 text-emerald-400" />
                <span className="text-sm">(313) 247-4604</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 mr-3 text-emerald-400" />
                <span className="text-sm">info@borabond.com</span>
              </div>
            </div>
          </motion.div>
          
          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Newsletter Signup */}
        <NewsletterSubscription />
        
        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2025 BoraBond, LLC. All rights reserved.
            </p>
            <div className="flex space-x-4">
              {footerLinks.legal.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm font-bold text-gray-300 hover:text-white">
                  <social.icon />
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        {/* SEC Notice */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
            BoraBond, LLC is an SEC Registered Investment Adviser. Registration with the SEC does not imply 
            a certain level of skill or training. All investments involve risk, including possible loss of principal. 
            Past performance does not guarantee future results. Please consider your investment objectives carefully 
            before investing.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
