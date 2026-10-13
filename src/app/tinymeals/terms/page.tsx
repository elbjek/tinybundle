import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: { absolute: "Terms of use | TinyMeals" },
  description: "The terms for using TinyMeals, including subscriptions, family sharing and why TinyMeals is not medical advice.",
  alternates: { canonical: "/tinymeals/terms" },
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      "These Terms of Use are an agreement between you and Two Brick Labs (“we”, “us”) for the TinyMeals app and tinybundle.app/tinymeals. By using TinyMeals you accept them. If you do not agree, please do not use the app.",
      "If you downloaded TinyMeals from the App Store, Apple’s Licensed Application End User License Agreement also applies. Apple is not responsible for TinyMeals or its support.",
    ],
  },
  {
    id: "what",
    title: "What TinyMeals is",
    paragraphs: [
      "TinyMeals suggests meals and first foods for your baby’s age and texture stage, keeps a food history from what you log, and lets you share that history with family members you invite.",
    ],
  },
  {
    id: "medical",
    title: "Not medical advice",
    paragraphs: [
      "TinyMeals gives general feeding information based on public guidance from sources such as the NHS, WHO, CDC and national paediatric bodies. It is not medical advice and does not replace your doctor, paediatrician, health visitor or dietitian.",
      "TinyMeals does not diagnose allergies or assess reactions. Ask a health professional before starting solids if your baby was premature, has a medical condition or has eczema or a known allergy, and before introducing allergens if you are unsure.",
      "Always supervise your baby while they eat, prepare food in the shapes and textures the app describes, and check every recipe against your baby’s needs. If your baby has trouble breathing, swelling of the face or lips, or seems seriously unwell, call your local emergency number straight away.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be at least 18, or the age of majority where you live if higher, to use TinyMeals. The app is for parents and caregivers, not for children.",
    ],
  },
  {
    id: "account",
    title: "Your account and family",
    paragraphs: [
      "You can use TinyMeals without an account. Signing in lets you sync and share. Keep your sign-in secure and tell us if you think someone else has used it.",
      "When you invite someone to your family, they can see and edit the shared babies, meal logs and saved recipes. Only invite people you trust. The family owner can remove members, and anyone can leave.",
      "You own what you enter in TinyMeals. You give us permission to store and process it only so we can run the app for you and your family.",
      "You can delete your account at any time in Settings. We may suspend access if you misuse the app or break these terms.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    paragraphs: [
      "Some features need TinyMeals Premium, offered as a monthly or yearly auto-renewing subscription. The yearly plan may include a free trial. Prices are shown in the app in your local currency before you buy.",
      "Payment is charged to your Apple ID when you confirm the purchase, or when a free trial ends. Your subscription renews automatically unless you turn off auto-renew at least 24 hours before the end of the current period, and your account is charged for the next period within the 24 hours before it ends.",
      "Manage or cancel your subscription in your Apple ID settings. Refunds are handled by Apple under its policies. Any unused part of a free trial ends when you buy a subscription.",
      "A family owner’s Premium also covers the members of their family while they stay in it.",
    ],
  },
  {
    id: "ip",
    title: "Our intellectual property",
    paragraphs: [
      "TinyMeals, including its name, logo, design, recipes, guides and software, belongs to Two Brick Labs or its licensors. We give you a personal, non-transferable licence to use the app for your own family, not to copy, resell or redistribute its content.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    paragraphs: [
      "TinyMeals relies on providers for hosting, sign-in, notifications, crash reports and App Store billing. Their services follow their own terms. We are not responsible for services we do not control, including websites we link to as sources.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      "TinyMeals is provided “as is” and “as available”. To the fullest extent the law allows, we disclaim warranties of merchantability, fitness for a particular purpose and non-infringement, and we do not promise the app will be uninterrupted or error-free.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent the law allows, Two Brick Labs will not be liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill, arising from your use of TinyMeals.",
      "Our total liability for any claim about TinyMeals is limited to the greater of what you paid for TinyMeals in the 12 months before the claim or fifty US dollars (US $50), except where the law does not allow this limit. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    paragraphs: [
      "To the extent the law allows, you agree to cover Two Brick Labs for claims, damages and reasonable costs that arise from your misuse of TinyMeals or your breach of these terms.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update TinyMeals and these terms. We will change the date above and tell you in the app or by email when a change is significant. Continuing to use TinyMeals after that means you accept the updated terms, except where consumer law says otherwise.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the place where Two Brick Labs is established, without regard to conflict-of-law rules. If you are a consumer, you keep the protection of the mandatory laws and courts of the country where you live.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: ["Questions about these terms: support@twobricklabs.com. Two Brick Labs, https://www.twobricklabs.com."],
  },
];

export default function TinyMealsTermsRoute() {
  return (
    <LegalPage
      app="TinyMeals"
      base="/tinymeals"
      doc="terms"
      title="Terms of use"
      updated="12 October 2026"
      intro="The agreement between you and Two Brick Labs for the TinyMeals app and tinybundle.app/tinymeals, including subscriptions and health guidance."
      short={[
        { h: "Guidance, not medical advice", p: "TinyMeals gives general feeding information. It doesn’t replace your doctor, health visitor or dietitian." },
        { h: "Subscriptions go through Apple", p: "Premium renews automatically. Cancel in your Apple ID settings at least 24 hours before it renews." },
        { h: "Your food history is yours", p: "You own what you log. We store it only to run the app for you and your family." },
      ]}
      sections={sections}
      email="support@twobricklabs.com"
    />
  );
}
