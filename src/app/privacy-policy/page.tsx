import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://trip-planify.vercel.app";
const PAGE_URL = `${SITE_URL}/privacy-policy`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Trip Planify — how we handle your data. We don't store your trip inputs, require no login, and use cookies only for analytics and ads.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "Trip Planify privacy policy",
    "privacy policy",
    "AI travel planner privacy",
    "data privacy",
    "no login travel planner",
    "trip planner data",
    "cookies",
  ],
  openGraph: {
    title: "Privacy Policy | Trip Planify",
    description:
      "How Trip Planify handles your data. We don't store trip inputs, require no login, and use cookies only for analytics and ads.",
    url: PAGE_URL,
    type: "website",
    siteName: "Trip Planify",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Trip Planify",
    description:
      "How Trip Planify handles your data. We don't store trip inputs, require no login, and use cookies only for analytics and ads.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="travel-bg min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-10">
          Last Updated: July 2025
        </p>

        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <p>
            Your privacy matters to us. This Privacy Policy explains how Trip
            Planify (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
            handles information when you use our website at{" "}
            <a href={SITE_URL} className="text-primary hover:underline">
              trip-planify.vercel.app
            </a>
            . Because Trip Planify is built to be a no-login, no-database
            planning tool, the way we handle your data is intentionally minimal.
          </p>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Data We Collect
            </h2>
            <p>
              When you fill out the trip planning form, you provide details such
              as your origin and destination cities, travel dates, budget,
              vehicle, number of travelers, and your interests. These inputs are
              used solely to generate your itinerary and are{" "}
              <strong>not stored on our servers</strong>. They exist only in your
              browser session for as long as you keep the page open or until you
              clear your browser data. No login or account is required to use
              Trip Planify, and we do not collect names, emails, or any other
              personal identifier when you generate a plan.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              AI Processing
            </h2>
            <p>
              Trip Planify uses a third-party AI API (OpenRouter) to process your
              trip request and generate your plan. When you submit the form,
              your inputs are transmitted to this AI provider for processing and
              returned to you as your itinerary. We do not retain the inputs or
              the generated output on our own infrastructure. Please be mindful
              not to include sensitive personal information in your trip
              request.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Cookies &amp; Analytics
            </h2>
            <p>
              We may use Google Analytics to understand how the site is used.
              Analytics data is anonymous and aggregated — it tells us things
              like how many people visit a page and which features are popular,
              but it does not identify you personally. These analytics tools may
              set cookies in your browser to function. You can disable cookies
              at any time through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Advertising
            </h2>
            <p>
              We may use Google AdSense to display ads, which can use cookies to
              serve personalized ads based on your interests. You can opt out of
              personalized advertising through Google&rsquo;s Ads Settings at{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                adssettings.google.com
              </a>
              . Third-party vendors and ad networks that serve ads on Trip
              Planify may also use cookies. We do not control the cookie
              practices of these third parties and encourage you to review their
              privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Local Storage
            </h2>
            <p>
              When you choose to save a trip plan, it is stored in your
              browser&rsquo;s local storage (localStorage) — not on our servers.
              This means your saved trips stay on your device and are accessible
              only from the same browser. Clearing your browser data or site
              storage will permanently remove them. We cannot recover saved
              trips once your local storage is cleared.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Third-Party Links
            </h2>
            <p>
              Place images shown in your generated plan are sourced from
              Wikipedia and Wikimedia Commons. We are not responsible for the
              privacy practices or content of these third-party sites. When you
              click through to an external site, you are subject to that
              site&rsquo;s own privacy policy and terms of use.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Your Rights
            </h2>
            <p>
              You can clear your saved trips at any time by clearing your
              browser&rsquo;s local storage for our site. Because we do not
              store your trip inputs or personal data on our servers, there is
              nothing for us to delete on your behalf — your data never leaves
              your browser except for the brief moment it is sent to the AI
              provider to generate your plan. You can also disable cookies in
              your browser if you prefer not to be tracked by analytics or
              advertising tools.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Children&rsquo;s Privacy
            </h2>
            <p>
              Trip Planify is not directed at children under the age of 13 and
              is not intended for use by anyone under 13. We do not knowingly
              collect personal information from children. If you believe a child
              has provided us with personal information, please contact us so we
              can take appropriate action.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &ldquo;Last
              Updated&rdquo; date. We encourage you to review this page
              periodically to stay informed about how we protect your privacy.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-3 text-foreground">
              Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how your
              data is handled, please contact us at{" "}
              <a
                href="mailto:tripplanify.app@gmail.com"
                className="text-primary hover:underline"
              >
                tripplanify.app@gmail.com
              </a>{" "}
              or through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
