import type { Metadata } from 'next';
import './globals.css';

// Metadata para SEO - MUY IMPORTANTE para que te encuentren en Google
export const metadata: Metadata = {
  metadataBase: new URL('https://mateodogliani.dev'), // Cambiar por tu dominio real
  title: 'Mateo Dogliani | Full Stack Developer',
  description: 'Desarrollador Full Stack de Córdoba, Argentina. Especializado en aplicaciones móviles, sistemas web y soluciones enterprise. Next.js, React, NestJS, PostgreSQL.',
  keywords: ['desarrollador', 'full stack', 'react', 'nextjs', 'argentina', 'córdoba', 'freelance', 'mobile', 'web developer'],
  authors: [{ name: 'Mateo Dogliani' }],
  creator: 'Mateo Dogliani',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://mateodogliani.dev', // Cambiar por tu dominio real
    siteName: 'Mateo Dogliani Portfolio',
    title: 'Mateo Dogliani | Full Stack Developer',
    description: 'Desarrollador Full Stack de Córdoba, Argentina. Mobile apps, sistemas web y soluciones enterprise.',
    images: [
      {
        url: '/og-image.png', // Crear esta imagen después (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Mateo Dogliani - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mateo Dogliani | Full Stack Developer',
    description: 'Desarrollador Full Stack de Córdoba, Argentina.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#050508] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
