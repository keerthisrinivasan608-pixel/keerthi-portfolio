import { Mail, Phone, Globe, Code } from 'lucide-react';

export const Contact = () => {
  return (
    <footer style={{ padding: '8rem 2rem 4rem 2rem', background: 'var(--bg-color)', color: 'var(--text-color)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="massive-text outline-text" style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', marginBottom: '4rem' }}>Let's Talk</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="mailto:keerthisrinivasan608@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', transition: 'all 0.3s' }} className="contact-link">
            <Mail size={32} />
            keerthisrinivasan608@gmail.com
          </a>
          <a href="tel:+916369054654" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', transition: 'all 0.3s' }} className="contact-link">
            <Phone size={32} />
            +91 6369054654
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '4rem' }}>
          <a href="https://www.linkedin.com/in/keerthi-s-bbb210276" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', transition: 'all 0.3s' }} className="contact-link">
            <Globe size={40} />
            LinkedIn
          </a>
          <a href="https://github.com/keerthisrinivasan608-pixel" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.25rem', transition: 'all 0.3s' }} className="contact-link">
            <Code size={40} />
            GitHub
          </a>
        </div>
        
        <div style={{ marginTop: '8rem', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          &copy; {new Date().getFullYear()} Keerthi Srinivasan. All Rights Reserved.
        </div>
      </div>
      <style>{`
        .contact-link { color: var(--text-color); display: inline-flex; }
        .contact-link:hover {
          color: var(--neon-cyan);
          text-shadow: var(--glow-cyan);
          transform: translateY(-3px);
        }
      `}</style>
    </footer>
  );
};
