# Project documentation — what, why, and how

This document explains the Mandal Softwares company website rebuild: goals, phases, architecture choices, and how the current site is organized.

---

## 1. Background

The previous site was a CodeIgniter PHP application (`mandal_softwares_website/`, kept locally and gitignored). It was replaced with a **static SPA** for speed, maintainability, and a modern UX, while keeping a **minimal PHP backend** only for the contact form.

**Production URL:** `https://company.mandal.one/`  
**Repository:** `https://github.com/ajitarote123/mandal_softwares_website.git`

---

## 2. Business goals

| Goal | How the site supports it |
|------|---------------------------|
| Convert visitors into leads | Single-page funnel with clear CTAs to contact |
| Lead with engineering partnership | Hero, Partnership, Audience, and Capabilities sections come before product dev |
| Speak to software firms & indie devs | Copy targets gaps in SDLC skills, not generic “we build apps” |
| Look professional yet modern | Design system, motion, dark/light themes, bilingual EN/MR |
| Stay minimal | One page, no team bios, no personal social links, dummy portfolio/reviews only |
| Custom dev as secondary revenue | Services section labeled “Also available” |

### Positioning shift (2025 refocus)

**Before:** “Software studio” — web/mobile/ERP/e‑commerce first; “dev support” as a side card.

**After:** “Engineering partner” — veteran guidance across the **full software lifecycle** (planning, architecture, debugging, DevOps, cloud, infra, delivery, scrum/team practices). Custom product development is still offered but visually and narratively secondary.

**Why:** New software firms and indie developers are often strong in one technology but weak in supporting areas (deployment, cloud, architecture, team process). Mandal Softwares has broad experience across the IT landscape; the site should attract teams who need that bench without sounding like a helpdesk.

**Terminology change:**

| Old | New | Reason |
|-----|-----|--------|
| Dev teams / technical support | Partnership / Expertise | Peer-level, senior engineering — not ticket support |
| DevSupportSection | PartnershipSection + AudienceSection + CapabilitiesSection | Room to explain offer without cluttering one block |
| “Start a project” (nav) | “Get help” | Matches primary partnership CTA |

---

## 3. What we built (phases)

### Phase 1 — Scaffold & backend

- Vite + React + TypeScript project
- PHP `api/contact.php` + strict `api/cors.php`
- Vite plugin copies `api/` → `dist/api/` on build
- Apache `.htaccess`: SPA fallback + API passthrough
- `.env.example` for optional `VITE_API_URL`

### Phase 2A — Design foundation

- CSS design tokens (`src/styles/tokens.css`): spacing, typography, radii
- Theme system: light / dark / system with `ms-theme` persistence
- `public/theme-init.js` anti-flash before first paint
- Motion: `Reveal` scroll animations + `prefers-reduced-motion` respect
- Fonts: Outfit (display), DM Sans (body), Instrument Serif (accent emphasis)
- Brand accent from logo: cyan `#00b8e8`

### Phase 2B — i18n & shell

- Translation system with typed `Translations` interface
- Locales: English and Marathi (Hindi later removed from UI)
- `LanguageToggle`, auto-detect via `navigator.language`
- Layout: `Shell`, sticky `Nav`, `Footer`
- Section shell pattern for consistent eyebrows and titles

### Phase 2C — Section polish

- Hero with logo rings and gradient headline
- Proof stat cards
- Services grid (web, mobile, CRM/ERP, e‑commerce)
- Work portfolio cards, client marquee, review cards
- Process timeline (3 steps)
- Contact section shell

### Phase 3 — Production readiness

- `ContactForm` wired to PHP API with loading/success/error states
- `SeoHead`: dynamic title, meta, Open Graph, Twitter, canonical, JSON-LD `ProfessionalService`
- `robots.txt` and `sitemap.xml`
- Footer social links (LinkedIn, Facebook, Instagram, Google Business)
- `index.html` default meta aligned with production

### Phase 4 — Partnership refocus

- Rewrote EN/MR copy for partnership-first messaging
- Replaced `DevSupportSection` with:
  - **PartnershipSection** — flagship offer card
  - **AudienceSection** — three audience pain-point cards
  - **CapabilitiesSection** — six SDLC pillars with bullet items
- Reordered `Site.tsx`: partnership block before services/work
- Updated nav links: Partnership, Expertise, Work, How we work
- Process reframed: Connect → Diagnose → Partner
- Reviews skewed toward agencies, startups, indie devs
- Removed unused `hi.ts` locale file

---

## 4. How it works (technical)

### Frontend architecture

```
main.tsx
  └── App.tsx
        ├── ThemeProvider
        └── I18nProvider
              └── Site.tsx
                    ├── SeoHead (side effect: document meta)
                    ├── Shell (Nav + Footer + children)
                    └── Sections…
```

- **No client router** — hash/anchor navigation (`#partnership`, `#capabilities`, etc.) keeps hosting simple.
- **Content split:**
  - `src/data/company.ts` — phone, email, address, social URLs, proof numbers
  - `src/features/i18n/locales/*.ts` — all marketing copy, including capabilities pillars and reviews
- **Type safety:** `src/features/i18n/types.ts` defines the full translation shape; locale files must satisfy it.

### Contact flow

1. User submits `ContactForm`
2. `fetch(POST)` to `import.meta.env.VITE_API_URL` or `/api/contact.php`
3. PHP validates JSON, applies CORS, calls `mail()` to `mandalsoftwares@gmail.com`
4. UI shows success or error from i18n strings

### SEO

- Static defaults in `index.html` for crawlers without JS
- `SeoHead` updates title/description/OG when locale changes
- JSON-LD structured data for `ProfessionalService`
- Note: `company.domain` in `company.ts` is `https://software.mandal.one` while canonical/sitemap use `company.mandal.one` — align these if both domains are not intentional.

### Build & deploy

```bash
npm run build
# → dist/index.html, dist/assets/*, dist/api/*, dist/MLogo*.png, etc.
```

Upload `dist/` to PHP-enabled hosting. No Node.js required on the server.

---

## 5. Content model

### Six capability pillars

1. Planning & architecture  
2. Development & debugging  
3. DevOps & deployment  
4. Cloud & infrastructure  
5. Delivery & scheduling  
6. Team & scrum practices  

Each pillar has a title, one-line summary, and three bullet items — defined in locale files for EN/MR parity.

### Proof stats (from `company.ts`)

- 7+ years in the field  
- 45+ projects delivered  
- 25+ teams supported  

Labels are translated in locale files; values are shared.

### What we deliberately omit

- Team member bios and photos  
- Personal social profiles  
- Real testimonial names (generic sources only)  
- Hindi UI (removed per product decision; MR + EN only)

---

## 6. Key files to edit

| If you want to change… | Edit |
|------------------------|------|
| Company phone, email, address | `src/data/company.ts` |
| Hero headline, partnership copy | `src/features/i18n/locales/en.ts`, `mr.ts` |
| Section order | `src/app/Site.tsx` |
| Nav links | `src/components/layout/Nav.tsx` |
| Contact form behavior | `src/components/ContactForm.tsx` |
| SEO / JSON-LD | `src/components/SeoHead.tsx`, `index.html` |
| CORS / mail recipient | `api/cors.php`, `api/contact.php` |
| Colors, fonts, spacing | `src/styles/tokens.css`, `themes.css` |

---

## 7. Design principles we followed

1. **Conversion over completeness** — one strong page beats many thin pages for this offer.
2. **Partnership before products** — section order and visual weight match business priority.
3. **Minimal but not empty** — six capability pillars need space; minimalism is in nav and layout, not in hiding the offer.
4. **Reuse conventions** — `SectionShell`, `Reveal`, `btn` classes, shared tokens across sections.
5. **Locale-first copy** — no hardcoded user strings in components; everything flows through `useI18n()`.

---

## 8. Git history (milestones)

| Commit theme | Summary |
|--------------|---------|
| Rebuild + design system | Tokens, theme, motion, i18n shell |
| Phase 3 | Contact form, SEO, robots/sitemap |
| Refocus & restructure | Partnership-first sections and copy |
| Lang content | EN/MR updates, Hindi removed |

See `git log` for exact commit hashes and messages.
