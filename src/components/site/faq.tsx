import { CONTACT_EMAIL } from "@/lib/apps";

export type FaqItem = { q: string; a: string };

/**
 * The FAQ every landing page uses. Server-rendered `<details>` so every answer is in the HTML for search engines and
 * works without JavaScript. The page adds its own FAQPage structured data.
 */
export function Faq({ faqs, accent = "#D17A2A" }: { faqs: FaqItem[]; accent?: string }) {
  return (
    <section id="faq" className="scroll-mt-16 py-[clamp(64px,8vw,104px)]">
      <div className="mx-auto box-border max-w-[840px] px-[clamp(18px,4vw,40px)]">
        <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">FAQ</p>
        <h2 className="mt-2.5 text-balance text-center text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1]">
          Questions parents ask
        </h2>
        <p className="mx-auto mt-3 max-w-[44ch] text-pretty text-center text-base leading-relaxed text-tb-body">
          Can&rsquo;t find yours?{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-extrabold" style={{ color: accent }}>
            Email us
          </a>{" "}
          and a real person will reply.
        </p>
        <FaqList faqs={faqs} accent={accent} className="mt-7" />
      </div>
    </section>
  );
}

/** The question cards on their own, for pages that bring their own heading. */
export function FaqList({ faqs, accent, className = "" }: { faqs: FaqItem[]; accent: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      {faqs.map((f, i) => (
        <details
          key={f.q}
          open={i === 0}
          className="group rounded-[20px] bg-white px-[22px] py-[18px] shadow-[0_2px_10px_rgba(90,60,20,0.06)] transition-shadow hover:shadow-[0_6px_18px_rgba(90,60,20,0.09)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
            <h3 className="m-0 text-pretty text-base font-extrabold leading-[1.4]">{f.q}</h3>
            <span aria-hidden="true" className="flex-none text-xl font-bold leading-none" style={{ color: accent }}>
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>
          <p className="mt-2.5 max-w-[64ch] text-pretty text-[14.5px] leading-[1.65] text-tb-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** FAQPage structured data for a list of questions. */
export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
