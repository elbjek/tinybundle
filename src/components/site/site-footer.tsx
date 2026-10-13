import Link from "next/link";
import { AppTile } from "@/components/app-identity";
import { apps, CONTACT_EMAIL, type AppSlug } from "@/lib/apps";
import { COOKIE_SETTINGS_HREF } from "@/lib/consent";
import { hubHref } from "@/lib/guides/hubs";

type FooterLink = { href: string; label: string };

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-[9px]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-tb-muted">{title}</p>
      {links.map((link) =>
        link.href.startsWith("mailto:") || link.href.startsWith("#") ? (
          <a key={link.label} href={link.href} className="text-sm font-bold text-tb-body hover:text-tb-ink">
            {link.label}
          </a>
        ) : (
          <Link key={link.label} href={link.href} className="text-sm font-bold text-tb-body hover:text-tb-ink">
            {link.label}
          </Link>
        ),
      )}
    </div>
  );
}

/**
 * The footer on every app landing page: the app, an optional Product column, Our apps (the other three plus all apps),
 * Reading (this app's guides and all guides) and Support.
 */
export function SiteFooter({
  app,
  product,
  note,
}: {
  app: AppSlug;
  /** In-page links, e.g. How it works and FAQ. */
  product?: FooterLink[];
  /** Small print under the columns. */
  note: string;
}) {
  const current = apps.find((a) => a.slug === app);
  return (
    <footer className="mt-[clamp(24px,4vw,48px)]">
      <div className="mx-auto box-border flex max-w-[1180px] flex-wrap items-start justify-between gap-6 px-[clamp(18px,4vw,40px)] pb-12 pt-9">
        <div className="min-w-0 flex-[1_1_320px]">
          <div className="flex items-center gap-2.5">
            <AppTile app={app} className="h-8 w-8 rounded-[10px]" markClassName="h-6 w-6" bg="transparent" />
            <span className="text-base font-extrabold">{current?.name}</span>
          </div>
          <p className="mt-3 max-w-[46ch] text-pretty text-sm leading-relaxed text-tb-body">
            Part of{" "}
            <Link href="/" className="font-extrabold text-tb-ink">
              TinyBundle
            </Link>
            : four calm apps for the early years, from what to wear to what&rsquo;s for lunch.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-7">
          {product ? <Column title="Product" links={product} /> : null}
          <Column
            title="Our apps"
            links={[
              ...apps.filter((a) => a.slug !== app).map((a) => ({ href: `/${a.slug}`, label: a.name })),
              { href: "/", label: "All apps" },
            ]}
          />
          <Column
            title="Reading"
            links={[
              { href: hubHref(app), label: `${current?.name} guides` },
              { href: hubHref("tinybundle"), label: "All guides" },
            ]}
          />
          <Column
            title="Support"
            links={[
              { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" },
              { href: COOKIE_SETTINGS_HREF, label: "Cookie settings" },
            ]}
          />
        </nav>
      </div>
      <p className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pb-10 text-[12.5px] font-bold text-tb-muted">
        {note}
      </p>
    </footer>
  );
}
