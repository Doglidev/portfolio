import { about } from '@/data/content';

export function About() {
  return (
    <section id="about" className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">About</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="max-w-prose space-y-5 text-lg">
            {about.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="max-w-prose">
            <h3 className="font-display text-xl font-medium">{about.approachTitle}</h3>
            <p className="mt-3 text-slate">{about.approach}</p>
          </div>
        </div>

        {/* Las tres dimensiones del perfil */}
        <dl className="mt-14 grid gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-3">
          {about.pillars.map((pillar) => (
            <div key={pillar.title} className="bg-paper p-6">
              <dt className="font-display text-xl font-medium">{pillar.title}</dt>
              <dd className="mt-2 text-sm text-slate">{pillar.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
