import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '../components/PageTransition'

const AboutPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: "🎯",
      title: "Mission Driven",
      description: "We're on a mission to unlock every rupee of value for our users"
    },
    {
      icon: "🔒",
      title: "Security First",
      description: "Your financial data is protected with bank-grade security"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Constantly pushing boundaries in fintech technology"
    },
    {
      icon: "❤️",
      title: "User Centric",
      description: "Every feature is designed with our users' needs in mind"
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-trovo-green/5 to-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About{' '}
              <span className="text-trovo-green">Trovo</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're building the future of fintech in India, one treasure at a time. 
              Our mission is to unlock the hidden value in your credit cards and 
              revolutionize how you manage money.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Trovo was born from a simple frustration: watching millions of credit card 
                points expire unused while people struggled with scattered payment methods. 
                We surveyed over 500 credit card users and discovered a universal truth - 
                everyone had treasure locked away in their cards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're building an ecosystem that not only unlocks this hidden value 
                but also creates new opportunities for Indians to earn, save, and spend smarter.
              </p>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-trovo-green to-trovo-green-dark rounded-3xl p-8 text-white">
                <div className="text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    💎
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">500+ Users Surveyed</h3>
                  <p className="text-lg opacity-90">
                    Leading to insights that shaped Trovo's core features
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of the fintech revolution that's unlocking treasure for millions of Indians
            </p>
            <motion.button
              className="bg-white text-trovo-green font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Waitlist
            </motion.button>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default AboutPage
