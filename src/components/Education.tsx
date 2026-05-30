import { certificates, education } from "../data/resume";

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label mb-3">Education</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          Academic background
        </h2>
        <ol className="relative mt-10 space-y-8 border-l border-[var(--color-border)] pl-8">
          {education.map((item) => (
            <li key={`${item.school}-${item.degree}`} className="relative">
              <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-surface)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-white">{item.school}</h3>
                <time className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  {item.period}
                </time>
              </div>
              <p className="mt-1 text-slate-300">{item.degree}</p>
              <p className="text-sm text-[var(--color-muted)]">
                {item.location} · {item.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <p className="section-label mb-3">Certificates</p>
          <h3 className="text-xl font-semibold text-white">Continuous learning</h3>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {certificates.map((cert) => (
              <li
                key={cert.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm"
              >
                <span className="text-slate-300">{cert.name}</span>
                <span className="shrink-0 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  {cert.issuer} · {cert.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
