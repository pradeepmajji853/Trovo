import { motion } from 'framer-motion'
import { useState } from 'react'

const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      className="bg-gradient-to-r from-trovo-green to-trovo-green-dark text-white py-3 px-4 relative overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-0 w-40 h-full bg-white/10 transform skew-x-12"
          animate={{ x: ['0%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">🚀 LIMITED BETA ACCESS</span>
          </motion.div>
          
          <div className="hidden md:block w-px h-4 bg-white/30"></div>
          
          <div className="text-sm">
            <span className="font-medium">First 5,000 users get lifetime premium features free!</span>
            <span className="ml-2 opacity-80">Only 2,153 spots left</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.button
            className="bg-white text-trovo-green px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const earlyAccessSection = document.querySelector('#early-access')
              if (earlyAccessSection) {
                earlyAccessSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Join Now
          </motion.button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default AnnouncementBanner
