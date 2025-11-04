import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'
import FadeInSection from '../components/FadeInSection'

const HowItWorksPage = () => {
  return (
    <PageTransition>
      <NativeSEO title="Trovo Fi — How it Works" description="See how Trovo helps you unlock value from rewards, payments, and sharing — simply and securely." />
      <main id="content" className="section-padding">
        <div className="container-custom">
          <FadeInSection>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">How Trovo Works</h1>
            <p className="mt-4 max-w-2xl text-gray-600">A simple, secure flow that turns complexity into effortless value.</p>
          </FadeInSection>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[ 
              { title: 'Connect your cards securely', desc: 'Safe, encrypted connections with full control.' },
              { title: 'Trovo organizes rewards and unlocks value', desc: 'Clarity and conversion without the maze.' },
              { title: 'Use Trovo for payments and sharing', desc: 'Everyday actions that feel rewarding and confident.' },
            ].map((s, i) => (
              <FadeInSection key={s.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-600">{s.desc}</p>
                  <div className="mt-4 h-40 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400">
                    Visual demo coming soon
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

export default HowItWorksPage