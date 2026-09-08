import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — TownLink Global",
  description:
    "How NextStar Procurement LLC dba TownLink Global collects, uses, and shares information from visitors and clients.",
};

const UPDATED = "2026-09-08";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <p className="mb-3 inline-block border-2 border-slate-900 bg-brand-green-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-green-ink">
        Draft — for attorney review. Not legal advice.
      </p>
      <h1 className="mb-2 font-display text-3xl font-extrabold text-brand-blue-ink md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mb-10 font-mono text-[12px] uppercase tracking-wider text-slate-500">
        Last updated · {UPDATED}
      </p>

      <div className="prose-copy space-y-8 text-text-body">
        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">1. Who we are</h2>
          <p>
            This site is operated by <strong>NextStar Procurement LLC</strong>, an Illinois
            limited liability company, doing business as <strong>TownLink Global</strong>. Our
            mailing address is 809 N Central Ave, Addison IL 60101. Contact:{" "}
            <a href="mailto:privacy@townlinkglobal.com" className="underline">
              privacy@townlinkglobal.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            2. What we collect
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Information you give us.</strong> Name, business email, phone number,
              business type, and the primary concern you select in our on-site form.
            </li>
            <li>
              <strong>Automatically collected.</strong> IP address, user agent, referring URL,
              and, if you accept advertising cookies, the Meta browser identifiers{" "}
              <code>_fbp</code> and <code>_fbc</code>.
            </li>
            <li>
              <strong>If you become a client.</strong> Records of calls and text messages
              handled by our service on your behalf, including recordings, transcripts, and
              logs. Governed by our Master Services Agreement.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            3. How we use it
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>To respond to your estimate request and to schedule any follow-up call.</li>
            <li>To provide the services you engage us for.</li>
            <li>
              To measure the effectiveness of our advertising (Meta Conversions API), only
              after you have accepted advertising cookies.
            </li>
            <li>To improve our service and security operations.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            4. Who we share with
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Meta Platforms</strong> — hashed contact information for advertising
              conversion measurement via the Meta Conversions API, and cookie-based Pixel
              events, only after your consent.
            </li>
            <li>
              <strong>Service providers</strong> — hosting (Netlify), CRM (Airtable),
              telephony and messaging providers used to deliver the service, all under
              written data-processing terms.
            </li>
            <li>
              <strong>Legal.</strong> When required by law, subpoena, or to protect our
              rights and those of our clients.
            </li>
          </ul>
          <p>
            We do not sell personal information for money. We may{" "}
            <em>share</em> limited identifiers (hashed email, hashed phone,
            browser cookies) with Meta Platforms for advertising conversion
            measurement, which qualifies as &quot;sharing for cross-context
            behavioral advertising&quot; under the California Privacy Rights
            Act. You can opt out at any time by clicking{" "}
            <Link href="/do-not-sell" className="underline">
              Do Not Sell or Share My Personal Information
            </Link>{" "}
            or by rejecting non-essential cookies in our banner.
          </p>
          <p>
            <strong>Global Privacy Control.</strong> We honor the{" "}
            <a href="https://globalprivacycontrol.org/" target="_blank" rel="noreferrer" className="underline">
              Global Privacy Control
            </a>{" "}
            signal as a valid opt-out of sharing for cross-context behavioral
            advertising. If your browser sends a GPC signal, we will not load
            the Meta Pixel and will not transmit identifiers to Meta for
            advertising measurement, regardless of your cookie-banner choice.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">5. Retention</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Lead form submissions and consent records: 4 years from last
              contact, matching the federal TCPA statute-of-limitations window,
              then deleted.
            </li>
            <li>Client call recordings: 90 days by default, unless a longer period is agreed.</li>
            <li>Client call transcripts: 12 months, unless a longer period is agreed.</li>
            <li>
              Opt-out and deletion requests are honored within 10 business days for the
              lead-stage records we control directly.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">6. Your rights</h2>
          <p>
            Depending on where you live, you have rights over the personal information
            we hold about you — including under the California Privacy Rights Act (CPRA),
            the Colorado Privacy Act, the Connecticut Data Privacy Act, the Utah Consumer
            Privacy Act, and the Virginia Consumer Data Protection Act.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Right to know / access.</strong> Request the categories and specific
              pieces of personal information we have collected about you.
            </li>
            <li>
              <strong>Right to correct.</strong> Ask us to fix inaccurate personal
              information.
            </li>
            <li>
              <strong>Right to delete.</strong> Ask us to delete personal information we
              collected from you, subject to legal-retention exceptions (for example,
              consent records we are required to retain for TCPA compliance).
            </li>
            <li>
              <strong>Right to opt out of sharing</strong> for cross-context behavioral
              advertising —{" "}
              <Link href="/do-not-sell" className="underline">
                exercise this right here
              </Link>
              , or by sending a Global Privacy Control signal from your browser.
            </li>
            <li>
              <strong>Right to limit use of sensitive personal information</strong>{" "}
              (California). We do not use sensitive personal information for purposes
              outside those permitted under CPRA § 7027(m).
            </li>
            <li>
              <strong>Right to non-discrimination</strong> for exercising a privacy right.
            </li>
          </ul>
          <p>
            <strong>How to exercise.</strong> Email{" "}
            <a href="mailto:privacy@townlinkglobal.com" className="underline">
              privacy@townlinkglobal.com
            </a>{" "}
            from the address on file, or write to the mailing address above. California
            residents may designate an authorized agent — see{" "}
            <Link href="/do-not-sell" className="underline">
              our Do Not Sell or Share page
            </Link>{" "}
            for verification requirements.
          </p>
          <p>
            <strong>Verification.</strong> To protect your information, we verify requests
            by matching the requesting email or postal address to the record on file and,
            for higher-risk requests (deletion, sensitive-information limits), by
            confirming two additional data points such as the phone number and business
            name you originally submitted.
          </p>
          <p>
            <strong>Response timeframes.</strong> We respond to access, correction, and
            deletion requests within 45 days, extendable once by an additional 45 days if
            reasonably necessary (with notice to you). Opt-out requests are honored within
            15 business days.
          </p>
          <p>
            <strong>Appeals.</strong> If we deny your request in whole or in part,
            residents of Colorado, Connecticut, Virginia, and other states with a
            statutory appeal right may appeal by replying to our response email or writing
            to{" "}
            <a href="mailto:privacy@townlinkglobal.com" className="underline">
              privacy@townlinkglobal.com
            </a>{" "}
            with the subject line &quot;Appeal.&quot; We will respond to the appeal within
            60 days and, if we again deny, will provide you with the contact information
            for your state Attorney General&apos;s office.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            7. Cookies and tracking
          </h2>
          <p>
            We use only strictly necessary storage by default. The Meta Pixel is
            consent-gated: it does not load, and no Meta identifiers are placed, until
            you affirmatively accept our cookie banner or is suppressed by a Global
            Privacy Control signal from your browser, whichever applies.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-brand-blue-ink text-left">
                  <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                    Name
                  </th>
                  <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                    Purpose
                  </th>
                  <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                    Duration
                  </th>
                  <th className="py-2 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                    Party
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-green-line">
                  <td className="py-2 pr-4 font-mono">
                    <code>tlg_consent_v1</code>
                  </td>
                  <td className="py-2 pr-4">Stores your cookie-banner choice</td>
                  <td className="py-2 pr-4">Until cleared</td>
                  <td className="py-2">First-party (localStorage)</td>
                </tr>
                <tr className="border-b border-brand-green-line">
                  <td className="py-2 pr-4 font-mono">
                    <code>_fbp</code>
                  </td>
                  <td className="py-2 pr-4">Meta advertising measurement</td>
                  <td className="py-2 pr-4">90 days</td>
                  <td className="py-2">Third-party (Meta Platforms)</td>
                </tr>
                <tr className="border-b border-brand-green-line">
                  <td className="py-2 pr-4 font-mono">
                    <code>_fbc</code>
                  </td>
                  <td className="py-2 pr-4">Meta click-attribution</td>
                  <td className="py-2 pr-4">90 days</td>
                  <td className="py-2">Third-party (Meta Platforms)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            You can withdraw consent at any time by clearing your browser storage for
            this site (the banner will reappear on your next visit) or by using our{" "}
            <Link href="/do-not-sell" className="underline">
              Do Not Sell or Share My Personal Information
            </Link>{" "}
            page.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            8. AI-generated communications
          </h2>
          <p>
            Calls that our AI receptionist answers on a client&apos;s behalf begin with a
            short natural-language disclosure identifying the caller as a virtual
            assistant. Callers can always ask for a live person and be handed off.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">9. Contact</h2>
          <p>
            Questions or complaints:{" "}
            <a href="mailto:privacy@townlinkglobal.com" className="underline">
              privacy@townlinkglobal.com
            </a>
            . NextStar Procurement LLC, 809 N Central Ave, Addison IL 60101.
          </p>
        </section>

        <section>
          <p className="text-sm text-slate-500">
            <Link href="/" className="underline">
              ← back to the site
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
