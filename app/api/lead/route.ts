import { NextRequest, NextResponse } from "next/server";
import { newEventId } from "@/lib/eventId";
import { sha256, hashPhone } from "@/lib/hash";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  headache: string;
  consent?: {
    contactByPhoneSmsEmail?: boolean;
    termsAccepted?: boolean;
    ts?: number;
    userAgent?: string;
  };
};

function bad(msg: string, status = 400) {
  return NextResponse.json({ ok: false, error: msg }, { status });
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return bad("Invalid JSON");
  }

  const { name, email, phone, businessType, headache, consent } = body;
  if (!name || !email || !phone) return bad("Missing name, email, or phone");
  if (!consent?.contactByPhoneSmsEmail || !consent?.termsAccepted) {
    return bad("Consent required: contact permission and terms acceptance.");
  }

  const eventId = newEventId();
  const eventTime = Math.floor(Date.now() / 1000);
  const clientIp =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;
  const fbp = req.cookies.get("_fbp")?.value;
  const fbc = req.cookies.get("_fbc")?.value;
  const sourceUrl = req.headers.get("referer") ?? "https://townlink.ai";
  const gpc = req.headers.get("sec-gpc") === "1";

  const [metaResult, crmResult] = await Promise.allSettled([
    gpc
      ? Promise.resolve({ skipped: "GPC opt-out signal received" })
      : postToMetaCAPI({ email, phone, name, eventId, eventTime, clientIp, userAgent, fbp, fbc, sourceUrl }),
    postToCRM({ name, email, phone, businessType, headache, consent, eventId }),
  ]);

  return NextResponse.json({
    ok: true,
    eventId,
    meta: metaResult.status === "fulfilled" ? metaResult.value : { error: String(metaResult.reason) },
    crm: crmResult.status === "fulfilled" ? crmResult.value : { error: String(crmResult.reason) },
  });
}

async function postToMetaCAPI(args: {
  email: string;
  phone: string;
  name: string;
  eventId: string;
  eventTime: number;
  clientIp?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  sourceUrl: string;
}) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return { skipped: "META_CAPI not configured" };

  const [firstName, ...rest] = args.name.trim().split(/\s+/);
  const lastName = rest.join(" ");

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: args.eventTime,
        event_id: args.eventId,
        action_source: "website",
        event_source_url: args.sourceUrl,
        user_data: {
          em: [sha256(args.email)],
          ph: [hashPhone(args.phone)],
          fn: firstName ? [sha256(firstName)] : undefined,
          ln: lastName ? [sha256(lastName)] : undefined,
          client_ip_address: args.clientIp,
          client_user_agent: args.userAgent,
          fbp: args.fbp,
          fbc: args.fbc,
        },
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE
      ? { test_event_code: process.env.META_CAPI_TEST_EVENT_CODE }
      : {}),
  };

  const url = `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${token}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json();
  return { status: res.status, response: json };
}

async function postToCRM(lead: LeadPayload & { eventId: string }) {
  const webhook = process.env.CRM_WEBHOOK_URL;
  if (!webhook) return { skipped: "CRM_WEBHOOK_URL not configured (Airtable to be added)" };
  const res = await fetch(webhook, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(lead),
  });
  return { status: res.status };
}
