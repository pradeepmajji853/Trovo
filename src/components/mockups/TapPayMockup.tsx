import { motion } from 'framer-motion'

interface TapPayMockupProps {
  isInView: boolean
  isHovered: boolean
}

const TapPayMockup: React.FC<TapPayMockupProps> = ({ isInView, isHovered }) => {
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
          📱
        </motion.div>
      </div>
      
      {/* Tap to Pay Feature */}
      <motion.div 
        className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg mb-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">Tap to Pay</h4>
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="text-2xl font-bold mb-2">Quick tap payments</div>
        <p className="text-sm opacity-90">No PIN up to ₹2000 per transaction</p>
      </motion.div>
      
      {/* Payment Demo */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="text-center">
          <motion.div 
            className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center"
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                "0 0 0 20px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white text-2xl">📱</span>
          </motion.div>
          <p className="text-sm font-medium text-gray-700 mb-2">Ready to Pay</p>
          <motion.p 
            className="text-2xl font-bold text-gray-900 mb-1"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ₹1,250
          </motion.p>
          <p className="text-xs text-gray-500">Just tap your phone to pay</p>
        </div>
      </div>
      
      {/* Recent Tap Payments */}
      <div className="space-y-2">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Recent Tap Payments</h5>
        {[
          { place: "Coffee Day", amount: "₹185", status: "Success", time: "5m ago" },
          { place: "Metro Station", amount: "₹45", status: "Success", time: "2h ago" }
        ].map((payment, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 + idx * 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xs">✓</span>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">{payment.place}</p>
                <p className="text-xs text-gray-500">{payment.amount} • {payment.time}</p>
              </div>
            </div>
            <span className="text-xs font-medium text-green-600">{payment.status}</span>
          </motion.div>
        ))}
      </div>

      {/* Daily Limit Status */}
      <motion.div
        className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium text-orange-800">Daily Limit</div>
            <div className="text-xs text-orange-600">₹1,770 remaining</div>
          </div>
          <div className="text-sm">⚡</div>
        </div>
        <div className="mt-2 bg-orange-200 rounded-full h-1.5">
          <motion.div 
            className="bg-orange-500 h-1.5 rounded-full"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "11.5%" } : {}}
            transition={{ duration: 1.5, delay: 2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TapPayMockup
