import { useState, useRef } from 'react'
import { db, app } from '../utils/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'

// One-time anonymous auth helper
let didAnonAuth = false
const ensureAnonymousAuth = async () => {
  if (didAnonAuth) return
  try {
    const auth = getAuth(app)
    await signInAnonymously(auth)
    didAnonAuth = true
  } catch (_) {
    // If anonymous auth is not enabled, continue without it
  }
}

const EarlyAccessSection: React.FC = () => {
  const ref = useRef(null)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      setIsLoading(true)
      // Try to satisfy Firestore rules that require an authenticated user
      await ensureAnonymousAuth()

      // Add to Firestore waitlist collection
      await addDoc(collection(db, 'waitlist'), {
        email: email.trim().toLowerCase(),
        source: 'hero-early-access',
        createdAt: serverTimestamp()
      })
      setIsSubmitted(true)
    } catch (err: any) {
      console.error('Waitlist submit failed:', err)
      const code = err?.code || ''
      if (code === 'permission-denied') {
        setError('Permission denied. Enable Firestore and update rules or enable anonymous auth for testing.')
      } else if (code === 'unavailable') {
        setError('Network error. Please check your connection and try again.')
      } else if (code === 'failed-precondition') {
        setError('Firestore is not initialized for this project. Please enable Firestore in Firebase Console.')
      } else {
        setError(`Something went wrong (${err?.code || 'unknown'}). ${err?.message || ''}`.trim())
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden" ref={ref} id="early-access">
      <div className="absolute inset-0 bg-gradient-to-br from-trovo-green via-trovo-green-200 to-white"></div>
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Don't Wait. <span className="text-trovo-green">Get Ahead</span>
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-gray-800">
            While others lose money every month, you'll be earning from day one. First access to India's smartest money moves.
            <br className="hidden md:block" />
            <strong className="text-gray-900">No waiting. Just winning.</strong>
          </p>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto mb-8">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className={`flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none border ${
                    error ? 'border-red-400 bg-white/90' : 'border-white/30 bg-white/80 hover:bg-white/90'
                  }`}
                  aria-invalid={!!error}
                  aria-describedby={error ? 'waitlist-error' : undefined}
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Join Waitlist'}
                </button>
              </form>
              {error && (
                <p id="waitlist-error" className="text-red-700 text-sm mt-2 text-center bg-red-100/80 px-4 py-2 rounded-full border border-red-300" role="alert">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 shadow-xl">
                <div className="w-16 h-16 bg-trovo-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-trovo-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Successfully Added!</h3>
                <p className="text-lg text-gray-700 mb-4">
                  You're now on our priority list. We'll notify you as soon as Trovo launches.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-trovo-green rounded-full"></div>
                  <span>Your early access is confirmed</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
