import { motion } from 'framer-motion'

export default function Labs({ labs }) {
  return (
    <section id="labs" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="title-num">03.</span> Labs & Experience
        </motion.h2>
        
        <div className="labs-grid">
          {labs.map((lab, i) => (
            <motion.div 
              key={lab.title}
              className="lab-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="lab-header">
                <div className="lab-info">
                  <h3>{lab.title}</h3>
                  <span className="lab-type">{lab.type}</span>
                </div>
                <div className="lab-progress-ring">
                  <svg viewBox="0 0 36 36">
                    <path
                      className="progress-bg"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="progress-fill"
                      strokeDasharray={`${lab.progress}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="progress-text">{lab.progress}%</span>
                </div>
              </div>
              <p className="lab-desc">{lab.desc}</p>
              <div className="lab-tools">
                {lab.tools.map((tool, idx) => (
                  <span key={idx} className="tool-tag">{tool}</span>
                ))}
              </div>
              <a href={lab.link} target="_blank" rel="noopener noreferrer" className="lab-link">
                Visit →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
