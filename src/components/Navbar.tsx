import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/expertise', label: 'Expertise' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
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
          
          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
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

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-color)', cursor: 'pointer', display: 'none' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '5.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              maxWidth: '400px',
              background: 'rgba(15, 15, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '1.5rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 99,
              boxShadow: '0 20px 40px rgba(0,0,0,0.9)'
            }}
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  style={{ 
                    fontWeight: 700, 
                    fontSize: '1.25rem',
                    padding: '1rem',
                    color: isActive ? '#000' : 'var(--text-color)',
                    background: isActive ? 'var(--neon-cyan)' : 'rgba(255,255,255,0.03)',
                    borderRadius: '1rem',
                    textAlign: 'center',
                    boxShadow: isActive ? 'var(--glow-cyan)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
};
