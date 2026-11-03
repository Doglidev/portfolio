import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/data/content';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: [
    'business analysis',
    'ERP',
    'custom software',
    'AI automation',
    'system integration',
    'web applications',
    'Argentina',
    'freelance',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  // La imagen para compartir (Open Graph) y el favicon se generan en
  // src/app/opengraph-image.tsx y src/app/icon.tsx: Next los detecta solo.
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
