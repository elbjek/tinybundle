import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: { absolute: "Privacy policy | TinyHaven" },
  description: "How TinyHaven and Two Brick Labs collect, use and protect information in the late-night parent companion app.",
  alternates: { canonical: "/tinyhaven/privacy" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    paragraphs: [
      "TinyHaven is a late-night companion for parents, published by Two Brick Labs (“we”, “us”). This Privacy Policy explains what we collect when you use TinyHaven, how we use it, and the choices you have.",
      "TinyHaven is built to feel anonymous: no public profiles, no follower lists, no daylight feed. We still need a small amount of data to run the app, keep the haven safe, and support your account.",
    ],
  },
  {
    id: "collect",
    title: "Information we collect",
    paragraphs: [
      "Account and sign-in. If you create an account, we may collect an email address, authentication identifiers from your sign-in provider (such as Apple), and basic account settings.",
      "Check-ins and presence. When you check in, we process the reason you choose (for example feeding or rocking), that you are present in a shared haven, and soft gestures such as a heart or sparkle.",
      "Quiet notes. If you leave a note, we process the text you typed so it can be shown anonymously in your haven, checked for safety before it posts, and — if reported — reviewed. Notes are not tied to a public name or photo.",
      "Reports and blocks. If you report a note or block another parent, we process that action so we can hide content for you, apply community thresholds, and review abuse. Blocking does not reveal anyone’s identity to you.",
      "Device and technical data. We may collect device type, operating system, app version, language, approximate time zone, crash logs, and diagnostics needed to keep TinyHaven working.",
      "Purchase information. If you buy a subscription through the App Store, Apple handles payment. We receive entitlement status (for example whether Premium is active), not your full card details.",
      "Communications. If you email support@twobricklabs.com or contact@twobricklabs.com, we keep that conversation so we can help you.",
    ],
  },
  {
    id: "moderation",
    title: "How we check notes (moderation)",
    paragraphs: [
      "Every quiet note is checked automatically before it is posted. If it is likely to contain material we do not allow (see the Terms of Use), it is refused and never reaches the haven.",
      "To score a note, we send the note text to a third-party content moderation service. We send only the text — not your name, email, account identifier, or which haven you are in.",
      "That service returns a safety score or classification so we can allow or refuse the note. It acts as our processor for this purpose and may only use what we send to provide that scoring. If you want the current provider’s name, email support@twobricklabs.com — we will tell you, and we update this policy when the provider changes.",
      "Automatic checking misses things and sometimes refuses a kind note. That is why reporting exists.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    paragraphs: [
      "We use information to run TinyHaven: show who else is awake, power check-ins and soft gestures, show quiet notes in a haven, moderate and review content, honour reports and blocks, maintain accounts, process subscriptions, fix bugs, prevent abuse, and improve the product.",
      "We do not sell your personal information. We do not use TinyHaven check-ins or notes to build advertising profiles or run third-party ad networks inside the night experience.",
      "Night content is meant to stay in the night. Presence and notes are temporary by design — not a lasting public timeline.",
    ],
  },
  {
    id: "share",
    title: "When we share information",
    paragraphs: [
      "Other parents in a haven may see anonymous presence, soft gestures, and quiet notes. They do not see your email, legal name, or profile photo from how TinyHaven is built.",
      "Service providers help us host infrastructure, score notes for safety, send transactional email, analyze crashes, and process App Store subscriptions. They may process data only to provide those services to us.",
      "We may disclose information if required by law, to protect someone’s safety, or to defend our legal rights. If TinyHaven or Two Brick Labs is involved in a merger or acquisition, information may transfer as part of that transaction under continued privacy protections.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep things",
    paragraphs: [
      "Quiet notes are deleted roughly six hours after they are posted. Your presence in a haven ends by 6am in your own timezone.",
      "If a note is reported, we may keep a copy longer so we can review it and decide whether an account should be limited. We keep that material only as long as needed for safety and integrity.",
      "We keep account data while your account is active and for a reasonable period afterward if needed for security, accounting, or legal reasons. You can delete your account from Settings.",
      "Crash logs and diagnostics are kept only as long as useful for reliability.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We use measures appropriate to the data — including encrypted transit and access controls. No method of transmission or storage is perfectly secure; please use a strong device passcode and keep your OS updated.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "TinyHaven is for parents and caregivers, not for children. We do not knowingly collect personal information from children under 13 (or the equivalent minimum age where you live). If you believe a child has given us information, contact us and we will delete it.",
    ],
  },
  {
    id: "rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or export personal information, or to object to or restrict certain processing.",
      "You can delete your TinyHaven account and associated data from Settings, or email support@twobricklabs.com. App Store subscriptions are managed in your Apple ID settings.",
      "If we use cookies on related websites, you can control them in your browser.",
    ],
  },
  {
    id: "international",
    title: "International transfers",
    paragraphs: [
      "Two Brick Labs may process information in the European Economic Area, the United Kingdom, the United States, or other countries where we or our providers operate — including the moderation service that scores note text. Where required, we use appropriate safeguards for cross-border transfers.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy as TinyHaven evolves. We will change the “Last updated” date above and, when changes are material, provide additional notice in the app or by email when appropriate.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Privacy or data questions: contact@twobricklabs.com. Haven safety and reports: support@twobricklabs.com. Controller: Two Brick Labs — https://www.twobricklabs.com. What you may post is described in the Terms of Use.",
    ],
  },
];

export default function TinyHavenPrivacyRoute() {
  return (
    <LegalPage
      app="TinyHaven"
      base="/tinyhaven"
      doc="privacy"
      title="Privacy policy"
      updated="26 July 2026"
      intro="What TinyHaven collects, how we use it to run and protect the haven, and the choices you have. Covers the TinyHaven app."
      short={[
        { h: "Built to feel anonymous", p: "No public profiles or follower lists. Other parents never see your email or name." },
        { h: "Notes don’t last", p: "Quiet notes are deleted about six hours after posting, and your presence ends by 6am." },
        { h: "No selling, no ad profiles", p: "We don’t sell your information or use check-ins and notes to build advertising profiles." },
      ]}
      sections={sections}
      email="contact@twobricklabs.com"
    />
  );
}
