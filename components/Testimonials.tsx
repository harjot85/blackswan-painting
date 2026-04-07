'use client';

import { useEffect, useRef } from 'react';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  location: string;
  delay: number;
}

const TESTIMONIALS: Testimonial[] = [
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

function TestiCard({ text, initials, name, location, delay }: Testimonial) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal testi-card" style={{ transitionDelay: `${delay}s` }}>
      <div className="font-display text-[80px] text-gold leading-[0.65] mb-[18px]" style={{ opacity: 0.35 }}>&ldquo;</div>

      <p className="text-[14.5px] text-mid leading-[1.8] italic font-light mb-7">{text}</p>

      <div className="flex gap-[3px] text-gold text-[14px] mb-[18px]">{'★★★★★'}</div>

      <div className="flex items-center gap-3">
        <div className="w-[42px] h-[42px] rounded-full bg-bk-4 border-2 border-gold/30 flex items-center justify-center font-display font-bold text-[14px] text-gold shrink-0">
          {initials}
        </div>
        <div>
          <div className="text-[14px] font-semibold text-white">{name}</div>
          <div className="text-[12px] text-lo mt-[2px]">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[108px] bg-bk-2">
      <div className="container">
        <div className="mb-14">
          <div className="section-eyebrow">Client Reviews</div>
          <h2 className="section-title">Don&apos;t Take Our<br/><em>Word for It.</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {TESTIMONIALS.map((t, i) => <TestiCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}
