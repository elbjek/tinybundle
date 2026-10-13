import type { LegalSection } from "@/components/legal-page";

/** One set of terms for the website and every app. App sections keep the ids old per-app links redirect to. */
export const TERMS_UPDATED = "13 October 2026";

export const TERMS_INTRO =
  "These terms are the agreement between you and TwoBrickLabs for tinybundle.app and our apps: TinyLayers, TinyMeals and TinyHaven, and TinyBlooms and TinyNaps when they launch. By using any of them you accept these terms.";

export const TERMS_SHORT = [
  {
    h: "Guidance, not medical advice",
    p: "Our apps help with everyday decisions. They do not replace your doctor, health visitor or midwife.",
  },
  {
    h: "Payments go through Apple",
    p: "Subscriptions renew automatically until you cancel in your Apple ID settings. Refunds are handled by Apple.",
  },
  {
    h: "What you enter stays yours",
    p: "You own what you log. We store and process it only to run the apps for you and the people you invite.",
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    paragraphs: [
      "These terms are an agreement between you and TwoBrickLabs, based in Serbia (“we”, “us”). If you do not agree with them, please do not use the website or the apps. Our privacy policy explains how we handle your information.",
      "If you downloaded an app from the App Store, Apple’s standard Licensed Application End User License Agreement (EULA) also applies, as far as it does not conflict with these terms. You can read it at https://www.apple.com/legal/internet-services/itunes/dev/stdeula/. Apple is not responsible for our apps or their support.",
    ],
  },
  {
    id: "medical",
    title: "Guidance, not medical advice",
    paragraphs: [
      "Our apps and guides give general information based on public guidance from sources such as the NHS, WHO, CDC and the AAP. They are not medical advice, are not a medical device and do not diagnose, treat or prevent any condition. You know your baby best and are always responsible for their care.",
      "TinyMeals does not diagnose allergies or assess reactions. Ask a health professional before starting solids if your baby was premature, has a medical condition, eczema or a known allergy, and before introducing allergens if you are unsure. Always supervise your baby while they eat.",
      "TinyLayers gives general dressing guidance only. If your baby has a fever, was born prematurely or has a medical condition, or you are worried about their temperature, talk to a health professional.",
      "If your baby has trouble breathing, swelling of the face or lips, or seems seriously unwell, or if anyone is in danger, call your local emergency number straight away.",
    ],
  },
  {
    id: "eligibility",
    title: "Who can use the apps",
    paragraphs: [
      "You must be at least 18, or the age of majority where you live if that is higher, and a parent or caregiver of any child whose information you enter. The apps are for adults, not for children.",
    ],
  },
  {
    id: "account",
    title: "Your account and your content",
    paragraphs: [
      "TinyLayers needs an account. TinyMeals works without one, and signing in lets you sync and share. Keep your sign-in secure, tell us if you think someone else has used it, and keep the information you enter accurate.",
      "You own what you enter. You give us permission to store, sync and process it only to run the apps for you and the people you invite.",
      "In TinyMeals, people you invite to your family can see and edit the shared babies, meal logs and saved recipes, so only invite people you trust. The family owner can remove members, and anyone can leave.",
      "You can delete your account at any time in each app’s settings. Deleting an app or an account does not cancel a subscription.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and payments",
    paragraphs: [
      "Some features need a paid plan. Prices are shown in the App Store in your local currency before you buy, and payment is charged to your Apple ID when you confirm, or when a free trial ends.",
    ],
    list: [
      "TinyLayers has no free plan beyond setup. Choose a monthly subscription, which may come with a free introductory offer when the App Store shows one, or a one-time lifetime purchase that does not renew or expire.",
      "TinyMeals is free while you get ready for solids. TinyMeals Premium is a yearly or monthly subscription, and the yearly plan may include a free trial. A family owner’s Premium covers the members of their family while they stay in it.",
      "TinyHaven may offer free features and a paid Premium plan.",
    ],
    afterList: [
      "Subscriptions renew automatically unless you turn off auto-renew at least 24 hours before the end of the current period. Your Apple account is charged for the next period within the 24 hours before it ends. Manage or cancel in your Apple ID subscription settings.",
      "Refunds are handled by Apple under its policies. Any unused part of a free trial ends when you buy a subscription. Your statutory rights as a consumer, for example under EU or UK consumer law, are not affected.",
    ],
  },
  {
    id: "tinyhaven",
    title: "TinyHaven: quiet notes and community rules",
    paragraphs: [
      "TinyHaven lets you leave a short, anonymous note in the haven you have joined. Everyone in that haven can read it. There are no names, no replies and no way to contact another parent directly. Notes are for company, not for advice, promotion or anything aimed at another person.",
      "We have no tolerance for objectionable content or abusive behaviour. Do not post:",
    ],
    list: [
      "content that attacks, demeans or targets another person",
      "hateful content, including content targeting anyone’s identity",
      "threats of harm to anyone, including yourself or a child",
      "sexual content of any kind, and never any sexual content involving a minor",
      "content that encourages self-harm or describes how to carry it out",
      "advertising, links, spam or anything asking for money",
      "anyone’s private information, including your own",
    ],
    afterList: [
      "Every note is checked automatically before it posts and is refused if it is likely to break these rules. Automatic checking is imperfect, so every note written by someone else can be reported or its writer blocked. Reporting hides a note from you straight away, and once enough different people report it, it is hidden from everyone. Reports are reviewed, and accounts that post this material may be suspended or removed without notice.",
      "Notes are deleted about six hours after they are posted. TinyHaven is not a journal or a record.",
      "TinyHaven is company, not care. It is not a medical, counselling or emergency service, nobody monitors the havens for emergencies, and writing a note will not bring help. If you are struggling with your safety or your child’s, contact a doctor, a local crisis line or emergency services. The app links to findahelpline.com, a directory of free, confidential lines.",
    ],
  },
  {
    id: "use",
    title: "Acceptable use",
    paragraphs: ["Please do not:"],
    list: [
      "use the website or apps unlawfully, or enter information about a child you are not responsible for",
      "try to access other people’s data, get around security measures or interfere with how the apps work",
      "reverse engineer, scrape, overload, resell or copy the apps or their content, except where the law allows",
      "use our content to build a competing dataset or to train machine learning models",
      "present the apps’ guidance to others as medical advice",
    ],
  },
  {
    id: "ip",
    title: "Our intellectual property",
    paragraphs: [
      "The apps, website, guides, recipes, recommendation logic, designs and names (including TinyBundle, TinyLayers, TinyMeals, TinyBlooms, TinyNaps and TinyHaven) belong to TwoBrickLabs or its licensors. We give you a personal, non-exclusive, non-transferable licence to use the apps on devices you own or control, for your own family and not for commercial use.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    paragraphs: [
      "The apps rely on providers for hosting, sign-in, notifications, weather, moderation, crash reports and App Store billing. Their services follow their own terms. We are not responsible for services we do not control, including websites we link to as sources. TinyLayers weather comes from Apple Weather or MET Norway and may be unavailable or inaccurate; you can always enter a temperature yourself.",
    ],
  },
  {
    id: "changes-service",
    title: "Availability and changes to the apps",
    paragraphs: [
      "We work to keep the apps available and accurate, but we may change, suspend or stop features, with notice where the law requires it.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      "To the fullest extent the law allows, the website and apps are provided “as is” and “as available”, without warranties of any kind, including fitness for a particular purpose, accuracy or uninterrupted availability. Guidance cannot account for every situation, and automatic moderation cannot catch everything.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent the law allows, TwoBrickLabs will not be liable for indirect, incidental, special, consequential or punitive damages, or for loss of profits, data or goodwill. Our total liability for any claim is limited to the greater of what you paid us for the app concerned in the 12 months before the claim, or 50 US dollars.",
      "Nothing in these terms limits liability that the law does not allow us to limit, including for death or personal injury caused by negligence, or for fraud. If you are a consumer in the EU, the UK or Australia, the mandatory consumer protections of the country where you live still apply in full.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    paragraphs: [
      "To the extent the law allows, you agree to cover TwoBrickLabs for claims, damages and reasonable costs that arise from your misuse of the apps, what you post in TinyHaven, or your breach of these terms.",
    ],
  },
  {
    id: "ending",
    title: "Ending",
    paragraphs: [
      "You can stop using the apps and delete your account at any time. We may suspend or end access if you seriously break these terms or to protect other users, with notice where the law requires it. Sections that by their nature should continue, such as intellectual property, disclaimers and limitation of liability, still apply afterwards.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "When these terms change we update the date at the top. If a change is significant, we will tell you in the app or by email before it takes effect. If you keep using the apps after that, you accept the updated terms, except where consumer law says otherwise.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Republic of Serbia. If you are a consumer, you keep the protection of the mandatory laws of the country where you live, and you can bring proceedings in your local courts.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about these terms: support@twobricklabs.com. Safety concerns about something you saw in TinyHaven: support@twobricklabs.com. TwoBrickLabs, Serbia, https://www.twobricklabs.com.",
    ],
  },
];
