import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects({ projects, categories }) {
  const [filter, setFilter] = useState('All')
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="title-num">02.</span> Projects
        </motion.h2>
        
        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>
        
        <motion.div className="projects-grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-type">{project.category}</span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-project">
                  View on GitHub →
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
