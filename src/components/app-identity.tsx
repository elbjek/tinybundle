import { MealsMark } from "@/components/tinymeals/mark";
import { NapsMark } from "@/components/tinynaps/mark";
import { apps, type TinyApp } from "@/lib/apps";
import type { GuideApp } from "@/lib/guides/types";

type Colors = TinyApp["colors"];

const BUNDLE_COLORS: Colors = {
  dot: "#E2A03F",
  deep: "#2E2E2E",
  tile: "#F3EADF",
  iconBg: "#FFFFFF",
  btn: "#232F48",
  band: "#232F48",
};

/** Each app's name, page and colours, plus TinyBundle itself. Colours come from the one app config in `lib/apps`. */
export const APP_IDENTITY: Record<GuideApp, { name: string; href: string; colors: Colors }> = {
  tinybundle: { name: "TinyBundle", href: "/", colors: BUNDLE_COLORS },
  ...(Object.fromEntries(
    apps.map((app) => [app.slug, { name: app.name, href: `/${app.slug}`, colors: app.colors }]),
  ) as Record<TinyApp["slug"], { name: string; href: string; colors: Colors }>),
};

/** `size` sets pixel width and height for places that ignore CSS classes, such as generated share images. */
export function AppMark({ app, className, size }: { app: GuideApp; className?: string; size?: number }) {
  if (app === "tinynaps") return <NapsMark className={className} size={size} />;
  if (app === "tinymeals") return <MealsMark className={className} size={size} />;
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} aria-hidden="true">
      {app === "tinylayers" ? (
        <g>
          <path d="M11 43a21 21 0 0 1 42 0" stroke="#3D6DA8" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M21 43a11 11 0 0 1 22 0" stroke="#7FA8CF" strokeWidth="5.5" strokeLinecap="round" />
          <circle cx="32" cy="43" r="5" fill="#E2A03F" />
        </g>
      ) : null}
      {app === "tinyblooms" ? (
        <g>
          <path d="M32 52V31" stroke="#55915E" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M23 53h18" stroke="#55915E" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M31 37c-8 0-13-5-13-12 8 0 13 5 13 12Z" stroke="#55915E" strokeWidth="4.5" strokeLinejoin="round" />
          <path
            d="M33 31c0-8 5-13 12-13 0 8-5 13-12 13Z"
            stroke="#55915E"
            strokeWidth="4.5"
            strokeLinejoin="round"
            fill="#A9C9A4"
          />
        </g>
      ) : null}
      {/* Called directly so share images, which skip components inside an <svg>, still draw it. */}
      {app === "tinybundle" ? BundleQuads({}) : null}
    </svg>
  );
}

/** An app mark on its coloured tile, as in navs, hubs and app lists. TinyNaps' light moon needs its navy tile. */
export function AppTile({
  app,
  className,
  markClassName,
  bg,
}: {
  app: GuideApp;
  className: string;
  markClassName: string;
  /** Overrides the app's icon background, e.g. white tiles on a coloured card. */
  bg?: string;
}) {
  const colors = APP_IDENTITY[app].colors;
  return (
    <span
      className={`flex flex-none items-center justify-center ${className}`}
      style={{ background: app === "tinynaps" ? colors.iconBg : (bg ?? colors.iconBg) }}
    >
      <AppMark app={app} className={markClassName} />
    </span>
  );
}

/** The TinyBundle mark: four rounded quarters, one per app, around a warm dot. */
export function BundleQuads({ ring = "#FEF8F3" }: { ring?: string }) {
  const quarter = "M18 6H26a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V18A12 12 0 0 1 18 6Z";
  return (
    <g transform="rotate(-8 32 32)">
      <path d={quarter} fill="#55915E" />
      <path d={quarter} fill="#D17A2A" transform="matrix(-1 0 0 1 64 0)" />
      <path d={quarter} fill="#3D6DA8" transform="matrix(1 0 0 -1 0 64)" />
      <path d={quarter} fill="#232F48" transform="matrix(-1 0 0 -1 64 64)" />
      <circle cx="32" cy="32" r="7.5" fill="#E2A03F" stroke={ring} strokeWidth="3.5" />
    </g>
  );
}
