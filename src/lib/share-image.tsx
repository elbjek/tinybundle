import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { APP_IDENTITY, AppMark, BundleQuads } from "@/components/app-identity";
import { HERO_MOMENTS } from "@/components/home/hero-moments";
import { getApp, type AppSlug } from "@/lib/apps";
import type { GuideApp } from "@/lib/guides/types";

export const shareImageSize = { width: 1200, height: 630 } as const;

const INK = "#2E2E2E";
const BODY = "#6B6457";
const CREAM = "#FEF8F3";

async function nunitoSans() {
  const dir = join(process.cwd(), "assets/fonts");
  const [regular, extraBold] = await Promise.all([
    readFile(join(dir, "NunitoSans-Regular.ttf")),
    readFile(join(dir, "NunitoSans-ExtraBold.ttf")),
  ]);
  return [
    { name: "Nunito Sans", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Nunito Sans", data: extraBold, weight: 800 as const, style: "normal" as const },
  ];
}

function Wordmark({ size = 56, ring = CREAM }: { size?: number; ring?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      {/* Called directly: the image renderer does not run components nested inside an <svg>. */}
      <svg viewBox="0 0 64 64" width={size} height={size}>
        {BundleQuads({ ring })}
      </svg>
      <span style={{ fontSize: size * 0.66, fontWeight: 800, color: INK, letterSpacing: "-0.01em" }}>TinyBundle</span>
    </div>
  );
}

function Tile({ app, size, radius }: { app: GuideApp; size: number; radius: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        background: app === "tinynaps" ? APP_IDENTITY.tinynaps.colors.iconBg : "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <AppMark app={app} size={Math.round(size * 0.64)} />
    </div>
  );
}

/** Soft shapes behind the content, like the site backdrop. */
function Shapes({ warm, cool }: { warm: string; cool: string }) {
  return (
    <>
      <div style={{ position: "absolute", top: -170, right: -130, width: 520, height: 520, borderRadius: 999, background: cool }} />
      <div
        style={{
          position: "absolute",
          top: 300,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: 80,
          background: warm,
          transform: "rotate(18deg)",
        }}
      />
    </>
  );
}

/** The family card: TinyBundle, the headline and one tile per app. Used for the homepage and site-wide pages. */
export async function familyShareImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 64px 60px",
          background: CREAM,
          fontFamily: "Nunito Sans",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Shapes warm="#F7E6CF" cool="#F1EAE0" />
        <Wordmark />
        <div style={{ display: "flex", flexDirection: "column", marginTop: -8 }}>
          <span style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.04, color: INK, letterSpacing: "-0.02em" }}>
            Four little apps.
          </span>
          <span style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.04, color: "#D17A2A", letterSpacing: "-0.02em" }}>
            One job each.
          </span>
          <span style={{ marginTop: 18, fontSize: 29, lineHeight: 1.35, color: BODY }}>
            Calm parenting apps for baby sleep, first foods, play and daily care.
          </span>
        </div>
        <div style={{ display: "flex", gap: 18 }}>
          {HERO_MOMENTS.map((moment) => {
            const identity = APP_IDENTITY[moment.app];
            return (
              <div
                key={moment.app}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 20px",
                  borderRadius: 28,
                  background: identity.colors.tile,
                }}
              >
                <Tile app={moment.app} size={58} radius={18} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 25, fontWeight: 800, color: INK }}>{identity.name}</span>
                  <span style={{ fontSize: 18, fontWeight: 800, color: identity.colors.deep }}>{moment.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ),
    { ...shareImageSize, fonts: await nunitoSans() },
  );
}

/** An app landing page card: the app's hero headline, what it does, whether it is out, and a large mark. */
export async function appShareImage(slug: AppSlug) {
  const app = getApp(slug);
  const moment = HERO_MOMENTS.find((m) => m.app === slug);
  if (!moment) throw new Error(`No hero moment for ${slug}`);
  const { colors } = APP_IDENTITY[slug];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px 56px",
          background: colors.tile,
          fontFamily: "Nunito Sans",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 150,
            right: -70,
            width: 360,
            height: 360,
            borderRadius: 96,
            background: slug === "tinynaps" ? colors.iconBg : "#FFFFFF",
            transform: "rotate(10deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppMark app={slug} size={230} />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Tile app={slug} size={72} radius={22} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 38, fontWeight: 800, color: INK, lineHeight: 1.1 }}>{app.name}</span>
              <span style={{ fontSize: 22, fontWeight: 800, color: colors.deep }}>{moment.tag}</span>
            </div>
          </div>
          <span
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              background: "#FFFFFF",
              fontSize: 22,
              fontWeight: 800,
              color: app.live ? "#47523B" : "#8A6A3C",
            }}
          >
            {app.live ? "Available now" : "Coming soon"}
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <span style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, color: INK, letterSpacing: "-0.02em" }}>{moment.title}</span>
          <span style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, color: colors.deep, letterSpacing: "-0.02em" }}>
            {moment.title2}
          </span>
          <span style={{ marginTop: 18, fontSize: 27, lineHeight: 1.4, color: BODY }}>{moment.sub}</span>
        </div>
        <Wordmark size={44} ring={colors.tile} />
      </div>
    ),
    { ...shareImageSize, fonts: await nunitoSans() },
  );
}

/** A page card: the app's colours, its mark, an eyebrow, the page's title or question, and an optional topic. */
export async function pageShareImage({ app, eyebrow, title, topic }: { app: GuideApp; eyebrow: string; title: string; topic?: string }) {
  const { colors } = APP_IDENTITY[app];
  const titleSize = title.length > 70 ? 56 : title.length > 44 ? 66 : 76;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 64px 56px",
          background: colors.tile,
          fontFamily: "Nunito Sans",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Shapes warm="rgba(255,255,255,0.45)" cool="rgba(255,255,255,0.55)" />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Tile app={app} size={76} radius={24} />
          <span style={{ fontSize: 24, fontWeight: 800, color: colors.deep, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {eyebrow}
          </span>
        </div>
        <span
          style={{
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.08,
            color: INK,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </span>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Wordmark size={48} ring={colors.tile} />
          {topic ? (
            <span
              style={{
                padding: "12px 24px",
                borderRadius: 999,
                background: "#FFFFFF",
                fontSize: 22,
                fontWeight: 800,
                color: colors.deep,
              }}
            >
              {topic}
            </span>
          ) : null}
        </div>
      </div>
    ),
    { ...shareImageSize, fonts: await nunitoSans() },
  );
}
