import { motion } from 'framer-motion'
import Icon from './Icon'

export default function About({ skills }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title glitch"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="title-num">01.</span> About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p>
              I'm a high school student at CNITV building real software — from cryptographic suites 
              and physics engines to full-stack platforms and strategy games. I work across C++, 
              Python, React, Unity, and embedded systems, always digging into how things work 
              at every layer of the stack.
            </p>
            <p>
              My projects span game development (Unity, SDL2, SFML), security tooling (crypto 
              toolkits, CTF platforms), systems programming (physics engines, trading bots), 
              and web applications (React, Fastify, PostgreSQL). Currently focused on 
              deepening my C++ expertise and preparing for security certifications.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, i) => (
              <motion.div 
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="skill-icon">
                  <Icon name={skill.icon} />
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
