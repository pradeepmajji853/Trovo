import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import PageTransition from '../components/PageTransition'

const BlogPage = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      id: 1,
      title: "The Hidden Treasure in Your Credit Cards",
      excerpt: "Discover how millions of Indians are missing out on ₹50,000+ worth of rewards annually and how Trovo can change that.",
      category: "Credit Cards",
      readTime: "5 min read",
      date: "Aug 15, 2024",
      image: "💳",
      featured: true
    },
    {
      id: 2,
      title: "UPI vs Credit Cards: The Ultimate Comparison",
      excerpt: "A comprehensive analysis of payment methods in India and why a hybrid approach works best.",
      category: "Payments",
      readTime: "8 min read",
      date: "Aug 12, 2024",
      image: "📱"
    },
    {
      id: 3,
      title: "5 Fintech Trends Shaping India in 2024",
      excerpt: "From digital lending to neo-banking, explore the trends that are revolutionizing Indian finance.",
      category: "Fintech",
      readTime: "6 min read",
      date: "Aug 10, 2024",
      image: "🚀"
    },
    {
      id: 4,
      title: "Building Trust in Digital Payments",
      excerpt: "How security measures and user experience design create confidence in fintech applications.",
      category: "Security",
      readTime: "7 min read",
      date: "Aug 8, 2024",
      image: "🔒"
    },
    {
      id: 5,
      title: "The Psychology of Spending and Saving",
      excerpt: "Understanding behavioral economics and how it influences financial decisions in the digital age.",
      category: "Psychology",
      readTime: "9 min read",
      date: "Aug 5, 2024",
      image: "🧠"
    },
    {
      id: 6,
      title: "Credit Score Myths Debunked",
      excerpt: "Separating fact from fiction about credit scores and how they really work in India.",
      category: "Credit",
      readTime: "4 min read",
      date: "Aug 3, 2024",
      image: "📊"
    }
  ]

  const categories = ["All", "Credit Cards", "Payments", "Fintech", "Security", "Psychology", "Credit"]

  return (
    <PageTransition>
      <div className="min-h-screen bg-white pt-20">
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
              Trovo{' '}
              <span className="text-trovo-green">Blog</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Insights, tips, and stories about fintech, credit cards, and the future of digital payments in India.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-custom">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-trovo-green text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-trovo-green hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          {/* Featured Post */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-trovo-green to-trovo-green-dark rounded-3xl p-8 md:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-white/20 text-sm font-medium px-3 py-1 rounded-full mb-4">
                    Featured Post
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm opacity-80 mb-6">
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                    <span>•</span>
                    <span>{blogPosts[0].category}</span>
                  </div>
                  <motion.button
                    className="bg-white text-trovo-green font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More →
                  </motion.button>
                </div>
                <motion.div
                  className="text-center"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-8xl md:text-9xl">💳</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300"
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5 
                  }}
                >
                  {post.image}
                </motion.div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-medium text-trovo-green bg-trovo-green/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-trovo-green transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <motion.span
                    className="text-trovo-green font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read More →
                  </motion.span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="bg-trovo-green text-white font-semibold px-8 py-4 rounded-full hover:bg-trovo-green-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Posts
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            className="bg-white rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="text-5xl mb-6"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              📧
            </motion.div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest fintech insights and Trovo updates delivered to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-trovo-green focus:border-transparent"
              />
              <motion.button
                className="bg-trovo-green text-white font-semibold px-6 py-3 rounded-full hover:bg-trovo-green-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default BlogPage
