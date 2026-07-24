import Link from "next/link";
import type { GuidePage } from "@/lib/guides/types";
import { getGuide } from "@/lib/guides/catalog";

const appNames: Record<GuidePage["ctaApp"], string> = {
  tinylayers: "TinyLayers",
  tinyblooms: "TinyBlooms",
  tinyhaven: "TinyHaven",
  tinymeals: "TinyMeals",
  tinybundle: "TinyBundle",
};

export function GuideArticle({ guide }: { guide: GuidePage }) {
  const related = guide.relatedSlugs
    .map((slug) => getGuide(slug))
    .filter((g): g is GuidePage => Boolean(g))
    .slice(0, 6);

  return (
    <article className="mx-auto w-full max-w-[720px]">
      <header>
        <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-deep">
          {appNames[guide.app]} guide
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {guide.title}
        </h1>
        <p className="mt-3 text-sm font-semibold text-muted">
          <time dateTime={guide.modifiedAt}>Updated {formatDate(guide.modifiedAt)}</time>
        </p>
      </header>

      <div className="mt-8 rounded-2xl border border-line bg-blush px-5 py-5">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-amber-deep">
          Quick answer
        </p>
        <p className="mt-2 text-base font-medium leading-relaxed text-ink">{guide.quickAnswer}</p>
        {guide.bullets.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {guide.bullets.map((item) => (
              <li key={item} className="flex gap-2 text-sm font-medium text-ink/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-8 space-y-8">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-extrabold text-ink">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-base font-medium leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {guide.faqs.length > 0 ? (
        <section className="mt-12 border-t border-line pt-8" aria-labelledby="guide-faq">
          <h2 id="guide-faq" className="text-xl font-extrabold text-ink">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3">
            {guide.faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-line bg-cream px-5 py-4"
              >
                <summary className="cursor-pointer list-none text-sm font-extrabold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm font-medium leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <aside className="mt-10 rounded-2xl bg-navy px-6 py-7 text-cream">
        <p className="text-lg font-extrabold">{guide.ctaBlurb}</p>
        <Link
          href={guide.ctaHref}
          className="mt-5 inline-flex rounded-full bg-amber px-5 py-2.5 text-sm font-extrabold text-navy transition-colors hover:bg-butter"
        >
          {guide.ctaLabel}
        </Link>
      </aside>

      {related.length > 0 ? (
        <section className="mt-12 border-t border-line pt-8" aria-labelledby="related-guides">
          <h2 id="related-guides" className="text-lg font-extrabold text-ink">
            Related questions parents ask
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/guides/${item.slug}`}
                  className="text-sm font-bold text-amber-deep hover:underline"
                >
                  {item.question}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
