import { motion } from 'framer-motion';
import { TerminalSquare, LayoutTemplate, DatabaseZap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      color: "var(--neon-cyan)",
      size: "col-span-12 md:col-span-4",
      icon: <TerminalSquare size={32} />,
      skills: [
        { name: "Python", description: "OOP concepts, file handling, logic." },
        { name: "C#", description: "Object-Oriented Programming, collections." },
        { name: "JavaScript", description: "Dynamic web logic and DOM manipulation." },
        { name: "Java", description: "Fundamental syntax and structures." }
      ]
    },
    {
      category: "Frontend",
      color: "var(--neon-pink)",
      size: "col-span-12 md:col-span-4",
      icon: <LayoutTemplate size={32} />,
      skills: [
        { name: "React JS", description: "Responsive UI, state management, hooks." },
        { name: "HTML & CSS", description: "Semantic markup and box models." },
        { name: "Bootstrap", description: "Rapid responsive grid structures." }
      ]
    },
    {
      category: "Backend & Data",
      color: "var(--neon-volt)",
      size: "col-span-12 md:col-span-4",
      icon: <DatabaseZap size={32} />,
      skills: [
        { name: "PostgreSQL", description: "Relational DBs, optimized queries." },
        { name: "SQL & PL/SQL", description: "RDBMS, Joins, Normalization, Oracle." },
        { name: "C# MVC", description: "Robust web backend architectures." }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section">
      <h2 className="section-title outline-text">Technical Expertise</h2>
      
      <motion.div 
        className="bento-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillCategories.map((cat, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className={`bento-card`} 
            style={{ 
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cat.color;
              e.currentTarget.style.boxShadow = `0 10px 40px -10px ${cat.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-color)';
              e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
              <div style={{ color: cat.color }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--text-color)', fontWeight: 800 }}>
                {cat.category}
              </h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
              {cat.skills.map((skill, sIndex) => (
                <div key={sIndex}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginBottom: '0.25rem', fontWeight: 700 }}>
                    {skill.name}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.4', fontSize: '1rem' }}>
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
      <style>{`
        @media (max-width: 1024px) {
          .bento-card { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
};
