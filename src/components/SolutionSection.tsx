import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const SolutionSection: React.FC = () => {
  const containerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const solutions = [
    {
      id: 1,
      title: "Credit Card Rewards",
      subtitle: "Turn Bills into Earnings",
      icon: "💳",
      description: "Transform every credit card payment into a rewarding experience. Our intelligent reward system maximizes your earnings while streamlining your financial management.",
      benefits: ["Enhanced rewards on bill payments", "Instant cash conversion", "Maximize yearly savings potential"],
      gradient: "from-white via-trovo-green-50 to-white",
      accentColor: "#1DB954",
      stats: "Smart rewards system",
      bgPattern: "rewards"
    },
    {
      id: 2,
      title: "Guaranteed UPI Cashback", 
      subtitle: "Every Payment Pays Back",
      icon: "💰",
      description: "Experience the simplicity of guaranteed returns on every UPI transaction. No complex conditions, no spending thresholds - just pure cashback on every payment.",
      benefits: ["Guaranteed cashback on UPI", "Zero spending limits", "Consistent monthly returns"],
      gradient: "from-trovo-green-50 via-white to-trovo-green-50",
      accentColor: "#1DB954",
      stats: "Guaranteed cashback",
      bgPattern: "cashback"
    },
    {
      id: 3,
      title: "Tap to Pay",
      subtitle: "No PIN, Just Pay",
      icon: "📱",
      description: "Revolutionary contactless payments with zero friction. Your smartphone becomes your ultimate payment companion - faster than cards, simpler than cash.",
      benefits: ["Completely PIN-free payments", "Quick instant transactions", "Faster than traditional cards"],
      gradient: "from-white via-gray-50 to-trovo-green-50",
      accentColor: "#1DB954",
      stats: "Lightning fast payments",
      bgPattern: "tap"
    },
    {
      id: 4,
      title: "Shared Credit Cards",
      subtitle: "Smart Group Spending",
      icon: "👥",
      description: "Enable secure credit sharing with friends while maintaining complete financial control. Smart auto-debit ensures everyone pays their share automatically.",
      benefits: ["Secure friend credit sharing", "Automated monthly settlements", "Safe shared spending"],
      gradient: "from-trovo-green-50 via-gray-50 to-white",
      accentColor: "#1DB954",
      stats: "Smart group payments",
      bgPattern: "sharing"
    }
  ]

  return (
    <section ref={containerRef} className="relative w-full">
      {/* Enhanced Section Header */}
      <div className="py-24 md:py-32 bg-white w-full">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="bg-trovo-green/10 text-trovo-green px-6 py-3 rounded-full text-lg font-semibold border border-trovo-green/20">
              Four Revolutionary Solutions
            </span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            The Trovo
            <br />
            <span className="bg-gradient-to-r from-trovo-green to-emerald-600 bg-clip-text text-transparent">
              Solution
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Four groundbreaking financial solutions designed to maximize your earnings, 
            simplify your payments, and revolutionize how you manage money
          </motion.p>
          
          {/* Stats Preview */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {solutions.map((solution) => (
              <motion.div
                key={solution.id}
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-trovo-green/30 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-3">{solution.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{solution.stats}</div>
                <div className="text-sm font-medium text-gray-600">{solution.title}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Redesigned Cards for Better Readability */}
      <div className="relative w-full" style={{ scrollSnapType: 'y mandatory' }}>
        {solutions.map((solution, index) => (
          <div key={solution.id} style={{ scrollSnapAlign: 'start' }}>
            <SolutionCard
              solution={solution}
              index={index}
              isHovered={hoveredCard === solution.id}
              onHover={() => setHoveredCard(solution.id)}
              onLeave={() => setHoveredCard(null)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

interface SolutionCardProps {
  solution: {
    id: number
    title: string
    subtitle: string
    icon: string
    description: string
    benefits: string[]
    gradient: string
    accentColor: string
    stats: string
    bgPattern: string
  }
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  solution, 
  index,
  isHovered,
  onHover,
  onLeave
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.2 })

  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <motion.div
        ref={cardRef}
        className="w-full h-full p-2 md:p-4 lg:p-6"
        onHoverStart={onHover}
        onHoverEnd={onLeave}
      >
        <motion.div
          className={`relative overflow-hidden bg-gradient-to-br ${solution.gradient} text-white w-full h-full flex items-center rounded-2xl lg:rounded-3xl shadow-2xl`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          whileHover={{ scale: 1.001 }}
          style={{ maxHeight: 'calc(100vh - 40px)', minHeight: 'calc(100vh - 40px)' }}
        >
          {/* Enhanced Professional Background with Dynamic Patterns */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Sophisticated Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-black/5 to-black/25"></div>
            
            {/* Advanced Animated Background Elements */}
            <motion.div 
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/8 rounded-full blur-3xl"
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1],
                rotate: [0, 180, 360],
                opacity: isHovered ? [0.8, 1, 0.8] : [0.6, 0.8, 0.6]
              }}
              transition={{ 
                duration: isHovered ? 25 : 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div 
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/6 rounded-full blur-3xl"
              animate={{ 
                scale: isHovered ? [1.2, 1, 1.2] : [1.1, 1, 1.1],
                rotate: [360, 180, 0],
                opacity: isHovered ? [0.9, 1, 0.9] : [0.5, 0.7, 0.5]
              }}
              transition={{ 
                duration: isHovered ? 35 : 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Dynamic Pattern Based on Solution Type */}
            <div className="absolute inset-0" style={{ opacity: isHovered ? 0.08 : 0.05 }}>
              {solution.bgPattern === 'rewards' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 40px 40px, white 2px, transparent 0)`,
                  backgroundSize: '80px 80px'
                }}></div>
              )}
              {solution.bgPattern === 'cashback' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}></div>
              )}
              {solution.bgPattern === 'tap' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
                  backgroundSize: '60px 60px'
                }}></div>
              )}
              {solution.bgPattern === 'sharing' && (
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 15px)`,
                  backgroundSize: '50px 50px'
                }}></div>
              )}
            </div>

            {/* Enhanced Glow Effects */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: `${solution.accentColor}20` }}
              animate={{
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1],
                x: isHovered ? [-20, 20, -20] : [-10, 10, -10],
                y: isHovered ? [-15, 15, -15] : [-5, 5, -5]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
              style={{ background: `${solution.accentColor}15` }}
              animate={{
                scale: isHovered ? [1.2, 0.8, 1.2] : [1, 0.9, 1],
                x: isHovered ? [15, -15, 15] : [5, -5, 5],
                y: isHovered ? [20, -20, 20] : [10, -10, 10]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 w-full max-w-8xl mx-auto px-4 lg:px-8 xl:px-12 h-full">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center h-full py-6 lg:py-8">
              {/* Enhanced Left Content - More Readable Layout */}
              <motion.div
                className="text-center lg:text-left space-y-4 lg:space-y-6"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Clear Icon Design */}
                <motion.div
                  className="relative inline-block"
                  animate={{ 
                    rotate: isHovered ? [0, 3, -3, 0] : [0, 1, -1, 0],
                    scale: isHovered ? [1, 1.03, 1] : [1, 1.01, 1]
                  }}
                  transition={{ duration: isHovered ? 4 : 6, repeat: Infinity }}
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-trovo-green/10 backdrop-blur-sm rounded-3xl flex items-center justify-center text-4xl lg:text-5xl border border-trovo-green/20 shadow-xl">
                    {solution.icon}
                  </div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center text-sm lg:text-base font-bold text-white shadow-lg border-2 border-white/40"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{
                      scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {solution.id}
                  </motion.div>
                </motion.div>

                {/* Clear Typography Hierarchy */}
                <div className="space-y-3 lg:space-y-4">
                  <motion.div
                    className="text-lg lg:text-xl xl:text-2xl font-medium text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {solution.subtitle}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-gray-900"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {solution.title}
                  </motion.h3>
                </div>
                
                <motion.p 
                  className="text-base lg:text-lg xl:text-xl leading-relaxed font-light text-gray-600 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {solution.description}
                </motion.p>

                {/* Clear Stats Badge */}
                <motion.div
                  className="inline-flex items-center bg-trovo-green/10 backdrop-blur-md px-6 py-3 lg:px-8 lg:py-4 rounded-2xl border border-trovo-green/20 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full mr-3 shadow-sm"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.8, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-900">{solution.stats}</span>
                </motion.div>

                {/* Clear Benefits List */}
                <div className="space-y-3 lg:space-y-4">
                  {solution.benefits.map((benefit: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-3 group/benefit"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shadow-lg border-2 border-trovo-green/20 flex-shrink-0"
                        style={{ backgroundColor: solution.accentColor }}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="text-white text-sm lg:text-base font-bold">✓</span>
                      </motion.div>
                      <span className="text-sm lg:text-base xl:text-lg font-medium leading-relaxed text-gray-700">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Clear CTA Button */}
                <motion.button
                  className="relative bg-trovo-green text-white font-bold px-8 py-4 lg:px-12 lg:py-5 rounded-2xl hover:bg-trovo-green-dark transition-all duration-300 text-lg lg:text-xl shadow-xl border-2 border-trovo-green/20 group/cta"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <span className="flex items-center justify-center space-x-3">
                    <span>Get Started</span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>

              {/* Simplified Right Content - Clean Dashboard */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative w-full max-w-sm lg:max-w-md">
                  {/* Clean Visual Container */}
                  <motion.div
                    className="relative w-full h-[350px] lg:h-[450px] bg-white/90 backdrop-blur-xl rounded-3xl p-4 lg:p-6 border border-trovo-green/20 shadow-xl"
                    animate={{ 
                      y: isHovered ? [0, -8, 0] : [0, -4, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Simple Dashboard Header */}
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
                        {solution.icon}
                      </motion.div>
                    </div>
                    
                    {/* Main Feature Card */}
                    <motion.div 
                      className="bg-trovo-green/10 backdrop-blur-sm rounded-2xl p-5 lg:p-6 border border-trovo-green/20 shadow-lg mb-6"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      whileHover={{ scale: 1.02, y: -3 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-xl lg:text-2xl font-bold text-gray-900">{solution.title}</h4>
                        <motion.div
                          className="w-3 h-3 lg:w-4 lg:h-4 rounded-full shadow-sm"
                          style={{ backgroundColor: solution.accentColor }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                      <div className="text-xl lg:text-2xl font-bold mb-2" style={{ color: solution.accentColor }}>
                        {solution.stats}
                      </div>
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {solution.subtitle}
                      </p>
                    </motion.div>
                    
                    {/* Simple Progress Indicators */}
                    <div className="space-y-3 lg:space-y-4">
                      {solution.benefits.map((_: string, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center space-x-2">
                              <motion.div 
                                className="w-3 h-3 rounded-full shadow-sm"
                                style={{ backgroundColor: solution.accentColor }}
                                whileHover={{ scale: 1.2 }}
                              />
                              <span className="text-xs lg:text-sm font-medium text-gray-700">
                                Feature {idx + 1}
                              </span>
                            </div>
                            <span className="text-sm lg:text-base font-bold text-gray-900">
                              {88 + idx * 4}%
                            </span>
                          </div>
                          <div className="h-1.5 lg:h-2 bg-trovo-green/20 rounded-full overflow-hidden border border-trovo-green/30">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: solution.accentColor }}
                              initial={{ width: "0%" }}
                              animate={isInView ? { width: `${88 + idx * 4}%` } : {}}
                              transition={{ duration: 1.5, delay: 1.5 + idx * 0.3, ease: "easeOut" }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Simple Stats */}
                    <motion.div
                      className="grid grid-cols-2 gap-3 lg:gap-4 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1.8 }}
                    >
                      <div className="bg-trovo-green/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-trovo-green/20">
                        <div className="text-lg lg:text-xl font-bold mb-1 text-gray-900">99.9%</div>
                        <div className="text-xs lg:text-sm text-gray-600">Uptime</div>
                      </div>
                      <div className="bg-trovo-green/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 text-center border border-trovo-green/20">
                        <div className="text-lg lg:text-xl font-bold mb-1 text-gray-900">&lt;1s</div>
                        <div className="text-xs lg:text-sm text-gray-600">Response</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Professional Accent Elements */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-12 h-12 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-lg lg:text-xl shadow-lg border border-white/20"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center text-lg lg:text-xl border border-white/20 shadow-lg"
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ 
                      duration: 10, 
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
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SolutionSection
