import { motion } from 'framer-motion';
import { Monitor, Code2, Database, Layout } from 'lucide-react';

export const Experience = () => {
  return (
    <section className="section">
      <h2 className="section-title outline-text">Experience</h2>
      <div className="bento-grid">
        
        <motion.div 
          className="bento-card" 
          style={{ gridColumn: 'span 12' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--neon-cyan)';
            e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem', fontWeight: 900, color: 'var(--text-color)' }}>Software Developer</h3>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--neon-cyan)', fontWeight: 700, letterSpacing: '0.05em' }}>Navanala Technologies Private Limited</h4>
            </div>
            <div style={{ fontSize: '1.25rem', color: '#000', fontWeight: 800, padding: '0.75rem 1.5rem', borderRadius: '0.5rem', background: 'var(--neon-cyan)', boxShadow: 'var(--glow-cyan)' }}>
              2025 &mdash; Present
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ color: 'var(--neon-cyan)' }}><Monitor size={28} /></div>
               <div>
                  <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Frontend (React JS)</strong>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Built responsive UI components with state management and React hooks.</p>
               </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ color: 'var(--neon-pink)' }}><Layout size={28} /></div>
               <div>
                  <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>MVC & SQL Server</strong>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Designed web interfaces using MVC framework and .NET architectures.</p>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ color: 'var(--neon-volt)' }}><Database size={28} /></div>
               <div>
                  <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Database (PostgreSQL)</strong>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Optimized queries, stored procedures, and managed relational schemas.</p>
               </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ color: 'var(--neon-purple)' }}><Code2 size={28} /></div>
               <div>
                  <strong style={{ color: 'var(--text-color)', display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Core Stack</strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                    {['C#', 'ASP.NET', 'HTML5', 'CSS', 'JavaScript', 'Oracle PL/SQL'].map((t, i) => <span key={i} className="badge" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem' }}>{t}</span>)}
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
