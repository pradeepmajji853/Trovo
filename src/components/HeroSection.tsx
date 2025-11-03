import { useEffect, useRef, useState } from 'react'
import TrovoPhoneMockup from './mockups/TrovoPhoneMockup'

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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)] bg-gradient-to-br from-white to-gray-50 overflow-hidden flex flex-col"
    >
      {/* Background accents with fading opacity + subtle blur animation */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: fx.bgOpacity, filter: `blur(${fx.blur * 0.3}px)`, transition: 'opacity 120ms linear, filter 120ms linear' }}>
        <div className="absolute -top-40 -right-40 w-56 sm:w-64 h-56 sm:h-64 bg-trovo-green opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-64 sm:w-72 h-64 sm:h-72 bg-trovo-green-light opacity-5 rounded-full blur-3xl" />
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
                <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                  {['Do','you','want','your','treasure','back?'].map((w) => (
                    <h1 key={w} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 inline-block">{w}</h1>
                  ))}
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-trovo-green mb-4">Reclaim your financial power</div>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
                <strong>Trovo Fi</strong> transforms your unused credit card points into instant rewards. Experience guaranteed UPI cashback, seamless tap-to-pay convenience, and safely share financial resources with trusted friends. Join <strong>Trovo</strong> - India's revolutionary fintech platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button className="btn-primary w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-7 py-3 sm:py-3.5">Join Early Access</button>
                <button className="w-full sm:w-auto border-2 border-trovo-green text-trovo-green font-semibold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-trovo-green hover:text-white transition-all duration-300">Learn More</button>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">500+</div>
                  <div className="text-sm md:text-base text-gray-600">Users Surveyed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">4 Clicks</div>
                  <div className="text-sm md:text-base text-gray-600">Redemption Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-trovo-green">100%</div>
                  <div className="text-sm md:text-base text-gray-600">Digital First</div>
                </div>
              </div>
            </div>
          </header>

          {/* Right Content - Phone Mockup (hidden on mobile and tablet) */}
          <div className="hidden lg:flex justify-center lg:justify-end overflow-hidden order-2">
            <div className="scale-90 sm:scale-95 md:scale-100">
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
              >
                <TrovoPhoneMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
