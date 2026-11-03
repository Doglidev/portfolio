import { contact } from '@/data/content';

export function Contact() {
  return (
    <section id="contact" className="on-dark bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          Is a process slowing your business down?
        </h2>
        <p className="mt-5 max-w-xl text-lg text-mist">
          Tell me what is not working. I will tell you if technology can help, and how I would
          approach it.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="rounded bg-white px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            Email me
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/40 px-6 py-3 text-sm font-medium transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            LinkedIn
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-white/40 px-6 py-3 text-sm font-medium transition-colors hover:border-accent-soft hover:text-accent-soft"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-mist">
          {contact.email}. Download my CV in{' '}
          <a href={contact.cvEn} download className="underline underline-offset-4 hover:text-accent-soft">
            English
          </a>{' '}
          or{' '}
          <a href={contact.cvEs} download className="underline underline-offset-4 hover:text-accent-soft">
            Spanish
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-dark border-t border-white/10 bg-ink px-5 py-6 text-sm text-mist sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
        <p>© {new Date().getFullYear()} Mateo Dogliani</p>
        <p>Córdoba, Argentina</p>
      </div>
    </footer>
  );
}
