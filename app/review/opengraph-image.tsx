import { ImageResponse } from 'next/og';
import { BUSINESS_CITY } from '@/lib/business';
import { LOGO_DATA_URI } from './logo-data';

export const alt = "Black Swan Painting — We'd love your feedback";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

function Star({ size: s }: { size: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="#F2C12E">
      <path d="M12 2.5l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.33l-5.8 3.04 1.11-6.46-4.7-4.58 6.49-.95z" />
    </svg>
  );
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(150deg, #131313 0%, #0A0A0A 48%, #060606 100%)',
        }}
      >
        {/* Gold frame */}
        <div
          style={{
            position: 'absolute',
            top: 26,
            left: 26,
            right: 26,
            bottom: 26,
            border: '1px solid rgba(242,193,46,0.38)',
            borderRadius: 18,
            display: 'flex',
          }}
        />

        {/* Emblem panel — the logo PNG has its own black plate, so it is
            framed deliberately instead of floated on the background. */}
        <div
          style={{
            display: 'flex',
            padding: '18px 30px',
            borderRadius: 22,
            border: '1px solid rgba(242,193,46,0.22)',
            background: '#050505',
            boxShadow: '0 22px 60px rgba(0,0,0,0.6)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_DATA_URI} width={380} height={289} alt="" />
        </div>

        <div style={{ display: 'flex', gap: 10, marginTop: 26 }}>
          {[0, 1, 2, 3, 4].map(i => <Star key={i} size={34} />)}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 52,
            fontWeight: 700,
            color: '#FFFFFF',
            marginTop: 24,
            letterSpacing: -0.5,
          }}
        >
          We&rsquo;d love your feedback
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#9A9A9A',
            marginTop: 14,
            letterSpacing: 4,
            textTransform: 'uppercase',
          }}
        >
          {`Painting & Renovations · ${BUSINESS_CITY}`}
        </div>
      </div>
    ),
    size,
  );
}
