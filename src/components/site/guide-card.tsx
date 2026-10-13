import Link from "next/link";
import type { CSSProperties } from "react";
import { APP_IDENTITY } from "@/components/app-identity";
import { guideTopic, readMinutes } from "@/lib/guides/catalog";
import type { GuidePage } from "@/lib/guides/types";

/**
 * A guide as a white card: topic, read time, title, summary. `featured` leads a hub: from 980px wide it becomes the
 * larger tinted card. Used by the hubs and every landing page's guides section.
 */
export function GuideCard({ guide, featured = false }: { guide: GuidePage; featured?: boolean }) {
  const colors = APP_IDENTITY[guide.app].colors;
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`flex min-w-0 flex-1 flex-col gap-2.5 rounded-[22px] bg-white p-6 text-tb-ink shadow-[0_2px_10px_rgba(90,60,20,0.06)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-tb-ink hover:shadow-[0_10px_26px_rgba(90,60,20,0.10)] active:scale-[0.99] ${
        featured ? "min-[980px]:bg-(--tile) min-[980px]:p-8 min-[980px]:shadow-none" : ""
      }`}
      style={featured ? ({ "--tile": colors.tile } as CSSProperties) : undefined}
    >
      <span className="flex items-center justify-between gap-2.5">
        <span className="text-[11px] font-extrabold uppercase tracking-[0.07em]" style={{ color: colors.deep }}>
          {guideTopic(guide)}
        </span>
        <span className="text-[12.5px] font-bold text-tb-muted">{readMinutes(guide)} min read</span>
      </span>
      <h3
        className={`m-0 text-balance text-[19px] font-extrabold leading-[1.25] ${
          featured ? "min-[980px]:max-w-[22ch] min-[980px]:text-[clamp(24px,2.6vw,30px)]" : ""
        }`}
      >
        {guide.title}
      </h3>
      <p className="m-0 max-w-[60ch] text-pretty text-[15px] leading-relaxed text-tb-body">{guide.description}</p>
      <span className="mt-auto pt-1.5 text-sm font-extrabold text-[#D17A2A]">Read the guide &rarr;</span>
    </Link>
  );
}
