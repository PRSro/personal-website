import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = ['home', 'about', 'projects', 'labs', 'certifications', 'blog', 'path', 'contact']

export default function Navbar({ activeSection, navOpen, setNavOpen, scrollTo }) {
  const [displayText, setDisplayText] = useState('Obscuron')

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => prev === 'Obscuron' ? '0bZc8r0n' : 'Obscuron')
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="nav-container">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <span className="logo-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
          <span>prs<span className="accent">/</span>{displayText}</span>
        </a>
        
        <div className={`nav-links ${navOpen ? 'open' : ''}`}>
          {navItems.map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollTo(section) }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        <button className={`hamburger ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(!navOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  )
}
