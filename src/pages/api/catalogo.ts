import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nome, email } = data;

    if (!nome || !email) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios em falta' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    const notifyEmail = import.meta.env.NOTIFY_EMAIL || 'info@vidaacessivel.pt';

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: 'Vida Acessível <noreply@vidaacessivel.pt>',
        to: email,
        subject: 'O seu catálogo de soluções de acessibilidade — Vida Acessível',
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
            <h1 style="color: #006E75; font-size: 24px; margin-bottom: 16px;">Olá, ${nome}!</h1>
            <p style="color: #444; line-height: 1.6;">
              Obrigado por pedir o catálogo de soluções de acessibilidade do Vida Acessível.
            </p>
            <p style="color: #444; line-height: 1.6; margin-top: 16px;">
              O nosso catálogo inclui:
            </p>
            <ul style="color: #444; line-height: 1.8; padding-left: 20px;">
              <li>Guia completo de elevadores de escadas</li>
              <li>Modelos e preços de elevadores residenciais</li>
              <li>Plataformas elevatórias: tipos e instalação</li>
              <li>Apoios do Estado disponíveis (SAPA, IVA 6%)</li>
              <li>Checklist de instalação</li>
            </ul>
            <div style="background: #f0f9f9; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <p style="color: #006E75; font-weight: bold; margin: 0 0 8px;">Quer receber orçamentos gratuitos?</p>
              <p style="color: #444; margin: 0; font-size: 14px;">Visite <a href="https://vidaacessivel.pt/pedir-orcamento/" style="color: #006E75;">vidaacessivel.pt/pedir-orcamento/</a> e receba até 3 propostas de instaladores certificados.</p>
            </div>
            <p style="color: #666; font-size: 14px;">Com os melhores cumprimentos,<br>Equipa Vida Acessível</p>
          </div>
        `,
      });

      await resend.emails.send({
        from: 'Vida Acessível <noreply@vidaacessivel.pt>',
        to: notifyEmail,
        subject: `Novo pedido de catálogo: ${nome}`,
        html: `<p>Nome: ${nome}</p><p>Email: <a href="mailto:${email}">${email}</a></p>`,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Erro interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
