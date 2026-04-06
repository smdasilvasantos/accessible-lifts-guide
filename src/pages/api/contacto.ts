import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nome, email, assunto, mensagem } = data;

    if (!nome || !email || !mensagem) {
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
        to: notifyEmail,
        subject: `Mensagem de contacto: ${assunto || 'Sem assunto'} — ${nome}`,
        html: `
          <p>Nome: ${nome}</p>
          <p>Email: <a href="mailto:${email}">${email}</a></p>
          ${assunto ? `<p>Assunto: ${assunto}</p>` : ''}
          <p>Mensagem: ${mensagem}</p>
        `,
      });

      await resend.emails.send({
        from: 'Vida Acessível <noreply@vidaacessivel.pt>',
        to: email,
        subject: 'Mensagem recebida — Vida Acessível',
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
            <h2 style="color: #006E75;">Olá, ${nome}!</h2>
            <p style="color: #444;">Recebemos a sua mensagem e responderemos em breve.</p>
            <p style="color: #666; font-size: 14px;">Equipa Vida Acessível</p>
          </div>
        `,
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
