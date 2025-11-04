import FadeInSection from './FadeInSection'

const steps = [
  { title: 'Connect your cards securely', desc: 'Safe and private, with your control at every step.' },
  { title: 'Trovo organizes and unlocks value', desc: 'Clear, actionable insights without the maze.' },
  { title: 'Use Trovo with confidence', desc: 'Payments and sharing that simply work.' },
]

const MiniHowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-[#0b0e11]">
      <div className="container-custom">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 text-center">How it works</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">A simple flow built for clarity and trust.</p>
        </FadeInSection>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeInSection key={s.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{s.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/how-it-works" className="btn-ghost">See the flow →</a>
        </div>
      </div>
    </section>
  )
}

export default MiniHowItWorks