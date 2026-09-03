export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><span>Process</span></div>
    <span class="kicker">Our Process</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>A five-stage system,</span></span>
      <span class="reveal-line"><span class="text-gradient">refined every engagement.</span></span>
    </h1>
    <p class="page-sub">The same discipline, applied to every project — from a two-week MVP sprint to a multi-quarter platform build.</p>
    <div class="pf-stats">
      <div class="pf-stat reveal"><b>8&ndash;16 wks</b><small>Discovery to Launch</small></div>
      <div class="pf-stat reveal"><b>120+</b><small>Products Shipped</small></div>
      <div class="pf-stat reveal"><b>98%</b><small>On-Time Delivery</small></div>
      <div class="pf-stat reveal"><b>30 days</b><small>Post-Launch Support</small></div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container pf-timeline-wrap">
    <div class="pf-timeline-aurora" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="pf-timeline" id="processList"></div>
  </div>
</section>

<section style="padding:96px 0;">
  <div class="container">
    <div class="section-head center reveal">
      <span class="kicker">Why It Works</span>
      <h2 class="section-title">No black box. No junior hand-offs.</h2>
      <p class="section-sub" style="max-width:640px; margin-inline:auto; text-align:center;">The process only matters if it's actually followed. Here's what keeps it honest.</p>
    </div>
    <div class="pf-why-grid">
      <div class="pf-why-card reveal" style="--sv:#4EA83A;">
        <div class="pf-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></svg></div>
        <h3>Senior team, start to finish</h3>
        <p>The people scoping your project are the ones building it — no handoff to a junior bench after the pitch.</p>
      </div>
      <div class="pf-why-card reveal" style="--sv:#4FD1FF;">
        <div class="pf-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/></svg></div>
        <h3>Weekly staging previews</h3>
        <p>You see real, running progress every week in a live staging environment — never a status update standing in for a demo.</p>
      </div>
      <div class="pf-why-card reveal" style="--sv:#D4B26A;">
        <div class="pf-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
        <h3>Fixed scope, fixed price</h3>
        <p>Scope is locked at proposal stage — what you approve is what you're billed, with change requests always priced upfront.</p>
      </div>
      <div class="pf-why-card reveal" style="--sv:#C77DFF;">
        <div class="pf-why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg></div>
        <h3>We stay after launch</h3>
        <p>30 days of support are built into every engagement, and most clients keep us on for the next iteration too.</p>
      </div>
    </div>
  </div>
</section>

<section style="padding:96px 0;">
  <div class="container">
    <div class="section-head center reveal">
      <span class="kicker">Technology Stack</span>
      <h2 class="section-title">Modern tools. Production-grade engineering.</h2>
    </div>
  </div>
  <div class="marquee-wrap">
    <div class="marquee-track" id="marqueeTrack"></div>
  </div>
</section>

<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Ready When You Are</span><h2>Let's map your project onto this process.</h2><p>Most engagements start with a short discovery call — no obligation, just clarity on scope and timeline.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
