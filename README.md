# Townlink AI — Landing Page

Next.js 14 App Router landing page for Chicago small-business AI automation.
Design tokens live in `DESIGN.md`.

## Local dev

```bash
npm install
cp .env.example .env.local  # fill Meta pixel + CAPI + CRM webhook
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Var                          | Purpose                                             |
|------------------------------|-----------------------------------------------------|
| `NEXT_PUBLIC_META_PIXEL_ID`  | Client-side Pixel + server CAPI `pixel_id`          |
| `META_CAPI_ACCESS_TOKEN`     | Server access token for Conversions API             |
| `META_CAPI_TEST_EVENT_CODE`  | Optional — Meta Events Manager test code            |
| `CRM_WEBHOOK_URL`            | Generic POST target for the lead payload            |
| `AIRTABLE_*`                 | Placeholders — wire Airtable when API key is ready  |

## Deploy to Netlify

1. Push the repo to GitHub.
2. In Netlify: **Add new site → Import from GitHub**.
3. Netlify auto-detects Next.js and installs `@netlify/plugin-nextjs`.
4. Confirm build settings match `netlify.toml`:
   - Build command: `next build`
   - Publish directory: `.next`
   - Node version: `20` (already set in `[build.environment]`).
5. **Add all env vars in the Netlify UI *before* the first deploy** — vars added afterwards require a fresh build.
6. Deploy.

### Netlify function timeout note

`/api/lead` performs two upstream fetches (Meta CAPI + CRM webhook) in parallel
via `Promise.allSettled`. Free plan functions time out at 10s; paid at 26s.
The parallel dispatch keeps the route well under either budget.

## Lead flow

```
Quiz (3 steps) ──POST /api/lead──► newEventId() (UUID)
                                    ├─ SHA-256 hash email + phone
                                    ├─ Meta CAPI (event_id = eventId)
                                    └─ CRM webhook
                                    
Response {eventId} ──► fbq('track','Lead',{},{eventID: eventId})
                        (browser Pixel — deduped with CAPI via shared eventId)
```
