import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Parenting Guides — Answers for 2am Questions",
    template: "%s | TinyBundle Guides",
  },
  description:
    "Plain-English answers to the questions exhausted parents type at 2am: what baby should wear, what to eat, how to play and how to sleep.",
  openGraph: {
    siteName: "TinyBundle Guides",
    locale: "en_US",
    type: "website",
  },
};

export default function GuidesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
