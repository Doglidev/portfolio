'use client';

import { AnimatedSection } from './ScrollAnimation';

const experience = [
  {
    company: 'Proyectos Informáticos',
    role: 'Project Manager',
    period: 'Jul 2026 - Presente',
    description:
      'Coordino y reporto el avance diario del equipo de desarrollo, guío prioridades y destrabo tareas. Hago de puente entre lo que necesita el cliente y lo que construye el equipo técnico.',
  },
  {
    company: 'Proyectos Informáticos',
    role: 'Desarrollador Full Stack',
    period: 'Jun 2025 - Presente',
    description:
      'Desarrollo y mantenimiento de SIGI, un ERP en Genero 4GL e Informix usado por múltiples municipios y empresas. Construí apps móviles, modernicé la generación de reportes PDF en más de 16 módulos, resolví bugs críticos de producción, desarrollé el sitio comercial en Next.js y hoy participo en la integración con RFID.',
  },
  {
    company: 'Mundo Maipu',
    role: 'Vendedor de Repuestos',
    period: '2023 - 2025',
    description:
      'Vendedor mayorista de repuestos automotrices a compañías de seguros, con el mayor volumen de ventas de toda la estructura comercial. Negociación con clientes corporativos, análisis de mercado y gestión de cartera B2B.',
  },
  {
    company: 'JOMD',
    role: 'Técnico Informático (emprendimiento propio)',
    period: '2020 - 2025',
    description:
      'Instalación y mantenimiento de sistemas operativos, drivers y redes; limpieza, ampliación de memoria y recuperación de notebooks y PC.',
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
            <AnimatedSection key={`${exp.company}-${exp.role}`} delay={index * 100}>
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
