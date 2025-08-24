import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EarlyAccessSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      console.log('Email submitted:', email)
    }, 1500)
  }

  return (
    <section className="relative py-20 overflow-hidden" ref={ref} id="early-access">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-trovo-green via-trovo-green-200 to-white">
        <div className="absolute inset-0 bg-gradient-to-tl from-trovo-green/10 via-transparent to-white/30"></div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/15 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Waitlist for{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-trovo-green relative z-10">Trovo</span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-trovo-green rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be the first to maximize your credit card rewards, earn 1% UPI cashback, and experience tap-to-pay up to ₹2000. 
            <br className="hidden md:block" />
            <motion.strong 
              className="text-gray-900"
              animate={{ 
                textShadow: [
                  "0 0 5px rgba(29, 185, 84, 0.3)", 
                  "0 0 20px rgba(29, 185, 84, 0.6)", 
                  "0 0 5px rgba(29, 185, 84, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Launching soon in India!
            </motion.strong>
          </motion.p>

          {!isSubmitted ? (
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className={`flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 transition-all duration-300 backdrop-blur-sm border ${
                    error 
                      ? 'ring-2 ring-red-400 focus:ring-red-400 border-red-400 bg-white/90' 
                      : 'focus:ring-white focus:ring-opacity-50 border-white/30 bg-white/80 hover:bg-white/90'
                  }`}
                  disabled={isLoading}
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-xl ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-gray-800 hover:scale-105 hover:shadow-2xl'
                  }`}
                  whileHover={!isLoading ? { 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  } : {}}
                  whileTap={!isLoading ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Joining...</span>
                    </div>
                  ) : (
                    <motion.span
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(255, 255, 255, 0)",
                          "0 0 10px rgba(255, 255, 255, 0.3)",
                          "0 0 0px rgba(255, 255, 255, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Join Waitlist
                    </motion.span>
                  )}
                </motion.button>
              </form>
              
              {error && (
                <motion.p 
                  className="text-red-700 text-sm mt-2 text-center bg-red-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-red-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {error}
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-xl"
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.1)",
                    "0 15px 40px rgba(0,0,0,0.15)", 
                    "0 10px 30px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="text-6xl mb-4"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">You're In!</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Welcome to the treasure hunt! We'll notify you when Trovo launches.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    🔐
                  </motion.span>
                  <span>Your spot is secured</span>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Trust indicators */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>🔒</span>
              <span>Bank-grade security</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>📱</span>
              <span>Mobile-first design</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300 border border-gray-200"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>🇮🇳</span>
              <span>Made for India</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
