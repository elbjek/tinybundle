import type { Metadata } from "next";
import { GuidesFooter, GuidesHeader } from "@/components/guides/chrome";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: { absolute: "TinyHaven Terms of Use" },
  description: "The terms for using TinyHaven, the late-night companion app for parents from Two Brick Labs.",
  alternates: { canonical: "/tinyhaven/terms" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      "These Terms of Use (“Terms”) cover the TinyHaven app, published by Two Brick Labs (“we”, “us”).",
      "By downloading, opening, or using TinyHaven, you agree to these Terms. If you do not agree, please do not use the app.",
    ],
  },
  {
    id: "what",
    title: "What TinyHaven is",
    paragraphs: [
      "TinyHaven is late-night company for parents: anonymous check-ins, a shared haven with others who are awake, quiet notes, and soft gestures like a heart or sparkle. It is built for the hard hour — not for daylight social media.",
    ],
  },
  {
    id: "notes",
    title: "Quiet notes and what belongs in them",
    paragraphs: [
      "TinyHaven lets you leave a short, anonymous note in the haven you have joined. Everyone in that haven can read it. There are no names, no replies, and no way to contact another parent directly.",
      "Notes are for company: how your night is going, what you are getting through, what you would say to someone in the same hour. They are not for advice, promotion, or anything aimed at another person.",
      "We have no tolerance for objectionable content or abusive behaviour. Specifically, do not post:",
    ],
    list: [
      "content that attacks, demeans, or targets another person",
      "hateful content, including content targeting anyone’s identity",
      "threats of harm to anyone, including yourself or a child",
      "sexual content of any kind, and never any sexual content involving a minor",
      "content that encourages self-harm or describes how to carry it out",
      "advertising, links, spam, or anything soliciting money",
      "anyone’s private information, including your own",
    ],
    afterList: [
      "Accounts used to post this material may be suspended or removed without notice.",
      "Do not try to reverse-engineer, scrape, overload, or disrupt TinyHaven, or bypass the checks that keep the space quiet.",
    ],
  },
  {
    id: "moderation",
    title: "How notes are checked",
    paragraphs: [
      "Every note is checked automatically before it is posted. If a note is likely to contain the material described above, it is refused and never reaches the haven. You will be told the note could not be added.",
      "To do this, the text of your note is sent to a third-party moderation service for scoring. Only the text is sent — not your name, email, account identifier, or which haven you are in. See the Privacy Policy for how that processing works.",
      "Automatic checking is imperfect in both directions. It sometimes refuses a note that was perfectly fine, and it sometimes misses one that was not. That is why reporting exists, and why we ask you to use it.",
    ],
  },
  {
    id: "reporting",
    title: "Reporting and blocking",
    paragraphs: [
      "Every note written by someone else carries a control to report it or block the parent who wrote it.",
      "Reporting hides the note from you immediately. Once a small number of different people report the same note, it is hidden from everyone. Reports are recorded and reviewed, and accounts responsible for reported content may be suspended or removed.",
      "Blocking hides that parent’s notes from you, and yours from them, from that point on. You will not be told who they are; TinyHaven never reveals who wrote a note.",
      "We aim to act on reports promptly. You can also reach us at support@twobricklabs.com about anything you have seen in a haven.",
    ],
  },
  {
    id: "expiry",
    title: "Notes do not last",
    paragraphs: [
      "Quiet notes are deleted roughly six hours after they are posted. Your presence in a haven ends by 6am in your own timezone.",
      "TinyHaven is not a journal, a diary, or a record. Nothing you write here is kept for you to come back to, and you should not rely on it being there later.",
    ],
  },
  {
    id: "not-care",
    title: "TinyHaven is company, not care",
    paragraphs: [
      "TinyHaven is not a medical service, a counselling service, or an emergency service. Nothing in the app is medical, psychological, or professional advice, and nobody reading the havens is a clinician acting in that role.",
      "Nobody monitors the havens for emergencies. Notes are anonymous and cannot be replied to, so writing one is not a way to ask for help and will not bring any.",
      "If you are struggling with your safety or your child’s, please contact a doctor, a local crisis line, or emergency services. The app links to findahelpline.com, a directory of free, confidential lines in most countries. That link is offered as a convenience; the services listed are not ours and we are not responsible for them.",
      "If you are in immediate danger, contact your local emergency number.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be old enough to form a binding contract where you live (and at least 18, or the age of majority if higher) to use TinyHaven. The app is for parents and caregivers, not for children.",
      "You are responsible for the device, Apple ID, and connection you use to open TinyHaven.",
    ],
  },
  {
    id: "account-content",
    title: "Your account and your content",
    paragraphs: [
      "Some features may need an account (for example Sign in with Apple). Keep your sign-in safe and tell us if you think it has been compromised.",
      "You keep ownership of what you write. By posting a note you give us permission to show it in the haven you posted it to for as long as it exists there, and to retain a copy of a note that has been reported so we can review it.",
      "You represent that you have the right to post what you share and that it does not break the law or someone else’s rights.",
      "You may delete your account and data at any time from Settings. We may suspend or end access if you break these Terms or if we need to protect the space.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and purchases",
    paragraphs: [
      "TinyHaven may offer free features and paid Premium plans. Purchases through the Apple App Store are billed by Apple under Apple’s terms. Manage, cancel, or request refunds in your Apple ID / App Store settings.",
      "Prices and plan details may change. We will describe material changes in the app or store listing when required.",
    ],
  },
  {
    id: "ip",
    title: "Our intellectual property",
    paragraphs: [
      "TinyHaven — name, logos, design, text, and software (not counting your notes) — belongs to Two Brick Labs or its licensors. These Terms give you a limited, personal licence to use the app as offered, not ownership of our brand or code.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    paragraphs: [
      "TinyHaven relies on providers for hosting, sign-in, crash diagnostics, App Store billing, and automatic note moderation. Their services follow their own terms and privacy policies. We are not responsible for services we do not control — including the crisis lines listed at findahelpline.com.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      "TinyHaven is provided “as is” and “as available.” To the fullest extent the law allows, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not promise uninterrupted access, perfect moderation, or that the haven will meet every emotional need. Parenting nights are hard; TinyHaven is company, not a guarantee.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent the law allows, Two Brick Labs and its people will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of TinyHaven.",
      "Our total liability for any claim about TinyHaven is limited to the greater of (a) what you paid us for TinyHaven in the 12 months before the claim, or (b) fifty US dollars (US $50), except where the law says we cannot limit liability.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    paragraphs: [
      "You agree to defend and indemnify Two Brick Labs against claims, damages, and costs (including reasonable legal fees) arising from your misuse of TinyHaven, your notes, or your breach of these Terms, to the extent the law allows.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update TinyHaven and these Terms. When changes matter, we will update the “Last updated” date and may notice you in the app or by email. Keeping using TinyHaven after that means you accept the updated Terms, except where local consumer law says otherwise.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These Terms follow the laws where Two Brick Labs is established, without conflict-of-law rules, except where mandatory consumer protections in your country say otherwise. Disputes go to courts there unless a mandatory local forum applies to you as a consumer.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Haven safety or something you saw in a note: support@twobricklabs.com. Everything else: contact@twobricklabs.com. Two Brick Labs — https://www.twobricklabs.com. How we handle data is in the Privacy Policy.",
    ],
  },
];

export default function TinyHavenTermsRoute() {
  return (
    <div className="min-h-screen bg-tb font-nunito text-tb-ink antialiased">
      <GuidesHeader />
      <main>
        <LegalPage
          app="TinyHaven"
          title="Terms of Use"
          updated="July 26, 2026"
          intro="Covers the TinyHaven app."
          sections={sections}
          related={{ href: "/tinyhaven/privacy", label: "Privacy Policy" }}
          linkClassName="text-tb-amber-ink hover:text-tb-ink"
        />
      </main>
      <GuidesFooter />
    </div>
  );
}
