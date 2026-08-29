# Deploying Design World Studio

This is a standard Next.js 14 App Router project. The fastest path to production is Vercel (made by the Next.js team, zero config needed), but any Node host works.

## 1. Push this project to GitHub

```bash
cd nextapp
git init
git add .
git commit -m "Initial commit"
```

Create a new repo on GitHub, then:

```bash
git remote add origin https://github.com/<you>/<repo>.git
git branch -M main
git push -u origin main
```

## 2. Deploy on Vercel

1. Go to vercel.com, sign in, click **Add New → Project**.
2. Import the GitHub repo you just pushed.
3. Framework preset should auto-detect as **Next.js** — leave build settings default.
4. Before clicking Deploy, add one environment variable (needed for the AI chat widget):
   - `ANTHROPIC_API_KEY` = your key from console.anthropic.com/settings/keys
5. Click **Deploy**. Vercel builds and gives you a live `*.vercel.app` URL in a couple of minutes.

## 3. Connect your domain (designworldstudio.com)

In the Vercel project → **Settings → Domains**, add `designworldstudio.com` and `www.designworldstudio.com`. Vercel shows you the exact DNS records to add (an A record or CNAME) at wherever your domain is registered (GoDaddy, Namecheap, Cloudflare, etc.). DNS changes typically take effect within minutes to a few hours.

## 4. Verify after deploy

- Visit the live URL and click through a few pages.
- Open the chat widget (bottom-right bubble) and send a real message — it should get a genuine Claude-generated reply instead of the demo's canned answers. If it errors, double check `ANTHROPIC_API_KEY` is set correctly in Vercel's environment variables and redeploy.
- Check `/sitemap.xml` and `/robots.txt` resolve correctly.
- Submit the sitemap in Google Search Console once the domain is live, so indexing starts.

## Environment variables reference

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes, for the chat widget to give real answers | Server-side only — used by `app/api/chat/route.ts`. Never exposed to the browser. |

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your real key
npm run dev
```

Visit `http://localhost:3000`.

## Notes

- All images live in `public/media/` and are already bundled in this project — nothing external to fetch.
- The favicon and app icon are `public/favicon-32.png` and `public/app-icon-180.png`.
- If you ever want to swap hosts (Netlify, Render, your own server), any platform that runs `next build && next start` works the same way — just carry over the `ANTHROPIC_API_KEY` environment variable.
