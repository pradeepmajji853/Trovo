import { motion } from 'framer-motion'

interface FeatureShowcaseProps {
  title: string
  description: string
  features: string[]
  mockupType: 'rewards' | 'cashback' | 'tappay' | 'sharing'
  gradient: string
  accentColor: string
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title,
  description,
  features,
  mockupType,
  gradient,
  accentColor
}) => {
  const mockupIcons = {
    rewards: '💳',
    cashback: '💰',
    tappay: '📱',
    sharing: '👥'
  }

  const mockupData = {
    rewards: {
      mainStat: '₹12,450',
      subStat: 'Total Rewards',
      items: [
        { label: 'Bill Payments', value: '5x rewards' },
        { label: 'Shopping', value: '3x rewards' },
        { label: 'Travel', value: '4x rewards' }
      ]
    },
    cashback: {
      mainStat: '1.0%',
      subStat: 'UPI Cashback',
      items: [
        { label: 'Today Earned', value: '₹127' },
        { label: 'This Month', value: '₹2,340' },
        { label: 'Transactions', value: '156' }
      ]
    },
    tappay: {
      mainStat: '₹2,000',
      subStat: 'Tap Limit',
      items: [
        { label: 'No PIN Required', value: 'Up to ₹2K' },
        { label: 'Success Rate', value: '99.9%' },
        { label: 'Speed', value: '<2 seconds' }
      ]
    },
    sharing: {
      mainStat: '4 Friends',
      subStat: 'Shared Circle',
      items: [
        { label: 'Total Limit', value: '₹50,000' },
        { label: 'Auto-Settle', value: 'Monthly' },
        { label: 'Security', value: 'Bank-grade' }
      ]
    }
  }

  const currentMockup = mockupData[mockupType]

  return (
    <div className={`relative bg-gradient-to-br ${gradient} rounded-3xl p-8 text-white overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 border border-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 border border-white rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <motion.div
            className="text-5xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {mockupIcons[mockupType]}
          </motion.div>
          
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-lg opacity-90 mb-6">{description}</p>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Mockup */}
        <div className="relative">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-xl font-bold">Trovo</div>
              <div className="text-2xl">{mockupIcons[mockupType]}</div>
            </div>

            {/* Main Stat */}
            <div className="text-center mb-6">
              <motion.div
                className="text-4xl font-bold mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentMockup.mainStat}
              </motion.div>
              <div className="text-white/80">{currentMockup.subStat}</div>
            </div>

            {/* Feature Items */}
            <div className="space-y-3">
              {currentMockup.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between bg-white/5 rounded-lg p-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-white/80 text-sm">{item.label}</span>
                  <span className="text-white font-semibold text-sm">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Accent */}
          <motion.div
            className="absolute -top-3 -right-3 w-12 h-12 rounded-xl flex items-center justify-center border border-white/20"
            style={{ backgroundColor: accentColor }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FeatureShowcase
