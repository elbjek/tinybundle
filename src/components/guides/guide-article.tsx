import Link from "next/link";
import { APP_IDENTITY, AppTile } from "@/components/app-identity";
import { FaqList } from "@/components/site/faq";
import { getRelatedLink, guideTopic, readMinutes } from "@/lib/guides/catalog";
import type { GuidePage } from "@/lib/guides/types";

/** A guide in the hub design: app eyebrow, quick answer card, sections, sources, FAQ, app band and related reads. */
export function GuideArticle({ guide }: { guide: GuidePage }) {
  const identity = APP_IDENTITY[guide.app];
  const colors = identity.colors;
  const related = guide.relatedSlugs
    .map((slug) => getRelatedLink(slug))
    .filter((link) => link !== undefined)
    .slice(0, 6);

  return (
    <article className="mx-auto w-full max-w-[720px]">
      <header>
        <div className="flex items-center gap-3">
          <AppTile app={guide.app} className="h-[52px] w-[52px] rounded-[18px]" markClassName="h-8 w-8" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.09em]" style={{ color: colors.deep }}>
            {identity.name} guide &middot; {guideTopic(guide)}
          </span>
        </div>
        <h1 className="mt-4 text-balance text-[clamp(32px,4.4vw,48px)] font-extrabold leading-[1.08]">{guide.title}</h1>
        <p className="mt-3.5 text-[13.5px] font-bold text-tb-muted">
          <time dateTime={guide.modifiedAt}>Reviewed {formatDate(guide.modifiedAt)}</time>
          <span aria-hidden="true"> &middot; </span>
          {readMinutes(guide)} min read
        </p>
      </header>

      <div className="mt-8 rounded-[22px] p-[clamp(22px,3vw,28px)]" style={{ background: colors.tile }}>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.09em]" style={{ color: colors.deep }}>
          Quick answer
        </p>
        <p className="mt-2 text-pretty text-[17px] font-semibold leading-relaxed">{guide.quickAnswer}</p>
        {guide.bullets.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {guide.bullets.map((item) => (
              <li key={item} className="flex gap-2.5 text-[15px] font-semibold text-tb-body">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: colors.dot }} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-10 space-y-9">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-balance text-[clamp(22px,2.6vw,27px)] font-extrabold leading-[1.2]">{section.heading}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-pretty text-[16.5px] leading-[1.7] text-tb-body">
                {p}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-3 space-y-2 text-[16.5px] leading-[1.7] text-tb-body">
                {section.list.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: colors.dot }} aria-hidden="true" />
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
          aria-labelledby="guide-sources"
          className="mt-12 rounded-[22px] bg-white p-[clamp(22px,3vw,28px)] shadow-[0_2px_10px_rgba(90,60,20,0.06)]"
        >
          <h2 id="guide-sources" className="text-xl font-extrabold">
            Sources
          </h2>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-tb-body">
            We check this guide against these sources. It is general information, not medical advice: speak to your
            health visitor, GP or paediatrician about your own baby.
          </p>
          <ol className="mt-4 space-y-2.5">
            {guide.sources.map((source) => (
              <li key={source.url} className="text-sm leading-relaxed text-tb-body">
                <span className="font-extrabold text-tb-ink">{source.org}:</span>{" "}
                <a href={source.url} rel="noopener" className="font-bold hover:opacity-80" style={{ color: colors.deep }}>
                  {source.title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {guide.faqs.length > 0 ? (
        <section aria-labelledby="guide-faq" className="mt-12">
          <h2 id="guide-faq" className="text-[clamp(22px,2.6vw,27px)] font-extrabold leading-[1.2]">
            Questions parents ask
          </h2>
          <FaqList faqs={guide.faqs} accent={colors.deep} className="mt-5" />
        </section>
      ) : null}

      <aside
        className="relative mt-12 overflow-hidden rounded-[28px] p-[clamp(26px,4vw,40px)] text-white"
        style={{ background: colors.band }}
      >
        <div aria-hidden="true" className="absolute -top-[50px] right-[18%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-white opacity-[0.08]" />
        <div aria-hidden="true" className="absolute -bottom-20 -right-10 h-[200px] w-[200px] rounded-full bg-black opacity-10" />
        <p className="relative max-w-[40ch] text-pretty text-[clamp(20px,2.4vw,24px)] font-extrabold leading-[1.25]">
          {guide.ctaBlurb}
        </p>
        <Link
          href={guide.ctaHref}
          className="relative mt-5 inline-flex h-[52px] items-center rounded-[18px] bg-white px-[22px] text-[15.5px] font-extrabold hover:brightness-[0.96] active:scale-[0.97]"
          style={{ color: colors.deep }}
        >
          {guide.ctaLabel}
        </Link>
      </aside>

      {related.length > 0 ? (
        <section aria-labelledby="related-guides" className="mt-12">
          <h2 id="related-guides" className="text-xl font-extrabold">
            Related questions parents ask
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between gap-4 rounded-[18px] bg-white px-5 py-4 text-[15px] font-extrabold text-tb-ink shadow-[0_2px_10px_rgba(90,60,20,0.06)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:text-tb-ink hover:shadow-[0_10px_26px_rgba(90,60,20,0.10)]"
                >
                  <span className="text-pretty">{item.label}</span>
                  <span aria-hidden="true" style={{ color: colors.deep }}>
                    &rarr;
                  </span>
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
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
