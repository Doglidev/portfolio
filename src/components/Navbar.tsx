'use client';

import { useEffect, useState } from 'react';
import { nav } from '@/data/content';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Mostramos una línea debajo del menú solo cuando se hizo scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 px-5 backdrop-blur transition-colors sm:px-8 ${
        scrolled || open ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between"
      >
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Mateo Dogliani
        </a>

        {/* Menú de escritorio */}
        <ul className="hidden items-center gap-7 text-sm text-slate md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded bg-ink px-4 py-2 font-medium text-white transition-colors hover:bg-accent"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Botón del menú en celular */}
        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="-mx-5 border-t border-line bg-paper px-5 pb-5 pt-2 sm:-mx-8 sm:px-8 md:hidden">
          {[...nav, { label: 'Contact', href: '#contact' }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-base"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
