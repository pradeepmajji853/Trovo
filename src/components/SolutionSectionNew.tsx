import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SolutionSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const solutions = [
    {
      id: 1,
      title: "Credit Card Rewards",
      icon: "💳",
      description: "Convert your unused credit card points directly to cash. No complex redemption processes.",
      features: ["Direct cash conversion", "Instant processing", "All major cards supported"]
    },
    {
      id: 2,
      title: "UPI Cashback",
      icon: "💰",
      description: "Earn guaranteed 1% cashback on every UPI payment you make. No conditions, no limits.",
      features: ["1% guaranteed cashback", "All UPI transactions", "Instant credit"]
    },
    {
      id: 3,
      title: "Tap to Pay",
      icon: "📱",
      description: "Pay up to ₹2,000 with just a tap. No UPI PIN needed for quick transactions.",
      features: ["No PIN required", "Up to ₹2,000 limit", "Instant payments"]
    },
    {
      id: 4,
      title: "Safe Card Sharing",
      icon: "👥",
      description: "Share your credit card with friends safely. Auto-debit from their account monthly.",
      features: ["Secure sharing", "Auto monthly settlement", "Transaction tracking"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
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
    <section className="py-20 bg-gradient-to-br from-white to-green-50/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Trovo Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful features that transform how you manage and use your finances
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto"
                whileHover={{ rotate: 5 }}
              >
                {solution.icon}
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  className="w-full bg-emerald-50 text-emerald-700 font-semibold py-3 px-6 rounded-full hover:bg-emerald-100 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="bg-emerald-600 text-white font-bold px-12 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const earlyAccessSection = document.querySelector('#early-access')
              if (earlyAccessSection) {
                earlyAccessSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Get Early Access to All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
