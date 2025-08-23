import { motion, useScroll, useTransform, useInView } from 'framer-motion'
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
      title: "Credit Card Rewards",
      icon: "💳",
      description: "Maximize rewards on every credit card bill payment. Earn points that convert directly to cash in your wallet.",
      benefits: ["5X points on bill payments", "Direct cash conversion", "₹12,000+ yearly savings"],
      gradient: "from-blue-600 via-blue-700 to-purple-700",
      accentColor: "#60A5FA",
      stats: "₹2,450 avg monthly earnings"
    },
    {
      id: 2,
      title: "Guaranteed UPI Cashback", 
      icon: "💰",
      description: "Get guaranteed 1% cashback on every UPI payment you make. No conditions, no limits, no minimum spend.",
      benefits: ["Guaranteed 1% cashback", "No spending limits", "₹1,850+ monthly returns"],
      gradient: "from-trovo-green via-emerald-600 to-teal-700",
      accentColor: "#10B981",
      stats: "1% on every transaction"
    },
    {
      id: 3,
      title: "Tap to Pay (No PIN)",
      icon: "📱",
      description: "Pay up to ₹2,000 instantly with just a phone tap. No UPI PIN needed, no cards required. Your phone is your wallet.",
      benefits: ["No PIN required", "Up to ₹2,000 payments", "3x faster than cards"],
      gradient: "from-purple-600 via-purple-700 to-pink-700",
      accentColor: "#A855F7",
      stats: "2 sec payment time"
    },
    {
      id: 4,
      title: "Shared Credit Cards",
      icon: "👥",
      description: "Share credit card access with friends safely. They spend, money gets auto-debited from their account monthly.",
      benefits: ["Safe friend sharing", "Auto monthly debit", "₹50K+ shared safely"],
      gradient: "from-orange-600 via-red-600 to-red-700",
      accentColor: "#FB923C",
      stats: "₹85K avg shared annually"
    }
  ]

  return (
    <section ref={containerRef} className="relative w-full">
      {/* Section Header */}
      <div className="py-20 bg-white w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Trovo Solution
          </motion.h2>
          <motion.p
            className="text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Four powerful solutions that transform how you manage and use your financial resources
          </motion.p>
        </div>
      </div>

      {/* Full-Width Stacked Cards - Covers entire viewport width */}
      <div className="relative w-screen ml-[calc(-50vw+50%)]">
        {solutions.map((solution, index) => {
          const targetScale = 1 - ((solutions.length - index) * 0.02)
          const isLast = index === solutions.length - 1

          return (
            <SolutionCard
              key={solution.id}
              solution={solution}
              index={index}
              targetScale={targetScale}
              isLast={isLast}
              scrollProgress={scrollYProgress}
            />
          )
        })}
      </div>
    </section>
  )
}

interface SolutionCardProps {
  solution: any
  index: number
  targetScale: number
  isLast: boolean
  scrollProgress: any
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  solution, 
  index, 
  targetScale, 
  isLast,
  scrollProgress 
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  // Calculate transforms based on scroll progress
  const range = [index * 0.25, (index + 1) * 0.25]
  const scale = useTransform(scrollProgress, range, [1, targetScale])

  return (
    <div className="sticky top-0 h-screen w-screen">
      <motion.div
        ref={cardRef}
        style={{ 
          scale: isLast ? 1 : scale
        }}
        className="w-full h-full"
      >
        <motion.div
          className={`relative overflow-hidden bg-gradient-to-br ${solution.gradient} text-white w-full h-full flex items-center`}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: index * 0.15 }}
        >
          {/* Professional Background Pattern - No Opacity Issues */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Clean Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
            
            {/* Animated Background Elements - Subtle and Professional */}
            <motion.div 
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div 
              className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/3 rounded-full blur-3xl"
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0]
              }}
              transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
            
            {/* Professional Grid Pattern */}
            <div className="absolute inset-0" style={{ opacity: 0.05 }}>
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 30px 30px, white 1px, transparent 0)`,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-8xl mx-auto px-8 lg:px-16 xl:px-24">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center h-full min-h-[80vh]">
              {/* Left Content */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Icon with Professional Design - No Opacity Issues */}
                <motion.div
                  className="relative inline-block mb-8"
                  animate={{ 
                    rotate: [0, 3, -3, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <div className="w-28 h-28 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center text-7xl border border-white/20 shadow-2xl">
                    {solution.icon}
                  </div>
                  <div 
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-xl"
                    style={{ backgroundColor: solution.accentColor }}
                  >
                    {solution.id}
                  </div>
                </motion.div>

                <h3 className="text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight">
                  {solution.title}
                </h3>
                
                <p className="text-2xl lg:text-3xl xl:text-4xl mb-10 leading-relaxed font-light">
                  {solution.description}
                </p>

                {/* Stats Badge - Clean Design */}
                <motion.div
                  className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full border border-white/25 mb-10 shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span className="text-xl font-semibold">{solution.stats}</span>
                </motion.div>

                {/* Benefits List - Enhanced */}
                <div className="space-y-8 mb-12">
                  {solution.benefits.map((benefit: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 0.6 + idx * 0.15 }}
                    >
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                        style={{ backgroundColor: solution.accentColor }}
                      >
                        <span className="text-white text-lg font-bold">✓</span>
                      </div>
                      <span className="text-xl lg:text-2xl font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  className="bg-white text-gray-900 font-bold px-16 py-6 rounded-full hover:bg-gray-100 transition-all duration-300 text-xl xl:text-2xl shadow-2xl"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                >
                  Get Started
                </motion.button>
              </motion.div>

              {/* Right Content - Enhanced Visual Dashboard */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative w-full max-w-2xl">
                  {/* Main Visual Container - Professional Dashboard */}
                  <motion.div
                    className="relative w-full h-[500px] xl:h-[600px] bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/15 shadow-2xl"
                    animate={{ 
                      y: [0, -15, 0],
                      rotateY: [0, 1, 0, -1, 0]
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between mb-10">
                      <div className="text-4xl xl:text-5xl font-black">Trovo</div>
                      <div className="text-5xl xl:text-6xl">{solution.icon}</div>
                    </div>
                    
                    {/* Feature Preview Card */}
                    <div className="space-y-8">
                      <motion.div 
                        className="bg-white/15 rounded-2xl p-8 border border-white/10 shadow-xl"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: 1.2 }}
                      >
                        <h4 className="text-3xl xl:text-4xl font-bold mb-4">{solution.title}</h4>
                        <div className="text-2xl xl:text-3xl font-semibold" style={{ color: solution.accentColor }}>
                          {solution.stats}
                        </div>
                      </motion.div>
                      
                      {/* Enhanced Progress Indicators */}
                      <div className="space-y-6">
                        {solution.benefits.map((_: string, idx: number) => (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1, delay: 1.8 + idx * 0.3 }}
                          >
                            <div 
                              className="w-4 h-4 rounded-full shadow-lg"
                              style={{ backgroundColor: solution.accentColor }}
                            ></div>
                            <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden border border-white/10">
                              <motion.div
                                className="h-full rounded-full shadow-inner"
                                style={{ backgroundColor: solution.accentColor }}
                                initial={{ width: "0%" }}
                                animate={isInView ? { width: `${88 + idx * 4}%` } : {}}
                                transition={{ duration: 2, delay: 2.5 + idx * 0.4 }}
                              />
                            </div>
                            <span className="text-lg font-medium w-8 text-right">
                              {88 + idx * 4}%
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Professional Floating Elements */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-3xl flex items-center justify-center text-4xl shadow-2xl border border-white/20"
                    style={{ backgroundColor: solution.accentColor }}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 6, repeat: Infinity }
                    }}
                  >
                    ✨
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center text-4xl border border-white/25 shadow-2xl"
                    animate={{ 
                      y: [0, -25, 0],
                      x: [0, 15, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    💎
                  </motion.div>

                  {/* Additional Decorative Elements */}
                  <motion.div
                    className="absolute top-1/4 -left-6 w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm"
                    animate={{ 
                      scale: [1, 1.4, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                  
                  <motion.div
                    className="absolute bottom-1/3 -right-4 w-12 h-12 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm"
                    animate={{ 
                      scale: [1, 1.6, 1],
                      y: [0, -20, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  />

                  {/* Professional Corner Accents */}
                  <div 
                    className="absolute top-6 left-6 w-3 h-3 rounded-full shadow-lg"
                    style={{ backgroundColor: solution.accentColor }}
                  />
                  <div 
                    className="absolute bottom-6 right-6 w-3 h-3 rounded-full shadow-lg"
                    style={{ backgroundColor: solution.accentColor }}
                  />
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
