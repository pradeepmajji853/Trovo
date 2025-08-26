import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = 'Privacy Policy - Trovo Fintech'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.section 
        className="bg-gradient-to-br from-trovo-green to-trovo-green-dark text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How Trovo Fintech protects and manages your personal information
          </motion.p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="container-custom max-w-4xl">
          
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Trovo Fintech Private Limited ("Trovo", "we", "our", or "us") is committed to protecting the privacy of its users ("you" or "users"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal and financial information when you access or use the Trovo application, website, and associated services. By using our services, you consent to the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">(a) Personal Information</h3>
              <p className="text-gray-700 mb-4">We may collect the following personal details during registration, onboarding, or while using services:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Full name</li>
                <li>Date of birth</li>
                <li>Gender</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Permanent Account Number (PAN)</li>
                <li>Address (permanent and communication)</li>
                <li>Identity proof and documents (e.g., Aadhaar, Passport, Voter ID)</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">(b) Financial Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Credit card details (masked; we never store CVV)</li>
                <li>Bank account details (for payments and refunds)</li>
                <li>Credit score, repayment history, and outstanding dues</li>
                <li>Reward points balances and redemption data</li>
                <li>UPI transaction data and history</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">(c) Device & Technical Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Device type, unique device ID, IMEI number</li>
                <li>IP address and geolocation</li>
                <li>Browser details, operating system, and app version</li>
                <li>Log files and crash reports</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">(d) Usage Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Transactional data (bill payments, rewards, loans)</li>
                <li>App navigation patterns, frequency of use</li>
                <li>Preference settings and user interactions</li>
              </ul>
            </div>
          </div>

          {/* Consent & Access Controls */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Consent & Access Controls</h2>
            <div className="space-y-4 text-gray-700">
              <p>Users provide explicit consent at the time of registration, KYC verification, and when linking financial instruments.</p>
              <p className="font-semibold">Trovo may request permission to access:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Emails:</strong> Only financial emails (credit card statements, loan reminders, insurance notices). We never read personal or promotional emails.</li>
                <li><strong>Contacts & SMS (optional):</strong> For referral rewards and fraud detection.</li>
                <li><strong>Location:</strong> To provide location-based offers and detect anomalies in usage.</li>
              </ul>
              <p>Users may withdraw or modify consent at any time through app settings.</p>
            </div>
          </div>

          {/* Use of Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Use of Information</h2>
            <p className="text-gray-700 mb-4">Trovo uses collected information for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Enabling credit card bill payments, UPI transactions, and reward redemptions</li>
              <li>Providing reminders for payments, due dates, and reward expiry</li>
              <li>Offering personalized rewards, offers, and credit products</li>
              <li>Detecting and preventing fraud, money laundering, and unauthorized use</li>
              <li>Conducting research, data analytics, and product improvements</li>
              <li>Meeting regulatory and compliance obligations</li>
            </ul>
          </div>

          {/* Data Sharing & Disclosure */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Sharing & Disclosure</h2>
            <p className="text-gray-700 mb-4">Trovo does not sell or rent user data. We may share data with:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Partner Banks, NBFCs, and Credit Bureaus:</strong> For credit score verification, loan disbursement, and repayment tracking.</li>
              <li><strong>Technology & Service Providers:</strong> Including cloud hosting, payment gateways, and KYC providers (e.g., AWS, Razorpay, Cashfree, Hyperverge).</li>
              <li><strong>Regulatory Authorities:</strong> RBI, SEBI, Income Tax Department, or other legal authorities if mandated by law.</li>
              <li><strong>Affiliates and Group Companies:</strong> Only for service delivery and product enhancement.</li>
            </ul>
            <p className="text-gray-700 mt-4">All third parties are bound by confidentiality and data processing agreements to ensure your information is secure and used only for specified purposes.</p>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Data Security</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>PCI DSS compliance for payment card transactions</li>
              <li>ISO 27001 compliance for information security management</li>
              <li>End-to-end encryption for sensitive data both at rest and in transit</li>
              <li>Multi-factor authentication (MFA) and secure login protocols</li>
              <li>Regular audits, vulnerability assessments, and penetration testing</li>
            </ul>
          </div>

          {/* Data Localization & Retention */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Localization & Retention</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>All data is stored in servers physically located in India, per RBI's data localization guidelines</li>
              <li>Personal and financial data is retained only as long as necessary to provide services or comply with legal obligations</li>
              <li>Upon account deletion, user data is securely archived or anonymized except where retention is legally required</li>
            </ul>
          </div>

          {/* User Rights */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. User Rights</h2>
            <p className="text-gray-700 mb-4">Users have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access their data collected by Trovo</li>
              <li>Request correction of inaccurate or outdated information</li>
              <li>Request deletion of personal data (subject to regulatory retention requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>File grievances regarding data misuse</li>
            </ul>
            <div className="mt-6 p-6 bg-trovo-green-50 rounded-lg border border-trovo-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Grievance Officer</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Acknowledge complaints within 48 hours</li>
                <li>• Resolve complaints within 30 days</li>
                <li>• Contact: support@trovo.online</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Email:</strong> support@trovo.online
              <br />
              <strong>Company:</strong> Trovo Fintech Private Limited
            </p>
          </div>

        </div>
      </motion.section>
    </div>
  )
}

export default PrivacyPolicyPage
