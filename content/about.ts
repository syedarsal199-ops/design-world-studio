export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><span>About</span></div>
    <span class="kicker">Who We Are</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>A studio where design intuition</span></span>
      <span class="reveal-line"><span class="text-gradient">meets artificial intelligence.</span></span>
    </h1>
    <p class="page-sub">Design World Studio isn't a traditional dev shop. We're a hybrid team of engineers, designers, and AI specialists who build products that think, adapt, and act.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container about-grid">
    <div class="section-head reveal">
      <span class="kicker">Our Approach</span>
      <h2 class="section-title">Design-led. AI-native. Built to last.</h2>
      <p class="section-sub">We don't bolt AI onto finished products — it's part of the architecture from the first sketch. Every product we ship pairs the craft of a design studio with the rigor of a software house.</p>
      <div class="about-visual reveal" style="margin-top:32px;">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Design World Studio team collaborating together" loading="lazy" decoding="async">
        <span class="about-visual-badge"><b></b>Studio, working session</span>
      </div>
    </div>
    <div class="about-right">
      <p class="about-line reveal">AI that does more than answer.<br><span class="text-gradient-gold">It acts.</span></p>
      <div class="stats">
        <div class="stat reveal"><b>120+</b><small>Products Shipped</small></div>
        <div class="stat reveal"><b>40+</b><small>AI Systems Deployed</small></div>
        <div class="stat reveal"><b>98%</b><small>Client Retention</small></div>
        <div class="stat reveal"><b>15</b><small>Core Service Lines</small></div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">Why Design World Studio</span>
      <h2 class="section-title">Not an outsourcing shop. An intelligence partner.</h2>
      <p class="section-sub">We turn ideas into intelligent products — engineered with the same discipline as the best product teams in the world.</p>
    </div>
    <div class="why-grid" id="whyGrid"></div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">Studio Life</span>
      <h2 class="section-title">Real people, real work, every day.</h2>
      <p class="section-sub">No stock-photo agency shots — this is the studio, mid-project.</p>
    </div>
    <div class="studio-gallery">
      <div class="studio-gallery-item reveal">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="Design World Studio open workspace" loading="lazy" decoding="async">
        <span class="studio-gallery-cap">The studio floor</span>
      </div>
      <div class="studio-gallery-item reveal">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Team reviewing a project on a laptop" loading="lazy" decoding="async">
        <span class="studio-gallery-cap">Weekly review</span>
      </div>
      <div class="studio-gallery-item reveal">
        <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop" alt="Close collaboration between two team members" loading="lazy" decoding="async">
        <span class="studio-gallery-cap">Pairing session</span>
      </div>
    </div>
  </div>
</section>

<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Talk</span><h2>Come build the future with us.</h2><p>Whether you're a founder, an operator, or leading a product team — we'd like to hear what you're building.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
