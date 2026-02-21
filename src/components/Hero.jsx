import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ typedText, scrollTo }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    let animationId
    let columns = []
    
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const columnCount = Math.floor(canvas.width / 20)
      columns = Array(columnCount).fill(1)
    }
    
    resize()
    window.addEventListener('resize', resize)
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>/?{}[]|=+-_*&^%$#@!83923404'
    const charArray = chars.split('')
    const fontSize = 15
    let y = Array(columns.length).fill(0)
    
    const draw = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#22d3ee'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < columns.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const alpha = Math.random() * 0.5 + 0.1
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha})`
        ctx.fillText(char, x, y[i] * fontSize)
        
        if (y[i] * fontSize > canvas.height && Math.random() > 0.975) {
          y[i] = 0
        }
        y[i]++
      }
      
      animationId = setTimeout(draw, 50)
    }
    
    draw()
    
    return () => {
      window.removeEventListener('resize', resize)
      clearTimeout(animationId)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="code-rain"></canvas>
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="scanline"></div>
      </div>
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Building in Silence.<br/>
          <span className="gradient-text">Learning in Depth.</span><br/>
          Securing the Future.
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          High school student exploring cybersecurity, ethical hacking, automation, AI, and building anonymous digital projects.
        </motion.p>

        <motion.div 
          className="typing-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="typing-text">{typedText}</span>
          <span className="cursor">|</span>
        </motion.div>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn-secondary" onClick={() => scrollTo('contact')}>
            Contact Me
          </button>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span>↓</span>
        </motion.div>
      </div>
    </section>
  )
}
