'use client';

import { useEffect, useRef } from 'react';

interface ServiceItem {
  num: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
}

interface ServiceCardProps extends ServiceItem {
  delay: number;
}

const SERVICES: ServiceItem[] = [
  {
    num: '01', title: 'Interior Painting',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline strokeLinecap="round" strokeLinejoin="round" points="9 22 9 12 15 12 15 22"/></svg>,
    desc: 'Transform every room with precise, clean interior painting. Walls, ceilings, trim — expert prep work ensures lasting results your family will love for years.',
  },
  {
    num: '02', title: 'Exterior Painting',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><rect strokeLinecap="round" strokeLinejoin="round" x="3" y="3" width="18" height="18" rx="2"/><path strokeLinecap="round" d="M3 9h18M9 21V9"/></svg>,
    desc: "Boost curb appeal and shield your home from the elements. We use premium exterior coatings engineered for Chilliwack's climate — built to last.",
  },
  {
    num: '03', title: 'Cabinet Refinishing',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path strokeLinecap="round" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
    desc: 'Give your kitchen a luxury refresh without demolition. Our cabinet refinishing delivers a factory-smooth finish at a fraction of the replacement cost.',
  },
  {
    num: '04', title: 'Deck & Fence Staining',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/><path strokeLinecap="round" d="M12 2v3M4.93 4.93l2.12 2.12M19.07 4.93l-2.12 2.12"/></svg>,
    desc: 'Restore and protect your outdoor woodwork. Professional staining and sealing keeps your deck and fences looking great season after season.',
  },
  {
    num: '05', title: 'Drywall Repair',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><rect strokeLinecap="round" x="2" y="3" width="20" height="14" rx="2"/><path strokeLinecap="round" d="M8 21h8M12 17v4"/></svg>,
    desc: 'Cracks, holes, water damage — we repair and finish drywall to a seamless, paint-ready surface. No patch too small, no wall too challenging.',
  },
  {
    num: '06', title: 'Home Renovations',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg>,
    desc: 'Beyond painting — we handle a full range of interior and exterior renovation work. One reliable contractor, end-to-end results you can count on.',
  },
  {
    num: '07', title: 'Exterior House Washing',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 21v-6h8v6"/><path strokeLinecap="round" strokeLinejoin="round" d="M6 14c1-1 2-1.5 3-1s2 1 3 0 2-1 3 0"/></svg>,
    desc: "Revive your home's exterior with a thorough soft wash or pressure wash. We safely remove dirt, mildew, and grime — the perfect prep before a fresh coat of paint.",
  },
  {
    num: '08', title: 'Window Cleaning',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" width="46" height="46"><rect strokeLinecap="round" strokeLinejoin="round" x="3" y="3" width="18" height="18" rx="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 7.5c1 .5 2 .5 3 0"/></svg>,
    desc: 'Crystal-clear windows inside and out. Our streak-free window cleaning brightens every room and gives your home a polished, well-maintained look.',
  },
];

function ServiceCard({ num, title, icon, desc, delay }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal service-card" style={{ transitionDelay: `${delay}s` }}>
      <span className="absolute top-[22px] right-6 font-display text-[52px] font-bold leading-none select-none"
        style={{ color: 'rgba(255,255,255,0.03)' }}>
        {num}
      </span>
      <div className="text-gold mb-[22px]">{icon}</div>
      <h3 className="font-display text-[20px] font-bold text-white mb-3">{title}</h3>
      <p className="text-[13.5px] text-mid leading-[1.75] font-light">{desc}</p>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-[108px] bg-bk">
      <div className="container">
        <div className="max-w-[560px] mb-16">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">Every Surface.<br/><em>Perfected.</em></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
