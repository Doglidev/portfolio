'use client';

import { AnimatedSection } from './ScrollAnimation';

const versatilityItems = [
  {
    icon: '📱',
    title: 'Mobile Apps',
    desc: 'Apps nativas con arquitectura offline-first',
  },
  {
    icon: '🌐',
    title: 'Web Apps',
    desc: 'SPAs modernas con React/Next.js',
  },
  {
    icon: '⚙️',
    title: 'Backend',
    desc: 'APIs robustas con Node.js/NestJS',
  },
  {
    icon: '🏢',
    title: 'Enterprise',
    desc: 'Sistemas legacy y ERPs corporativos',
  },
];


export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Sin foto: el contenido ocupa un solo bloque centrado en la lectura */}
        <div className="max-w-3xl">

          {/* ===== CONTENIDO ===== */}
          <div>
            <AnimatedSection>
              <span className="font-mono text-[#00d4ff] text-sm">// Sobre mí</span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-6">
                Más que <span className="gradient-text">código</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="space-y-4 font-body text-gray-400 leading-relaxed">
                <p>
                  Soy <span className="text-white font-medium">Mateo</span>, desarrollador Full Stack de{' '}
                  <span className="text-white">Córdoba, Argentina</span>. Con 22 años, llevo más de un año
                  construyendo soluciones que resuelven problemas reales.
                </p>
                <p>
                  Lo que me diferencia:{' '}
                  <span className="text-[#00d4ff]">no me limito a un solo tipo de desarrollo</span>.
                  Puedo construir una app móvil offline-first, un sistema web moderno, o integrarme con
                  tecnologías enterprise legacy — lo que el proyecto necesite.
                </p>
                <p>
                  Mi background en <span className="text-white">ventas automotrices</span> (donde fui top performer)
                  y mi rol actual coordinando el equipo de desarrollo de SIGI me dieron una perspectiva única:
                  entiendo tanto el lado técnico como el negocio.
                </p>
              </div>
            </AnimatedSection>

            {/* tarjetas de versatilidad */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {versatilityItems.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#0c0c14] rounded-xl border border-gray-800/50 hover:border-[#00d4ff]/30 transition-colors"
                    data-hoverable
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="font-display font-semibold text-white text-sm">{item.title}</div>
                    <div className="font-body text-xs text-gray-500 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
