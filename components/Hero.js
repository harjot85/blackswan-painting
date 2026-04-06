'use client';

export default function Hero() {
  return (
    <section id="home" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden', background: 'var(--black)',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 60% at 65% 45%, rgba(242,193,46,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 40% at 20% 80%, rgba(242,193,46,0.04) 0%, transparent 60%)`,
      }}/>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
      }}/>

      {/* Decorative bg wordmark */}
      <div aria-hidden style={{
        position: 'absolute', right: -60, bottom: -40,
        fontFamily: 'var(--font-display)', fontSize: 'clamp(160px,22vw,300px)',
        fontWeight: 900, color: 'transparent',
        WebkitTextStroke: '1px rgba(242,193,46,0.07)',
        lineHeight: 0.85, pointerEvents: 'none', userSelect: 'none', letterSpacing: -4,
      }}>BS</div>

      <div className="container">
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 760, paddingTop: 80 }}>

          {/* Pill badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '5px 14px 5px 6px',
            background: 'var(--yellow-muted)',
            border: '1px solid rgba(242,193,46,0.22)',
            borderRadius: 100, fontSize: 11.5, fontWeight: 600,
            letterSpacing: '1.5px', textTransform: 'uppercase',
            color: 'var(--yellow)', marginBottom: 30,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--yellow)' }}/>
            Serving Chilliwack, BC
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8.5vw, 7rem)',
            fontWeight: 900, lineHeight: 0.95, marginBottom: 28,
          }}>
            <span style={{ display: 'block', color: 'var(--white)' }}>We Don&apos;t</span>
            <span style={{ display: 'block', color: 'var(--yellow)', fontStyle: 'italic' }}>Just Paint.</span>
            <span style={{
              display: 'block', color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.25)',
            }}>We Transform.</span>
          </h1>

          <p style={{
            fontSize: 17, fontWeight: 300, color: 'var(--white-3)',
            maxWidth: 520, marginBottom: 42, lineHeight: 1.75,
          }}>
            Premium painting and renovation services trusted by{' '}
            <strong style={{ color: 'var(--white-2)', fontWeight: 500 }}>
              hundreds of Chilliwack homeowners.
            </strong>{' '}
            Interior, exterior, cabinets — flawless results, every time.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
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
      <div style={{
        position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--white-4)', zIndex: 2,
      }}>
        <div style={{
          width: 1, height: 36,
          background: 'linear-gradient(to bottom, var(--yellow), transparent)',
          animation: 'scrollPulse 2.2s ease-in-out infinite',
        }}/>
        <span>Scroll</span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%   { opacity: 0; transform: scaleY(0); transform-origin: top; }
          40%  { opacity: 1; transform: scaleY(1); transform-origin: top; }
          60%  { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 768px) {
          #home div[aria-hidden] { display: none; }
        }
      `}</style>
    </section>
  );
}