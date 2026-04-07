const SERVICES_LINKS = ['Interior Painting','Exterior Painting','Cabinet Refinishing','Deck & Fence Staining','Drywall Repair','Home Renovations'];
const COMPANY_LINKS  = [['About Us','#about'],['Gallery','#gallery'],['Reviews','#testimonials'],['Contact','#contact'],['Free Quote','#contact']];

export default function Footer() {
  return (
    <footer className="bg-bk-2 border-t border-white/5 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.2fr_1fr_1fr] gap-8 lg:gap-16 mb-[52px]">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex flex-col leading-none">
              <span className="font-display text-[21px] font-black tracking-[1.5px] text-white">
                BLACK <span className="text-gold">SWAN</span>
              </span>
              <span className="text-[8.5px] font-medium tracking-[5px] text-lo uppercase mt-[3px]">
                Painting &amp; Renovations
              </span>
            </a>
            <p className="text-[13.5px] text-mid leading-[1.8] mt-4 mb-6 max-w-[300px]">
              Chilliwack&rsquo;s trusted painting and renovation professionals. Quality work, honest pricing, and results that speak for themselves.
            </p>
            <div className="flex gap-[10px]">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Instagram', path: null },
                { label: 'Location',  path: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-[6px] bg-bk-3 border border-white/[0.07] flex items-center justify-center text-lo transition-all duration-300 hover:text-mid hover:border-white/20">
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
            <div className="text-[11.5px] font-semibold tracking-[2.5px] uppercase text-white mb-[22px]">Services</div>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map(s => (
                <li key={s}><a href="#services" className="text-[13.5px] text-mid hover:text-hi transition-colors duration-200">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[11.5px] font-semibold tracking-[2.5px] uppercase text-white mb-[22px]">Company</div>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map(([label, href]) => (
                <li key={label}><a href={href} className="text-[13.5px] text-mid hover:text-hi transition-colors duration-200">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-[26px] flex flex-col sm:flex-row justify-between items-center gap-5 text-center sm:text-left">
          <p className="text-[12.5px] text-lo">
            &copy; {new Date().getFullYear()} Black Swan Painting &amp; Renovations. Chilliwack, BC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service'].map(t => (
              <a key={t} href="#" className="text-[12.5px] text-lo hover:text-mid transition-colors duration-200">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
