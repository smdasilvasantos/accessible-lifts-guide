# Form Spec: Multistep Quote Request — Pedir Orçamento

## File location
`src/components/QuoteForm.tsx`

Used on:
- `/pedir-orcamento/` — full page, centred, with trust signals
- `/equipamentos/elevadores-de-escadas/` — embedded inline with product pre-selected
- `/equipamentos/elevadores/` — embedded inline with product pre-selected
- `/equipamentos/plataformas-elevatorias/` — embedded inline with product pre-selected
- All sub-type pages — embedded inline with product AND sub-type pre-selected

## Props

```ts
interface QuoteFormProps {
  preselectedProduct?: 'escadas' | 'residencial' | 'plataforma';
  preselectedVariant?: string; // e.g. 'curva', 'semPoco', 'exterior' — skips step 2
  compact?: boolean; // true = no card wrapper, embedded in page section
}
```

When `preselectedProduct` is set, skip step 1 and open directly at step 2.
When both `preselectedProduct` and `preselectedVariant` are set, skip steps 1 and 2 and open at step 3.

---

## Steps

### Step 1 — Equipamento
Always shown unless `preselectedProduct` is set.

Three option cards:
- **Elevador de escadas** — "Cadeira elevatória para subir e descer escadas"
- **Elevador residencial** — "Elevador doméstico entre pisos da casa"
- **Plataforma elevatória** — "Para utilizadores de cadeira de rodas"

No next button until one is selected.

---

### Step 2 — Detalhes
Conditional on product selected in step 1.

**If product = escadas:**
Label: "Como é a sua escada?"
Subtitle: "O tipo de escada determina o modelo e o preço do elevador."
Options (2-col grid):
- `reta` — Reta — "Linha reta sem curvas ou patamares"
- `curva` — Curva ou em L — "Com curvas, patamares ou mudança de direção"
- `exterior` — Exterior — "Escada fora de casa, exposta ao clima"
- `estreita` — Estreita — "Espaço limitado, menos de 70cm de largura"

**If product = residencial:**
Label: "Que tipo de elevador pretende?"
Subtitle: "Diferentes sistemas têm vantagens e preços distintos."
Options (2-col grid):
- `1andar` — 1 andar — "Liga o rés-do-chão ao primeiro andar"
- `semPoco` — Sem poço — "Sem obras de fundo — instalação rápida"
- `compacto` — Compacto — "Para espaços reduzidos ou casas antigas"
- `hidraulico` — Hidráulico — "Silencioso e suave — o mais popular"
- `pneumatico` — Pneumático — "Sem cabos, a vácuo — moderno e eficiente"

**If product = plataforma:**
Label: "Onde vai ser instalada?"
Subtitle: "O ambiente de instalação define o modelo mais adequado."
Options (2-col grid):
- `intReta` — Interior — reta — "Escada reta dentro de casa ou edifício"
- `intCurva` — Interior — curva — "Escada curva ou com patamares no interior"
- `exterior` — Exterior — "Escada exterior, resistente ao clima"
- `condominio` — Condomínio — "Áreas comuns de edifício ou prédio"

---

### Step 3 — Situação
Three sub-sections:

**A. Urgência (always shown)**
Label: "Quando precisa da instalação?"
Options (3-col grid):
- `urgente` — Urgente — "Preciso o mais rápido possível"
- `1mes` — 1 mês — "Nos próximos 30 dias"
- `3meses` — 2–3 meses — "Ainda a avaliar opções"

**B. Extra field — conditional on product:**

If product = `residencial`:
```
Label: "Quantos pisos tem a casa?"
<select>
  <option value="">Selecionar</option>
  <option value="2">2 pisos</option>
  <option value="3">3 pisos</option>
  <option value="4+">4 ou mais pisos</option>
</select>
```
Required before next.

If product = `plataforma`:
```
Label: "Para uso em"
<select>
  <option value="">Selecionar</option>
  <option value="pessoal">Uso pessoal / familiar</option>
  <option value="condominio">Condomínio / edifício</option>
  <option value="comercial">Espaço comercial ou público</option>
</select>
```
Required before next.

If product = `escadas`: no extra field.

**C. Espaço disponível (always shown)**
Label: "Tem espaço para a instalação?"
Options (3-col grid):
- `sim` — Sim — "Confirmei que há espaço"
- `naosei` — Não sei — "Preciso de avaliação"
- `nao` — Não tenho a certeza — "Tenho dúvidas sobre o espaço"

Step 3 next button disabled until: urgency selected + spaceOk selected + conditional field filled (if applicable).

---

### Step 4 — Contacto

Fields:
- Nome * (text, required, min 2 chars)
- Telefone * (tel, required, min 9 chars)
- Email * (email, required, must contain @)
- Mensagem (textarea, optional, placeholder: "Ex: escada com 14 degraus, moradia de 3 pisos em Lisboa...")

GDPR checkbox (required):
"Li e aceito a [Política de Privacidade](/politica-de-privacidade/). Os meus dados serão usados exclusivamente para envio de propostas."

Next button disabled until all required fields valid AND gdpr checked.

---

### Step 5 — Confirmação (review before submit)

Summary card showing:
- Equipamento
- Tipo (stairType / liftType / platformType translated to label)
- Urgência (translated to label)
- Floors or Usage (if applicable, translated to label)
- Espaço disponível (translated to label)
- Nome
- Email
- Telefone
- Mensagem (if provided)

Two buttons: "Editar" (back to step 4) and "Enviar pedido" (submit).

---

### Submission

On submit:
1. POST to Cloudflare Pages Function at `/api/orcamento`
2. Payload includes all state fields
3. Cloudflare Function sends two emails via Resend:
   - **Confirmation to user** (to `state.email`):
     Subject: "Recebemos o seu pedido — Vida Acessível"
     Body: warm confirmation, summary of request, "nos próximos 1–2 dias úteis receberá propostas de instaladores certificados"
   - **Notification to owner** (to `NOTIFICATION_EMAIL` env var):
     Subject: `Novo pedido de orçamento — ${productLabel} — ${state.nome}`
     Body: full form data as structured list
4. On success: advance to Step 6 (success state)
5. On error: show inline error message "Ocorreu um erro. Por favor tente novamente ou contacte-nos diretamente."

---

### Step 6 — Sucesso

Checkmark icon (green circle).
Title: "Pedido enviado com sucesso!"
Subtitle: "Recebemos o seu pedido. Instaladores certificados vão contactá-lo em breve com até 3 propostas personalizadas e gratuitas."

Next steps box:
```
O que acontece a seguir?
1. Os instaladores analisam o seu pedido
2. Cada um prepara uma proposta personalizada
3. Recebe contacto nos próximos 1–2 dias úteis
4. Compara as propostas e decide sem pressão
```

---

## Progress bar

5 steps shown: Equipamento · Detalhes · Situação · Contacto · Confirmação
- Completed steps: filled green circle with checkmark
- Active step: filled green circle with number
- Future steps: empty circle with number
- Connector lines: grey by default, green when step completed

---

## Design tokens (match repo)

```
Font heading: Plus Jakarta Sans
Font body: DM Sans
Primary colour: #1D6954 (dark green — from site)
Primary hover: #155a46
Selected card border: 2px solid #1D6954
Selected card bg: #f0faf6
Border radius cards: 10px
Border radius form wrapper: 12px
```

---

## Cloudflare Pages Function

File: `functions/api/orcamento.ts`

```ts
import { Resend } from 'resend';

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const resend = new Resend(env.RESEND_API_KEY);
  const body = await request.json();

  // Send confirmation to user
  await resend.emails.send({
    from: 'Vida Acessível <noreply@vidaacessivel.pt>',
    to: body.email,
    subject: 'Recebemos o seu pedido — Vida Acessível',
    html: confirmationEmailHtml(body),
  });

  // Send notification to owner
  await resend.emails.send({
    from: 'Vida Acessível <noreply@vidaacessivel.pt>',
    to: env.NOTIFICATION_EMAIL,
    subject: `Novo pedido — ${body.productLabel} — ${body.nome}`,
    html: notificationEmailHtml(body),
  });

  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
```

Environment variables needed:
- `RESEND_API_KEY`
- `NOTIFICATION_EMAIL`

---

## Usage examples in Astro pages

```astro
// /pedir-orcamento/index.astro — no preselection, full page
<QuoteForm client:load />

// /equipamentos/elevadores-de-escadas/index.astro — product preselected
<QuoteForm client:load preselectedProduct="escadas" />

// /elevadores-de-escadas/escadas-curvas/index.astro — product + variant preselected
<QuoteForm client:load preselectedProduct="escadas" preselectedVariant="curva" />

// Embedded in a section — no card wrapper
<QuoteForm client:load preselectedProduct="residencial" compact={true} />
```
