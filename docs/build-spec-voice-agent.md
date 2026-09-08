# Voice-agent build spec

**Owner:** NextStar Procurement LLC (dba TownLink Global)
**Status:** v1 · operational baseline. Any deviation requires a written
change-log entry (see §8) and re-QA of every live tenant.

This document is a build requirement, not marketing. Every claim on the
public marketing site that describes agent behavior ("every call opens
with a natural disclosure," "callers can always ask for a live person,"
"bilingual on request") must be traceable back to a section here.

---

## 1. In-call disclosure (mandatory)

The first 3 seconds of every answered inbound call and every connected
outbound call must include a natural-language disclosure that the caller
is speaking with a virtual assistant.

**Template (no client override, no shortening):**

> "Hi, this is [Business Name]'s virtual assistant — how can I help?"

Rationale: TCPA 47 U.S.C. §227 + FCC Declaratory Ruling (February 2024)
treats AI-generated voice as an "artificial voice" for §227(b) purposes.
Disclosing the AI nature at the top of the call, in natural language, is
the minimum posture.

**Not allowed:**

- Removing the word "virtual assistant" (or an equivalent — "automated
  assistant," "AI assistant" — approved by ops in writing).
- Front-loading a marketing pitch before the disclosure.
- Whisper-style low-volume disclosure buried under music.

## 2. Human handoff (mandatory)

The agent must recognize any of the following intents and route to a
human immediately:

- "speak to a person" / "real person" / "human"
- "manager" / "owner" / "supervisor"
- "let me talk to someone" / "get me a real person"
- Spanish equivalents when the bilingual mode (§3) is enabled

Additional behavior:

- On any call that exceeds 2 minutes without a resolution (booking,
  answered question, explicit hang-up), the agent must proactively offer
  a human handoff at least once.
- If the handoff target is unavailable (after-hours, all lines busy),
  the agent must record the caller's callback request (name, number,
  reason) and deliver it to the client's inbox within 5 minutes.

## 3. Bilingual behavior (per client)

- Default: off.
- When enabled for a client: agent detects the caller's language on the
  first conversational turn and switches. All disclosures (§1) and
  handoff intents (§2) must exist in both languages before enabling.
- The public marketing FAQ claims bilingual support. As long as the
  first shipping client has bilingual enabled, the site FAQ is truthful.
  If a future tenant does not enable bilingual, the site FAQ must be
  scoped to that client's tenant subdomain or removed.

## 4. Retention

- **Call audio:** deleted at 90 days by default. Longer retention only
  under a signed data-retention amendment to the MSA.
- **Call transcripts:** 12 months, then deleted.
- **Voice data:** not used to train voiceprint or biometric identity
  models. This is a BIPA-facing commitment (Illinois Biometric
  Information Privacy Act, 740 ILCS 14) — voiceprint templates are
  regulated biometric identifiers and we do not generate or store them.
- **Consent records** (client attestations, per-contact opt-in
  timestamps): retained for the life of the client engagement + 4 years,
  matching the TCPA statute of limitations window.

## 5. Consent for outbound calls / SMS

- Every outbound campaign requires a signed client attestation per MSA
  §X ("Client-provided contact lists"). Ops must confirm the attestation
  is on file **before** enabling the outbound campaign in the agent
  config. No exceptions.
- First outbound message to any contact must include the sender identity
  and a STOP instruction:
  > "Hi [First Name], this is [Business Name]. You gave us permission
  > to reach out at [signup event]. Reply STOP to opt out, HELP for
  > help. Msg&data rates may apply."
- No agent may initiate outbound contact to a number the client cannot
  produce prior-express-written-consent records for on request.

## 6. STOP / DNC handling

- **SMS STOP:** honored within one message cycle (i.e. the next queued
  message to that number is suppressed). Suppression is applied at the
  contact level, not the campaign level — a STOP on one campaign
  suppresses all TownLink-sent SMS to that number across every campaign
  for that client.
- **Voice DNC:** national DNC + Illinois DNC scrub required within 30
  days of any outbound campaign launch. Contacts on either list are
  suppressed unless the client can produce an established-business-
  relationship record that qualifies for the exemption.
- **Cross-channel:** a STOP received on SMS suppresses outbound voice
  to the same number and vice versa. STOP does not suppress inbound
  answered calls — the caller is calling us.

## 7. QA gate (go-live)

No client is enabled in production until every item below is verified
by ops and signed off in the go-live checklist:

- [ ] Disclosure line (§1) confirmed in a test call using the exact
      client business name.
- [ ] Human-handoff intents (§2) tested — "speak to a person" hands off
      to the configured target.
- [ ] After-hours handoff behavior tested — callback request captured
      and delivered.
- [ ] STOP suppression tested end-to-end for both SMS and voice.
- [ ] If bilingual enabled: disclosure + handoff verified in both
      languages.
- [ ] Consent attestation on file (§5) if any outbound is configured.
- [ ] Retention defaults (§4) confirmed in the tenant config, not
      overridden.

## 8. Change log

Any change to §1 (disclosure), §2 (handoff), or §4 (retention) requires:

1. A new version number on this document.
2. Written approval from the ops lead.
3. Re-QA of §7 for every live tenant before the change is deployed.

Minor tuning to §3 (bilingual detection thresholds), §5 (message
copy), or §6 (DNC scrub cadence) may be updated without a full re-QA,
but the change must still be recorded here with date and reason.

---

**Version:** v1 · 2026-09-07
**Next review:** on first material product change, or 6 months, whichever
comes first.
