import { about, hero } from '../data/siteContent';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <section className="space-y-8 pt-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Hello, I&apos;m Elvis</p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-6xl">{hero.name}</h1>
            <p className="mt-3 text-xl font-medium text-primary/80">{hero.title}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{hero.tagline}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent/90 sm:w-auto">
                {hero.primaryCta}
              </a>
              <a href="#projects" className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-sm font-semibold text-primary transition hover:border-accent/80 sm:w-auto">
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 rounded-3xl border border-border bg-card p-10 shadow-sm shadow-border/40">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-accent">About Me</p>
              <h2 className="mt-4 text-3xl font-semibold text-primary">Professional profile</h2>
              <p className="mt-6 text-base leading-8 text-muted">{about.summary}</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-surface p-8 text-primary/85">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Location</p>
                <p className="mt-2 text-base">{about.location}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Phone</p>
                <p className="mt-2 text-base">{about.phone}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">Email</p>
                <a href={`mailto:${about.email}`} className="mt-2 block text-base text-accent hover:underline">
                  {about.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">LinkedIn</p>
                <a href={about.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-base text-accent hover:underline">
                  {about.linkedin}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted">GitHub</p>
                <a href={about.github} target="_blank" rel="noreferrer" className="mt-2 block text-base text-accent hover:underline">
                  {about.github}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-24 space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Work history</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((item) => (
              <article key={`${item.company}-${item.period}`} className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-border/30">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.24em] text-muted">{item.company} • {item.location}</p>
                  </div>
                  <p className="text-sm font-medium text-accent">{item.period}</p>
                </div>
                <p className="mt-6 text-base leading-7 text-muted">{item.description}</p>
                <ul className="mt-6 space-y-3 list-disc pl-5 text-base leading-7 text-muted">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24 space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-accent">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-primary">Featured work</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-border/30">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-primary">{project.name}</h3>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:underline">
                      View
                    </a>
                  ) : null}
                </div>
                <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.details.map((detail) => (
                    <span key={detail} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
