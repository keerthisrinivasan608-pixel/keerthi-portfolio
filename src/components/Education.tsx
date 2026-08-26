import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
  const eduData = [
    { title: "B.C.A", school: "Nadha Arts and Science  College", year: "2019 — 2022", score: "78%", color: "var(--neon-cyan)", icon: <GraduationCap size={32} /> },
    { title: "HSC", school: "Model School Mathur", year: "2018 — 2019", score: "52%", color: "var(--neon-pink)", icon: <Award size={32} /> },
    { title: "SSLC", school: "Model school mathur", year: "2017 ", score: "85%", color: "var(--neon-volt)", icon: <BookOpen size={32} /> }
  ];

  return (
    <section className="section">
      <h2 className="section-title outline-text">Education</h2>
      <div className="bento-grid">
        
        {eduData.map((edu, index) => (
          <motion.div 
            key={index}
            className="bento-card"
            style={{ gridColumn: 'span 12' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = edu.color;
              e.currentTarget.style.boxShadow = `0 0 20px ${edu.color}66`; // using hex opacity approximation
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div style={{ color: edu.color }}>{edu.icon}</div>
                <div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-color)' }}>{edu.title}</h3>
                  <h4 style={{ fontSize: '1.25rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>{edu.school}</h4>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                 <span style={{ fontSize: '2rem', fontWeight: 900, color: edu.color }}>{edu.score}</span>
                 <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{edu.year}</span>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
