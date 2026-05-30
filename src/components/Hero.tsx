import { profile } from "../data/resume";

const social = [
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: (
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    ),
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="glow-orb pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-5xl px-6">
        <p className="section-label mb-4">Portfolio</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-2 font-[family-name:var(--font-mono)] text-lg text-[var(--color-accent)] md:text-xl">
          {profile.title}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-emerald-300"
          >
            View projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm text-slate-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            Download resume
          </a>
        </div>

        <div className="mt-12 flex items-center gap-4">
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-slate-400 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                {item.icon}
              </svg>
            </a>
          ))}
          <span className="text-sm text-[var(--color-muted)]">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
