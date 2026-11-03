import {
  Navbar,
  Hero,
  About,
  Services,
  Projects,
  Experience,
  Skills,
  Contact,
  Footer,
} from '@/components';

/**
 * Orden de la página (pensado para que el visitante entienda en pocos segundos
 * quién soy, qué problemas resuelvo, qué experiencia tengo y cómo contactarme):
 * Hero, About, Services, Projects, Experience, Skills, Contact.
 */
export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
