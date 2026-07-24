import type { ReactNode } from "react";

/**
 * Mode icons traced from the TinyLayers app icon set
 * (src/components/icons.tsx — 24×24, stroke 1.8).
 */
export type ModeIconName = "moon" | "nap" | "sun" | "stroller" | "carrier" | "carseat";

export function ModeIcon({
  name,
  className = "h-6 w-6",
  color = "currentColor",
}: {
  name: ModeIconName;
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {paths[name](color)}
    </svg>
  );
}

const paths: Record<ModeIconName, (c: string) => ReactNode> = {
  moon: (c) => (
    <path
      d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z"
      stroke={c}
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
  ),
  nap: (c) => (
    <>
      <path
        d="M6.5 18.5a4.5 4.5 0 0 1 .6-9 5.5 5.5 0 0 1 10.6 1.2 3.9 3.9 0 0 1-.7 7.8H6.5Z"
        stroke={c}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path
        d="M11 13h2.6l-2.6 3h2.6"
        stroke={c}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  sun: (c) => (
    <>
      <circle cx={12} cy={12} r={4} stroke={c} strokeWidth={1.8} />
      <path
        d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </>
  ),
  stroller: (c) => (
    <>
      <path
        d="M4.5 8h13.4a7 7 0 0 1-6.9 8.3A6.9 6.9 0 0 1 4.5 9.4V8Z"
        stroke={c}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path
        d="M17.9 8c.5-2 1.3-3.4 3.1-4.2"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <circle cx={8.4} cy={20} r={1.7} stroke={c} strokeWidth={1.6} />
      <circle cx={15.4} cy={20} r={1.7} stroke={c} strokeWidth={1.6} />
    </>
  ),
  carrier: (c) => (
    <>
      <path
        d="M6.5 4v7a5.5 5.5 0 0 0 11 0V4"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <circle cx={12} cy={8.5} r={2.4} stroke={c} strokeWidth={1.8} />
      <path
        d="M9 20.5c1-1.4 5-1.4 6 0"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </>
  ),
  carseat: (c) => (
    <>
      <path
        d="M6 3.5V10a7.5 7.5 0 0 0 7.5 7.5H19"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <path
        d="M9.5 6.5 13 12M16.5 6.5 13 12"
        stroke={c}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <circle cx={13} cy={12.2} r={1.7} stroke={c} strokeWidth={1.6} />
      <path
        d="M19 21a2.5 2.5 0 0 0 0-5"
        stroke={c}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </>
  ),
};
