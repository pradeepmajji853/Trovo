import { useEffect, useState } from 'react'

const setMetaTheme = (isDark: boolean) => {
  const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null
  if (meta) meta.setAttribute('content', isDark ? '#0b0e11' : '#ffffff')
  // Inform the UA for form controls, scrollbars, etc.
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
}

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const next = stored ? stored === 'dark' : prefersDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    setMetaTheme(next)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    setMetaTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200/60 bg-white/80 hover:bg-gray-100 text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40 dark:bg-white/10 dark:text-gray-200 dark:border-white/10"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414"/>
          <circle cx="12" cy="12" r="4" />
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle