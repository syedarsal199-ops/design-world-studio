import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: 'Contact form is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment.' },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    company?: string;
    budget?: string;
    service?: string;
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = (body.name || '').trim().slice(0, 200);
  const email = (body.email || '').trim().slice(0, 200);
  const company = (body.company || '').trim().slice(0, 200);
  const budget = (body.budget || '').trim().slice(0, 100);
  const service = (body.service || '').trim().slice(0, 100);
  const message = (body.message || '').trim().slice(0, 5000);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const html = `
    <h2>New project inquiry — Design World Studio</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    ${service ? `<p><strong>Interested in:</strong> ${escapeHtml(service)}</p>` : ''}
    ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Design World Studio <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry from ${name}`,
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error('Resend API error:', resendRes.status, errText);
      return NextResponse.json(
        { error: 'Could not send your message right now. Please try again in a moment.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
