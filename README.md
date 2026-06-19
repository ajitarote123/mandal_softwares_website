# Mandal Softwares — Company Website

Marketing site for [Mandal Softwares](https://company.mandal.one): a conversion-focused single-page app that positions the company as an **engineering partner** for software firms and developers, with custom product development as a secondary offer.

**Stack:** Vite · React 19 · TypeScript · PHP (`mail()` contact API)

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ (includes api/ copy)
npm run preview  # preview production build
```

Contact form in development posts to `/api/contact.php`. For local PHP testing, serve `dist/` with Apache/nginx + PHP, or point `VITE_API_URL` at a deployed endpoint (see `.env.example`).

---

## Project layout

```
company-website/
├── api/                    # PHP backend (copied to dist/api on build)
│   ├── contact.php         # POST JSON → mail()
│   └── cors.php            # Strict origin allowlist
├── public/                 # Static assets (logos, robots.txt, .htaccess)
├── src/
│   ├── app/Site.tsx        # Section composition & page order
│   ├── components/         # Shell, Nav, Footer, ContactForm, SeoHead
│   ├── data/company.ts     # Non-translatable company facts
│   ├── features/
│   │   ├── i18n/           # EN + MR locales, provider, toggle
│   │   ├── theme/          # Light / dark / system
│   │   └── motion/         # Scroll reveals, reduced-motion
│   ├── sections/           # Page sections (Hero, Partnership, …)
│   └── styles/             # Design tokens, themes, global CSS
├── docs/                   # Project documentation
│   ├── PROJECT.md          # What we built, why, and how
│   └── ROADMAP.md          # Suggested next steps
└── vite.config.ts          # Build + api/ copy plugin
```

---

## Page structure

Sections render in this order (see `src/app/Site.tsx`):

| Order | Section        | Purpose                                      |
|------:|----------------|----------------------------------------------|
| 1     | Hero           | Partnership-first value proposition          |
| 2     | Proof          | Credibility stats (years, projects, teams)     |
| 3     | Partnership    | Flagship offer — SDLC engineering partner    |
| 4     | Audience       | Who we help (firms, indie devs, teams)       |
| 5     | Capabilities   | Six SDLC pillars with detail bullets         |
| 6     | Process        | Connect → Diagnose → Partner                 |
| 7     | Services       | Secondary: custom web/mobile/ERP/e‑commerce  |
| 8     | Work           | Portfolio samples                            |
| 9     | Clients        | Client name marquee                          |
| 10    | Reviews        | Social proof + Google Business link          |
| 11    | Contact        | Info panel + contact form                    |

---

## Internationalization

- **Locales:** English (`en`) and Marathi (`mr`)
- **Storage key:** `ms-locale` in `localStorage`
- **Auto-detect:** Browser language → MR if `mr*`, else EN
- **Content:** User-facing copy lives in `src/features/i18n/locales/`. Company facts (phone, email, address) live in `src/data/company.ts`.

Hindi was removed from the language toggle; only EN and MR are active.

---

## Theming

- Modes: light, dark, system (`ms-theme` in `localStorage`)
- `public/theme-init.js` runs before paint to avoid theme/locale flash
- Brand accent: cyan `#00b8e8` (from logo)

---

## Contact API

**Endpoint:** `POST /api/contact.php`

**Body (JSON):**

```json
{
  "name": "…",
  "email": "…",
  "subject": "…",
  "message": "…"
}
```

**Success:** `{ "success": true, "message": "…" }`

CORS allows `company.mandal.one`, `software.mandal.one`, and `localhost:5173`. Mail is sent to `mandalsoftwares@gmail.com`.

---

## Deployment

1. Run `npm run build`
2. Upload **contents of `dist/`** to the web root (Apache with PHP recommended)
3. Ensure `.htaccess` is active: SPA fallback + `/api/` passthrough to PHP

Canonical URLs in `index.html`, `robots.txt`, and `sitemap.xml` use `https://company.mandal.one/`. SEO meta is also updated at runtime by `SeoHead` from locale files.

---

## Documentation

| Doc | Contents |
|-----|----------|
| [docs/PROJECT.md](docs/PROJECT.md) | Full history: what we did, why, and how |
| [docs/ROADMAP.md](docs/ROADMAP.md) | Ideas for future improvements |

---

## License

Private — Mandal Softwares.
