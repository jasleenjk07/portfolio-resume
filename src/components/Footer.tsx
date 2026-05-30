import { profile } from "../data/resume";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm text-[var(--color-muted)] md:flex-row">
        <p>
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <p className="font-[family-name:var(--font-mono)] text-xs">
          ML · AI · Software Engineering
        </p>
      </div>
    </footer>
  );
}
