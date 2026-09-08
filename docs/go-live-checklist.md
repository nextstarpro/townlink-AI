# Go-live checklist

Complete and sign before flipping any client tenant to production.
References `build-spec-voice-agent.md` (the "Spec"). Anything left
unchecked blocks go-live.

**Client:** ______________________________________________
**Tenant ID:** ______________________________________________
**Ops signer:** ______________________________________________
**Date:** ______________________________________________

---

## Contracts & consent

- [ ] Signed MSA on file (NextStar Procurement LLC counterparty).
- [ ] If outbound calling/SMS is in scope: signed client attestation
      per Spec §5 confirming prior express written consent for every
      contact on the uploaded list.
- [ ] Client has been briefed on their obligation to produce consent
      records within 10 business days if requested by regulator or
      recipient.

## Configuration

- [ ] Business name in tenant config matches the client's legal DBA.
- [ ] Disclosure line renders correctly with that business name
      (Spec §1).
- [ ] Handoff target (phone number or forwarding rule) configured
      and reachable during business hours (Spec §2).
- [ ] After-hours callback capture routes to the client's inbox
      of record (Spec §2).
- [ ] Retention defaults left at 90d audio / 12mo transcript, or a
      signed retention amendment is on file (Spec §4).
- [ ] Bilingual mode set correctly for this client (Spec §3). If off,
      disclosure and handoff verified in English only.

## Verification calls

- [ ] Inbound test call → disclosure heard in first 3 seconds using
      correct business name.
- [ ] Inbound test call → "speak to a person" triggers handoff.
- [ ] After-hours test call → callback request captured, delivered
      within 5 minutes.
- [ ] If bilingual: repeat the above two tests in the second language.

## SMS / voice suppression

- [ ] SMS STOP test → outbound to that number suppressed within one
      message cycle, and cross-channel suppression confirmed (Spec §6).
- [ ] National DNC + Illinois DNC scrub run within the last 30 days
      for any list feeding an outbound campaign.

## Marketing surfaces

- [ ] Client landing page / booking page (if TownLink-hosted) links
      to the current Privacy Policy and Terms of Service.
- [ ] Any client-facing claim about response time, bookings, or
      revenue recovery is either qualitative or labeled illustrative.

## Sign-off

I confirm every item above is verified and the tenant is safe to enable.

**Ops signer:** ______________________________________________
**Date/time enabled:** ______________________________________________
**Spec version at go-live:** ______________________________________________
