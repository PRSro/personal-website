import { motion } from 'framer-motion'
import Icon from './Icon'

export default function Path({ timeline, interests }) {
  return (
    <section id="path" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="title-num">06.</span> Cybersecurity Path
        </motion.h2>
        
        <div className="path-grid">
          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div 
                key={item.title}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="interests"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Areas of Interest</h3>
            <div className="interests-grid">
              {interests.map((item, i) => (
                <motion.div 
                  key={item.name}
                  className="interest-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Icon name={item.icon} className="interest-icon" />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
