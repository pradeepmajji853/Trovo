import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center justify-start flex-1 md:flex-initial ml-2 md:ml-0">
            <Link to="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src="/image2.png"
                  alt="Trovo Logo"
                  className="h-8 md:h-9 w-8 md:w-9 object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(85%) sepia(40%) saturate(2000%) hue-rotate(80deg) brightness(95%) contrast(105%)'
                  }}
                />
              </motion.div>
              <motion.span
                className="text-2xl md:text-3xl font-bold text-trovo-green group-hover:text-trovo-green-light transition-all duration-300 tracking-tight ml-1"
                whileHover={{ scale: 1.02 }}
                style={{
                  textShadow: '0 0 10px rgba(29, 185, 84, 0.3)'
                }}
              >
                Trovo
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 + index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Link
                  to={item.path}
                  className="relative px-4 py-2 text-gray-700 hover:text-trovo-green transition-colors duration-300 font-medium group/nav"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-trovo-green/5 rounded-full opacity-0 group-hover/nav:opacity-100"
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-trovo-green/10 rounded-full"
                      layoutId="activeTab"
                      initial={false}
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30 
                      }}
                    />
                  )}
                  
                  {/* Bottom line indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-trovo-green"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: location.pathname === item.path ? "60%" : 0 
                    }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <motion.span
                className={`w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <motion.span
                className={`w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200/20 bg-white/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 text-gray-700 hover:text-trovo-green hover:bg-trovo-green/5 rounded-lg transition-all duration-200 font-medium ${
                        location.pathname === item.path ? 'text-trovo-green bg-trovo-green/10' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
