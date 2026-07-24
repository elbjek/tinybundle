import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import { HavenHeader, HavenFooter } from "@/components/tinyhaven/chrome";
import { HavenTermsPage } from "@/components/tinyhaven/terms-page";

const title = "Terms of Use — TinyHaven";
const description =
  "Terms of Use for TinyHaven by Two Brick Labs — the late-night companion app for parents.";
const path = "/tinyhaven/terms";

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

export default function TinyHavenTermsRoute() {
  return (
    <div className="min-h-screen bg-haven font-sans text-haven-ink antialiased selection:bg-haven-amber selection:text-haven-on-amber">
      <HavenHeader />
      <main>
        <HavenTermsPage />
      </main>
      <HavenFooter />
    </div>
  );
}
