import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'
import PageTransition from '../components/PageTransition'

const AboutPage = () => {
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)
  
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" })
  const isMissionInView = useInView(missionRef, { once: true, margin: "-100px" })
  const isVisionInView = useInView(visionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    document.title = 'About Us - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 md:pt-20">
        
        {/* About Trovo Hero Section - About Content */}
        <section className="bg-gradient-to-br from-trovo-green/5 to-white min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            
            {/* About Trovo Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-10"
            >
              {/* Main Title and Subtitle */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  About{' '}
                  <span className="text-trovo-green">Trovo</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Revolutionizing financial management for every Indian
                </p>
              </div>
              
              {/* Detailed Content */}
              <motion.div
                className="space-y-8 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  We're building the future of fintech in India, revolutionizing how you manage money. 
                  Our mission is to unlock the hidden value in your credit cards and create smarter 
                  financial opportunities for every Indian.
                </p>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Trovo combines intelligent reward optimization, guaranteed UPI cashback, 
                  and seamless payments into one simple platform that puts more money 
                  back in your pocket.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 shadow-lg mt-10">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                    From watching credit card points expire to building India's smartest financial platform — 
                    we're making financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
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
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-12 border border-orange-300">
                  <div className="text-center">
                    <motion.div 
                      className="text-8xl mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      📖
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h3>
                    <p className="text-gray-700 text-lg">From frustration to innovation</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Trovo was born from a simple frustration: watching millions of credit card 
                    points expire unused while people struggled with scattered payment methods. 
                    Our founder realized this wasn't just a personal problem—millions of Indians 
                    were leaving money on the table every day.
                  </p>
                  <p>
                    We discovered that people struggle with complex reward systems, multiple 
                    payment apps, and missing out on the best financial opportunities. That's 
                    when we decided to build something different.
                  </p>
                  <p>
                    Today, Trovo brings together intelligent reward optimization, guaranteed 
                    UPI cashback, and seamless payments into one simple platform. We're making 
                    financial wellness accessible to every Indian, one smart decision at a time.
                  </p>
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
                initial={{ opacity: 0, x: -50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-trovo-green">To democratize financial intelligence for every Indian.</strong> We believe 
                    that smart financial decisions shouldn't be complicated or reserved for the wealthy.
                  </p>
                  <p>
                    Our mission is to build technology that automatically optimizes your financial 
                    life—from maximizing credit card rewards to ensuring you never miss cashback 
                    opportunities.
                  </p>
                  <p>
                    We're committed to transparency, security, and putting our users first. Every 
                    feature we build is designed to put more money back in your pocket and give 
                    you peace of mind.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={isMissionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-trovo-green to-trovo-green-dark rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <motion.div 
                      className="text-8xl mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      🎯
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-xl opacity-90">
                      Democratizing financial intelligence for every Indian
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section className="section-padding bg-gray-50" ref={visionRef}>
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="flex justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 text-white">
                  <div className="text-center">
                    <motion.div 
                      className="text-8xl mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      🚀
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-xl opacity-90">
                      The future of financial wellness in India
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisionInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-blue-600">To become India's most trusted financial companion.</strong> We envision 
                    a future where every Indian has access to intelligent financial tools that 
                    work automatically in the background.
                  </p>
                  <p>
                    We see a world where you never lose money due to expired rewards, forgotten 
                    cashback, or suboptimal payment choices. Where your money works as hard as 
                    you do, 24/7.
                  </p>
                  <p>
                    Our vision extends beyond just payments—we're building an ecosystem that 
                    helps Indians save more, earn more, and achieve their financial goals with 
                    confidence and ease.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default AboutPage
