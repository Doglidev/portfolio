import { skills } from '@/data/content';

// Las tecnologías son el respaldo técnico, no el mensaje principal.
// Las de uso diario ("core") van en negrita; el resto en texto normal.
export function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Technologies
        </h2>
        <p className="mt-3 max-w-xl text-slate">
          The tools behind the work. The ones in bold are what I use most.
        </p>

        <dl className="mt-10 divide-y divide-line border-y border-line">
          {skills.map((group) => (
            <div key={group.group} className="grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:gap-12">
              <dt className="font-display text-lg font-medium">{group.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={'core' in item && item.core ? 'font-semibold' : 'text-slate'}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
