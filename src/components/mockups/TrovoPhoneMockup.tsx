import { motion } from 'framer-motion'

const TrovoPhoneMockup: React.FC = () => {
  return (
    <motion.div
      className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-1.5 sm:p-2 md:p-3 shadow-2xl mx-auto"
      animate={{ 
        rotateY: [0, 2, 0, -2, 0],
        scale: [1, 1.005, 1]
      }}
      transition={{ 
        duration: 10, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
        {/* Status Bar */}
        <div className="h-5 sm:h-6 md:h-8 bg-gray-100 flex items-center justify-between px-2 sm:px-3 md:px-6 text-xs font-medium text-gray-900">
          <span className="text-xs">9:41</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 sm:w-3 md:w-4 h-1 sm:h-1.5 md:h-2 bg-trovo-green rounded-sm"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-3 sm:w-4 md:w-6 h-1.5 sm:h-2 md:h-3 border border-gray-400 rounded-sm">
              <div className="w-2 sm:w-3 md:w-4 h-0.5 sm:h-1 md:h-2 bg-trovo-green rounded-sm m-0.5"></div>
            </div>
          </div>
        </div>

        {/* App Content */}
        <div className="h-full bg-gradient-to-br from-white via-gray-50 to-trovo-green/5 relative overflow-hidden">
          {/* Header */}
          <div className="p-2 sm:p-3 md:p-4 lg:p-6 pb-1 sm:pb-2 md:pb-3 lg:pb-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6">
              <div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-1 text-xs sm:text-sm">👋</span> Good morning!
                </h3>
                <p className="text-xs sm:text-xs md:text-sm text-gray-600 hidden sm:block">Ready to unlock your treasure?</p>
              </div>
              <div className="w-6 sm:w-8 md:w-10 h-6 sm:h-8 md:h-10 bg-trovo-green rounded-full flex items-center justify-center">
                <span className="text-white text-xs sm:text-xs md:text-sm font-bold">T</span>
              </div>
            </div>
            
            {/* Balance Card - More compact on mobile */}
            <motion.div 
              className="bg-gradient-to-r from-trovo-green to-emerald-600 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-5 text-white shadow-lg mb-2 sm:mb-3 md:mb-4 lg:mb-6"
              animate={{ 
                scale: [1, 1.005, 1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-start mb-1 sm:mb-2 md:mb-3">
                <div>
                  <p className="text-xs opacity-90">Total Rewards</p>
                  <motion.p 
                    className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold"
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    ₹12,450
                  </motion.p>
                </div>
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl">💎</div>
              </div>
              <div className="flex items-center text-xs opacity-90">
                <span className="mr-1 sm:mr-2">≈ 12,450 Points</span>
                <motion.span 
                  className="text-green-200 text-xs"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  +15%
                </motion.span>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Actions - Simplified for mobile */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-6 pb-1 sm:pb-2 md:pb-3 lg:pb-4">
            <h4 className="text-xs font-semibold text-gray-700 mb-1 sm:mb-2 md:mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
              <motion.div 
                className="bg-white rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-sm border border-gray-100"
                whileHover={{ scale: 1.02 }}
                animate={{ y: [0, -0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-0.5 sm:mb-1 md:mb-2">⚡</div>
                <p className="text-xs font-medium text-gray-700">Redeem</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-md sm:rounded-lg md:rounded-xl p-1.5 sm:p-2 md:p-3 shadow-sm border border-gray-100"
                whileHover={{ scale: 1.02 }}
                animate={{ y: [0, -0.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-0.5 sm:mb-1 md:mb-2">📱</div>
                <p className="text-xs font-medium text-gray-700">Pay & Earn</p>
              </motion.div>
            </div>
          </div>
          
          {/* Recent Activity - More condensed for mobile */}
          <div className="px-2 sm:px-3 md:px-4 lg:px-6">
            <h4 className="text-xs font-semibold text-gray-700 mb-1 sm:mb-2 md:mb-3">Recent Activity</h4>
            <div className="space-y-1 sm:space-y-2 md:space-y-3">
              {[
                { icon: "🛒", title: "Amazon", points: "+125", time: "2m" },
                ...(window.innerWidth >= 640 ? [{ icon: "☕", title: "Starbucks", points: "+45", time: "1h" }] : [])
              ].map((activity, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center justify-between bg-white rounded-md sm:rounded-lg p-1.5 sm:p-2 md:p-3 shadow-sm"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  <div className="flex items-center">
                    <div className="text-xs sm:text-sm md:text-base lg:text-lg mr-1.5 sm:mr-2 md:mr-3">{activity.icon}</div>
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

          {/* Floating Elements - Reduced for mobile performance */}
          <motion.div
            className="absolute top-12 sm:top-16 right-4 sm:right-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-trovo-green rounded-full opacity-60"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 w-1 h-1 bg-yellow-400 rounded-full"
            animate={{ 
              scale: [0, 1, 0],
              x: [0, 5, 10],
              y: [0, -5, -10]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </div>
      </div>

      {/* Phone details - Smaller for mobile */}
      <div className="absolute -top-0.5 sm:-top-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
      <div className="absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
    </motion.div>
  )
}

export default TrovoPhoneMockup
