'use client';

import { useEffect, useRef, useState } from 'react';

const STATS = [
  { target: 500, suffix: '+', label: 'Projects Completed' },
  { target: 10,  suffix: '+', label: 'Years of Experience' },
  { target: 98,  suffix: '%', label: 'Client Satisfaction' },
];

function Counter({ target, suffix }) {
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
    <span ref={ref} className="font-display text-[44px] font-bold text-gold leading-none block mb-1.5">
      {count + suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="bg-bk-3 border-y border-white/5 py-[38px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <div key={i} className={`text-center py-2 relative ${i > 0 ? 'border-l border-white/[0.08]' : ''}`}>
              <Counter {...s} />
              <span className="text-xs text-mid tracking-[0.5px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
