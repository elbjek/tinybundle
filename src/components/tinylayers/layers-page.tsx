import Image from "next/image";
import Link from "next/link";
import { LayersMark } from "@/components/tinylayers/mark";
import { ModeIcon, type ModeIconName } from "@/components/tinylayers/mode-icons";
import { layersArticles } from "@/lib/tinylayers/articles";
import { layersFaqs } from "@/lib/tinylayers/faqs";

const modes: {
  title: string;
  text: string;
  icon: ModeIconName;
  tint: string;
  ink: string;
}[] = [
  {
    title: "Sleep",
    text: "Room temperature in, plain-English layers and TOG out — so you can close the nursery door calm.",
    icon: "moon",
    tint: "bg-[#F5E9D4]",
    ink: "text-[#C99048]",
  },
  {
    title: "Naps",
    text: "Daytime settles need the same care as night. Get a nap outfit that matches the room you are actually in.",
    icon: "nap",
    tint: "bg-[#F5E9D4]",
    ink: "text-[#C99048]",
  },
  {
    title: "Going out",
    text: "Outdoor weather for walks and errands, without using the forecast to guess how warm the nursery should feel.",
    icon: "sun",
    tint: "bg-layers-green-tint",
    ink: "text-layers-green",
  },
  {
    title: "Stroller",
    text: "Layering guidance for fresh-air rides — warm enough outside, without overheating under blankets and hoods.",
    icon: "stroller",
    tint: "bg-layers-green-tint",
    ink: "text-layers-green",
  },
  {
    title: "Carrier",
    text: "Close-contact warmth is different. TinyLayers accounts for shared body heat when baby is on you.",
    icon: "carrier",
    tint: "bg-layers-green-tint",
    ink: "text-layers-green",
  },
  {
    title: "Car seat",
    text: "Safer dressing for the ride — including why bulky coats and harnesses do not mix.",
    icon: "carseat",
    tint: "bg-[#E4EDF3]",
    ink: "text-layers-blue",
  },
];
const steps = [
  {
    n: "01",
    title: "Choose the situation",
    text: "Sleep, nap, going out, stroller, carrier, or car seat — pick the moment you are dressing for.",
  },
  {
    n: "02",
    title: "Add age and temperature",
    text: "Room temperature for sleep and naps. Outdoor conditions for outings. Age adjusts the recommendation.",
  },
  {
    n: "03",
    title: "Get a calm answer",
    text: "Plain-English layers first, TOG as a helper second. Then confirm with the chest check after settling.",
  },
];

export function LayersPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Modes />
      <Guide />
      <Safety />
      <Faq />
      <FinalCta />
      <BundleNote />
    </>
  );
}

function Hero() {
  return (
    <section className="px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_1.03fr] lg:gap-10">
        <div className="max-w-xl">
          <LayersMark className="h-[4.5rem] w-[4.5rem] sm:h-24 sm:w-24" />
          <h1
            id="hero-title"
            className="mt-7 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-layers-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Dress your baby
            <br />
            with confidence.
          </h1>
          <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-layers-muted sm:text-lg">
            Know what your baby should wear for tonight&rsquo;s room, today&rsquo;s
            walk, and every nap. Close the nursery door calm.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              className="inline-flex h-14 items-center gap-2.5 rounded-[10px] bg-black py-2 pl-3.5 pr-[18px] text-white transition-opacity hover:opacity-90"
              href="https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063"
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
            <div className="hidden h-14 items-center gap-2.5 rounded-[10px] border border-layers-border bg-layers-card py-1.5 pl-1.5 pr-3.5 sm:flex">
              <Image
                src="/tinylayers/app-store-qr.svg"
                alt="QR code linking to TinyLayers on the App Store"
                width={44}
                height={44}
                className="h-11 w-11 rounded-md bg-white"
              />
              <p className="text-[11px] font-bold leading-snug text-layers-muted">
                Scan to
                <br />
                download
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(64,56,44,0.22)]">
            <Image
              src="/tinylayers/hero-nursery.jpg"
              alt="Cozy nursery setup with layered sleepwear and a calm sleep space"
              width={1448}
              height={1086}
              priority
              className="h-auto w-full"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-2 shadow-md sm:left-6 sm:top-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-layers-muted">Room</p>
              <p className="text-sm font-extrabold text-layers-ink">22°C</p>
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3.5 py-2 shadow-md sm:right-6 sm:top-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-layers-muted">Tonight</p>
              <p className="text-sm font-extrabold text-layers-ink">1.0 TOG + bodysuit</p>
            </div>
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-4 py-3 shadow-md sm:bottom-6 sm:left-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-layers-green">Sleep check</p>
              <p className="text-base font-extrabold text-layers-ink">Light sack</p>
              <p className="text-xs font-semibold text-layers-muted">Short sleeve layer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const cards = [
    {
      title: "Know, don't guess",
      text: "Room is 24° tonight? You'll know it's the light sack with a short-sleeve bodysuit and nothing else.",
      tint: "bg-layers-green-tint text-layers-green",
      icon: (
        <path
          d="M20.5 13.8A8.5 8.5 0 1 1 10.2 3.5a7 7 0 0 0 10.3 10.3Z"
          stroke="currentColor"
          strokeWidth={1.9}
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "It learns your baby",
      text: "Tell it how each night went, and the answers shape themselves around your child, not the average one.",
      tint: "bg-layers-blue-tint text-layers-blue",
      icon: (
        <>
          <path
            d="M12 3.2l1.9 5.4 5.4 1.9-5.4 1.9L12 17.8l-1.9-5.4L4.7 10.5l5.4-1.9L12 3.2Z"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinejoin="round"
          />
          <path
            d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </>
      ),
    },
    {
      title: "Every situation",
      text: "Sleep, naps, going out, stroller, carrier, and car seat: one calm answer for each, in one glance.",
      tint: "bg-[#f7edd8] text-layers-gold",
      icon: (
        <>
          <path
            d="M12 3.5l8.5 4.5-8.5 4.5L3.5 8 12 3.5Z"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinejoin="round"
          />
          <path
            d="M4.5 12.5 12 16.5l7.5-4"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 16.5 12 20.5l7.5-4"
            stroke="currentColor"
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
  ];

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto grid w-full max-w-[1180px] gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.25rem] border border-layers-border bg-layers-card px-6 py-7 shadow-sm"
          >
            <span
              className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${card.tint}`}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                {card.icon}
              </svg>
            </span>
            <h2 className="mt-4 text-xl font-extrabold text-layers-ink">{card.title}</h2>
            <p className="mt-2 text-sm font-medium leading-relaxed text-layers-muted">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-layers-blue">
          How it works
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-layers-ink sm:text-4xl">
          One practical question. A calm answer in three steps.
        </h2>
        <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-layers-muted">
          TinyLayers is a baby outfit guide for real nights and real outings — built for
          tired parents who need plain English, not another chart to memorize.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rounded-[1.25rem] border border-layers-border bg-layers-card px-6 py-7">
              <span className="text-sm font-extrabold text-layers-gold">{step.n}</span>
              <h3 className="mt-3 text-lg font-extrabold text-layers-ink">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-layers-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Modes() {
  return (
    <section id="modes" className="bg-layers-sand/70 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-layers-green">
          Six modes
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-layers-ink sm:text-4xl">
          Dressing guidance for the moments that keep you guessing.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="rounded-[1.25rem] bg-layers-card px-6 py-7 shadow-sm">
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${mode.tint} ${mode.ink}`}
              >
                <ModeIcon name={mode.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-extrabold text-layers-ink">{mode.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-layers-muted">{mode.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guide() {
  return (
    <section id="guide" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-layers-blue">
              The TinyLayers Guide
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-layers-ink sm:text-4xl">
              Calm answers for the questions parents google at 2am.
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-layers-muted">
              Plain-English articles on sleepwear, room temperature, overheating signs, car
              seats, and winter walks — grounded in published safe-sleep guidance.
            </p>
          </div>
          <Link
            href="/tinylayers/blog"
            className="shrink-0 text-sm font-extrabold text-layers-blue hover:underline"
          >
            Browse all guides →
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {layersArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/tinylayers/blog/${article.slug}`}
              className="group rounded-[1.25rem] border border-layers-border bg-layers-card px-6 py-7 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-extrabold text-layers-ink group-hover:text-layers-blue">
                {article.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-layers-muted">
                {article.excerpt}
              </p>
              <span className="mt-4 inline-block text-sm font-extrabold text-layers-blue">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Safety() {
  return (
    <aside
      id="safety"
      className="mx-auto my-4 w-full max-w-[1180px] rounded-[1.25rem] border border-layers-green/25 bg-layers-green-tint px-6 py-5 text-sm font-medium leading-relaxed text-layers-green-deep sm:px-8"
      aria-label="Safety note"
    >
      TinyLayers is built on common TOG sleepwear guidance and safe-sleep recommendations
      from trusted public health sources, including AAP guidance. It provides general
      dressing guidance only and does not replace medical advice. Always check your baby&rsquo;s
      chest or back of neck after settling.
    </aside>
  );
}

function Faq() {
  return (
    <section id="faq" className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-layers-ink sm:text-4xl">
          Questions, answered
        </h2>
        <div className="mt-10 space-y-3">
          {layersFaqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-layers-border bg-layers-card px-5 py-4 open:shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-extrabold text-layers-ink [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-layers-gold transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm font-medium leading-relaxed text-layers-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-5 pb-16 sm:px-8 sm:pb-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-layers-blue px-7 py-10 text-white sm:flex-row sm:items-center sm:px-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Close the nursery door calm tonight.
          </h2>
          <p className="mt-3 text-sm font-medium text-white/85 sm:text-base">
            Download TinyLayers for iOS and get plain-English outfit guidance for sleep,
            naps, and every outing in between.
          </p>
        </div>
        <a
          href="https://apps.apple.com/us/app/tinylayers-baby-outfit-guide/id6787217063"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-white px-6 py-3.5 text-sm font-extrabold text-layers-blue-deep transition-opacity hover:opacity-90"
        >
          Download on the App Store
        </a>
      </div>
    </section>
  );
}

function BundleNote() {
  return (
    <section className="border-t border-layers-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm font-medium text-layers-muted">
          TinyLayers is part of{" "}
          <Link href="/" className="font-extrabold text-layers-ink hover:underline">
            TinyBundle
          </Link>
          — four apps for the tiny moments of parenting, from late nights to everyday meals.
        </p>
        <Link href="/#apps" className="text-sm font-extrabold text-layers-blue hover:underline">
          See all apps →
        </Link>
      </div>
    </section>
  );
}
