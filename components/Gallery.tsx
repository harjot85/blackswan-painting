'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface GalleryItem {
  src?: string;
  Graphic?: React.ComponentType;
  label: string;
  span2?: boolean;
}

interface GItemProps extends GalleryItem {
  delay: number;
}

const ITEMS: GalleryItem[] = [
  {
    src: '/gallery/l-1.jpg',
    label: 'Living Room Refresh',
    span2: true,
  },
  { src: '/gallery/nook.jpg', label: 'Cabinet Refinishing' },
  { src: '/gallery/l-3.jpg', label: 'Living Room Refresh' },
  { src: '/gallery/stairs.jpg', label: 'Full Interior — Sardis' },
  { src: '/gallery/l-2.jpg', label: 'Living Room Transformation' },
  { src: '/gallery/l-4.jpg', label: 'Living Room Refresh' },
  { src: '/gallery/l-5.jpg', label: 'Living Room Corner' },
];

function GItem({ src, Graphic, label, span2, delay }: GItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('visible');
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal g-item flex flex-col ${span2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div
        className='relative overflow-hidden flex-1'
        style={{ minHeight: span2 ? 420 : 360 }}
      >
        {src ? (
          <Image
            src={src}
            alt={label}
            fill
            className='object-cover g-graphic'
          />
        ) : Graphic ? (
          <div className='g-graphic'>
            <Graphic />
          </div>
        ) : null}
        <div className='g-overlay'>
          <span className='g-overlay-label'>{label}</span>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id='gallery' className='py-[108px] bg-bk'>
      <div className='container'>
        <div className='flex justify-between items-end mb-12 flex-wrap gap-6'>
          <div>
            <div className='section-eyebrow'>Portfolio</div>
            <h2 className='section-title'>
              Our <em>Work</em>
            </h2>
          </div>
          <a href='#contact' className='btn btn-ghost'>
            Start Your Project &rarr;
          </a>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px]'>
          {ITEMS.map((item, i) => (
            <GItem key={i} {...item} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
