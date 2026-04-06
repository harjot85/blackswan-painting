'use client';

import { useEffect, useRef } from 'react';

const CHECKS = [
  'Fully licensed & insured', 'Premium materials only',
  'On time, every time',     'Clean job sites, always',
  'Free written estimates',  'Satisfaction guaranteed',
];

const CheckIcon = () => (
  <div style={{
    width: 18, height: 18, borderRadius: '50%',
    background: 'var(--yellow-muted)',
    border: '1px solid rgba(242,193,46,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 2, color: 'var(--yellow)',
  }}>
    <svg width="9" height="9" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  </div>
);

export default function About() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }, { threshold: 0.1 });
    [leftRef, rightRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" style={{ padding: '108px 0', background: 'var(--black-2)' }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 88, alignItems: 'center',
        }} className="about-grid">

          {/* Visual side */}
          <div ref={leftRef} className="reveal" style={{ position: 'relative' }}>
            {/* About placeholder SVG */}
            <svg
              className="about-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 800"
              preserveAspectRatio="xMidYMid slice"
              style={{ width: '100%', aspectRatio: '4/5', borderRadius: 6, display: 'block' }}
            >
              <defs>
                <linearGradient id="abBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0C0C0C"/><stop offset="100%" stopColor="#1B1B1B"/></linearGradient>
                <pattern id="abDots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="1" fill="#F2C12E" opacity="0.22"/></pattern>
              </defs>
              <rect width="640" height="800" fill="url(#abBg)"/>
              <rect x="0" y="0" width="320" height="320" fill="url(#abDots)" opacity="0.5"/>
              <circle cx="680" cy="180" r="380" fill="none" stroke="#F2C12E" strokeWidth="1" opacity="0.07"/>
              <rect x="-40" y="320" width="740" height="32" fill="#F2C12E" opacity="0.9" transform="rotate(-14,320,336)"/>
              <rect x="-40" y="362" width="740" height="12" fill="#ffffff" opacity="0.05" transform="rotate(-14,320,368)"/>
              <rect x="-40" y="380" width="740" height="6" fill="#F2C12E" opacity="0.2" transform="rotate(-14,320,383)"/>
              <rect x="520" y="0" width="60" height="800" fill="#F2C12E" opacity="0.04"/>
              <rect x="570" y="0" width="20" height="800" fill="#F2C12E" opacity="0.07"/>
              <rect x="60" y="590" width="110" height="90" rx="4" fill="#F2C12E"/>
              <rect x="186" y="590" width="110" height="90" rx="4" fill="#1E1E1E" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              <rect x="312" y="590" width="110" height="90" rx="4" fill="#2C2C2C" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              <rect x="438" y="590" width="110" height="90" rx="4" fill="#F2C12E" opacity="0.18" stroke="#F2C12E" strokeWidth="1" strokeOpacity="0.4"/>
              <text x="60" y="698" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="3" fill="#F2C12E" opacity="0.55">GOLD</text>
              <text x="186" y="698" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="3" fill="#888" opacity="0.8">OBSIDIAN</text>
              <text x="312" y="698" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="3" fill="#888" opacity="0.8">SLATE</text>
              <text x="438" y="698" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="3" fill="#F2C12E" opacity="0.55">HAZE</text>
              <text x="30" y="520" fontFamily="Georgia,serif" fontSize="200" fontWeight="900" fill="none" stroke="#F2C12E" strokeWidth="0.6" opacity="0.04" letterSpacing="-8">BS</text>
              <text x="62" y="80" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="4" fill="#F2C12E" opacity="0.4">COLOUR  STUDY  NO.4</text>
              <line x1="62" y1="86" x2="220" y2="86" stroke="#F2C12E" strokeWidth="0.5" opacity="0.2"/>
            </svg>

            {/* Yellow accent border */}
            <div style={{
              position: 'absolute', bottom: -18, right: -18,
              width: '58%', aspectRatio: 1,
              border: '2.5px solid var(--yellow)',
              borderRadius: 6, opacity: 0.5, zIndex: 0,
            }}/>

            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: 32, left: -24,
              background: 'var(--yellow)', color: 'var(--black)',
              padding: '18px 22px', borderRadius: 6,
              boxShadow: 'var(--shadow-lg)', zIndex: 2,
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 900, lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.5px', lineHeight: 1.35, marginTop: 3 }}>
                Years Serving<br/>Chilliwack
              </div>
            </div>
          </div>

          {/* Content side */}
          <div ref={rightRef} className="reveal reveal-d2">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="section-title">Built on Craft,<br/><em>Driven by Pride.</em></h2>
            <br/>
            <p style={{ fontSize: 15, color: 'var(--white-3)', lineHeight: 1.85, marginBottom: 18 }}>
              Black Swan Painting was founded on one belief: homeowners deserve a contractor who treats their home like their own. We&apos;re not just here to roll paint — we&apos;re here to deliver results that last.
            </p>
            <p style={{ fontSize: 15, color: 'var(--white-3)', lineHeight: 1.85, marginBottom: 18 }}>
              Based in Chilliwack, we bring the same level of care to every project — whether it&apos;s freshening up a single bedroom or a complete exterior repaint. Fully insured, on time, and we leave every job site spotless.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '14px 20px', margin: '32px 0 40px',
            }}>
              {CHECKS.map((text, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckIcon/>
                  <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--white-2)', lineHeight: 1.4 }}>{text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">Work With Us &rarr;</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 52px !important; }
        }
      `}</style>
    </section>
  );
}