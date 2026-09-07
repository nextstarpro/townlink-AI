"use client";

import { useEffect, useState } from "react";

type Entry = { t: string; kind: "call" | "book" | "sum"; label: string; amount?: string };

const SEED: Entry[] = [
  { t: "06:14", kind: "call", label: "missed call · 312-555-****" },
  { t: "06:15", kind: "book", label: "booked TUE 9:30a · dental", amount: "480.00" },
  { t: "06:22", kind: "call", label: "missed call · 773-555-****" },
  { t: "06:23", kind: "book", label: "booked WED 2:00p · HVAC svc", amount: "1,240.00" },
  { t: "06:41", kind: "call", label: "missed call · 630-555-****" },
  { t: "06:42", kind: "book", label: "booked THU 8:15a · consult", amount: "620.00" },
  { t: "07:03", kind: "book", label: "reactivated · 2019 client", amount: "3,150.00" },
];

const NEXT_LINES: Entry[] = [
  { t: "07:19", kind: "call", label: "missed call · 708-555-****" },
  { t: "07:20", kind: "book", label: "booked FRI 10:00a · quote", amount: "890.00" },
  { t: "07:44", kind: "book", label: "reactivated · 2021 client", amount: "2,100.00" },
  { t: "08:02", kind: "call", label: "missed call · 224-555-****" },
  { t: "08:03", kind: "book", label: "booked MON 11:30a · repair", amount: "540.00" },
];

export default function LedgerTape() {
  const [lines, setLines] = useState<Entry[]>(SEED);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let i = 0;
    const start = window.setTimeout(() => {
      const id = window.setInterval(() => {
        setLines((prev) => {
          const next = NEXT_LINES[i % NEXT_LINES.length];
          i += 1;
          return [...prev.slice(-9), next];
        });
      }, 3500);
      (window as unknown as { __ledgerInterval?: number }).__ledgerInterval = id;
    }, 1500);
    return () => {
      window.clearTimeout(start);
      const id = (window as unknown as { __ledgerInterval?: number }).__ledgerInterval;
      if (id) window.clearInterval(id);
    };
  }, []);

  const total = lines
    .filter((l) => l.amount)
    .reduce((sum, l) => sum + Number(l.amount!.replace(/,/g, "")), 0);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white font-mono text-[13px] leading-relaxed text-text-body shadow-sm transition hover:shadow-lg">
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3 text-slate-500">
        <span className="text-[11px] uppercase tracking-wider">
          townlink global · live intake · dupage county
        </span>
        <span
          aria-hidden
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-brand-green-ink shadow-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green" />
          live
        </span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[52px_1fr_88px] gap-3 border-b border-slate-100 px-5 py-2 text-[10px] uppercase tracking-wider text-slate-400">
        <span>time</span>
        <span>event</span>
        <span className="text-right">usd</span>
      </div>

      {/* Tape */}
      <ol
        className="max-h-[360px] overflow-hidden px-5"
        aria-live="polite"
        aria-label="Live intake log"
      >
        {lines.map((l, idx) => (
          <li
            key={`${l.t}-${idx}`}
            className="tape-line grid grid-cols-[52px_1fr_88px] gap-3 border-b border-slate-100 py-2 last:border-0"
          >
            <span className="text-slate-500">{l.t}</span>
            <span className="flex items-center gap-2">
              {l.kind === "call" && (
                <span className="inline-flex h-4 items-center rounded-full bg-slate-100 px-1.5 text-[9px] font-medium uppercase tracking-wider text-slate-500">
                  call
                </span>
              )}
              {l.kind === "book" && (
                <span className="inline-flex h-4 items-center rounded-full bg-brand-green-soft px-1.5 text-[9px] font-medium uppercase tracking-wider text-brand-green-ink">
                  book
                </span>
              )}
              <span>{l.label}</span>
            </span>
            <span className="text-right tabular-nums text-slate-700">
              {l.amount ? `$${l.amount}` : "—"}
            </span>
          </li>
        ))}
      </ol>

      {/* Total row */}
      <div className="grid grid-cols-[1fr_auto] items-baseline gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4">
        <span className="text-[11px] uppercase tracking-wider text-slate-500">
          recovered · past hour
        </span>
        <span className="font-display text-3xl font-extrabold tabular-nums text-brand-blue-ink">
          ${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
}
