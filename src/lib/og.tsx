import { ImageResponse } from "next/og";
import { getApp } from "@/lib/apps";

export const ogSize = {
  width: 1200,
  height: 630,
} as const;

export type OgConfig = {
  brand: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  badge?: string;
  theme: {
    background: string;
    ink: string;
    muted: string;
    accent: string;
    accentSoft: string;
    card: string;
    border: string;
    glow?: string;
  };
  pills?: { label: string; bg: string; color: string }[];
};

export function createOgImage(config: OgConfig) {
  const { brand, title, titleAccent, subtitle, badge, theme, pills } = config;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: theme.background,
          padding: "56px 64px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {theme.glow ? (
          <div
            style={{
              position: "absolute",
              top: -120,
              right: -80,
              width: 480,
              height: 480,
              borderRadius: 999,
              background: theme.glow,
              opacity: 0.9,
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: 999,
            background: theme.accentSoft,
            opacity: 0.55,
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: theme.card,
                border: `1px solid ${theme.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 999,
                  background: theme.accent,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: theme.ink,
              }}
            >
              {brand}
            </div>
          </div>
          {badge ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 999,
                border: `1px solid ${theme.border}`,
                background: theme.card,
                padding: "10px 18px",
                color: theme.accent,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: theme.accent,
                }}
              />
              {badge}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 900,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: theme.ink,
            }}
          >
            <span>{title}</span>
            {titleAccent ? (
              <span style={{ color: theme.accent }}>{titleAccent}</span>
            ) : null}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.35,
              color: theme.muted,
              maxWidth: 820,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {(pills ?? []).map((pill) => (
              <div
                key={pill.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 999,
                  background: pill.bg,
                  color: pill.color,
                  padding: "12px 18px",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {pill.label}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: theme.muted,
            }}
          >
            tinybundle.app
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    },
  );
}

export const bundleOg = {
  brand: "TinyBundle",
  title: "Four moments. One journey.",
  titleAccent: "We've got you.",
  subtitle:
    "From the late nights to the everyday wins. Four calm apps for every tiny moment of parenting.",
  theme: {
    background: "#fbf5ec",
    ink: "#263048",
    muted: "#5f6a80",
    accent: "#e2a13d",
    accentSoft: "#f2c173",
    card: "#ffffff",
    border: "#ecdfcc",
    glow: "rgba(242, 193, 115, 0.35)",
  },
  pills: [
    { label: "TinyNaps", bg: "#e6e9f0", color: "#232f48" },
    { label: "TinyLayers", bg: "#dce6f1", color: "#263048" },
    { label: "TinyBlooms", bg: "#dfe4d1", color: "#263048" },
    { label: "TinyMeals", bg: "#f6dfc9", color: "#263048" },
  ],
} satisfies OgConfig;

export const napsOg = {
  brand: "TinyNaps",
  title: "All the little things,",
  titleAccent: "in one place.",
  subtitle: "Log sleep, feeds and diapers in one tap and see the whole day on one calm screen.",
  badge: getApp("tinynaps").live ? "Free on iPhone" : "Coming soon to iOS",
  theme: {
    background: "#232f48",
    ink: "#ffffff",
    muted: "#c9d4de",
    accent: "#f0b66e",
    accentSoft: "#1a2337",
    card: "#2c3a57",
    border: "#2c3a57",
    glow: "rgba(242, 201, 139, 0.18)",
  },
  pills: [
    { label: "Sleep", bg: "#dce6f2", color: "#2f5b8a" },
    { label: "Feeds", bg: "#fbeedc", color: "#8a4f14" },
    { label: "Diapers", bg: "#e3ebdc", color: "#3f6e47" },
  ],
} satisfies OgConfig;

export const bloomsOg = {
  brand: "TinyBlooms",
  title: "One small idea",
  titleAccent: "for right now.",
  subtitle:
    "Age-right play ideas, gentle milestones and a memory journal, from newborn to age 5.",
  badge: getApp("tinyblooms").live ? "Free on iPhone" : "Coming soon to iOS",
  theme: {
    background: "#faf6ef",
    ink: "#2b2823",
    muted: "#756e62",
    accent: "#55915e",
    accentSoft: "#e3ebdc",
    card: "#ffffff",
    border: "#ebe3d5",
    glow: "rgba(223, 228, 209, 0.85)",
  },
  pills: [
    { label: "One at a time", bg: "#e7f1e4", color: "#5f6c45" },
    { label: "Age-right", bg: "#dfe4d1", color: "#5f6c45" },
    { label: "No guilt", bg: "#f7edd8", color: "#b97f26" },
  ],
} satisfies OgConfig;

export const mealsOg = {
  brand: "TinyMeals",
  title: "Today’s meal,",
  titleAccent: "worked out for you.",
  subtitle:
    "One gentle recipe a day, matched to your baby’s age and texture stage, from first spoons to family meals.",
  badge: "Built on NHS, WHO & CDC guidance",
  theme: {
    background: "#fef8f3",
    ink: "#2e2e2e",
    muted: "#5a5245",
    accent: "#5f6f4b",
    accentSoft: "#eef3e8",
    card: "#ffffff",
    border: "#f3e7d3",
    glow: "rgba(246, 223, 201, 0.9)",
  },
  pills: [
    { label: "First spoons", bg: "#fbeedc", color: "#8a4f14" },
    { label: "Finger foods", bg: "#eef3e8", color: "#47523b" },
    { label: "First allergens", bg: "#f3eadf", color: "#8a4f14" },
  ],
} satisfies OgConfig;
