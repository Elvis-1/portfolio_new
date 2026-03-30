import { about, hero } from '../data/siteContent';

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
      </div>
    </main>
  );
}
