'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook para animar elementos cuando entran al viewport
 * 
 * ¿Cómo funciona?
 * - Usa Intersection Observer API (nativa del browser)
 * - Cuando el elemento entra al viewport, setea isVisible = true
 * - Solo se activa una vez (no se "desanima" al salir)
 * 
 * @returns [ref, isVisible] - ref para poner en el elemento, isVisible para condicionar estilos
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el elemento es visible, activamos la animación
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Opcional: dejar de observar después de animar (mejor performance)
          // observer.unobserve(entry.target);
        }
      },
      {
        // threshold: qué porcentaje del elemento debe ser visible (0.1 = 10%)
        threshold: 0.1,
        // rootMargin: margen extra para activar antes/después
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: dejar de observar cuando el componente se desmonta
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

/**
 * Componente wrapper que anima sus children al hacer scroll
 */
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay en ms
}

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: AnimatedSectionProps) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
