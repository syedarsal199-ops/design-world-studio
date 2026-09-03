export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><a href="/services" data-route="services">Services</a><span>/</span><span>Smart Chatbot Development</span></div>
    <div class="chatbot-hero-grid">
      <div class="chatbot-hero-copy">
        <span class="kicker">AI Solutions · Smart Chatbots</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Smart Conversations.</span></span>
          <span class="reveal-line"><span class="text-gradient">Built For Your Business.</span></span>
        </h1>
        <p class="page-sub">Design and develop intelligent chatbots that understand your customers, automate conversations, streamline support, and help your business operate smarter.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#chatbotSubmit" data-scroll-to="chatbotSubmit" data-cursor><span>Submit a Project →</span></a>
          <a href="/ai-solutions" class="btn btn-outline" data-route="ai-solutions" data-cursor><span>Explore AI Solutions</span></a>
        </div>
      </div>
      <div class="chatbot-hero-visual reveal">
        <div class="chatbot-glass-panel">
          <div class="chatbot-panel-head"><span class="chatbot-panel-dot"></span><span>Live Conversation</span></div>
          <div class="chatbot-msgs">
            <div class="chatbot-msg user">Do you offer next-day installation?</div>
            <div class="chatbot-msg ai">Yes — for orders placed before 2pm in most regions.<small>Answered from knowledge base</small></div>
            <div class="chatbot-typing"><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="chatbot-intro reveal">
      <span class="kicker">Smart Chatbot Development</span>
      <h2>Conversations That Actually Understand Your Customers</h2>
      <p>We combine thoughtful UX, conversational AI, automation, and business logic to build chatbots that feel like a natural extension of your team — trained on your business, tuned to your voice, and ready to act, not just reply.</p>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="services-grid">
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">01</span><span class="service-arrow">→</span></div>
        <div><h3>AI-Powered Conversations</h3><p>Natural, contextual conversations designed around real customer needs — not rigid decision trees.</p></div>
      </div>
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">02</span><span class="service-arrow">→</span></div>
        <div><h3>Custom Knowledge Bases</h3><p>Trained on your business information, services, products, FAQs, and internal knowledge.</p></div>
      </div>
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">03</span><span class="service-arrow">→</span></div>
        <div><h3>Lead Generation</h3><p>Capture, qualify, and route leads automatically — every conversation becomes a chance to convert.</p></div>
      </div>
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">04</span><span class="service-arrow">→</span></div>
        <div><h3>Customer Support Automation</h3><p>Handle repetitive questions and support requests 24/7, with a seamless handoff when it matters.</p></div>
      </div>
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">05</span><span class="service-arrow">→</span></div>
        <div><h3>Business Process Automation</h3><p>Connect conversations with workflows, forms, CRMs, calendars, and internal systems.</p></div>
      </div>
      <div class="service-card reveal" style="min-height:240px;">
        <div class="service-top"><span class="service-num">06</span><span class="service-arrow">→</span></div>
        <div><h3>Multi-Channel Experiences</h3><p>Chatbot experiences designed across websites, messaging platforms, and other digital touchpoints.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="chatbot-showcase">
  <div class="container">
    <div class="chatbot-showcase-head reveal">
      <span class="kicker">Inside a Conversation</span>
      <h2>From Question to Resolution — Without a Single Dead End</h2>
    </div>
    <div class="chatbot-transcript reveal">
      <div class="chatbot-step is-user">
        <span class="chatbot-step-num">01</span>
        <div><span class="chatbot-step-label">Customer</span><div class="chatbot-step-body">Asks a real question, in their own words — no menus to navigate.</div></div>
      </div>
      <div class="chatbot-step">
        <span class="chatbot-step-num">02</span>
        <div><span class="chatbot-step-label">Understanding Intent</span><div class="chatbot-step-body">The AI parses what they actually need, not just the keywords they used.</div></div>
      </div>
      <div class="chatbot-step">
        <span class="chatbot-step-num">03</span>
        <div><span class="chatbot-step-label">Retrieving Knowledge</span><div class="chatbot-step-body">It pulls the right answer from your trained knowledge base — your docs, your policies, your catalog.</div></div>
      </div>
      <div class="chatbot-step">
        <span class="chatbot-step-num">04</span>
        <div><span class="chatbot-step-label">Recommending</span><div class="chatbot-step-body">It suggests the right next step — a plan, a product, a service — based on the conversation so far.</div></div>
      </div>
      <div class="chatbot-step">
        <span class="chatbot-step-num">05</span>
        <div><span class="chatbot-step-label">Capturing the Lead</span><div class="chatbot-step-body">Interested? It collects the details your team needs, cleanly, without a clunky form.</div></div>
      </div>
      <div class="chatbot-step">
        <span class="chatbot-step-num">06</span>
        <div><span class="chatbot-step-label">Human Handoff</span><div class="chatbot-step-body">If it's outside its confidence, it escalates instantly — full context, no repeated questions.</div></div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">Our Process</span>
      <h2 class="section-title">From First Conversation To Full Automation</h2>
    </div>
    <div class="chatbot-process-list">
      <div class="process-row reveal"><span class="service-num">01</span><h3>Discover</h3><p>Understand the business, audience, goals, and use cases.</p></div>
      <div class="process-row reveal"><span class="service-num">02</span><h3>Design</h3><p>Map conversations, user journeys, knowledge, and tone of voice.</p></div>
      <div class="process-row reveal"><span class="service-num">03</span><h3>Develop</h3><p>Build, train, integrate, and refine the chatbot.</p></div>
      <div class="process-row reveal"><span class="service-num">04</span><h3>Launch &amp; Optimise</h3><p>Monitor performance, improve conversations, and continuously optimise results.</p></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="chatbot-impact">
      <div class="chatbot-impact-left reveal">
        <span class="kicker">Why Smart Chatbots</span>
        <h2>Smarter Conversations. Measurable Impact.</h2>
        <p>A well-built chatbot isn't a cost-cutting gimmick — it's a always-on member of your team that never sleeps, never repeats itself, and gets sharper with every conversation. The result shows up in response time, lead quality, and how much of your team's day is freed up for work that actually needs a human.</p>
        <div class="chatbot-impact-stats">
          <div class="stat reveal count-up"><b data-count="24" data-suffix="/7">0</b><small>Availability</small></div>
          <div class="stat reveal count-up"><b data-count="3" data-suffix="s">0</b><small>Avg. response</small></div>
          <div class="stat reveal count-up"><b data-count="65" data-suffix="%">0</b><small>Ticket deflection</small></div>
        </div>
      </div>
      <div class="chatbot-impact-list">
        <div class="chatbot-impact-item reveal"><span class="service-num">01</span><div><h4>24/7 Availability</h4><p>Every conversation answered, day or night, weekends included.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">02</span><div><h4>Faster Response Times</h4><p>Instant first replies instead of a queue and a wait.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">03</span><div><h4>Better Customer Experiences</h4><p>Consistent, on-brand answers every time, on every channel.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">04</span><div><h4>More Qualified Leads</h4><p>Conversations that ask the right questions and route what matters.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">05</span><div><h4>Reduced Repetitive Workload</h4><p>Your team spends less time on the same handful of questions.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">06</span><div><h4>Scalable Support</h4><p>Handles a traffic spike the same way it handles a quiet Tuesday.</p></div></div>
        <div class="chatbot-impact-item reveal"><span class="service-num">07</span><div><h4>Smarter Business Workflows</h4><p>Conversations that trigger real actions across your systems, not just replies.</p></div></div>
      </div>
    </div>
    <div class="related-row reveal" style="margin-top:64px;">
      <a href="/ai-automation" class="related-pill" data-route="ai-automation" data-cursor>AI Automation →</a>
      <a href="/ai-agent" class="related-pill" data-route="ai-agent" data-cursor>AI Agent →</a>
      <a href="/services" class="related-pill" data-route="services" data-cursor>View all services →</a>
    </div>
  </div>
</section>

<section id="chatbotSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready To Build A Smarter Conversation?</h2><p>Tell us what you want your chatbot to achieve, and we'll help turn the idea into an intelligent digital experience.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Submit a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
