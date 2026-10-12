import { NapsMark } from "@/components/tinynaps/mark";
import type { GuideApp } from "@/lib/guides/types";

/** Each app's name, colours and mark, as the TinyBundle landing design shows them. */
export const APP_IDENTITY: Record<
  GuideApp,
  { name: string; href: string; ink: string; tile: string; soft: string }
> = {
  tinylayers: {
    name: "TinyLayers",
    href: "/tinylayers",
    ink: "text-[#2F5B8A]",
    tile: "bg-[#DCE6F2]",
    soft: "bg-[#EAF1F8]",
  },
  tinymeals: {
    name: "TinyMeals",
    href: "/tinymeals",
    ink: "text-[#A0521A]",
    tile: "bg-[#FBEEDC]",
    soft: "bg-[#FBEEDC]",
  },
  tinyblooms: {
    name: "TinyBlooms",
    href: "/tinyblooms",
    ink: "text-[#3F6E47]",
    tile: "bg-[#E3EBDC]",
    soft: "bg-[#EEF3E8]",
  },
  tinynaps: {
    name: "TinyNaps",
    href: "/tinynaps",
    ink: "text-naps-lavender-ink",
    tile: "bg-naps-lavender",
    soft: "bg-naps-lavender",
  },
  tinybundle: {
    name: "TinyBundle",
    href: "/",
    ink: "text-[#9A6C1E]",
    tile: "bg-[#F3EADF]",
    soft: "bg-[#F3EADF]",
  },
};

export function AppMark({
  app,
  className,
}: {
  app: GuideApp;
  className: string;
}) {
  if (app === "tinynaps") return <NapsMark className={className} />;
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {app === "tinylayers" ? (
        <>
          <path
            d="M11 43a21 21 0 0 1 42 0"
            stroke="#3D6DA8"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M21 43a11 11 0 0 1 22 0"
            stroke="#7FA8CF"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="43" r="5" fill="#E2A03F" />
        </>
      ) : null}
      {app === "tinymeals" ? (
        <>
          <path
            d="M32 21c-1.9-2.1-5.2-3.5-5.2-6.4 0-1.8 1.4-3.1 3.1-3.1 1 0 1.7.4 2.1 1.2.4-.8 1.1-1.2 2.1-1.2 1.7 0 3.1 1.3 3.1 3.1 0 2.9-3.3 4.3-5.2 6.4Z"
            fill="#E8964A"
          />
          <path
            d="M20 28h24"
            stroke="#D17A2A"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M18 36a14 14 0 0 0 28 0"
            stroke="#C06A22"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </>
      ) : null}
      {app === "tinyblooms" ? (
        <>
          <path
            d="M32 52V31"
            stroke="#55915E"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M23 53h18"
            stroke="#55915E"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M31 37c-8 0-13-5-13-12 8 0 13 5 13 12Z"
            stroke="#55915E"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          <path
            d="M33 31c0-8 5-13 12-13 0 8-5 13-12 13Z"
            stroke="#55915E"
            strokeWidth="4.5"
            strokeLinejoin="round"
            fill="#A9C9A4"
          />
        </>
      ) : null}
      {app === "tinybundle" ? <BundleArcs /> : null}
    </svg>
  );
}

/** The TinyBundle mark: three arcs and a dot. */
export function BundleArcs() {
  return (
    <>
      <path
        d="M8 44a24 24 0 0 1 48 0"
        stroke="#232F48"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M16 44a16 16 0 0 1 32 0"
        stroke="#3D6DA8"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M24 44a8 8 0 0 1 16 0"
        stroke="#55915E"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="44" r="4.5" fill="#E2A03F" />
    </>
  );
}
