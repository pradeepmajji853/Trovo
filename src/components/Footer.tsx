import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Data Security', path: '/data-security' }
  ]

  const complianceInfo = [
    { label: 'RBI Guidelines', description: 'Data localization compliant' },
    { label: 'CIBIL 675+', description: 'Minimum score for credit features' }
  ]

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" itemScope itemType="https://schema.org/Organization">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/image.png"
                alt="Trovo Fi Logo - Revolutionary Fintech Platform"
                className="h-8 w-auto filter brightness-0 invert"
                itemProp="logo"
              />
              <span className="text-xl font-bold" itemProp="name">Trovo</span>
            </div>
            <p 
              className="text-gray-400 leading-relaxed mb-6"
              itemProp="description"
            >
              <span itemProp="legalName">Trovo Fi Private Limited</span><br />
              <span itemProp="areaServed" itemScope itemType="https://schema.org/Country">
                <span itemProp="name">India</span>'s
              </span> comprehensive fintech solution for credit card rewards, UPI cashback, and secure payments.
            </p>
            
            <div className="text-sm text-gray-500 space-y-2">
              <p itemProp="email">Support: support@trovo.online</p>
              <p>Grievance Officer: Available 48h response</p>
              <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                Made in <span itemProp="addressCountry">India</span> | Data stored in India
              </p>
              <meta itemProp="url" content="https://trovo.app" />
              <meta itemProp="foundingDate" content="2024" />
              <meta itemProp="industry" content="Financial Technology" />
            </div>
          </div>

          {/* Legal & Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Policies</h3>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-trovo-green transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 text-sm text-gray-500">
              <p className="mb-2">Your Rights:</p>
              <ul className="space-y-1 text-xs list-disc list-inside marker:text-gray-500">
                <li>Access & correct your data</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing</li>
                <li>File grievances (30-day resolution)</li>
              </ul>
            </div>
          </div>

          {/* Compliance & Security */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Security & Compliance</h3>
            <div className="space-y-3">
              {complianceInfo.map((item, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg">
                  <div className="text-sm font-medium text-trovo-green">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.description}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-xs text-gray-500">
              <p>End-to-end encryption</p>
              <p>Multi-factor authentication</p>
              <p>Data localized in India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>© {currentYear} Trovo Fi Private Limited. All rights reserved.</p>
              <p className="text-xs mt-1">Services subject to eligibility criteria. Age 18+, PAN mandatory.</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-trovo-green font-medium">Launching Soon in India</p>
              <p className="text-xs mt-1">Refunds within 21 working days | Grievances resolved in 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
