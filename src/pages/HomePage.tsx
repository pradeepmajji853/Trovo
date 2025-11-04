import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import FeatureCards from '../components/FeatureCards'
import TrustSecurity from '../components/TrustSecurity'
import EarlyAccessSection from '../components/EarlyAccessSection'
import ScrollStory from '../components/ScrollStory'
import FeatureMarquee from '../components/FeatureMarquee'

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trovo",
    "url": "https://trovo.app",
    "logo": "https://trovo.app/image2.png",
    "description": "Trovo helps you unlock value from rewards, payments, and sharing — simply and securely.",
    "address": { "@type": "PostalAddress", "addressCountry": "IN" }
  }

  return (
    <PageTransition>
      <NativeSEO 
        title="Trovo Fi — Your Rewards, Reimagined"
        description="Your money has more value than you think. Trovo helps you unlock it — rewards, payments, and sharing that simply work."
        canonical="https://trovo.app"
        structuredData={structuredData}
      />
      <main id="content">
        <HeroSection />
        <ScrollStory />
        <ProblemSection />
        <FeatureCards />
        <FeatureMarquee />
        <TrustSecurity />
        <EarlyAccessSection />
      </main>
    </PageTransition>
  )
}

export default HomePage
