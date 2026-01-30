'use client';

import { useEffect, useState } from 'react';

/**
 * Cursor personalizado con efecto de seguimiento
 * 
 * ¿Cómo funciona?
 * - Escucha mousemove para actualizar la posición
 * - Escucha mouseover para detectar elementos "hoverable"
 * - Renderiza dos elementos: un punto y un anillo
 * - El anillo tiene un pequeño delay (transición CSS) para efecto de "lag"
 * 
 * IMPORTANTE: Solo funciona en desktop (pointer: fine)
 * En mobile/touch se oculta automáticamente
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar en dispositivos con mouse
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      // Detectar si el elemento (o algún padre) es "hoverable"
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

  // No renderizar en mobile/touch
  if (!isVisible) return null;

  return (
    <>
      {/* Punto central - sigue el mouse exactamente */}
      <div
        className={`custom-cursor ${isHovering ? 'cursor-hover' : ''}`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
        }}
      >
        <div className="cursor-dot" />
      </div>

      {/* Anillo exterior - tiene delay en la transición */}
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
