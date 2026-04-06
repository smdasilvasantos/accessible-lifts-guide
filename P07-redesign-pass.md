# P07: Design, Tone & Content — Vida Acessível

## What this is
This document defines the design direction, tone of voice, section structure, and content requirements for every page type on vidaacessivel.pt. Read it alongside P06 before building or editing any page.

Competitor reference for price page inspiration (structure only, not copy):
https://www.tmelevadores.pt/preco-elevador-residencial

---

## Tone of voice — applies to every word on the site

### Who we are writing for
A 65-year-old person who is struggling with stairs, or their adult son or daughter who is looking for a solution on their behalf. They are not technical buyers. They are worried, practical, and want to trust whoever they deal with.

### Core tone
Warm · Clear · Direct · Personal · Calm · Without pressure

### Three things every page must convey
1. We understand your situation
2. We know what solutions exist
3. We make the process simple and safe

### Writing rules
- Short sentences. One idea per paragraph.
- Never start with the product. Start with the person's problem or situation.
- Use "a sua casa", "o seu caso", "para si", "a sua escada" — personal, not generic
- Write like a trusted friend who knows about this, not like a company brochure
- Price is always welcome — the user's biggest question is "quanto custa?" — answer it honestly and early
- Never pressurise. Never "compre agora". Use "descubra", "compare", "veja se é para si"
- The user should feel they can explore freely and only decide when ready

### Never use
- "Solução de vanguarda"
- "Tecnologia de ponta"
- "Líderes de mercado"
- "Parceiros estratégicos"
- "Missão e visão"
- Any language that sounds like a corporate brochure or sales pitch

### Always use
- "Sem obras complicadas"
- "Cabe na sua escada"
- "Instalação rápida"
- "Preço justo"
- "Sem compromisso"
- "Instaladores certificados"
- "Comparar propostas"
- "Decidir com calma"

---

## Form placement rule — the single most important conversion rule

**Never put the quote form in the first visible section of any page.**

The user arrives not knowing if this is the right solution for them. If the first thing they see is a form, they leave.

The form only appears after:
1. Hero — names the problem or situation
2. Content — explains what the solution is
3. Options — shows the sub-types or variants
4. Price — gives an honest price range

Only then the form appears, framed as:
> "Já sabe o que existe. Agora receba propostas para o seu caso específico."

Both CTAs (Pedir Orçamento / Catálogo Grátis) can appear in the nav and as secondary CTAs in early sections — but the actual form element only appears in the lower half of the page.

---

## Homepage section order

Build exactly in this order. Do not add or remove sections.

### 1. Hero
- No form
- Eyebrow label: "Uma casa sem obstáculos"
- H1: "Soluções para viver em casa com liberdade e independência"
- Subheadline (2 sentences max): "Comparamos equipamentos e ligamos-o a instaladores certificados — de forma simples, gratuita e sem compromisso."
- CTA primary: "Ver preços →" (links to /equipamentos/elevadores-de-escadas/preco/ as the most searched)
- CTA secondary: "Pedir orçamento gratuito" (links to /pedir-orcamento/)
- Image placeholder: aspect-ratio 3/2, right side of hero on desktop
  - data-image-description: "Elderly Portuguese woman, late 60s, sitting comfortably on a stairlift in a traditional Portuguese home with stone walls and warm interior light. She looks relaxed and independent. Family member visible in background, smiling. Sony A7R IV, 35mm f/2.0, natural light, warm tones. WebP format."
  - Portuguese caption: "Mulher idosa a usar cadeira elevatória em casa portuguesa tradicional"

### 2. Como funciona — 3 steps with itshover icons
- Step 1 — icon: send or search — "Indique o que procura" — "Diga-nos o tipo de equipamento de que precisa"
- Step 2 — icon: users — "Receba até 3 propostas gratuitas" — "Instaladores certificados enviam propostas personalizadas para o seu caso"
- Step 3 — icon: check-circle — "Compare e escolha com calma" — "Analise as opções sem pressão e decida quando estiver pronto"

### 3. Soluções — 3 product cards
One card per product category. Each card has:
- Image placeholder (4/3 aspect ratio)
- Product name
- One-line description focused on the user's situation
- Indicative price: "desde X€"
- "Saber mais →" link to equipment hub page

Cards:
- Elevadores de Escadas — "Suba e desça escadas sentado, sem obras complicadas" — desde 2.500€
- Elevadores Residenciais — "Ligue todos os pisos da sua casa com um elevador discreto" — desde 8.500€
- Plataformas Elevatórias — "Acesso seguro em cadeira de rodas, interior ou exterior" — desde 4.000€

### 4. Porquê o Vida Acessível — 4 USPs with itshover icons
- icon: euro — "Até 3 orçamentos gratuitos" — "Receba propostas de vários instaladores e compare sem custo"
- icon: shield — "Instaladores certificados" — "Trabalhamos apenas com empresas verificadas e com experiência comprovada"
- icon: zap — "Processo simples e rápido" — "Preenche um formulário, nós tratamos do resto"
- icon: map-pin — "Cobertura nacional" — "Parceiros em todo o Portugal continental e ilhas"

### 5. Cidades — city chips
- H2: "Instaladores certificados em todo o Portugal"
- Subtext: "A nossa rede cobre todo o país. Encontre o instalador certo para a sua zona."
- City chips as `<a href="#">` tags — future-ready for local pages:
  Lisboa · Porto · Braga · Aveiro · Coimbra · Setúbal · Faro · Leiria · Viseu · Évora · Guimarães · Funchal
- Note in code comment: `{/* TODO: wire city links to local pages when built */}`

### 6. Artigos recentes — 3 latest /recursos/ posts (dynamic)
- H2: "Guias e recursos úteis"
- Grid of 3 article cards: thumbnail placeholder, category badge, title, excerpt, "Continuar a ler →"
- "Ver todos os artigos →" link to /recursos/

### 7. CTA banner — quote conversion
- Background: brand green (#1D6954)
- H2: "Receba até 3 orçamentos gratuitos"
- Text: "Preencha o formulário em menos de 2 minutos. Instaladores certificados contactam-no com propostas personalizadas."
- CTA button: "Pedir orçamento agora"
- Secondary link: "Prefere primeiro o catálogo? Peça aqui →"

---

## Equipment hub page section order

Apply to all three hubs. Adapt content per product using services-list.md.

### 1. Hero
- H1 from page-tracker.csv
- 2–3 sentence intro — problem-first, not product-first
- Two soft CTAs: "Ver preços" (→ /equipamentos/[product]/preco/) and "Pedir catálogo grátis" (→ /catalogo-gratis/)
- Image placeholder hero — 16/9 or 3/2
- No form

### 2. Quick price anchor — appears early, before any detailed content
```
Quanto custa? — resposta rápida
[Product] em Portugal custa entre [X€] e [Y€].
O preço final depende do tipo de escada/espaço, do modelo escolhido e da instalação.
[Ver tabela de preços completa →] links to /equipamentos/[product]/preco/
```
This section exists because "quanto custa" is the first thing in the user's mind. Give an honest number early, then link to the full price page for detail.

### 3. Sub-type cards — one per variant
Each card:
- Image placeholder (4/3)
- Sub-type name
- 1-line description specific to this variant
- "Desde X€" price indication
- "Saber mais →" to sub-type page

### 4. How it works — 3 or 4 steps with icons
Simple numbered steps. No jargon. Focus on what the user experiences, not the technical mechanism.

### 5. Who it's for — 3 audience cards with icons
Personal framing: "Para quem tem dificuldade em subir escadas", "Para quem usa cadeira de rodas", "Para quem quer preparar a casa para o futuro"

### 6. FAQ — minimum 4 questions with FAQPage schema
Must include for every hub:
- "Quanto custa [product] em Portugal?"
- "É preciso fazer obras para instalar [product]?"
- "Quanto tempo demora a instalação?"
- "[Product] cabe na minha escada / casa?"

### 7. Quote form — QuoteForm component with preselectedProduct
Frame it as:
> "Já sabe o que existe. Agora receba propostas para o seu caso."
> "Preencha o formulário — instaladores certificados respondem com propostas gratuitas e personalizadas."

### 8. Catálogo CTA
For users not ready to request a quote:
> "Ainda a explorar opções? Peça o catálogo gratuito e consulte modelos, dimensões e preços comodamente em casa."
> [Pedir catálogo grátis →]

---

## Sub-type page section order

Apply to all 12 sub-type pages. Each opens with the specific situation.

### Opening — situation-first (not product-first)
Examples:
- Escadas curvas: "Tem uma escada com curvas, patamares ou mudanças de direção? A solução existe — e adapta-se exatamente à sua escada."
- Escadas estreitas: "A sua escada é estreita? É o receio mais comum — e existe elevador para isso."
- Elevador sem poço: "Não há espaço para um poço? Não há problema. Os elevadores modernos já não precisam."
- Plataforma exterior: "A escada fica do lado de fora? Existe uma plataforma preparada para resistir a qualquer clima."

### Price line — one sentence, early
"Preço indicativo: desde X€, instalação incluída. [Ver tabela de preços completa →]"

### Sections
1. What it is / how it works (brief — 2–3 paragraphs)
2. Key benefits — 3 bullet points with icons, specific to this variant
3. Installation requirements — what space is needed, what works are involved
4. FAQ — 4 questions specific to this sub-type (not repeated from hub page)
5. QuoteForm with preselectedProduct AND preselectedVariant
6. Related sub-types — "Veja também" — 2–3 cards linking to sibling pages
7. Catálogo CTA

---

## Price page section order

Apply to all three price pages at /equipamentos/*/preco/

These are important SEO and conversion pages. Users searching "quanto custa elevador de escadas" land here. Give them real numbers immediately.

### 1. H1 and quick answer box — above the fold
```
H1: Quanto custa [product] em Portugal? Preços 2025

Quick answer box (visually distinct — green left border or light green background):
Resposta rápida:
Um [product] em Portugal custa entre X€ e Y€.
Para [most common case] — o caso mais procurado — o preço começa nos Z€.

• [Variant A] — desde X€
• [Variant B] — desde Y€
• [Variant C] — desde Z€
[IVA note] · instalação incluída · valores indicativos
```

### 2. What affects the price — 4 factor cards with icons
Each card: icon + factor name + 1-sentence explanation of how it affects price.

### 3. Price table by variant
Clean table. Columns: Tipo | Preço indicativo | Instalação | Tempo | Observações
Note below table: "Valores indicativos. O preço final depende da avaliação técnica presencial."

### 4. Additional costs table
Columns: Componente | Custo estimado | Periodicidade
Include: maintenance, electricity, inspections, civil works (if applicable).

### 5. State support — SAPA, IVA 6%, financing
- SAPA — briefly explain eligibility and process
- IVA reduzido a 6% — confirm it applies to accessibility equipment
- Financiamento em prestações — note most installers offer this

### 6. Comparison section (product-specific — see below)
- Escadas: novo vs usado — short, honest, recommend new for safety
- Residenciais: homelift vs elevador convencional — simple table
- Plataformas: plataforma vs elevador de escadas — when each is the right choice

### 7. Is it worth it? — 3 reasons with icons
Emotional and practical. See product-specific content below.

### 8. FAQ — 6 questions with FAQPage schema
Include the keyword question as Q1 ("Quanto custa [product] em Portugal?")

### 9. Quote CTA
```
Receba o preço para o seu caso específico
O preço final depende sempre da medição presencial.
Peça orçamentos gratuitos a instaladores certificados — compare propostas e escolha sem pressão.
[Pedir orçamentos gratuitos →]
```

---

## Price page content — Elevadores de Escadas

Quick answer:
- Escadas retas — desde 2.500€
- Escadas curvas — desde 4.500€
- Escadas exteriores — desde 3.500€
- Escadas estreitas — desde 3.000€

What affects price:
1. Tipo de escada (reta vs curva) — calha curva é feita à medida, custa mais
2. Comprimento do percurso — mais degraus = calha mais longa = mais custo
3. Marca e modelo — compacto vs premium têm preços distintos
4. Condições de instalação — em casas antigas pode ser necessário reforço pontual

Price table:
| Tipo | Preço | Instalação | Tempo | Observações |
|------|-------|-----------|-------|-------------|
| Escadas retas | 2.500€ – 4.500€ | Incluída | 1–2 dias | Mais comum, mais rápido |
| Escadas curvas | 4.500€ – 8.000€ | Incluída | 2–3 dias | Calha feita à medida |
| Escadas exteriores | 3.500€ – 6.000€ | Incluída | 1–2 dias | Resistente ao clima |
| Escadas estreitas | 3.000€ – 5.500€ | Incluída | 1–2 dias | Modelos compactos |

Additional costs:
| Componente | Custo | Periodicidade |
|-----------|-------|---------------|
| Manutenção preventiva | 150€ – 300€ | Anual (opcional) |
| Consumo elétrico | 20€ – 50€ | Anual |
| Garantia alargada | 200€ – 400€ | Opcional |

Note: elevadores de escadas residenciais NÃO são obrigados a contratos de manutenção (Diretiva de Máquinas 2006/42/CE).

Comparison: Novo vs. usado
Used can be 40–60% cheaper but: no warranty, calha may not fit your staircase, safety uncertainty. Recommendation: always new for safety and peace of mind.

Is it worth it — 3 reasons:
1. icon: shield — Mantém a autonomia em casa — sem depender de terceiros para subir as escadas
2. icon: shield — Previne quedas — principal causa de hospitalização em pessoas acima dos 65 anos
3. icon: zap — Não altera a casa — desmontável, não requer obras permanentes, pode ir para nova casa

FAQ:
1. Quanto custa um elevador de escadas em Portugal?
2. O preço inclui a instalação?
3. Quanto tempo demora a instalar um elevador de escadas?
4. É preciso fazer obras para instalar um elevador de escadas?
5. Posso instalar numa escada estreita?
6. Existem apoios do Estado para comprar um elevador de escadas?

---

## Price page content — Elevadores Residenciais

Quick answer:
- 2 pisos — desde 8.500€
- 3 pisos — desde 10.500€
- 4+ pisos — desde 14.000€

What affects price:
1. Número de pisos — cada patamar adicional acrescenta 1.500€–3.000€ (guias, portas, cablagem)
2. Tecnologia — hidráulico vs elétrico MRL vs pneumático têm faixas distintas
3. Obras civis — moradias existentes podem exigir abertura de laje ou construção de caixa
4. Acabamentos da cabina — standard vs premium (vidro, inox, madeira nobre)

Price table by technology:
| Tipo | Preço | Ideal para | Observações |
|------|-------|-----------|-------------|
| Hidráulico | 8.000€ – 20.000€ | Moradias 2–3 pisos | Silencioso, sem casa de máquinas |
| Elétrico MRL | 10.000€ – 25.000€ | Moradias 2–4 pisos | Mais eficiente, mais duradouro |
| Pneumático | 9.000€ – 18.000€ | Espaços reduzidos | Sem poço, instalação rápida |
| Plataforma vertical | 7.000€ – 14.000€ | 1–2 pisos | Mais económico, estrutura aberta |

Price table by floors:
| Pisos | Preço | Tempo de instalação |
|-------|-------|-------------------|
| 2 pisos | 8.500€ – 16.000€ | 3–5 dias |
| 3 pisos | 10.500€ – 22.000€ | 4–7 dias |
| 4+ pisos | 14.000€ – 28.000€ | 5–10 dias |

Additional costs:
| Componente | Custo | Periodicidade |
|-----------|-------|---------------|
| Obra civil (moradia existente) | 1.500€ – 5.000€ | Única |
| Manutenção preventiva | 400€ – 800€ | Anual |
| Consumo elétrico | 80€ – 200€ | Anual |
| Inspeção obrigatória (EIIE) | 150€ – 300€ | Bienal |

Comparison: Homelift vs elevador convencional:
| Critério | Homelift | Elevador convencional |
|---------|---------|----------------------|
| Preço (2 pisos) | 8.500€ – 16.000€ | 25.000€ – 45.000€ |
| Casa de máquinas | Não necessita | Necessária |
| Obra civil | Mínima | Significativa |
| Manutenção/ano | 400€ – 600€ | 800€ – 1.500€ |
| Instalação | 3–5 dias | 2–4 semanas |

Is it worth it — 3 reasons:
1. icon: star — Valorização do imóvel — moradias com elevador valorizam 5–15% acima da média do mercado
2. icon: clock — Autonomia a longo prazo — um investimento que serve a família por décadas
3. icon: check-circle — Conforto diário — não só para mobilidade reduzida, mas para qualquer pessoa em qualquer fase da vida

FAQ:
1. Quanto custa instalar um elevador residencial em Portugal?
2. É preciso licença de construção para instalar um elevador em casa?
3. Qual é o elevador mais barato para moradia?
4. Quanto tempo demora a instalação de um elevador residencial?
5. Preciso de fazer obras estruturais na minha casa?
6. Qual a diferença entre um elevador hidráulico e um elétrico?

---

## Price page content — Plataformas Elevatórias

Quick answer:
- Escadas retas — desde 4.000€
- Escadas curvas — desde 6.500€
- Instalação exterior — desde 5.000€
Note: IVA a 6% aplica-se a este equipamento de acessibilidade

What affects price:
1. Tipo de escada (reta vs curva) — curva exige calha personalizada
2. Ambiente de instalação — interior vs exterior (proteção climática adicional)
3. Capacidade de carga — peso do utilizador mais cadeira de rodas
4. Acessórios de segurança — sensores, joystick, telecomando, rampas de acesso

Price table:
| Tipo | Preço | Instalação | Observações |
|------|-------|-----------|-------------|
| Escadas retas | 4.000€ – 7.000€ | Incluída | Mais rápido e económico |
| Escadas curvas | 6.500€ – 12.000€ | Incluída | Calha feita à medida |
| Exterior | 5.000€ – 9.000€ | Incluída | Resistente ao clima |
| Condomínio | 5.500€ – 10.000€ | Incluída | Cumpre normas de acessibilidade |

Additional costs:
| Componente | Custo | Periodicidade |
|-----------|-------|---------------|
| Manutenção preventiva | 200€ – 400€ | Anual (opcional) |
| Consumo elétrico | 30€ – 80€ | Anual |
| Inspeção (se espaço público) | 150€ – 300€ | Bienal |

Comparison: Plataforma vs elevador de escadas:
| Critério | Plataforma elevatória | Elevador de escadas |
|---------|----------------------|-------------------|
| Para cadeira de rodas | Sim — utilizador não sai da cadeira | Não — requer transferência para o assento |
| Preço | Mais caro | Mais económico |
| Espaço necessário | Mais espaço na escada | Menos espaço |
| Adequado para | Utilizadores de cadeira de rodas | Pessoas com dificuldade a andar |

Is it worth it — 3 reasons:
1. icon: shield — Independência total — o utilizador não precisa de ajuda para se deslocar entre pisos
2. icon: check-circle — A escada fica acessível a todos — a plataforma recolhe quando não está em uso
3. icon: euro — Apoios do Estado disponíveis — SAPA e IVA reduzido a 6% tornam o investimento mais acessível

FAQ:
1. Quanto custa uma plataforma elevatória em Portugal?
2. Qual a diferença entre uma plataforma elevatória e um elevador de escadas?
3. A plataforma obstrui a escada para outros utilizadores?
4. Preciso de aprovação do condomínio para instalar uma plataforma elevatória?
5. Existem apoios do Estado para plataformas elevatórias?
6. A instalação de uma plataforma elevatória requer obras?

---

## Audience / solution pages

These pages are problem-first and emotion-first. Product is secondary.

### Section order
1. Hero — acknowledge the situation, not the product
   - "Se subir escadas está a ficar difícil..." / "Quando a mobilidade reduzida muda a vida em casa..."
2. Empathy paragraph — "Não está sozinho. Muitas famílias em Portugal passam pela mesma situação."
3. Solutions — 2–3 product cards relevant to this audience with brief comparison
4. How to choose between options — simple decision guide
5. Price indication — honest range
6. QuoteForm — "Diga-nos o seu caso — encontramos a solução certa"
7. Catálogo CTA

### Audience-specific opening lines
- /solucoes-para-subir-escadas/ — "Subir as escadas já não é o que era? Existem soluções simples que podem mudar tudo."
- /cadeiras-elevatorias-para-idosos/ — "Manter a autonomia em casa é possível — mesmo quando as escadas se tornam um obstáculo."
- /solucoes-para-cadeiras-de-rodas/ — "Em cadeira de rodas, as barreiras em casa não têm de ser permanentes."
- /adaptar-casa-mobilidade-reduzida/ — "Adaptar a casa não significa transformá-la. Significa torná-la mais sua."
- /acessibilidade-condominios/ — "Tornar um prédio acessível a todos é mais simples — e mais rápido — do que imagina."

---

## /sobre/ page

Sections:
1. Hero — "Por uma vida mais acessível em Portugal"
2. What we do — intermediary model explained simply, no jargon
3. How we work — 3 steps with icons
4. Our partners — brief mention of certified installer network, Levita as named partner
5. For businesses — if you're an installer or supplier, contact us to join the network
6. CTA — Pedir Orçamento / Catálogo

---

## /contacto/ page

Simple page:
- H1: "Fale connosco — estamos aqui para ajudar"
- Short intro: "Tem dúvidas sobre equipamentos, instalação ou preços? Entre em contacto."
- Contact form: Nome, Email, Mensagem, GDPR checkbox
- Response time mention: "Respondemos a todos os pedidos em 1–2 dias úteis"
- Alternative: link to /pedir-orcamento/ for quote requests

---

## /recursos/ blog index

- Filterable by category (client-side JS)
- Categories: Elevadores de Escadas · Elevadores Residenciais · Plataformas Elevatórias · Apoios e Legislação · Guias de Compra · Acessibilidade
- Article cards: thumbnail placeholder (16/9) + category badge + title + excerpt + date + "Continuar a ler →"
- Featured article at top (most recent or manually selected)
- No sidebar — clean grid layout

---

## /recursos/[slug] article pages

- Breadcrumb: Início > Recursos > Título do Artigo
- Hero: title, category badge, date, author
- Image placeholder (16/9) with data-image-description
- Content rendered from Keystatic Markdoc
- Inline CTA after 3rd paragraph: "Precisa de ajuda a escolher? Receba orçamentos gratuitos."
- Related articles (same category, 2–3 cards) at bottom
- Final CTA: Pedir Orçamento or Catálogo Grátis depending on article topic
- Article + BreadcrumbList JSON-LD schema
