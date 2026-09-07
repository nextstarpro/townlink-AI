# Townlink AI — Landing Page Design System

High-conversion landing page for the Chicago-area AI Automation offering
(from `Idea.txt`). Style: **Minimal Tech + Bento Grid**. One theme, one CTA
color, blue-anchored typography for brand continuity with the logo.

Audience: US small-business owners (contractors, legal, dental/medical,
professional services). Priority: business outcomes over tech jargon.

---

## 1. Palette Rules — 60 / 30 / 10

| Ratio | Role         | Color                    | Where it shows up                                                  |
|-------|--------------|--------------------------|--------------------------------------------------------------------|
| 60%   | Neutral      | `#FFFFFF` / `#F8FAFC`    | Page background, bento cards, whitespace, form fields              |
| 30%   | Structural   | `#009933` (Green)        | Section bands, icon fills, data-flow lines, badges, chart accents  |
| 10%   | CTA only     | `#F59E0B` (Golden-Orange)| Primary buttons only — Hero CTA, Quiz submit, Post-testimonial CTA |

**Guardrail:** Gold appears exclusively on CTA buttons. Never on borders, icons,
headings, or badges — this is what makes the CTA magnetic.

### Full Token Set

```css
:root {
  /* ── Neutrals (60%) ─────────────────────────── */
  --canvas:        #FFFFFF;   /* page bg */
  --canvas-alt:    #F8FAFC;   /* alternating section bg */
  --surface:       #FFFFFF;   /* bento cards, modals */
  --border:        #E2E8F0;   /* card outlines, dividers */
  --muted:         #F1F5F9;   /* skeletons, disabled */
  --muted-fg:      #475569;   /* helper text */

  /* ── Structural Green (30%) ─────────────────── */
  --brand-green:       #009933;   /* structural fills, icons */
  --brand-green-ink:   #00782A;   /* AA-safe green on white */
  --brand-green-soft:  #E6F7EC;   /* bento tint, badge bg */
  --brand-green-line:  #B7E4C7;   /* subtle borders on green tints */

  /* ── CTA Golden-Orange (10%) ────────────────── */
  --cta:           #F59E0B;
  --cta-fg:        #111827;   /* dark text on gold — 9.7:1 AAA */
  --cta-hover:     #D97706;
  --cta-ring:      #FDBA74;   /* focus halo */

  /* ── Logo Blue — Typography Anchor ──────────── */
  --brand-blue:        #2563EB;   /* raw logo blue: logo, links, focus ring */
  --brand-blue-ink:    #1E3A8A;   /* headings — 10.4:1 on white (AAA) */
  --text-body:         #0F172A;   /* body copy — near-black for max readability */
  --text-muted:        #475569;
  --focus-ring:        #2563EB;
}
```

---

## 2. Logo Bridge — Typography Uses Blue

Every heading (H1–H4) renders in `--brand-blue-ink` (`#1E3A8A`). This is the
darkened form of the logo blue `#2563EB` — same hue family, AA/AAA safe on
white, and it visually ties every headline back to the logo without needing
the logo to appear beside it.

- **H1–H4** → `--brand-blue-ink` (#1E3A8A)
- **Logo mark, links, focus rings** → `--brand-blue` (#2563EB)
- **Body copy** → `--text-body` (#0F172A) — deep slate, warmer than pure black
- **Helper / captions** → `--text-muted` (#475569)

---

## 3. UI Style — Minimal Tech + Bento Grid

Sharp, generous whitespace, thin `1px` borders, subtle shadows. Each landing
section is composed of asymmetric bento tiles that let workflow steps and
data proofs sit next to each other without feeling like a spec sheet.

### Bento Card Recipe

```css
.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: transform 200ms ease, box-shadow 200ms ease;
}
.bento-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
}
```

### Bento Grid Templates

**Desktop (≥1024px)** — 12-col, 8px baseline, asymmetric tiles

```
┌──────────────────────────────┬────────────────┐
│ Hero copy + CTA (7 cols)     │ Workflow demo  │
│                              │ (5 cols)       │
├──────────────┬───────────────┴────────────────┤
│ Metric tile  │ Pain point tile (wide 8 cols)  │
│ (4 cols)     │                                │
├──────────────┼──────────────┬─────────────────┤
│ Pillar 1     │ Pillar 2     │ Pillar 3        │
│ (4 cols)     │ (4 cols)     │ (4 cols)        │
└──────────────┴──────────────┴─────────────────┘
```

**Tablet (≥768px)** — collapse to 6-col, hero stacks vertically
**Mobile (<768px)** — 1 column, tile order preserved by importance

### Landing Section Map (from Idea.txt)

| # | Section                       | Bento treatment                                                             |
|---|-------------------------------|-----------------------------------------------------------------------------|
| 1 | Hero (localized headline)     | 7/5 split; workflow mockup tile on right, sticky CTA on scroll             |
| 2 | Silent Revenue Killers        | 3 equal metric tiles (62% / 40% / 80%) with green iconography              |
| 3 | Core Service Pillars          | 3-up bento cards with green icon chip, blue heading, body copy             |
| 4 | Multi-Step Quiz               | Single centered card, progress dots in green, submit button in gold        |
| 5 | Local Proof & Case Studies    | 2/1 layout: featured $ metric tile + quote tiles                           |
| 6 | Risk-Reversal Guarantee       | Full-width tinted band (`--brand-green-soft`), heading in blue-ink         |
| 7 | FAQ                           | 2-col accordion tiles, chevrons in green                                   |
| 8 | Footer CTA                    | Gold button + Chicagoland trust badge row                                  |

---

## 4. Typography — Inter (primary) + Plus Jakarta Sans (display)

Chosen for their optical clarity at small sizes (Inter for body) and their
slightly rounder, more human display feel (Plus Jakarta Sans for hero).
Both are variable fonts — one file per family covers the full weight range.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap">
```

```css
:root {
  --font-display: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  --font-body:    'Inter', ui-sans-serif, system-ui, sans-serif;

  /* Type scale (1.25 modular) */
  --text-xs:   0.75rem;   /* 12 — legal/caption */
  --text-sm:   0.875rem;  /* 14 — helper */
  --text-base: 1rem;      /* 16 — body */
  --text-lg:   1.125rem;  /* 18 — lead paragraph */
  --text-xl:   1.25rem;   /* 20 — bento tile heading */
  --text-2xl:  1.5rem;    /* 24 — H4 */
  --text-3xl:  1.875rem;  /* 30 — H3 */
  --text-4xl:  2.25rem;   /* 36 — H2 */
  --text-5xl:  3rem;      /* 48 — H1 mobile */
  --text-6xl:  3.75rem;   /* 60 — H1 desktop */

  --leading-tight:  1.15;
  --leading-normal: 1.5;
  --tracking-tight: -0.02em;
}

h1, h2 { font-family: var(--font-display); color: var(--brand-blue-ink);
  font-weight: 800; line-height: var(--leading-tight); letter-spacing: var(--tracking-tight); }
h3, h4 { font-family: var(--font-display); color: var(--brand-blue-ink);
  font-weight: 700; line-height: var(--leading-tight); }
body, p, li { font-family: var(--font-body); color: var(--text-body);
  font-weight: 400; line-height: var(--leading-normal); }
```

---

## 5. Buttons — CTA Anatomy

```css
.btn-cta {
  background: var(--cta);
  color: var(--cta-fg);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: var(--text-base);
  padding: 14px 28px;         /* ≥44px touch target */
  border-radius: 12px;
  border: 0;
  box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
  transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
  cursor: pointer;
}
.btn-cta:hover  { background: var(--cta-hover); transform: translateY(-1px);
                  box-shadow: 0 6px 20px rgba(245, 158, 11, 0.45); }
.btn-cta:focus-visible { outline: 3px solid var(--cta-ring); outline-offset: 2px; }

.btn-secondary {
  background: transparent;
  color: var(--brand-green-ink);
  border: 1.5px solid var(--brand-green);
  /* rest identical to .btn-cta sizing */
}
```

CTA copy (from brief): **"Get Your Free 10-Minute AI Audit & ROI Estimate"**.

---

## 6. Motion — Standard tier (bento reveal)

Section-scoped stagger on scroll. Respect `prefers-reduced-motion`.

```js
gsap.from('.bento-card', {
  opacity: 0, y: 16, scale: 0.96,
  duration: 0.4,
  stagger: { each: 0.06, from: 'start', grid: 'auto' },
  ease: 'back.out(1.4)',
  scrollTrigger: { trigger: '.bento-section', start: 'top 75%' }
});
```

Hover: 200ms `translateY(-2px)` + shadow bloom. Focus: instant 3px ring.

---

## 7. Contrast Validation

| Pair                              | Ratio  | Verdict                    |
|-----------------------------------|--------|----------------------------|
| #1E3A8A on #FFFFFF (headings)     | 10.4:1 | AAA                        |
| #0F172A on #FFFFFF (body)         | 17.9:1 | AAA                        |
| #475569 on #FFFFFF (helper)       | 7.5:1  | AAA                        |
| #2563EB on #FFFFFF (links)        | 4.8:1  | AA                         |
| #111827 on #F59E0B (CTA label)    | 9.7:1  | AAA                        |
| #FFFFFF on #009933 (green fill)   | 4.03:1 | AA large text only         |
| #00782A on #FFFFFF (green text)   | 5.4:1  | AA                         |
| #009933 on #FFFFFF (raw)          | 4.03:1 | Fill/icon only (not text)  |
| #F59E0B on #FFFFFF (raw gold)     | 2.15:1 | CTA fill only (never text) |

---

## 8. Anti-Patterns

- Gold on anything but a primary CTA button.
- Two CTAs of equal weight in the same viewport.
- Body text in green or gold — always `--text-body`.
- Green fill directly touching gold fill without a ≥16px neutral gutter.
- Bento tiles with mixed corner radii (keep to 16px everywhere).
- Emoji as icons — use Lucide or Heroicons SVGs, colored with `--brand-green`.
- Removing focus ring on CTA to look "cleaner."

---

## 9. Pre-Delivery Checklist

- [ ] Hero CTA visible above the fold on 375px width
- [ ] Sticky mini-CTA appears after scrolling past hero on mobile
- [ ] All bento cards have ≥44px touch targets and visible focus
- [ ] `prefers-reduced-motion: reduce` disables the stagger reveal
- [ ] Quiz progress state persists on refresh (localStorage)
- [ ] Alt text on the AI-workflow mockup and every testimonial photo
- [ ] Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO
- [ ] CLS < 0.1 (reserve space for the workflow mockup + testimonial carousel)
- [ ] Chicagoland trust-badge row uses green iconography, no gold
