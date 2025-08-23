import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AnnouncementBanner from './components/AnnouncementBanner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieConsent from './components/CookieConsent'
import FloatingWaitlistButton from './components/FloatingWaitlistButton'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <AnnouncementBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <CookieConsent />
        <FloatingWaitlistButton />
      </div>
    </Router>
  )
}

export default App
