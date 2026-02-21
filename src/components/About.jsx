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
              I'm a high school student at CNITV with a passion for cybersecurity, digital privacy and computer science. 
              I believe in the power of anonymity, transparency, continuous learning, honesty and delivering results 
              through disciplined work. My journey focuses on ethical hacking, automation, 
              AI research, and building tools that make the digital world more secure.
            </p>
            <p>
              Currently self-learning and taking notes while preparing for certifications 
              in the cybersecurity and computer science field.
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
