import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

/**
 * Visitor alert endpoint.
 *
 * Fires a Telegram message when someone lands on the site. Geo data comes from
 * Vercel's edge headers, which are populated automatically on all plans.
 *
 * Required env vars (set in Vercel -> Settings -> Environment Variables):
 *   TELEGRAM_BOT_TOKEN  - from @BotFather
 *   TELEGRAM_CHAT_ID    - your personal chat id, from @userinfobot
 *
 * Optional:
 *   VISITOR_ALERT_MODE  - 'all' (every pageview, default) | 'sessions'
 *                         (first pageview of each visit) | 'intent'
 *                         (high-intent pages + returning visitors only)
 */

const HIGH_INTENT_PATHS = [
  '/contact',
  '/real-estate-software',
  '/services',
  '/website-development',
  '/mobile-app-development',
  '/ai-solutions',
  '/ai-agent',
  '/ai-automation',
  '/ai-chatbot',
  '/mvp-development',
  '/software-development',
];

const BOT_UA = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|headless|lighthouse|pingdom|uptime|monitor|curl|wget|python-requests|axios|go-http/i;

function decode(v: string | null): string {
  if (!v) return '';
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function flagFor(cc: string): string {
  if (!/^[A-Za-z]{2}$/.test(cc)) return '';
  return String.fromCodePoint(
    ...cc
      .toUpperCase()
      .split('')
      .map((c) => 0x1f1e6 + c.charCodeAt(0) - 65)
  );
}

function deviceLabel(ua: string): string {
  if (/iphone|ipod/i.test(ua)) return 'iPhone';
  if (/ipad/i.test(ua)) return 'iPad';
  if (/android/i.test(ua)) return /mobile/i.test(ua) ? 'Android phone' : 'Android tablet';
  if (/macintosh|mac os x/i.test(ua)) return 'Mac';
  if (/windows/i.test(ua)) return 'Windows';
  if (/linux/i.test(ua)) return 'Linux';
  return 'Unknown device';
}

function sourceLabel(referrer: string): string {
  if (!referrer) return 'Direct / typed in';
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    if (/google\./.test(host)) return 'Google';
    if (/bing\./.test(host)) return 'Bing';
    if (/duckduckgo\./.test(host)) return 'DuckDuckGo';
    if (/chatgpt\.com|openai\.com/.test(host)) return 'ChatGPT';
    if (/perplexity\./.test(host)) return 'Perplexity';
    if (/claude\.ai|anthropic\./.test(host)) return 'Claude';
    if (/linkedin\./.test(host)) return 'LinkedIn';
    if (/facebook\.|fb\./.test(host)) return 'Facebook';
    if (/instagram\./.test(host)) return 'Instagram';
    if (/t\.co|twitter\.com|x\.com/.test(host)) return 'X / Twitter';
    if (/clutch\.co/.test(host)) return 'Clutch';
    if (/goodfirms\./.test(host)) return 'GoodFirms';
    if (/designrush\./.test(host)) return 'DesignRush';
    return host;
  } catch {
    return 'Direct / typed in';
  }
}

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Silently no-op when unconfigured so the site never shows errors to visitors.
  if (!token || !chatId) {
    return NextResponse.json({ ok: false, reason: 'not_configured' }, { status: 200 });
  }

  // Only accept pings coming from our own pages (localhost allowed for dev).
  const origin = req.headers.get('origin') || '';
  if (origin) {
    let host = '';
    try {
      host = new URL(origin).hostname;
    } catch {
      return NextResponse.json({ ok: false }, { status: 403 });
    }
    const allowed =
      /(^|\.)designworldstudio\.com$/.test(host) ||
      host === 'localhost' ||
      host === '127.0.0.1';
    if (!allowed) {
      return NextResponse.json({ ok: false }, { status: 403 });
    }
  }

  let body: {
    path?: string;
    referrer?: string;
    isNewSession?: boolean;
    isReturning?: boolean;
    pageCount?: number;
    screen?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const ua = req.headers.get('user-agent') || '';
  if (BOT_UA.test(ua)) {
    return NextResponse.json({ ok: true, skipped: 'bot' });
  }

  const path = (body.path || '/').slice(0, 300);
  const referrer = (body.referrer || '').slice(0, 500);
  const isNewSession = Boolean(body.isNewSession);
  const isReturning = Boolean(body.isReturning);
  const pageCount = Number(body.pageCount) || 1;

  const mode = (process.env.VISITOR_ALERT_MODE || 'all').toLowerCase();
  const isHighIntent = HIGH_INTENT_PATHS.some(
    (p) => path === p || path.startsWith(p + '/')
  );

  if (mode === 'sessions' && !isNewSession) {
    return NextResponse.json({ ok: true, skipped: 'mode' });
  }
  if (mode === 'intent' && !isHighIntent && !isReturning) {
    return NextResponse.json({ ok: true, skipped: 'mode' });
  }

  const city = decode(req.headers.get('x-vercel-ip-city'));
  const region = decode(req.headers.get('x-vercel-ip-country-region'));
  const country = (req.headers.get('x-vercel-ip-country') || '').toUpperCase();
  const tz = decode(req.headers.get('x-vercel-ip-timezone'));

  const place = [city, region, country].filter(Boolean).join(', ') || 'Unknown location';
  const flag = flagFor(country);

  let localTime = '';
  if (tz) {
    try {
      localTime = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        hour: 'numeric',
        minute: '2-digit',
      }).format(new Date());
    } catch {
      localTime = '';
    }
  }

  const heading = isHighIntent
    ? '\u{1F525} High-intent visitor'
    : isReturning && isNewSession
      ? '\u{1F501} Returning visitor'
      : isNewSession
        ? '\u{1F7E2} New visitor'
        : '\u{1F441}\u{FE0F} Pageview';

  const lines = [
    `<b>${heading}</b>`,
    '',
    `<b>Page:</b> ${escapeHtml(path)}`,
    `<b>Location:</b> ${flag ? flag + ' ' : ''}${escapeHtml(place)}`,
    `<b>Source:</b> ${escapeHtml(sourceLabel(referrer))}`,
    `<b>Device:</b> ${escapeHtml(deviceLabel(ua))}`,
  ];

  if (localTime) lines.push(`<b>Their local time:</b> ${escapeHtml(localTime)}`);
  if (pageCount > 1) lines.push(`<b>Pages this visit:</b> ${pageCount}`);

  lines.push('', `<a href="https://www.designworldstudio.com${escapeHtml(path)}">Open page</a>`);

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join('\n'),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      console.error('Telegram alert failed:', tgRes.status, await tgRes.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Visitor alert error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
