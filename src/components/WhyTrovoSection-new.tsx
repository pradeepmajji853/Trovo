import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyTrovoSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { number: "500+", label: "Credit Card Users Surveyed" },
    { number: "<3s", label: "Average Redemption Time" },
    { number: "100%", label: "Digital-First Experience" }
  ]

  const benefits = [
    {
      icon: "🔓",
      title: "Instant Unlock",
      description: "Your treasure unlocked in seconds, not hours"
    },
    {
      icon: "🇮🇳",
      title: "Built for India",
      description: "Designed specifically for India's digital-first users"
    },
    {
      icon: "🎯",
      title: "User-Driven",
      description: "Inspired by real feedback from 500+ credit card users"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Trovo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your treasure unlocked in seconds. Built for India's digital-first users who want simplicity + rewards.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-trovo-green mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-trovo-green to-trovo-green-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial/Trust Section */}
        <motion.div
          className="bg-white p-8 md:p-12 rounded-3xl shadow-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-6xl mb-6">💎</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-6 italic">
              "Finally, a fintech app that actually understands what Indian users need - 
              simple, rewarding, and built for our digital lifestyle."
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <span className="text-gray-600 ml-2">Beta Tester Feedback</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyTrovoSection
