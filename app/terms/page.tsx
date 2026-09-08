import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — TownLink Global",
  description:
    "Terms governing use of the TownLink Global marketing site and lead-capture form, operated by NextStar Procurement LLC (Illinois).",
};

const UPDATED = "2026-09-08";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-10 md:py-24">
      <p className="mb-3 inline-block border-2 border-slate-900 bg-brand-green-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-green-ink">
        Draft — for attorney review. Not legal advice.
      </p>
      <h1 className="mb-2 font-display text-3xl font-extrabold text-brand-blue-ink md:text-5xl">
        Terms of Service
      </h1>
      <p className="mb-10 font-mono text-[12px] uppercase tracking-wider text-slate-500">
        Last updated · {UPDATED}
      </p>

      <div className="prose-copy space-y-8 text-text-body">
        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">1. Parties</h2>
          <p>
            These Terms are between <strong>NextStar Procurement LLC</strong>, an Illinois
            limited liability company doing business as <strong>TownLink Global</strong>{" "}
            (&quot;TownLink,&quot; &quot;we,&quot; &quot;us&quot;), and you (&quot;you&quot;),
            the visitor.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            2. What this site is
          </h2>
          <p>
            This site describes our services and lets you request an estimate. No purchase
            or sale of services happens on this site. Any engagement is governed separately
            by our Master Services Agreement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            3. Illustrative figures
          </h2>
          <p>
            Any dollar figures, event counts, testimonials, case studies, or other
            outcome-like elements shown on this site are <strong>illustrative examples</strong>{" "}
            unless a specific client is named and quoted with their written permission.
            Actual results depend on your call volume, list size, existing consent chain,
            and other factors specific to your business. We make no representation that any
            example on this site reflects a typical or guaranteed result.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            4. The month-two guarantee
          </h2>
          <p>
            Our public guarantee (&quot;month two is on the house if month one doesn&apos;t
            clear&quot;) is a <strong>service credit</strong>, not a cash refund. It is
            capped at the fees paid in month one. To claim it, you must send a written
            dispute notice to{" "}
            <a href="mailto:info@townlinkglobal.com" className="underline">
              info@townlinkglobal.com
            </a>{" "}
            within 30 days of the end of month one. The measurement methodology for what
            counts as &quot;cleared&quot; is set out in the Master Services Agreement and
            controls in the event of any conflict with this summary.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            5. AI-generated communications
          </h2>
          <p>
            Where our services include an AI receptionist or AI-driven outbound
            communications, every call begins with a natural-language disclosure that the
            caller is speaking with a virtual assistant, and every automated SMS complies
            with applicable identification and opt-out requirements.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            6. Client-provided contact lists
          </h2>
          <p>
            If you become a client and give us a contact list for outbound calling or
            texting, you represent and warrant that every contact on the list has given
            you prior express written consent under 47 U.S.C. § 227 and applicable state
            law to receive automated marketing communications, and that you can produce
            those records on request. Full terms live in the MSA.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            7. Intellectual property
          </h2>
          <p>
            All content on this site — text, layout, marks, and code — is owned by NextStar
            Procurement LLC or its licensors. You may view and share it for personal or
            internal business purposes; you may not copy it into a competing marketing
            surface.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            8. Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by law, our aggregate liability for any claim
            arising out of or related to this site or any services rendered is capped at
            the fees you paid us in the 12 months preceding the claim, or USD $100 if you
            have paid us nothing. We are not liable for indirect, incidental, special,
            consequential, or exemplary damages, or for lost profits or lost data. These
            limits do not apply to claims that cannot be limited by law (for example,
            gross negligence or willful misconduct).
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            9. Dispute resolution
          </h2>
          <p>
            Any dispute arising out of or relating to these Terms will be resolved by
            binding arbitration administered by JAMS under its Comprehensive Arbitration
            Rules, seated in DuPage County, Illinois, before a single arbitrator. The
            parties agree to attempt mediation in good faith for at least 30 days before
            initiating arbitration.
          </p>
          <p>
            <strong>Consumer-fee advance.</strong> For any claimant who is a natural
            person and not a business entity, TownLink will advance the JAMS filing and
            administrative fees and will not seek recovery of those fees unless the
            arbitrator finds the claim frivolous. TownLink will bear its own attorneys&apos;
            fees regardless of outcome; the claimant may recover their reasonable
            attorneys&apos; fees if the arbitrator finds in the claimant&apos;s favor and
            applicable law permits fee-shifting.
          </p>
          <p>
            <strong>Class actions are waived.</strong> Neither party may bring claims on a
            class, collective, or representative basis. The class-action waiver is a
            material term of this arbitration agreement and is <strong>not severable</strong>
            {" "}from it: if a court of competent jurisdiction finds the class-action waiver
            unenforceable, this entire arbitration provision (§9) is void, and any dispute
            will proceed in the state or federal courts seated in DuPage County, Illinois.
          </p>
          <p>
            <strong>Mass-arbitration procedure.</strong> If 25 or more substantially
            similar demands are filed by or on behalf of claimants represented by the same
            counsel or coordinated counsel, the parties will follow the JAMS Mass
            Arbitration Procedures and bellwether protocol then in effect.
          </p>
          <p>
            Nothing in this section prevents either party from seeking injunctive relief
            in a court of competent jurisdiction to protect intellectual property or
            confidential information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            10. Governing law
          </h2>
          <p>
            These Terms are governed by the laws of the State of Illinois, without regard
            to conflict-of-laws principles.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            11. Changes; severability; entire agreement
          </h2>
          <p>
            We may update these Terms; the &quot;last updated&quot; date at the top
            reflects the latest version. If any provision is held unenforceable, the rest
            remains in force. These Terms, together with our Privacy Policy and (if you
            become a client) the MSA, are the entire agreement between you and us on this
            subject.
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
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
