import Link from "next/link";

const updated = "July 24, 2026";

const sections: { id: string; title: string; paragraphs: string[] }[] = [
  {
    id: "who",
    title: "Who we are",
    paragraphs: [
      "TinyHaven is a late-night companion app for parents, published by Two Brick Labs (“we”, “us”). This Privacy Policy explains what information we collect when you use TinyHaven, how we use it, and the choices you have.",
      "TinyHaven is designed to feel anonymous: no public profiles, no follower graphs, and no social feed that follows you into daylight. We still need a small amount of data to run the app safely and reliably.",
    ],
  },
  {
    id: "collect",
    title: "Information we collect",
    paragraphs: [
      "Account and contact details. If you create an account or contact us, we may collect an email address, authentication identifiers from your sign-in provider (such as Apple or Google), and basic account settings.",
      "Check-ins and presence. When you check in, we process the reason you select (for example feeding or rocking), that you are present in a shared haven, and soft interactions such as a heart or sparkle. We do not ask for your real name or photo for these moments.",
      "Device and technical data. Like most apps, we may collect device type, operating system, app version, language, approximate time zone, crash logs, and diagnostic events needed to keep TinyHaven working.",
      "Purchase information. If you buy a subscription through the App Store, payment is handled by Apple. We receive entitlement status (for example whether Premium is active), not your full payment card details.",
      "Communications. If you email us at contact@twobricklabs.com, we keep the content of that conversation so we can help you.",
    ],
  },
  {
    id: "use",
    title: "How we use information",
    paragraphs: [
      "We use information to operate TinyHaven: show who else is awake, power anonymous check-ins and soft support gestures, maintain accounts, process subscriptions, fix bugs, prevent abuse, and improve the product.",
      "We do not sell your personal information. We do not use TinyHaven check-ins to build advertising profiles or run third-party ad networks inside the night experience.",
      "Night content is meant to stay in the night. We design features so presence and notes are temporary and not turned into a lasting public timeline.",
    ],
  },
  {
    id: "share",
    title: "When we share information",
    paragraphs: [
      "Other parents in a haven may see anonymous presence and the soft signals you choose to send. They do not see your email, legal name, or profile photo from TinyHaven’s design of the product.",
      "Service providers help us host infrastructure, send transactional email, analyze crashes, and process App Store subscriptions. They are allowed to process data only to provide those services to us.",
      "We may disclose information if required by law, to protect someone’s safety, or to defend our legal rights. If TinyHaven or Two Brick Labs is involved in a merger or acquisition, information may transfer as part of that transaction under continued privacy protections.",
    ],
  },
  {
    id: "retention",
    title: "Retention",
    paragraphs: [
      "We keep account data while your account is active and for a reasonable period afterward if needed for security, accounting, or legal reasons.",
      "Ephemeral night activity is not intended to live forever. We delete or anonymize temporary haven content on a short schedule consistent with how TinyHaven is built — typically clearing with the morning reset described in the app.",
      "Crash logs and diagnostics are kept only as long as useful for reliability.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We use administrative, technical, and organizational measures appropriate to the sensitivity of the data — including encrypted transit and access controls. No method of transmission or storage is perfectly secure; please use a strong device passcode and keep your OS updated.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "TinyHaven is for parents and caregivers, not for children. We do not knowingly collect personal information from children under 13 (or the equivalent minimum age in your region). If you believe a child has provided us information, contact us and we will delete it.",
    ],
  },
  {
    id: "rights",
    title: "Your choices and rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or export personal information, or to object to or restrict certain processing. You can also withdraw consent where processing is based on consent.",
      "You can request deletion of your TinyHaven account and associated personal data by emailing contact@twobricklabs.com. App Store subscriptions are managed in your Apple ID settings.",
      "If we rely on cookies or similar technologies on related websites, you can control them through your browser settings.",
    ],
  },
  {
    id: "international",
    title: "International transfers",
    paragraphs: [
      "Two Brick Labs may process information in the European Economic Area, the United Kingdom, the United States, or other countries where we or our providers operate. Where required, we use appropriate safeguards for cross-border transfers.",
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
      "Questions about privacy or this policy: contact@twobricklabs.com. Controller: Two Brick Labs — https://www.twobricklabs.com.",
    ],
  },
];

export function HavenPrivacyPage() {
  return (
    <article className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(223,174,109,0.14),_transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-3xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-haven-amber-text">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-haven-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-haven-muted">
          TinyHaven by Two Brick Labs. Last updated {updated}.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-haven-soft">
          This page covers the TinyHaven app and related TinyHaven pages on{" "}
          <Link href="/tinyhaven" className="font-semibold text-haven-amber-text hover:underline">
            tinybundle.app/tinyhaven
          </Link>
          . It is general information, not legal advice.
        </p>

        <nav
          aria-label="On this page"
          className="mt-10 rounded-2xl border border-haven-border/80 bg-haven-elevated/60 px-5 py-5"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-haven-soft">
            On this page
          </p>
          <ol className="mt-3 columns-1 gap-x-8 space-y-1.5 sm:columns-2">
            {sections.map((section) => (
              <li key={section.id} className="break-inside-avoid">
                <a
                  href={`#${section.id}`}
                  className="text-sm font-semibold text-haven-muted transition-colors hover:text-haven-amber-text"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-14 space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-xl font-extrabold text-haven-ink sm:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-haven-muted sm:text-[15px]">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-16 border-t border-haven-border/70 pt-8 text-sm text-haven-soft">
          Prefer the calm product page?{" "}
          <Link href="/tinyhaven" className="font-semibold text-haven-amber-text hover:underline">
            Back to TinyHaven
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
