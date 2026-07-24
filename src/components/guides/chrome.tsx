import Link from "next/link";

export function GuidesHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[#fffcf6]/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/guides" className="text-lg font-extrabold tracking-tight text-ink">
          TinyBundle Guides
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-muted" aria-label="Guides">
          <Link href="/tinylayers" className="hover:text-ink">
            TinyLayers
          </Link>
          <Link href="/tinyhaven" className="hover:text-ink">
            TinyHaven
          </Link>
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function GuidesFooter() {
  return (
    <footer className="border-t border-line bg-[#fffcf6]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Part of{" "}
          <Link href="/" className="font-semibold text-amber-deep hover:underline">
            TinyBundle
          </Link>
          . General guidance only — not medical advice.
        </p>
        <Link href="/guides" className="font-semibold hover:text-ink">
          All guides
        </Link>
      </div>
    </footer>
  );
}
