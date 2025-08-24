import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const TestimonialsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      avatar: "👩‍💻",
      text: "I had 45,000 unused credit card points worth ₹4,500 just sitting there! Can't wait for Trovo to help me convert them to actual cash.",
      highlight: "₹4,500 in unused points"
    },
    {
      name: "Rajesh Kumar", 
      role: "Marketing Manager, Mumbai",
      avatar: "👨‍💼",
      text: "UPI payments are so convenient but I get zero rewards. 1% guaranteed cashback on every transaction? This will save me thousands!",
      highlight: "Thousands in UPI rewards"
    },
    {
      name: "Anita Gupta",
      role: "Freelancer, Delhi",
      avatar: "👩‍🎨",
      text: "My friends always ask to use my credit card for better rewards. Safe card sharing with auto-debit sounds perfect for our group!",
      highlight: "Safe card sharing solution"
    },
    {
      name: "Vikram Singh",
      role: "Startup Founder, Pune",
      avatar: "👨‍💻",
      text: "Entering UPI PIN 20+ times daily is annoying. Tap-to-pay up to ₹2000 without PIN will save me so much time!",
      highlight: "PIN-free payments"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-trovo-green-50/50 to-white">
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-trovo-green-100/20 to-transparent"></div>
      </div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-trovo-green/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-trovo-green/3 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What People Are Saying
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real feedback from Indians who are excited about Trovo's launch and the problems we're solving
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-trovo-green/20 hover:shadow-2xl hover:shadow-trovo-green/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Professional glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-trovo-green/3 to-trovo-green/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Rating with staggered animation */}
                <motion.div 
                  className="flex space-x-1 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1 + index * 0.1 
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-yellow-400 text-lg"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 1.2 + index * 0.1 + i * 0.05 
                      }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>

                {/* Testimonial Text with typing effect */}
                <motion.p 
                  className="text-gray-700 mb-6 leading-relaxed text-sm group-hover:text-gray-800 transition-colors duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.4 + index * 0.1 
                  }}
                >
                  "{testimonial.text}"
                </motion.p>

                {/* Highlight Badge with animation */}
                <motion.div 
                  className="inline-block bg-gradient-to-r from-trovo-green/20 to-trovo-green/30 text-trovo-green text-xs font-semibold px-4 py-2 rounded-full mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.6 + index * 0.1 
                  }}
                >
                  {testimonial.highlight}
                </motion.div>

                {/* Author with slide-in animation */}
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.8 + index * 0.1 
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-trovo-green/20 to-trovo-green/30 rounded-full flex items-center justify-center text-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm group-hover:text-trovo-green transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-xs">{testimonial.role}</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-flex items-center justify-center space-x-8 text-gray-500 text-sm bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-trovo-green/20">
            <div className="flex items-center space-x-2 hover:text-trovo-green transition-colors duration-300">
              <span className="text-lg">🔒</span>
              <span>Bank-level Security</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 hover:text-trovo-green transition-colors duration-300">
              <span className="text-lg">🇮🇳</span>
              <span>Made for India</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 hover:text-trovo-green transition-colors duration-300">
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
