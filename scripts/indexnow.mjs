#!/usr/bin/env node
/**
 * Push URLs to IndexNow (Bing, Yandex, Naver, Seznam).
 *
 *   node scripts/indexnow.mjs                    → submits every URL in the sitemap
 *   node scripts/indexnow.mjs /blog-ai-agents-real-estate /about
 *   node scripts/indexnow.mjs https://www.designworldstudio.com/contact
 *
 * Run it after `git push` has deployed, so the URLs are actually live.
 */

const HOST = 'www.designworldstudio.com';
const KEY = '0d01ad8079b6b314f29e16fbf0879be6';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ORIGIN = `https://${HOST}`;

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function normalise(arg) {
  if (arg.startsWith('http://') || arg.startsWith('https://')) return arg;
  return ORIGIN + (arg.startsWith('/') ? arg : `/${arg}`);
}

async function main() {
  const args = process.argv.slice(2);
  let urlList = args.length ? args.map(normalise) : await urlsFromSitemap();

  // IndexNow accepts up to 10,000 per request; chunk anyway to stay tidy.
  const CHUNK = 100;
  console.log(`Submitting ${urlList.length} URL(s) to IndexNow…\n`);

  // sanity-check the key file is reachable before submitting
  const keyRes = await fetch(KEY_LOCATION);
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : null;
  if (keyBody !== KEY) {
    console.error(`✗ Key file not verified at ${KEY_LOCATION}`);
    console.error(`  status ${keyRes.status}, body ${JSON.stringify(keyBody)}`);
    console.error('  Deploy first, then re-run.');
    process.exit(1);
  }
  console.log(`✓ Key file verified at ${KEY_LOCATION}\n`);

  for (let i = 0; i < urlList.length; i += CHUNK) {
    const batch = urlList.slice(i, i + CHUNK);
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch,
      }),
    });

    // 200 = accepted, 202 = accepted pending key validation
    const ok = res.status === 200 || res.status === 202;
    console.log(`${ok ? '✓' : '✗'} batch ${i / CHUNK + 1}: ${batch.length} URLs → HTTP ${res.status}`);
    if (!ok) console.log('   ', (await res.text()).slice(0, 300));
  }

  console.log('\nDone. Check Bing Webmaster Tools → IndexNow to confirm receipt.');
}

main().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
