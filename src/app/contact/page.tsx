import type { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const SITE_URL = "https://trip-planify.vercel.app";
const PAGE_URL = `${SITE_URL}/contact`;

export const metadata: Metadata = {
  title: "Contact Trip Planify",
  description:
    "Get in touch with the Trip Planify team. We typically respond within 48 hours.",
  alternates: { canonical: PAGE_URL },
  keywords: [
    "contact Trip Planify",
    "Trip Planify contact",
    "AI travel planner support",
    "trip planner feedback",
    "contact travel planner",
  ],
  openGraph: {
    title: "Contact Trip Planify | Trip Planify",
    description:
      "Get in touch with the Trip Planify team. We typically respond within 48 hours.",
    url: PAGE_URL,
    type: "website",
    siteName: "Trip Planify",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Contact Trip Planify | Trip Planify",
    description:
      "Get in touch with the Trip Planify team. We typically respond within 48 hours.",
  },
};

export default function ContactPage() {
  return (
    <main className="travel-bg min-h-screen">
      <article className="max-w-2xl mx-auto px-4 py-10 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
        >
          ← Back to home
        </Link>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-foreground">
          Contact Trip Planify
        </h1>

        <div className="space-y-6 text-foreground/80 leading-relaxed mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            Get in touch
          </h2>
          <p>
            Have a question, found a bug, or want to share feedback? We&rsquo;d
            love to hear from you. The fastest way to reach us is by email at{" "}
            <a
              href="mailto:tripplanify.app@gmail.com"
              className="text-primary font-medium hover:underline"
            >
              tripplanify.app@gmail.com
            </a>
            .
          </p>
          <p className="text-sm text-muted-foreground">
            We typically respond within 48 hours.
          </p>
        </div>

        {/* Formspree-powered contact form.
            Replace the action URL below with your own Formspree endpoint
            (https://formspree.io/forms) to start receiving messages. */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="space-y-5"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us what's on your mind…"
              className="resize-y"
            />
          </div>

          {/* Honeypot field to reduce spam — Formspree recommends this. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      </article>
    </main>
  );
}
