import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL } from '@/lib/business';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Black Swan Painting | Chilliwack's Premier Painting & Renovation Experts",
  description:
    'Black Swan Painting – professional painting and home renovation services in Chilliwack, BC. Interior, exterior, cabinets, and more.',
  keywords: 'painting, renovation, Chilliwack, interior painting, exterior painting, cabinet refinishing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
