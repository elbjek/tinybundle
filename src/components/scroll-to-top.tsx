"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Starts every new page at the top. Next.js skips its own scroll reset when a page begins with a fixed or sticky
 * element, which our backdrops and headers are. Links to a section (a #hash) still land on that section.
 */
export function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
