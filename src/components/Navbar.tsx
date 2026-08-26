import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav style={{ position: 'fixed', top: '1.5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: '90%', maxWidth: '1000px' }}>
      <div style={{ 
        background: 'rgba(10, 10, 10, 0.7)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '3rem', 
        padding: '0.75rem 2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        boxShadow: '0 10px 40px -10px rgba(0,0,0,0.8)'
      }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-color)', letterSpacing: '-0.05em' }}>
          KS<span style={{ color: 'var(--neon-cyan)' }}>_</span>
        </Link>
        <div style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                style={{ 
                  fontWeight: 600, 
                  fontSize: '0.95rem',
                  padding: '0.6rem 1.25rem',
                  color: isActive ? '#000' : 'var(--text-muted)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  zIndex: 1,
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-color)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'var(--neon-cyan)', 
                      borderRadius: '2rem',
                      zIndex: -1,
                      boxShadow: 'var(--glow-cyan)'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
