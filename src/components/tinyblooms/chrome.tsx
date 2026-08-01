import Link from "next/link";
import { BloomsMark } from "@/components/tinyblooms/mark";

export function BloomsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-blooms-border/80 bg-blooms/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/tinyblooms" className="flex items-center gap-2.5" aria-label="TinyBlooms home">
          <BloomsMark className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-blooms-ink">
            TinyBlooms
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-blooms-muted transition-colors hover:text-blooms-green-deep"
          >
            TinyBundle
          </Link>
        </div>
      </div>
    </header>
  );
}

export function BloomsFooter() {
  return (
    <footer className="border-t border-blooms-border bg-blooms-sand/50">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <BloomsMark className="h-7 w-7" />
          <div>
            <p className="text-sm font-extrabold text-blooms-ink">TinyBlooms</p>
            <p className="text-xs text-blooms-muted">
              Part of{" "}
              <Link href="/" className="font-semibold text-blooms-green-deep hover:underline">
                TinyBundle
              </Link>
              . &copy; 2026{" "}
              <a href="https://www.twobricklabs.com" className="hover:text-blooms-ink">
                Two Brick Labs
              </a>
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-blooms-muted" aria-label="Footer">
          <Link href="/tinyhaven" className="hover:text-blooms-ink">
            TinyHaven
          </Link>
          <Link href="/tinylayers" className="hover:text-blooms-ink">
            TinyLayers
          </Link>
          <Link href="/tinymeals" className="hover:text-blooms-ink">
            TinyMeals
          </Link>
          <Link href="/#apps" className="hover:text-blooms-ink">
            All apps
          </Link>
          <a href="mailto:contact@twobricklabs.com" className="hover:text-blooms-ink">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
