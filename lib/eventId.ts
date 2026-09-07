import { randomUUID } from "node:crypto";

/** Shared eventId lets browser Pixel + server CAPI deduplicate the same Lead. */
export function newEventId(): string {
  return randomUUID();
}
