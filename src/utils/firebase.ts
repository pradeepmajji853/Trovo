// Firebase client initialization for Trovo
// SDKs
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

// Config provided by user
const firebaseConfig = {
  apiKey: 'AIzaSyDQwYetArY9ymAhvvTMRlQNlRl66WMA5A0',
  authDomain: 'forensiq-bc370.firebaseapp.com',
  projectId: 'forensiq-bc370',
  storageBucket: 'forensiq-bc370.firebasestorage.app',
  messagingSenderId: '803165638717',
  appId: '1:803165638717:web:9a90a62b6379cb5c05da54',
  measurementId: 'G-XV91BQ5VC4',
}

// Initialize
export const app = initializeApp(firebaseConfig)

// Analytics (guard for SSR / unsupported env)
export let analytics: ReturnType<typeof getAnalytics> | undefined
;(async () => {
  try {
    if (typeof window !== 'undefined' && (await analyticsSupported())) {
      analytics = getAnalytics(app)
    }
  } catch (e) {
    // no-op if analytics not supported
  }
})()

// Firestore
export const db = getFirestore(app)
