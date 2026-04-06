# P06: Build Instructions — Vida Acessível

## What this is
Complete build specification for vidaacessivel.pt — a lead generation site for home accessibility equipment in Portugal. The site connects people who need stairlifts, residential lifts and platform lifts with certified installers. It does not sell directly. It generates quote requests and catalogue requests, then routes them to partner installers.

Read every section of this document before writing a single line of code.

Also read in full before starting:
- business-info.md — brand, tone, audience, conversion logic
- services-list.md — the 3 product categories and all sub-types
- site-structure.md — URL structure, nav, internal linking, schema plan, CMS spec
- page-tracker.csv — every page with slug, H1, meta title, meta description
- market-research.md — competitor analysis, content gaps, keyword strategy
- quote-form-spec.md — multistep quote form full specification
- P07-redesign-pass.md — design direction, tone rules, section order, price page content

---

## Tech Stack

- Framework: Astro (latest stable)
- Styling: Tailwind CSS
- Components: React + shadcn/ui (already in repo)
- Fonts: Plus Jakarta Sans (headings) + DM Sans (body) — already configured in tailwind.config.ts
- Icons: itshover animated library — https://github.com/itshover/itshover
- CMS: Keystatic for /recursos articles
- Hosting: Cloudflare Pages via Wrangler
- Email: Resend (RESEND_API_KEY env var — provided separately)
- Images: Placeholders only — real images generated in a later pass with Gemini Flash
- Language: Portuguese (pt-PT)
- All image formats when added: WebP only, no PNG or JPG

---

## Installing itshover

```bash
npm install motion
npx shadcn@latest add https://itshover.com/r/check-circle-icon.json
npx shadcn@latest add https://itshover.com/r/arrow-right-icon.json
npx shadcn@latest add https://itshover.com/r/phone-icon.json
npx shadcn@latest add https://itshover.com/r/send-icon.json
npx shadcn@latest add https://itshover.com/r/shield-icon.json
npx shadcn@latest add https://itshover.com/r/clock-icon.json
npx shadcn@latest add https://itshover.com/r/euro-icon.json
npx shadcn@latest add https://itshover.com/r/map-pin-icon.json
npx shadcn@latest add https://itshover.com/r/file-text-icon.json
npx shadcn@latest add https://itshover.com/r/users-icon.json
npx shadcn@latest add https://itshover.com/r/zap-icon.json
npx shadcn@latest add https://itshover.com/r/star-icon.json
```

Browse full list at https://itshover.com/icons for any icon not listed above.

---

## Icon usage rules

Use itshover icons ONLY where standard in modern web design:

✓ Next to short USP/feature bullet points ("Instalação rápida", "Sem obras", "Grátis")
✓ In numbered process steps (Como funciona)
✓ In small UI elements — buttons, nav CTA, trust strips
✓ In FAQ toggle labels
✓ Next to contact details (phone, email, address)
✓ In form labels or validation feedback
✓ In small stat/trust blocks ("3 orçamentos", "Grátis", "Instaladores certificados")

✗ Never as replacements for photos or hero images
✗ Never as large decorative section fillers
✗ Never on every heading or every paragraph
✗ Never to illustrate complex concepts that need a real photograph

---

## Image placeholder rule

No real images in this build. Every place where a photo would appear gets a placeholder div. Syntax must be exact — used for automated image generation later.

```html
<div
  class="img-placeholder"
  style="background:#f0f0ec; display:flex; align-items:center; justify-content:center; position:relative; width:100%; aspect-ratio:16/9; border-radius:8px;"
  data-image-description="[Detailed English prompt for Gemini Flash image generation. Include: subject description, setting, mood, camera style, lighting. Always end with: WebP format.]"
>
  <span style="position:absolute; top:8px; left:8px; font-size:11px; color:#999;">📷 Imagem</span>
  <span style="font-size:13px; color:#aaa; text-align:center; padding:1rem;">
    [Portuguese caption — descriptive, serves as the final alt text]
  </span>
</div>
```

Aspect ratios:
- Hero / banner: 16/9 or 3/2
- Product / feature cards: 4/3 or 1/1
- Article thumbnails: 16/9
- About / team: 1/1

Image style for all data-image-description values:
- Setting: Portuguese residential homes — stone walls, ceramic tiles, warm interior tones, traditional villas and urban apartments
- People: older adults 65–80 using equipment naturally, family nearby, dignified — never clinical or medical
- Camera: Sony A7R IV, 35mm f/2.0, natural interior light, soft shadows
- Mood: calm, warm, reassuring
- Avoid: stock photo look, overly young models, sterile hospital environments

---

## All pages to build

Defined in page-tracker.csv. Every row is a page. Build all of them.

### Core pages
- / — Homepage
- /sobre/ — Sobre nós
- /contacto/ — Contacto
- /pedir-orcamento/ — Pedir Orçamento (primary conversion)
- /catalogo-gratis/ — Catálogo Grátis (secondary conversion)
- /politica-de-privacidade/ — Legal

### Equipment hub pages
- /equipamentos/elevadores-de-escadas/
- /equipamentos/elevadores/
- /equipamentos/plataformas-elevatorias/

### Price pages — subpages of hubs, NOT in /recursos/
- /equipamentos/elevadores-de-escadas/preco/
- /equipamentos/elevadores/preco/
- /equipamentos/plataformas-elevatorias/preco/

### Elevadores de Escadas sub-types
- /elevadores-de-escadas/escadas-retas/
- /elevadores-de-escadas/escadas-curvas/
- /elevadores-de-escadas/escadas-exteriores/
- /elevadores-de-escadas/escadas-estreitas/

### Elevadores Residenciais sub-types
- /elevadores-residenciais/1-andar/
- /elevadores-residenciais/sem-poco/
- /elevadores-residenciais/compactos/
- /elevadores-residenciais/hidraulicos/
- /elevadores-residenciais/pneumaticos/

### Plataformas Elevatórias sub-types
- /plataformas-elevatorias/escadas-retas/
- /plataformas-elevatorias/escadas-curvas/
- /plataformas-elevatorias/exteriores/

### Audience / solution pages
- /solucoes-para-subir-escadas/
- /cadeiras-elevatorias-para-idosos/
- /solucoes-para-cadeiras-de-rodas/
- /adaptar-casa-mobilidade-reduzida/
- /acessibilidade-condominios/

### Blog
- /recursos/ — index, CMS-driven, filterable by category
- /recursos/[slug] — individual articles, dynamic from Keystatic

---

## Navigation

```
Logo | Equipamentos ▾ | Soluções ▾ | Preços ▾ | Recursos | Sobre nós | [Pedir Orçamento — Grátis]
```

Equipamentos dropdown:
- Elevadores de Escadas → /equipamentos/elevadores-de-escadas/
- Elevadores Residenciais → /equipamentos/elevadores/
- Plataformas Elevatórias → /equipamentos/plataformas-elevatorias/

Soluções dropdown:
- Soluções para Subir Escadas → /solucoes-para-subir-escadas/
- Cadeiras Elevatórias para Idosos → /cadeiras-elevatorias-para-idosos/
- Soluções para Cadeiras de Rodas → /solucoes-para-cadeiras-de-rodas/
- Adaptar Casa: Mobilidade Reduzida → /adaptar-casa-mobilidade-reduzida/
- Acessibilidade em Condomínios → /acessibilidade-condominios/

Preços dropdown:
- Preços: Elevadores de Escadas → /equipamentos/elevadores-de-escadas/preco/
- Preços: Elevadores Residenciais → /equipamentos/elevadores/preco/
- Preços: Plataformas Elevatórias → /equipamentos/plataformas-elevatorias/preco/

---

## Quote form

Fully specified in quote-form-spec.md. Do not rewrite — use existing files:
- Component: src/components/QuoteForm.tsx
- API endpoint: functions/api/orcamento.ts
- Notification email: escreva@yahoo.co.uk (NOTIFICATION_EMAIL env var)

Props by page context:
- /pedir-orcamento/ → `<QuoteForm client:load />`
- Equipment hub pages → `<QuoteForm client:load preselectedProduct="escadas" />` (etc.)
- Sub-type pages → `<QuoteForm client:load preselectedProduct="escadas" preselectedVariant="curvas" />` — skips steps 1 and 2, user lands on contact step

---

## Catalogue form

Simple component for /catalogo-gratis/:
- Fields: Nome (required), Email (required), GDPR checkbox (required)
- Submits via Resend: confirmation to user + notification to NOTIFICATION_EMAIL
- Notification subject: "Novo pedido de catálogo — [nome]"

---

## Keystatic CMS for /recursos/

Full spec in site-structure.md. Summary:
- Install @keystatic/core and @keystatic/astro
- GitHub storage mode — repo: smdasilvasantos/accessible-lifts-guide
- Content in src/content/recursos/ as .mdoc files
- Admin at /keystatic — protect with KEYSTATIC_SECRET env var
- Pre-populate with 3 seed articles from page-tracker.csv

---

## SEO — every page

- Unique `<title>` from Meta Title column in page-tracker.csv
- Unique `<meta name="description">` from Meta Description column — max 155 chars
- One `<h1>` per page from H1 column in page-tracker.csv
- `<link rel="canonical">` tag
- `<html lang="pt-PT">`
- Open Graph: og:title, og:description, og:image, og:url, og:type
- BreadcrumbList JSON-LD on all sub-pages
- FAQPage JSON-LD on all equipment, sub-type, price and solution pages — minimum 4 FAQs per page, genuinely useful, based on audience objections in market-research.md section 5
- Article JSON-LD on all /recursos/ posts
- Organization JSON-LD site-wide
- WebSite + SearchAction JSON-LD on homepage
- Service JSON-LD on equipment hub and sub-type pages
- AggregateOffer JSON-LD on price pages with indicative ranges from services-list.md
- HowTo JSON-LD on any installation process section
- Internal links following the map in site-structure.md exactly

---

## Sitemaps

Generate:
- /sitemap-pages.xml — priorities: homepage 1.0, hubs 0.9, price 0.9, sub-types 0.8, solutions 0.8, quote/catalogue 0.7, about/contact 0.5
- /sitemap-blog.xml — all /recursos/ posts, priority 0.6
- /sitemap-index.xml — references both

---

## robots.txt

```
User-agent: *
Allow: /
Disallow: /keystatic/
Disallow: /api/

Sitemap: https://www.vidaacessivel.pt/sitemap-index.xml
```

---

## 301 Redirects — _redirects file

```
/precos-dos-elevadores-residenciais/ /equipamentos/elevadores/preco/ 301
/plataformas-elevatorias-preco/ /equipamentos/plataformas-elevatorias/preco/ 301
/guia-de-compra-de-elevadores-de-escadas/ /recursos/guia-de-compra-elevadores-de-escadas 301
/as-principais-caracteristicas-de-seguranca-dos-elevadores-de-escadas/ /recursos/seguranca-elevadores-de-escadas 301
/apoios-para-a-aquisicao-de-equipamentos-de-mobilidade/ /recursos/apoios-aquisicao-equipamentos-mobilidade 301
/elevador-de-escadas-usados/ /recursos/elevador-de-escadas-usado-ou-novo 301
/instalacao-de-elevadores-de-escadas-checklist/ /recursos/checklist-instalacao-elevador-escadas 301
/como-funciona-um-elevador-de-escadas/ /recursos/como-funciona-elevador-de-escadas 301
/elevadores-residenciais-sem-poco/ /recursos/elevadores-residenciais-sem-poco 301
/plataforma-elevatoria-residencial/ /recursos/plataforma-elevatoria-residencial 301
/plataforma-elevatoria-para-cadeira-de-rodas-num-condominio/ /recursos/plataforma-elevatoria-condominio 301
/dimensoes-minimas-para-instalar-um-elevador/ /recursos/dimensoes-minimas-elevador 301
/adaptar-uma-casa-para-deficiente/ /recursos/adaptar-casa-para-pessoa-com-deficiencia 301
```

---

## Deployment

Deploy to Cloudflare Pages via Wrangler after local review is complete.

Environment variables required in Cloudflare Pages dashboard:
- RESEND_API_KEY
- NOTIFICATION_EMAIL = escreva@yahoo.co.uk
- KEYSTATIC_SECRET

---

## Final checklist before deploying

- [ ] All pages in page-tracker.csv built
- [ ] Every page has unique title, meta description, H1
- [ ] No quote form appears in the first visible section of any page
- [ ] Quick price anchor ("Resposta rápida: desde X€") on all equipment hub pages
- [ ] Price pages at /equipamentos/*/preco/ — not in /recursos/
- [ ] FAQPage schema on all equipment, price and solution pages
- [ ] BreadcrumbList schema on all sub-pages
- [ ] itshover icons installed — used only where appropriate per icon rules above
- [ ] Image placeholders on every photo position with correct data-image-description
- [ ] QuoteForm uses preselectedProduct on hub pages
- [ ] QuoteForm uses preselectedProduct + preselectedVariant on sub-type pages
- [ ] Catalogue form working on /catalogo-gratis/
- [ ] Both forms send via Resend (confirmation + notification)
- [ ] Keystatic accessible at /keystatic
- [ ] 3 seed articles visible at /recursos/
- [ ] All 301 redirects in _redirects file
- [ ] Sitemaps generated correctly
- [ ] robots.txt correct
- [ ] All internal links working
- [ ] City chips on homepage structured as `<a href="#">` tags
- [ ] Mobile responsive on all pages
- [ ] npm run build completes with zero errors
