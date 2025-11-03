import PageTransition from '../components/PageTransition'
import NativeSEO from '../components/NativeSEO'
import HeroSection from '../components/HeroSection'
import TrovoFiLandingSection from '../components/TrovoFiLandingSection'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import WhyTrovoSection from '../components/WhyTrovoSection'
import EarlyAccessSection from '../components/EarlyAccessSection'

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Trovo",
    "alternateName": ["Trovo Fi", "Trovo Fintech", "Trovo App"],
    "url": "https://trovo.app",
    "logo": "https://trovo.app/image2.png",
    "description": "Trovo is India's leading fintech platform that transforms unused credit card points into instant rewards and seamless digital payments.",
    "foundingDate": "2024",
    "founders": [{
      "@type": "Person",
      "name": "Trovo Team"
    }],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": "Financial Technology",
    "category": "Fintech",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://twitter.com/trovoapp",
      "https://linkedin.com/company/trovo"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Trovo Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Credit Card Points Conversion",
            "description": "Convert unused credit card points into instant rewards"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "UPI Payments",
            "description": "Seamless digital payments with rewards"
          }
        }
      ]
    }
  }

  return (
    <PageTransition>
      <NativeSEO 
        title="Trovo - Revolutionary Fintech App | Unlock Credit Card Points & Instant Rewards"
        description="Trovo Fi transforms your unused credit card points into instant rewards and seamless UPI payments. Join 10,000+ Indians maximizing their financial potential with Trovo's revolutionary fintech platform."
        keywords="trovo, trovo fi, trovo fintech, trovo app, trovo india, credit card points, instant rewards, UPI payments, fintech app india, digital payments, cashback app, financial technology, money management, credit card rewards, point conversion, mobile payments, trovo financial services"
        canonical="https://trovo.app"
        structuredData={structuredData}
      />
      {/* Normal flow: sections scroll one after another, no snap */}
      <div className="relative">
        <HeroSection />
        <ProblemSection />
        <TrovoFiLandingSection />
        <SolutionSection />
        <WhyTrovoSection />
        <EarlyAccessSection />
      </div>
    </PageTransition>
  )
}

export default HomePage
