'use client';

import { useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    text: "From start to finish, the crew at Black Swan was professional, clean, and incredibly thorough. Our home looks like a new build. Absolutely worth every penny.",
    initials: 'JM', name: 'James & Michelle R.', location: 'Chilliwack, BC', delay: 0,
  },
  {
    text: "I had my kitchen cabinets refinished and genuinely can't believe the difference. Looks better than new and took less than three days. Already recommending to the neighbours.",
    initials: 'SK', name: 'Sandra K.', location: 'Sardis, BC', delay: 0.2,
  },
  {
    text: "Hired Black Swan for a full exterior repaint on our older home. The prep work alone was impressive — every crack filled before a drop of paint was applied. Stunning result.",
    initials: 'DB', name: 'Dave B.', location: 'Vedder Crossing, BC', delay: 0.4,
  },
];

function TestiCard({ text, initials, name, location, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal testi-card" style={{ transitionDelay: `${delay}s` }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 80,
        color: 'var(--yellow)', opacity: 0.35,
        lineHeight: 0.65, marginBottom: 18,
      }}>&ldquo;</div>

      <p style={{
        fontSize: 14.5, color: 'var(--white-3)', lineHeight: 1.8,
        fontStyle: 'italic', fontWeight: 300, marginBottom: 28,
      }}>{text}</p>

      <div style={{ display: 'flex', gap: 3, color: 'var(--yellow)', fontSize: 14, marginBottom: 18 }}>
        {'★★★★★'}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 42, height: 42, borderRadius: '50%',
          background: 'var(--black-4)',
          border: '2px solid rgba(242,193,46,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
          color: 'var(--yellow)', flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--white)' }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--white-4)', marginTop: 2 }}>{location}</div>
        </div>
      </div>

      <style>{`
        .testi-card {
          background: var(--black-3);
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 6px;
          padding: 36px 32px;
        }
      `}</style>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '108px 0', background: 'var(--black-2)' }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div className="section-eyebrow">Client Reviews</div>
          <h2 className="section-title">Don&apos;t Take Our<br/><em>Word for It.</em></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }} className="testi-grid">
          {TESTIMONIALS.map((t, i) => <TestiCard key={i} {...t}/>)}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}