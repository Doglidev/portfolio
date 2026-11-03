import { projects, type Project } from '@/data/content';

// Diagrama simple de cómo encaja el sistema. No es una captura de pantalla:
// muestra la lógica del proyecto. El paso marcado con "mine" es donde trabajé yo.
function Flow({ project }: { project: Project }) {
  return (
    <div>
      <p className="text-sm text-mist">{project.flowTitle}</p>
      <ol className="flow mt-3">
        {project.flow.map((step) => (
          <li key={step.text}>
            <div
              className={`rounded border px-4 py-3 text-sm ${
                step.mine
                  ? 'border-accent-soft bg-accent-soft/10 text-white'
                  : 'border-white/15 text-mist'
              }`}
            >
              {step.text}
              {step.mine && <span className="ml-2 text-accent-soft">(my part)</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-sm font-medium text-white">{label}</dt>
      <dd className="mt-1 text-mist">{children}</dd>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.id}
      className={`rounded-md border border-white/15 bg-ink-2 p-6 sm:p-8 ${
        project.featured ? 'lg:col-span-3' : ''
      }`}
    >
      <header className="flex flex-wrap items-start justify-between gap-3">
        <h3
          className={`font-display font-medium leading-tight text-white ${
            project.featured ? 'max-w-2xl text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <span className="rounded-full border border-accent-soft/50 px-3 py-1 text-xs text-accent-soft">
          {project.status}
        </span>
      </header>

      <div
        className={`mt-6 grid gap-8 ${
          project.featured ? 'lg:grid-cols-[1.5fr_1fr] lg:gap-14' : ''
        }`}
      >
        <dl className="space-y-5">
          <Detail label="The problem">{project.problem}</Detail>
          <Detail label="The solution">{project.solution}</Detail>
          <Detail label="Key features">
            <ul className="list-disc space-y-1 pl-5 marker:text-accent-soft">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Detail>
          <Detail label="My role">{project.role}</Detail>
          <Detail label="Value for the business">{project.value}</Detail>
        </dl>

        <div className="space-y-6">
          <Flow project={project} />

          {project.links && (
            <ul className="flex flex-wrap gap-2">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded border border-accent-soft px-4 py-2 text-sm text-accent-soft transition-colors hover:bg-accent-soft hover:text-ink"
                  >
                    Visit {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ul className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-5">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded border border-white/15 px-2.5 py-1 text-xs text-mist">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Projects() {
  // Orden: los destacados (DoIT y RFID) primero, ocupando todo el ancho
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="on-dark bg-ink px-5 py-20 text-white sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Selected projects
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          Each one starts with a business problem. When a project is still in progress, it says so.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
