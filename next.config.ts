import type { NextConfig } from "next";
import { GUIDE_REDIRECTS } from "./src/lib/guides/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(GUIDE_REDIRECTS).map(([from, to]) => ({
      source: `/guides/${from}`,
      destination: `/guides/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
