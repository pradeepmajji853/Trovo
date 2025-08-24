import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

const NotFoundPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-trovo-green/5 to-white flex items-center justify-center pt-16 md:pt-20">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated 404 */}
          <motion.div
            className="text-8xl md:text-9xl font-bold text-trovo-green mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            404
          </motion.div>

          {/* Floating treasure icons */}
          <div className="relative mb-8">
            <motion.div
              className="absolute -top-10 -left-10 text-4xl"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              💎
            </motion.div>
            <motion.div
              className="absolute -top-5 -right-10 text-3xl"
              animate={{ 
                y: [0, -15, 0],
                x: [0, 10, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              🏆
            </motion.div>
            <motion.div
              className="absolute -bottom-5 left-5 text-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              💰
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Treasure Not Found
            </h1>
          </div>

          <motion.p
            className="text-xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Looks like this page has vanished into thin air! 
            Don't worry, there's plenty of treasure waiting for you on our other pages.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
            
            <Link to="/about">
              <motion.button
                className="bg-transparent border-2 border-trovo-green text-trovo-green font-semibold py-3 px-8 rounded-full hover:bg-trovo-green hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Us
              </motion.button>
            </Link>
          </motion.div>

          {/* Fun animation */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🔍
            </motion.div>
            <p className="text-gray-500 mt-2">Still searching for treasure...</p>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </PageTransition>
  )
}

export default NotFoundPage
