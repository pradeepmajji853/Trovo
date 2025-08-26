import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Data Security', path: '/data-security' }
  ]

  const complianceInfo = [
    { label: 'PCI DSS Compliant', description: 'Secure payment processing' },
    { label: 'ISO 27001 Certified', description: 'Information security management' },
    { label: 'RBI Guidelines', description: 'Data localization compliant' },
    { label: 'CIBIL 675+', description: 'Minimum score for credit features' }
  ]

  return (
    <footer className="bg-gray-900 text-white" ref={ref}>
      <div className="container-custom">
        {/* Main Footer Content */}
        <motion.div 
          className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.img
                src="/image.png"
                alt="Trovo Logo"
                className="h-8 w-auto filter brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-xl font-bold">Trovo</span>
            </motion.div>
            <motion.p 
              className="text-gray-400 leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Trovo Fintech Private Limited<br />
              India's comprehensive fintech solution for credit card rewards, UPI cashback, and secure payments.
            </motion.p>
            
            <motion.div 
              className="text-sm text-gray-500 space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>📧 Support: support@trovo.online</p>
              <p>📞 Grievance Officer: Available 48h response</p>
              <p>🇮🇳 Made in India | Data stored in India</p>
            </motion.div>
          </motion.div>

          {/* Legal & Policies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-trovo-green transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-6 text-sm text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="mb-2">🔒 Your Rights:</p>
              <ul className="space-y-1 text-xs">
                <li>• Access & correct your data</li>
                <li>• Request data deletion</li>
                <li>• Opt-out of marketing</li>
                <li>• File grievances (30-day resolution)</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Compliance & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Security & Compliance</h3>
            <div className="space-y-3">
              {complianceInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-sm font-medium text-trovo-green">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-6 text-xs text-gray-500"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <p>🛡️ End-to-end encryption</p>
              <p>🔐 Multi-factor authentication</p>
              <p>📍 Data localized in India</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 py-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
          >
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} Trovo Fintech Private Limited. All rights reserved.</p>
              <p className="text-xs mt-1">Services subject to eligibility criteria. Age 18+, PAN mandatory.</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-trovo-green font-medium">🚀 Launching Soon in India</p>
              <p className="text-xs mt-1">Refunds within 21 working days | Grievances resolved in 30 days</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
