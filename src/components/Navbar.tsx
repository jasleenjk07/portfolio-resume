import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-lg font-semibold text-white"
        >
          JK<span className="text-[var(--color-accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300 transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-300 transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-slate-300"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3 border-t border-[var(--color-border)] pt-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300"
              onClick={() => setOpen(false)}
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm text-slate-300"
              onClick={() => setOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
