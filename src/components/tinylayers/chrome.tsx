import Link from "next/link";
import { LayersMark } from "@/components/tinylayers/mark";

const nav = [
  { label: "How it works", href: "/tinylayers#how" },
  { label: "Modes", href: "/tinylayers#modes" },
  { label: "Guides", href: "/guides" },
  { label: "FAQ", href: "/tinylayers#faq" },
];

export function LayersHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-layers-border/80 bg-layers/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/tinylayers" className="flex items-center gap-2.5" aria-label="TinyLayers home">
          <LayersMark className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-layers-ink">
            TinyLayers
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="TinyLayers">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-layers-muted transition-colors hover:text-layers-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-layers-blue px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-layers-blue-deep"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}

export function LayersFooter() {
  return (
    <footer className="border-t border-layers-border bg-layers-sand/60">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <LayersMark className="h-7 w-7" />
          <div>
            <p className="text-sm font-extrabold text-layers-ink">TinyLayers</p>
            <p className="text-xs text-layers-muted">
              Part of{" "}
              <Link href="/" className="font-semibold text-layers-blue hover:underline">
                TinyBundle
              </Link>
              . &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-layers-muted" aria-label="Footer">
          <Link href="/guides" className="hover:text-layers-ink">Guides</Link>
          <Link href="/tinylayers/blog" className="hover:text-layers-ink">Blog</Link>
          <a href="/tinylayers#safety" className="hover:text-layers-ink">Safety</a>
          <a href="/tinylayers#faq" className="hover:text-layers-ink">FAQ</a>
          <Link href="/#apps" className="hover:text-layers-ink">All apps</Link>
          <a href="mailto:support@twobricklabs.com" className="hover:text-layers-ink">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
