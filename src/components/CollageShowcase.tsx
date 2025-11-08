import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const collageSrc = encodeURI('/college.webp')

// Floating accent bubble positions
const bubbles = [
  { x: '10%', y: '12%', size: 'w-32 h-32', delay: 0 },
  { x: '82%', y: '24%', size: 'w-24 h-24', delay: 0.2 },
  { x: '18%', y: '70%', size: 'w-20 h-20', delay: 0.4 },
  { x: '75%', y: '72%', size: 'w-28 h-28', delay: 0.6 },
]

const CollageShowcase: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Parallax & effects (reduced scale for smaller visual size)
  const imgScale = useTransform(scrollYProgress, [0, 0.4, 1], [1.08, 1.01, 1])
  const imgRotate = useTransform(scrollYProgress, [0, 1], [8, 0])
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [0, 1, 1, 0.92])
  const blurVal = useTransform(scrollYProgress, [0, 0.5], ['blur(14px)', 'blur(0px)'])

  return (
    <section ref={ref} id="collage-showcase" className="relative h-screen overflow-hidden flex flex-col">
      {/* Ambient backdrop */}
      <motion.div style={{ opacity: sectionOpacity }} aria-hidden className="absolute inset-0 bg-gradient-to-br from-trovo-green-50 via-white to-trovo-green-100" />
      <motion.div aria-hidden style={{ opacity: sectionOpacity }} className="absolute inset-0 bg-gradient-radial from-trovo-green/0 via-trovo-green/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.p
            className="text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-trovo-green-dark/80"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >Unified intelligence</motion.p>
          <motion.h2
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.08 }}
          >One canvas. Zero fragmentation.</motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          >After you see the chaos, witness the harmony. A single adaptive surface where rewards, payments & sharing interlock instantly.</motion.p>
        </div>

        {/* Collage + decorative layer */}
        <div className="mt-6 relative mx-auto w-screen h-screen -mx-4 sm:-mx-6">
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 h-full"
            style={{ scale: imgScale, rotateX: imgRotate, filter: blurVal, transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 40, scale: 1.03 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.img
              src={collageSrc}
              alt="Unified Trovo canvas"
              className="w-full h-full object-contain select-none"
              loading="lazy"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
              draggable={false}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-trovo-green/10 mix-blend-overlay" />
            {/* Inner pulse */}
            <motion.div aria-hidden className="absolute inset-0 rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: [0.15, 0.45, 0.15] }} transition={{ repeat: Infinity, duration: 8 }} style={{ background: 'radial-gradient(circle at 30% 30%, rgba(0,168,120,0.25), transparent 70%)' }} />
          </motion.div>

          {/* Floating bubbles */}
          {bubbles.map((b, i) => (
            <motion.div
              key={i}
              aria-hidden
              className={`absolute pointer-events-none ${b.size} rounded-full bg-gradient-to-br from-trovo-green/30 via-trovo-green-light/30 to-transparent blur-3xl`}
              style={{ left: b.x, top: b.y }}
              initial={{ opacity: 0, scale: 0.3, y: 40 }}
              whileInView={{ opacity: 0.55, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: b.delay, ease: 'easeOut' }}
              animate={{ y: [0, -18, 0], scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
            />
          ))}
        </div>

        {/* ...removed metrics/value props grid... */}
      </div>

      {/* Bottom fade */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.8 }} />
    </section>
  )
}

export default CollageShowcase
