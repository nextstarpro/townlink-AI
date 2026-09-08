import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information — TownLink Global",
  description:
    "Opt out of the sharing of your personal information for cross-context behavioral advertising under the California Privacy Rights Act.",
};

const UPDATED = "2026-09-08";

export default function DoNotSellPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <h1 className="mb-2 font-display text-3xl font-extrabold text-brand-blue-ink md:text-5xl">
        Do Not Sell or Share My Personal Information
      </h1>
      <p className="mb-10 font-mono text-[12px] uppercase tracking-wider text-slate-500">
        Last updated · {UPDATED}
      </p>

      <div className="prose-copy space-y-8 text-text-body">
        <section>
          <p>
            California residents (and residents of other US states with
            equivalent rights) may opt out of the sharing of their personal
            information for cross-context behavioral advertising. TownLink
            Global does not sell personal information for money. We do share
            hashed identifiers with Meta Platforms for advertising conversion
            measurement, which the California Privacy Rights Act treats as
            &quot;sharing.&quot;
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            Three ways to opt out
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Global Privacy Control.</strong> If your browser sends a
              GPC signal, we automatically treat it as a valid opt-out and will
              not load the Meta Pixel or transmit identifiers for advertising
              measurement. No further action is required. Learn more at{" "}
              <a
                href="https://globalprivacycontrol.org/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                globalprivacycontrol.org
              </a>
              .
            </li>
            <li>
              <strong>Cookie banner.</strong> Click <em>Reject non-essential</em>{" "}
              in the consent banner that appears at the bottom of the site on
              your first visit. If you have already accepted, clear this
              site&apos;s browser storage and the banner will reappear on your
              next visit.
            </li>
            <li>
              <strong>Email us.</strong> Send an opt-out request to{" "}
              <a href="mailto:support@townlinkglobal.com" className="underline">
                support@townlinkglobal.com
              </a>{" "}
              from the address on file, or write to NextStar Procurement LLC,
              809 N Central Ave, Addison IL 60101. We will process your request
              within 15 business days and confirm in writing.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            Authorized agents
          </h2>
          <p>
            California residents may designate an authorized agent to submit
            an opt-out on their behalf. We will require written verification of
            the agent&apos;s authority (signed permission from the resident) and
            proof of the resident&apos;s identity before honoring the request.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            Non-discrimination
          </h2>
          <p>
            We do not deny services, charge different prices, or provide a
            different level of quality to anyone who exercises a privacy right.
          </p>
        </section>

        <section>
          <p className="text-sm text-slate-500">
            <Link href="/" className="underline">
              ← back to the site
            </Link>{" "}
            ·{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
