import Link from "next/link";

export type LegalSection = { id: string; title: string; paragraphs: string[] };

/** A TinyMeals legal document: title, date, contents list and numbered sections. */
export function MealsLegalPage({
  title,
  updated,
  intro,
  sections,
  related,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  related: { href: string; label: string };
}) {
  return (
    <article className="mx-auto w-full max-w-3xl px-[clamp(18px,4vw,40px)] pb-20 pt-[clamp(36px,6vw,72px)]">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.09em] text-meals-muted">Legal</p>
      <h1 className="mt-2.5 text-balance text-[clamp(34px,5vw,48px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
        {title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-meals-body">TinyMeals by Two Brick Labs. Last updated {updated}.</p>
      <p className="mt-3 text-pretty text-sm leading-relaxed text-meals-body">
        {intro} Read with the{" "}
        <Link href={related.href} className="font-extrabold text-meals-orange-deep hover:text-meals-orange">
          {related.label}
        </Link>
        .
      </p>

      <nav aria-label="On this page" className="mt-10 rounded-[22px] bg-white px-6 py-5 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-meals-muted">On this page</p>
        <ol className="mt-3 columns-1 gap-x-8 space-y-1.5 sm:columns-2">
          {sections.map((section) => (
            <li key={section.id} className="break-inside-avoid">
              <a href={`#${section.id}`} className="text-sm font-bold text-meals-body transition-colors hover:text-meals-orange-deep">
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-extrabold sm:text-2xl">{section.title}</h2>
            <div className="mt-3.5 space-y-3.5 text-[15px] leading-relaxed text-meals-body">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 60)} className="text-pretty">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
