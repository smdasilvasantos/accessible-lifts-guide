# Site Architecture: Vida Acessível

Lead generation site for home accessibility and mobility equipment in Portugal.
All content in European Portuguese (pt-PT). No geographic sub-pages (national coverage). SEO logic is based on **product × problem/audience × intent** rather than product × location.

---

## Page Inventory Summary

| Category | Count | Notes |
|----------|-------|-------|
| Core pages | 6 | Homepage, About, Contact, Quote, Catalogue, Blog index |
| Equipment pages (hub) | 3 | One per product category |
| Product sub-type pages | 12 | 4 elevadores escadas + 5 elevadores residenciais + 3 plataformas |
| Price pages | 3 | One per product category |
| Audience/solution pages | 5 | Problem-first pages crossing product categories |
| Blog/recursos articles | 20+ | Existing + new (managed separately) |
| **Total (core build)** | **29** | Excludes blog posts |
| **Total with blog** | **50+** | Depending on content plan |

---

## URL Structure

```
/                                               ← Homepage
├── /equipamentos/
│   ├── /equipamentos/elevadores-de-escadas/    ← Hub page
│   ├── /equipamentos/elevadores/               ← Hub page (residenciais)
│   └── /equipamentos/plataformas-elevatorias/  ← Hub page
├── /elevadores-de-escadas/
│   ├── /elevadores-de-escadas/escadas-retas
│   ├── /elevadores-de-escadas/escadas-curvas
│   ├── /elevadores-de-escadas/escadas-exteriores
│   └── /elevadores-de-escadas/escadas-estreitas
├── /elevadores-residenciais/
│   ├── /elevadores-residenciais/1-andar
│   ├── /elevadores-residenciais/sem-poco
│   ├── /elevadores-residenciais/compactos
│   ├── /elevadores-residenciais/hidraulicos
│   └── /elevadores-residenciais/pneumaticos
├── /plataformas-elevatorias/
│   ├── /plataformas-elevatorias/escadas-retas
│   ├── /plataformas-elevatorias/escadas-curvas
│   └── /plataformas-elevatorias/exteriores
├── /solucoes/
│   ├── /solucoes-para-subir-escadas/
│   ├── /cadeiras-elevatorias-para-idosos/
│   ├── /solucoes-para-cadeiras-de-rodas/
│   ├── /adaptar-casa-mobilidade-reduzida/
│   └── /acessibilidade-condominios/
├── /equipamentos/elevadores-de-escadas/preco/
├── /equipamentos/elevadores/preco/
├── /equipamentos/plataformas-elevatorias/preco/
├── /pedir-orcamento/                           ← Primary conversion
├── /catalogo-gratis/                           ← Secondary conversion
├── /recursos/                                  ← Blog index
│   └── /recursos/{post-slug}                   ← Blog posts
├── /sobre/
├── /contacto/
└── /politica-de-privacidade/
```

---

## Navigation Structure

**Main Nav:**
```
Logo | Equipamentos (dropdown) | Soluções (dropdown) | Preços (dropdown) | Recursos | Sobre nós | [CTA: Pedir Orçamento]
```

**Equipamentos dropdown:**
- Elevadores de Escadas
- Elevadores Residenciais
- Plataformas Elevatórias

**Soluções dropdown:**
- Soluções para Subir Escadas
- Cadeiras Elevatórias para Idosos
- Soluções para Cadeiras de Rodas
- Adaptar Casa: Mobilidade Reduzida
- Acessibilidade em Condomínios

**Preços dropdown:**
- Preços: Elevadores de Escadas → `/equipamentos/elevadores-de-escadas/preco/`
- Preços: Elevadores Residenciais → `/equipamentos/elevadores/preco/`
- Preços: Plataformas Elevatórias → `/equipamentos/plataformas-elevatorias/preco/`

---

## Internal Linking Map

### Homepage links to:
- 3 equipment hub pages (product cards)
- 3 audience/solution pages (problem cards)
- 3 featured blog posts
- /pedir-orcamento/ (primary CTA — multiple placements)
- /catalogo-gratis/ (secondary CTA)

### Equipment hub page links to:
- Its own sub-type pages (e.g., escadas retas, escadas curvas)
- Price page for that product
- Relevant audience/solution pages
- 2–3 related blog posts
- /pedir-orcamento/ (CTA)
- /catalogo-gratis/ (CTA)

### Sub-type page links to:
- Parent equipment hub (breadcrumb)
- Other sub-types for same product ("Veja também")
- Related audience pages
- Price page for that product
- /pedir-orcamento/ (CTA)

### Price page links to:
- Parent equipment hub
- Sub-type pages (to clarify what affects price)
- /pedir-orcamento/ (strong CTA — "Receba orçamentos para comparar")
- Related blog posts (e.g., guia de compra)

### Audience/solution page links to:
- Relevant equipment hub pages
- Relevant sub-type pages
- Related blog posts
- /pedir-orcamento/ (CTA)

### Blog post links to:
- 1–2 relevant equipment or solution pages (contextual)
- /pedir-orcamento/ or /catalogo-gratis/ (inline CTA)
- 2–3 related blog posts ("Artigos relacionados")

### Breadcrumbs:
```
Sub-type page:   Início > Equipamentos > Elevadores de Escadas > Escadas Curvas
Price page:      Início > Equipamentos > Elevadores de Escadas > Preços
Solution page:   Início > Soluções > Cadeiras Elevatórias para Idosos
Blog post:       Início > Recursos > {Título do Artigo}
```

---

## Schema Markup Plan

| Page Type | Schema |
|-----------|--------|
| All pages | Organization |
| Homepage | WebSite + SearchAction |
| Equipment hub + sub-type | Product (general) + FAQPage |
| Price pages | Product + AggregateOffer + FAQPage |
| Audience/solution pages | FAQPage + HowTo (where applicable) |
| Blog posts | Article |
| Contact / Quote / Catalogue | ContactPage |
| About | AboutPage |

**Organization schema (site-wide):**
```json
{
  "@type": "Organization",
  "name": "Vida Acessível",
  "url": "https://www.vidaacessivel.pt",
  "logo": "https://www.vidaacessivel.pt/wp-content/uploads/2025/10/LogoVA.svg",
  "description": "Guia independente de acessibilidade em Portugal. Ajudamos a encontrar e comparar soluções de elevadores de escadas, elevadores residenciais e plataformas elevatórias.",
  "areaServed": { "@type": "Country", "name": "Portugal" },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "availableLanguage": "Portuguese"
  }
}
```

---

## Sitemap Structure

- **sitemap-pages.xml** — all core pages, equipment, sub-types, solutions, prices (priority 0.8–1.0)
- **sitemap-blog.xml** — all /recursos/ posts (priority 0.6)
- **sitemap-index.xml** — references both

Priority:
- Homepage: 1.0
- Equipment hubs: 0.9
- Price pages (`/equipamentos/*/preco/`): 0.9
- Sub-type pages: 0.8
- Solution/audience pages: 0.8
- Quote / Catalogue: 0.7
- Blog posts: 0.6
- About / Contact: 0.5

---

## Content Differentiation Strategy

Unlike the landscaping example, there are no geographic combos. Differentiation is achieved through:

1. **Sub-type specificity** — each sub-type page addresses a specific staircase/space configuration with unique intro, unique FAQ, unique CTA framing
2. **Intent matching** — price pages are direct and conversion-oriented; how-it-works pages are educational; audience pages are emotionally led
3. **Audience lens** — same product described differently for an 80-year-old vs. a 45-year-old looking for a solution for their parent
4. **Unique FAQs per page** — at least 3–4 FAQs specific to that page's topic
5. **No cross-page content duplication** — each page answers a clearly distinct question

---

## Headless CMS: /recursos (Blog / Articles)

The `/recursos` section is powered by a headless CMS so content can be published, edited, and managed without touching code.

### Recommended CMS: Keystatic

**Why Keystatic:**
- Open source, free, no vendor lock-in
- Files stored in Git (Markdown or MDX with frontmatter) — content lives in the repo, not a database
- Has a clean visual editor that works locally and via GitHub
- Built specifically for Astro — official integration (`@keystatic/astro`)
- No separate database or hosting needed — works on Cloudflare Pages

**Alternative:** Decap CMS (formerly Netlify CMS) — also Git-based, simpler but less polished editor.

---

### CMS Implementation Plan

#### 1. Install Keystatic in the Astro project

```bash
npx create-keystatic@latest
# or add to existing project:
npm install @keystatic/core @keystatic/astro
```

#### 2. Content collection: `recursos` (articles)

Define in `keystatic.config.ts`:

```ts
import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'github', repo: 'smdasilvasantos/accessible-lifts-guide' },

  collections: {
    recursos: collection({
      label: 'Recursos',
      slugField: 'title',
      path: 'src/content/recursos/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        description: fields.text({ label: 'Descrição (meta)', multiline: true }),
        publishDate: fields.date({ label: 'Data de publicação' }),
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Elevadores de Escadas', value: 'elevadores-de-escadas' },
            { label: 'Elevadores Residenciais', value: 'elevadores-residenciais' },
            { label: 'Plataformas Elevatórias', value: 'plataformas-elevatorias' },
            { label: 'Apoios e Legislação', value: 'apoios-legislacao' },
            { label: 'Guias de Compra', value: 'guias-de-compra' },
            { label: 'Acessibilidade', value: 'acessibilidade' },
          ],
          defaultValue: 'acessibilidade',
        }),
        featuredImage: fields.image({ label: 'Imagem de destaque', directory: 'public/images/recursos' }),
        author: fields.text({ label: 'Autor', defaultValue: 'Vida Acessível' }),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
});
```

#### 3. Article frontmatter structure (Markdown files)

Each article is stored as a `.mdoc` or `.md` file in `src/content/recursos/`:

```md
---
title: Guia de Compra de Elevadores de Escadas
description: Tudo o que precisa de saber antes de comprar um elevador de escadas em Portugal.
publishDate: 2025-04-01
category: guias-de-compra
featuredImage: /images/recursos/guia-compra-elevadores.webp
author: Vida Acessível
---

Article content here in Markdown...
```

#### 4. Astro content collection (src/content/config.ts)

```ts
import { defineCollection, z } from 'astro:content';

const recursos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    category: z.string(),
    featuredImage: z.string().optional(),
    author: z.string().default('Vida Acessível'),
  }),
});

export const collections = { recursos };
```

#### 5. Dynamic routes in Astro

**Blog index** — `src/pages/recursos/index.astro`:
- Lists all articles sorted by `publishDate` descending
- Filterable by `category`
- Cards with title, description, category badge, date, read more link

**Individual article** — `src/pages/recursos/[slug].astro`:
- Uses `getStaticPaths()` to generate all article pages at build time
- Full article content rendered from Markdown
- Sidebar or footer with inline CTA (`/pedir-orcamento/` or `/catalogo-gratis/`)
- Schema: `Article` JSON-LD
- Breadcrumb: Início > Recursos > {Título}
- "Artigos relacionados" section (same category, 2–3 posts)

---

### CMS Admin Interface

Keystatic provides a local admin UI at `/keystatic` during development:
- Rich text editor (Markdoc)
- Image upload
- Dropdown for category
- Date picker
- Preview before publishing

In production, the editor connects to GitHub via OAuth — editor makes commits directly to the repo, triggering a Cloudflare Pages redeploy (typically 30–60 seconds to publish).

**Access URL in production:** `https://www.vidaacessivel.pt/keystatic`
Protect with Cloudflare Access or a simple environment-variable check to prevent public access.

---

### Article Categories

| Category slug | Label | Example articles |
|---------------|-------|-----------------|
| elevadores-de-escadas | Elevadores de Escadas | Como funciona, segurança, guia de compra, usado vs novo |
| elevadores-residenciais | Elevadores Residenciais | Tipos, dimensões mínimas, licenças, sem poço |
| plataformas-elevatorias | Plataformas Elevatórias | Condomínios, cadeira de rodas, comercial vs residencial |
| apoios-legislacao | Apoios e Legislação | SAPA, IVA 6%, IUC, IMI, acessibilidade pública |
| guias-de-compra | Guias de Compra | Novo vs usado, checklist instalação, como comparar orçamentos |
| acessibilidade | Acessibilidade | Adaptar casa, cadeira de rodas, mobilidade reduzida |

---

### Existing articles to migrate (from current site)

| Current URL | Suggested new slug | Category |
|-------------|-------------------|----------|
| /guia-de-compra-de-elevadores-de-escadas/ | guia-de-compra-elevadores-de-escadas | guias-de-compra |
| /as-principais-caracteristicas-de-seguranca-dos-elevadores-de-escadas/ | seguranca-elevadores-de-escadas | elevadores-de-escadas |
| /apoios-para-a-aquisicao-de-equipamentos-de-mobilidade/ | apoios-aquisicao-equipamentos-mobilidade | apoios-legislacao |
| /elevador-de-escadas-usados/ | elevador-de-escadas-usado-ou-novo | guias-de-compra |
| /instalacao-de-elevadores-de-escadas-checklist/ | checklist-instalacao-elevador-escadas | guias-de-compra |
| /como-funciona-um-elevador-de-escadas/ | como-funciona-elevador-de-escadas | elevadores-de-escadas |
| /elevadores-residenciais-sem-poco/ | elevadores-residenciais-sem-poco | elevadores-residenciais |
| /precos-dos-elevadores-residenciais/ | (price page, not blog) | — |
| /plataforma-elevatoria-residencial/ | plataforma-elevatoria-residencial | plataformas-elevatorias |
| /plataforma-elevatoria-para-cadeira-de-rodas-num-condominio/ | plataforma-elevatoria-condominio | plataformas-elevatorias |
| /dimensoes-minimas-para-instalar-um-elevador/ | dimensoes-minimas-elevador | elevadores-residenciais |
| /adaptar-uma-casa-para-deficiente/ | adaptar-casa-mobilidade-reduzida | acessibilidade |
| /apoios-legislacao/* | migrate to category | apoios-legislacao |
