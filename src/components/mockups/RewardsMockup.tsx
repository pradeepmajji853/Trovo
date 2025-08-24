import { motion } from 'framer-motion'

interface RewardsMockupProps {
  isInView: boolean
  isHovered: boolean
}

const RewardsMockup: React.FC<RewardsMockupProps> = ({ isInView, isHovered }) => {
  return (
    <motion.div
      className="relative w-full max-w-sm lg:max-w-md h-[350px] lg:h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl"
      animate={{ 
        y: isHovered ? [0, -8, 0] : [0, -4, 0]
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <motion.div 
          className="text-2xl lg:text-3xl font-black text-gray-900"
          animate={{ opacity: [1, 0.9, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Trovo
        </motion.div>
        <motion.div 
          className="text-3xl lg:text-4xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity }
          }}
        >
          💳
        </motion.div>
      </div>
      
      {/* Credit Card Rewards Dashboard */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg mb-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">Credit Card Rewards</h4>
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="text-2xl font-bold mb-2">Smart rewards system</div>
        <p className="text-sm opacity-90">Transform every payment into earnings</p>
      </motion.div>
      
      {/* Reward Categories */}
      <div className="space-y-3">
        {[
          { category: "Bill Payments", multiplier: "5x", earned: "₹245" },
          { category: "Online Shopping", multiplier: "3x", earned: "₹189" },
          { category: "Fuel & Travel", multiplier: "4x", earned: "₹156" }
        ].map((reward, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between bg-gray-50 rounded-xl p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-trovo-green rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{reward.multiplier}</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{reward.category}</p>
                <p className="text-xs text-gray-500">This month</p>
              </div>
            </div>
            <span className="text-sm font-bold text-trovo-green">{reward.earned}</span>
          </motion.div>
        ))}
      </div>

      {/* Quick Convert Button */}
      <motion.div
        className="mt-4 bg-trovo-green/10 border border-trovo-green/30 rounded-xl p-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="text-2xl mb-2">⚡</div>
        <div className="text-sm font-bold text-trovo-green">Convert to Cash</div>
        <div className="text-xs text-gray-600">12,450 points available</div>
      </motion.div>
    </motion.div>
  )
}

export default RewardsMockup
