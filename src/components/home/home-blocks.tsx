import Link from "next/link";
import { BundleQuads } from "@/components/app-identity";
import { launch } from "@/components/home/launch-copy";
import { WaitlistForm } from "@/components/site/waitlist-form";
import { CONTACT_EMAIL, getApp, type AppSlug } from "@/lib/apps";

const STEPS = [
  { color: "#55915E", title: "Add your baby", text: "Their name and age, so each app matches this month, not last. Syncing between the apps is something we’re exploring." },
  { color: "#D17A2A", title: "Pick the moment", text: "Getting dressed for bed, lunchtime, playtime or the 2 am feed. Each app does one job." },
  { color: "#3D6DA8", title: "Get one clear answer", text: "What to put on, what to cook, what to play, or when they last ate. Then back to your day." },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16 py-[clamp(64px,8vw,104px)]">
      <div className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)]">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="min-w-0 flex-[1_1_min(100%,520px)]">
            <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.09em] text-tb-muted">How it works</p>
            <h2 className="m-0 mt-2.5 max-w-[20ch] text-balance text-[clamp(30px,4vw,44px)] font-extrabold leading-[1.1]">
              Open the app for the moment you&rsquo;re in.
            </h2>
          </div>
          <p className="m-0 min-w-0 max-w-[42ch] flex-[0_1_400px] text-pretty text-base leading-relaxed text-tb-body">
            Set it up once, in about a minute. After that, each app gives you one clear answer and lets you get back to your
            day.
          </p>
        </div>
        <ol className="m-0 mt-7 grid list-none gap-3.5 p-0 min-[720px]:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} className="min-w-0 rounded-[22px] bg-white p-6 shadow-[0_2px_10px_rgba(90,60,20,0.06)]">
              <span
                aria-hidden="true"
                className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[13px] font-extrabold text-white"
                style={{ background: step.color }}
              >
                {i + 1}
              </span>
              <h3 className="m-0 mt-3.5 text-[19px] font-extrabold">{step.title}</h3>
              <p className="m-0 mt-[7px] text-pretty text-[14.5px] leading-[1.6] text-tb-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** The dark launch-list band. Every "Tell me when it launches" button on the site points here. */
export function JoinBand() {
  return (
    <section id="join" aria-labelledby="join-h" className="scroll-mt-16 pt-[clamp(56px,7vw,88px)]">
      <div className="mx-auto box-border max-w-[1180px] px-[clamp(18px,4vw,40px)]">
        <div className="relative box-border flex flex-wrap items-center gap-x-[clamp(24px,5vw,64px)] gap-y-6 overflow-hidden rounded-[28px] bg-[#232F48] p-[clamp(30px,4vw,52px)]">
          <div aria-hidden="true" className="pointer-events-none absolute -top-[50px] right-[20%] h-[140px] w-[140px] rotate-[16deg] rounded-[38px] bg-[#2C3A57]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -right-10 h-[200px] w-[200px] rounded-full bg-[#1C2639]" />
          <div aria-hidden="true" className="pointer-events-none absolute right-[38%] top-[30px] h-[9px] w-[9px] rounded-full bg-tb-amber [animation:tm-twinkle_2.4s_ease-in-out_infinite]" />
          <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
            <h2 id="join-h" className="m-0 text-balance text-[clamp(26px,3.2vw,38px)] font-extrabold leading-[1.14] text-white">
              Be first to know when new apps land.
            </h2>
            <p className="m-0 mt-3 max-w-[44ch] text-pretty text-base leading-relaxed text-white">{launch.joinText}</p>
          </div>
          <div className="relative min-w-0 flex-[1_1_min(100%,380px)]">
            <WaitlistForm
              list="TinyBundle launch"
              button="Join the list"
              placeholder="Your email address"
              hint="We only use your email for launch news and the odd tip."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type FooterLink = { href: string; label: string };

const FOOTER_APPS: AppSlug[] = ["tinynaps", "tinylayers", "tinyblooms", "tinymeals"];

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  { title: "Our apps", links: FOOTER_APPS.map((slug) => ({ href: `/${slug}`, label: getApp(slug).name })) },
  {
    title: "Guides",
    links: [
      ...FOOTER_APPS.map((slug) => ({ href: `/guides/${slug}`, label: `${getApp(slug).name} guides` })),
      { href: "/guides/tinybundle", label: "All guides" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#how", label: "About" },
      { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#faq", label: "FAQs" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

const LINK = "text-sm font-bold text-tb-body hover:text-tb-ink";

export function HomeFooter() {
  return (
    <footer className="mt-[clamp(56px,7vw,88px)]">
      <div className="mx-auto box-border grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-7 px-[clamp(18px,4vw,40px)] pb-10 pt-[clamp(32px,5vw,56px)]">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <BundleQuads />
            </svg>
            <span className="text-lg font-extrabold">TinyBundle</span>
          </div>
          <p className="m-0 mt-3 text-[13px] leading-[1.6] text-tb-muted">&copy; {new Date().getFullYear()} TwoBrickLabs</p>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex min-w-0 flex-col gap-2.5">
            <p className="m-0 text-xs font-extrabold uppercase tracking-[0.08em] text-tb-muted">{column.title}</p>
            {column.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.href} href={link.href} className={LINK}>
                  {link.label}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={LINK}>
                  {link.label}
                </a>
              ),
            )}
          </nav>
        ))}
      </div>
    </footer>
  );
}
