export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><span>Services</span></div>
    <span class="kicker">What We Do</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>Sixteen disciplines.</span></span>
      <span class="reveal-line"><span class="text-gradient">One intelligent studio.</span></span>
    </h1>
    <p class="page-sub">Every service is built to work together — design, engineering, and AI, under one roof, moving at the same velocity. No handoffs, no outsourced pieces, no diluted craft.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="services-grid js-services"></div>
  </div>
</section>

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Which service is right for my business?", "acceptedAnswer": {"@type": "Answer", "text": "If you're not sure, that's a normal starting point \u2014 tell us the problem you're solving on the contact page and we'll map it to the right service, or blend two or three (for example, a website plus an AI chatbot)."}}, {"@type": "Question", "name": "Can you combine multiple services into one project?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, and it's common. A typical engagement might pair website development with AI automation, or mobile app development with an AI-powered backend. We scope it as one coordinated project, not separate silos."}}, {"@type": "Question", "name": "Do you offer ongoing support after delivery?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every service includes a path to ongoing support \u2014 maintenance, monitoring, and continued feature work after launch, so your product keeps improving instead of going stale."}}, {"@type": "Question", "name": "How do you price a project?", "acceptedAnswer": {"@type": "Answer", "text": "Pricing is scoped per project based on complexity, timeline, and the disciplines involved. Share your budget range on the contact form and we'll tell you honestly what's achievable within it."}}, {"@type": "Question", "name": "Can I start with one service and add more later?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Many clients start with a website or MVP, then add AI automation, a chatbot, or a mobile app once the first phase is live and proving value."}}]}</script>
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
        <div class="res-faq-item active">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Which service is right for my business?</button>
          <div class="res-faq-a"><p>If you're not sure, that's a normal starting point &mdash; tell us the problem you're solving on the contact page and we'll map it to the right service, or blend two or three (for example, a website plus an AI chatbot).</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Can you combine multiple services into one project?</button>
          <div class="res-faq-a"><p>Yes, and it's common. A typical engagement might pair website development with AI automation, or mobile app development with an AI-powered backend. We scope it as one coordinated project, not separate silos.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do you offer ongoing support after delivery?</button>
          <div class="res-faq-a"><p>Yes. Every service includes a path to ongoing support &mdash; maintenance, monitoring, and continued feature work after launch, so your product keeps improving instead of going stale.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>How do you price a project?</button>
          <div class="res-faq-a"><p>Pricing is scoped per project based on complexity, timeline, and the disciplines involved. Share your budget range on the contact form and we'll tell you honestly what's achievable within it.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Can I start with one service and add more later?</button>
          <div class="res-faq-a"><p>Yes. Many clients start with a website or MVP, then add AI automation, a chatbot, or a mobile app once the first phase is live and proving value.</p></div>
        </div>
      </div>
    </div>
    <div class="related-row reveal" style="margin-top:64px;">
      <a href="/ai-solutions" class="related-pill" data-route="ai-solutions" data-cursor>AI Solutions →</a><a href="/work" class="related-pill" data-route="work" data-cursor>See Our Work →</a><a href="/contact" class="related-pill" data-route="contact" data-cursor>Start a Project →</a>
    </div>
  </div>
</section>

<section class="final-cta submit-cta"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Not Sure Where to Start?</span><h2>Tell us the problem. We'll map the right services.</h2><p>Most projects blend two or three of these disciplines. We'll scope exactly what your product needs — nothing more.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
