export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><span>AI Solutions</span></div>
    <span class="kicker">AI Solutions</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>AI that does more</span></span>
      <span class="reveal-line"><span class="text-gradient">than answer. It acts.</span></span>
    </h1>
    <p class="page-sub">We build production-grade AI systems — not demos. Agents that take action, automations that run your business, and chatbots that actually convert.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>AI Agents</h3>
          <p>Autonomous systems that plan, decide, and execute multi-step tasks across your stack — without waiting on a human in the loop.</p>
          <ul>
            <li>Multi-step task planning and execution</li>
            <li>Native integrations with your CRM, inbox, and tools</li>
            <li>Human-in-the-loop approval for high-stakes actions</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">24/7</b><small>Always-on execution</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>AI Chatbots</h3>
          <p>Trained on your product, tone, and data — resolving support and sales conversations with human-level nuance.</p>
          <ul>
            <li>Trained on your docs, FAQs, and product data</li>
            <li>Seamless handoff to a human when needed</li>
            <li>Deployed on your site, app, or WhatsApp/SMS</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">3s</b><small>Avg. response time</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>AI Automation</h3>
          <p>We map your operations and replace manual busywork with intelligent, self-correcting workflows.</p>
          <ul>
            <li>Lead scoring, routing, and follow-up automation</li>
            <li>Document processing and data entry elimination</li>
            <li>Self-correcting workflows with audit trails</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">70%</b><small>Time saved on ops</small></div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container auto-grid">
    <div class="reveal">
      <span class="kicker">AI Automation</span>
      <h2 class="section-title" style="margin-top:20px;">Your busywork, running itself.</h2>
      <p class="section-sub" style="margin-top:24px;">We map the manual steps eating your team's time — lead routing, data entry, follow-ups, approvals — and replace them with intelligent workflows that run in the background, correct their own mistakes, and leave an audit trail behind.</p>
      <ul class="auto-list">
        <li>Lead scoring, routing, and follow-up automation</li>
        <li>Document processing and data entry elimination</li>
        <li>Self-correcting workflows with full audit trails</li>
        <li>Connects natively to your CRM, inbox, and tools</li>
      </ul>
      <a class="btn btn-outline" style="margin-top:40px;" data-route="ai-automation" data-cursor><span>Explore AI Automation →</span></a>
    </div>
    <div class="auto-visual reveal">
      <div class="auto-chip c1"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>Workflow automated</div>
      <div class="auto-chip c2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>Task completed</div>
      <div class="auto-chip c3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>24/7 execution</div>
      <div class="auto-visual-frame">
        <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3Hzmpn2r93VoNWZFaQj55jGcQNB/hf_20260817_222341_acbb5676-5785-42ca-80b1-9a37ced1fc6d.png" alt="AI automation workflow visualization" loading="lazy">
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container re-grid">
    <div class="re-visual reveal">
      <div class="re-grid-inner">
        <div class="re-cell" style="animation-delay:.1s"></div><div class="re-cell" style="animation-delay:.3s"></div><div class="re-cell" style="animation-delay:.5s"></div>
        <div class="re-cell" style="animation-delay:.7s"></div><div class="re-cell" style="animation-delay:.2s"></div><div class="re-cell" style="animation-delay:.6s"></div>
        <div class="re-cell" style="animation-delay:.4s"></div><div class="re-cell" style="animation-delay:.8s"></div><div class="re-cell" style="animation-delay:.9s"></div>
      </div>
    </div>
    <div class="reveal">
      <span class="kicker" style="color:var(--gold);">Real Estate Technology</span>
      <h2 class="section-title" style="margin-top:20px;">Custom software built for the real estate industry.</h2>
      <p class="section-sub" style="margin-top:24px;">From boutique brokerages to large-scale portfolios, we build the systems that manage listings, leads, tenants, and investors — powered by automation and AI underneath.</p>
      <ul class="re-list">
        <li>Custom property &amp; listing management platforms</li>
        <li>AI-powered lead scoring and CRM automation</li>
        <li>Investor &amp; portfolio dashboards</li>
        <li>Tenant, lease, and maintenance workflows</li>
      </ul>
      <a class="btn btn-outline" style="margin-top:40px;" data-route="contact" data-cursor><span>Start a Project →</span></a>
    </div>
  </div>
</section>

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What's the difference between an AI agent, AI automation, and an AI chatbot?", "acceptedAnswer": {"@type": "Answer", "text": "An AI agent plans and executes multi-step tasks autonomously across your tools. AI automation replaces manual, repetitive workflows with self-correcting processes. An AI chatbot handles conversational support and sales. Most businesses end up using a mix of all three."}}, {"@type": "Question", "name": "Is my data safe when we build a custom AI system?", "acceptedAnswer": {"@type": "Answer", "text": "Yes \u2014 we build with human-in-the-loop approval on high-stakes actions, scoped access to your systems, and no training of third-party models on your proprietary data without explicit agreement."}}, {"@type": "Question", "name": "Can AI automation integrate with our existing CRM and tools?", "acceptedAnswer": {"@type": "Answer", "text": "In most cases, yes. We build native integrations with the CRM, inbox, and internal tools you already use, so AI automation fits into your existing stack instead of forcing you to replace it."}}, {"@type": "Question", "name": "How long does it take to build a production AI system?", "acceptedAnswer": {"@type": "Answer", "text": "A focused AI chatbot or single automation can launch in a few weeks. A more complex AI agent with multiple integrations typically takes longer \u2014 we'll give you a realistic timeline after a short scoping call."}}, {"@type": "Question", "name": "Do I need a large dataset to get started with AI?", "acceptedAnswer": {"@type": "Answer", "text": "No. Most of our AI chatbot and automation work is trained on your existing docs, FAQs, and product data \u2014 not a massive proprietary dataset. We'll tell you upfront if your use case genuinely needs more data."}}]}</script>
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
        <div class="res-faq-item active">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What's the difference between an AI agent, AI automation, and an AI chatbot?</button>
          <div class="res-faq-a"><p>An AI agent plans and executes multi-step tasks autonomously across your tools. AI automation replaces manual, repetitive workflows with self-correcting processes. An AI chatbot handles conversational support and sales. Most businesses end up using a mix of all three.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Is my data safe when we build a custom AI system?</button>
          <div class="res-faq-a"><p>Yes &mdash; we build with human-in-the-loop approval on high-stakes actions, scoped access to your systems, and no training of third-party models on your proprietary data without explicit agreement.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Can AI automation integrate with our existing CRM and tools?</button>
          <div class="res-faq-a"><p>In most cases, yes. We build native integrations with the CRM, inbox, and internal tools you already use, so AI automation fits into your existing stack instead of forcing you to replace it.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>How long does it take to build a production AI system?</button>
          <div class="res-faq-a"><p>A focused AI chatbot or single automation can launch in a few weeks. A more complex AI agent with multiple integrations typically takes longer &mdash; we'll give you a realistic timeline after a short scoping call.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do I need a large dataset to get started with AI?</button>
          <div class="res-faq-a"><p>No. Most of our AI chatbot and automation work is trained on your existing docs, FAQs, and product data &mdash; not a massive proprietary dataset. We'll tell you upfront if your use case genuinely needs more data.</p></div>
        </div>
      </div>
    </div>
    <div class="related-row reveal" style="margin-top:64px;">
      <a class="related-pill" data-route="ai-agent" data-cursor>AI Agents →</a><a class="related-pill" data-route="ai-chatbot" data-cursor>AI Chatbots →</a><a class="related-pill" data-route="ai-automation" data-cursor>AI Automation →</a>
    </div>
  </div>
</section>

<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Automate. Build. Scale.</h2><p>Tell us where the manual work is piling up — we'll show you what AI can take off your plate.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
