import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

import { 
  terminalLines, 
  typingPhrases, 
  skills, 
  projects, 
  labs, 
  certifications, 
  timeline, 
  interests, 
  blogPosts,
  projectCategories 
} from './data'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Labs from './components/Labs'
import Certifications from './components/Certifications'
import Blog from './components/Blog'
import Path from './components/Path'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showTerminal, setShowTerminal] = useState(true)
  const [terminalLine, setTerminalLine] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [typingPhrase, setTypingPhrase] = useState(0)
  const [typingChar, setTypingChar] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [activeSection, setActiveSection] = useState('home')
  const [navOpen, setNavOpen] = useState(false)

  // Terminal intro animation
  useEffect(() => {
    if (showTerminal && terminalLine < terminalLines.length) {
      const timer = setTimeout(() => {
        if (terminalLine < terminalLines.length - 1) {
          setTerminalLine(prev => prev + 1)
        } else {
          setTimeout(() => {
            setShowTerminal(false)
            setShowContent(true)
          }, 500)
        }
      }, 400)
      return () => clearTimeout(timer)
    }
  }, [showTerminal, terminalLine])

  // Typing animation
  useEffect(() => {
    if (!showContent) return
    const currentPhrase = typingPhrases[typingPhrase]
    
    if (!isDeleting) {
      if (typingChar < currentPhrase.length) {
        const timer = setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typingChar + 1))
          setTypingChar(c => c + 1)
        }, 100)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => setIsDeleting(true), 2000)
        return () => clearTimeout(timer)
      }
    } else {
      if (typingChar > 0) {
        const timer = setTimeout(() => {
          setTypedText(currentPhrase.substring(0, typingChar - 1))
          setTypingChar(c => c - 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        setIsDeleting(false)
        setTypingPhrase(p => (p + 1) % typingPhrases.length)
      }
    }
  }, [showContent, typingChar, isDeleting, typingPhrase])

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'labs', 'certifications', 'blog', 'path', 'contact']
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }
    setNavOpen(false)
  }

  return (
    <>
      {/* Terminal Intro Overlay */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div 
            className="terminal-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="terminal">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="title">prs@website:~$</span>
              </div>
              <div className="terminal-body">
                {terminalLines.slice(0, terminalLine + 1).map((line, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="terminal-line"
                  >
                    {i === terminalLine && i < terminalLines.length - 1 ? (
                      <span>{line}<span className="cursor">_</span></span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar 
        activeSection={activeSection} 
        navOpen={navOpen} 
        setNavOpen={setNavOpen}
        scrollTo={scrollTo}
      />

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            
            {/* Hero Section */}
            <Hero typedText={typedText} scrollTo={scrollTo} />

            {/* About Section */}
            <About skills={skills} />

            {/* Projects Section with Filters */}
            <Projects projects={projects} categories={projectCategories} />

            {/* Labs & Experience Section */}
            <Labs labs={labs} />

            {/* Certifications Section */}
            <Certifications certifications={certifications} />

            {/* Blog/Research Section */}
            <Blog blogPosts={blogPosts} />

            {/* Path Section */}
            <Path timeline={timeline} interests={interests} />

            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
