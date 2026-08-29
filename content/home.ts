export const HTML = `
<section id="hero">
  <canvas id="hero-canvas"></canvas>
  <div class="grid-overlay"></div>
  <div class="hero-inner container">
    <span class="badge"><span class="dot-pulse"></span>AI &amp; Software Development Studio</span>
    <h1 class="hero-title">
      <span class="reveal-line"><span>BUILDING THE FUTURE</span></span>
      <span class="reveal-line"><span class="text-gradient">WITH AI &amp; TECHNOLOGY</span></span>
    </h1>
    <p class="hero-sub">We design, develop, automate, and scale intelligent digital products for ambitious businesses.</p>
    <div class="hero-actions">
      <a class="btn btn-primary" data-route="contact" data-cursor><span>Start a Project →</span></a>
      <a class="btn btn-outline" data-route="services" data-cursor><span>Explore Services</span></a>
    </div>
    <div class="hero-trust">
      <div class="hero-trust-badges">
        <span class="hero-trust-badge"><img src="/media/badges/badge-clutch.png" alt="Clutch" loading="lazy"></span>
        <span class="hero-trust-badge"><img src="/media/badges/badge-bbb.png" alt="BBB Accredited Business" loading="lazy"></span>
        <span class="hero-trust-badge"><img src="/media/badges/badge-trustpilot.png" alt="Trustpilot" loading="lazy"></span>
      </div>
    </div>
  </div>
  <div class="scroll-cue"><span>Scroll</span><div class="scroll-line"></div></div>
</section>

<section class="bg-alt">
  <div class="skyline" id="skylineAbout">
    <img class="skyline-img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1600&auto=format&fit=crop" alt="City skyline at night" loading="lazy">
    <div class="skyline-tint"></div>
    <div class="skyline-twinkle" id="skylineAboutTwinkle"></div>
  </div>
  <div class="container about-grid z-content">
    <div class="section-head reveal">
      <span class="kicker">Who We Are</span>
      <h2 class="section-title">A studio where design intuition meets artificial intelligence.</h2>
      <p class="section-sub">We're a hybrid team of engineers, designers, and AI specialists who build products that think, adapt, and act — not just sit on a server waiting for input.</p>
      <a class="section-cta-link" data-route="about" data-cursor>Learn about our studio →</a>
    </div>
    <div class="about-right">
      <p class="about-line reveal">AI that does more than answer.<br><span class="text-gradient-gold">It acts.</span></p>
      <div class="stats">
        <div class="stat reveal count-up"><b data-count="120" data-suffix="+">0</b><small>Products Shipped</small></div>
        <div class="stat reveal count-up"><b data-count="40" data-suffix="+">0</b><small>AI Systems Deployed</small></div>
        <div class="stat reveal count-up"><b data-count="98" data-suffix="%">0</b><small>Client Retention</small></div>
        <div class="stat reveal count-up"><b data-count="15" data-suffix="">0</b><small>Core Service Lines</small></div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">What We Do</span>
      <h2 class="section-title">Fifteen disciplines. One intelligent studio.</h2>
      <p class="section-sub">Every service is built to work together — design, engineering, and AI, under one roof, moving at the same velocity.</p>
    </div>
    <div class="services-grid js-services" data-limit="6"></div>
    <a class="section-cta-link" data-route="services" data-cursor>View all 15 services →</a>
  </div>
</section>

<section class="bg-alt ai-home-section">
  <div class="float-orbs" id="orbsAiSolutions"></div>
  <div class="ai-hero-visual">
    <img class="ai-hero-visual-desktop" src="/media/fa988e120dfb.png" alt="AI-powered dashboard interface built by Design World Studio" loading="lazy">
    <img class="ai-hero-visual-mobile" src="/media/fa988e120dfb.png" alt="AI-powered dashboard interface built by Design World Studio" loading="lazy">
  </div>
  <div class="container z-content">
    <div class="section-head reveal">
      <span class="kicker">AI Solutions</span>
      <h2 class="section-title">AI that does more than answer. It acts.</h2>
      <p class="section-sub">We build production-grade AI systems — not demos. Agents that take action, automations that run your business, and chatbots that actually convert.</p>
    </div>
    <div class="pillars" id="homePillars">
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
    <a class="section-cta-link" data-route="ai-solutions" data-cursor>Explore AI solutions →</a>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">Selected Work</span>
      <h2 class="section-title">Products we've turned into intelligent platforms.</h2>
    </div>
    <div class="portfolio-grid js-portfolio" data-limit="3">
      <a class="project spotlight" data-cursor href="/work-ziptrip" style="--tint:linear-gradient(135deg, rgba(0,150,205,.48), rgba(6,24,66,.6)); cursor:pointer;">
        <img class="project-img" src="/media/96a794cf673e.webp" alt="ZipTrip — AI-Powered Travel App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Travel App</small><h3>ZipTrip</h3><p>AI trip planning across flights, hotels, and cruises</p></div>
      </a>
      <a class="project" data-cursor href="/work-crewiq" style="--tint:linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6)); cursor:pointer;">
        <img class="project-img" src="/media/f0b71b98daf7.webp" alt="CrewIQ — AI-Powered Workforce App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Workforce App</small><h3>CrewIQ</h3><p>AI job matching, verified clock-in, and transparent pay</p></div>
      </a>
      <a class="project" data-cursor href="/work-fovera" style="--tint:linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6)); cursor:pointer;">
        <img class="project-img" src="/media/c579cc61a782.webp" alt="Fovera — AI-Powered Food Compliance App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Food Compliance App</small><h3>Fovera</h3><p>AI-checked allergen data, recipe costing, and label approval in one app</p></div>
      </a>
    </div>
    <a class="section-cta-link" href="/work" data-cursor>View all work →</a>
  </div>
</section>

<section class="wd-showcase home-showcase">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;">
      <span class="kicker">Portfolio</span>
      <h2 class="section-title" style="max-width:820px; margin-inline:auto;">Work we&rsquo;ve designed &amp; built.</h2>
      <p class="section-sub" style="margin-inline:auto; text-align:center;">Websites and iOS apps we&rsquo;ve shipped &mdash; drag the deck, use the arrows, or tap a card.</p>
    </div>
    <div class="home-pf-tabs" role="tablist" aria-label="Portfolio category">
      <button type="button" class="home-pf-tab on" data-pf-tab="web" role="tab" aria-selected="true" data-cursor>Websites</button>
      <button type="button" class="home-pf-tab" data-pf-tab="ios" role="tab" aria-selected="false" data-cursor>iOS Apps</button>
      <button type="button" class="home-pf-tab" data-pf-tab="realestate" role="tab" aria-selected="false" data-cursor>Real Estate Work</button>
    </div>
  </div>
  <div id="homeShowcase"></div>
</section>

<section class="expertise-section">
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">Expertise</span>
      <h2 class="section-title">Expertise across diverse sectors.</h2>
      <p class="section-sub">A decade of shipping AI-native products has given us depth across industries — from regulated enterprises to fast-moving startups. That range shapes how we scope, design, and ship every engagement.</p>
    </div>
    <div class="expertise-grid reveal">
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg></div><span>Real Estate</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg></div><span>Business</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg></div><span>Tech &amp; IT</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-6h6v6"/><path d="M9 9h.01M15 9h.01M12 9h.01"/></svg></div><span>Government</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="9" width="13" height="8"/><path d="M14 12h4l3 3v2h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17.5" cy="19" r="1.6"/></svg></div><span>Logistics</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16l1.6-5.4A2 2 0 0 1 6.5 9h11a2 2 0 0 1 1.9 1.6L21 16"/><rect x="2" y="16" width="20" height="4" rx="1"/><circle cx="7" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg></div><span>Automotive</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 20.5L13 22l1-4.5 6-6a2.1 2.1 0 0 0-3-3l-6 6L6.5 13 2 14.5 3.5 16l3 .5.5 3z"/></svg></div><span>Travel &amp; Tourism</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M8 22h8M12 19v3"/><polygon points="10 10 15 12.5 10 15" fill="currentColor" stroke="none"/></svg></div><span>Entertainment</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 19h20"/><path d="M4 19v-4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4"/><circle cx="8" cy="8" r="2.4"/><path d="M18 11a3 3 0 0 0-3-3"/></svg></div><span>Hospitality</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="17" r="2.4"/><path d="M7.8 8.5L10.5 15.2M16.2 8.5L13.5 15.2M8.4 7h7.2"/></svg></div><span>Social Networking</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9l10-5 10 5-10 5-10-5z"/><path d="M6 11.5V17c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/><path d="M22 9v6"/></svg></div><span>Education</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1.2 11a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg></div><span>eCommerce</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 6.5v11M15 9.2c0-1.2-1.3-2.2-3-2.2s-3 .9-3 2.1c0 1.3 1.2 1.8 3 2.1 1.8.3 3 .9 3 2.2 0 1.2-1.3 2.1-3 2.1s-3-1-3-2.2"/></svg></div><span>Fintech</span></div>
      <div class="expertise-item"><div class="expertise-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7.5-4.6-10-9.3C.5 8 2.3 4.8 5.6 4.2 7.8 3.8 10 5 12 7.5 14 5 16.2 3.8 18.4 4.2c3.3.6 5.1 3.8 3.6 7.5C19.5 16.4 12 21 12 21z"/><path d="M9 12h2l1-2 1.5 3.5L14.5 12H16"/></svg></div><span>Healthcare</span></div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <span class="kicker">Testimonials</span>
    <div class="testi-cine-grid">
      <div class="testi-cine-left reveal">
        <h2 class="testi-huge-title">Reviews</h2>
        <div class="testi-quote-block">
          <div class="testi-quote" id="testiQuote"></div>
          <p class="testi-name" id="testiName"></p>
          <p class="testi-role" id="testiRole"></p>
          <div class="testi-dots" id="testiDots"></div>
          <div class="testi-nav">
            <button type="button" id="testiPrev" aria-label="Previous testimonial" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
            <button type="button" id="testiNext" aria-label="Next testimonial" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </div>
        </div>
      </div>
      <div class="testi-video-card reveal">
        <div class="testi-video-head">
          <h3>Video Feedback from Our Clients</h3>
          <div class="testi-video-nav">
            <button type="button" aria-label="Previous video" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
            <button type="button" aria-label="Next video" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
          </div>
        </div>
        <div class="testi-video-thumb">
          <video controls playsinline preload="metadata" poster="/media/ab52acae1439.jpg">
          <source src="/media/9b4e29c88600.mp4" type="video/mp4">
        </video>
          <div class="testi-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="9 7 9 17 17 12"/></svg></div>
        </div>
        <div class="testi-video-badge"><span>Unscripted client testimonial</span></div>
        <div class="testi-video-watermark">FEEDBACK · FEEDBACK ·</div>
      </div>
    </div>
  </div>
</section>

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What services does Design World Studio offer?", "acceptedAnswer": {"@type": "Answer", "text": "Website design and development, mobile app development (iOS, Android, and cross-platform), custom web and software development, and AI solutions \u2014 AI agents, AI chatbots, and AI automation. Fifteen disciplines under one roof, so you're not stitching together five different vendors."}}, {"@type": "Question", "name": "How much does it cost to build a website, app, or AI system?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on scope \u2014 a marketing site, a full mobile app, and a custom AI agent have very different builds. Tell us what you're building on the contact page and we'll reply within one business day with a realistic range, not a template quote."}}, {"@type": "Question", "name": "How long does a typical project take?", "acceptedAnswer": {"@type": "Answer", "text": "A focused MVP can ship in a matter of weeks. A full website or custom software platform is usually measured in months. We scope a timeline with you before any work starts, so there are no surprise delays."}}, {"@type": "Question", "name": "Do you build AI automation and chatbots, or just websites and apps?", "acceptedAnswer": {"@type": "Answer", "text": "Both. AI is one of our core disciplines, not a bolt-on \u2014 we build production-grade AI agents, AI chatbots, and workflow automation alongside websites, mobile apps, and custom software."}}, {"@type": "Question", "name": "Do you work with early-stage startups, or only established businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Both. We build MVPs for founders who need to move fast and validate an idea, and we build full-scale platforms for established businesses ready to invest in custom software or AI automation."}}, {"@type": "Question", "name": "What happens after my project launches?", "acceptedAnswer": {"@type": "Answer", "text": "We don't disappear at launch. Most engagements continue into ongoing support \u2014 monitoring performance, fixing issues, and shipping improvements as your product and traffic grow."}}]}</script>
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
        <div class="res-faq-item active">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What services does Design World Studio offer?</button>
          <div class="res-faq-a"><p>Website design and development, mobile app development (iOS, Android, and cross-platform), custom web and software development, and AI solutions &mdash; AI agents, AI chatbots, and AI automation. Fifteen disciplines under one roof, so you're not stitching together five different vendors.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>How much does it cost to build a website, app, or AI system?</button>
          <div class="res-faq-a"><p>It depends on scope &mdash; a marketing site, a full mobile app, and a custom AI agent have very different builds. Tell us what you're building on the contact page and we'll reply within one business day with a realistic range, not a template quote.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>How long does a typical project take?</button>
          <div class="res-faq-a"><p>A focused MVP can ship in a matter of weeks. A full website or custom software platform is usually measured in months. We scope a timeline with you before any work starts, so there are no surprise delays.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do you build AI automation and chatbots, or just websites and apps?</button>
          <div class="res-faq-a"><p>Both. AI is one of our core disciplines, not a bolt-on &mdash; we build production-grade AI agents, AI chatbots, and workflow automation alongside websites, mobile apps, and custom software.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do you work with early-stage startups, or only established businesses?</button>
          <div class="res-faq-a"><p>Both. We build MVPs for founders who need to move fast and validate an idea, and we build full-scale platforms for established businesses ready to invest in custom software or AI automation.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What happens after my project launches?</button>
          <div class="res-faq-a"><p>We don't disappear at launch. Most engagements continue into ongoing support &mdash; monitoring performance, fixing issues, and shipping improvements as your product and traffic grow.</p></div>
        </div>
      </div>
    </div>
    <div class="related-row reveal" style="margin-top:64px;">
      <a class="related-pill" data-route="services" data-cursor>View all services →</a><a class="related-pill" data-route="ai-solutions" data-cursor>AI Solutions →</a><a class="related-pill" data-route="case-studies" data-cursor>Case Studies →</a>
    </div>
  </div>
</section>

<section class="final-cta submit-cta"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Turn ideas into intelligent products.</h2><p>Automate. Build. Scale. Let's discuss what an AI-native studio can do for your business.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
