import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyTrovoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    {
      number: "₹15,000+",
      label: "Saved Annually",
      description: "Average user savings per year"
    },
    {
      number: "5 Mins",
      label: "Setup Time",
      description: "Get started instantly"
    },
    {
      number: "Zero",
      label: "Hidden Fees",
      description: "Complete transparency"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ]

  const benefits = [
    {
      icon: "💰",
      title: "Stop Losing Money",
      description: "Your credit card points are expiring. Your UPI payments earn nothing. We fix both problems."
    },
    {
      icon: "🔄",
      title: "Convert Everything to Cash",
      description: "Turn all your credit card points into real money. No more hunting for redemption options."
    },
    {
      icon: "📱",
      title: "Earn on Every UPI Payment",
      description: "Get cashback on groceries, bills, restaurants - every single UPI transaction pays you back."
    },
    {
      icon: "🚀",
      title: "One App for Everything",
      description: "Manage all your cards, track spending, earn rewards, and save money from a single place."
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-trovo-green-50 via-white to-trovo-green-100">
        <div className="absolute inset-0 bg-gradient-to-tl from-trovo-green/10 via-transparent to-white/50 animate-gradient-shift"></div>
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-trovo-green/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-trovo-green/5 rounded-full blur-2xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-trovo-green/20 rounded-full blur-lg animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
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
            The Numbers Don't Lie
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Real results, real savings, real peace of mind. Here's what happens when you stop leaving money on the table
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-trovo-green/20 hover:shadow-xl hover:shadow-trovo-green/20 transition-all duration-500 group-hover:border-trovo-green/40">
                <div className="text-3xl md:text-4xl font-bold text-trovo-green mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-trovo-green/20 hover:shadow-2xl hover:shadow-trovo-green/20 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-trovo-green/5 to-trovo-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 flex items-center justify-center w-16 h-16 bg-trovo-green/10 rounded-2xl mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-trovo-green transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WhyTrovoSection