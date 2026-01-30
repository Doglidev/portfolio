'use client';

import { useEffect, useState } from 'react';

/**
 * Navbar con efecto blur al hacer scroll
 * 
 * Comportamiento:
 * - Inicialmente: transparente, padding grande
 * - Al scrollear (>50px): fondo con blur, padding reducido, borde inferior
 */

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${scrolled 
          ? 'py-3 bg-[#050508]/80 nav-blur border-b border-gray-800/50' 
          : 'py-5 bg-transparent'
        }
        ${mounted ? 'opacity-100' : 'opacity-0'}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className="font-display font-bold text-xl tracking-tight"
          data-hoverable
        >
          <span className="text-white">MD</span>
        </a>

        {/* Nav Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-400 font-body">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#00d4ff] transition-colors duration-300 relative group"
              data-hoverable
            >
              {item.label}
              {/* Línea animada debajo */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d4ff] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
