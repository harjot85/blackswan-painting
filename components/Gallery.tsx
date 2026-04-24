'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface GalleryItem {
  src?: string;
  Graphic?: React.ComponentType;
  label: string;
  span2?: boolean;
}

interface GItemProps extends GalleryItem {
  delay: number;
  onOpen?: () => void;
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
  { src: '/gallery/Kitchen-I.jpg', label: 'Kitchen Cabinets Renovation' },
  { src: '/gallery/Island-I.jpg', label: 'Kitchen Island' },
  { src: '/gallery/Outdoor-I.jpg', label: 'Outdoor Living' },
  { src: '/gallery/Outdoor-II.jpg', label: 'Outdoor Work' },
  { src: '/gallery/Kitchen-I.jpg', label: 'Kitchen Cabinets Renovation' },
  { src: '/gallery/Kitchen-II.jpg', label: 'Kitchen Cabinets Update' },
  { src: '/gallery/Kitchen-III.jpg', label: 'Kitchen Transformation' },
];

function GItem({ src, Graphic, label, span2, delay, onOpen }: GItemProps) {
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
      className={`reveal g-item flex flex-col shrink-0 basis-[85%] snap-center md:shrink md:basis-auto ${span2 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <button
        type='button'
        onClick={onOpen}
        aria-label={`View ${label} larger`}
        className={`relative overflow-hidden flex-1 min-h-80 w-full p-0 border-0 bg-transparent cursor-pointer ${span2 ? 'md:min-h-105' : 'md:min-h-90'}`}
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
      </button>
    </div>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  onStep,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onStep(-1);
      else if (e.key === 'ArrowRight') onStep(1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onStep]);

  const item = items[index];
  if (!item?.src) return null;

  return (
    <div
      className='fixed inset-0 z-1000 flex items-center justify-center bg-black/92 p-4 pt-20 md:p-10'
      onClick={onClose}
      role='dialog'
      aria-modal='true'
      aria-label={item.label}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label='Close'
        className='absolute top-4 right-4 md:top-6 md:right-6 z-20 inline-flex items-center gap-2 h-11 pl-3 pr-4 rounded-full bg-white text-black font-semibold text-sm shadow-lg hover:bg-gold transition'
      >
        <span aria-hidden='true' className='text-xl leading-none'>&times;</span>
        <span>Close</span>
      </button>

      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        aria-label='Previous image'
        className='absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl leading-none transition'
      >
        &#8249;
      </button>

      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        aria-label='Next image'
        className='absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl leading-none transition'
      >
        &#8250;
      </button>

      <div
        className='relative w-full h-full max-w-6xl max-h-[88vh]'
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={item.src}
          src={item.src}
          alt={item.label}
          fill
          sizes='100vw'
          className='object-contain'
          priority
        />
        <div className='absolute -bottom-8.5 left-0 right-0 text-center text-white/80 text-sm'>
          {item.label}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const step = (dir: 1 | -1) => {
    setOpenIndex((i) => {
      if (i == null) return i;
      const n = ITEMS.length;
      return (i + dir + n) % n;
    });
  };

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

        <div className='flex overflow-x-auto snap-x snap-mandatory gap-3 -mx-7 px-7 pb-4 hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3.5 md:mx-0 md:px-0 md:pb-0 md:overflow-visible'>
          {ITEMS.map((item, i) => (
            <GItem
              key={i}
              {...item}
              delay={i * 0.1}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          items={ITEMS}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onStep={step}
        />
      )}
    </section>
  );
}
