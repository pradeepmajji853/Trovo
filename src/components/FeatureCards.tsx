import FadeInSection from './FadeInSection'

const features = [
  {
    title: 'Rewards, simplified',
    desc: 'Connect your cards and unlock value without the maze.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><path d="M20 7H4a2 2 0 0 0-2 2v1h20V9a2 2 0 0 0-2-2Z"/><path d="M22 14H2v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1Z"/></svg>
    )
  },
  {
    title: 'Everyday payments, better',
    desc: 'Make payments that feel rewarding and effortless.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>
    )
  },
  {
    title: 'Smart sharing',
    desc: 'Share credit safely with auto-settlements and controls.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-trovo-green"><path d="M7 7h.01"/><path d="M17 17h.01"/><path d="M10 12h4"/><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/></svg>
    )
  }
]

const FeatureCards: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#0b0e11]">
      <div className="container-custom">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 text-center">How Trovo Helps</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">Rewards, payments, and sharing — made simple.</p>
        </FadeInSection>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <FadeInSection key={f.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-trovo-green/10 flex items-center justify-center mb-4 text-trovo-green" aria-hidden>
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{f.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{f.desc}</p>
                <a href="/how-it-works" className="mt-4 inline-flex items-center text-trovo-green font-medium hover:underline" aria-label={`Learn more about ${f.title}`}>
                  Learn more →
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCards