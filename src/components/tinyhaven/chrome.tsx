import Link from "next/link";
import { AppIcon } from "@/components/app-icons";

const nav = [
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "For parents", href: "#for-parents" },
  { label: "FAQ", href: "#faq" },
];

export function HavenHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-haven-border/60 bg-haven/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/tinyhaven" className="flex items-center gap-2.5" aria-label="TinyHaven home">
          <AppIcon slug="tinyhaven" className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-haven-ink">
            TinyHaven
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="TinyHaven">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-haven-muted transition-colors hover:text-haven-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="rounded-full bg-haven-amber px-5 py-2.5 text-sm font-bold text-haven-on-amber shadow-[0_8px_28px_rgba(223,174,109,0.28)] transition-colors hover:bg-haven-amber-bright"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

export function HavenFooter() {
  return (
    <footer className="border-t border-haven-border bg-haven-deep">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <AppIcon slug="tinyhaven" className="h-7 w-7" />
            <span className="text-base font-extrabold text-haven-ink">TinyHaven</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-haven-soft">
            A quiet space for parents. Any night, any time. Part of{" "}
            <Link href="/" className="font-semibold text-haven-amber-text hover:underline">
              TinyBundle
            </Link>
            .
          </p>
        </div>

        <nav aria-label="App">
          <h2 className="text-sm font-extrabold text-haven-ink">App</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-haven-muted">
            <li><a href="#how" className="hover:text-haven-ink">How it works</a></li>
            <li><a href="#features" className="hover:text-haven-ink">Features</a></li>
            <li><a href="#faq" className="hover:text-haven-ink">FAQ</a></li>
            <li><a href="#download" className="hover:text-haven-ink">Download</a></li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-extrabold text-haven-ink">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-haven-muted">
            <li><Link href="/#about" className="hover:text-haven-ink">About TinyBundle</Link></li>
            <li><Link href="/#apps" className="hover:text-haven-ink">Our apps</Link></li>
            <li><a href="mailto:contact@twobricklabs.com" className="hover:text-haven-ink">Contact</a></li>
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-extrabold text-haven-ink">Legal</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-haven-muted">
            <li><span className="cursor-default">Privacy Policy</span></li>
            <li><span className="cursor-default">Terms of Use</span></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-haven-border/70">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-haven-soft sm:px-8">
          &copy; 2026{" "}
          <a href="https://www.twobricklabs.com" className="hover:text-haven-ink">
            Two Brick Labs
          </a>
          . Built for the 2am club.
        </p>
      </div>
    </footer>
  );
}
