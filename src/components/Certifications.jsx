import { motion } from 'framer-motion'

export default function Certifications({ certifications }) {
  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return 'var(--accent-green)'
      case 'in_progress': return 'var(--accent-cyan)'
      default: return 'var(--accent-purple)'
    }
  }

  const getStatusLabel = (status) => {
    switch(status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      default: return 'Planned'
    }
  }

  return (
    <section id="certifications" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="title-num">04.</span> Certifications & Goals
        </motion.h2>
        
        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div 
              key={cert.name}
              className="cert-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="cert-header">
                <div className="cert-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <span 
                  className="cert-status" 
                  style={{ background: getStatusColor(cert.status) }}
                >
                  {getStatusLabel(cert.status)}
                </span>
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-provider">{cert.provider}</p>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-footer">
                <span className="cert-target">Target: {cert.targetDate}</span>
              </div>
              <div className="cert-progress">
                <div 
                  className="cert-progress-bar" 
                  style={{ 
                    width: cert.status === 'completed' ? '100%' : cert.status === 'in_progress' ? '50%' : '0%',
                    background: getStatusColor(cert.status)
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
