import Link from "next/link";
import { APP_IDENTITY, AppTile } from "@/components/app-identity";
import { GuidesBackdrop, GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { AppStoreCta } from "@/components/site/app-store-cta";
import { GuideCard } from "@/components/site/guide-card";
import { appCta, getApp } from "@/lib/apps";
import { getGuidesByApp } from "@/lib/guides/catalog";
import { GUIDE_HUBS, HUB_ORDER, hubHref } from "@/lib/guides/hubs";
import type { GuideApp } from "@/lib/guides/types";

const WAITLIST = "/#join";

/** Sends old /guides#tinymeals and /guides#hub-tinymeals links to the matching hub. */
const HASH_REDIRECT = `(function(){var h=location.hash.replace(/^#(hub-)?/,"");if(${JSON.stringify(
  HUB_ORDER.filter((a) => a !== "tinybundle"),
)}.indexOf(h)>-1)location.replace("/guides/"+h)})()`;

/**
 * Grid placement so every row is full. Three columns from 980px: the first card spans two unless the count already
 * fills every row, and the last card also spans two when one cell would be left over. Two columns from 640px: an odd
 * last card spans both.
 */
function placement(index: number, count: number) {
  const featured = index === 0 && count % 3 !== 0;
  const last = index === count - 1 && count > 1;
  const wideLast = last && count % 3 === 1;
  const oddLast = last && count % 2 === 1;
  return {
    featured,
    className: [
      oddLast ? "min-[640px]:col-span-2" : "",
      featured || wideLast ? "min-[980px]:col-span-2" : oddLast ? "min-[980px]:col-span-1" : "",
    ].join(" "),
  };
}

export function GuideHubPage({ app }: { app: GuideApp }) {
  const hub = GUIDE_HUBS[app];
  const identity = APP_IDENTITY[app];
  const colors = identity.colors;
  const guides = getGuidesByApp(app);
  const tinyApp = app === "tinybundle" ? undefined : getApp(app);
  const cta = tinyApp ? appCta(tinyApp, WAITLIST) : { href: "/#apps", label: "Explore the apps", live: false };

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-tb font-nunito text-tb-ink antialiased">
      {app === "tinybundle" ? <script dangerouslySetInnerHTML={{ __html: HASH_REDIRECT }} /> : null}
      <GuidesBackdrop app={app} />
      <GuidesHeader />

      <main>
        <section className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(28px,4vw,48px)]">
          <nav aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[13.5px] font-bold text-tb-muted">
              <li>
                <Link href={hubHref("tinybundle")} className="text-tb-muted hover:text-tb-ink">
                  Guides
                </Link>
              </li>
              <li aria-hidden="true" className="text-[#C9BFAE]">
                &rsaquo;
              </li>
              <li aria-current="page" className="text-tb-ink">
                {identity.name}
              </li>
            </ol>
          </nav>
          <div className="mt-[clamp(28px,4vw,44px)] flex items-center gap-3">
            <AppTile app={app} className="h-[52px] w-[52px] rounded-[18px]" markClassName="h-8 w-8" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.09em]" style={{ color: colors.deep }}>
              {hub.eyebrow}
            </span>
          </div>
          <h1 className="mt-4 max-w-[18ch] text-balance text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.06]">{hub.h1}</h1>
          <p className="mt-4 max-w-[56ch] text-pretty text-[clamp(16px,1.5vw,18px)] leading-[1.6] text-tb-body">{hub.intro}</p>
          <div className="mt-[26px] flex flex-wrap items-center gap-3">
            {tinyApp && !cta.live ? (
              <Link
                href={`/${app}`}
                className="inline-flex h-[52px] items-center gap-2 rounded-[18px] px-[22px] text-[15.5px] font-extrabold text-white hover:text-white hover:brightness-[0.92] active:scale-[0.97]"
                style={{ background: colors.btn }}
              >
                <span>{`Check out ${identity.name}`}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : null}
            <a
              href={cta.href}
              rel={cta.live ? "noopener" : undefined}
              className={`inline-flex h-[52px] items-center rounded-[18px] px-[22px] text-[15.5px] font-extrabold active:scale-[0.97] ${
                cta.live || !tinyApp
                  ? "text-white hover:text-white hover:brightness-[0.92]"
                  : "bg-white shadow-[0_2px_10px_rgba(90,60,20,0.08)] hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)]"
              }`}
              style={cta.live || !tinyApp ? { background: colors.btn } : { color: colors.deep }}
            >
              {cta.label}
            </a>
            {tinyApp && cta.live ? (
              <Link
                href={`/${app}`}
                className="inline-flex h-[52px] items-center gap-2 rounded-[18px] bg-white px-5 text-[15.5px] font-extrabold shadow-[0_2px_10px_rgba(90,60,20,0.08)] hover:shadow-[0_6px_18px_rgba(90,60,20,0.12)] active:scale-[0.98]"
                style={{ color: colors.deep }}
              >
                <span>{`Check out ${identity.name}`}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ) : null}
          </div>
        </section>

        <section aria-labelledby="list-h" className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(48px,6vw,72px)]">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3.5">
            <h2 id="list-h" className="m-0 text-[13px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">
              {guides.length} {identity.name} guides
            </h2>
            <nav aria-label="Guides by app" className="flex flex-wrap gap-2">
              {HUB_ORDER.map((other) => {
                const on = other === app;
                const o = APP_IDENTITY[other];
                return (
                  <Link
                    key={other}
                    href={hubHref(other)}
                    aria-current={on ? "page" : undefined}
                    className={`box-border flex h-10 items-center gap-2 rounded-[20px] pl-3 pr-[15px] text-[13.5px] font-extrabold text-tb-ink hover:text-tb-ink hover:shadow-[0_6px_16px_rgba(90,60,20,0.10)] active:scale-[0.97] ${
                      on ? "shadow-[0_4px_14px_rgba(90,60,20,0.10)]" : "bg-white shadow-[0_2px_10px_rgba(90,60,20,0.06)]"
                    }`}
                    style={on ? { background: o.colors.tile } : undefined}
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: o.colors.dot }} />
                    {o.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <ul className="mt-[22px] grid list-none gap-3.5 p-0 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
            {guides.map((guide, i) => {
              const place = placement(i, guides.length);
              return (
                <li key={guide.slug} className={`flex min-w-0 motion-safe:[animation:tm-rise_.4s_ease_both] ${place.className}`}>
                  <GuideCard guide={guide} featured={place.featured} />
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="more-h" className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(56px,7vw,88px)]">
          <h2 id="more-h" className="m-0 text-balance text-[clamp(24px,3vw,32px)] font-extrabold leading-[1.15]">
            More guides from the family
          </h2>
          <ul className="mt-[22px] grid list-none gap-3.5 p-0 min-[540px]:grid-cols-2 min-[980px]:grid-cols-4">
            {HUB_ORDER.filter((other) => other !== app).map((other) => {
              const o = APP_IDENTITY[other];
              return (
                <li key={other} className="flex min-w-0">
                  <Link
                    href={hubHref(other)}
                    className="box-border flex min-w-0 flex-1 flex-col gap-3 rounded-[22px] p-[22px] text-tb-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:text-tb-ink hover:shadow-[0_10px_26px_rgba(90,60,20,0.10)] active:scale-[0.99]"
                    style={{ background: o.colors.tile }}
                  >
                    <AppTile app={other} className="h-[46px] w-[46px] rounded-2xl" markClassName="h-7 w-7" bg="#FFFFFF" />
                    <span className="flex flex-col gap-1">
                      <span className="text-[11px] font-extrabold uppercase tracking-[0.08em]" style={{ color: o.colors.deep }}>
                        {o.name}
                      </span>
                      <span className="text-balance text-lg font-extrabold leading-[1.25]">{GUIDE_HUBS[other].h1}</span>
                    </span>
                    <span className="mt-auto pt-1 text-sm font-extrabold" style={{ color: o.colors.deep }}>
                      {`${getGuidesByApp(other).length} guides →`}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)] pt-[clamp(56px,7vw,88px)]">
          <div
            className="relative box-border flex flex-wrap items-center gap-x-[clamp(24px,5vw,64px)] gap-y-6 overflow-hidden rounded-[28px] p-[clamp(28px,4vw,48px)]"
            style={{ background: colors.band }}
          >
            <div aria-hidden="true" className="absolute -top-[50px] right-[22%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-white opacity-[0.08]" />
            <div aria-hidden="true" className="absolute -bottom-20 -right-10 h-[200px] w-[200px] rounded-full bg-black opacity-10" />
            <div aria-hidden="true" className="absolute right-[40%] top-[30px] h-[9px] w-[9px] rounded-full bg-tb-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]" />
            <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
              <h2 className="m-0 text-balance text-[clamp(26px,3.2vw,36px)] font-extrabold leading-[1.14] text-white">{hub.bandHead}</h2>
              <p className="mt-3 max-w-[46ch] text-pretty text-base leading-[1.6] text-white">{hub.bandText}</p>
            </div>
            {tinyApp ? (
              <AppStoreCta app={tinyApp} waitlistHref={WAITLIST} />
            ) : (
              <Link
                href="/#apps"
                className="relative inline-flex h-[54px] items-center rounded-[18px] bg-white px-6 text-base font-extrabold hover:brightness-[0.96] active:scale-[0.97]"
                style={{ color: "#232F48" }}
              >
                Explore the apps
              </Link>
            )}
          </div>
        </section>
      </main>

      <GuidesFooter />
    </div>
  );
}
