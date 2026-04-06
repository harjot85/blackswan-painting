'use client';

import { useEffect, useRef } from 'react';

// Each graphic is a self-contained SVG component
const GalleryGraphic1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="g1bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#0A0A0A"/><stop offset="100%" stopColor="#1A1A1A"/></linearGradient>
      <linearGradient id="g1y"  x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#F2C12E"/><stop offset="100%" stopColor="#C49A00"/></linearGradient>
    </defs>
    <rect width="900" height="420" fill="url(#g1bg)"/>
    <g stroke="#F2C12E" strokeWidth="0.4" opacity="0.06"><line x1="0" y1="140" x2="900" y2="140"/><line x1="0" y1="280" x2="900" y2="280"/><line x1="300" y1="0" x2="300" y2="420"/><line x1="600" y1="0" x2="600" y2="420"/></g>
    <polygon points="-20,310 920,100 920,165 -20,375" fill="url(#g1y)" opacity="0.92"/>
    <polygon points="-20,270 920,60 920,78 -20,288" fill="#ffffff" opacity="0.07"/>
    <polygon points="-20,380 920,170 920,260 -20,470" fill="#252525" opacity="0.9"/>
    <polygon points="-20,376 920,166 920,172 -20,382" fill="#F2C12E" opacity="0.6"/>
    <line x1="0" y1="2" x2="900" y2="2" stroke="#F2C12E" strokeWidth="3" opacity="0.8"/>
    <text x="36" y="56" fontFamily="system-ui,sans-serif" fontSize="9" letterSpacing="4" fill="#F2C12E" opacity="0.5">INTERIOR  ·  CHILLIWACK</text>
    <text x="600" y="400" fontFamily="Georgia,serif" fontSize="280" fontWeight="900" fill="none" stroke="#F2C12E" strokeWidth="0.5" opacity="0.04">01</text>
    <g fill="#F2C12E" opacity="0.3"><circle cx="36" cy="400" r="2.5"/><circle cx="54" cy="400" r="2.5"/><circle cx="72" cy="400" r="2.5"/><circle cx="90" cy="400" r="2.5"/></g>
  </svg>
);

const GalleryGraphic2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="g2bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#161616"/><stop offset="100%" stopColor="#0E0E0E"/></linearGradient>
      <linearGradient id="g2fl" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1E1E1E"/><stop offset="100%" stopColor="#141414"/></linearGradient>
    </defs>
    <rect width="600" height="360" fill="url(#g2bg)"/>
    <polygon points="0,360 600,360 460,220 140,220" fill="url(#g2fl)"/>
    <rect x="140" y="50" width="320" height="170" fill="#121212"/>
    <polygon points="0,0 140,50 140,220 0,360" fill="#1A1A1A"/>
    <polygon points="600,0 460,50 460,220 600,360" fill="#181818"/>
    <polygon points="0,0 600,0 460,50 140,50" fill="#111111"/>
    <rect x="140" y="130" width="320" height="14" fill="#F2C12E" opacity="0.85"/>
    <rect x="160" y="68" width="128" height="148" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <rect x="312" y="68" width="128" height="148" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <rect x="256" y="120" width="88" height="100" fill="#0E0E0E" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
    <circle cx="338" cy="172" r="3" fill="rgba(242,193,46,0.6)"/>
    <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.6"><line x1="140" y1="220" x2="0" y2="360"/><line x1="220" y1="220" x2="80" y2="360"/><line x1="300" y1="220" x2="160" y2="360"/><line x1="380" y1="220" x2="340" y2="360"/><line x1="460" y1="220" x2="520" y2="360"/></g>
    <text x="22" y="30" fontFamily="system-ui,sans-serif" fontSize="8" letterSpacing="3.5" fill="#F2C12E" opacity="0.45">INTERIOR  REFRESH</text>
  </svg>
);

const GalleryGraphic3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="g3bg"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#141414"/><stop offset="100%" stopColor="#1C1C1C"/></linearGradient>
      <linearGradient id="g3cab" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#242424"/><stop offset="100%" stopColor="#1A1A1A"/></linearGradient>
      <linearGradient id="g3cabY" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#F2C12E"/><stop offset="100%" stopColor="#D4A820"/></linearGradient>
    </defs>
    <rect width="600" height="360" fill="url(#g3bg)"/>
    <rect x="38" y="38" width="524" height="284" fill="#0A0A0A" rx="2"/>
    <rect x="44"  y="44"  width="122" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="176" y="44"  width="122" height="130" rx="2" fill="url(#g3cabY)"/>
    <rect x="308" y="44"  width="122" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="440" y="44"  width="120" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="44"  y="186" width="122" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="176" y="186" width="122" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="308" y="186" width="122" height="130" rx="2" fill="url(#g3cabY)" opacity="0.7"/>
    <rect x="440" y="186" width="120" height="130" rx="2" fill="url(#g3cab)"  stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <g fill="rgba(242,193,46,0.7)"><circle cx="105" cy="110" r="4"/><circle cx="237" cy="110" r="4"/><circle cx="369" cy="110" r="4"/><circle cx="500" cy="110" r="4"/><circle cx="105" cy="252" r="4"/><circle cx="237" cy="252" r="4"/><circle cx="369" cy="252" r="4"/><circle cx="500" cy="252" r="4"/></g>
    <text x="44" y="332" fontFamily="system-ui,sans-serif" fontSize="8" letterSpacing="3.5" fill="#F2C12E" opacity="0.45">CABINET  REFINISHING</text>
  </svg>
);

const GalleryGraphic4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
    <rect width="600" height="360" fill="#0E0E0E"/>
    <rect x="0" y="0"   width="600" height="44"  fill="#111111"/>
    <rect x="0" y="44"  width="600" height="6"   fill="#F2C12E" opacity="0.9"/>
    <rect x="0" y="50"  width="600" height="34"  fill="#181818"/>
    <rect x="0" y="84"  width="600" height="3"   fill="#F2C12E" opacity="0.4"/>
    <rect x="0" y="87"  width="600" height="52"  fill="#141414"/>
    <rect x="0" y="139" width="600" height="18"  fill="#F2C12E" opacity="0.85"/>
    <rect x="0" y="157" width="600" height="2"   fill="#fff"    opacity="0.06"/>
    <rect x="0" y="159" width="600" height="44"  fill="#1C1C1C"/>
    <rect x="0" y="203" width="600" height="3"   fill="#F2C12E" opacity="0.3"/>
    <rect x="0" y="206" width="600" height="70"  fill="#111111"/>
    <rect x="0" y="276" width="600" height="10"  fill="#F2C12E" opacity="0.7"/>
    <rect x="0" y="286" width="600" height="34"  fill="#191919"/>
    <rect x="0" y="320" width="600" height="4"   fill="#F2C12E" opacity="0.3"/>
    <rect x="0" y="324" width="600" height="36"  fill="#101010"/>
    <rect x="560" y="0" width="2"  height="360" fill="#F2C12E" opacity="0.12"/>
    <rect x="572" y="0" width="5"  height="360" fill="#F2C12E" opacity="0.06"/>
    <g stroke="#F2C12E" strokeWidth="0.6" opacity="0.25"><line x1="20" y1="44" x2="30" y2="44"/><line x1="20" y1="50" x2="30" y2="50"/><line x1="20" y1="87" x2="30" y2="87"/><line x1="20" y1="139" x2="30" y2="139"/><line x1="20" y1="44" x2="20" y2="360"/></g>
    <text x="44" y="30" fontFamily="system-ui,sans-serif" fontSize="8" letterSpacing="3.5" fill="#F2C12E" opacity="0.45">FULL INTERIOR  ·  SARDIS</text>
  </svg>
);

const GalleryGraphic5 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%', display: 'block' }}>
    <defs>
      <linearGradient id="g5sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0D0D0D"/><stop offset="100%" stopColor="#181818"/></linearGradient>
    </defs>
    <rect width="600" height="360" fill="url(#g5sky)"/>
    <rect x="0" y="286" width="600" height="74" fill="#161616"/>
    <line x1="0" y1="286" x2="600" y2="286" stroke="#F2C12E" strokeWidth="1.5" opacity="0.5"/>
    <rect x="150" y="180" width="300" height="106" fill="#1A1A1A" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <polygon points="130,182 300,72 470,182" fill="#F2C12E" opacity="0.9"/>
    <rect x="370" y="88" width="28" height="55" fill="#1A1A1A" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    <rect x="266" y="220" width="68" height="66" rx="2" fill="#111" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
    <rect x="270" y="224" width="28" height="58" fill="#0D0D0D"/>
    <rect x="302" y="224" width="28" height="58" fill="#0D0D0D"/>
    <circle cx="300" cy="256" r="3" fill="#F2C12E" opacity="0.7"/>
    <rect x="166" y="204" width="68" height="50" rx="1" fill="#111" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    <line x1="200" y1="204" x2="200" y2="254" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <line x1="166" y1="229" x2="234" y2="229" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <rect x="366" y="204" width="68" height="50" rx="1" fill="#111" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
    <line x1="400" y1="204" x2="400" y2="254" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <line x1="366" y1="229" x2="434" y2="229" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
    <g fill="#F2C12E" opacity="0.18"><circle cx="30" cy="286" r="2"/><circle cx="56" cy="286" r="2"/><circle cx="82" cy="286" r="2"/><circle cx="518" cy="286" r="2"/><circle cx="544" cy="286" r="2"/><circle cx="570" cy="286" r="2"/></g>
    <text x="30" y="330" fontFamily="system-ui,sans-serif" fontSize="8" letterSpacing="3.5" fill="#F2C12E" opacity="0.45">EXTERIOR  REPAINT</text>
  </svg>
);

const ITEMS = [
  { Graphic: GalleryGraphic1, label: 'Interior Painting — Chilliwack', span2: true },
  { Graphic: GalleryGraphic2, label: 'Living Room Refresh' },
  { Graphic: GalleryGraphic3, label: 'Cabinet Refinishing' },
  { Graphic: GalleryGraphic4, label: 'Full Interior — Sardis' },
  { Graphic: GalleryGraphic5, label: 'Exterior Repaint' },
];

function GItem({ Graphic, label, span2, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal g-item" style={{
      gridColumn: span2 ? 'span 2' : 'span 1',
      transitionDelay: `${delay}s`,
    }}>
      <div style={{ width: '100%', height: span2 ? 420 : 360, overflow: 'hidden', position: 'relative' }}>
        <div className="g-graphic"><Graphic/></div>
        <div className="g-overlay">
          <span className="g-overlay-label">{label}</span>
        </div>
      </div>

      <style>{`
        .g-item { border-radius: 5px; overflow: hidden; cursor: pointer; }
        .g-graphic { width: 100%; height: 100%; transition: transform 0.65s cubic-bezier(0.4,0,0.2,1); }
        .g-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.4s ease;
          display: flex; align-items: flex-end; padding: 22px;
        }
        .g-overlay-label {
          fontFamily: var(--font-display); font-size: 15px; font-weight: 600;
          color: var(--white); transform: translateY(8px); transition: transform 0.4s ease;
        }
        .g-item:hover .g-graphic { transform: scale(1.06); }
        .g-item:hover .g-overlay { opacity: 1; }
        .g-item:hover .g-overlay-label { transform: translateY(0); }
        @media (max-width: 768px) {
          .g-item { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" style={{ padding: '108px 0', background: 'var(--black)' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <div className="section-eyebrow">Portfolio</div>
            <h2 className="section-title">Our <em>Work</em></h2>
          </div>
          <a href="#contact" className="btn btn-ghost">Start Your Project &rarr;</a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14 }} className="gallery-grid">
          {ITEMS.map((item, i) => (
            <GItem key={i} {...item} delay={i * 0.1}/>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .gallery-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 768px)  { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}