import LedgerTape from "@/components/LedgerTape";
import Quiz from "@/components/Quiz";

const BLEED = [
  {
    line: "call answered by voicemail",
    detail: "Roughly 6 in 10 calls to small service businesses go unanswered (Invoca / Marchex industry data — industry-wide, not TownLink-measured). The next name on Google picks up.",
    stat: "~60%",
  },
  {
    line: "hours on quotes, invoices, follow-ups",
    detail: "Small-business teams spend around 40% of the workday on admin (HubSpot / APQC surveys — industry-wide, not TownLink-measured). It's payroll, going out the back door.",
    stat: "~40%",
  },
  {
    line: "a form comes in at 9pm — by 10am they booked the next guy",
    detail: "Speed to reply is the single biggest factor in whether an inbound web lead converts.",
    stat: "1st",
  },
  {
    line: "old customer list sitting in a spreadsheet",
    detail: "The names you haven't texted since 2022 — assuming they already opted in to hear from you. Real money. Sitting still. This one we can move in a week.",
    stat: "varies",
  },
];

const REACTIVATION_STEPS = [
  { d: "day 1", label: "hand over the list · we clean and segment it" },
  { d: "day 3", label: "first personalized sequence goes out — in your voice" },
  { d: "day 5–7", label: "bookings land on your calendar" },
  { d: "week 2+", label: "the 24/7 receptionist takes over the inbound side" },
];

const INSTALLS = [
  {
    name: "Omnichannel response engine",
    outcome:
      "One system watches your phone line, texts, web forms, and inbox. Every new lead gets a call answered, a text back, and a confirmation email with a calendar link — inside 60 seconds. Books straight into Google or Outlook. The day's roster hits your phone before coffee.",
  },
  {
    name: "Old-list text-back",
    outcome:
      "A one-off AI text campaign against your dormant list. Personalized, sent at a real hour on a real day. Booked jobs — not blasted texts. We confirm client consent before any list goes out; this isn't a cold blast.",
  },
  {
    name: "Admin & follow-up copilot",
    outcome:
      "Drafts the quote, sends the invoice reminder, syncs the CRM. Cuts the payroll drag on the paperwork nobody wants to do.",
  },
];

const FAQ = [
  {
    q: "Will this work with my existing phone number?",
    a: "Yes. We forward or ring-in-parallel with your current line. You don't port anything, publish a new number, or hand out a second one to customers.",
  },
  {
    q: "What if my main problem is email, not the phone?",
    a: "Same receptionist, different channel. It reads the inbox, answers the routine ones (pricing, availability, quote requests) in your voice, and puts the rest on your desk sorted by urgency. Every draft goes to your review before it sends — until you tell it to run on its own.",
  },
  {
    q: "What actually happens in the first 14 days?",
    a: "Days 1–3: the text-back to your old list gets drafted and sent. Days 4–10: your receptionist's voice is tuned to your business and integrations are wired in. Days 10–14: dry-run against test calls, then flip live. You approve every step.",
  },
  {
    q: "Will callers know it's an AI?",
    a: "Yes — every call opens with a short, natural disclosure (\"Hi, this is [Business Name]'s virtual assistant — how can I help?\"), so callers always know who they're talking to. It doesn't sound robotic, it just doesn't hide what it is. Callers can ask for a live person at any point and we hand off cleanly.",
  },
  {
    q: "Do I need to switch software?",
    a: "No. We work with your current phone number, calendar (Google or Outlook), and list (Airtable, Sheets, or your CRM). Your team doesn't log into anything new.",
  },
  {
    q: "Do you handle Spanish-speaking callers?",
    a: "Yes. The receptionist detects the language on the first hello and answers in English or Spanish. Either way, callers can ask for a human and we hand off cleanly.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[1180px] px-5 md:px-10">
      {/* ─── Header ─────────────────────────────────────── */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-green-line py-5">
        <a href="#" className="flex items-baseline gap-1.5 font-display font-extrabold">
          <span className="text-xl text-brand-blue">townlink</span>
          <span className="font-mono text-sm text-brand-green">/global</span>
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <a href="tel:+13312345580" className="phone-pill hidden sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden />
            (331) 234-5580
          </a>
          <a
            href="#audit"
            className="bg-cta px-5 py-2.5 text-sm font-semibold text-cta-fg shadow-cta transition hover:bg-cta-hover"
          >
            Get my estimate
          </a>
        </div>
      </header>

      {/* ─── 001 · Hero ─────────────────────────────────── */}
      <section
        aria-labelledby="hero"
        className="grid gap-10 border-b border-brand-green-line pb-16 pt-16 md:grid-cols-[1fr_420px] md:gap-14 md:pb-24 md:pt-24"
      >
        <div>
          <p className="seq mb-4">001 · addison + dupage county · done-for-you · 14-day install</p>
          <h1
            id="hero"
            className="font-display text-[44px] font-extrabold text-brand-blue-ink md:text-[68px]"
          >
            Stop losing calls to the shop that <span className="hero-highlight">answered first.</span>
          </h1>
          <p className="mt-5 max-w-[54ch] font-mono text-[12px] uppercase tracking-wider text-brand-green-ink">
            done-for-you · we build it, wire it into your existing phone + calendar, and run it
          </p>
          <p className="mt-6 max-w-[54ch] text-lg text-text-muted md:text-xl">
            A 24/7 AI receptionist that typically picks up in the first few rings — and an inbox
            that writes back before the lead has time to shop around. Books straight to your
            calendar. Texts your old customer list to bring back the ones ready to buy again. We
            wire it into the phone number, inbox, and calendar you already use. You approve the
            voice. Your team keeps working the way they do now.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#audit" className="btn-hero-cta">
              Get my missed-call estimate →
            </a>
          </div>

          <p className="mt-5 max-w-[54ch] font-mono text-[12px] uppercase tracking-wider text-brand-green-ink">
            typically live in about two weeks · month two is on the house if month one doesn't clear
          </p>
          <p className="mt-4 max-w-[54ch] text-[15px] text-text-muted">
            Built by a small team out of Addison. We answer our own phone at{" "}
            <a href="tel:+13312345580" className="font-medium text-brand-blue-ink underline underline-offset-4 decoration-brand-green">
              (331) 234-5580
            </a>{" "}
            — that number rings a person, not the AI.
          </p>
        </div>

        <aside aria-label="Live intake sample">
          <LedgerTape />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">
            illustrative example · not live client data
          </p>
        </aside>
      </section>

      {/* ─── 002 · The bleed ────────────────────────────── */}
      <section aria-labelledby="bleed" className="border-b border-brand-green-line py-20 md:py-28">
        <p className="seq mb-4">002 · what's leaking</p>
        <h2 id="bleed" className="max-w-[20ch] font-display text-4xl font-extrabold md:text-5xl">
          Four ways money walks out the door every day.
        </h2>

        <ol className="mt-12 border-t border-brand-green-line">
          {BLEED.map((row, i) => (
            <li
              key={row.line}
              className="line-item grid grid-cols-1 gap-4 py-8 md:grid-cols-[80px_1fr_180px] md:items-baseline md:gap-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                {String(i + 1).padStart(3, "0")}
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-brand-blue-ink md:text-3xl">
                  {row.line}
                </p>
                <p className="mt-2 max-w-[62ch] text-text-muted">{row.detail}</p>
              </div>
              <span className="font-mono text-4xl font-bold tabular-nums text-brand-green md:text-right md:text-5xl">
                {row.stat}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* ─── QW · Quick-Win: Database Reactivation Sprint ─ */}
      <section
        aria-labelledby="qw"
        className="border-b-2 border-brand-blue-ink bg-brand-green-soft py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
          <div>
            <p className="seq mb-4">qw · week one cashflow</p>
            <h2
              id="qw"
              className="max-w-[18ch] font-display text-4xl font-extrabold text-brand-blue-ink md:text-5xl"
            >
              The old-list text-back. New bookings inside seven days.
            </h2>
            <p className="mt-6 max-w-[54ch] text-text-body">
              Before we touch your phones, we run one AI text campaign against the customer list
              gathering dust in Airtable, Google Sheets, or the back of your CRM. Written in your
              voice. Sent at a real hour, on a real day. Bookings land on your calendar while
              we're still installing the receptionist.
            </p>
            <p className="mt-6 max-w-[54ch] font-mono text-[12px] uppercase tracking-wider text-brand-green-ink">
              first-week roi · before the main system is live
            </p>
          </div>

          <div className="border border-brand-green-line bg-white">
            <div className="flex items-center justify-between border-b border-brand-green-line px-5 py-2.5 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              <span>text-back · timeline</span>
              <span>7 days</span>
            </div>
            <ol className="divide-y divide-brand-green-line">
              {REACTIVATION_STEPS.map((s) => (
                <li key={s.d} className="grid grid-cols-[92px_1fr] gap-4 px-5 py-4">
                  <span className="font-mono text-[12px] uppercase tracking-wider text-brand-green">
                    {s.d}
                  </span>
                  <span className="text-text-body">{s.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── 003 · What gets installed ──────────────────── */}
      <section
        aria-labelledby="install"
        className="border-b border-brand-green-line py-20 md:py-28"
      >
        <p className="seq mb-4">003 · what gets installed</p>
        <h2
          id="install"
          className="max-w-[24ch] font-display text-4xl font-extrabold md:text-5xl"
        >
          One receptionist. One text-back to your old list. No new software for your team to learn.
        </h2>

        <ol className="mt-12 border-t border-brand-green-line">
          {INSTALLS.map((row, i) => (
            <li
              key={row.name}
              className="line-item grid grid-cols-[48px_1fr] gap-6 py-8 md:grid-cols-[80px_280px_1fr] md:gap-10"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                {String(i + 1).padStart(3, "0")}
              </span>
              <p className="font-display text-xl font-bold text-brand-blue-ink md:text-2xl">
                {row.name}
              </p>
              <p className="col-start-2 max-w-[58ch] text-text-muted md:col-start-3">
                {row.outcome}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-[72ch] font-mono text-[12px] uppercase tracking-wider text-brand-green-ink">
          zero new software · works with your phone number · google or outlook · airtable or sheets
        </p>
      </section>

      {/* ─── 004 · The estimate (quiz) ──────────────────── */}
      <section id="audit" aria-labelledby="audit-h" className="py-20 md:py-28">
        <p className="seq mb-4">004 · the estimate</p>
        <h2
          id="audit-h"
          className="mb-10 max-w-[24ch] font-display text-4xl font-extrabold md:text-5xl"
        >
          Three questions. Two minutes. We send back what your missed calls are costing you.
        </h2>
        <Quiz />
      </section>

      {/* ─── 005 · Recovered ────────────────────────────── */}
      <section
        aria-labelledby="recovered"
        className="border-y border-brand-green-line bg-canvas-alt py-20 md:py-28"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="seq mb-4">005 · what thirty days looks like</p>
            <h2
              id="recovered"
              className="max-w-[18ch] font-display text-4xl font-extrabold md:text-5xl"
            >
              Here's what thirty days could look like.
            </h2>
            <p className="mt-6 max-w-[48ch] text-text-muted">
              Illustrative example. Missed calls captured, one text-back to a dormant list, both
              live in under two weeks. Actual results depend on your call volume, list size, and
              your existing consent chain.
            </p>
            <p className="mt-4 inline-block border border-brand-green-line bg-brand-green-soft px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-green-ink">
              hypothetical · not a verified client result
            </p>
          </div>

          <aside className="border border-brand-green-line bg-white p-8 md:p-10">
            <p className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              illustrative · what the first month tends to look like
            </p>
            <ul className="mt-6 grid gap-4 text-text-body">
              <li className="grid grid-cols-[14px_1fr] gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green" />
                <span>
                  <strong className="text-brand-blue-ink">Missed calls become bookings.</strong>{" "}
                  The AI receptionist answers what your team can't, gets the name and job, and
                  drops it on the calendar.
                </span>
              </li>
              <li className="grid grid-cols-[14px_1fr] gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green" />
                <span>
                  <strong className="text-brand-blue-ink">One clean text-back to your list.</strong>{" "}
                  A single opt-in-compliant message to contacts who already gave you permission —
                  the exact scope depends on your existing consent records.
                </span>
              </li>
              <li className="grid grid-cols-[14px_1fr] gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green" />
                <span>
                  <strong className="text-brand-blue-ink">If month one doesn't clear, month two is on the house.</strong>{" "}
                  Service credit only — full terms in{" "}
                  <a href="/terms" className="underline">
                    Terms of Service
                  </a>
                  .
                </span>
              </li>
            </ul>
            <p className="mt-6 border-t border-brand-green-line pt-4 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              example only · not a guarantee of outcome
            </p>
          </aside>
        </div>
      </section>

      {/* ─── 006 · Guarantee ────────────────────────────── */}
      <section
        aria-labelledby="guarantee"
        className="border-b border-brand-green-line py-24 md:py-32"
      >
        <p className="seq mb-4">006 · guarantee</p>
        <h2
          id="guarantee"
          className="max-w-[22ch] font-display text-4xl font-extrabold text-brand-blue-ink md:text-6xl"
        >
          If month one doesn't pay for what you paid us,{" "}
          <span className="hero-highlight text-brand-blue-ink">month two is on the house.</span>
        </h2>
        <ul className="mt-8 grid max-w-[62ch] gap-3">
          <li className="grid grid-cols-[130px_1fr] gap-4 border-t border-brand-green-line pt-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              measured
            </span>
            <span className="text-text-body">
              missed calls we captured + bookings from the old-list text-back.
            </span>
          </li>
          <li className="grid grid-cols-[130px_1fr] gap-4 border-t border-brand-green-line pt-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              if it doesn't clear
            </span>
            <span className="text-text-body">
              next month is free. Transcripts stay yours.
            </span>
          </li>
        </ul>
        <a href="#audit" className="btn-hero-cta mt-10">
          Get my missed-call estimate →
        </a>
      </section>

      {/* ─── 007 · Questions ────────────────────────────── */}
      <section
        aria-labelledby="faq"
        className="border-b border-brand-green-line py-20 md:py-28"
      >
        <p className="seq mb-4">007 · questions</p>
        <h2 id="faq" className="mb-10 font-display text-4xl font-extrabold md:text-5xl">
          Things owners ask before they say yes.
        </h2>

        <div className="border-t border-brand-green-line">
          {FAQ.map((f, i) => (
            <details key={f.q} className="line-item group py-6 md:py-8" open={i === 0}>
              <summary className="grid cursor-pointer list-none grid-cols-[48px_1fr_24px] items-baseline gap-6 md:grid-cols-[80px_1fr_24px] md:gap-10">
                <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="font-display text-xl font-bold text-brand-blue-ink md:text-2xl">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-2xl text-brand-green transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="col-start-2 mt-4 max-w-[62ch] pl-[48px] text-text-muted md:pl-[80px]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────── */}
      <footer className="grid gap-4 border-t border-brand-green-line py-10 font-mono text-[11px] uppercase tracking-wider text-slate-500 md:grid-cols-3">
        <span>
          © {new Date().getFullYear()} nextstar procurement llc (illinois) · dba townlink global<br />
          809 n central ave, addison il 60101
        </span>
        <span className="md:text-center">
          serving elmhurst · naperville · oak brook · hinsdale · downers grove · addison
        </span>
        <span className="md:text-right">
          <a href="tel:+13312345580" className="hover:text-brand-blue-ink">(331) 234-5580</a>
          {" · "}
          <a href="mailto:info@townlinkglobal.com" className="hover:text-brand-blue-ink">info@townlinkglobal.com</a>
        </span>
        <span className="md:col-span-3 md:text-center">
          <a href="/privacy" className="hover:text-brand-blue-ink">privacy</a>
          {" · "}
          <a href="/terms" className="hover:text-brand-blue-ink">terms</a>
          {" · "}
          <a href="/do-not-sell" className="hover:text-brand-blue-ink">
            do not sell or share
          </a>
          {" · ai voice interactions are disclosed at the start of every call"}
        </span>
        <span className="normal-case tracking-normal md:col-span-3 md:text-center">
          Stats cited from public industry sources (Invoca, Marchex, HubSpot, APQC). Example figures on this
          page are illustrative unless a client is named and quoted.
        </span>
      </footer>
    </main>
  );
}
