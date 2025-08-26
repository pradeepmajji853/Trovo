import { motion } from 'framer-motion'

interface SharedCreditMockupProps {
  isInView: boolean
  isHovered?: boolean  // Made optional since we're not using infinite animations
}

const SharedCreditMockup: React.FC<SharedCreditMockupProps> = ({ isInView }) => {
  return (
    <motion.div
      className="relative w-full max-w-sm lg:max-w-md h-[350px] lg:h-[450px] bg-white/95 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div 
          className="text-2xl lg:text-3xl font-black text-gray-900"
        >
          Trovo
        </div>
        <div 
          className="text-3xl lg:text-4xl"
        >
          👥
        </div>
      </div>
      
      {/* Shared Credit Feature */}
      <motion.div 
        className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-5 text-white shadow-lg mb-4"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold">Shared Credit Cards</h4>
          <div className="w-3 h-3 bg-white rounded-full" />
        </div>
        <div className="text-2xl font-bold mb-2">Smart group payments</div>
        <p className="text-sm opacity-90">Safe sharing with auto-settlements</p>
      </motion.div>
      
      {/* Friend Circle */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h5 className="text-sm font-semibold text-gray-700">Friend Circle</h5>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">4 active</span>
        </div>
        
        {/* Friend Avatars */}
        <div className="flex items-center space-x-2 mb-3">
          {['👨‍💻', '👩‍🎨', '👨‍🔬', '👩‍💼'].map((avatar, idx) => (
            <motion.div
              key={idx}
              className="w-10 h-10 bg-trovo-green/20 rounded-full flex items-center justify-center border-2 border-white shadow-sm"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 1 + idx * 0.1 }}
            >
              <span className="text-sm">{avatar}</span>
            </motion.div>
          ))}
          <motion.div
            className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-gray-500 text-xs">+</span>
          </motion.div>
        </div>
        
        <div className="text-center">
          <motion.p 
            className="text-2xl font-bold text-gray-900 mb-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ₹2,450
          </motion.p>
          <p className="text-xs text-gray-600">Total credit limit shared</p>
        </div>
      </div>
      
      {/* Recent Group Expenses */}
      <div className="space-y-2">
        <h5 className="text-sm font-semibold text-gray-700 mb-2">Recent Group Expenses</h5>
        {[
          { expense: "Dinner at Pizza Hut", amount: "₹1,200", split: "4 friends", status: "Auto-settled" },
          { expense: "Movie Tickets", amount: "₹800", split: "3 friends", status: "Pending" }
        ].map((expense, idx) => (
          <motion.div
            key={idx}
            className="flex items-center justify-between bg-white border border-gray-100 rounded-lg p-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 + idx * 0.2 }}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                expense.status === 'Auto-settled' ? 'bg-green-100' : 'bg-yellow-100'
              }`}>
                <span className={`text-xs ${
                  expense.status === 'Auto-settled' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {expense.status === 'Auto-settled' ? '✓' : '⏳'}
                </span>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-900">{expense.expense}</p>
                <p className="text-xs text-gray-500">{expense.amount} • {expense.split}</p>
              </div>
            </div>
            <span className={`text-xs font-medium ${
              expense.status === 'Auto-settled' ? 'text-green-600' : 'text-yellow-600'
            }`}>
              {expense.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Auto-Settlement Status */}
      <motion.div
        className="mt-4 bg-purple-50 border border-purple-200 rounded-xl p-3 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="text-lg mb-1">🤝</div>
        <div className="text-xs font-medium text-purple-800">Auto-settlement enabled</div>
        <div className="text-xs text-purple-600">Next settlement on 30th</div>
      </motion.div>
    </motion.div>
  )
}

export default SharedCreditMockup
