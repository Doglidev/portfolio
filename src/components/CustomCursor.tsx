'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // solo mostrar en dispositivos con mouse
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // detectar si el elemento (o algún padre) es "hoverable"
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [data-hoverable]');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // no renderizar en mobile/touch
  if (!isVisible) return null;

  return (
    <>
      {/* punto central, sigue el mouse exactamente */}
      <div
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div className="cursor-dot" />
      </div>

      {/* anillo exterior - tiene delay en la transicion */}
      <div
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      >
        <div className="cursor-ring" />
      </div>
    </>
  );
}
