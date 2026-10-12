import Link from "next/link";
import { APP_IDENTITY, BundleArcs } from "@/components/app-identity";

const APPS = ["tinynaps", "tinylayers", "tinyblooms", "tinymeals"] as const;

export function GuidesHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-tb-border bg-tb/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] items-center gap-[clamp(10px,2vw,20px)] px-[clamp(16px,4vw,40px)] py-2.5">
        <Link
          href="/"
          className="flex flex-none items-center gap-2 text-tb-ink"
          aria-label="TinyBundle home"
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <BundleArcs />
          </svg>
          <span className="text-[17px] font-extrabold tracking-[-0.01em]">
            TinyBundle
          </span>
        </Link>
        <nav
          aria-label="Guides"
          className="hidden flex-1 justify-center gap-[clamp(12px,2.4vw,30px)] min-[820px]:flex"
        >
          <Link
            href="/guides"
            className="whitespace-nowrap text-[13.5px] font-bold text-tb-body hover:text-tb-ink"
          >
            All guides
          </Link>
          {APPS.map((app) => (
            <Link
              key={app}
              href={`/guides#hub-${app}`}
              className="whitespace-nowrap text-[13.5px] font-bold text-tb-body hover:text-tb-ink"
            >
              {APP_IDENTITY[app].name}
            </Link>
          ))}
        </nav>
        <div className="flex-1 min-[820px]:hidden" />
        <Link
          href="/#apps"
          className="flex h-[38px] flex-none items-center whitespace-nowrap rounded-[19px] bg-tb-amber px-[clamp(14px,1.8vw,18px)] text-[13.5px] font-extrabold text-[#232F48] hover:brightness-95 active:scale-[0.97]"
        >
          Explore the apps
        </Link>
      </div>
    </header>
  );
}

export function GuidesFooter() {
  return (
    <footer className="mt-[clamp(40px,6vw,72px)] border-t border-tb-border">
      <div className="mx-auto grid w-full max-w-[1180px] gap-7 px-[clamp(18px,4vw,40px)] pb-10 pt-[clamp(32px,5vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr))]">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="h-[30px] w-[30px]"
              aria-hidden="true"
            >
              <BundleArcs />
            </svg>
            <span className="text-lg font-extrabold">TinyBundle</span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-tb-muted">
            &copy; 2026 Two Brick Labs. General guidance only, not medical
            advice.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-2.5">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-tb-muted">
            Our apps
          </p>
          {APPS.map((app) => (
            <Link
              key={app}
              href={APP_IDENTITY[app].href}
              className="text-sm font-bold text-tb-body hover:text-tb-ink"
            >
              {APP_IDENTITY[app].name}
            </Link>
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-2.5">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-tb-muted">
            Guides
          </p>
          {APPS.map((app) => (
            <Link
              key={app}
              href={`/guides#hub-${app}`}
              className="text-sm font-bold text-tb-body hover:text-tb-ink"
            >
              {APP_IDENTITY[app].name} guides
            </Link>
          ))}
        </div>
        <div className="flex min-w-0 flex-col gap-2.5">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-tb-muted">
            Company
          </p>
          <a
            href="https://www.twobricklabs.com"
            className="text-sm font-bold text-tb-body hover:text-tb-ink"
          >
            Two Brick Labs
          </a>
          <a
            href="mailto:contact@twobricklabs.com"
            className="text-sm font-bold text-tb-body hover:text-tb-ink"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
