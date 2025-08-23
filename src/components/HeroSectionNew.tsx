import { motion } from 'framer-motion'

const HeroSection: React.FC = () => {
  const words = ["Transform", "your", "financial", "experience"]

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
    <section className="relative min-h-screen bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 opacity-30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-100 opacity-20 rounded-full blur-3xl"
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
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                with Trovo
              </motion.div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Convert credit card points to cash, earn guaranteed UPI cashback, 
              and enjoy seamless tap-to-pay experiences. All in one secure platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const earlyAccessSection = document.querySelector('#early-access')
                  if (earlyAccessSection) {
                    earlyAccessSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Join Early Access
              </motion.button>
              
              <motion.button
                className="border-2 border-emerald-600 text-emerald-600 font-semibold px-8 py-4 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Simple Illustration */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Phone Mockup */}
              <motion.div
                className="relative w-80 h-[500px] bg-white rounded-3xl shadow-2xl border border-gray-200 p-4"
                animate={{ 
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Status Bar */}
                <div className="h-6 bg-gray-50 rounded-t-2xl flex items-center justify-between px-4 text-xs text-gray-600 mb-4">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-emerald-500 rounded-sm"></div>
                    <div className="w-6 h-3 border border-gray-400 rounded-sm">
                      <div className="w-4 h-2 bg-emerald-500 rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Trovo</h3>
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">👤</span>
                    </div>
                  </div>

                  {/* Balance Cards */}
                  <motion.div
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="text-sm opacity-90 mb-2">Total Rewards</div>
                    <div className="text-3xl font-bold">₹8,425</div>
                    <div className="text-sm opacity-90">Available for withdrawal</div>
                  </motion.div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div
                      className="bg-green-50 rounded-xl p-4 text-center border border-green-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="text-2xl mb-2">💳</div>
                      <div className="text-sm font-medium text-gray-700">Points to Cash</div>
                    </motion.div>
                    <motion.div
                      className="bg-green-50 rounded-xl p-4 text-center border border-green-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      <div className="text-2xl mb-2">📱</div>
                      <div className="text-sm font-medium text-gray-700">Tap to Pay</div>
                    </motion.div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-600">Recent Activity</h4>
                    <motion.div
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 }}
                    >
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-xs">💰</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">UPI Cashback</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                      <div className="text-sm font-bold text-emerald-600">+₹15</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
