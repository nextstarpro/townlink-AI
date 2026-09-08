# Client-side consent attestation — MSA clause + onboarding language

**Status:** draft for attorney review. Not for use as-is.
**Prepared:** 2026-09-08 for NextStar Procurement LLC (Illinois), dba TownLink Global.
**Purpose:** shift TCPA / CAN-SPAM / state consent liability onto the client
for the contact lists and phone numbers they hand over, in a form that
matches how the FCC + plaintiffs' bar actually evaluate consent chains.

This clause covers two categories of automated outreach TownLink Global runs
on the client's behalf: (1) outbound AI-voice calls, and (2) automated
marketing SMS to a client-provided list. Inbound AI receptionist handling is
a separate matter — the disclosure obligation there is operational (the
opening line of each answered call), not consent-based.

---

## 1. MSA clause — "Consent, Suppression, and Regulatory Compliance"

Insert as a numbered section of the Master Services Agreement between
NextStar Procurement LLC (dba TownLink Global) and the Client.

> **§X. Consent, Suppression, and Regulatory Compliance.**
>
> **(a) Client Ownership of Contacts.** All telephone numbers, mobile
> numbers, email addresses, and other contact records provided by Client
> to NextStar Procurement LLC dba TownLink Global ("TownLink") — whether
> uploaded, connected via integration, or otherwise made accessible —
> remain Client's data. TownLink processes those records solely as
> Client's service provider to deliver the services described in the
> applicable Statement of Work.
>
> **(b) Client Consent Attestation.** Client represents and warrants,
> as of the effective date of each SOW and continuously while contacts
> are used in a TownLink-operated campaign, that:
>
>   (i) each contact on any list Client provides for automated outbound
>   voice or SMS campaigns has given **prior express written consent**
>   under 47 U.S.C. § 227 and 47 C.F.R. § 64.1200 to receive automated
>   marketing calls and/or text messages from Client at the number
>   provided, and that such consent has not been revoked;
>
>   (ii) Client maintains records of that consent — including the
>   language shown to the contact, the date, the method of collection,
>   and the IP address or equivalent identifier where applicable — for
>   a period of no less than four (4) years from the date consent was
>   obtained, and will provide such records to TownLink within five (5)
>   business days of a written request;
>
>   (iii) Client operates and maintains an active internal Do-Not-Call
>   / opt-out suppression list, honors STOP/UNSUBSCRIBE requests within
>   the timeframes required by law and by CTIA guidelines, and will
>   provide TownLink with a current suppression file before each
>   campaign launch and on any subsequent update;
>
>   (iv) any contact list provided has been scrubbed against the
>   National Do-Not-Call Registry and the Illinois DNC list (and any
>   other applicable state registry) within thirty (30) days prior to
>   its use in a TownLink campaign, unless the contact has an active
>   established business relationship with Client sufficient to
>   qualify for a recognized exemption;
>
>   (v) Client's underlying consent language is truthful, is not
>   materially different from the use TownLink will make of the
>   contact, and does not disclaim the use of automated or AI-generated
>   voice or text where such use is anticipated.
>
> **(c) AI-Voice Disclosure.** Client acknowledges that TownLink's
> AI-voice technology qualifies as an "artificial or prerecorded voice"
> under 47 U.S.C. § 227(b) and the FCC's Declaratory Ruling of
> February 8, 2024 (FCC 24-17). Every outbound call placed by TownLink
> on Client's behalf will open with a natural-language disclosure that
> identifies the call as a virtual assistant acting for Client and will
> offer the recipient a path to a human. Client will not instruct
> TownLink to remove, obscure, or shorten that disclosure.
>
> **(d) 10DLC / A2P Registration.** For SMS campaigns, Client shall
> register its brand and campaign use case with The Campaign Registry
> (TCR) prior to any messaging traffic, and shall keep that
> registration current for the term of the SOW. Client's brand and
> use-case identifiers will be listed on the messages sent by TownLink.
>
> **(e) Indemnification.** Client shall defend, indemnify, and hold
> harmless TownLink and NextStar Procurement LLC, and their respective
> officers, employees, and affiliates, from and against any and all
> claims, damages, penalties, fines, settlements, and reasonable
> attorneys' fees arising out of or related to (i) any breach of the
> representations in §X(b)–(d); (ii) Client's contact list, consent
> chain, or suppression practices; or (iii) any content Client directs
> TownLink to include in outbound messaging. This indemnity survives
> termination of the MSA.
>
> **(f) TownLink Kill-Switch.** TownLink reserves the right to pause,
> suspend, or terminate any campaign, without liability, upon a
> good-faith determination that continued sending would create material
> regulatory risk (including but not limited to a complaint volume
> exceeding carrier thresholds, a written notice from a regulator, or
> a credible consent challenge).

---

## 2. Onboarding form — attestation checkboxes (client self-serve)

Convert the MSA clause into a set of unambiguous checkboxes the Client
must tick in the onboarding form **before any contact list is imported**.
Store the timestamp, IP, user identity, and the exact wording shown.

Suggested field labels (each is a required checkbox; do not pre-check):

- [ ] Every phone number and mobile number in the list I am uploading
  has given my business prior express written consent to receive
  automated marketing calls and/or text messages from us. I can produce
  the consent record if asked.
- [ ] I understand that TownLink Global will place AI-voice calls and
  send AI-drafted text messages to this list on my behalf, and that
  each outbound call will open with a natural-language disclosure that
  identifies the caller as a virtual assistant.
- [ ] My business maintains an active Do-Not-Call / opt-out suppression
  list. I have attached (or connected) the current version. STOP and
  UNSUBSCRIBE requests will be honored promptly.
- [ ] This list has been scrubbed against the National Do-Not-Call
  Registry within the last thirty days, or every contact on it has an
  active established business relationship with my company.
- [ ] I have registered (or authorize TownLink Global to register on
  my behalf) my brand and campaign use case with The Campaign Registry
  (10DLC / A2P) prior to any SMS send.

At the bottom, one signature-style acceptance:

> By checking these boxes and clicking "Import contacts," I confirm the
> statements above are true and current, and I accept the Consent,
> Suppression, and Regulatory Compliance section of the TownLink Global
> Master Services Agreement.

---

## 3. First-message opt-in variant — for lists with unclear consent

Where a client cannot cleanly attest to prior express written consent for
a given list — the common case with dormant customer databases pulled from
QuickBooks, paper intake forms, or old CRMs — do **not** run a marketing
blast. Run an opt-in check as the first message. Example:

> Hi — this is [Business Name]. You're on our contact list from a past
> job. Reply YES to hear about our current specials and reminders, or
> STOP to be removed. Msg&data rates may apply. Freq varies. Terms:
> [short URL]. Reply HELP for help.

Only contacts who reply YES enter the marketing sequence. All others are
suppressed. This is defensible even where the underlying consent chain is
weak, and it is materially safer than treating the client's attestation
as sufficient when the attestation is guesswork.

Operational rule of thumb for the account team: if the client hesitates
when asked *"can you show me how you collected consent from this list?"* —
default to the opt-in variant, not the direct blast.

---

## 4. Operational obligations on TownLink's side (non-negotiable)

Even with a strong client attestation, TownLink Global itself must:

1. Open every outbound AI-voice call with the disclosure line specified
   in the MSA §X(c). No exceptions, no client override.
2. Register every SMS use case in TCR / 10DLC before any traffic; keep
   throughput inside carrier tier limits.
3. Log every outbound attempt (call or text), the consent-record
   reference the client attested to, the disclosure delivered, and the
   opt-out state, in an audit trail retained for at least four years.
4. Honor STOP/UNSUBSCRIBE within one message cycle across all channels
   tied to that contact, not just the channel it arrived on.
5. Maintain E&O insurance with an explicit TCPA coverage endorsement.
   Confirm the exclusion page annually.
6. Never publish a client name, quote, or figure on the marketing site
   without a signed, written testimonial release from that client.

---

## 5. Open items for attorney review

- Confirm §X(c) tracks the current text of the FCC 2024 declaratory
  ruling and any state overlays (California AB 2905, Florida Mini-TCPA,
  New York A216, Illinois AI-related bills as they progress).
- Confirm §X(e) indemnity survives termination and is not limited by
  the general limitation-of-liability clause elsewhere in the MSA
  (common drafting error).
- Add a data-processing addendum (DPA) if Client is a covered entity
  under HIPAA (dental, healthcare) — the current MSA presumes it isn't.
- Decide whether to require Client to name TownLink as an additional
  insured on Client's general-liability policy, or to rely on TownLink's
  own E&O coverage plus the indemnity.
- Draft a matching Terms of Service + Privacy Policy pair for the public
  landing page. This document does not replace those.
