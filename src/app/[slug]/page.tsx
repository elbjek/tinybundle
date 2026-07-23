import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { AppIcon } from "@/components/app-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const otherApps = apps.filter((a) => a.slug !== app.slug);

  return (
    <main>
      <section className={`${app.theme.hero} py-20 sm:py-28`}>
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center sm:px-8">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-cream shadow-sm">
            <AppIcon slug={app.slug} className="h-11 w-11" />
          </span>
          <p className={`mt-6 text-sm font-bold uppercase tracking-[0.2em] ${app.theme.accent}`}>
            {app.name}
          </p>
          <h1 className={`mt-4 text-4xl font-bold tracking-tight sm:text-5xl ${app.theme.heroHeading}`}>
            {app.tagline}
          </h1>
          <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${app.theme.heroText}`}>
            {app.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#features"
              className="rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-amber-deep hover:text-cream"
            >
              Discover {app.name}
            </a>
            <Link
              href="/#apps"
              className={`text-sm font-bold underline-offset-4 hover:underline ${app.theme.accent}`}
            >
              Part of the Bundle
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#fffcf6] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Made for tiny moments.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {app.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-line bg-blush px-7 py-9 text-center"
              >
                <h3 className="text-lg font-bold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffcf6] pb-20 sm:pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            One of four. Better together.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {otherApps.map((other) => (
              <Link
                key={other.slug}
                href={`/${other.slug}`}
                className={`group flex flex-col items-center rounded-2xl px-6 py-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${other.cardClassName}`}
              >
                <AppIcon slug={other.slug} className="h-10 w-10" />
                <h3
                  className={`mt-4 text-lg font-bold ${
                    other.slug === "tinyhaven" ? "text-cream" : "text-ink"
                  }`}
                >
                  {other.name}
                </h3>
                <span className={`mt-2 text-xs font-bold ${other.cardLinkClassName}`}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
