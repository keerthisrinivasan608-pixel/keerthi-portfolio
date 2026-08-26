import { Briefcase, Server, Clock, Navigation, Shield, ShoppingCart, MessageCircle, Lock, ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: "Travel Desk",
      description: "A full-stack travel management application to centralize operations and bookings.",
      techStack: ["ASP.NET Core", "React", "PostgreSQL"],
      neonColor: "var(--neon-cyan)",
      size: "col-span-12 md:col-span-7",
      highlights: [
        { icon: <Navigation size={20} />, title: "Travel Ops", desc: "End-to-end activities." },
        { icon: <Server size={20} />, title: "REST APIs", desc: "Scalable backend integration." }
      ]
    },
    {
      title: "Attendance & Reporting",
      description: "Streamlined employee tracking, punch logs, and robust monthly reporting.",
      techStack: ["React", "Oracle", "C#"],
      neonColor: "var(--neon-pink)",
      size: "col-span-12 md:col-span-5",
      highlights: [
        { icon: <Clock size={20} />, title: "Punch Logs", desc: "Real-time employee tracking." },
        { icon: <Briefcase size={20} />, title: "Reports", desc: "Accurate monthly generation." }
      ]
    },
    {
      title: "Chat Application",
      description: "Real-time, secure messaging platform for cross-platform mobile communication.",
      techStack: ["React Native", ".NET Core", "PostgreSQL"],
      neonColor: "var(--neon-volt)",
      size: "col-span-12 md:col-span-5",
      highlights: [
        { icon: <MessageCircle size={20} />, title: "Real-Time", desc: "Seamless instant messaging." },
        { icon: <Lock size={20} />, title: "Secure", desc: "Robust auth & validation." }
      ]
    },
    {
      title: "E-Commerce System",
      description: "Comprehensive MVC platform managing products, categories, users, and orders.",
      techStack: ["ASP.NET MVC", "PostgreSQL", "Bootstrap"],
      neonColor: "var(--neon-cyan)",
      size: "col-span-12 md:col-span-7",
      highlights: [
        { icon: <ShoppingCart size={20} />, title: "Order Mgmt", desc: "End-to-end sales transactions." },
        { icon: <Shield size={20} />, title: "Role Auth", desc: "Secure multi-tier access." }
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <div className="container section">
      <h2 className="section-title outline-text">Selected Works</h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}
      >
        {projects.map((project, index) => {
          // Compute grid classes based on size prop for bento feel
          const isWide = project.size.includes('7');
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`bento-card`} 
              style={{ 
                gridColumn: isWide ? 'span 7' : 'span 5',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.neonColor;
                e.currentTarget.style.boxShadow = `0 10px 40px -10px ${project.neonColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'var(--shadow-bento)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                   <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--text-color)', fontWeight: 800, lineHeight: 1.1 }}>{project.title}</h3>
                   <div style={{ color: project.neonColor }}><ArrowUpRight size={32} /></div>
                </div>
                
                <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isWide ? '1fr 1fr' : '1fr', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                {project.highlights.map((highlight, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: project.neonColor }}>
                       {highlight.icon}
                    </div>
                    <div>
                      <h5 style={{ fontSize: '1.05rem', color: 'var(--text-color)', fontWeight: 600 }}>{highlight.title}</h5>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{highlight.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
