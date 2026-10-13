import type { LegalSection } from "@/components/legal-page";

/** One privacy policy for the website and every app. App sections keep the ids old per-app links redirect to. */
export const PRIVACY_UPDATED = "13 October 2026";

export const PRIVACY_INTRO =
  "This policy explains what TwoBrickLabs collects when you use tinybundle.app and our apps (TinyLayers, TinyMeals and TinyHaven, and TinyBlooms and TinyNaps when they launch), why we collect it, who helps us process it and the choices you have. It is written to be read, not skimmed past.";

export const PRIVACY_SHORT = [
  {
    h: "No ads, no selling",
    p: "We never sell your information, show ads or track you across other companies’ apps and websites.",
  },
  {
    h: "Only what each app needs",
    p: "Each app collects the minimum it needs to work. The sections below say exactly what, app by app.",
  },
  {
    h: "Yours to export or delete",
    p: "Delete your data or your account inside each app, or email us and we will do it for you.",
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    paragraphs: [
      "TinyBundle is a family of parenting apps made by TwoBrickLabs, based in Serbia (“we”, “us”). TwoBrickLabs is the controller of the personal data described in this policy, for the tinybundle.app website and for each app.",
      "We follow Serbia’s Law on Personal Data Protection and, for people in the European Union and the United Kingdom, the EU and UK GDPR. Privacy questions and requests: support@twobricklabs.com.",
    ],
  },
  {
    id: "never",
    title: "What we never do",
    paragraphs: [],
    list: [
      "Sell or rent your personal information.",
      "Show ads, or add advertising SDKs to our apps.",
      "Track you across other companies’ apps and websites, or build advertising profiles.",
      "Use information about your baby for anything other than running the app for you and the people you invite.",
    ],
  },
  {
    id: "website",
    title: "The tinybundle.app website",
    paragraphs: [
      "You can read the website without giving us anything. We do not use advertising or analytics cookies on it.",
      "Our hosting provider, Vercel, processes technical request data such as your IP address and browser type to deliver pages and keep the site secure.",
      "If you ask to hear about a launch, the form opens your own email app with a message to us. We keep your email address to send that launch news and delete it when you ask us to.",
    ],
  },
  {
    id: "tinylayers",
    title: "What TinyLayers collects",
    paragraphs: [
      "TinyLayers needs an account. It is local-first: your data is stored on your phone and, with Premium sync, in our database.",
    ],
    list: [
      "Account: your email address, how you signed in (Apple, Google or an emailed 6-digit code) and the account identifier our sign-in provider creates. There are no passwords. If you sign in with Apple or Google and choose to share your name, we store it with your account.",
      "Your baby’s profile, entered by you: a first name or nickname, an age band, an optional birth date, and whether your baby tends to run warm, typical or cool.",
      "Check-ins: the mode (such as sleep, in arms, stroller, carrier or car seat), the temperature, how your baby felt, what they wore and when.",
      "Settings: temperature unit, appearance and reminders. Reminders are scheduled on your phone and nothing about them is sent to us.",
      "Approximate location, only if you ask for outdoor weather and allow it. Only coarse coordinates are sent to our weather service. We do not store your location in your account or track your movements.",
      "Purchase status: whether you have Premium, a trial or a lifetime unlock, managed through Apple and RevenueCat.",
    ],
    afterList: [
      "TinyLayers does not include a third-party crash reporting or analytics SDK. If that changes, we will update this policy and the App Store privacy answers first.",
    ],
  },
  {
    id: "tinymeals",
    title: "What TinyMeals collects",
    paragraphs: [
      "You can use TinyMeals without an account. Your baby’s profile (name, birth date and feeding stage), the foods they have tried and how they went, allergens, foods to avoid, meal logs, saved recipes and reminder settings are stored on your phone and are not sent to us unless you sign in.",
    ],
    list: [
      "Account: your email address (if you sign in with an email code) or the identifier and email Apple shares when you use Sign in with Apple, plus your name if you choose to share it.",
      "Synced food history: when you are signed in, your babies’ profiles, meal and food logs and saved recipes are stored on our servers so they sync between your devices and with your family.",
      "Family sharing: if you create or join a family, we store who belongs to it, the display name you choose and invite codes. Everyone in your family can see the shared babies, logs and saved recipes, and your name on the entries you add.",
      "Notifications: to send family updates, we store your device’s push token, whether family updates are on, your quiet hours and your time zone.",
      "Purchase status: whether Premium is active and when it renews or ends, through RevenueCat. We never see your card details.",
      "Usage events: simple events such as onboarding completed, meal logged or paywall viewed, with a random app identifier. We do not attach your email, your baby’s name or the contents of your logs to them.",
      "Crash reports: the device model, operating system, app version and what the app was doing, so we can fix the problem.",
    ],
  },
  {
    id: "tinyhaven",
    title: "What TinyHaven collects",
    paragraphs: [
      "TinyHaven is built to feel anonymous: no public profiles, no follower lists and no daytime feed. Other parents in a haven may see your anonymous presence, soft gestures and quiet notes, never your email, legal name or photo.",
    ],
    list: [
      "Account and sign-in: if you create an account, an email address, identifiers from your sign-in provider (such as Apple) and basic settings.",
      "Check-ins and presence: the reason you choose (for example feeding or rocking), that you are present in a shared haven, and soft gestures such as a heart or sparkle.",
      "Quiet notes: the text you type, so it can be shown anonymously in your haven, checked for safety before it posts and, if reported, reviewed.",
      "Reports and blocks: so we can hide content for you, apply community thresholds and review abuse. Blocking never reveals anyone’s identity.",
      "Device and technical data: device type, operating system, app version, language, approximate time zone, crash logs and diagnostics.",
      "Purchase status: whether Premium is active, through the App Store. We never see your card details.",
    ],
    afterList: [
      "Every quiet note is checked automatically before it posts. We send only the note text to a third-party moderation service, never your name, email, account identifier or which haven you are in. It returns a safety score so we can allow or refuse the note, and may use the text only to provide that scoring.",
    ],
  },
  {
    id: "upcoming",
    title: "TinyBlooms and TinyNaps",
    paragraphs: [
      "TinyBlooms and TinyNaps are not out yet. Before either one launches, we will add a section here that says exactly what it collects.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    paragraphs: ["We use information only to:"],
    list: [
      "Run each app: outfit guidance, meal plans, check-ins, havens and the features you choose. Legal basis: performing our contract with you.",
      "Create and secure your account and sync your data between devices and with the people you invite. Legal basis: our contract with you, and our legitimate interest in keeping accounts secure.",
      "Fetch local weather in TinyLayers when you ask for it. Legal basis: your consent, which you can withdraw in your phone’s settings.",
      "Manage subscriptions, trials and restores. Legal basis: our contract with you, and legal duties such as tax and accounting records.",
      "Keep TinyHaven safe: check notes, honour reports and blocks, and review abuse. Legal basis: our legitimate interest in a safe community.",
      "Fix bugs and understand which parts of the apps help. Legal basis: our legitimate interest in improving the apps.",
      "Reply when you contact us, and send launch news only if you asked for it.",
    ],
    afterList: [
      "We do not carry out automated decision-making that has legal or similarly significant effects on you.",
    ],
  },
  {
    id: "processors",
    title: "Who processes it for us",
    paragraphs: [
      "We share information only with the providers we need, and only what each one needs. They may use it only to provide their service to us.",
    ],
    list: [
      "Supabase: database, sign-in and server functions for TinyLayers and TinyMeals, hosted in London, United Kingdom.",
      "RevenueCat (United States): subscriptions for TinyLayers and TinyMeals, using an app-user identifier and purchase status. It does not receive your baby’s data.",
      "Apple: App Store payments, Sign in with Apple and push notifications. Google: Sign in with Google in TinyLayers, if you choose it.",
      "Resend (United States): delivers TinyLayers sign-in code emails.",
      "MET Norway: weather for TinyLayers, receiving only approximate coordinates with no account identifier.",
      "PostHog (United States) and Sentry: usage events and crash reports for TinyMeals. Expo: push notifications for TinyMeals.",
      "A content moderation service: scores TinyHaven note text for safety. Email us if you want to know the current provider.",
      "Vercel: hosts the tinybundle.app website.",
    ],
    afterList: [
      "We may also disclose information if the law requires it, to protect someone’s safety or to defend our legal rights. If TwoBrickLabs is involved in a merger or acquisition, information may transfer with continued protection.",
    ],
  },
  {
    id: "transfers",
    title: "Where it is stored and international transfers",
    paragraphs: [
      "Synced TinyLayers and TinyMeals data is stored in the United Kingdom. Some providers process limited data in the United States or other countries where they operate. Where personal data leaves Serbia, the EEA or the UK for a country without an adequacy decision, we rely on appropriate safeguards such as the European Commission’s Standard Contractual Clauses, the UK addendum and, where a provider is certified, the EU-US Data Privacy Framework. You can ask us for a copy of the relevant safeguards.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    paragraphs: [],
    list: [
      "On your phone: until you delete it in the app or delete the app.",
      "Accounts and synced data: while your account exists. When you delete your account, we delete your account and the data tied to it. In TinyMeals, if you own a family that still has other members, ownership passes to the next member so the shared food history stays with them.",
      "TinyHaven notes: deleted about six hours after they are posted, and your presence in a haven ends by 6am in your own time zone. A reported note may be kept longer, only as long as needed to review it.",
      "Usage events, crash reports and diagnostics: only as long as they are useful for fixing and improving the apps.",
      "Purchase records: kept by Apple and RevenueCat as tax, accounting and fraud-prevention rules require.",
      "Launch list emails: until the launch you asked about, or until you ask us to remove you.",
      "Support emails: up to 2 years after your last message, then deleted.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "Our apps are for parents and caregivers aged 18 or over. They are not directed at children, and we do not knowingly collect information from children. Information about a baby is entered by their parent or caregiver, is visible only to them and the people they invite, and is never used for advertising or profiling.",
      "We do not require a real name or an exact birth date where an app can work without one. If you think a child has given us information, contact us and we will delete it.",
    ],
  },
  {
    id: "rights",
    title: "Your rights",
    paragraphs: [
      "Depending on where you live, including under Serbian law, the EU and UK GDPR and US state privacy laws, you can ask to access, correct, delete or receive a copy of your information, restrict or object to some uses, and withdraw consent at any time. We honour these requests for everyone, wherever you live.",
      "Use the controls in each app (for example export your food history in TinyMeals, or delete your data or account in Settings), or email support@twobricklabs.com. We reply within one month, or sooner where the law requires. We may confirm that you control the account before acting. We never treat you differently for using a privacy right.",
      "You can complain to a data protection authority: in Serbia, the Commissioner for Information of Public Importance and Personal Data Protection; in the UK, the Information Commissioner’s Office; in the EU, your national authority. We would like the chance to fix the problem first.",
    ],
  },
  {
    id: "not-medical",
    title: "Not a medical record",
    paragraphs: [
      "What you log in our apps, such as foods, reactions, sleep, outfits or activities, is for your own reference. It is not a medical record, we do not review it, and we do not use it to assess, diagnose or advise on your child’s health. Share anything that worries you with your doctor or health visitor.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "Information is encrypted in transit, and our database rules mean your synced data can be read only by your account and, where you share it, your family. Sign-in is passwordless or through Apple and Google. No system is perfectly secure, so please keep a passcode on your phone. If a breach affects your personal data, we will tell you and the relevant authorities as the law requires.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "When this policy changes we update the date at the top. If a change is significant, we will tell you in the app or by email before it takes effect.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Privacy questions and requests: support@twobricklabs.com. Everything else: contact@twobricklabs.com. TwoBrickLabs, Serbia, https://www.twobricklabs.com.",
    ],
  },
];
