'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 500, suffix: '+', label: 'Projects Completed' },
  { target: 10,  suffix: '+', label: 'Years of Experience' },
  { target: 98,  suffix: '%', label: 'Client Satisfaction' },
  { target: null, display: '5 ★', label: 'Average Google Rating' },
];

function Counter({ target, suffix, display }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          setCount(Math.floor(current));
        }, 16);
      }
    }, { threshold: 0.5 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{
      fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700,
      color: 'var(--yellow)', lineHeight: 1, display: 'block', marginBottom: 6,
    }}>
      {display ?? (count + suffix)}
    </span>
  );
}

export default function Stats() {
  return (
    <div style={{
      background: 'var(--black-3)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '38px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center', padding: '8px 0', position: 'relative',
              borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <Counter {...s}/>
              <span style={{ fontSize: 12, color: 'var(--white-3)', letterSpacing: '0.5px' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </div>
  );
}