import Link from "next/link";
import type { GuidePage } from "@/lib/guides/types";
import { APP_IDENTITY, AppMark } from "@/components/guides/app-identity";
import { getRelatedLink } from "@/lib/guides/catalog";

/** Class names per look: the shared TinyBundle guides, or TinyMeals guides in the TinyMeals design. */
const THEMES = {
  bundle: {
    kicker: "",
    title: "text-tb-ink",
    meta: "text-tb-muted",
    quickBox: "rounded-[26px]",
    quickText: "text-tb-ink",
    bulletText: "text-tb-body",
    bullet: "bg-tb-amber",
    heading: "text-tb-ink",
    body: "text-tb-body",
    divider: "border-tb-border",
    faq: "rounded-[20px] bg-white shadow-[0_2px_10px_rgba(90,60,20,0.06)]",
    cta: "rounded-[28px] bg-[#232F48] text-white",
    ctaButton: "rounded-[19px] bg-tb-amber text-[#232F48] hover:brightness-95",
    link: "text-tb-amber-ink hover:text-tb-ink",
  },
  meals: {
    kicker: "text-meals-orange-deep",
    title: "text-meals-ink",
    meta: "text-meals-muted",
    quickBox: "rounded-[22px] bg-meals-sage-tint",
    quickText: "text-meals-ink",
    bulletText: "text-meals-sage-ink",
    bullet: "bg-meals-sage",
    heading: "text-meals-ink",
    body: "text-meals-body",
    divider: "border-meals-border",
    faq: "rounded-[20px] bg-white shadow-[0_2px_10px_rgba(90,60,20,0.06)]",
    cta: "rounded-[28px] bg-meals-sage text-white",
    ctaButton:
      "rounded-[18px] bg-white text-meals-sage-ink hover:text-meals-ink",
    link: "text-meals-orange-deep hover:text-meals-orange",
  },
} as const;

export type GuideTheme = keyof typeof THEMES;

export function GuideArticle({
  guide,
  theme = "bundle",
}: {
  guide: GuidePage;
  theme?: GuideTheme;
}) {
  const identity = APP_IDENTITY[guide.app];
  // TinyBundle guides take their app's colour for the kicker and quick answer.
  const t =
    theme === "bundle"
      ? {
          ...THEMES.bundle,
          kicker: identity.ink,
          quickBox: `${THEMES.bundle.quickBox} ${identity.soft}`,
        }
      : THEMES[theme];
  const related = guide.relatedSlugs
    .map((slug) => getRelatedLink(slug))
    .filter((link) => link !== undefined)
    .slice(0, 6);

  return (
    <article className="mx-auto w-full max-w-[720px]">
      <header>
        <p
          className={`flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.12em] ${t.kicker}`}
        >
          <span
            className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl ${identity.tile}`}
          >
            <AppMark app={guide.app} className="h-6 w-6" />
          </span>
          {identity.name} guide
        </p>
        <h1
          className={`mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl ${t.title}`}
        >
          {guide.title}
        </h1>
        <p className={`mt-3 text-sm font-semibold ${t.meta}`}>
          <time dateTime={guide.modifiedAt}>
            Reviewed {formatDate(guide.modifiedAt)}
          </time>
        </p>
      </header>

      <div className={`mt-8 px-5 py-5 ${t.quickBox}`}>
        <p
          className={`text-[11px] font-extrabold uppercase tracking-[0.14em] ${t.kicker}`}
        >
          Quick answer
        </p>
        <p
          className={`mt-2 text-base font-medium leading-relaxed ${t.quickText}`}
        >
          {guide.quickAnswer}
        </p>
        {guide.bullets.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {guide.bullets.map((item) => (
              <li
                key={item}
                className={`flex gap-2 text-sm font-medium ${t.bulletText}`}
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.bullet}`}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-8 space-y-8">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className={`text-xl font-extrabold ${t.heading}`}>
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className={`mt-3 text-base font-medium leading-relaxed ${t.body}`}
              >
                {p}
              </p>
            ))}
            {section.list ? (
              <ul
                className={`mt-3 space-y-2 text-base font-medium leading-relaxed ${t.body}`}
              >
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${t.bullet}`}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      {guide.sources.length > 0 ? (
        <section
          className={`mt-12 border-t pt-8 ${t.divider}`}
          aria-labelledby="guide-sources"
        >
          <h2
            id="guide-sources"
            className={`text-xl font-extrabold ${t.heading}`}
          >
            Sources
          </h2>
          <p className={`mt-2 text-sm font-medium leading-relaxed ${t.body}`}>
            We check this guide against these sources. It is general
            information, not medical advice: speak to your health visitor, GP or
            paediatrician about your own baby.
          </p>
          <ol className="mt-4 space-y-2.5">
            {guide.sources.map((source) => (
              <li
                key={source.url}
                className={`text-sm font-medium leading-relaxed ${t.body}`}
              >
                <span className={`font-extrabold ${t.heading}`}>
                  {source.org}:
                </span>{" "}
                <a
                  href={source.url}
                  rel="noopener"
                  className={`font-bold ${t.link}`}
                >
                  {source.title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {guide.faqs.length > 0 ? (
        <section
          className={`mt-12 border-t pt-8 ${t.divider}`}
          aria-labelledby="guide-faq"
        >
          <h2 id="guide-faq" className={`text-xl font-extrabold ${t.heading}`}>
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-3">
            {guide.faqs.map((item) => (
              <details key={item.q} className={`group px-5 py-4 ${t.faq}`}>
                <summary
                  className={`cursor-pointer list-none text-sm font-extrabold marker:content-none [&::-webkit-details-marker]:hidden ${t.heading}`}
                >
                  {item.q}
                </summary>
                <p
                  className={`mt-3 text-sm font-medium leading-relaxed ${t.body}`}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      <aside className={`mt-10 px-6 py-7 ${t.cta}`}>
        <p className="text-lg font-extrabold">{guide.ctaBlurb}</p>
        <Link
          href={guide.ctaHref}
          className={`mt-5 inline-flex px-5 py-2.5 text-sm font-extrabold transition-colors ${t.ctaButton}`}
        >
          {guide.ctaLabel}
        </Link>
      </aside>

      {related.length > 0 ? (
        <section
          className={`mt-12 border-t pt-8 ${t.divider}`}
          aria-labelledby="related-guides"
        >
          <h2
            id="related-guides"
            className={`text-lg font-extrabold ${t.heading}`}
          >
            Related questions parents ask
          </h2>
          <ul className="mt-4 space-y-3">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm font-bold ${t.link}`}
                >
                  {item.label}
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
