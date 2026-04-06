import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nome, email, telefone, equipamento, mensagem } = data;

    if (!nome || !email || !telefone) {
      return new Response(JSON.stringify({ error: 'Campos obrigatórios em falta' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    const notifyEmail = import.meta.env.NOTIFY_EMAIL || 'info@vidaacessivel.pt';

    const equipLabels: Record<string, string> = {
      'elevador-escadas': 'Elevador de Escadas',
      'elevador-residencial': 'Elevador Residencial',
      'plataforma-elevatoria': 'Plataforma Elevatória',
      'nao-sei': 'Não sabe ainda',
    };

    const equipLabel = equipamento ? (equipLabels[equipamento] || equipamento) : 'Não especificado';

    if (apiKey) {
      const { Resend } = await import('resend');
      const resend = new Resend(apiKey);

      // Confirmation to user
      await resend.emails.send({
        from: 'Vida Acessível <noreply@vidaacessivel.pt>',
        to: email,
        subject: 'Pedido de orçamento recebido — Vida Acessível',
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
            <h1 style="color: #006E75; font-size: 24px; margin-bottom: 16px;">Olá, ${nome}!</h1>
            <p style="color: #444; line-height: 1.6;">
              Recebemos o seu pedido de orçamento para <strong>${equipLabel}</strong>.
              Os nossos parceiros instaladores irão contactá-lo em breve com propostas personalizadas.
            </p>
            <p style="color: #444; line-height: 1.6; margin-top: 16px;">
              Pode receber até 3 propostas gratuitas. Compare-as e escolha com toda a tranquilidade — sem qualquer compromisso.
            </p>
            <div style="background: #f0f9f9; border-radius: 12px; padding: 20px; margin: 24px 0;">
              <p style="color: #006E75; font-weight: bold; margin: 0 0 8px;">O que acontece a seguir?</p>
              <ol style="color: #444; padding-left: 20px; margin: 0; line-height: 1.8;">
                <li>Os instaladores analisam o seu pedido</li>
                <li>Recebe propostas personalizadas por email/telefone</li>
                <li>Escolhe a que melhor se adapta</li>
              </ol>
            </div>
            <p style="color: #666; font-size: 14px;">Com os melhores cumprimentos,<br>Equipa Vida Acessível</p>
          </div>
        `,
      });

      // Notification to owner
      await resend.emails.send({
        from: 'Vida Acessível <noreply@vidaacessivel.pt>',
        to: notifyEmail,
        subject: `Novo pedido de orçamento: ${equipLabel} — ${nome}`,
        html: `
          <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
            <h2 style="color: #006E75;">Novo pedido de orçamento</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Nome</td><td style="padding: 8px 0; font-weight: bold;">${nome}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Telefone</td><td style="padding: 8px 0;">${telefone}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Equipamento</td><td style="padding: 8px 0;">${equipLabel}</td></tr>
              ${mensagem ? `<tr><td style="padding: 8px 0; color: #666; font-size: 14px;">Mensagem</td><td style="padding: 8px 0;">${mensagem}</td></tr>` : ''}
            </table>
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
