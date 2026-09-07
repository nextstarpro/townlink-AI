import { createHash } from "node:crypto";

/** Meta CAPI requires lowercased, trimmed, SHA-256 hex for PII. */
export function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/** Normalize phone to E.164-ish digits, then hash. */
export function hashPhone(raw: string): string {
  const digits = raw.replace(/\D+/g, "");
  return createHash("sha256").update(digits).digest("hex");
}
