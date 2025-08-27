import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'

const BlogPage = () => {
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Trovo Fi Blog",
    "description": "Latest insights, news, and updates from Trovo Fi about fintech innovations, credit card optimization, and digital payment trends in India.",
    "publisher": {
      "@type": "Organization",
      "name": "Trovo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trovo.app/image2.png"
      }
    },
    "url": "https://trovo.app/blog"
  }

  return (
    <PageTransition>
      <SEO 
        title="Trovo Fi Blog - Fintech Insights & Credit Card Tips | Coming Soon"
        description="Stay updated with the latest fintech trends, credit card optimization tips, and digital payment insights from Trovo Fi. Expert advice on maximizing your financial rewards in India."
        keywords="trovo blog, trovo fi blog, fintech blog india, credit card tips, digital payments blog, financial technology news, trovo insights, money management tips, fintech trends india"
        canonical="https://trovo.app/blog"
        structuredData={blogStructuredData}
      />
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
