import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Careers', path: '#' },
      { name: 'Contact', path: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Security', path: '#' }
    ],
    support: [
      { name: 'Help Center', path: '#' },
      { name: 'Community', path: '#' },
      { name: 'Status', path: '#' },
      { name: 'Documentation', path: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <motion.img
                src="/image.png"
                alt="Trovo Logo"
                className="h-8 w-auto filter brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-xl font-bold">Trovo</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              India's first comprehensive fintech solution. Maximize credit card rewards, earn 1% UPI cashback, 
              tap-to-pay up to ₹2000, and safely share cards with friends.
              <br /><br />
              <span className="text-trovo-green font-semibold">🚀 Launching Soon!</span>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-trovo-green transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-trovo-green transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-trovo-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-trovo-green transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {currentYear} Trovo. All rights reserved. Pre-launch landing page - Product coming soon to India.
          </motion.p>
          
          <motion.div 
            className="flex items-center space-x-4 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span>In Development</span>
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
