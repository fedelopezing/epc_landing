export const prerender = false;

import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST = async ({ request }: { request: Request }) => {
  try {
    const body = await request.json();
    const { to, subject, html, from } = body;

    const data = await resend.emails.send({
      from,
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    return new Response(JSON.stringify({ error: 'Error al enviar correo' }), {
      status: 500,
    });
  }
};
