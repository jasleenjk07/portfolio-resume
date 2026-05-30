import { achievements } from "../data/resume";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label mb-3">Achievements</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          Highlights
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-surface)] p-6"
            >
              <time className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)]">
                {item.date}
              </time>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
