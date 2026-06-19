# Roadmap — what we can do next

Suggested improvements grouped by impact and effort. None of these are required for the current site to function; they are opportunities to strengthen conversion, trust, and maintainability.

---

## High impact — conversion & trust

### Real social proof

- Replace dummy review quotes with **real Google Business reviews** (keep anonymous or first-name-only if preferred).
- Add 1–2 short **case study blurbs** under Work: problem → what we did → outcome (even without naming clients).

### Engagement models page or section

- Add a subsection or `/partnership` route explaining **how you work**:
  - Advisory (calls, architecture reviews)
  - Embedded (part-time senior on their team)
  - Hands-on (you fix/deploy/build)
- Clear **pricing signal** (even “from ₹X/hour” or “project-based — ask for quote”) reduces friction for serious leads.

### Stronger primary CTA

- Sticky mobile CTA bar: “Get engineering help” → `#contact`
- Optional **Calendly / Google Calendar** link for discovery calls alongside the form

### Hero A/B variants

Test headlines such as:

- “Your senior engineering bench — without the hire”
- “Stuck on deploy, architecture, or delivery? We’ve been there.”

---

## Medium impact — content & SEO

### Domain consistency

- Align `company.domain` in `src/data/company.ts` with canonical URLs (`company.mandal.one` vs `software.mandal.one`) so OG URLs, JSON-LD, and sitemap match production.

### Dedicated partnership landing (optional)

If organic search for “software consulting Maharashtra” or similar matters:

- Add `/engineering-partnership` with long-form copy and link from nav
- Keep homepage as overview; detail page for SEO depth

### Blog or resources (lightweight)

- Short articles: “When to hire vs partner”, “CI/CD checklist for small teams”
- Could be markdown in repo + simple static pages later — not needed for v1

### Marathi SEO

- Ensure `hreflang` tags for `en` and `mr` if both URLs or query params are used
- Marathi meta descriptions tuned for local search (Ahilyanagar, Maharashtra)

### Analytics

- Privacy-friendly analytics (Plausible, Umami, or GA4) to measure:
  - Scroll depth to Partnership / Contact
  - Form submissions vs bounces
  - Language toggle usage

---

## Medium impact — product & UX

### Contact form enhancements

- Optional fields: company name, “what are you stuck on?” dropdown (architecture, DevOps, bug, team process, new build)
- Honeypot or rate limiting on `contact.php` to reduce spam
- Server-side validation messages mapped to i18n

### Accessibility audit

- Full keyboard nav through mobile menu
- Focus traps in open menu
- `axe` or Lighthouse a11y pass; fix contrast on muted text if needed

### Performance

- Self-host Google Fonts (or subset) to cut third-party latency
- `loading="lazy"` on below-fold images if more assets are added
- Target Lighthouse 95+ on performance

### Work section depth

- Filter tags: Web / Mobile / Partnership / Infra
- Modal or expand for slightly longer project descriptions

---

## Lower effort — polish

### Favicon set

- Generate `favicon.ico`, 32/180 Apple touch icons from `MLogo.png`

### Open Graph image

- Custom OG image (1200×630) with logo + tagline instead of logo-only

### 404 page

- Branded static `404.html` in `public/` for mistyped URLs on Apache

### Environment docs

- Document PHP `mail()` requirements on host (SPF, `sendmail`, or SMTP relay if `mail()` is unreliable)

### CI/CD

- GitHub Action: `npm run build` + lint on every push
- Optional: deploy `dist/` to hosting via FTP/SFTP or rsync action

---

## Technical debt & maintenance

| Item | Notes |
|------|--------|
| Remove stale `DevSupportSection` files if still present locally | Replaced by Partnership/Audience/Capabilities |
| `hi.ts` removed | Re-add only if Hindi returns to product scope |
| `README` was Vite template | Replaced with project-specific docs |
| Old CodeIgniter tree | Keep gitignored; archive or delete when no longer needed for reference |

---

## What we intentionally deferred

These were considered and **not** built yet — by design:

- Multi-page site (single page chosen for conversion simplicity)
- CMS / admin panel (content in TypeScript locale files)
- User accounts or client portal
- Live chat widget (can feel cheap on a premium positioning)
- Testimonials with real names/faces (privacy / minimalism choice)

---

## Suggested priority order

1. Domain/SEO alignment + production contact form smoke test  
2. Real Google reviews + one case study  
3. Engagement models blurb + mobile sticky CTA  
4. Analytics + form spam protection  
5. OG image + accessibility pass  
6. Optional partnership detail page if SEO becomes a priority  

Update this file as items ship or priorities change.
