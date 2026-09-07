import LedgerTape from "@/components/LedgerTape";
import Quiz from "@/components/Quiz";

const BLEED = [
  {
    line: "call answered by voicemail",
    detail: "62% of calls to a small service business go unanswered. The next name on Google picks up.",
    stat: "62%",
  },
  {
    line: "hours on quotes, invoices, follow-ups",
    detail: "Your team burns 40% of the workday on paperwork nobody wants to do. It's payroll, going out the back door.",
    stat: "40%",
  },
  {
    line: "web lead cools to room temperature",
    detail: "After five minutes of silence, the odds a web lead converts drop by 80%. Speed-to-lead isn't a metric — it's the metric.",
    stat: "80%",
  },
  {
    line: "old customer list sitting in a spreadsheet",
    detail: "The names you haven't texted since 2022. Real money. Sitting still. This one we can move in a week.",
    stat: "~1,400",
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
    name: "Database reactivation sprint",
    outcome:
      "A one-off AI text campaign against your dormant list. Personalized, sent at a real hour on a real day. Booked jobs — not blasted texts.",
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
    q: "What actually happens in the first 14 days?",
    a: "Days 1–3: reactivation sprint drafted against your list and sent. Days 4–10: your receptionist's voice is tuned to your business and integrations are wired in. Days 10–14: dry-run against test calls, then flip live. You approve every step.",
  },
  {
    q: "Will callers know it's a robot?",
    a: "We tune the assistant to your voice and your business — how you greet, what you ask, what you never say. Callers hear a receptionist, not a bot.",
  },
  {
    q: "Do I need to switch software?",
    a: "No. We work with your current phone number, calendar (Google or Outlook), and list (Airtable, Sheets, or your CRM). Your team doesn't log into anything new.",
  },
];

const CTA_BTN =
  "inline-flex items-center justify-center rounded-lg border-t border-white/30 bg-cta px-7 py-4 font-semibold text-cta-fg shadow-sm transition duration-150 hover:bg-cta-hover hover:scale-[1.02] hover:shadow-md active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-ring";

const CTA_BTN_SM =
  "inline-flex items-center justify-center rounded-lg border-t border-white/30 bg-cta px-5 py-2.5 text-sm font-semibold text-cta-fg shadow-sm transition duration-150 hover:bg-cta-hover hover:scale-[1.02] hover:shadow-md";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1180px] px-5 md:px-10">
      {/* ─── Header ─────────────────────────────────────── */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 py-5">
        <a href="#" className="flex items-baseline gap-1.5 font-display font-extrabold">
          <span className="text-xl text-brand-blue">townlink</span>
          <span className="font-mono text-sm text-brand-green">/global</span>
        </a>
        <div className="flex items-center gap-3 md:gap-5">
          <a
            href="tel:+13312345580"
            className="hidden items-baseline gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 font-mono text-[13px] text-brand-blue-ink shadow-sm transition hover:border-slate-300 hover:shadow-md sm:flex"
          >
            <span className="text-[11px] uppercase tracking-wider text-slate-500">call ›</span>
            (331) 234-5580
          </a>
          <a href="#audit" className={CTA_BTN_SM}>
            Book my free missed-call audit
          </a>
        </div>
      </header>

      {/* ─── 001 · Hero ─────────────────────────────────── */}
      <section
        aria-labelledby="hero"
        className="grid gap-10 py-16 md:grid-cols-[1fr_420px] md:gap-14 md:py-24"
      >
        <div>
          <p className="seq mb-5">001 · addison + dupage county · done-for-you · 14-day install</p>
          <h1
            id="hero"
            className="font-display text-[44px] font-extrabold text-brand-blue-ink md:text-[68px]"
          >
            Stop losing calls to the shop that answered first.
          </h1>
          <p className="mt-5 max-w-[54ch] font-mono text-[12px] uppercase tracking-wider text-slate-500">
            done-for-you · we build it, wire it into your existing phone + calendar, and run it
          </p>
          <p className="mt-6 max-w-[54ch] text-lg text-text-muted md:text-xl">
            A 24/7 AI receptionist that picks up in 30 seconds, books straight to your calendar, and
            texts your old customer list back to life. We wire it into the phone number and
            calendar you already use. You approve the voice. Your team doesn't touch a thing.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#audit" className={CTA_BTN}>
              Book my free missed-call audit
            </a>
          </div>

          <p className="mt-6 max-w-[54ch] font-mono text-[12px] uppercase tracking-wider text-slate-500">
            live in 14 days · month two is on the house if month one doesn't clear
          </p>
          <p className="mt-4 max-w-[54ch] text-[15px] text-text-muted">
            Built by a small team out of Addison. We answer our own phone at{" "}
            <a
              href="tel:+13312345580"
              className="font-medium text-brand-blue-ink underline underline-offset-4 decoration-brand-green"
            >
              (331) 234-5580
            </a>{" "}
            — that number rings a person, not the AI.
          </p>
        </div>

        <aside aria-label="Live intake sample">
          <LedgerTape />
          <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-slate-500">
            sample intake · anonymized · naperville dental office
          </p>
        </aside>
      </section>

      {/* ─── 002 · The bleed ────────────────────────────── */}
      <section aria-labelledby="bleed" className="py-16 md:py-24">
        <p className="seq mb-5">002 · what's leaking</p>
        <h2 id="bleed" className="max-w-[20ch] font-display text-4xl font-extrabold md:text-5xl">
          Four quiet holes in a service business, before lunch.
        </h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {BLEED.map((row, i) => (
            <li
              key={row.line}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg md:p-8"
            >
              <div className="flex items-baseline justify-between gap-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
                  {String(i + 1).padStart(3, "0")}
                </span>
                <span className="font-display text-3xl font-bold tabular-nums text-brand-green md:text-4xl">
                  {row.stat}
                </span>
              </div>
              <p className="mt-4 font-display text-xl font-bold text-brand-blue-ink md:text-2xl">
                {row.line}
              </p>
              <p className="mt-3 text-text-muted">{row.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── QW · Quick-Win: Database Reactivation Sprint ─ */}
      <section
        aria-labelledby="qw"
        className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 md:px-12 md:py-24"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
          <div>
            <p className="seq mb-5">qw · week one cashflow</p>
            <h2
              id="qw"
              className="max-w-[18ch] font-display text-4xl font-extrabold text-brand-blue-ink md:text-5xl"
            >
              The reactivation sprint. Old list. New bookings. Inside seven days.
            </h2>
            <p className="mt-6 max-w-[54ch] text-text-body">
              Before we touch your phones, we run one AI text campaign against the customer list
              gathering dust in Airtable, Google Sheets, or the back of your CRM. Written in your
              voice. Sent at a real hour, on a real day. Bookings land on your calendar while
              we're still installing the receptionist.
            </p>
            <p className="mt-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink shadow-sm">
              first-week roi · before the main system is live
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">
              <span>reactivation · timeline</span>
              <span className="rounded-full bg-brand-green-soft px-2.5 py-0.5 text-brand-green-ink">7 days</span>
            </div>
            <ol className="divide-y divide-slate-100">
              {REACTIVATION_STEPS.map((s) => (
                <li key={s.d} className="grid grid-cols-[92px_1fr] gap-4 px-6 py-4">
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
      <section aria-labelledby="install" className="py-16 md:py-24">
        <p className="seq mb-5">003 · what gets installed</p>
        <h2
          id="install"
          className="max-w-[24ch] font-display text-4xl font-extrabold md:text-5xl"
        >
          One receptionist. One reactivation engine. Zero new software.
        </h2>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {INSTALLS.map((row, i) => (
            <li
              key={row.name}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg md:p-8"
            >
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                {String(i + 1).padStart(3, "0")}
              </span>
              <p className="mt-4 font-display text-xl font-bold text-brand-blue-ink md:text-2xl">
                {row.name}
              </p>
              <p className="mt-3 text-text-muted">{row.outcome}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-slate-500 shadow-sm">
          zero new software · works with your phone number · google or outlook · airtable or sheets
        </p>
      </section>

      {/* ─── 004 · The audit (quiz) ─────────────────────── */}
      <section id="audit" aria-labelledby="audit-h" className="py-16 md:py-24">
        <p className="seq mb-5">004 · the audit</p>
        <h2
          id="audit-h"
          className="mb-10 max-w-[24ch] font-display text-4xl font-extrabold md:text-5xl"
        >
          Three questions. Two minutes. A custom missed-call number sent to your inbox.
        </h2>
        <Quiz />
      </section>

      {/* ─── 005 · Recovered ────────────────────────────── */}
      <section aria-labelledby="recovered" className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div>
            <p className="seq mb-5">005 · what thirty days looks like</p>
            <h2
              id="recovered"
              className="max-w-[16ch] font-display text-4xl font-extrabold md:text-5xl"
            >
              One HVAC contractor. Same phone. Same team.
            </h2>
            <p className="mt-6 max-w-[48ch] text-text-muted">
              Recovered from missed calls plus a one-time reactivation sprint. Both live inside 14
              days. Here's the receipt.
            </p>
          </div>

          <figure className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <figcaption className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-slate-500">
              30-day recovered revenue
            </figcaption>
            <p className="mt-4 font-display text-[68px] font-extrabold leading-none text-brand-blue-ink md:text-[96px]">
              $14,000
            </p>
            <blockquote className="mt-6 border-t border-slate-200 pt-6 text-text-body">
              <p className="text-lg">
                "The reactivation text went out on a Wednesday. Booked $3,200 in service calls by
                Friday. That paid for the whole install before their receptionist was even live."
              </p>
              <footer className="mt-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                hvac operator · aurora
              </footer>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* ─── 006 · Guarantee ────────────────────────────── */}
      <section aria-labelledby="guarantee" className="py-16 md:py-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-14">
          <p className="seq mb-5">006 · guarantee</p>
          <h2
            id="guarantee"
            className="max-w-[22ch] font-display text-4xl font-extrabold text-brand-blue-ink md:text-6xl"
          >
            If month one doesn't pay for what you paid us,{" "}
            <span className="text-brand-green-ink underline decoration-brand-green decoration-4 underline-offset-4">
              month two is on the house.
            </span>
          </h2>
          <p className="mt-8 max-w-[56ch] text-lg text-text-muted">
            No asterisks. We measure the missed calls we captured and the bookings the reactivation
            sprint generated. If the recovered revenue doesn't clear what you paid us inside 30 days,
            the next month is free. You keep the transcripts either way.
          </p>
          <a href="#audit" className={`${CTA_BTN} mt-10`}>
            Book my free missed-call audit
          </a>
        </div>
      </section>

      {/* ─── 007 · Questions ────────────────────────────── */}
      <section aria-labelledby="faq" className="py-16 md:py-24">
        <p className="seq mb-5">007 · questions</p>
        <h2 id="faq" className="mb-10 font-display text-4xl font-extrabold md:text-5xl">
          Things owners ask before they say yes.
        </h2>

        <div className="grid gap-4">
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 md:p-8"
              open={i === 0}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_28px] items-center gap-6">
                <span className="font-display text-lg font-bold text-brand-blue-ink md:text-xl">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-mono text-lg leading-none text-brand-green transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-[70ch] text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────── */}
      <footer className="mt-8 grid gap-4 border-t border-slate-200 py-10 font-mono text-[11px] uppercase tracking-wider text-slate-500 md:grid-cols-3">
        <span>© {new Date().getFullYear()} townlink global · 809 n central ave, addison il 60101</span>
        <span className="md:text-center">
          serving elmhurst · naperville · oak brook · hinsdale · downers grove · addison
        </span>
        <span className="md:text-right">
          <a href="tel:+13312345580" className="hover:text-brand-blue-ink">(331) 234-5580</a>
          {" · "}
          <a href="mailto:info@townlinkglobal.com" className="hover:text-brand-blue-ink">
            info@townlinkglobal.com
          </a>
        </span>
      </footer>
    </main>
  );
}
