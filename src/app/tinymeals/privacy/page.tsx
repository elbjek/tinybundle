import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: { absolute: "Privacy policy | TinyMeals" },
  description: "What TinyMeals collects, why, who processes it and how to export or delete your baby’s food history.",
  alternates: { canonical: "/tinymeals/privacy" },
};

const sections: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    paragraphs: [
      "TinyMeals is a meal planner for babies starting solids, published by Two Brick Labs (“we”, “us”). This policy explains what TinyMeals collects, how we use it and the choices you have. Two Brick Labs is the controller of this information.",
    ],
  },
  {
    id: "device",
    title: "What stays on your phone",
    paragraphs: [
      "You can use TinyMeals without an account. Your baby’s profile (name, birth date and feeding stage), the foods they have tried and how they went, allergens, foods to avoid, meal logs, saved recipes and reminder settings are stored on your device.",
      "Reminders such as the daily meal idea are scheduled on your phone. Nothing in this section is sent to us unless you sign in.",
    ],
  },
  {
    id: "collect",
    title: "What we collect",
    paragraphs: [
      "Account. If you sign in, we receive your email address (when you sign in with an email code) or the identifier and email Apple shares when you use Sign in with Apple, plus your name if you choose to share it.",
      "Synced food history. When you are signed in, your babies’ profiles, meal and food logs and saved recipes are stored on our servers so they sync between your devices and with your family.",
      "Family sharing. If you create or join a family, we store who belongs to it, the display name you choose and invite codes. Everyone in your family can see the shared babies, logs and saved recipes, and your name on the entries you add.",
      "Notifications. To send family updates, we store your device’s push token, whether family updates are on, your quiet hours and your time zone.",
      "Purchases. Apple handles payment. We receive your subscription status (for example whether Premium is active and when it renews or ends) through RevenueCat, linked to your account if you are signed in. We never see your card details.",
      "Usage events. We record simple events such as “onboarding completed”, “meal logged” or “paywall viewed” with a random app identifier. We do not attach your email, your baby’s name or the contents of your logs to these events.",
      "Crash reports. If the app crashes or hits an error, we receive a report with the device model, operating system, app version and what the app was doing, so we can fix it.",
      "Support. If you email us, we keep the conversation so we can help.",
    ],
  },
  {
    id: "use",
    title: "How we use it",
    paragraphs: [
      "We use this information to plan meals for your baby’s age and stage, keep your food history, sync it between devices and family members, send the notifications you turn on, manage subscriptions, fix bugs and understand which parts of the app help.",
      "We do not sell your information, show ads or track you across other companies’ apps and websites.",
    ],
  },
  {
    id: "baby",
    title: "Information about your baby",
    paragraphs: [
      "Foods tried, possible reactions and allergies are personal information about your child. We use them only to run TinyMeals for you and the people you invite, and they are visible only to you and your family.",
      "TinyMeals is for parents and caregivers. It is not directed at children, and we do not knowingly collect information from children under 13. If you think a child has given us information, contact us and we will delete it.",
    ],
  },
  {
    id: "processors",
    title: "Who processes it for us",
    paragraphs: [
      "Supabase hosts our database and sign-in, in London, United Kingdom. RevenueCat manages App Store subscriptions. PostHog stores usage events in the United States. Sentry stores crash reports. Expo and Apple deliver push notifications, and Apple provides Sign in with Apple and App Store payments.",
      "These providers process information only to provide their service to us, under their own security and privacy terms.",
      "We may also disclose information if the law requires it, to protect someone’s safety or to defend our legal rights. If Two Brick Labs is involved in a merger or acquisition, information may transfer with continued protection.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [
      "We keep account and synced data while your account exists. Data stored only on your phone is removed when you delete the app.",
      "When you delete your account, we delete your account and the information tied to it. If you own a family that still has other members, ownership passes to the next member so the shared food history stays with them; a family with no other members is deleted.",
      "Usage events and crash reports are kept only as long as they are useful for improving and fixing the app.",
    ],
  },
  {
    id: "choices",
    title: "Your choices and rights",
    paragraphs: [
      "Export your food history as a CSV file from Settings. Delete your account from Settings, or email us. Turn notifications off in Settings or in iOS. Manage or cancel your subscription in your Apple ID settings.",
      "Depending on where you live (including under UK and EU data protection law and US state privacy laws), you may have the right to access, correct, delete or receive a copy of your information, and to object to or restrict some uses. Email support@twobricklabs.com and we will respond within the time the law requires. You can also complain to your local data protection authority.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "Information is encrypted in transit, and database access rules mean family data can only be read by members of that family. No system is perfectly secure, so please keep a passcode on your phone.",
    ],
  },
  {
    id: "transfers",
    title: "International transfers",
    paragraphs: [
      "We and our providers process information in the United Kingdom, the European Economic Area and the United States. Where the law requires it, we rely on appropriate safeguards such as standard contractual clauses.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We will update the date above when this policy changes, and tell you in the app or by email when a change is significant.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: ["Privacy questions and requests: support@twobricklabs.com. Two Brick Labs, https://www.twobricklabs.com."],
  },
];

export default function TinyMealsPrivacyRoute() {
  return (
    <LegalPage
      app="TinyMeals"
      base="/tinymeals"
      doc="privacy"
      title="Privacy policy"
      updated="12 October 2026"
      intro="What TinyMeals collects, why, who processes it for us and how to export or delete your baby’s food history. Covers the TinyMeals app and tinybundle.app/tinymeals."
      short={[
        { h: "Works without an account", p: "Your baby’s profile and food log stay on your phone unless you sign in to sync and share with family." },
        { h: "No ads, no selling", p: "We don’t sell your information, show ads or track you across other companies’ apps and websites." },
        { h: "Export or delete any time", p: "Export your food history as a CSV file, or delete your account in Settings or by email." },
      ]}
      sections={sections}
      email="support@twobricklabs.com"
    />
  );
}
