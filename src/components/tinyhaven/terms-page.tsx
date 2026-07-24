import Link from "next/link";

const updated = "July 24, 2026";

const sections: { id: string; title: string; paragraphs: string[] }[] = [
  {
    id: "agreement",
    title: "Agreement to these terms",
    paragraphs: [
      "These Terms of Use (“Terms”) govern your access to and use of the TinyHaven mobile app and related TinyHaven pages on tinybundle.app (together, “TinyHaven”), published by Two Brick Labs (“we”, “us”).",
      "By downloading, accessing, or using TinyHaven, you agree to these Terms. If you do not agree, do not use TinyHaven.",
    ],
  },
  {
    id: "what",
    title: "What TinyHaven is",
    paragraphs: [
      "TinyHaven is a late-night companion for parents: anonymous check-ins, soft presence with others who are awake, and quiet support gestures. It is not a medical service, crisis hotline, therapy platform, or emergency response system.",
      "If you or someone else is in danger, or you need urgent medical or mental-health help, contact local emergency services or a qualified professional immediately. TinyHaven does not replace clinical care.",
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be old enough to form a binding contract in your place of residence (and at least 18, or the age of majority where you live, if higher) to use TinyHaven. The app is intended for parents and caregivers, not for children.",
      "You are responsible for the device, Apple ID, and network connection you use to access TinyHaven.",
    ],
  },
  {
    id: "account",
    title: "Accounts and access",
    paragraphs: [
      "Some features may require an account or Sign in with Apple / Google. Keep your credentials secure and tell us promptly if you think your account has been compromised.",
      "You are responsible for activity under your account. We may suspend or terminate access if we reasonably believe these Terms, other users’ safety, or the integrity of TinyHaven is at risk.",
    ],
  },
  {
    id: "conduct",
    title: "Community and conduct",
    paragraphs: [
      "TinyHaven is built to feel calm and anonymous. Do not use it to harass, threaten, exploit, dox, spam, scam, or sexually solicit anyone. Do not post illegal content, or content that glorifies harm to children or others.",
      "Do not attempt to reverse-engineer, scrape, overload, or disrupt TinyHaven, or to bypass technical limits. Do not misrepresent who you are in a way that endangers others.",
      "We may remove content, limit features, or end access when we believe it is necessary to protect the space. Night content is designed to be temporary; do not expect a permanent public archive.",
    ],
  },
  {
    id: "content",
    title: "Your content and our license",
    paragraphs: [
      "You keep ownership of the check-in choices, notes, and soft signals you submit. You grant Two Brick Labs a worldwide, non-exclusive, royalty-free license to host, process, display, and distribute that content as needed to operate TinyHaven (including showing anonymous presence to others in a haven).",
      "You represent that you have the rights to submit what you share and that it does not violate law or someone else’s rights.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and purchases",
    paragraphs: [
      "TinyHaven may offer free features and paid Premium plans. Purchases made through the Apple App Store are billed by Apple under Apple’s terms. Manage, cancel, or request refunds through your Apple ID / App Store settings according to Apple’s policies.",
      "Prices and plan details may change. We will describe material changes in the app or store listing when required.",
    ],
  },
  {
    id: "ip",
    title: "Our intellectual property",
    paragraphs: [
      "TinyHaven, including its name, logos, design, text, and software (excluding your content), is owned by Two Brick Labs or its licensors. These Terms do not give you ownership of our brand or code — only a limited, personal, non-transferable license to use the app as offered.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    paragraphs: [
      "TinyHaven may rely on Apple, Google, hosting, analytics for crashes, or other providers. Their services are governed by their own terms and privacy policies. We are not responsible for third-party services we do not control.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    paragraphs: [
      "TinyHaven is provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not guarantee uninterrupted access, that the night haven will always feel the same, or that presence counts or soft signals will meet every emotional need. Parenting nights are hard; TinyHaven is a companion tool, not a promise of outcomes.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent permitted by law, Two Brick Labs and its officers, employees, and partners will not be liable for indirect, incidental, special, consequential, or punitive damages, or for loss of profits, data, or goodwill, arising from your use of TinyHaven.",
      "Our total liability for any claim relating to TinyHaven is limited to the greater of (a) the amounts you paid us for TinyHaven in the 12 months before the claim, or (b) fifty US dollars (US $50), except where liability cannot be limited under applicable law.",
    ],
  },
  {
    id: "indemnity",
    title: "Indemnity",
    paragraphs: [
      "You agree to defend and indemnify Two Brick Labs against claims, damages, and expenses (including reasonable legal fees) arising from your misuse of TinyHaven, your content, or your breach of these Terms, to the extent allowed by law.",
    ],
  },
  {
    id: "changes",
    title: "Changes",
    paragraphs: [
      "We may update TinyHaven and these Terms. When we make material changes, we will update the “Last updated” date and may provide notice in the app or by email. Continued use after changes take effect means you accept the updated Terms, except where local law requires a different process.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    paragraphs: [
      "You may stop using TinyHaven at any time and may request account deletion as described in our Privacy Policy. We may suspend or end access if you violate these Terms or if we discontinue the product. Sections that by nature should survive (including intellectual property, disclaimers, liability limits, and indemnity) will survive termination.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    paragraphs: [
      "These Terms are governed by the laws applicable where Two Brick Labs is established, without regard to conflict-of-law rules, except where mandatory consumer protections in your country say otherwise. Courts in that jurisdiction will hear disputes, unless a mandatory local forum applies to you as a consumer.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Questions about these Terms: contact@twobricklabs.com. Two Brick Labs — https://www.twobricklabs.com. Privacy details are in the TinyHaven Privacy Policy.",
    ],
  },
];

export function HavenTermsPage() {
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
          Terms of Use
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-haven-muted">
          TinyHaven by Two Brick Labs. Last updated {updated}.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-haven-soft">
          These terms cover the TinyHaven app and related TinyHaven pages on{" "}
          <Link href="/tinyhaven" className="font-semibold text-haven-amber-text hover:underline">
            tinybundle.app/tinyhaven
          </Link>
          . Read together with our{" "}
          <Link
            href="/tinyhaven/privacy"
            className="font-semibold text-haven-amber-text hover:underline"
          >
            Privacy Policy
          </Link>
          . This page is general information, not legal advice.
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
