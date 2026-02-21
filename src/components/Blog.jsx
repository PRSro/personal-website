import { motion } from 'framer-motion'

export default function Blog({ blogPosts }) {
  return (
    <section id="blog" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="title-num">05.</span> Research & Blog
        </motion.h2>
        
        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <motion.article 
              key={post.title}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <a href={post.link} className="blog-link">
                Read More →
              </a>
            </motion.article>
          ))}
        </div>
        
        <motion.div 
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>More articles coming soon...</p>
        </motion.div>
      </div>
    </section>
  )
}
