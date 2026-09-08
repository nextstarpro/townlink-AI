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
            6. If you become a client
          </h2>
          <p>
            These Terms govern your use of this marketing site. If you engage us for
            services, a separate Master Services Agreement (MSA) governs the engagement,
            including data uploads, consent-attestation requirements for any contact
            lists you provide, service-level commitments, and billing. Where the MSA and
            these Terms conflict on any client-facing matter, the MSA controls.
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
            consequential, or exemplary damages, or for lost profits or lost data.
          </p>
          <p>
            <strong>Carve-outs.</strong> These limits do not apply to: (a) gross
            negligence, willful or wanton misconduct, or fraud; (b) claims that cannot be
            limited by law; (c) statutory damages under the federal Telephone Consumer
            Protection Act (47 U.S.C. § 227), the Illinois Biometric Information Privacy
            Act (740 ILCS 14), or any other statute where contractual limitation is
            expressly forbidden by that statute&apos;s own text (this carve-out does not
            extend to statutes under which contractual limitation is merely disfavored
            or reviewed for unconscionability); (d) either party&apos;s indemnification
            obligations under a signed Master Services Agreement; or (e) either
            party&apos;s breach of confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-brand-blue-ink">
            9. Dispute resolution
          </h2>
          <p>
            Any dispute arising out of or relating to these Terms will be resolved by
            binding arbitration administered by JAMS under its Comprehensive Arbitration
            Rules, seated in DuPage County, Illinois, before a single arbitrator.
          </p>
          <p>
            <strong>Pre-arbitration mediation.</strong> Either party may initiate
            mediation by written notice to the other. The mediator will be selected by
            mutual agreement within 15 days or, failing agreement, appointed by JAMS.
            Mediation costs are shared equally, except that TownLink will advance the
            consumer claimant&apos;s share subject to the consumer-fee-advance
            provisions below. If mediation does not resolve the dispute within 30 days
            of initiation, either party may proceed to arbitration.
          </p>
          <p>
            <strong>California-consumer venue.</strong> For any claimant who is a
            California resident acting as a consumer, arbitration may, at the
            claimant&apos;s election, be seated in a JAMS office within 100 miles of the
            claimant&apos;s residence, with all other terms of this §9 unchanged.
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
            <strong>Mass-arbitration procedure.</strong> If 50 or more substantially
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
            <strong>Non-material updates.</strong> We may update these Terms; the
            &quot;last updated&quot; date at the top reflects the latest version.
          </p>
          <p>
            <strong>Material updates to §8 (Limitation of liability) or §9 (Dispute
            resolution).</strong> For any material change to §8 or §9, we will provide at
            least 30 days&apos; notice to any lead who has submitted our form, via email
            to the address on file and via a persistent banner on this site. Continued
            use of the site or continued engagement with us after the notice period
            constitutes acceptance. If you do not accept, your sole remedy is to email{" "}
            <a href="mailto:support@townlinkglobal.com" className="underline">
              support@townlinkglobal.com
            </a>{" "}
            and request deletion of your record; in that case, the version of §8 and §9
            in effect on the date you last submitted our form governs any claim that had
            accrued as of the amendment date.
          </p>
          <p>
            <strong>Which version binds you.</strong> The version of these Terms in
            effect on the date you last submitted our form governs any dispute between
            you and us, unless you have affirmatively accepted a later version.
          </p>
          <p>
            <strong>Severability.</strong> If any provision is held unenforceable, the
            rest remains in force, except as expressly stated in §9 (class-action waiver
            is non-severable from the arbitration provision).
          </p>
          <p>
            <strong>Survival.</strong> Sections 3 (Illustrative figures), 7 (Intellectual
            property), 8 (Limitation of liability), 9 (Dispute resolution), 10 (Governing
            law), and this §11 survive termination of your engagement with us and
            expiration or termination of these Terms.
          </p>
          <p>
            <strong>Electronic transactions (E-SIGN).</strong> By checking the consent
            box on our form, you agree that (a) you are willing to conduct this
            transaction electronically, (b) you have the hardware and software to access
            and retain these Terms, and (c) the electronic record of your acceptance has
            the same legal effect as a signed writing under the federal E-SIGN Act (15
            U.S.C. § 7001) and applicable state law.
          </p>
          <p>
            <strong>Entire agreement.</strong> These Terms, together with our Privacy
            Policy and (if you become a client) the MSA, are the entire agreement between
            you and us on this subject.
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
