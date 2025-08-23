import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const SolutionSection: React.FC = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const solutions = [
    {
      id: 1,
      icon: "⚡",
      title: "Fast Redemption",
      subtitle: "Instant Point Conversion",
      description: "Transform your credit card points into instant rewards with just a few taps. No waiting, no complicated processes - just immediate value.",
      features: ["Instant conversion", "Real-time rates", "Zero processing fees", "Multiple redemption options"],
      gradient: "from-blue-500 via-blue-600 to-purple-600",
      accentColor: "blue"
    },
    {
      id: 2,
      icon: "📱",
      title: "Tap to Pay with Phone",
      subtitle: "Unified Payment Experience",
      description: "Simplify your financial life with our all-in-one payment solution. UPI, cards, and rewards - all seamlessly integrated in one tap.",
      features: ["One-tap payments", "Universal acceptance", "Smart rewards", "Contactless transactions"],
      gradient: "from-trovo-green via-trovo-green-light to-green-400",
      accentColor: "green"
    },
    {
      id: 3,
      icon: "📊",
      title: "Shared Credit Tracker",
      subtitle: "Smart Financial Management",
      description: "Keep track of all your repayments, EMIs, and get intelligent reminders. Never miss a payment and maintain a perfect credit score.",
      features: ["Smart reminders", "Credit score monitoring", "Expense analytics", "Family sharing"],
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      accentColor: "purple"
    },
    {
      id: 4,
      icon: "🎯",
      title: "UPI Rewards",
      subtitle: "Earn on Every Transaction",
      description: "Maximize your earnings with every UPI transaction. Get cashback, points, and exclusive offers on your daily payments.",
      features: ["Cashback on UPI", "Bonus rewards", "Exclusive offers", "Loyalty multipliers"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      accentColor: "orange"
    }
  ]

  // Calculate transforms for each card
  const getCardTransforms = (index: number) => {
    const progress = useTransform(
      scrollYProgress,
      [index * 0.2, (index + 1) * 0.2, (index + 2) * 0.2],
      [1, 0.95, 0.9]
    )
    
    const y = useTransform(
      scrollYProgress,
      [index * 0.2, (index + 1) * 0.2],
      [0, -100]
    )
    
    const opacity = useTransform(
      scrollYProgress,
      [index * 0.2, (index + 1) * 0.2, (index + 2) * 0.2],
      [1, 0.8, 0.6]
    )

    return { scale: progress, y, opacity }
  }

  return (
    <section ref={containerRef} className="relative min-h-[500vh] bg-gray-900">
      {/* Section Header */}
      <div className="sticky top-0 z-10 bg-gray-900 py-16">
        <div className="container-custom text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Trovo Solution
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Four powerful solutions that transform your financial experience
          </motion.p>
        </div>
      </div>

      {/* Sticky Card Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        {solutions.map((solution, index) => {
          const { scale, y, opacity } = getCardTransforms(index)
          
          return (
            <motion.div
              key={solution.id}
              className="absolute inset-4 md:inset-8"
              style={{ 
                scale,
                y,
                opacity,
                zIndex: solutions.length - index
              }}
            >
              <div className={`w-full h-full bg-gradient-to-br ${solution.gradient} rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col md:flex-row items-center">
                  {/* Left Content */}
                  <div className="flex-1 text-white mb-8 md:mb-0 md:pr-8">
                    <motion.div
                      className="text-6xl md:text-8xl mb-6"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {solution.icon}
                    </motion.div>
                    
                    <motion.p
                      className="text-sm md:text-base uppercase tracking-wider opacity-90 mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {solution.subtitle}
                    </motion.p>
                    
                    <motion.h3
                      className="text-4xl md:text-6xl font-bold mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {solution.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-lg md:text-xl leading-relaxed mb-8 opacity-90"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {solution.description}
                    </motion.p>

                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-sm md:text-base">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>

                    <motion.button
                      className="mt-8 bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>

                  {/* Right Visual */}
                  <div className="flex-1 flex items-center justify-center">
                    <motion.div
                      className="relative w-64 h-64 md:w-80 md:h-80"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      {/* Outer Ring */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
                      <div className="absolute inset-4 border border-white/20 rounded-full"></div>
                      <div className="absolute inset-8 border border-white/10 rounded-full"></div>
                      
                      {/* Center Icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <span className="text-4xl md:text-6xl">{solution.icon}</span>
                        </div>
                      </motion.div>

                      {/* Floating Elements */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-white/40 rounded-full"
                          style={{
                            top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                            left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                          }}
                          animate={{ 
                            scale: [0.5, 1, 0.5],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.3
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="absolute top-8 right-8 text-white/30 text-6xl md:text-8xl font-bold leading-none">
                  0{solution.id}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Spacer */}
      <div className="h-screen"></div>
    </section>
  )
}

export default SolutionSection
