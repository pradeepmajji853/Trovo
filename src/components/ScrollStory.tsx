import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { useRef } from 'react'

const LINES = [
  'the story of trovo',
  'begins with trust.',
  'direct cash on bills.',
  'upi that gives back.',
  'one tap. nfc. go.',
  'credit, private by default.',
  'rewards that feel fair.',
  'payments that feel effortless.',
  'this is trovo.',
]

// Letter-level animation variants for brightening one-by-one
const containerVariants = { hidden: {}, visible: {} }
const letterVariants = {
  hidden: { opacity: 0.25 },
  visible: { opacity: 1 }
}

const TextLine: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const ref = useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 30%'] })
  const blurMV = useTransform(scrollYProgress, [0, 1], [2.5, 0])
  const letter = useTransform(scrollYProgress, [0, 1], [0.2, 0])
  const y = useTransform(scrollYProgress, [0, 1], [16, 0])
  const filter = useMotionTemplate`blur(${blurMV}px)`
  // dark text that “brightens” from muted to full (line-level color)
  const r = useTransform(scrollYProgress, [0, 1], [17, 17]) // base gray-900
  const g = useTransform(scrollYProgress, [0, 1], [24, 24])
  const b = useTransform(scrollYProgress, [0, 1], [39, 39])
  const a = useTransform(scrollYProgress, [0, 1], [0.45, 1])
  const color = useMotionTemplate`rgba(${r}, ${g}, ${b}, ${a})`

  const chars = Array.from(text)

  return (
    <motion.p
      ref={ref}
      className="whitespace-pre leading-[1.05] tracking-tight font-serif text-[11.5vw] sm:text-[8.5vw] md:text-[6.5vw] lg:text-[5vw] xl:text-[4.4vw] will-change-transform"
      style={{ filter, letterSpacing: letter, y, color }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.02, delayChildren: delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {ch}
        </motion.span>
      ))}
    </motion.p>
  )
}

const ScrollStory: React.FC = () => {
  return (
    <section aria-labelledby="story-title" className="relative bg-gradient-to-b from-trovo-green-50 via-trovo-green-100 to-trovo-green-200">
      {/* subtle masks for cinematic fade */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/60 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28">
        <div className="mb-8 sm:mb-10">
          <p id="story-title" className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-trovo-green-dark/80">
            not everyone makes it in.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-7 md:space-y-8">
          {LINES.map((t, i) => (
            <TextLine key={t} text={t} delay={i * 0.04} />
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <a
            href="/#early-access"
            className="inline-flex items-center rounded-full bg-trovo-green text-white px-6 py-3 text-sm sm:text-base font-semibold hover:bg-trovo-green-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40"
            data-attr="cta:join-early-access"
          >
            Join Early Access
          </a>
        </div>
      </div>
    </section>
  )
}

export default ScrollStory