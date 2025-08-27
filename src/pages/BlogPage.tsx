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
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default BlogPage
