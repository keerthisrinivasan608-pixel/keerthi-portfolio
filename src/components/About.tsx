import { motion } from 'framer-motion';
import { User, Target, Briefcase } from 'lucide-react';

export const About = () => {
  return (
    <section className="section">
      <h2 className="section-title outline-text">Profile</h2>
      <div className="bento-grid">
        
        {/* Main Bio Card */}
        <motion.div 
          className="bento-card"
          style={{ gridColumn: 'span 12', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--neon-cyan)';
            e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--neon-cyan)' }}>
            <User size={32} />
            <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--text-color)' }}>
              Transforming ideas into <span style={{ color: 'var(--neon-cyan)' }}>robust solutions</span>.
            </h3>
          </div>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '1000px' }}>
            I am a highly skilled and motivated individual with a strong educational background. My expertise includes a wide range of technical skills such as SQL, HTML, CSS, JavaScript, Python, C#, React JS, and PostgreSQL. I have a proven track record of successfully developing and implementing various projects using these technologies.
          </p>
        </motion.div>
        
        {/* Focus Card */}
        <motion.div 
          className="bento-card" 
          style={{ gridColumn: 'span 12', '@media (minWidth: 768px)': { gridColumn: 'span 6' } } as any}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--neon-pink)';
            e.currentTarget.style.boxShadow = 'var(--glow-pink)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
          }}
        >
           <div style={{ color: 'var(--neon-pink)', marginBottom: '1rem' }}><Target size={40} /></div>
           <h4 style={{ color: 'var(--text-color)', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: 800 }}>Focus Area</h4>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Full Stack Development, Database Management, UI/UX implementation.</p>
        </motion.div>

        {/* Experience Highlight Card */}
        <motion.div 
          className="bento-card" 
          style={{ gridColumn: 'span 12', '@media (minWidth: 768px)': { gridColumn: 'span 6' } } as any}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--neon-volt)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(132, 204, 22, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
          }}
        >
           <div style={{ color: 'var(--neon-volt)', marginBottom: '1rem' }}><Briefcase size={40} /></div>
           <h4 style={{ color: 'var(--text-color)', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: 800 }}>Current Role</h4>
           <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Navanala Technologies <span style={{ color: 'var(--text-color)', fontWeight: 700, marginLeft: '0.5rem' }}>(2025 &mdash; Present)</span></p>
        </motion.div>

      </div>
      
      {/* Quick responsive fix for inline styles in React */}
      <style>{`
        @media (min-width: 768px) {
          .bento-card:nth-child(2), .bento-card:nth-child(3) {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
};
