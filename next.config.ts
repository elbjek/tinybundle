import type { NextConfig } from "next";
import { GUIDE_REDIRECTS, GUIDES_MOVED_TO_BLOG } from "./src/lib/guides/redirects";

const nextConfig: NextConfig = {
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
