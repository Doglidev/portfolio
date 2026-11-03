import { ImageResponse } from 'next/og';

// Favicon generado por código: las iniciales sobre fondo navy.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1d33',
          color: '#7fd1d6',
          fontSize: 17,
          fontWeight: 700,
          borderRadius: 6,
        }}
      >
        MD
      </div>
    ),
    size,
  );
}
