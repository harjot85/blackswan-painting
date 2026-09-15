'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { REVIEW_PAGE_PATH } from '@/lib/business';

const NAV_LINKS = ['services', 'gallery', 'testimonials', 'contact', 'about'] as const;

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
        <div className="flex items-center justify-between gap-3 sm:gap-6">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-[11px]">
            <Image
              src="/gallery/logo-mark.png"
              alt=""
              width={240}
              height={170}
              priority
              className={`w-auto select-none transition-all duration-[400ms] ${scrolled ? 'h-[34px] sm:h-[40px]' : 'h-[40px] sm:h-[48px]'}`}
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[21px] sm:text-[25px] font-black tracking-[1.5px] text-white whitespace-nowrap">
                BLACK <span className="text-gold italic">SWAN</span>
              </span>
              <span className="hidden min-[360px]:block text-[8.5px] tracking-[3.2px] sm:text-[10px] sm:tracking-[4.6px] font-medium text-lo uppercase mt-[4px] whitespace-nowrap">
                Painting &amp; Renovations
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-[26px] xl:gap-[32px]">
            {NAV_LINKS.map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-[16px] font-medium text-mid tracking-[0.3px] transition-colors duration-[250ms] hover:text-white"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Wrapper carries the breakpoint: `.btn` sets display in unlayered
              CSS, which outranks Tailwind's layered `hidden` utility. */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn btn-primary !py-[11px] !px-[22px] !text-[15px]">
              Get a Free Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden flex flex-col gap-[5px] bg-transparent border-0 p-1"
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
        <div className="flex flex-col bg-bk-2 border-t border-white/5 lg:hidden">
          {NAV_LINKS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className="px-7 py-4 text-[16px] font-medium text-mid border-b border-white/[0.04]"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
          <Link
            href={REVIEW_PAGE_PATH}
            onClick={closeMenu}
            className="flex items-center gap-2 px-7 py-4 text-[16px] font-semibold text-gold border-b border-white/[0.04]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.11-6.46-4.7-4.58 6.49-.95z"/>
            </svg>
            Share Your Experience
          </Link>
          <a
            href="#contact"
            onClick={closeMenu}
            className="btn btn-primary m-5 justify-center !py-[13px] !text-[15px]"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
