import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import { HavenHeader, HavenFooter } from "@/components/tinyhaven/chrome";
import { HavenPrivacyPage } from "@/components/tinyhaven/privacy-page";

const title = "Privacy Policy — TinyHaven";
const description =
  "How TinyHaven and Two Brick Labs collect, use, and protect information for the late-night parent companion app.";
const path = "/tinyhaven/privacy";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    url: absoluteUrl(path),
    title,
    description,
    siteName: "TinyHaven",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function TinyHavenPrivacyRoute() {
  return (
    <div className="min-h-screen bg-haven font-sans text-haven-ink antialiased selection:bg-haven-amber selection:text-haven-on-amber">
      <HavenHeader />
      <main>
        <HavenPrivacyPage />
      </main>
      <HavenFooter />
    </div>
  );
}
