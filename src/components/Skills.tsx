import { skillGroups } from "../data/resume";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label mb-3">Skills</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          Tools & expertise
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 transition hover:border-emerald-900/60"
            >
              <h3 className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-accent)]">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
