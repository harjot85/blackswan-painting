'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = ['services', 'about', 'gallery', 'testimonials', 'contact'] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`fixed top-0 inset-x-0 z-[900] transition-all duration-[400ms] border-b ${
      scrolled
        ? 'py-[14px] bg-bk/96 backdrop-blur-2xl border-white/5'
        : 'py-[22px] bg-transparent border-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="#home" className="flex flex-col leading-none">
            <span className="font-display text-[21px] font-black tracking-[1.5px] text-white">
              BLACK <span className="text-gold">SWAN</span>
            </span>
            <span className="text-[8.5px] font-medium tracking-[5px] text-lo uppercase mt-[3px]">
              Painting &amp; Renovations
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-[30px]">
            {NAV_LINKS.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-[13px] font-medium text-mid tracking-[0.3px] transition-colors duration-[250ms] hover:text-white"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary hidden md:inline-flex !py-[10px] !px-5 !text-[13px]">
            Get a Free Quote
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 p-1"
            aria-label="Toggle menu"
          >
            <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="flex flex-col bg-bk-2 border-t border-white/5 md:hidden">
          {NAV_LINKS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="px-7 py-4 text-[14px] font-medium text-mid border-b border-white/[0.04]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
