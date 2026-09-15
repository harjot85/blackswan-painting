import Link from 'next/link';

import Stars from './Stars';
import {
  GOOGLE_MAPS_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  REVIEW_PAGE_PATH,
} from '@/lib/business';

/**
 * Sits under the testimonial cards — asks past clients for a Google review
 * and points them at the digital review card at /review.
 */
export default function LeaveReviewPanel() {
  return (
    <div
      className="relative mt-[46px] overflow-hidden rounded-[12px] border border-white/[0.07] px-8 py-9 max-sm:px-6 sm:px-11"
      style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #121212 55%, #0E0E0E 100%)' }}
    >
      {/* Top accent + gold glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(242,193,46,0.55), transparent)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(520px 260px at 82% 0%, rgba(242,193,46,0.09), transparent 70%)' }}
      />

      <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Stars size={17} className="shrink-0 justify-start" />
            <span className="text-[12.5px] text-mid">
              Rated <strong className="font-semibold text-hi">{GOOGLE_RATING}</strong> from{' '}
              {GOOGLE_REVIEW_COUNT} Google reviews
            </span>
          </div>

          <h3 className="font-display mt-[14px] text-[26px] font-bold leading-[1.2] text-white sm:text-[30px]">
            Worked with us? <em className="italic text-gold">Tell your neighbours.</em>
          </h3>
          <p className="mt-[10px] max-w-[440px] text-[14px] leading-[1.75] text-mid">
            A quick Google review takes about 30 seconds and is the single biggest
            help you can give a local crew.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
          <Link href={REVIEW_PAGE_PATH} className="btn btn-primary justify-center !py-[14px] !px-7 !text-[14px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.11-6.46-4.7-4.58 6.49-.95z" />
            </svg>
            Share Your Experience
          </Link>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost justify-center !py-[14px] !px-7 !text-[14px]"
          >
            Read Reviews &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
