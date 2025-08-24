import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const BlogPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-16 md:pt-20">
        {/* Coming Soon Section */}
        <section className="section-padding bg-gradient-to-br from-trovo-green/5 to-white">
          <div className="container-custom">
            <div className="min-h-[80vh] flex items-center justify-center">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Icon */}
                <motion.div
                  className="text-8xl md:text-9xl mb-8"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  📝
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Trovo{' '}
                  <span className="bg-gradient-to-r from-trovo-green to-emerald-600 bg-clip-text text-transparent">
                    Blog
                  </span>
                </motion.h1>

                {/* Coming Soon Message */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold text-trovo-green mb-4">
                    Coming Soon
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                    We're crafting insightful content about fintech, financial wellness, 
                    and the future of digital payments in India. Stay tuned for expert tips, 
                    industry insights, and stories that matter to your financial journey.
                  </p>
                </motion.div>

                {/* Features List */}
                <motion.div
                  className="grid md:grid-cols-3 gap-6 mt-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-trovo-green/20">
                    <div className="text-3xl mb-4">💡</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Insights</h3>
                    <p className="text-gray-600 text-sm">In-depth analysis of fintech trends and financial strategies</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-trovo-green/20">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Tips</h3>
                    <p className="text-gray-600 text-sm">Actionable advice to maximize your financial rewards</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-trovo-green/20">
                    <div className="text-3xl mb-4">🔮</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Future Trends</h3>
                    <p className="text-gray-600 text-sm">What's next in digital payments and financial technology</p>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <p className="text-lg text-gray-600 mb-6">
                    Get notified when we launch our blog
                  </p>
                  <motion.button
                    className="bg-trovo-green text-white font-semibold px-8 py-4 rounded-full hover:bg-trovo-green-dark transition-all duration-300 shadow-lg"
                    whileHover={{ 
                      scale: 1.05, 
                      y: -3,
                      boxShadow: "0 20px 40px -12px rgba(29, 185, 84, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join Early Access
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default BlogPage
