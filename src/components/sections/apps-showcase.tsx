import Link from "next/link";
import { apps } from "@/lib/apps";
import { AppIcon } from "@/components/app-icons";

export function AppsShowcase() {
  return (
    <section id="apps" className="bg-[#fffcf6] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
          Four apps. One mission.
        </h2>
        <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-muted sm:text-base">
          Parenting is beautiful, messy and non-stop. We&rsquo;re here for
          every tiny moment in between.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => {
            const titleClass =
              app.slug === "tinyhaven" ? "text-cream" : "text-ink";
            const body = (
              <>
                <AppIcon slug={app.slug} className="h-14 w-14" />
                <h3 className={`mt-5 text-xl font-extrabold ${titleClass}`}>
                  {app.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${app.cardTextClassName}`}>
                  {app.card}
                </p>
                <span
                  className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold ${app.cardLinkClassName}`}
                >
                  {app.comingSoon ? "Coming soon" : "Learn more"}
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 10h13m0 0-4.5-4.5M16 10l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </>
            );

            const className = `flex flex-col items-center rounded-2xl px-6 py-9 text-center shadow-sm ${app.cardClassName} group transition-transform duration-300 hover:-translate-y-1 hover:shadow-md`;

            return (
              <Link key={app.slug} href={`/${app.slug}`} className={className}>
                {body}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
