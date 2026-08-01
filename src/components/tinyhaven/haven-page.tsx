import Image from "next/image";
import Link from "next/link";
import { AppIcon } from "@/components/app-icons";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/tinyhaven-late-night-parents/id6793665465";

const features = [
  {
    title: "Late-night check-in",
    text: "Tell TinyHaven what’s keeping you up — feeding, rocking, walking the hallway, or just surviving — and step into a quiet haven of parents awake for the same reason.",
    icon: HeartIcon,
  },
  {
    title: "You’re not alone",
    text: "See how many parents are here with you right now. No profiles. No followers. Just the soft proof that someone else is awake too.",
    icon: PeopleIcon,
  },
  {
    title: "Send a little light",
    text: "Leave one quiet note, or send a heart or a sparkle to someone else’s. Support without threads, replies, or the pressure to perform.",
    icon: SparkIcon,
  },
  {
    title: "A safe, quiet space",
    text: "Everything fades by morning. No ads, no rankings, no endless scroll — a peaceful space built for parents, by parents, when the house is dark.",
    icon: LockIcon,
  },
];

const steps = [
  {
    n: "01",
    title: "Open at the hard hour",
    text: "TinyHaven meets you in the night with the time, a calm breath of light, and one clear question: are you the only one awake?",
  },
  {
    n: "02",
    title: "Check in anonymously",
    text: "Choose what you’re doing. Your presence joins a temporary shared haven — no name, no photo, nothing that follows you into daylight.",
  },
  {
    n: "03",
    title: "Feel the company, then rest",
    text: "See who’s here, send a quiet signal if you want, and go to bed when you’re ready. The night ends. The session ends with it.",
  },
];

const globalStats = [
  {
    label: "Parents awake worldwide",
    value: "4,218",
    icon: "🌍",
  },
  {
    label: "Hearts sent worldwide tonight",
    value: "12,640",
    icon: "💛",
  },
  {
    label: "Little lights shared tonight",
    value: "3,091",
    icon: "✨",
  },
];

const voices = [
  {
    quote:
      "I opened it at 2:17 AM thinking I was the only person on earth still awake. I wasn’t. That was enough.",
    name: "Maya",
    when: "2:17 AM",
  },
  {
    quote:
      "It doesn’t ask me to chat. It doesn’t want a story. It just lets me sit with other parents in the dark for a minute.",
    name: "Jordan",
    when: "3:05 AM",
  },
  {
    quote:
      "The hallway walks feel less endless when I know someone else is doing the same stretch somewhere.",
    name: "Sam",
    when: "1:42 AM",
  },
];

const faqs = [
  {
    q: "What is TinyHaven?",
    a: "TinyHaven is a late-night companion app for parents. It answers one question — am I the only one awake? — through anonymous check-ins, quiet presence, and soft encouragement inside a shared haven. It is not a social network, chat app, or parenting forum.",
  },
  {
    q: "Who is TinyHaven for?",
    a: "TinyHaven is for first-time and early-years parents during night feeds, unsettled sleep, rocking, pumping, contact naps, and the lonely hours when the rest of the world feels asleep.",
  },
  {
    q: "Is TinyHaven social media?",
    a: "No. There are no profiles, followers, feeds, comments, rankings, or streaks. Check-ins are anonymous and temporary. Support is ambient — a presence count, a quiet note, a heart or sparkle — not a conversation you have to manage.",
  },
  {
    q: "What do the global stats mean?",
    a: "TinyHaven shows live worldwide presence for the night — how many parents are awake, how many hearts have been sent, and how many little lights have been shared. It’s soft proof that you’re part of a larger night, without turning the app into a feed or a map.",
  },
  {
    q: "Does TinyHaven track my location?",
    a: "No. TinyHaven is about shared night-time presence, not geography. It does not track where you are, and it is not built as a location-tracking or dating-style proximity product.",
  },
  {
    q: "What happens to my check-in in the morning?",
    a: "Nightly sessions expire by morning. Presence, notes, and reactions belong to the night and fade with it — so the haven stays calm, temporary, and free of daytime residue.",
  },
  {
    q: "Do I need an account to use TinyHaven?",
    a: "You can begin without creating an account. If you sign in later, temporary nightly activity can move to your permanent account. Account deletion removes your TinyHaven data from the service; App Store subscriptions are managed separately in the App Store.",
  },
  {
    q: "Is TinyHaven free?",
    a: "TinyHaven is designed as a focused, premium night companion. Pricing is shown in the App Store and inside the app, including trial options where available. Download availability may vary by region as the iOS release rolls out.",
  },
  {
    q: "How is TinyHaven different from TinyBundle’s other apps?",
    a: "TinyHaven holds the late nights. TinyLayers helps with dressing, TinyBlooms with everyday growth, and TinyMeals with feeding from what you have. Together they cover the tiny moments of parenting — TinyHaven is the one that sits with you in the dark.",
  },
];

export function HavenPage() {
  return (
    <>
      <Hero />
      <Features />
      <Presence />
      <HowItWorks />
      <Voices />
      <ForParents />
      <Faq />
      <FinalCta />
      <BundleNote />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(223,174,109,0.16),transparent_55%),radial-gradient(ellipse_50%_40%_at_15%_80%,rgba(143,182,155,0.06),transparent_50%),linear-gradient(180deg,#08121a_0%,#16202a_42%,#16202a_100%)]"
        aria-hidden="true"
      />
      <Starfield />
      <div
        className="haven-breathe pointer-events-none absolute -right-16 top-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(242,201,139,0.22),transparent_62%)] sm:right-[8%] sm:top-8"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-end gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center lg:gap-6 lg:pb-24 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,24rem)] xl:gap-14">
        <div className="haven-rise max-w-xl lg:pb-6">
          <div className="flex items-center gap-3">
            <AppIcon slug="tinyhaven" className="h-10 w-10" />
            <div>
              <p className="text-xl font-extrabold tracking-tight text-haven-ink">
                TinyHaven
              </p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-haven-amber-text">
                For the 2am club
              </p>
            </div>
          </div>

          <h1 className="mt-9 text-[2.7rem] font-extrabold leading-[1.05] tracking-tight text-haven-ink sm:text-5xl lg:text-[3.5rem]">
            You&rsquo;re not the only
            <br />
            <span className="whitespace-nowrap">
              one <span className="text-haven-amber">awake.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base font-medium leading-relaxed text-haven-muted sm:text-lg">
            A late-night check-in for parents in the hard hour — anonymous
            presence, quiet company, and proof that someone else is up too.
            Moonlight, not a timeline.
          </p>

          <div id="download" className="mt-9 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex h-14 items-center gap-2.5 rounded-[10px] bg-black py-2 pl-3.5 pr-[18px] text-white transition-opacity hover:opacity-90"
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-left leading-none">
                <span className="block text-[10px] font-normal tracking-[0.01em]">Download on the</span>
                <span className="mt-0.5 block text-xl font-medium tracking-[-0.02em]">App Store</span>
              </span>
            </a>
            <div className="hidden h-14 items-center gap-2.5 rounded-[10px] border border-haven-border bg-haven-elevated py-1.5 pl-1.5 pr-3.5 sm:flex">
              <Image
                src="/tinyhaven/app-store-qr.svg"
                alt="QR code linking to TinyHaven on the App Store"
                width={44}
                height={44}
                className="h-11 w-11 rounded-md bg-white"
              />
              <p className="text-[11px] font-bold leading-snug text-haven-muted">
                Scan to
                <br />
                download
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs font-semibold leading-snug text-haven-soft">
            Anonymous · your haven fades by morning
          </p>

          <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-6 gap-y-5 border-t border-haven-border/80 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-haven-soft">
                Right now
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-haven-ink">
                Parents awake
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-haven-soft">
                Anonymous
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-haven-ink">
                No profiles
              </dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-haven-soft">
                Gone by
              </dt>
              <dd className="mt-1 text-lg font-extrabold text-haven-ink">
                Morning
              </dd>
            </div>
          </dl>
        </div>

        <div
          className="haven-rise relative mx-auto w-full max-w-[270px] sm:max-w-[290px] lg:mx-0 lg:justify-self-end"
          style={{ animationDelay: "140ms" }}
        >
          <div
            className="pointer-events-none absolute -inset-x-12 bottom-2 h-28 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.65),transparent_72%)] blur-lg"
            aria-hidden="true"
          />

          {/* iPhone 15 Pro–style frame */}
          <div className="relative mx-auto aspect-[9/19.5] w-full">
            {/* Outer titanium shell */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#3a3a3c] via-[#1c1c1e] to-[#0a0a0a] p-[11px] shadow-[0_50px_100px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.18)]">
              {/* Inner bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-black ring-1 ring-black">
                {/* Screen */}
                <Image
                  src="/tinyhaven-phone.png"
                  alt="TinyHaven at 2:23 AM — glowing haven mark, 533 parents awake, and I’m awake too"
                  fill
                  priority
                  unoptimized
                  sizes="290px"
                  className="object-cover object-top"
                />

                {/* Dynamic Island */}
                <div
                  className="absolute left-1/2 top-[11px] z-20 h-[27px] w-[96px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                  aria-hidden="true"
                >
                  <span className="absolute right-[18px] top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[#0b1a22] ring-1 ring-[#1a3340]" />
                </div>

                {/* Screen gloss */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Side buttons */}
            <span
              className="absolute -left-[3px] top-[112px] h-8 w-[3px] rounded-l-sm bg-[#2c2c2e]"
              aria-hidden="true"
            />
            <span
              className="absolute -left-[3px] top-[152px] h-14 w-[3px] rounded-l-sm bg-[#2c2c2e]"
              aria-hidden="true"
            />
            <span
              className="absolute -left-[3px] top-[216px] h-14 w-[3px] rounded-l-sm bg-[#2c2c2e]"
              aria-hidden="true"
            />
            <span
              className="absolute -right-[3px] top-[168px] h-[72px] w-[3px] rounded-r-sm bg-[#2c2c2e]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="relative px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-haven-amber-text">
            What TinyHaven is
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl">
            Companionship without the crowd.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-haven-muted sm:text-lg">
            Think moonlight, not a timeline. TinyHaven gives exhausted parents a
            place to land at 2am — short, one-handed, and emotionally safe.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-haven-border bg-haven-elevated/70 px-7 py-8 transition-colors hover:border-haven-amber/35"
            >
              <f.icon className="h-7 w-7 text-haven-amber" />
              <h3 className="mt-5 text-lg font-extrabold text-haven-ink">{f.title}</h3>
              <p className="mt-2.5 text-sm font-medium leading-relaxed text-haven-muted">
                {f.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Presence() {
  return (
    <section
      id="for-parents"
      className="relative overflow-hidden border-y border-haven-border bg-haven-deep px-5 py-20 sm:px-8 sm:py-24"
    >
      <Starfield sparse />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-haven-amber-text">
          Right now
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl lg:text-[2.75rem]">
          Somewhere in the world,{" "}
          <span className="text-haven-amber">parents are awake too.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-haven-muted sm:text-lg">
          TinyHaven shows live presence across the night — feeding, rocking,
          walking, surviving — so the hard hour feels shared instead of sealed
          shut. You&rsquo;re in good company.
        </p>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {globalStats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-[1.75rem] border border-haven-border bg-haven-elevated px-6 py-8"
            >
              <span className="text-2xl" aria-hidden="true">
                {stat.icon}
              </span>
              <p className="mt-4 text-4xl font-extrabold tracking-tight text-haven-ink tabular-nums sm:text-[2.5rem]">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-semibold leading-snug text-haven-muted">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-haven-amber-text">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl">
            Three soft steps. No performance.
          </h2>
        </div>
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-3xl border border-haven-border bg-haven/40 px-6 py-8"
            >
              <span className="text-sm font-extrabold text-haven-amber">{step.n}</span>
              <h3 className="mt-4 text-lg font-extrabold text-haven-ink">{step.title}</h3>
              <p className="mt-2.5 text-sm font-medium leading-relaxed text-haven-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Voices() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-haven-amber-text">
            Quiet voices
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl">
            What parents whisper at the hard hour.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {voices.map((v) => (
            <figure
              key={v.name}
              className="flex flex-col rounded-3xl border border-haven-border bg-haven-elevated/60 px-6 py-8"
            >
              <span className="text-3xl font-extrabold leading-none text-haven-amber" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-3 flex-1 text-sm font-medium leading-relaxed text-haven-ink">
                {v.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-xs font-bold">
                <span className="text-haven-muted">{v.name}</span>
                <span className="text-haven-amber-text">{v.when}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForParents() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-haven-border bg-[linear-gradient(160deg,#1e2a36_0%,#16202a_55%,#08121a_100%)] px-7 py-12 sm:px-12 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-haven-ink sm:text-3xl">
              Made for one-handed nights and half-open eyes.
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-haven-muted sm:text-base">
              Large taps. Short copy. A single primary action. TinyHaven is
              designed for parents holding a baby in a dark room — calm contrast,
              generous spacing, and language that never asks you to perform
              wellness for an audience.
            </p>
          </div>
          <AppIcon slug="tinyhaven" className="mx-auto h-20 w-20 lg:mx-0" />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl">
          Questions, answered quietly.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-medium leading-relaxed text-haven-muted sm:text-base">
          Straight answers for parents searching for late-night support,
          anonymous companionship, and a calmer alternative to parenting social
          apps.
        </p>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-haven-border bg-haven-elevated/50 px-5 py-4 open:bg-haven-elevated"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-haven-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-haven-amber transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm font-medium leading-relaxed text-haven-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,174,109,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <AppIcon slug="tinyhaven" className="h-14 w-14" />
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-haven-ink sm:text-4xl">
          The nights are hard.{" "}
          <span className="text-haven-amber">You don&rsquo;t have to do them alone.</span>
        </h2>
        <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-haven-muted sm:text-base">
          Download TinyHaven for iOS and keep a soft light in your pocket for
          the next long night.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            className="inline-flex h-14 items-center gap-2.5 rounded-[10px] bg-black py-2 pl-3.5 pr-[18px] text-white transition-opacity hover:opacity-90"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-left leading-none">
              <span className="block text-[10px] font-normal tracking-[0.01em]">Download on the</span>
              <span className="mt-0.5 block text-xl font-medium tracking-[-0.02em]">App Store</span>
            </span>
          </a>
          <div className="hidden h-14 items-center gap-2.5 rounded-[10px] border border-haven-border bg-haven-elevated py-1.5 pl-1.5 pr-3.5 sm:flex">
            <Image
              src="/tinyhaven/app-store-qr.svg"
              alt="QR code linking to TinyHaven on the App Store"
              width={44}
              height={44}
              className="h-11 w-11 rounded-md bg-white"
            />
            <p className="text-[11px] font-bold leading-snug text-haven-muted">
              Scan to
              <br />
              download
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BundleNote() {
  return (
    <section className="border-t border-haven-border px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-haven-amber-text">
            Part of TinyBundle
          </p>
          <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-haven-muted">
            TinyHaven holds the late nights. Explore the full family of apps for
            dressing, growth, and meals — four moments, one journey.
          </p>
        </div>
        <Link
          href="/#apps"
          className="shrink-0 rounded-full border border-haven-border px-5 py-3 text-sm font-bold text-haven-ink transition-colors hover:border-haven-amber/50 hover:bg-haven-elevated"
        >
          See all TinyBundle apps
        </Link>
      </div>
    </section>
  );
}

function Starfield({ sparse = false }: { sparse?: boolean }) {
  const stars = sparse
    ? [
        [12, 18],
        [28, 42],
        [67, 22],
        [81, 58],
        [45, 70],
        [90, 35],
      ]
    : [
        [6, 10],
        [14, 22],
        [22, 8],
        [31, 34],
        [39, 16],
        [48, 28],
        [57, 11],
        [66, 38],
        [74, 18],
        [83, 30],
        [91, 14],
        [11, 48],
        [25, 56],
        [42, 62],
        [58, 52],
        [76, 64],
        [88, 46],
        [35, 44],
        [52, 8],
        [70, 50],
      ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map(([x, y], i) => (
        <span
          key={`${x}-${y}`}
          className="haven-twinkle absolute rounded-full bg-haven-ink"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            animationDelay: `${i * 0.28}s`,
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}

function HeartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20s-7.5-4.6-7.5-9.7C4.5 7.6 6.5 6 8.7 6c1.4 0 2.7.8 3.3 2 .6-1.2 1.9-2 3.3-2 2.2 0 4.2 1.6 4.2 4.3C19.5 15.4 12 20 12 20Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 19c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.5 14.2c1.7-.4 3.4.2 4.6 1.6.7.8 1.2 1.8 1.4 2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5c1 3.4 2.6 5 6 6-3.4 1-5 2.6-6 6-1-3.4-2.6-5-6-6 3.4-1 5-2.6 6-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10.5V8a4 4 0 1 1 8 0v2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export { faqs };
