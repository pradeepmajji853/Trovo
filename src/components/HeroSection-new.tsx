import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  // Animation variants for text reveal
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  // Word animation for staggered reveal
  const words = ["Do", "you", "want", "your", "treasure", "back?"]

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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-400 opacity-5 rounded-full blur-3xl"
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
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline with Word Animation */}
            <div className="mb-8">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mr-4 relative"
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.2 }}
                >
                  {word}
                  {word === "treasure" && (
                    <>
                      <motion.div
                        className="absolute -top-2 -right-2 text-yellow-400 text-2xl"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          rotate: [0, 15, -15, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: 1.5
                        }}
                      >
                        💎
                      </motion.div>
                      <motion.div
                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-trovo-green to-trovo-green-light"
                        initial={{ scaleX: 0, originX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                      />
                    </>
                  )}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              Transform your unused credit card points into instant rewards. Trovo makes it simple, fast, and rewarding.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                className="group bg-trovo-green hover:bg-trovo-green-light text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Early Access →</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={false}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Phone Mockup */}
          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Phone Frame with realistic design */}
              <motion.div 
                className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-1 shadow-2xl"
                animate={{ 
                  y: [0, -8, 0],
                  rotateY: [0, 3, 0, -3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Phone Outer Frame */}
                <div className="w-full h-full bg-gray-800 rounded-[2.8rem] p-2">
                  {/* Screen with bezels */}
                  <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
                    {/* Actual Screen */}
                    <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10"></div>
                      
                      {/* Status Bar */}
                      <div className="h-10 bg-gray-50 flex items-center justify-between px-6 pt-2 text-xs font-medium text-gray-700">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                          </div>
                          <div className="w-6 h-3 border border-gray-700 rounded-sm">
                            <div className="w-full h-full bg-green-500 rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 bg-gradient-to-br from-white via-gray-50 to-trovo-green/10 relative overflow-hidden">
                        {/* Header */}
                        <div className="p-6 pb-4">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">Good morning! 👋</h3>
                              <p className="text-sm text-gray-600">Ready to unlock your treasure?</p>
                            </div>
                            <div className="w-10 h-10 bg-trovo-green rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">T</span>
                            </div>
                          </div>
                          
                          {/* Balance Card */}
                          <motion.div 
                            className="bg-gradient-to-r from-trovo-green to-trovo-green-light rounded-2xl p-5 text-white shadow-lg"
                            animate={{ 
                              scale: [1, 1.02, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <p className="text-sm opacity-90">Available Points</p>
                                <motion.p 
                                  className="text-2xl font-bold"
                                  animate={{ scale: [1, 1.05, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                                >
                                  12,450
                                </motion.p>
                              </div>
                              <div className="text-2xl">💎</div>
                            </div>
                            <div className="flex items-center text-sm opacity-90">
                              <span className="mr-2">≈ ₹1,245</span>
                              <motion.span 
                                className="text-green-200"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                +15% this month
                              </motion.span>
                            </div>
                          </motion.div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="px-6 pb-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Quick Actions</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <motion.div 
                              className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                              whileHover={{ scale: 1.02 }}
                              animate={{ y: [0, -2, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >
                              <div className="text-2xl mb-2">⚡</div>
                              <p className="text-xs font-medium text-gray-700">Redeem Points</p>
                            </motion.div>
                            <motion.div 
                              className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
                              whileHover={{ scale: 1.02 }}
                              animate={{ y: [0, -2, 0] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                            >
                              <div className="text-2xl mb-2">📱</div>
                              <p className="text-xs font-medium text-gray-700">Pay & Earn</p>
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Recent Activity */}
                        <div className="px-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Recent Activity</h4>
                          <div className="space-y-3">
                            {[
                              { icon: "🛒", title: "Amazon Purchase", points: "+125", time: "2m ago" },
                              { icon: "☕", title: "Starbucks", points: "+45", time: "1h ago" },
                            ].map((activity, index) => (
                              <motion.div 
                                key={index}
                                className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 2 + index * 0.3 }}
                              >
                                <div className="flex items-center">
                                  <div className="text-lg mr-3">{activity.icon}</div>
                                  <div>
                                    <p className="text-xs font-medium text-gray-900">{activity.title}</p>
                                    <p className="text-xs text-gray-500">{activity.time}</p>
                                  </div>
                                </div>
                                <span className="text-xs font-bold text-trovo-green">{activity.points}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Floating particles */}
                        <motion.div
                          className="absolute top-16 right-8 w-2 h-2 bg-trovo-green rounded-full opacity-60"
                          animate={{ 
                            y: [0, -20, 0],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        />
                        <motion.div
                          className="absolute bottom-20 left-8 w-1 h-1 bg-yellow-400 rounded-full"
                          animate={{ 
                            scale: [0, 1, 0],
                            x: [0, 10, 20],
                            y: [0, -10, -20]
                          }}
                          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-trovo-green bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                <span className="text-2xl">🏆</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <span className="text-xl">💰</span>
              </motion.div>

              <motion.div
                className="absolute top-20 -left-8 w-12 h-12 bg-purple-400 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-lg">⭐</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div 
            className="w-1 h-3 bg-trovo-green rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
