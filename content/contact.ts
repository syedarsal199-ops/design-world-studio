export const HTML = `
<section class="page-hero" style="padding-bottom:0;">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><span>Contact</span></div>
    <span class="kicker">Start a Project</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>Tell us what</span></span>
      <span class="reveal-line"><span class="text-gradient">you're building.</span></span>
    </h1>
    <p class="page-sub">Share a few details and our team will reply within one business day with next steps.</p>
  </div>
</section>

<section class="contact-body">
  <div class="container">
    <div class="contact-shell">

      <aside class="contact-aside reveal">
        <div>
          <span class="kicker">Reach Us Directly</span>
          <h2 class="contact-aside-title">Rather talk than type?</h2>
          <p class="contact-aside-sub">We're a small senior team — you'll reach someone who can actually scope your project, not a sales queue.</p>
        </div>

        <div class="contact-lines">
          <a class="contact-line" href="tel:+14753150205" data-cursor>
            <span class="cl-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <span class="cl-body"><label>Phone</label><b>+1 475 315-0205</b><i>Mon&ndash;Fri, 9am&ndash;6pm ET</i></span>
            <span class="cl-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </a>
          <a class="contact-line" href="mailto:Hello@designworldstudio.com" data-cursor>
            <span class="cl-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></span>
            <span class="cl-body"><label>Email</label><b>Hello@designworldstudio.com</b><i>Replies within one business day</i></span>
            <span class="cl-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
          </a>
          <div class="contact-line">
            <span class="cl-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span class="cl-body"><label>Office</label><b>30 Old Kings Highway South #1067</b><i>Darien, CT 06820, United States</i></span>
          </div>
        </div>

        <div class="contact-assure">
          <div><b>&lt; 1 day</b><small>Typical first reply</small></div>
          <div><b>NDA</b><small>Signed on request</small></div>
          <div><b>Free</b><small>Scoping call</small></div>
        </div>

        <div>
          <span class="cs-label">What happens next</span>
          <ul class="next-steps">
            <li><span class="service-num">01</span><span>We review your project and reply within one business day.</span></li>
            <li><span class="service-num">02</span><span>A short discovery call to align on scope, timeline, and budget.</span></li>
            <li><span class="service-num">03</span><span>A proposal &mdash; clear deliverables, no surprise scope creep.</span></li>
          </ul>
        </div>
      </aside>

      <form class="glass reveal contact-form" id="contactForm">
        <div id="formFields">
          <div class="contact-form-head">
            <h3>Tell us about your project</h3>
            <p>The more detail you share, the more useful our first reply will be.</p>
          </div>
          <div class="field-row">
            <div class="field"><input type="text" placeholder="Full name" data-field="name" required></div>
            <div class="field"><input type="email" placeholder="Email address" data-field="email" required></div>
          </div>
          <div class="field" style="margin-top:16px;"><input type="text" placeholder="Company (optional)" data-field="company"></div>
          <div style="margin-top:28px;">
            <span class="field-label">Project Budget</span>
            <div class="budget-row">
              <button type="button" class="budget-pill">&lt; $10k</button>
              <button type="button" class="budget-pill">$10k &ndash; $30k</button>
              <button type="button" class="budget-pill">$30k &ndash; $75k</button>
              <button type="button" class="budget-pill">$75k+</button>
            </div>
          </div>
          <div class="field" style="margin-top:28px;"><textarea rows="5" placeholder="What are you building, and what problem should it solve?" data-field="message" required></textarea></div>
          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:24px;"><span>Send Message &rarr;</span></button>
          <p class="contact-form-note">We'll only use your details to reply about this project.</p>
        </div>
        <div class="thank-you" id="thankYou">
          <div class="check"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12l6 6L20 6" stroke="#4EA83A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          <h3 style="font-family:var(--font-space-grotesk),sans-serif; font-size:20px; font-weight:500;">Message sent</h3>
          <p style="margin-top:8px; font-size:14px; color:rgba(244,242,237,.5);">We'll be in touch within one business day.</p>
        </div>
      </form>

    </div>
  </div>
</section>

<script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "How fast will I hear back after reaching out?", "acceptedAnswer": {"@type": "Answer", "text": "Within one business day, typically faster. You'll get a reply from someone who can actually scope your project \u2014 not an automated sales queue."}}, {"@type": "Question", "name": "What information should I include in my first message?", "acceptedAnswer": {"@type": "Answer", "text": "A short description of what you're building, your rough budget range, and any timeline constraints. The more detail you share, the more useful our first reply will be."}}, {"@type": "Question", "name": "Is the scoping call really free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. The first call is free and there's no obligation \u2014 it's a conversation to understand what you need and tell you honestly whether we're the right fit."}}, {"@type": "Question", "name": "Do you sign NDAs?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, on request, before we discuss any proprietary details of your project."}}, {"@type": "Question", "name": "What if I'm not sure which service I need yet?", "acceptedAnswer": {"@type": "Answer", "text": "That's fine \u2014 tell us the problem you're trying to solve, not the solution you think you need. We'll map it to the right service, or a mix of a few."}}]}</script>
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
        <div class="res-faq-item active">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>How fast will I hear back after reaching out?</button>
          <div class="res-faq-a"><p>Within one business day, typically faster. You'll get a reply from someone who can actually scope your project &mdash; not an automated sales queue.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What information should I include in my first message?</button>
          <div class="res-faq-a"><p>A short description of what you're building, your rough budget range, and any timeline constraints. The more detail you share, the more useful our first reply will be.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Is the scoping call really free?</button>
          <div class="res-faq-a"><p>Yes. The first call is free and there's no obligation &mdash; it's a conversation to understand what you need and tell you honestly whether we're the right fit.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do you sign NDAs?</button>
          <div class="res-faq-a"><p>Yes, on request, before we discuss any proprietary details of your project.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What if I'm not sure which service I need yet?</button>
          <div class="res-faq-a"><p>That's fine &mdash; tell us the problem you're trying to solve, not the solution you think you need. We'll map it to the right service, or a mix of a few.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Prefer to keep it brief?</h2><p>Send the short version &mdash; a few lines about your project is enough for us to come back with next steps.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
