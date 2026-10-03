import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppStoreBadge } from "@/components/app-store-badge";
import { MealsFooter, MealsHeader } from "@/components/tinymeals/chrome";
import { MealsMark } from "@/components/tinymeals/mark";

const APP_STORE_URL = "https://apps.apple.com/app/id6818279922";
/** Shapes the app creates (create_family_invite): 24 random bytes as hex, 6 unambiguous characters. */
const TOKEN = /^[0-9a-f]{48}$/;
const CODE = /^[A-HJ-NP-Z2-9]{6}$/;

export const metadata: Metadata = {
  title: { absolute: "Join your family on TinyMeals" },
  description: "Someone invited you to log your baby's meals together on TinyMeals.",
  robots: { index: false, follow: false },
};

/** Where a TinyMeals family invite link lands: get the app, then open the invite in it. */
export default async function JoinFamilyRoute(props: PageProps<"/tinymeals/join/[token]">) {
  const { token } = await props.params;
  if (!TOKEN.test(token)) notFound();
  const { code } = await props.searchParams;
  const shownCode = typeof code === "string" && CODE.test(code) ? code : null;

  return (
    <div className="min-h-screen bg-meals font-sans text-meals-ink antialiased selection:bg-meals-orange-tint selection:text-meals-orange-deep">
      <MealsHeader />
      <main id="main" className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto w-full max-w-md">
          <MealsMark className="h-16 w-16" />
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.14em] text-meals-orange-deep">
            Family invite
          </p>
          <h1 className="mt-2 text-[2rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.3rem]">
            You&rsquo;re invited to share meals on TinyMeals
          </h1>
          <p className="mt-4 text-base font-medium leading-relaxed text-meals-muted">
            Log your baby&rsquo;s meals together and see each other&rsquo;s updates as they happen.
          </p>

          <ol className="mt-8 space-y-4">
            <li className="rounded-[1.5rem] border border-meals-border bg-meals-card p-5">
              <p className="text-sm font-extrabold">1. Get TinyMeals</p>
              <p className="mt-1 text-sm font-medium text-meals-muted">Free on iPhone.</p>
              <div className="mt-4">
                <AppStoreBadge href={APP_STORE_URL} />
              </div>
            </li>
            <li className="rounded-[1.5rem] border border-meals-border bg-meals-card p-5">
              <p className="text-sm font-extrabold">2. Open your invite</p>
              <p className="mt-1 text-sm font-medium text-meals-muted">
                Sign in when TinyMeals asks, then tap Join family.
              </p>
              <a
                href={`tinymeals://join?invite=${token}`}
                className="mt-4 inline-flex rounded-full bg-meals-orange px-6 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-meals-orange-deep"
              >
                Open in TinyMeals
              </a>
              {shownCode ? (
                <div className="mt-5 border-t border-meals-border pt-4">
                  <p className="text-sm font-medium text-meals-muted">
                    Or enter this code in Settings &rarr; Family &rarr; Join with a code:
                  </p>
                  <p
                    className="mt-2 font-mono text-3xl font-extrabold tracking-[0.3em] text-meals-ink"
                    aria-label={`Invite code ${shownCode.split("").join(" ")}`}
                  >
                    {shownCode}
                  </p>
                </div>
              ) : null}
            </li>
          </ol>

          <p className="mt-6 text-xs font-semibold text-meals-muted">
            Invites work once and expire after 7 days. Ask for a new one if this one has stopped working.
          </p>
        </div>
      </main>
      <MealsFooter />
    </div>
  );
}
