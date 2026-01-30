'use client';

import { AnimatedSection } from './ScrollAnimation';

const experience = [
  {
    company: 'Proyectos Informáticos',
    role: 'Desarrollador Full Stack',
    period: '2024 - Presente',
    description:
      'Desarrollo de aplicaciones móviles y web utilizando Genero 4GL, Informix y MySQL. Implementación de soluciones escalables y optimizadas para mejorar la eficiencia operativa de los clientes.',
  },
  
  ];

export function Experiencie() {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#08080c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <span className="font-mono text-[#00d4ff] text-sm">// Trayectoria profesional</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3 mb-12">
            Mi <span className="gradient-text">experiencia</span>
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className="relative bg-[#0a0a10] border border-gray-800/50 rounded-2xl p-6 sm:p-8 hover:border-[#00d4ff]/30 transition-all duration-300 group"
                data-hoverable
              >
                {/* linea lateral decorativa */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#00d4ff] to-[#00ff88] rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="pl-6">
                  {/* empresa y periodo */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#00d4ff] transition-colors">
                      {exp.company}
                    </h3>
                    <span className="font-mono text-sm text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* rol */}
                  <p className="text-[#00d4ff] font-medium mb-4">{exp.role}</p>

                  {/* descripcion */}
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}