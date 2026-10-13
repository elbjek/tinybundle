import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { PRIVACY_INTRO, PRIVACY_SECTIONS, PRIVACY_SHORT, PRIVACY_UPDATED } from "@/lib/legal/privacy";

const description =
  "How TwoBrickLabs handles your information across tinybundle.app and the TinyLayers, TinyMeals and TinyHaven apps. No ads, no selling your data.";

export const metadata: Metadata = {
  title: { absolute: "Privacy policy | TinyBundle" },
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { type: "website", siteName: "TinyBundle", url: "/privacy", title: "Privacy policy | TinyBundle", description },
};

export default function PrivacyRoute() {
  return (
    <LegalPage
      app="TinyBundle"
      base=""
      doc="privacy"
      title="Privacy policy"
      updated={PRIVACY_UPDATED}
      intro={PRIVACY_INTRO}
      short={PRIVACY_SHORT}
      sections={PRIVACY_SECTIONS}
      email="support@twobricklabs.com"
    />
  );
}
