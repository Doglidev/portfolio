'use client';

import { AnimatedSection } from './ScrollAnimation';

type Project = {
  title: string;
  description: string;
  impact: string;
  tech: string[];
  year: string;
  type: string;
  highlight: string;
  liveUrl?: string;
};

type Group = {
  label: string;
  title: string;
  items: Project[];
};

// Los proyectos están agrupados por tipo: así el que mira entiende rápido
// qué clase de problemas resuelvo, en vez de ver una lista larga mezclada.
const groups: Group[] = [
  {
    label: '// Apps y sistemas enterprise',
    title: 'Aplicaciones que reemplazan trabajo manual',
    items: [
      {
        title: 'Sistema de Lectura de Medidores',
        description:
          'Aplicación móvil para digitalizar la lectura de medidores municipales. Arquitectura offline-first pensada para zonas sin conectividad, con sincronización por CSV y validación de datos. Desarrollada desde la documentación oficial, con mínimos recursos externos.',
        impact: 'Eliminó miles de formularios en papel por mes',
        tech: ['Genero 4GL', 'SQLite', 'Mobile', 'Offline-First'],
        year: '2025',
        type: 'Mobile App',
        highlight: 'Enterprise Legacy',
      },
      {
        title: 'Sistema de escaneo de facturas',
        description:
          'App móvil para gestión de facturas con lectura de QR, integración a la API de ARCA para validación fiscal y sincronización en la nube.',
        impact: 'Validación fiscal automática contra ARCA',
        tech: ['Genero 4GL', 'SQLite', 'Mobile'],
        year: '2025',
        type: 'Mobile App',
        highlight: 'Fiscal',
      },
      {
        title: 'Integración RFID con el ERP',
        description:
          'Chips pegados en las prendas y antenas que detectan el ingreso y egreso de mercadería, conectados con SIGI para automatizar un control que hoy requiere acción humana en una empresa de indumentaria.',
        impact: 'Objetivo: menos controles manuales y menos errores al armar pedidos',
        tech: ['RFID', 'ERP (SIGI)', 'Integración de sistemas'],
        year: '2026',
        type: 'Integración',
        highlight: 'En curso',
      },
    ],
  },
  {
    label: '// Full stack',
    title: 'Plataformas web completas',
    items: [
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
    ],
  },
  {
    label: '// Webs institucionales',
    title: 'Sitios que presentan y venden',
    items: [
      {
        title: 'Web de Proyectos Informáticos (SIGI)',
        description:
          'Sitio web comercial para el ERP SIGI, pensado para convertir visitantes en clientes: información del producto, casos de uso y contacto directo.',
        impact: 'Sitio publicado y en uso',
        tech: ['Next.js', 'Tailwind CSS'],
        year: '2025',
        type: 'Web',
        highlight: 'Institucional',
        liveUrl: 'https://proyectosinformaticos.com.ar',
      },
      {
        title: 'Sitio institucional IP San Pablo',
        description:
          'Sitio web institucional desarrollado de punta a punta: diseño, desarrollo y puesta en línea.',
        impact: 'Sitio publicado para un cliente real',
        tech: ['Node.js', 'Web'],
        year: '2026',
        type: 'Web',
        highlight: 'Institucional',
        liveUrl: 'https://ipsanpablo.com',
      },
      {
        title: 'JD Informática',
        description:
          'Sitio web de mi marca de desarrollo web a medida para inmobiliarias y pymes: presenta los servicios y facilita el contacto con nuevos clientes.',
        impact: 'Sitio publicado con dominio propio',
        tech: ['Node.js', 'Web'],
        year: '2026',
        type: 'Web',
        highlight: 'Marca propia',
        liveUrl: 'https://jdinformatica.ar',
      },
      {
        title: 'SERV-QUIM',
        description:
          'Rediseño del sitio de una empresa del rubro agroquímico: página de inicio y catálogo, trabajado por especificaciones y en sprints.',
        impact: 'Rediseño en curso para una empresa real',
        tech: ['Rediseño web', 'Sprints'],
        year: '2026',
        type: 'Web',
        highlight: 'En curso',
      },
    ],
  },
];

export function Projects() {
  // Contador global para que la numeración (.01, .02...) siga entre grupos
  let counter = 0;

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
              Cada proyecto es un problema real resuelto con código: desde sistemas
              funcionando en producción hasta lo que estoy construyendo hoy.
            </p>
          </div>
        </AnimatedSection>

        {groups.map((group) => (
          <div key={group.label} className="mb-14 last:mb-0">
            <AnimatedSection>
              <div className="mb-6">
                <span className="font-mono text-gray-500 text-xs">{group.label}</span>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white mt-1">
                  {group.title}
                </h3>
              </div>
            </AnimatedSection>

            {/* Project Cards */}
            <div className="space-y-6">
              {group.items.map((project, itemIndex) => {
                counter += 1;
                const number = String(counter).padStart(2, '0');

                return (
                  <AnimatedSection key={project.title} delay={itemIndex * 100}>
                    <article
                      className="card-hover bg-[#0a0a10] border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-10 glow-box group"
                      data-hoverable
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          {/* header del proyecto */}
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="font-mono text-[#00d4ff] text-sm">.{number}</span>
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
                          <h4 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl mb-3 text-white group-hover:text-[#00d4ff] transition-colors">
                            {project.title}
                          </h4>

                          {/* descripcion */}
                          <p className="font-body text-gray-400 mb-5 leading-relaxed max-w-2xl">
                            {project.description}
                          </p>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            {/* badge de impacto */}
                            <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full px-4 py-2">
                              <span className="w-2 h-2 bg-[#00d4ff] rounded-full animate-pulse" />
                              <span className="text-[#00d4ff] text-sm font-medium font-body">
                                {project.impact}
                              </span>
                            </div>

                            {/* botón de demo live */}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00d4ff] text-[#050508] rounded-full font-medium text-sm hover:bg-[#00d4ff] hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 font-body"
                              >
                                <span>→</span>
                                <span>VER SITIO</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* tech stack */}
                        <div className="flex flex-wrap lg:flex-col gap-2 lg:items-end lg:min-w-[140px]">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-[#12121a] border border-gray-800/50 rounded-md text-gray-400 text-xs font-mono hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
