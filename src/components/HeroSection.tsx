import { motion } from 'framer-motion'
import TrovoPhoneMockup from './mockups/TrovoPhoneMockup'

const HeroSection: React.FC = () => {

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
          className="absolute -top-40 -right-40 w-80 h-80 bg-trovo-green opacity-5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-trovo-green-light opacity-3 rounded-full blur-3xl"
          animate={{ 
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Subtle floating particles */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-2 h-2 bg-trovo-green rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-trovo-green-light rounded-full opacity-15"
          animate={{
            y: [0, 15, 0],
            opacity: [0.15, 0.4, 0.15]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-trovo-green mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Reclaim your financial power ✨
              </motion.div>
            </div>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Unlock rewards from your credit cards, enjoy guaranteed UPI cashback, experience seamless 
              tap-to-pay convenience, and safely share financial resources with trusted friends.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="btn-primary text-lg px-8 py-4 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join Early Access</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                className="border-2 border-trovo-green text-trovo-green font-semibold px-8 py-4 rounded-full hover:bg-trovo-green hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">500+</div>
                <div className="text-sm md:text-base text-gray-600">Users Surveyed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">&lt;3s</div>
                <div className="text-sm md:text-base text-gray-600">Redemption Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-trovo-green">100%</div>
                <div className="text-sm md:text-base text-gray-600">Digital First</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <TrovoPhoneMockup />

              {/* Floating elements around phone */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-trovo-green rounded-full flex items-center justify-center text-white text-sm"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                ✨
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-trovo-green-light rounded-full flex items-center justify-center text-white"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
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
    </section>
  )
}

export default HeroSection
