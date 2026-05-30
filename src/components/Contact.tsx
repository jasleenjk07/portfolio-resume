import { profile } from "../data/resume";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[var(--color-border)] py-20"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="section-label mb-3">Contact</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[var(--color-muted)]">
          Open to internships, collaborations, and ML/AI project opportunities.
          Reach out — I&apos;d love to hear from you.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-[var(--color-border)] px-8 py-3 text-sm text-slate-300 transition hover:border-[var(--color-accent)]"
          >
            {profile.phone}
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
