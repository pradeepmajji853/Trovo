import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProblemSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: "💳",
      title: "Wasted Credit Card Points",
      description: "Credit card points are confusing and often expire unused. Indians lose ₹1,200+ yearly on unredeemed rewards."
    },
    {
      icon: "📱",
      title: "UPI Without Rewards",
      description: "UPI payments offer zero cashback while card payments do. Missing out on ₹1,500+ annual rewards on daily spending."
    },
    {
      icon: "👥",
      title: "Unsafe Card Sharing",
      description: "Friends ask to use your credit card for better rewards but sharing cards is risky and tracking payments is a nightmare."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Problems We're Solving
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indians are losing thousands of rupees annually due to fragmented financial tools and missed reward opportunities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-5xl mb-6 text-center">{problem.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Visual Element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm font-medium">But there's a better way</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
