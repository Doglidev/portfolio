import { ImageResponse } from 'next/og';

// Imagen que aparece al compartir el link en LinkedIn, WhatsApp, etc.
export const alt = 'Mateo Dogliani: Business & Technology Solutions';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0f1d33',
          color: '#ffffff',
          padding: 80,
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 34, color: '#7fd1d6', fontFamily: 'sans-serif' }}>
          Mateo Dogliani
        </div>
        <div style={{ fontSize: 72, lineHeight: 1.1, maxWidth: 940, display: 'flex' }}>
          I turn business problems into practical technology solutions.
        </div>
        <div style={{ fontSize: 28, color: '#c4ccda', fontFamily: 'sans-serif', display: 'flex' }}>
          Business analysis, ERP systems, custom software and AI automation
        </div>
      </div>
    ),
    size,
  );
}
