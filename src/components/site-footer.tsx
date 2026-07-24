import Link from "next/link";
import { Logo } from "./logo";
import { apps } from "@/lib/apps";

const columns = [
  {
    heading: "Our Apps",
    links: apps.map((app) => ({
      label: app.comingSoon && app.slug !== "tinyblooms" ? `${app.name} (soon)` : app.name,
      href:
        app.slug === "tinyblooms" || !app.comingSoon
          ? `/${app.slug}`
          : "/#apps",
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Journal", href: "/#journal" },
      { label: "Contact", href: "/#newsletter" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQs", href: "/#" },
      { label: "Privacy", href: "/#" },
      { label: "Terms", href: "/#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-[#fffcf6]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)] lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 text-xs text-muted">
            &copy; {new Date().getFullYear()} TinyBundle. All rights reserved.
          </p>
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-sm font-extrabold text-ink">{column.heading}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-amber-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-sm font-extrabold text-ink">Follow along</h3>
          <div className="mt-4 flex gap-2.5">
            <SocialLink label="Instagram">
              <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="16.6" cy="7.4" r="1.1" fill="currentColor" />
            </SocialLink>
            <SocialLink label="X">
              <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </SocialLink>
            <SocialLink label="Email">
              <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
              <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-cream text-ink/70 transition-colors hover:border-amber hover:text-amber-deep"
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
