'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-bk">

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 65% 45%, rgba(242,193,46,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 20% 80%, rgba(242,193,46,0.04) 0%, transparent 60%)`,
      }} />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* Decorative bg wordmark */}
      <div aria-hidden className="absolute right-[-60px] bottom-[-40px] font-display font-black pointer-events-none select-none hidden md:block" style={{
        fontSize: 'clamp(160px,22vw,300px)',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(242,193,46,0.07)',
        lineHeight: 0.85,
        letterSpacing: -4,
      }}>BS</div>

      <div className="container">
        <div className="relative z-[2] max-w-[760px] pt-20">

          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 pl-[6px] pr-[14px] py-[5px] bg-gold/10 border border-gold/20 rounded-full text-[11.5px] font-semibold tracking-[1.5px] uppercase text-gold mb-[30px]">
            <span className="w-[7px] h-[7px] rounded-full bg-gold" />
            Serving Chilliwack, BC
          </div>

          {/* Title */}
          <h1 className="font-display font-black mb-7" style={{
            fontSize: 'clamp(3rem, 8.5vw, 7rem)',
            lineHeight: 0.95,
          }}>
            <span className="block text-white">We Don&apos;t</span>
            <span className="block text-gold italic">Just Paint.</span>
            <span className="block" style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
            }}>We Transform.</span>
          </h1>

          <p className="text-[17px] font-light text-mid max-w-[520px] mb-[42px] leading-[1.75]">
            Premium painting and renovation services trusted by{' '}
            <strong className="text-hi font-medium">
              hundreds of Chilliwack homeowners.
            </strong>{' '}
            Interior, exterior, cabinets — flawless results, every time.
          </p>

          <div className="flex gap-[14px] flex-wrap">
            <a href="#gallery" className="btn btn-primary">
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
              See Our Work
            </a>
            <a href="#contact" className="btn btn-ghost">Get a Free Quote &rarr;</a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[3px] uppercase text-lo z-[2]">
        <div className="w-px h-9 bg-gradient-to-b from-gold to-transparent animate-[scrollPulse_2.2s_ease-in-out_infinite]" />
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          40%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          60%  { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
