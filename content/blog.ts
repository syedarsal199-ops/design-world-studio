export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><span>Blog</span></div>
    <span class="kicker">Notes From the Studio</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>Thinking on AI,</span></span>
      <span class="reveal-line"><span class="text-gradient">software, and building well.</span></span>
    </h1>
    <p class="page-sub">Practical perspective on AI-native product development, from the team that ships it — no hype, no filler.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="blog-grid" id="blogGrid">
      <a class="blog-card reveal" href="/blog-real-estate-website-development-2026">
        <div class="blog-meta"><span class="blog-tag">Website Development</span><span class="blog-date">September 2026 · 8 min read</span></div>
        <h3>Real Estate Website Development in 2026: The Complete Guide for US Brokerages</h3>
        <p>Must-have features, realistic costs, common mistakes, and how to choose a development partner &mdash; everything US real estate brokerages need to know before building or redesigning a website in 2026.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-real-estate-mobile-app-2026">
        <div class="blog-meta"><span class="blog-tag">Mobile App Development</span><span class="blog-date">September 2026 · 9 min read</span></div>
        <h3>Real Estate Mobile App Development in 2026: The Complete Guide for US Agencies</h3>
        <p>Must-have features, realistic costs, and how to choose a development partner &mdash; everything US real estate agencies need to know before building a mobile app in 2026.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-ai-chatbot-roi">
        <div class="blog-meta"><span class="blog-tag">AI Automation</span><span class="blog-date">August 2026 · 6 min read</span></div>
        <h3>The Real ROI of AI Chatbots vs. Traditional Support</h3>
        <p>&quot;Replace your support team with AI&quot; is a bad pitch. Here&rsquo;s the honest, narrower version &mdash; and where the real ROI actually comes from.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-ai-native-development">
        <div class="blog-meta"><span class="blog-tag">AI Development</span><span class="blog-date">August 2026 · 6 min read</span></div>
        <h3>Why AI-Native Development Is Beating &quot;AI Bolted On&quot;</h3>
        <p>Most teams are still adding AI as a feature after the fact. The products winning right now were architected around it from day one &mdash; here&rsquo;s what that looks like in practice.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-mvp-to-scale-architecture">
        <div class="blog-meta"><span class="blog-tag">Software Development</span><span class="blog-date">July 2026 · 6 min read</span></div>
        <h3>From MVP to Scale: Architecting Your First Build for Growth</h3>
        <p>The MVP that has to be rewritten at 10,000 users was scoped wrong from the start. A few architectural decisions that cost nothing early and save everything later.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-seo-in-ai-search-era">
        <div class="blog-meta"><span class="blog-tag">SEO</span><span class="blog-date">July 2026 · 5 min read</span></div>
        <h3>SEO in the Age of AI Search: What Actually Still Works</h3>
        <p>AI-generated answers and chat-based search now sit in front of a large share of searches. That changes what SEO should prioritize, not whether SEO still matters.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
      <a class="blog-card reveal" href="/blog-choosing-mobile-app-approach">
        <div class="blog-meta"><span class="blog-tag">Mobile Development</span><span class="blog-date">July 2026 · 6 min read</span></div>
        <h3>Native, Cross-Platform, or AI-Assisted: Choosing Your Mobile Stack</h3>
        <p>There&rsquo;s no universally &quot;best&quot; mobile stack &mdash; only the right choice for a given team, timeline, and feature set. The framework we use when scoping a client&rsquo;s build.</p>
        <span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </a>
    </div>
  </div>
</section>

<section class="final-cta submit-cta"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Have a Project in Mind</span><h2>Let's turn this thinking into your product.</h2><p>Tell us what you're building — we'll show you how we'd approach it.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
