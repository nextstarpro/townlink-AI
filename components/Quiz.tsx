"use client";

import { useState } from "react";
import { trackLead } from "./MetaPixel";

const BUSINESS_TYPES = [
  "Home services",
  "Legal",
  "Healthcare",
  "B2B / professional",
  "Retail / other",
] as const;

const HEADACHES = [
  "Phone rings, nobody answers",
  "Old customer list going stale",
  "Web leads go cold before I reply",
  "Scheduling eats the morning",
] as const;

type Step = 1 | 2 | 3 | 4;

const OPTION_CLS =
  "group grid w-full grid-cols-[44px_1fr_auto] items-center gap-4 rounded-xl border-2 border-slate-900 bg-white px-5 py-4 text-left shadow-[4px_4px_0_0_#0f172a] transition hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#FDE68A] hover:shadow-[2px_2px_0_0_#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue";

const INPUT_CLS =
  "w-full rounded-xl border-2 border-slate-900 bg-white px-4 py-3 text-base font-medium text-slate-900 shadow-[3px_3px_0_0_#0f172a] transition placeholder:text-slate-400 focus:bg-[#FEFCE8] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-[2px_2px_0_0_#0f172a]";

export default function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [businessType, setBusinessType] = useState("");
  const [headache, setHeadache] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, businessType, headache }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Submission failed");
      trackLead(json.eventId);
      setStep(4);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div id="quiz" className="brut-lg overflow-hidden bg-white">
      {/* Header strip */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 bg-brand-blue px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
        <span>form · audit intake</span>
        <span className="inline-flex items-center rounded-full border-2 border-slate-900 bg-white px-2.5 py-0.5 text-slate-900">
          {step < 4 ? `step ${step} of 3` : "complete"}
        </span>
      </div>

      {/* Progress bar */}
      <div className="border-b-2 border-slate-900 bg-[#FEFCE8]">
        <div
          className="h-2 bg-brand-green transition-all"
          style={{ width: `${(Math.min(step, 3) / 3) * 100}%` }}
        />
      </div>

      <div className="px-6 py-10 md:px-12 md:py-14">
        {step === 1 && (
          <fieldset>
            <legend className="mb-8 max-w-xl font-display text-2xl font-extrabold text-slate-900 md:text-4xl">
              What kind of business are you running?
            </legend>
            <div className="grid gap-4">
              {BUSINESS_TYPES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setBusinessType(opt);
                    setStep(2);
                  }}
                  className={OPTION_CLS}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-brand-green font-mono text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-slate-900">{opt}</span>
                  <span className="font-mono text-lg font-bold text-slate-900 transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-8 max-w-xl font-display text-2xl font-extrabold text-slate-900 md:text-4xl">
              Which one&apos;s costing you the most?
            </legend>
            <div className="grid gap-4">
              {HEADACHES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setHeadache(opt);
                    setStep(3);
                  }}
                  className={OPTION_CLS}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-900 bg-brand-blue font-mono text-xs font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-slate-900">{opt}</span>
                  <span className="font-mono text-lg font-bold text-slate-900 transition group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-8 font-mono text-[12px] font-bold uppercase tracking-wider text-slate-900 underline decoration-brand-green decoration-2 underline-offset-4"
            >
              ← back
            </button>
          </fieldset>
        )}

        {step === 3 && (
          <form onSubmit={submit} className="grid max-w-xl gap-5">
            <h3 className="font-display text-2xl font-extrabold text-slate-900 md:text-4xl">
              Where do we send the estimate?
            </h3>
            <label className="grid gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700">
                name
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={INPUT_CLS}
              />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700">
                business email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={INPUT_CLS}
              />
            </label>
            <label className="grid gap-2">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-700">
                phone
              </span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={INPUT_CLS}
              />
            </label>
            {error && (
              <p className="rounded-xl border-2 border-slate-900 bg-[#FCA5A5] px-4 py-3 font-mono text-sm font-bold text-slate-900 shadow-[3px_3px_0_0_#0f172a]">
                error · {error}
              </p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button type="submit" disabled={submitting} className="btn-cta disabled:opacity-60">
                {submitting ? "Sending…" : "Send my audit →"}
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-mono text-[12px] font-bold uppercase tracking-wider text-slate-900 underline decoration-brand-green decoration-2 underline-offset-4"
              >
                ← back
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center rounded-full border-2 border-slate-900 bg-brand-green px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_#0f172a]">
              logged · reference #{Math.floor(Math.random() * 90000 + 10000)}
            </p>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-slate-900 md:text-5xl">
              You&apos;re on the schedule. Pick a slot.
            </h3>
            <p className="mb-8 text-slate-700">
              Your custom AI ROI estimate is being drafted. Grab a 10-minute strategy call while
              you&apos;re here:
            </p>
            <a href="https://cal.com/townlink-ai/audit" className="btn-cta">
              Book my strategy call →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
