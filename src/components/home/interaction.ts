"use client";

import { useSyncExternalStore, type KeyboardEvent } from "react";

/** True while a media query matches. Always false on the server and during hydration, so markup never differs. */
export function useMedia(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const list = window.matchMedia(query);
      list.addEventListener("change", onChange);
      return () => list.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const STEP: Record<string, (current: number, count: number) => number> = {
  ArrowRight: (current, count) => (current + 1) % count,
  ArrowLeft: (current, count) => (current + count - 1) % count,
  Home: () => 0,
  End: (_, count) => count - 1,
};

/** Arrow, Home and End keys on a tablist: select the next tab and move focus to it. */
export function onTabKeys(event: KeyboardEvent<HTMLElement>, current: number, count: number, pick: (i: number) => void) {
  const step = STEP[event.key];
  if (!step) return;
  event.preventDefault();
  const next = step(current, count);
  pick(next);
  event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
}
