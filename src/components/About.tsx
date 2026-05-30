import { profile } from "../data/resume";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-[var(--color-border)] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-label mb-3">About</p>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-white md:text-4xl">
          From models to shipped products
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_280px]">
          <div className="space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              I&apos;m a Computer Science student at Lovely Professional University
              who builds across ML, computer vision, and full-stack — whether
              that&apos;s a canonical transliteration pipeline, a preventive-care
              recommender on NHANES data, a BlinkIt analytics dashboard, a
              campus food pre-order platform, or a webcam-driven air mouse.
            </p>
            <p>
              I care about the whole journey: cleaning and exploring data,
              training and evaluating models with clear metrics, and shipping
              interfaces people can use — Streamlit dashboards, Flask apps, and
              Kotlin Multiplatform clients. Outside of projects, I sharpen my
              problem-solving with DSA practice and serve as an SAP Student
              Coordinator on campus.
            </p>
          </div>
          <aside className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  Education
                </dt>
                <dd className="mt-1 text-slate-200">B.Tech CSE — LPU</dd>
                <dd className="text-[var(--color-muted)]">CGPA 8.78</dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  Focus
                </dt>
                <dd className="mt-1 text-slate-200">ML / AI · Computer Vision · Android Development</dd>
              </div>
              <div>
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  Contact
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-slate-200 hover:text-[var(--color-accent)]"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
