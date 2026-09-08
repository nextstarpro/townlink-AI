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
  "Inbox is buried — quotes slip through",
  "Old customer list going stale",
  "Web leads go cold before I reply",
  "Scheduling eats the morning",
] as const;

type Step = 1 | 2 | 3 | 4;

export default function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [businessType, setBusinessType] = useState("");
  const [headache, setHeadache] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [consent, setConsent] = useState({ contact: false, terms: false });
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
        body: JSON.stringify({
          ...form,
          businessType,
          headache,
          consent: {
            contactByPhoneSmsEmail: consent.contact,
            termsAccepted: consent.terms,
            ts: Date.now(),
            userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
          },
        }),
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
    <div id="quiz" className="border-y-2 border-brand-blue-ink bg-white">
      {/* Ledger-style header */}
      <div className="flex items-center justify-between border-b border-brand-green-line px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
        <span>form · estimate intake</span>
        <span>{step < 4 ? `step ${step} of 3` : "complete"}</span>
      </div>

      <div className="px-4 py-8 md:px-10 md:py-12">
        {step === 1 && (
          <fieldset>
            <legend className="mb-6 max-w-xl font-display text-2xl font-extrabold text-brand-blue-ink md:text-3xl">
              What kind of business are you running?
            </legend>
            <div className="divide-y divide-brand-green-line border-y border-brand-green-line">
              {BUSINESS_TYPES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setBusinessType(opt);
                    setStep(2);
                  }}
                  className="grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 py-4 text-left transition hover:bg-brand-green-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <span className="font-mono text-[11px] text-brand-green-ink">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-medium text-text-body">{opt}</span>
                  <span className="pr-2 font-mono text-brand-green">›</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-6 max-w-xl font-display text-2xl font-extrabold text-brand-blue-ink md:text-3xl">
              Which one's costing you the most?
            </legend>
            <div className="divide-y divide-brand-green-line border-y border-brand-green-line">
              {HEADACHES.map((opt, i) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setHeadache(opt);
                    setStep(3);
                  }}
                  className="grid w-full grid-cols-[40px_1fr_auto] items-center gap-4 py-4 text-left transition hover:bg-brand-green-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
                >
                  <span className="font-mono text-[11px] text-brand-green-ink">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                  <span className="font-medium text-text-body">{opt}</span>
                  <span className="pr-2 font-mono text-brand-green">›</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-6 font-mono text-[12px] uppercase tracking-wider text-brand-blue underline underline-offset-4"
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
            <label className="grid gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                name
              </span>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border-b border-brand-blue-ink bg-transparent py-2 text-lg font-medium text-text-body focus:outline-none focus:border-b-2"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                business email
              </span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border-b border-brand-blue-ink bg-transparent py-2 text-lg font-medium text-text-body focus:outline-none focus:border-b-2"
              />
            </label>
            <label className="grid gap-1.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
                phone
              </span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="border-b border-brand-blue-ink bg-transparent py-2 text-lg font-medium text-text-body focus:outline-none focus:border-b-2"
              />
            </label>
            <fieldset className="mt-2 grid gap-3 border-t border-brand-green-line pt-4">
              <legend className="sr-only">Consent</legend>
              <label className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm text-text-body">
                <input
                  type="checkbox"
                  required
                  checked={consent.contact}
                  onChange={(e) => setConsent((c) => ({ ...c, contact: e.target.checked }))}
                  className="mt-1 h-4 w-4 accent-brand-blue"
                />
                <span>
                  I agree TownLink Global (NextStar Procurement LLC) may contact me by phone,
                  SMS, and email about my estimate. Message and data rates may apply. Reply
                  STOP to opt out.
                </span>
              </label>
              <label className="grid grid-cols-[auto_1fr] items-start gap-3 text-sm text-text-body">
                <input
                  type="checkbox"
                  required
                  checked={consent.terms}
                  onChange={(e) => setConsent((c) => ({ ...c, terms: e.target.checked }))}
                  className="mt-1 h-4 w-4 accent-brand-blue"
                />
                <span>
                  I agree to the{" "}
                  <a href="/terms" target="_blank" className="underline">
                    Terms of Service
                  </a>{" "}
                  (including the binding-arbitration and class-action-waiver clauses) and the{" "}
                  <a href="/privacy" target="_blank" className="underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </fieldset>
            {error && <p className="font-mono text-sm text-red-600">error · {error}</p>}
            <div className="mt-4 flex items-center gap-4">
              <button
                type="submit"
                disabled={submitting || !consent.contact || !consent.terms}
                className="bg-cta px-7 py-4 font-semibold text-cta-fg shadow-cta transition hover:bg-cta-hover hover:shadow-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta-ring disabled:opacity-60"
              >
                {submitting ? "Sending" : "Send my estimate"}
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
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-brand-green-ink">
              logged · reference #{Math.floor(Math.random() * 90000 + 10000)}
            </p>
            <h3 className="mb-4 font-display text-3xl font-extrabold text-brand-blue-ink md:text-4xl">
              You're on the schedule. Pick a slot.
            </h3>
            <p className="mb-8 text-text-muted">
              Your custom AI ROI estimate is being drafted. Grab a 10-minute strategy call while
              you're here:
            </p>
            <a
              href="https://cal.com/townlink-ai/audit"
              className="inline-block bg-cta px-7 py-4 font-semibold text-cta-fg shadow-cta hover:bg-cta-hover"
            >
              Book my strategy call
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
