import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TestimonialsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      avatar: "👩‍💻",
      rating: 5,
      text: "I had 45,000 unused credit card points worth ₹4,500 just sitting there! Can't wait for Trovo to help me convert them to actual cash.",
      highlight: "₹4,500 in unused points"
    },
    {
      name: "Rajesh Kumar", 
      role: "Marketing Manager, Mumbai",
      avatar: "👨‍💼",
      rating: 5,
      text: "UPI payments are so convenient but I get zero rewards. 1% guaranteed cashback on every transaction? This will save me thousands!",
      highlight: "Thousands in UPI rewards"
    },
    {
      name: "Anita Gupta",
      role: "Freelancer, Delhi",
      avatar: "👩‍🎨",
      rating: 5,
      text: "My friends always ask to use my credit card for better rewards. Safe card sharing with auto-debit sounds perfect for our group!",
      highlight: "Safe card sharing solution"
    },
    {
      name: "Vikram Singh",
      role: "Startup Founder, Pune",
      avatar: "👨‍💻",
      rating: 5,
      text: "Entering UPI PIN 20+ times daily is annoying. Tap-to-pay up to ₹2000 without PIN will save me so much time!",
      highlight: "PIN-free payments"
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What People Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from Indians who are excited about Trovo's launch and the problems we're solving
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Highlight Badge */}
              <div className="inline-block bg-trovo-green/10 text-trovo-green text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-trovo-green/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🔒</span>
              <span>Bank-level Security</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🇮🇳</span>
              <span>Made for India</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">⚡</span>
              <span>Instant Transactions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
