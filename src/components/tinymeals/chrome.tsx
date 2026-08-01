import Link from "next/link";
import { MealsMark } from "@/components/tinymeals/mark";

export function MealsHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-meals-border/80 bg-meals/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1100px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/tinymeals" className="flex items-center gap-2.5" aria-label="TinyMeals home">
          <MealsMark className="h-8 w-8" />
          <span className="text-lg font-extrabold tracking-tight text-meals-ink">
            TinyMeals
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-sm font-semibold text-meals-muted transition-colors hover:text-meals-orange-deep"
          >
            TinyBundle
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MealsFooter() {
  return (
    <footer className="border-t border-meals-border bg-meals-sand/50">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2.5">
          <MealsMark className="h-7 w-7" />
          <div>
            <p className="text-sm font-extrabold text-meals-ink">TinyMeals</p>
            <p className="text-xs text-meals-muted">
              Part of{" "}
              <Link href="/" className="font-semibold text-meals-orange-deep hover:underline">
                TinyBundle
              </Link>
              . &copy; 2026{" "}
              <a href="https://www.twobricklabs.com" className="hover:text-meals-ink">
                Two Brick Labs
              </a>
            </p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-meals-muted" aria-label="Footer">
          <Link href="/tinyhaven" className="hover:text-meals-ink">
            TinyHaven
          </Link>
          <Link href="/tinylayers" className="hover:text-meals-ink">
            TinyLayers
          </Link>
          <Link href="/tinyblooms" className="hover:text-meals-ink">
            TinyBlooms
          </Link>
          <Link href="/#apps" className="hover:text-meals-ink">
            All apps
          </Link>
          <a href="mailto:contact@twobricklabs.com" className="hover:text-meals-ink">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
