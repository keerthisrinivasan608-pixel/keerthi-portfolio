import { ArrowDown, Database, Terminal, Code2, Layers, Server, Cpu } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const Hero = () => {
  const floatingIcons = [
    { Icon: Database, color: 'var(--neon-cyan)', delay: 0, top: '20%', left: '10%', size: 48 },
    { Icon: Terminal, color: 'var(--neon-pink)', delay: 1, top: '15%', left: '80%', size: 64 },
    { Icon: Code2, color: 'var(--neon-volt)', delay: 2, top: '70%', left: '5%', size: 56 },
    { Icon: Layers, color: 'var(--neon-cyan)', delay: 3, top: '80%', left: '85%', size: 72 },
    { Icon: Server, color: 'var(--neon-purple)', delay: 4, top: '40%', left: '90%', size: 40 },
    { Icon: Cpu, color: 'var(--neon-pink)', delay: 1.5, top: '50%', left: '2%', size: 50 }
  ];

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; 
      const y = (e.clientY / innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '8rem' }}>
      
      {/* Animated Floating Background Elements */}
      {floatingIcons.map((item, index) => {
        const xOffset = useTransform(smoothX, (val) => val * (index % 2 === 0 ? 1 : -1));
        const yOffset = useTransform(smoothY, (val) => val * (index % 3 === 0 ? 1 : -1));

        return (
          <motion.div
            key={index}
            initial={{ y: 0, opacity: 0 }}
            animate={{ 
              y: [0, -40, 0],
              opacity: 0.15
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              color: item.color,
              zIndex: 0,
              x: xOffset,
              y: yOffset
            }}
          >
            <item.Icon size={item.size} strokeWidth={1} />
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="container grid-2" style={{ alignItems: 'center', position: 'relative', zIndex: 10 }}>
        
        <div className="animate-fade-in">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <h1 className="massive-text outline-text" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: 0.9 }}>Keerthi</h1>
            <h2 className="massive-text outline-text" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginTop: '0.5rem', paddingBottom: '0.5rem' }}>
              Srinivasan
            </h2>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}
            style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--neon-cyan)', marginTop: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Full-Stack Developer_
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            style={{ marginTop: '1.5rem', maxWidth: '550px', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}
          >
            Crafting scalable web applications and robust database architectures with modern technologies and a passion for dark-mode cyberpunk design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
            style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
          >
             <a href="/projects" style={{ background: 'var(--neon-cyan)', color: 'black', padding: '1rem 2.5rem', borderRadius: '0.5rem', fontWeight: 800, fontSize: '1.1rem', boxShadow: 'var(--glow-cyan)', transition: 'all 0.3s', textTransform: 'uppercase' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>View Projects</a>
             <a href="/contact" style={{ background: 'transparent', color: 'var(--text-color)', border: '2px solid var(--border-color)', padding: '1rem 2.5rem', borderRadius: '0.5rem', fontWeight: 800, fontSize: '1.1rem', transition: 'all 0.3s', textTransform: 'uppercase' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--neon-pink)'; e.currentTarget.style.color = 'var(--neon-pink)'; e.currentTarget.style.boxShadow = 'var(--glow-pink)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-color)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>Let's Talk</a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Neon Glow Behind Image */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', width: '100%', height: '100%', background: 'conic-gradient(from 0deg, var(--neon-cyan), var(--neon-pink), var(--neon-volt), var(--neon-cyan))', borderRadius: '2rem', filter: 'blur(60px)', opacity: 0.4, zIndex: 0 }} 
          />
          
          <img 
            src="/profile.jpg" 
            alt="Keerthi Srinivasan" 
            style={{ 
              width: '100%', 
              maxWidth: '450px', 
              aspectRatio: '1/1',
              objectFit: 'cover', 
              borderRadius: '2rem', 
              zIndex: 1,
              position: 'relative',
              border: '2px solid rgba(255,255,255,0.1)',
              boxShadow: 'var(--shadow-bento)'
            }} 
          />
        </motion.div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}
      >
        <motion.a 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          href="#about" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '60px', background: 'var(--card-bg)', borderRadius: '50%', color: 'var(--text-muted)', border: '1px solid var(--border-color)', transition: 'all 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--neon-cyan)'; e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.boxShadow = 'var(--glow-cyan)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <ArrowDown size={28} />
        </motion.a>
      </motion.div>
    </section>
  );
};
