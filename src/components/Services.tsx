import { services } from '@/data/content';

export function Services() {
  return (
    <section id="services" className="border-t border-line px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          What I do
        </h2>
        <p className="mt-3 max-w-xl text-slate">
          Five ways I can help. For each one: the problem it solves and what you get.
        </p>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-4 py-7 md:grid-cols-[1fr_1.4fr] md:gap-12"
            >
              <h3 className="font-display text-xl font-medium">{service.title}</h3>
              <dl className="grid gap-3 text-[0.95rem]">
                <div>
                  <dt className="font-medium">Problem it solves</dt>
                  <dd className="text-slate">{service.solves}</dd>
                </div>
                <div>
                  <dt className="font-medium">What you get</dt>
                  <dd className="text-slate">{service.delivers}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
