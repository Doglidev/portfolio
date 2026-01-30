import {
  Navbar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  CustomCursor,
  Experiencie,
} from '@/components';
import { AcademicBackgroud } from '@/components/AcademicBackgroud';

/**
 * Página principal del Portfolio
 * 
 * Estructura:
 * 1. Navbar (fixed, con blur al scroll)
 * 2. Hero (tu nombre, rol, CTAs)
 * 3. About (foto, bio, versatilidad)
 * 4. Proyectos (cards con animación)
 * 5. Contacto (CTAs, social links)
 * 6. Footer
 * 
 * El CustomCursor se renderiza en todo el sitio
 */
export default function Home() {
  return (
    <main className="cursor-custom">
      {/* Cursor personalizado - solo visible en desktop */}
      <CustomCursor />

      {/* Navegación */}
      <Navbar />

      {/* Secciones */}
      <Hero />
      <About />
      <Experiencie />
      <AcademicBackgroud />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
