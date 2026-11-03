import { hero, ledger } from '@/data/content';

export function Hero() {
  return (
    <section id="top" className="px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate">{hero.subheadline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded border border-ink px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          <p className="mt-8 text-sm text-slate">{hero.location}</p>
        </div>

        {/* Pieza principal: problemas reales y lo que se construyó para cada uno */}
        <aside aria-labelledby="ledger-title" className="lg:pt-3">
          <h2 id="ledger-title" className="font-display text-xl font-medium">
            Problems I have worked on
          </h2>
          <ol className="ledger mt-6">
            {ledger.map((row, i) => (
              <li key={row.problem} style={{ ['--i' as string]: i }}>
                <p className="text-sm text-slate">{row.problem}</p>
                <p className="mt-0.5 font-medium">{row.built}</p>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
