import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { BlurInText } from './AnimatedText'
import ParticlesBackground from './ParticlesBackground'
import PhoneImageShowcase from './mockups/PhoneImageShowcase'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)

  // Match About page scroll-driven animation
  const { scrollYProgress } = useScroll()
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 2.0])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const blurAmount = useTransform(scrollYProgress, [0, 0.3], [0, 50])
  const contentFilter = useMotionTemplate`blur(${blurAmount}px)`

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] bg-gradient-to-br from-white to-gray-50 overflow-hidden flex flex-col"
    >
      <ParticlesBackground />
      {/* Background accents */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity: backgroundOpacity }}>
        <motion.div
          className="absolute -top-40 -right-40 w-56 sm:w-64 h-56 sm:h-64 bg-trovo-green opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-64 sm:w-72 h-64 sm:h-72 bg-trovo-green-light opacity-5 rounded-full blur-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      </motion.div>

      <div aria-hidden className="shrink-0 h-16 sm:h-20 md:h-24" />

      {/* Full-width wrapper with global transforms */}
      <motion.div
        className="flex-1 flex items-center w-full"
        style={{ scale: contentScale, opacity: contentOpacity, filter: contentFilter, transformOrigin: '50% 20% 0' }}
      >
        <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-6 sm:py-8 md:py-12 lg:py-0">
            {/* Left Content */}
            <header className="text-center lg:text-left overflow-hidden order-1">
              <div>
                <div className="mb-4 sm:mb-5">
                  {/* Animated headline with blur effect */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
                    <BlurInText text="Your money has more value than you think." delay={0.2} />
                  </h1>
                  {/* Animated subline with word-by-word blur */}
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-trovo-green mt-3">
                    <BlurInText 
                      text="Trovo redeems what your bank forgets—making every payment rewarding and sharing effortless." 
                      delay={1.2}
                    />
                  </div>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.5, ease: 'easeOut' }}
                >
                  <motion.button
                    whileHover={{ scale: 1.06, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => scrollToId('early-access')}
                    className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-7 py-3 sm:py-3.5"
                    data-attr="cta:join-early-access"
                  >
                    Join Early Access
                  </motion.button>
                </motion.div>

                {/* Mobile/Tablet Phone Showcase */}
                <div className="mt-8 lg:hidden flex justify-center">
                  <PhoneImageShowcase className="pointer-events-none select-none" />
                </div>
              </div>
            </header>

            {/* Right Content - Phone Showcase (visible on large screens) */}
            <div className="hidden lg:flex justify-center lg:justify-end pr-4 xl:pr-8 overflow-visible order-2">
              <motion.div
                className="scale-90 sm:scale-95 md:scale-100"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              >
                <div ref={phoneRef} className="relative" aria-hidden={false}>
                  <PhoneImageShowcase className="pointer-events-none select-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
