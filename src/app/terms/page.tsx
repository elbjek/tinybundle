import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { TERMS_INTRO, TERMS_SECTIONS, TERMS_SHORT, TERMS_UPDATED } from "@/lib/legal/terms";

const description =
  "The terms for using tinybundle.app and the TinyLayers, TinyMeals and TinyHaven apps, including subscriptions, health guidance and community rules.";

export const metadata: Metadata = {
  title: { absolute: "Terms of use | TinyBundle" },
  description,
  alternates: { canonical: "/terms" },
  openGraph: { type: "website", siteName: "TinyBundle", url: "/terms", title: "Terms of use | TinyBundle", description },
};

export default function TermsRoute() {
  return (
    <LegalPage
      app="TinyBundle"
      base=""
      doc="terms"
      title="Terms of use"
      updated={TERMS_UPDATED}
      intro={TERMS_INTRO}
      short={TERMS_SHORT}
      sections={TERMS_SECTIONS}
      email="support@twobricklabs.com"
    />
  );
}
