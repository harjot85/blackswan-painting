'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

          {/* Logo */}
          <a href="#home" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 900,
              letterSpacing: '1.5px', color: 'var(--white)',
            }}>
              BLACK <span style={{ color: 'var(--yellow)' }}>SWAN</span>
            </span>
            <span style={{
              fontSize: 8.5, fontWeight: 500, letterSpacing: '5px',
              color: 'var(--white-4)', textTransform: 'uppercase', marginTop: 3,
            }}>
              Painting &amp; Renovations
            </span>
          </a>

          {/* Desktop links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: 30, listStyle: 'none' }}
              className="nav-desktop-links">
            {['services','about','gallery','testimonials','contact'].map(id => (
              <li key={id}>
                <a href={`#${id}`} style={{
                  fontSize: 13, fontWeight: 500, color: 'var(--white-3)',
                  letterSpacing: '0.3px', transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.target.style.color='var(--white)'}
                onMouseLeave={e => e.target.style.color='var(--white-3)'}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary nav-desktop-links"
             style={{ padding: '10px 20px', fontSize: 13 }}>
            Get a Free Quote
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', padding: 4 }}
            className="nav-hamburger"
            aria-label="Toggle menu">
            <span style={{
              display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2,
              transition: 'var(--transition)',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2,
              opacity: menuOpen ? 0 : 1, transition: 'var(--transition)',
            }}/>
            <span style={{
              display: 'block', width: 22, height: 2, background: 'var(--white)', borderRadius: 2,
              transition: 'var(--transition)',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}/>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          display: 'flex', flexDirection: 'column',
          background: 'var(--black-2)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          {['services','about','gallery','testimonials','contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={closeMenu} style={{
              padding: '16px 28px', fontSize: 14, fontWeight: 500,
              color: 'var(--white-3)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
            }}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}