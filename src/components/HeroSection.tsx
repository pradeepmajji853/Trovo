import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BlurInText } from './AnimatedText'
import ParticlesBackground from './ParticlesBackground'
import PhoneImageShowcase from './mockups/PhoneImageShowcase'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null)
  const phoneRef = useRef<HTMLDivElement | null>(null)
  const [fx, setFx] = useState({ contentOpacity: 1, contentScale: 1, bgOpacity: 1, blur: 0 })
  const [isLg, setIsLg] = useState(false)

  useEffect(() => {
    const setBp = () => setIsLg(window.innerWidth >= 1024)
    setBp()
    window.addEventListener('resize', setBp)
    return () => window.removeEventListener('resize', setBp)
  }, [])

  useEffect(() => {
    let raf = 0
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const vh = window.innerHeight || 1
      const width = window.innerWidth || 0

      if (width < 1024) {
        const rect = el.getBoundingClientRect()
        const scrolled = Math.max(-rect.top, 0)
        const start = Math.max(vh * 0.15, 1)
        const span = Math.max(vh * 0.6, 1)
        const p = Math.min(Math.max((scrolled - start) / span, 0), 1)

        setFx({
          contentOpacity: 1,
          contentScale: 1 + p * 0.06,
          bgOpacity: 1 - p * 0.3,
          blur: p * 8
        })
        return
      }

      const rect = el.getBoundingClientRect()
      const span = Math.max(vh * 0.5, 1)
      const scrolled = Math.min(Math.max(-rect.top, 0), span)
      const p = Math.min(Math.max(scrolled / span, 0), 1)
      setFx({
        contentOpacity: 1 - p,
        contentScale: 1 + p * 0.1,
        bgOpacity: 1 - p,
        blur: p * 10
      })
    }

    const onScroll = () => { if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    const onResize = () => { if (raf) cancelAnimationFrame(raf); raf = requestAnimationFrame(update) }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    update()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); if (raf) cancelAnimationFrame(raf) }
  }, [])

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
      {/* Background accents with fading opacity + subtle blur animation */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: fx.bgOpacity, filter: `blur(${fx.blur * 0.3}px)`, transition: 'opacity 120ms linear, filter 120ms linear' }}>
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
      </div>

      {/* Spacer for navbar height (matches calc above) */}
      <div aria-hidden className="shrink-0 h-16 sm:h-20 md:h-24" />

      <div className="container-custom flex-1 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-6 lg:gap-12 items-center py-6 sm:py-8 md:py-12 lg:py-0">
          {/* Left Content */}
          <header className="text-center lg:text-left overflow-hidden order-1">
            <div style={{
              opacity: fx.contentOpacity,
              transform: `scale(${fx.contentScale})`,
              filter: isLg ? `blur(${fx.blur}px)` : `blur(${Math.min(fx.blur, 2)}px)`,
              transformOrigin: '50% 20% 0',
              transition: 'opacity 120ms linear, filter 120ms linear, transform 120ms linear'
            }}>
              <div className="mb-4 sm:mb-5">
                {/* Animated headline with blur effect */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
                  <BlurInText text="Your money has more value than you think." delay={0.2} />
                </h1>
                {/* Animated subline with word-by-word blur */}
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-trovo-green mt-3">
                  <BlurInText 
                    text="Trovo helps you unlock it — rewards, payments, and sharing that simply work." 
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

              {/* Mobile/Tablet Phone Showcase (was hidden previously) */}
              <div className="mt-8 lg:hidden flex justify-center">
                <div
                  className="relative"
                  style={{
                    opacity: fx.contentOpacity,
                    transform: `scale(${Math.min(fx.contentScale, 1.03)})`,
                    filter: `blur(${Math.min(fx.blur, 2)}px)`,
                    transformOrigin: '50% 20% 0',
                    transition: 'opacity 120ms linear, filter 120ms linear, transform 120ms linear'
                  }}
                >
                  <PhoneImageShowcase className="pointer-events-none select-none" />
                </div>
              </div>
            </div>
          </header>

          {/* Right Content - Phone Showcase (visible on large screens) */}
          <div className="hidden lg:flex justify-center lg:justify-end overflow-hidden order-2">
            <motion.div
              className="scale-90 sm:scale-95 md:scale-100"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            >
              <div
                ref={phoneRef}
                className="relative overflow-hidden"
                style={{
                  opacity: fx.contentOpacity,
                  transform: `scale(${fx.contentScale})`,
                  filter: `blur(${fx.blur}px)`,
                  transformOrigin: '50% 20% 0',
                  transition: 'opacity 120ms linear, filter 120ms linear, transform 120ms linear'
                }}
                aria-hidden={false}
              >
                <PhoneImageShowcase className="pointer-events-none select-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
