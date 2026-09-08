"use client";

import { useEffect, useState } from "react";

const KEY = "tlg_consent_v1";
const EVT = "tlg-consent-changed";

export type ConsentState = "accepted" | "rejected" | "undecided";

export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "undecided";
  const v = window.localStorage.getItem(KEY);
  return v === "accepted" || v === "rejected" ? v : "undecided";
}

function writeConsent(v: "accepted" | "rejected") {
  window.localStorage.setItem(KEY, v);
  window.dispatchEvent(new CustomEvent(EVT, { detail: v }));
}

export default function ConsentBanner() {
  const [state, setState] = useState<ConsentState>("undecided");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setState(readConsent());
  }, []);

  if (!mounted || state !== "undecided") return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie and tracking consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl border-2 border-slate-900 bg-white p-4 shadow-[6px_6px_0_0_#0f172a] md:p-5"
    >
      <p className="text-sm text-slate-900">
        We use cookies for analytics and advertising (Meta Pixel). No advertising
        cookies fire until you choose. See our{" "}
        <a href="/privacy" className="underline underline-offset-2 decoration-brand-green">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            writeConsent("accepted");
            setState("accepted");
          }}
          className="bg-cta px-4 py-2 text-sm font-semibold text-cta-fg shadow-cta transition hover:bg-cta-hover"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => {
            writeConsent("rejected");
            setState("rejected");
          }}
          className="border-2 border-slate-900 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[3px_3px_0_0_#0f172a] transition hover:bg-slate-50"
        >
          Reject non-essential
        </button>
      </div>
    </div>
  );
}

export const CONSENT_EVENT = EVT;
