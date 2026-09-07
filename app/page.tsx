import LedgerTape from "@/components/LedgerTape";
import Quiz from "@/components/Quiz";

const BLEED = [
  {
    line: "call answered by voicemail",
    detail: "62% of calls to a small service business go unanswered. The next name on Google picks up.",
    stat: "62%",
    tint: "bg-brand-green-soft",
  },
  {
    line: "hours on quotes, invoices, follow-ups",
    detail: "Your team burns 40% of the workday on paperwork nobody wants to do. It's payroll, going out the back door.",
    stat: "40%",
    tint: "bg-[#FDE68A]",
  },
  {
    line: "web lead cools to room temperature",
    detail: "After five minutes of silence, the odds a web lead converts drop by 80%. Speed-to-lead isn't a metric — it's the metric.",
    stat: "80%",
    tint: "bg-[#BFDBFE]",
  },
  {
    line: "old customer list sitting in a spreadsheet",
    detail: "The names you haven't texted since 2022. Real money. Sitting still. This one we can move in a week.",
    stat: "~1,400",
    tint: "bg-[#FBCFE8]",
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
    tint: "bg-brand-green-soft",
    tag: "always on",
  },
  {
    name: "Database reactivation sprint",
    outcome:
      "A one-off AI text campaign against your dormant list. Personalized, sent at a real hour on a real day. Booked jobs — not blasted texts.",
    tint: "bg-[#FDE68A]",
    tag: "week 1 roi",
  },
  {
    name: "Admin & follow-up copilot",
    outcome:
      "Drafts the quote, sends the invoice reminder, syncs the CRM. Cuts the payroll drag on the paperwork nobody wants to do.",
    tint: "bg-[#BFDBFE]",
    tag: "back-office",
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

export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] px-5 md:px-10">
      {/* ─── Header ─────────────────────────────────────── */}
      <header className="flex flex-wrap items-center justify-between gap-4 py-6">
        <a
          href="#"
          className="brut inline-flex items-baseline gap-2 px-4 py-2 font-display text-lg font-extrabold"
        >
          <span className="text-brand-blue">townlink</span>
          <span className="rounded-md border-2 border-slate-900 bg-brand-green px-1.5 py-0.5 font-mono text-xs text-white">
            /global
          </span>
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="tel:+13312345580"
            className="brut brut-hover hidden items-baseline gap-2 px-3.5 py-2 font-mono text-[13px] font-bold text-slate-900 sm:inline-flex"
          >
            <span className="text-[10px] uppercase tracking-wider text-slate-500">call ›</span>
            (331) 234-5580
          </a>
          <a href="#audit" className="btn-cta btn-cta-sm">
            Book my free missed-call audit
          </a>
        </div>
      </header>

      {/* ─── 001 · Hero ─────────────────────────────────── */}
      <section
        aria-labelledby="hero"
        className="grid gap-10 py-16 md:grid-cols-[1fr_460px] md:gap-14 md:py-24"
      >
        <div>
          <p className="seq mb-6">001 · addison + dupage · done-for-you · 14-day install</p>
          <h1
            id="hero"
            className="font-display text-[46px] font-extrabold text-slate-900 md:text-[76px]"
          >
            Stop losing calls to the shop that{" "}
            <span className="relative inline-block">
              <span className="relative z-10">answered first.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-[#F59E0B] md:h-6"
              />
            </span>
          </h1>
          <div className="mt-6 inline-flex items-center gap-2 border-2 border-slate-900 bg-brand-green px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_#0f172a]">
            done-for-you · we wire it in · you approve the voice
          </div>
          <p className="mt-6 max-w-[56ch] text-lg text-slate-700 md:text-xl">
            A 24/7 AI receptionist that picks up in 30 seconds, books straight to your calendar, and
            texts your old customer list back to life. We wire it into the phone number and
            calendar you already use. You approve the voice. Your team doesn&apos;t touch a thing.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#audit" className="btn-cta">
              Book my free missed-call audit
            </a>
            <span className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider">
              14 days · month two on the house
            </span>
          </div>

          <p className="mt-6 max-w-[56ch] text-[15px] text-slate-700">
            Built by a small team out of Addison. We answer our own phone at{" "}
            <a
              href="tel:+13312345580"
              className="font-bold text-slate-900 underline decoration-brand-green decoration-4 underline-offset-4"
            >
              (331) 234-5580
            </a>{" "}
            — that number rings a person, not the AI.
          </p>
        </div>

        <aside aria-label="Live intake sample" className="md:-rotate-1">
          <LedgerTape />
          <p className="mt-4 text-center font-mono text-[11px] font-bold uppercase tracking-wider text-slate-600">
            sample intake · anonymized · naperville dental
          </p>
        </aside>
      </section>

      {/* ─── 002 · The bleed ────────────────────────────── */}
      <section aria-labelledby="bleed" className="py-16 md:py-24">
        <p className="seq mb-6">002 · what&apos;s leaking</p>
        <h2 id="bleed" className="max-w-[20ch] font-display text-4xl font-extrabold md:text-6xl">
          Four quiet holes in a service business, before lunch.
        </h2>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {BLEED.map((row, i) => (
            <li
              key={row.line}
              className={`brut brut-hover ${row.tint} p-6 md:p-8`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-white font-mono text-sm font-bold text-slate-900">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-4xl font-extrabold tabular-nums text-slate-900 md:text-5xl">
                  {row.stat}
                </span>
              </div>
              <p className="mt-6 font-display text-2xl font-extrabold text-slate-900 md:text-3xl">
                {row.line}
              </p>
              <p className="mt-3 text-slate-800">{row.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── QW · Quick-Win: Database Reactivation Sprint ─ */}
      <section
        aria-labelledby="qw"
        className="brut-lg my-8 bg-brand-green px-6 py-16 text-white md:px-14 md:py-24"
      >
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start md:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-[3px_3px_0_0_#0f172a]">
              qw · week one cashflow
            </span>
            <h2
              id="qw"
              className="mt-6 max-w-[18ch] font-display text-4xl font-extrabold text-white md:text-6xl"
            >
              Old list. New bookings. Inside seven days.
            </h2>
            <p className="mt-6 max-w-[54ch] text-white/95">
              Before we touch your phones, we run one AI text campaign against the customer list
              gathering dust in Airtable, Google Sheets, or the back of your CRM. Written in your
              voice. Sent at a real hour, on a real day. Bookings land on your calendar while
              we&apos;re still installing the receptionist.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md border-2 border-slate-900 bg-[#F59E0B] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-[3px_3px_0_0_#0f172a]">
              first-week roi · before main system is live
            </div>
          </div>

          <div className="brut bg-white p-0 text-slate-900 md:rotate-1">
            <div className="flex items-center justify-between border-b-2 border-slate-900 bg-[#FDE68A] px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-wider">
              <span>reactivation · timeline</span>
              <span className="rounded-full border-2 border-slate-900 bg-white px-2.5 py-0.5">7 days</span>
            </div>
            <ol>
              {REACTIVATION_STEPS.map((s, i) => (
                <li
                  key={s.d}
                  className={`grid grid-cols-[100px_1fr] items-center gap-4 border-b-2 border-slate-900 px-5 py-4 last:border-0 ${
                    i % 2 === 1 ? "bg-slate-50" : ""
                  }`}
                >
                  <span className="inline-flex justify-center rounded-md border-2 border-slate-900 bg-brand-green px-2 py-1 font-mono text-[11px] font-bold uppercase text-white">
                    {s.d}
                  </span>
                  <span className="font-medium text-slate-900">{s.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── 003 · What gets installed ──────────────────── */}
      <section aria-labelledby="install" className="py-16 md:py-24">
        <p className="seq mb-6">003 · what gets installed</p>
        <h2
          id="install"
          className="max-w-[24ch] font-display text-4xl font-extrabold md:text-6xl"
        >
          One receptionist. One reactivation engine. Zero new software.
        </h2>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {INSTALLS.map((row, i) => (
            <li key={row.name} className={`brut brut-hover ${row.tint} p-6 md:p-8`}>
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-slate-900 bg-white font-mono text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-900">
                  {row.tag}
                </span>
              </div>
              <p className="mt-6 font-display text-2xl font-extrabold text-slate-900">
                {row.name}
              </p>
              <p className="mt-3 text-slate-800">{row.outcome}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-[3px_3px_0_0_#0f172a]">
          zero new software · your phone number · google or outlook · airtable or sheets
        </div>
      </section>

      {/* ─── 004 · The audit (quiz) ─────────────────────── */}
      <section id="audit" aria-labelledby="audit-h" className="py-16 md:py-24">
        <p className="seq mb-6">004 · the audit</p>
        <h2
          id="audit-h"
          className="mb-12 max-w-[24ch] font-display text-4xl font-extrabold md:text-6xl"
        >
          Three questions. Two minutes. A custom missed-call number sent to your inbox.
        </h2>
        <Quiz />
      </section>

      {/* ─── 005 · Recovered ────────────────────────────── */}
      <section aria-labelledby="recovered" className="py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-16">
          <div>
            <p className="seq mb-6">005 · thirty days in</p>
            <h2
              id="recovered"
              className="max-w-[16ch] font-display text-4xl font-extrabold md:text-6xl"
            >
              One HVAC contractor. Same phone. Same team.
            </h2>
            <p className="mt-6 max-w-[48ch] text-slate-700">
              Recovered from missed calls plus a one-time reactivation sprint. Both live inside 14
              days. Here&apos;s the receipt.
            </p>
          </div>

          <figure className="brut-lg bg-[#FDE68A] p-8 md:-rotate-1 md:p-12">
            <figcaption className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-[3px_3px_0_0_#0f172a]">
              30-day recovered revenue
            </figcaption>
            <p className="mt-5 font-display text-[72px] font-extrabold leading-none text-slate-900 md:text-[104px]">
              $14,000
            </p>
            <blockquote className="mt-8 border-t-2 border-slate-900 pt-6 text-slate-900">
              <p className="text-lg font-medium">
                &ldquo;The reactivation text went out on a Wednesday. Booked $3,200 in service calls
                by Friday. That paid for the whole install before their receptionist was even
                live.&rdquo;
              </p>
              <footer className="mt-3 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700">
                hvac operator · aurora
              </footer>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* ─── 006 · Guarantee ────────────────────────────── */}
      <section aria-labelledby="guarantee" className="py-16 md:py-24">
        <div className="brut-lg bg-[#F59E0B] p-8 md:p-16">
          <p className="seq mb-6">006 · guarantee</p>
          <h2
            id="guarantee"
            className="max-w-[22ch] font-display text-4xl font-extrabold text-slate-900 md:text-7xl"
          >
            If month one doesn&apos;t pay for what you paid us,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">month two is on the house.</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-4 bg-white md:h-6"
              />
            </span>
          </h2>
          <p className="mt-8 max-w-[56ch] text-lg text-slate-900">
            No asterisks. We measure the missed calls we captured and the bookings the reactivation
            sprint generated. If the recovered revenue doesn&apos;t clear what you paid us inside
            30 days, the next month is free. You keep the transcripts either way.
          </p>
          <a href="#audit" className="btn-cta mt-10 bg-white">
            Book my free missed-call audit
          </a>
        </div>
      </section>

      {/* ─── 007 · Questions ────────────────────────────── */}
      <section aria-labelledby="faq" className="py-16 md:py-24">
        <p className="seq mb-6">007 · questions</p>
        <h2 id="faq" className="mb-12 font-display text-4xl font-extrabold md:text-6xl">
          Things owners ask before they say yes.
        </h2>

        <div className="grid gap-5">
          {FAQ.map((f, i) => (
            <details
              key={f.q}
              className="brut group bg-white p-6 md:p-8"
              open={i === 0}
            >
              <summary className="grid cursor-pointer list-none grid-cols-[1fr_36px] items-center gap-6">
                <span className="font-display text-xl font-extrabold text-slate-900 md:text-2xl">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-brand-green font-mono text-xl leading-none text-white transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-5 max-w-[70ch] text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ─── Footer ─────────────────────────────────────── */}
      <footer className="mt-8 grid gap-4 border-t-2 border-slate-900 py-10 font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700 md:grid-cols-3">
        <span>© {new Date().getFullYear()} townlink global · 809 n central ave, addison il 60101</span>
        <span className="md:text-center">
          serving elmhurst · naperville · oak brook · hinsdale · downers grove · addison
        </span>
        <span className="md:text-right">
          <a href="tel:+13312345580" className="underline decoration-brand-green decoration-2 underline-offset-4 hover:text-slate-900">
            (331) 234-5580
          </a>
          {" · "}
          <a href="mailto:info@townlinkglobal.com" className="underline decoration-brand-green decoration-2 underline-offset-4 hover:text-slate-900">
            info@townlinkglobal.com
          </a>
        </span>
      </footer>
    </main>
  );
}
