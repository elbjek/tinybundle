import type { NextConfig } from "next";
import { GUIDE_REDIRECTS, GUIDES_MOVED_TO_BLOG } from "./src/lib/guides/redirects";

const isDev = process.env.NODE_ENV === "development";

/**
 * Everything the site loads comes from itself, so the policy only allows 'self'. Next.js needs inline scripts on
 * static pages (no per-request nonce), and dev mode needs eval for fast refresh.
 */
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // In development Vercel Analytics loads its debug script from its CDN; in production it is served from this site.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const SECURITY_HEADERS = [
  // Preview deploys load Vercel's feedback toolbar from vercel.live, which this policy would block.
  ...(process.env.VERCEL_ENV === "preview" ? [] : [{ key: "Content-Security-Policy", value: CONTENT_SECURITY_POLICY }]),
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return [
      // One privacy policy and one set of terms for every app; old per-app links land on the app's section.
      { source: "/tinymeals/privacy", destination: "/privacy#tinymeals", permanent: true },
      { source: "/tinymeals/terms", destination: "/terms", permanent: true },
      { source: "/tinyhaven/privacy", destination: "/privacy#tinyhaven", permanent: true },
      { source: "/tinyhaven/terms", destination: "/terms#tinyhaven", permanent: true },
      { source: "/tinyhaven", destination: "/tinynaps", permanent: true },
      // Guides live in one hub per app; the TinyBundle hub is the front door.
      { source: "/guides", destination: "/guides/tinybundle", permanent: true },
      ...Object.entries(GUIDE_REDIRECTS).map(([from, to]) => ({
        source: `/guides/${from}`,
        destination: `/guides/${to}`,
        permanent: true,
      })),
      ...Object.entries(GUIDES_MOVED_TO_BLOG).map(([from, to]) => ({
        source: `/guides/${from}`,
        destination: `/tinylayers/blog/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
