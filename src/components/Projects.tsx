'use client';

import { AnimatedSection } from './ScrollAnimation';

const projects = [
  {
    title: 'Sistema de Lectura de Medidores',
    description:
      'Aplicación móvil que digitalizó completamente el proceso de lectura municipal, reemplazando un sistema manual obsoleto. Arquitectura offline-first para zonas sin conectividad.',
    impact: 'Eliminé +2000 planillas de papel mensuales',
    tech: ['Genero 4GL', 'SQLite', 'Mobile', 'Offline-First'],
    year: '2025',
    type: 'Mobile App',
    highlight: 'Enterprise Legacy',
  },
  {
    title: 'Sistema de Gestión de Gimnasio',
    description:
      'Plataforma full-stack completa para administración de gimnasios: membresías, pagos, rutinas personalizadas y seguimiento de clientes.',
    impact: 'Arquitectura completa desde cero',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    year: '2025',
    type: 'Full Stack',
    highlight: 'End-to-End',
  },
  {
    title: 'Sistema de WEB - SIGI',
    description:
      'Sitio web comercial para el ERP SIGI, diseñado para convertir visitantes en clientes: información del producto, casos de uso y contacto directo.',
    impact: 'Arquitectura completa desde cero',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
    year: '2025',
    type: 'Full Stack',
    highlight: 'End-to-End',
  },
  {
    title: 'Sistema de escaneo de facturas',
    description:
      'App móvil para gestión de facturas con lectura de QR, integración a la API de ARCA para validación fiscal, y sincronización en la nube',
    impact: 'Arquitectura completa desde cero',
    tech: ['Genero 4GL', 'SQLite', 'Mobile'],
    year: '2025',
    type: 'Full Stack',
    highlight: 'End-to-End',
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="py-24 sm:py-32 bg-[#050508]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-16">
            <span className="font-mono text-[#00d4ff] text-sm">// Proyectos destacados</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mt-3">
              Lo que he <span className="gradient-text">construido</span>
            </h2>
            <p className="font-body text-gray-400 mt-4 max-w-xl">
              Cada proyecto es un problema real resuelto con código.
              No son demos — son sistemas funcionando en producción.
            </p>
          </div>
        </AnimatedSection>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <article
                className="card-hover bg-[#0a0a10] border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-10 glow-box group"
                data-hoverable
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    {/* header del proyecto */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-mono text-[#00d4ff] text-sm">
                        .0{index + 1}
                      </span>
                      <span className="text-gray-700">—</span>
                      <span className="text-gray-500 text-sm font-body">{project.year}</span>
                      <span className="px-2 py-0.5 bg-gray-800 rounded text-xs text-gray-400 font-mono">
                        {project.type}
                      </span>
                      <span className="px-2 py-0.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded text-xs text-[#00d4ff] font-mono">
                        {project.highlight}
                      </span>
                    </div>

                    {/* titulo */}
                    <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                      {project.title}
                    </h3>

                    {/* descripcion */}
                    <p className="font-body text-gray-400 mb-5 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>

                    {/* badge de impacto */}
                    <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full px-4 py-2">
                      <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
                      <span className="text-[#00d4ff] text-sm font-medium font-body">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  {/* tech stack */}
                  <div className="flex flex-wrap lg:flex-col gap-2 lg:items-end lg:min-w-[140px]">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#12121a] border border-gray-800/50 rounded-md text-gray-400 text-xs font-mono hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
