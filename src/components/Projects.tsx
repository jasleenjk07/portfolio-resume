import { projects } from "../data/resume";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label mb-3">Projects</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          Selected work
        </h2>
        <div className="mt-10 space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 md:p-8 transition hover:border-emerald-800/50"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                    {project.title}
                  </h3>
                  <time className="mt-1 block text-sm text-[var(--color-muted)]">
                    {project.period}
                  </time>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs text-slate-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[var(--color-accent)]/10 px-4 py-2 text-xs text-[var(--color-accent)] transition hover:bg-[var(--color-accent)]/20"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-[var(--color-muted)] leading-relaxed">
                {project.description}
              </p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm text-slate-400 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-[var(--color-accent)] before:content-['']"
                  >
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-[family-name:var(--font-mono)] text-xs text-emerald-400/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
