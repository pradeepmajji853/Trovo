import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import PageTransition from '../components/PageTransition'

const AboutPage = () => {
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    document.title = 'About Us - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 md:pt-20">
        
        {/* About Trovo Hero Section */}
        <section className="section-padding bg-gradient-to-br from-trovo-green/10 via-white to-trovo-green/5" ref={heroRef}>
          <div className="container-custom">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block bg-trovo-green/10 text-trovo-green px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                🏦 About Trovo Fintech
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Simplifying{' '}
                <span className="text-trovo-green">Finance</span>{' '}
                for India
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Trovo is India's intelligent fintech platform that helps you maximize credit card rewards, 
                get guaranteed UPI cashback, and make seamless payments—all in one simple app.
              </motion.p>

              {/* Visual Hero Image */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="bg-gradient-to-br from-trovo-green to-trovo-green-dark rounded-3xl p-8 text-white shadow-2xl">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl mb-3">💳</div>
                      <h3 className="font-semibold">Smart Rewards</h3>
                      <p className="text-sm opacity-80">Maximize every point</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">💰</div>
                      <h3 className="font-semibold">UPI Cashback</h3>
                      <p className="text-sm opacity-80">Guaranteed returns</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-3">📱</div>
                      <h3 className="font-semibold">Tap to Pay</h3>
                      <p className="text-sm opacity-80">No PIN required</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-gray-50" ref={storyRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Trovo was born from a simple frustration: losing track of credit card rewards and missing out on cashback opportunities. Our founder realized this wasn't just a personal problem—millions of Indians were leaving money on the table every day.
                  </p>
                  <p>
                    We discovered that people struggle with complex reward systems, multiple payment apps, and missing out on the best financial opportunities. That's when we decided to build something different.
                  </p>
                  <p>
                    Today, Trovo brings together intelligent reward optimization, guaranteed UPI cashback, and seamless payments into one simple platform. We're making financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                      <div className="text-4xl mb-3">💡</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                      <p className="text-sm text-gray-600">Complex rewards</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                      <div className="text-4xl mb-3">🔍</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Research</h4>
                      <p className="text-sm text-gray-600">User insights</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                      <div className="text-4xl mb-3">🛠️</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-sm text-gray-600">Smart platform</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                      <div className="text-4xl mb-3">🚀</div>
                      <h4 className="font-semibold text-gray-900 mb-2">Future</h4>
                      <p className="text-sm text-gray-600">Coming soon</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-padding" ref={missionRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-gradient-to-br from-trovo-green/20 to-trovo-green-dark/20 rounded-3xl p-8">
                  <div className="text-center">
                    <motion.div
                      className="text-8xl mb-6"
                      animate={{ 
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🎯
                    </motion.div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl mb-2">💰</div>
                          <p className="text-gray-600">Smart Savings</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">⚡</div>
                          <p className="text-gray-600">Fast Payments</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-2">🤝</div>
                          <p className="text-gray-600">Financial Trust</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>To democratize financial intelligence for every Indian.</strong> We believe that smart financial decisions shouldn't be complicated or reserved for the wealthy.
                  </p>
                  <p>
                    Our mission is to build technology that automatically optimizes your financial life—from maximizing credit card rewards to ensuring you never miss cashback opportunities.
                  </p>
                  <p>
                    We're committed to transparency, security, and putting our users first. Every feature we build is designed to put more money back in your pocket and give you peace of mind.
                  </p>
                </div>

                <motion.div
                  className="mt-8 p-6 bg-trovo-green/10 rounded-xl border border-trovo-green/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-trovo-green mb-3">What Drives Us</h3>
                  <p className="text-gray-700">
                    Making financial wellness accessible, understandable, and rewarding for every Indian family.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white">
          <div className="container-custom">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join the Financial Revolution
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Be among the first to experience smarter financial management with Trovo. 
                Get early access and help us build the future of fintech in India.
              </p>
              
              <motion.button
                className="bg-white text-trovo-green font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const earlyAccessSection = document.querySelector('#early-access')
                  if (earlyAccessSection) {
                    earlyAccessSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Get Early Access
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default AboutPage
