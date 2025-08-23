import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  const words = ["Maximize", "your", "financial", "rewards"]

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-trovo-green opacity-10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-trovo-green-light opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating elements that follow mouse */}
        <motion.div
          className="absolute w-4 h-4 bg-trovo-green rounded-full opacity-30"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute w-6 h-6 bg-trovo-green-light rounded-full opacity-20"
          style={{ top: '20%', right: '20%' }}
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 30 }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated headline */}
            <div className="mb-8">
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-trovo-green mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                With Trovo ✨
              </motion.div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Get cash from credit card points, 1% guaranteed UPI cashback, tap-to-pay up to ₹2000, 
              and safely share cards with friends. Your complete fintech solution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Early Access</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                className="border-2 border-trovo-green text-trovo-green font-semibold px-8 py-4 rounded-full hover:bg-trovo-green hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">500+</div>
                <div className="text-sm md:text-base text-gray-600">Users Surveyed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">&lt;3s</div>
                <div className="text-sm md:text-base text-gray-600">Redemption Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">100%</div>
                <div className="text-sm md:text-base text-gray-600">Digital First</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                className="relative w-80 h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-gray-100 flex items-center justify-between px-6 text-xs font-medium text-gray-900">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-2 bg-trovo-green rounded-sm"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-6 h-3 border border-gray-400 rounded-sm">
                        <div className="w-4 h-2 bg-trovo-green rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="h-full bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-white"></div>
                      <div className="absolute top-32 right-8 w-16 h-16 rounded-full border border-white"></div>
                      <div className="absolute bottom-20 left-6 w-12 h-12 rounded-full border border-white"></div>
                    </div>

                    {/* App Header */}
                    <div className="p-6 pt-4">
                      <div className="flex items-center justify-between mb-8">
                        <motion.div
                          className="text-2xl font-bold"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Trovo
                        </motion.div>
                        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-sm">👤</span>
                        </div>
                      </div>

                      {/* Balance Card */}
                      <motion.div
                        className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 mb-6"
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <div className="text-sm opacity-80 mb-2">Credit Card Points</div>
                        <div className="text-3xl font-bold mb-1">34,280</div>
                        <div className="text-sm opacity-80">≈ ₹3,428 cash value</div>
                      </motion.div>

                      {/* UPI Cashback Card */}
                      <motion.div
                        className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-4 mb-6"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm opacity-80">UPI Cashback (1%)</div>
                            <div className="text-xl font-bold">₹1,245</div>
                          </div>
                          <div className="text-2xl">💰</div>
                        </div>
                      </motion.div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <motion.div
                          className="bg-white bg-opacity-10 rounded-xl p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-2xl mb-2">💳</div>
                          <div className="text-sm">Convert Points</div>
                        </motion.div>
                        <motion.div
                          className="bg-white bg-opacity-10 rounded-xl p-4 text-center"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-2xl mb-2">📱</div>
                          <div className="text-sm">Tap to Pay</div>
                        </motion.div>
                      </div>

                      {/* Recent Activity */}
                      <div className="space-y-3">
                        <div className="text-sm opacity-80">Recent Activity</div>
                        <motion.div
                          className="flex items-center justify-between py-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <span className="text-xs">💳</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Bill Payment Reward</div>
                              <div className="text-xs opacity-70">3 hours ago</div>
                            </div>
                          </div>
                          <div className="text-sm font-bold">+₹285</div>
                        </motion.div>
                        <motion.div
                          className="flex items-center justify-between py-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.5 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <span className="text-xs">💰</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium">UPI Cashback</div>
                              <div className="text-xs opacity-70">5 hours ago</div>
                            </div>
                          </div>
                          <div className="text-sm font-bold">+₹12</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone details */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
              </motion.div>

              {/* Floating elements around phone */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-trovo-green rounded-full flex items-center justify-center text-white text-sm"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-trovo-green-light rounded-full flex items-center justify-center text-white"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                💎
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
