import { appCta, type TinyApp } from "@/lib/apps";

/**
 * The white button on a dark call-to-action band. Live apps link to the App Store and, on screens 720px and wider,
 * show a QR code to scan with a phone. Apps not out yet link to the launch list instead.
 *
 * ponytail: each QR is a static file in /public/qr/<slug>.svg. When an app goes live, generate its file with
 * `npx qrcode -t svg -d 2E2E2E -l FFFFFF -o public/qr/<slug>.svg <App Store URL>`.
 */
export function AppStoreCta({
  app,
  waitlistHref,
  liveLabel,
}: {
  app: TinyApp;
  /** Where "Tell me when it launches" goes before the app is live. */
  waitlistHref: string;
  /** Overrides "Get <App> on the App Store". */
  liveLabel?: string;
}) {
  const cta = appCta(app, waitlistHref);
  const button = (
    <a
      href={cta.href}
      rel={cta.live ? "noopener" : undefined}
      className="inline-flex h-[54px] items-center rounded-[18px] bg-white px-6 text-base font-extrabold hover:brightness-[0.96] active:scale-[0.97]"
      style={{ color: app.colors.deep }}
    >
      {cta.live ? (liveLabel ?? cta.label) : cta.label}
    </a>
  );
  if (!cta.live) return <div className="relative">{button}</div>;
  return (
    <div className="relative flex min-w-0 items-center gap-4">
      <a
        href={cta.href}
        rel="noopener"
        aria-label={`Get ${app.name} on the App Store`}
        className="hidden h-28 w-28 flex-none rounded-[18px] bg-white p-[11px] min-[720px]:block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- a tiny static SVG needs no optimisation */}
        <img src={`/qr/${app.slug}.svg`} alt={`QR code: ${app.name} on the App Store`} className="block h-full w-full" />
      </a>
      <div className="flex flex-col items-start gap-2.5">
        <p className="hidden text-[13px] font-bold text-white min-[720px]:block">Scan with your iPhone camera, or</p>
        {button}
      </div>
    </div>
  );
}
