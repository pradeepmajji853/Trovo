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
    <section className="section-padding bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white relative overflow-hidden" ref={ref} id="early-access">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 -left-40 w-96 h-96 bg-white opacity-5 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join the Waitlist for{' '}
            <span className="relative">
              Trovo
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-white"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-12 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Be the first to maximize your credit card rewards, earn 1% UPI cashback, and experience tap-to-pay up to ₹2000. 
            <br className="hidden md:block" />
            <strong>Launching soon in India!</strong>
          </motion.p>

          {!isSubmitted ? (
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className={`flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 transition-all duration-300 ${
                    error 
                      ? 'ring-2 ring-red-400 focus:ring-red-400' 
                      : 'focus:ring-white focus:ring-opacity-30'
                  }`}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`bg-white text-trovo-green font-semibold px-8 py-4 rounded-full transition-all duration-300 transform ${
                    isLoading 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-gray-100 hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-trovo-green border-t-transparent rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </div>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </form>
              
              {error && (
                <p className="text-red-200 text-sm mt-2 text-center">
                  {error}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white bg-opacity-20 backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-30">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold mb-2">You're In!</h3>
                <p className="text-lg opacity-90 mb-4">
                  Welcome to the treasure hunt! We'll notify you when Trovo launches.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm opacity-75">
                  <span>🔐</span>
                  <span>Your spot is secured</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Trust indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm opacity-75">
            <div className="flex items-center space-x-2">
              <span>🔒</span>
              <span>Bank-grade security</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📱</span>
              <span>Mobile-first design</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>🇮🇳</span>
              <span>Made for India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
