import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import QRCode from 'qrcode';

import Stars from '@/components/review/Stars';
import ShareCard from '@/components/review/ShareCard';
import { INSTAGRAM_URL } from '@/lib/social';
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_PHONE_TEL,
  GOOGLE_MAPS_URL,
  GOOGLE_REVIEW_URL,
  REVIEW_PAGE_URL,
} from '@/lib/business';

const SHARE_TITLE = `${BUSINESS_NAME} — We'd love your feedback`;
const SHARE_TEXT =
  'Thanks for trusting Black Swan Painting. A quick Google review takes 30 seconds and means the world to our Chilliwack team.';

export const metadata: Metadata = {
  title: `Share Your Experience | ${BUSINESS_NAME}`,
  description: SHARE_TEXT,
  alternates: { canonical: '/review' },
  openGraph: {
    type: 'website',
    url: REVIEW_PAGE_URL,
    siteName: BUSINESS_NAME,
    title: SHARE_TITLE,
    description: SHARE_TEXT,
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
    description: SHARE_TEXT,
  },
};

/* ------------------------------------------------------------------ */

interface ContactRowProps {
  href: string;
  label: string;
  value: string;
  external?: boolean;
  icon: React.ReactNode;
}

function ContactRow({ href, label, value, external, icon }: ContactRowProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex items-center gap-[14px] rounded-[10px] border border-white/[0.06] bg-white/[0.015] px-[14px] py-[11px] transition-all duration-300 hover:border-gold/25 hover:bg-gold/[0.04]"
    >
      <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[9.5px] font-semibold uppercase tracking-[2px] text-lo">{label}</span>
        <span className="block truncate text-[13px] text-hi transition-colors duration-300 group-hover:text-white">
          {value}
        </span>
      </span>
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="shrink-0 text-lo transition-all duration-300 group-hover:translate-x-[2px] group-hover:text-gold"
        aria-hidden="true"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </a>
  );
}

/* ------------------------------------------------------------------ */

export default async function ReviewPage() {
  const qrSvg = await QRCode.toString(REVIEW_PAGE_URL, {
    type: 'svg',
    errorCorrectionLevel: 'H',
    margin: 0,
    color: { dark: '#0A0A0A', light: '#00000000' },
  });

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bk px-5 pb-[52px] pt-[86px] lg:pt-[52px]">
      {/* Back to the main site — pinned so it stays reachable while scrolling */}
      <Link
        href="/"
        className="review-back group fixed left-4 top-4 z-20 inline-flex items-center gap-2 rounded-full px-[15px] py-[9px] text-[12.5px] font-bold tracking-[0.2px] text-bk sm:left-6 sm:top-6 sm:px-[17px] sm:py-[10px] sm:text-[13px]"
      >
        <svg
          width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:-translate-x-[3px]"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Site
      </Link>

      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(760px 520px at 50% -8%, rgba(242,193,46,0.13), transparent 62%), radial-gradient(620px 620px at 50% 112%, rgba(242,193,46,0.055), transparent 60%)',
        }}
      />

      <article className="review-card relative w-full max-w-[430px]">
        {/* Gilded edge */}
        <div
          aria-hidden="true"
          className="absolute -inset-px rounded-[27px] opacity-70"
          style={{
            background:
              'linear-gradient(150deg, rgba(242,193,46,0.55), rgba(242,193,46,0.06) 32%, transparent 52%, rgba(242,193,46,0.1) 78%, rgba(242,193,46,0.4))',
          }}
        />

        <div
          className="relative overflow-hidden rounded-[26px] border border-white/[0.06] px-[26px] pb-[30px] pt-[34px] sm:px-[34px]"
          style={{
            background: 'linear-gradient(168deg, #101010 0%, #0B0B0B 46%, #070707 100%)',
            boxShadow: '0 44px 110px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* Top hairline */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[16%] top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(242,193,46,0.85), transparent)' }}
          />

          {/* Logo — the source PNG has a solid black plate, so it is framed
              as a deliberate emblem panel rather than floated on the card. */}
          <div className="review-fade flex justify-center" style={{ animationDelay: '0.05s' }}>
            <Link
              href="/"
              aria-label={`${BUSINESS_NAME} home page`}
              className="inline-flex rounded-[18px] border border-gold/[0.18] px-[22px] py-[14px] transition-all duration-300 hover:border-gold/40"
              style={{
                background: 'radial-gradient(120% 120% at 50% 20%, #0C0C0C 0%, #050505 100%)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(242,193,46,0.12)',
              }}
            >
              <Image
                src="/gallery/logo.png"
                alt={`${BUSINESS_NAME} — Chilliwack, BC`}
                width={807}
                height={613}
                priority
                className="h-auto w-[190px] select-none"
              />
            </Link>
          </div>

          {/* Ornamental divider */}
          <div className="review-fade mt-[22px] flex items-center gap-[10px]" style={{ animationDelay: '0.12s' }} aria-hidden="true">
            <span className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(242,193,46,0.45))' }} />
            <span className="h-[5px] w-[5px] rotate-45 bg-gold/70" />
            <span className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(242,193,46,0.45), transparent)' }} />
          </div>

          {/* Pitch */}
          <div className="review-fade mt-[22px] text-center" style={{ animationDelay: '0.18s' }}>
            <Stars />
            <h1 className="font-display mt-[15px] text-[30px] font-bold leading-[1.15] text-white sm:text-[33px]">
              Loved the <em className="italic text-gold">results?</em>
            </h1>
            <p className="mx-auto mt-[11px] max-w-[300px] text-[13.5px] leading-[1.7] text-mid">
              Your review helps our small Chilliwack crew reach the next family. It takes about 30&nbsp;seconds.
            </p>
          </div>

          {/* QR */}
          <div className="review-fade mt-[26px] flex flex-col items-center" style={{ animationDelay: '0.24s' }}>
            <div
              className="relative rounded-[18px] bg-white p-[15px]"
              style={{ boxShadow: '0 18px 44px rgba(0,0,0,0.6), 0 0 0 1px rgba(242,193,46,0.28)' }}
            >
              <div
                className="h-[140px] w-[140px] [&>svg]:h-full [&>svg]:w-full"
                dangerouslySetInnerHTML={{ __html: qrSvg }}
              />
              {/* Centre medallion */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white">
                  <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-gold/60 bg-bk">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold" aria-hidden="true">
                      <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.11-6.46-4.7-4.58 6.49-.95z" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <p className="mt-[13px] text-[10.5px] font-semibold uppercase tracking-[2.6px] text-lo">
              Point your camera here
            </p>
          </div>

          {/* CTA */}
          <div className="review-fade mt-[22px]" style={{ animationDelay: '0.3s' }}>
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="review-cta flex w-full items-center justify-center gap-[10px] rounded-[12px] px-6 py-[15px] text-[14px] font-bold tracking-[0.3px] text-bk"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M21.35 11.1H12v3.24h5.35c-.23 1.5-1.72 4.4-5.35 4.4a5.98 5.98 0 0 1 0-11.96c1.73 0 2.89.74 3.55 1.37l2.42-2.33C16.42 4.3 14.42 3.4 12 3.4a8.6 8.6 0 1 0 0 17.2c4.97 0 8.25-3.49 8.25-8.4 0-.56-.06-.99-.15-1.42z" />
              </svg>
              Share Your Experience on Google
            </a>
            <p className="mt-[10px] text-center text-[11px] text-lo">
              Opens Google — no account setup needed.
            </p>
          </div>

          {/* Divider */}
          <div className="my-[24px] flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-white/[0.07]" />
            <span className="text-[9.5px] font-semibold uppercase tracking-[2.4px] text-lo">Or reach us</span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[9px]">
            <ContactRow
              href={`tel:${BUSINESS_PHONE_TEL}`}
              label="Call"
              value={BUSINESS_PHONE}
              icon={
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.27 2 2 0 0 1 3.55 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 5.55 5.55l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
            <ContactRow
              href={`mailto:${BUSINESS_EMAIL}`}
              label="Email"
              value={BUSINESS_EMAIL}
              icon={
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            />
            <ContactRow
              href={GOOGLE_MAPS_URL}
              label="Visit"
              value={BUSINESS_ADDRESS}
              external
              icon={
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />
            <ContactRow
              href={INSTAGRAM_URL}
              label="Instagram"
              value="@blackswanpaintingchilliwack"
              external
              icon={
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              }
            />
          </div>

          {/* Footer */}
          <div className="mt-[26px] flex flex-col items-center gap-[10px] border-t border-white/[0.06] pt-[18px]">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-mid transition-colors duration-300 hover:text-gold"
            >
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-[3px]"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to blackswanpainting.ca
            </Link>
            <ShareCard url={REVIEW_PAGE_URL} title={SHARE_TITLE} text={SHARE_TEXT} />
          </div>
        </div>
      </article>
    </main>
  );
}
