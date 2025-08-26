import { motion } from 'framer-motion'
import { useState } from 'react'

const FloatingWaitlistButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  const scrollToEarlyAccess = () => {
    const earlyAccessSection = document.querySelector('#early-access')
    if (earlyAccessSection) {
      earlyAccessSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, duration: 0.5 }}
    >
      <motion.button
        onClick={scrollToEarlyAccess}
        className="bg-trovo-green text-white px-6 py-4 rounded-full shadow-2xl hover:bg-trovo-green-dark transition-all duration-300 flex items-center space-x-3 group"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="font-bold text-lg">Join Waitlist</span>
        <div className="w-2 h-2 bg-white rounded-full" />
        
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsVisible(false)
          }}
          className="ml-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs opacity-70 hover:opacity-100 transition-opacity"
        >
          ×
        </button>
      </motion.button>

      {/* Notification badge - Simplified for performance */}
      <div
        className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold"
      >
        New!
      </div>
    </motion.div>
  )
}

export default FloatingWaitlistButton
