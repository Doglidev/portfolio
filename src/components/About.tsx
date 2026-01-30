'use client';

import { AnimatedSection } from './ScrollAnimation';
import Image from 'next/image';

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

const stats = [
  { value: '+1', label: 'Año de exp.' },
  { value: '+5', label: 'Proyectos prod.' },
  { value: '3', label: 'Tipos de dev' },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <AnimatedSection>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
                               <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/20 to-[#00ff88]/20 rounded-2xl" />
                
       
                <div className="absolute inset-2 bg-[#0c0c12] rounded-xl overflow-hidden flex items-center justify-center">
                 <Image src="/yo.jpeg" alt="Mateo Dogliani" fill className='object-cover object-center' />
                  
                </div>

                {/* elementos decorativos */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#00d4ff]/30 rounded-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-[#00ff88]/20 rounded-lg" />
              </div>
            </div>
          </AnimatedSection>

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
                  me dio una perspectiva única: entiendo tanto el lado técnico como el negocio.
                </p>
              </div>
            </AnimatedSection>

            {/* tarjetas de versatilidad */}
            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 gap-3 mt-8">
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

            {/* stats */}
            <AnimatedSection delay={300}>
              <div className="flex gap-8 mt-8 pt-8 border-t border-gray-800/50">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-3xl text-[#00d4ff]">{stat.value}</div>
                    <div className="font-body text-sm text-gray-500">{stat.label}</div>
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
