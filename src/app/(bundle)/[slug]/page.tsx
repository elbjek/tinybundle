import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { AppIcon } from "@/components/app-icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return apps
    .filter(
      (app) =>
        app.slug !== "tinyhaven" &&
        app.slug !== "tinylayers" &&
        app.slug !== "tinyblooms",
    )
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
    alternates: { canonical: `/${app.slug}` },
    openGraph: {
      type: "website",
      url: `https://tinybundle.com/${app.slug}`,
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
      siteName: "TinyBundle",
    },
    twitter: {
      card: "summary_large_image",
      title: `${app.name} — ${app.tagline}`,
      description: app.description,
    },
    ...(app.comingSoon
      ? { robots: { index: true, follow: true } }
      : {}),
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "tinyhaven" || slug === "tinylayers" || slug === "tinyblooms") {
    notFound();
  }
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
            {app.comingSoon ? " · Coming soon" : ""}
          </p>
          <h1 className={`mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl ${app.theme.heroHeading}`}>
            {app.tagline}
          </h1>
          <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${app.theme.heroText}`}>
            {app.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {app.comingSoon ? (
              <span className="rounded-full bg-amber/80 px-6 py-3.5 text-sm font-bold text-navy shadow-sm">
                Coming soon
              </span>
            ) : (
              <a
                href="#features"
                className="rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-amber-deep hover:text-cream"
              >
                Discover {app.name}
              </a>
            )}
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
          <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
            Made for tiny moments.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {app.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-line bg-blush px-7 py-9 text-center"
              >
                <h3 className="text-lg font-extrabold text-ink">
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
          <h2 className="text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            One of four. Better together.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {otherApps.map((other) => {
              const titleClass =
                other.slug === "tinyhaven" ? "text-cream" : "text-ink";
              const className = `flex flex-col items-center rounded-2xl px-6 py-8 text-center shadow-sm ${other.cardClassName} ${
                other.comingSoon && other.slug !== "tinyblooms"
                  ? ""
                  : "group transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              }`;
              const body = (
                <>
                  <AppIcon slug={other.slug} className="h-10 w-10" />
                  <h3 className={`mt-4 text-lg font-extrabold ${titleClass}`}>
                    {other.name}
                  </h3>
                  <span className={`mt-2 text-xs font-bold ${other.cardLinkClassName}`}>
                    {other.comingSoon ? "Coming soon →" : "Learn more →"}
                  </span>
                </>
              );

              if (other.comingSoon && other.slug !== "tinyblooms") {
                return (
                  <div key={other.slug} className={className} aria-label={`${other.name}, coming soon`}>
                    {body}
                  </div>
                );
              }

              return (
                <Link key={other.slug} href={`/${other.slug}`} className={className}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
