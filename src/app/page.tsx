import {
  Navbar,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  CustomCursor,
  Experiencie,
  Doit,
} from '@/components';
import { AcademicBackgroud } from '@/components/AcademicBackgroud';

/**
 * Página principal del Portfolio
 * 
 * Estructura:
 * 1. Navbar (fixed, con blur al scroll)
 * 2. Hero (tu nombre, rol, CTAs)
 * 3. About (foto, bio, versatilidad)
 * 4. Proyectos (cards con animación, agrupados por tipo)
 * 5. DoIT (producto propio: problema, solución y valor)
 * 6. Contacto (CTAs, social links)
 * 7. Footer
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
      <Doit />
      <Contact />
      <Footer />
    </main>
  );
}
