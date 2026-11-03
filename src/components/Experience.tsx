import { education, experience } from '@/data/content';

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Experience
        </h2>

        <div className="mt-10 divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <article
              key={job.company}
              className="grid gap-5 py-8 md:grid-cols-[1fr_1.6fr] md:gap-12"
            >
              <div>
                <h3 className="font-display text-xl font-medium">{job.role}</h3>
                <p className="mt-1 font-medium">{job.company}</p>
                <p className="text-sm text-slate">
                  {[job.place, job.period].filter(Boolean).join('. ')}
                </p>
              </div>
              <div>
                <p className="text-slate">{job.summary}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.95rem] marker:text-accent">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-medium">Education</h3>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {education.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-slate">{item.school}</p>
              </div>
              <p className="text-sm text-slate">{item.period}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
