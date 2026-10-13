import Link from "next/link";
import { BundleQuads } from "@/components/app-identity";
import { Backdrop } from "@/components/site/backdrop";
import { hubHref } from "@/lib/guides/hubs";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

/** A section: paragraphs, then an optional bullet list and paragraphs after it. */
export type LegalSection = { id: string; title: string; paragraphs: string[]; list?: string[]; afterList?: string[] };

export type LegalDoc = "privacy" | "terms";

const DOC_STYLE: Record<LegalDoc, { label: string; tile: string; deep: string }> = {
  privacy: { label: "Privacy", tile: "#E6E9F0", deep: "#232F48" },
  terms: { label: "Terms", tile: "#FBEEDC", deep: "#A0521A" },
};

/**
 * An app's privacy policy or terms in the legal page design: Privacy/Terms switch, a short-version summary, a sticky
 * numbered contents list from 900px wide, numbered sections and a contact card.
 */
export function LegalPage({
  app,
  base,
  doc,
  title,
  updated,
  intro,
  short,
  sections,
  email,
}: {
  /** App name, e.g. "TinyMeals". */
  app: string;
  /** Path the app's legal pages live under, e.g. "/tinymeals". */
  base: string;
  doc: LegalDoc;
  title: string;
  updated: string;
  intro: string;
  /** Three plain-English points that summarise the document. Each must be true to the full text below. */
  short: { h: string; p: string }[];
  sections: LegalSection[];
  /** Where questions about this document go. */
  email: string;
}) {
  const style = DOC_STYLE[doc];
  const path = `${base}/${doc}`;
  const url = absoluteUrl(path);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: `${title} | ${app}`,
        description: intro,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#site`, name: "TinyBundle", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "TinyBundle", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: app, item: absoluteUrl(base) },
          { "@type": "ListItem", position: 3, name: title, item: url },
        ],
      },
    ],
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Backdrop
        shapes={[
          { style: { top: "10%", right: -70, width: 220, height: 220, borderRadius: 60, background: "#F6D9A8", opacity: 0.4, transform: "rotate(14deg)" }, animation: "tm-float-a 9s ease-in-out infinite" },
          { style: { top: "62%", left: -130, width: 300, height: 300, borderRadius: 150, background: "#E6E9F0", opacity: 0.8 }, animation: "tm-float-b 10s ease-in-out infinite" },
        ]}
      />

      <header className="sticky top-0 z-20 bg-[rgba(254,248,243,0.92)] backdrop-blur-[10px]">
        <div className="mx-auto box-border flex max-w-[1180px] items-center gap-[clamp(10px,2vw,24px)] px-[clamp(16px,4vw,40px)] py-2.5">
          <Link href="/" className="flex flex-none items-center gap-2 text-tb-ink hover:text-tb-ink">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <BundleQuads />
            </svg>
            <span className="text-[17px] font-extrabold">TinyBundle</span>
          </Link>
          <div className="flex-1" />
          <nav aria-label="Legal" className="flex gap-1 rounded-[22px] bg-white p-1 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
            {(["privacy", "terms"] as const).map((key) => {
              const on = key === doc;
              return (
                <Link
                  key={key}
                  href={`${base}/${key}`}
                  aria-current={on ? "page" : undefined}
                  className={`flex h-9 items-center rounded-[18px] px-4 text-[13.5px] font-extrabold ${
                    on ? "bg-[#232F48] text-white hover:text-white" : "text-tb-body hover:text-tb-ink"
                  }`}
                >
                  {DOC_STYLE[key].label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(32px,5vw,64px)]">
        <div className="max-w-[760px]">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">{app} &middot; Legal</p>
          <h1 className="mt-2.5 text-balance text-[clamp(34px,5vw,52px)] font-extrabold leading-[1.06] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-4 text-sm font-bold text-tb-body">Last updated {updated}</p>
          <p className="mt-4 max-w-[60ch] text-pretty text-[17px] leading-[1.65] text-tb-body">{intro}</p>
        </div>

        <section
          aria-labelledby="short-h"
          className="mt-[clamp(28px,4vw,40px)] rounded-[26px] p-[clamp(22px,3vw,32px)]"
          style={{ background: style.tile }}
        >
          <h2 id="short-h" className="m-0 text-[13px] font-extrabold uppercase tracking-[0.08em]" style={{ color: style.deep }}>
            The short version
          </h2>
          <ul className="m-0 mt-4 grid list-none gap-3 p-0 min-[760px]:grid-cols-3">
            {short.map((item) => (
              <li key={item.h} className="min-w-0 rounded-[18px] bg-white px-5 py-[18px] shadow-[0_2px_10px_rgba(90,60,20,0.05)]">
                <p className="text-[16.5px] font-extrabold leading-[1.3]">{item.h}</p>
                <p className="mt-[5px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{item.p}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-[clamp(40px,5vw,64px)] grid items-start gap-[clamp(28px,5vw,64px)] min-[900px]:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="On this page" className="sticky top-[84px] hidden min-[900px]:block">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">On this page</p>
            <ol className="m-0 mt-3 flex list-none flex-col gap-0.5 p-0">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="flex gap-2.5 py-[7px] text-sm font-bold leading-[1.35] text-tb-body hover:text-tb-ink">
                    <span className="w-5 flex-none tabular-nums text-tb-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="flex min-w-0 max-w-[720px] flex-col gap-[clamp(32px,4vw,44px)]">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-[90px]">
                <h2 className="m-0 flex items-baseline gap-3 text-balance text-[clamp(22px,2.6vw,27px)] font-extrabold leading-[1.2]">
                  <span className="text-sm font-extrabold tabular-nums" style={{ color: style.deep }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{section.title}</span>
                </h2>
                <div className="mt-3 flex flex-col gap-3 text-base leading-[1.7] text-[#4A4339]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 60)} className="m-0 text-pretty">
                      {paragraph}
                    </p>
                  ))}
                  {section.list ? (
                    <ul className="m-0 flex list-disc flex-col gap-2 pl-5">
                      {section.list.map((item) => (
                        <li key={item.slice(0, 60)} className="pl-1 text-pretty leading-[1.65]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.afterList?.map((paragraph) => (
                    <p key={paragraph.slice(0, 60)} className="m-0 text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 rounded-[22px] bg-white px-6 py-[22px] shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
              <div className="min-w-0">
                <p className="text-[16.5px] font-extrabold">Questions about this page?</p>
                <p className="mt-[3px] text-[14.5px] text-tb-body">A real person reads every email.</p>
              </div>
              <a
                href={`mailto:${email}`}
                className="flex h-[46px] items-center rounded-2xl bg-[#232F48] px-5 text-[15px] font-extrabold text-white hover:bg-[#1A2337] hover:text-white active:scale-[0.97]"
              >
                {email}
              </a>
            </div>
          </article>
        </div>
      </main>

      <footer className="mt-[clamp(56px,7vw,88px)]">
        <div className="mx-auto box-border flex max-w-[1180px] flex-wrap items-center justify-between gap-x-8 gap-y-[18px] px-[clamp(18px,4vw,40px)] pb-11 pt-8">
          <p className="text-[13px] text-tb-muted">&copy; 2026 Two Brick Labs</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-[22px] gap-y-2.5">
            <Link href="/" className="text-sm font-bold text-tb-body hover:text-tb-ink">
              All apps
            </Link>
            <Link href={hubHref("tinybundle")} className="text-sm font-bold text-tb-body hover:text-tb-ink">
              Guides
            </Link>
            <Link href={`${base}/privacy`} className="text-sm font-bold text-tb-body hover:text-tb-ink">
              Privacy
            </Link>
            <Link href={`${base}/terms`} className="text-sm font-bold text-tb-body hover:text-tb-ink">
              Terms
            </Link>
            <a href={`mailto:${email}`} className="text-sm font-bold text-tb-body hover:text-tb-ink">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
