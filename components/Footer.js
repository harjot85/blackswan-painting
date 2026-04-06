const SERVICES_LINKS = ['Interior Painting','Exterior Painting','Cabinet Refinishing','Deck & Fence Staining','Drywall Repair','Home Renovations'];
const COMPANY_LINKS  = [['About Us','#about'],['Gallery','#gallery'],['Reviews','#testimonials'],['Contact','#contact'],['Free Quote','#contact']];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--black-2)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr', gap: 64, marginBottom: 52 }} className="footer-grid">

          {/* Brand */}
          <div>
            <a href="#home" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 900, letterSpacing: '1.5px', color: 'var(--white)' }}>
                BLACK <span style={{ color: 'var(--yellow)' }}>SWAN</span>
              </span>
              <span style={{ fontSize: 8.5, fontWeight: 500, letterSpacing: '5px', color: 'var(--white-4)', textTransform: 'uppercase', marginTop: 3 }}>
                Painting &amp; Renovations
              </span>
            </a>
            <p style={{ fontSize: 13.5, color: 'var(--white-3)', lineHeight: 1.8, margin: '16px 0 24px', maxWidth: 300 }}>
              Chilliwack&rsquo;s trusted painting and renovation professionals. Quality work, honest pricing, and results that speak for themselves.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', path: null },
                { label: 'Location',  path: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label} style={{
                  width: 36, height: 36, borderRadius: 6,
                  background: 'var(--black-3)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--white-4)', transition: 'var(--transition)',
                }}>
                  {label === 'Instagram' ? (
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  ) : (
                    <svg width="15" height="15" fill={label === 'Facebook' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d={path}/>{label === 'Location' && <circle cx="12" cy="10" r="3"/>}
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 22 }}>Services</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SERVICES_LINKS.map(s => (
                <li key={s}><a href="#services" style={{ fontSize: 13.5, color: 'var(--white-3)' }}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'var(--white)', marginBottom: 22 }}>Company</div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {COMPANY_LINKS.map(([label, href]) => (
                <li key={label}><a href={href} style={{ fontSize: 13.5, color: 'var(--white-3)' }}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 26,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', gap: 20, flexWrap: 'wrap',
        }} className="footer-bottom">
          <p style={{ fontSize: 12.5, color: 'var(--white-4)' }}>
            &copy; {new Date().getFullYear()} Black Swan Painting &amp; Renovations. Chilliwack, BC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy','Terms of Service'].map(t => (
              <a key={t} href="#" style={{ fontSize: 12.5, color: 'var(--white-4)' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; } }
        @media (max-width: 768px)  { .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; } .footer-bottom { flex-direction: column !important; text-align: center !important; } }
      `}</style>
    </footer>
  );
}