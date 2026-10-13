import Link from "next/link";
import type { ReactNode } from "react";
import { APP_IDENTITY } from "@/components/app-identity";
import { GuideCard } from "@/components/site/guide-card";
import { getGuide, getGuidesByApp } from "@/lib/guides/catalog";
import { hubHref } from "@/lib/guides/hubs";
import type { GuideApp } from "@/lib/guides/types";

/**
 * A landing page's guides section: a heading, three guide cards and a link to the app's hub. One column on phones,
 * three from 768px, so a card is never left alone on a row.
 */
export function GuidesTeaser({
  app,
  eyebrow,
  heading,
  slugs,
  className = "",
  children,
}: {
  app: GuideApp;
  eyebrow: string;
  heading: string;
  /** Three guides to show. Defaults to the app's first three. */
  slugs?: [string, string, string];
  /** Section background or spacing overrides. */
  className?: string;
  /** Shown under the cards, e.g. a sources note. */
  children?: ReactNode;
}) {
  const identity = APP_IDENTITY[app];
  const guides = (slugs ? slugs.map((s) => getGuide(s)) : getGuidesByApp(app).slice(0, 3)).filter(
    (g) => g !== undefined,
  );
  return (
    <section id="guides" aria-labelledby="guides-h" className={`scroll-mt-16 ${className}`}>
      <div className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(48px,7vw,88px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3.5">
          <div className="min-w-0 flex-[1_1_min(100%,460px)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">{eyebrow}</p>
            <h2
              id="guides-h"
              className="mt-2.5 max-w-[22ch] text-balance text-[clamp(28px,3.4vw,40px)] font-extrabold leading-[1.14]"
            >
              {heading}
            </h2>
          </div>
          <Link
            href={hubHref(app)}
            className="text-[15px] font-extrabold hover:opacity-80"
            style={{ color: identity.colors.deep }}
          >
            {`All ${identity.name} guides →`}
          </Link>
        </div>
        <ul className="mt-6 grid list-none gap-3.5 p-0 md:grid-cols-3">
          {guides.map((guide) => (
            <li key={guide.slug} className="flex min-w-0">
              <GuideCard guide={guide} />
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}
