import type { NextConfig } from "next";
import { GUIDE_REDIRECTS, GUIDES_MOVED_TO_BLOG } from "./src/lib/guides/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The TinyMeals app links to these site-wide paths.
      { source: "/privacy", destination: "/tinymeals/privacy", permanent: false },
      { source: "/terms", destination: "/tinymeals/terms", permanent: false },
      // TinyHaven was replaced by TinyNaps.
      { source: "/tinyhaven/:path*", destination: "/tinynaps", permanent: true },
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
