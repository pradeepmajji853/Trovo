import { useState, useRef } from 'react'
import { db, app } from '../utils/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getAuth, signInAnonymously } from 'firebase/auth'
import confetti from 'canvas-confetti'

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
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
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
    <section className="relative py-12 md:py-16 overflow-hidden" ref={ref} id="early-access" aria-labelledby="early-access-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-trovo-green via-trovo-green-200 to-white"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 id="early-access-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Be first to try Trovo.
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-800">
            We'll be in touch before launch.
          </p>

          {!isSubmitted ? (
            <div className="max-w-sm mx-auto mb-6">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3" aria-describedby={error ? 'waitlist-error' : undefined}>
                <label htmlFor="waitlist-email" className="sr-only">Email</label>
                <input
                  id="waitlist-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className={`flex-1 px-5 py-3 rounded-full text-gray-900 font-medium focus:outline-none border ${
                    error ? 'border-red-400 bg-white/90' : 'border-white/30 bg-white/80 hover:bg-white/90'
                  }`}
                  aria-invalid={!!error}
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
                  disabled={isLoading}
                  data-attr="cta:join-early-access"
                >
                  {isLoading ? 'Submitting...' : 'Join Early Access'}
                </button>
              </form>
              {error && (
                <p id="waitlist-error" className="text-red-700 text-sm mt-2 text-center bg-red-100/80 px-3 py-1.5 rounded-full border border-red-300" role="alert">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-white/90 backdrop-blur-lg border border-white/50 rounded-3xl px-6 py-8 shadow-2xl">
              <p className="text-trovo-green text-sm font-semibold uppercase tracking-[0.25em] mb-2">You’re on the list</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thanks for joining early access</h3>
              <p className="text-gray-700 mb-4">
                We’ve locked in <span className="font-semibold">{email}</span>. Expect invite-only updates, product previews,
                and launch-day perks straight to your inbox.
              </p>
              <p className="text-sm text-gray-500">Need to update your email? Submit again with the new address.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default EarlyAccessSection
