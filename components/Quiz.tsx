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

const CTA_BTN =
  "inline-flex items-center justify-center rounded-lg border-t border-white/30 bg-cta px-7 py-4 font-semibold text-cta-fg shadow-sm transition duration-150 hover:bg-cta-hover hover:scale-[1.02] hover:shadow-md active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-ring";

const INPUT_CLS =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-text-body shadow-sm transition placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10";

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
    <div
      id="quiz"
      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      {/* Header strip */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-3 font-mono text-[11px] uppercase tracking-wider text-slate-500">
        <span>form · audit intake</span>
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-brand-green-ink shadow-sm">
          {step < 4 ? `step ${step} of 3` : "complete"}
        </span>
      </div>

      <div className="px-6 py-10 md:px-10 md:py-12">
        {step === 1 && (
          <fieldset>
            <legend className="mb-8 max-w-xl font-display text-2xl font-extrabold text-brand-blue-ink md:text-3xl">
              What kind of business are you running?
            </legend>
            <div className="grid gap-3">
              {BUSINESS_TYPES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setBusinessType(opt);
                    setStep(2);
                  }}
                  className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-mono text-[11px] text-slate-500 group-hover:border-brand-blue group-hover:text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-text-body">{opt}</span>
                  <span className="font-mono text-brand-green transition group-hover:translate-x-0.5">
                    ›
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-8 max-w-xl font-display text-2xl font-extrabold text-brand-blue-ink md:text-3xl">
              Which one&apos;s costing you the most?
            </legend>
            <div className="grid gap-3">
              {HEADACHES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setHeadache(opt);
                    setStep(3);
                  }}
                  className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 rounded-lg border border-slate-200 bg-white px-5 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 font-mono text-[11px] text-slate-500 group-hover:border-brand-blue group-hover:text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-text-body">{opt}</span>
                  <span className="font-mono text-brand-green transition group-hover:translate-x-0.5">
                    ›
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-8 font-mono text-[12px] uppercase tracking-wider text-brand-blue underline underline-offset-4"
            >
              back
            </button>
          </fieldset>
        )}

        {step === 3 && (
          <form onSubmit={submit} className="grid max-w-xl gap-5">
            <h3 className="font-display text-2xl font-extrabold text-brand-blue-ink md:text-3xl">
              Where do we send the estimate?
            </h3>
            <label className="grid gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
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
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
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
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-500">
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
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 font-mono text-sm text-red-700">
                error · {error}
              </p>
            )}
            <div className="mt-4 flex items-center gap-4">
              <button type="submit" disabled={submitting} className={CTA_BTN}>
                {submitting ? "Sending" : "Send my audit"}
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="font-mono text-[12px] uppercase tracking-wider text-brand-blue underline underline-offset-4"
              >
                back
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="max-w-xl">
            <p className="mb-3 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              logged · reference #{Math.floor(Math.random() * 90000 + 10000)}
            </p>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-brand-blue-ink md:text-4xl">
              You&apos;re on the schedule. Pick a slot.
            </h3>
            <p className="mb-8 text-text-muted">
              Your custom AI ROI estimate is being drafted. Grab a 10-minute strategy call while
              you&apos;re here:
            </p>
            <a href="https://cal.com/townlink-ai/audit" className={CTA_BTN}>
              Book my strategy call
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
