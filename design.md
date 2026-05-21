# Rem — Design System

## Overview

Rem is research and development labs for stablecoin and tokenisation infrastructure. The design language is **dark, precise, and institutional** — built to pass a bank's vendor review while feeling like the future of finance.

**Brand in three words**: Precise. Kinetic. Trusted.

**Anti-references**: Not hacker aesthetic, not retail crypto, not generic SaaS.

---

## Fonts

Set in `app/layout.tsx` via Next.js font optimization.

| Role      | Family                | CSS Variable      | Usage                              |
|-----------|-----------------------|-------------------|------------------------------------|
| Display   | Bricolage Grotesque   | `--font-display`  | All headings (h1–h6), display text |
| Body      | Hanken Grotesk        | `--font-body`     | Body copy, UI labels, inputs       |
| Monospace | Menlo / Monaco / Courier New | —          | Code blocks                        |

---

## Color Tokens

Defined as CSS custom properties in `app/globals.css`.

### Backgrounds

| Token          | Value                     | Usage                          |
|----------------|---------------------------|--------------------------------|
| `--bg`         | `#080808`                 | Page background (always dark)  |
| `--card-bg`    | `#111111`                 | Card surfaces                  |
| `--card-bg-2`  | `#1a1a1a`                 | Alternate cards, inputs        |
| `--bg-plus`    | `rgb(103, 78, 39)`        | Warm yellow-tinted accent area |
| `--card-plus`  | `rgb(13, 26, 22)`         | Dark green-tinted accent area  |

### Accents

| Token       | Value       | Usage                                        |
|-------------|-------------|----------------------------------------------|
| `--yellow`  | `#fcbf48`   | Logo, CTAs, focus states, key data — primary |
| `--green`   | `#8DF0CC`   | Success states, compliance signals           |

### Text Opacity Hierarchy

| Usage            | Value                       |
|------------------|-----------------------------|
| Primary          | `#ffffff` / `rgba(255,255,255,0.9)` |
| Normal           | `rgba(255,255,255,0.75)`    |
| Muted            | `rgba(255,255,255,0.6)` (`--text-muted`) |
| Dim              | `rgba(255,255,255,0.4)` (`--text-dim`)   |
| Very dim         | `rgba(255,255,255,0.35)`    |
| Subtle           | `rgba(255,255,255,0.3)`     |

### Borders & Dividers

| Usage                  | Value                          |
|------------------------|--------------------------------|
| Default border         | `rgba(255,255,255,0.06)` (`--border`) |
| Hover border           | `rgba(255,255,255,0.08)`       |
| Yellow-tinted border   | `rgba(252,191,72,0.15–0.2)`    |
| Green-tinted border    | `rgba(141,240,204,0.15–0.2)`   |

---

## Typography Scale

```css
--text-xs:   0.75rem   /* 12px — captions, legal     */
--text-sm:   0.875rem  /* 14px — metadata, badges    */
--text-base: 1rem      /* 16px — body text           */
--text-lg:   1.25rem   /* 20px — lead / intro text   */
--text-xl:   1.75rem   /* 28px — subheadings         */
--text-2xl:  2.25rem   /* 36px — section headings    */
```

### Font Weights

```css
--weight-regular:   400
--weight-medium:    500
--weight-semibold:  600
--weight-bold:      700
--weight-extrabold: 800
```

### Line Heights

```css
--leading-tight:  1.1   /* Display headings (48px+)  */
--leading-snug:   1.2   /* Section headings          */
--leading-normal: 1.5   /* UI elements               */
--leading-body:   1.65  /* Body text on dark bg      */
```

### Letter Spacing

```css
--tracking-display: -0.03em  /* Hero/display text 48px+      */
--tracking-heading: -0.025em /* Section headings 28px+        */
--tracking-ui:      -0.01em  /* Interactive UI elements       */
--tracking-caps:     0.06em  /* Uppercase labels / tags       */
```

---

## Spacing

No strict spacing scale token — patterns extracted from components.

| Context                    | Value           |
|----------------------------|-----------------|
| Section vertical padding   | 80–100px        |
| Section horizontal padding | 24px            |
| Card padding               | 20px            |
| Button / input padding     | 6px 14px        |
| Navbar item padding        | 10px 12px       |
| Footer padding             | 60px 24px top, 40px bottom |
| Card grid gap              | 24px            |
| Icon + text gap            | 5–10px          |
| Button group gap           | 6–8px           |

---

## Border Radius

| Element              | Value    |
|----------------------|----------|
| Buttons / inputs     | 8px      |
| Navigation bar       | 13px     |
| Product cards        | 20px     |
| Demo containers      | 10–14px  |
| Integration cards    | 8px      |
| Pills / badges       | 100px    |
| Small icons / chips  | 4–8px    |

---

## Motion Tokens

### Easing

```css
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1)
--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1)
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1)
```

### Durations

```css
--duration-fast:   150ms
--duration-normal: 300ms
--duration-slow:   500ms
```

### Keyframe Animations

| Name         | Effect                              |
|--------------|-------------------------------------|
| `fade-in`    | opacity 0 → 1                       |
| `fade-up`    | opacity 0→1 + translateY(16px)→0    |
| `scale-in`   | opacity 0→1 + scale(0.96)→1         |
| `spin`       | rotate 0° → 360°                    |

### Utility Classes

```css
.animate-fade-in   /* fade-in, 500ms, ease-out-quart */
.animate-fade-up   /* fade-up, 500ms, ease-out-quart */
.animate-scale-in  /* scale-in, 500ms, ease-out-quart */
.reveal            /* scroll-triggered: opacity 0, translateY(12px) */
.reveal.is-visible /* revealed: opacity 1, translateY(0), 500ms */
```

Scroll reveals use Intersection Observer via `components/Reveal.tsx` — threshold `0.1`, root margin `0px 0px -40px 0px`.

**Reduced motion**: All animations collapse to `0.01ms` via `prefers-reduced-motion: reduce`.

---

## Components

### Buttons

**CTA (Primary)**
- Background: `--yellow` (`#fcbf48`)
- Text: `--bg` (`#080808`)
- Padding: `6px 14px`
- Border radius: `8px`
- Font: 13–14px, weight 500–600
- Hover: opacity 0.88, slight `translateY(-1px)`
- Active: `scale(0.96)`

**Icon buttons**
- Minimum hit target: 44×44px

---

### Cards

**Product cards**
- Max width: 360px
- Background: `--card-bg` (`#111111`)
- Padding: 20px
- Border radius: 20px
- Border: `1px solid rgba(255,255,255,0.04)` → `0.08` on hover
- Hover: `translateY(-4px)`
- Demo area: 200px height, `#181818` bg, 14px border radius

**Integration cards**
- Background: `rgb(25,24,12)` (yellow-tinted dark)
- Border: `rgba(255,255,255,0.06)`
- Hover: `rgb(45,42,28)` bg, `rgba(255,191,72,0.2)` border, `translateX(4px)`
- Padding: `12px 16px`
- Border radius: `8px`

---

### Navigation

- Position: fixed, 12px from top, centered, max-width 900px
- Background: blur backdrop (`backdrop-filter: blur(8px)`)
- Border: `1px solid rgba(255,255,255,0.06)`
- Border radius: `13px`
- Nav links: 13px, weight 500, padding `10px 12px`
- Mobile: hamburger at `max-width: 767px`, animated X toggle

---

### Badges / Pills

- Background: `rgba(252,191,72,0.08–0.1)` (yellow) or `rgba(141,240,204,0.08–0.1)` (green)
- Border: matching accent at 0.15–0.2 opacity
- Padding: `4px 12px` (large) / `5px 10px` (small)
- Border radius: `100px`
- Font: 11–13px, weight 600
- Letter spacing: `--tracking-caps` (0.06em) for uppercase variants

---

### Feature Pills (Hero)

- Grid: 3 columns, gap `6px 12px`
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Padding: `5px 10px`
- Border radius: `6px`
- Font: 13px, weight 400

---

### Inputs / Forms

- Background: `--card-bg-2` (`#1a1a1a`)
- Border: `1px solid rgba(255,255,255,0.10)`
- Border radius: `8px`
- Padding: `6px 14px`
- Text: `#ffffff`
- Focus: yellow `2px outline`, `rgba(252,191,72,0.1)` box shadow
- Newsletter form: flex row with `8px` gap → stacks to column on mobile

---

## Responsive Breakpoints

All breakpoints are used inline via scoped `<style>` tags inside components.

| Breakpoint      | Behavior                                               |
|-----------------|--------------------------------------------------------|
| `max-width: 767px`  | Hide nav links, show hamburger menu              |
| `max-width: 700px`  | Footer: 4 → 2 columns                           |
| `max-width: 640px`  | Hero pills: 3 → 2 cols; Frameworks: 4 → 1 col   |
| `max-width: 420px`  | Newsletter form: row → column                   |
| `max-width: 400px`  | Footer: 2 → 1 column                            |
| `max-width: 380px`  | Hero pills: 2 → 1 column                        |

---

## Component Index

| File                               | Description                            |
|------------------------------------|----------------------------------------|
| `app/layout.tsx`                   | Root layout, font setup                |
| `app/globals.css`                  | All tokens, keyframes, utility classes |
| `components/Navbar.tsx`            | Fixed nav with mobile hamburger        |
| `components/HeroSection.tsx`       | Full-screen hero, animated pills       |
| `components/ProductsSection.tsx`   | 3-card feature grid with demos         |
| `components/FrameworksSection.tsx` | 4-column integration grid              |
| `components/CustomerSection.tsx`   | Target audience showcase               |
| `components/NewsletterSection.tsx` | Email signup form                      |
| `components/Footer.tsx`            | 4-column link grid + bottom bar        |
| `components/Reveal.tsx`            | Scroll-triggered fade-in wrapper       |

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js (App Router)        |
| React       | 19.2.4                              |
| Styling     | Tailwind CSS v4 (CSS-first config)  |
| Fonts       | Google Fonts via `next/font/google` |
| Email       | Resend + Nodemailer                 |
| Components  | Custom (can modify & use shadcn)    |

---

## Design Principles

1. **Yellow is the signal.** `#fcbf48` is reserved for the logo, primary CTAs, and critical data. It is the "kinetic" energy of moving money.
2. **Trust through precision.** Consistent spacing, tight type scale, perfect alignment. Zero slop.
3. **Infrastructure as the hero.** Partners (Tempo, Solana, Base) and protocols (x402, MCP) get visual weight — they are the trust foundation.
4. **No wasted surface.** Every section should feel like a premium component of a larger machine.
5. **Dark. Always dark.** The theme is fixed dark. No light mode.
