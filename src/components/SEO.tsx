import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  noindex?: boolean
  nofollow?: boolean
  structuredData?: any
}

const defaultSEO = {
  title: 'Trovo - Unlock Your Hidden Treasure | Fintech App India',
  description: 'Turn your unused credit card points into instant rewards and seamless payments. Join thousands of Indians maximizing their financial potential with Trovo.',
  keywords: 'trovo, trovo fi, fintech, credit cards, rewards, UPI, payments, India, financial technology, mobile app, credit card points, instant rewards, cashback, digital payments, financial app, money management, trovo fintech, trovo app, trovo india',
  ogImage: '/image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image'
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType,
  twitterCard,
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const seoTitle = title || defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoKeywords = keywords || defaultSEO.keywords
  const seoOgImage = ogImage || defaultSEO.ogImage
  const seoOgType = ogType || defaultSEO.ogType
  const seoTwitterCard = twitterCard || defaultSEO.twitterCard

  const robotsContent = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Trovo" />
      <meta name="robots" content={robotsContent} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoOgType} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:image:alt" content="Trovo Fintech App" />
      <meta property="og:site_name" content="Trovo" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={seoTwitterCard} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
      <meta name="twitter:image:alt" content="Trovo Fintech App" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1DB954" />
      <meta name="msapplication-TileColor" content="#1DB954" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" as="style" />
      <link rel="preload" href="/image2.png" as="image" />
    </Helmet>
  )
}

export default SEO
