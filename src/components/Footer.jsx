import { useState, useEffect } from 'react'

export default function Footer() {
  const [displayText, setDisplayText] = useState('Obscuron')

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(prev => prev === 'Obscuron' ? '0bZc8r0n' : 'Obscuron')
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </span>
          <span>prs/{displayText}</span>
        </div>
        <p className="tagline">Built in silence. <span className="accent">//</span></p>
        <div className="footer-links">
          <a href="https://github.com/prsro" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/prsro" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://discord.gg/your-invite-code" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="mailto:prsro@protonmail.com">Email</a>
        </div>
        <p className="copyright">&copy; 2026 PRS / Obscuron. All rights reserved.</p>
      </div>
    </footer>
  )
}
