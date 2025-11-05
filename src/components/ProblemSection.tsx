import React from 'react'
import { motion } from 'framer-motion'

const problems = [
  {
    icon: '💳',
    title: 'Confusing rewards, wasted points',
    description: 'Complex programs and expiry dates mean value left on the table.',
    impact: '₹1,200+ lost every year',
    progress: 0.8,
  },
  {
    icon: '📱',
    title: 'UPI, but no real rewards',
    description: 'Everyday payments rarely feel rewarding or instant.',
    impact: '₹1,500+ missed in cash value',
    progress: 0.75,
  },
  {
    icon: '👥',
    title: 'Sharing cards feels risky',
    description: 'Security, limits, and tracking are hard when you share.',
    impact: 'High day‑to‑day risk',
    progress: 0.9,
  },
]

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" aria-labelledby="problem-title" className="relative overflow-hidden">
      {/* Background: soft brand gradient + floating accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-trovo-green-50/60 to-trovo-green-100/40" aria-hidden />
      <div className="absolute -top-24 -right-32 w-64 h-64 bg-trovo-green/10 rounded-full blur-3xl animate-float" aria-hidden />
      <div className="absolute -bottom-28 -left-20 w-72 h-72 bg-trovo-green-light/10 rounded-full blur-3xl animate-float-delayed" aria-hidden />

      <div className="relative container-custom section-padding">
        {/* Eyebrow + Headline */}
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] uppercase text-trovo-green-dark/80">The problem we’re solving</p>
          <h2 id="problem-title" className="mt-3 text-3xl md:text-4xl font-bold leading-tight text-gradient">
            Everyday money flows aren’t rewarding, clear, or safe to share.
          </h2>
          <p className="mt-3 text-gray-700 text-base md:text-lg">
            Most of us miss tangible value on routine payments, get lost in points, and worry when friends or family need to use our cards.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-4 py-2 text-sm text-ink-muted border border-surface-ring">
            <span className="inline-block h-2 w-2 rounded-full bg-trovo-green animate-pulse-slow" aria-hidden />
            <span>₹3,000+ value typically lost per year — and growing</span>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl border border-gray-200/70 bg-white/80 shadow-sm backdrop-blur-sm p-6 hover:shadow-lg hover:shadow-trovo-green/10 transition-all"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-trovo-green/5 to-trovo-green-light/5" aria-hidden />

              <div className="relative">
                <div className="text-4xl mb-4 select-none" aria-hidden>{p.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-600">{p.description}</p>

                {/* Impact badge */}
                <div className="mt-3 inline-flex items-center rounded-full bg-trovo-green-100 text-trovo-green-dark text-xs font-semibold px-3 py-1">
                  {p.impact}
                </div>

                {/* Pain meter */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs text-ink-muted">
                    <span>Pain today</span>
                    <span>{Math.round(p.progress * 100)}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-trovo-green to-trovo-green-light"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.round(p.progress * 100)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.15 + idx * 0.05 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution bridge */}
        <motion.div
          className="mt-12 flex flex-col items-start md:items-center md:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur px-5 py-3 border border-gray-200">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-trovo-green/10 text-trovo-green">✓</span>
            <span className="text-sm md:text-base text-ink-muted">
              Trovo turns every tap into instant, transparent value — with safe, trackable sharing.
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/#early-access"
              className="btn-primary px-6 py-3 text-sm font-semibold"
              data-attr="cta:join-early-access-from-problem"
            >
              Join Early Access
            </a>
            <a
              href="/#story-title"
              className="inline-flex items-center text-trovo-green font-semibold hover:underline text-sm"
            >
              See how it works →
            </a>
          </div>
        </motion.div>
      </div>

      <div aria-hidden className="h-12 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

export default ProblemSection
