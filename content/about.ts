export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><span>About</span></div>
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
    </div>
    <div class="about-right">
      <p class="about-line reveal">AI that does more than answer.<br><span class="text-gradient-gold">It acts.</span></p>
      <div class="stats">
        <div class="stat reveal"><b>16</b><small>Disciplines In-House</small></div>
        <div class="stat reveal"><b>Senior</b><small>Built, Start to Finish</small></div>
        <div class="stat reveal"><b>iOS + Android</b><small>From One Codebase</small></div>
        <div class="stat reveal"><b>1 Day</b><small>Typical Reply Time</small></div>
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
      <span class="kicker">How We Work</span>
      <h2 class="section-title">Direct access to the people building your product.</h2>
      <p class="section-sub">The single biggest difference between working with us and working with an agency is who you actually talk to.</p>
    </div>
    <div class="article-body reveal" style="max-width:820px;margin:0 auto;">
      <p>At most agencies, the people who win your project are not the people who build it. You are sold by a partner, handed to an account manager, and your product is built by whoever is on the bench that month. Every question you ask travels through two people before it reaches someone who can answer it, and every answer travels back the same way.</p>
      <p>We work the opposite way, and it is deliberate rather than a limitation. The person who scopes your project is the person who builds it. When you ask why a screen behaves a certain way, you are asking the engineer who wrote it. When you want to change direction in week three, that conversation takes one message, not a change-request meeting and a revised statement of work.</p>
      <p>That model only works at a deliberate size, so we take on a small number of engagements at a time. It means we are not the right studio for every project &mdash; but for the ones we take, you get senior attention for the whole build rather than for the pitch.</p>

      <h3>What we are genuinely good at</h3>
      <p>Products where the intelligence is the product, not a feature bolted on afterwards: AI-driven matching and recommendation, systems that qualify and route leads without a human waiting by a phone, and mobile apps where the experience has to feel native rather than like a website in a shell. Our shipped work clusters here for a reason &mdash; ZipTrip matching travel itineraries, CrewIQ matching workers to shifts, Unbroken Investing matching investors to deals. They are different industries running variations of the same hard problem.</p>

      <h3>What we will tell you we are not right for</h3>
      <p>If you need a five-page brochure site, a template will serve you better and cost a fraction of what we would charge &mdash; we will say so rather than take the work. If you need a team of twenty engineers embedded for a year, you need a staffing partner, not a studio. And if your project depends on a technology we have not shipped in production, we will tell you that before you sign rather than learn it on your budget.</p>
      <p>We would rather lose a project at the scoping call than deliver one badly. It is a slower way to grow, and it is the reason the clients we do take on tend to come back for the next build.</p>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal">
      <span class="kicker">What Guides the Work</span>
      <h2 class="section-title">Four things we hold to on every build.</h2>
      <p class="section-sub">Not values on a wall &mdash; the specific commitments that decide how your project actually runs.</p>
    </div>
    <div class="article-body reveal" style="max-width:820px;margin:0 auto;">
      <h3>Scope is fixed before you are billed</h3>
      <p>What you approve at proposal stage is what you pay. Change requests get priced up front and separately, so the number you budgeted is the number you pay unless you consciously decide otherwise. Nobody enjoys the conversation where a project quietly doubles.</p>

      <h3>You see running software every week</h3>
      <p>Progress is demonstrated in a live staging environment you can open on your own phone, not described in a status email. It means problems surface in week two when they are cheap to fix, rather than at handover when they are expensive.</p>

      <h3>We build what will still make sense in two years</h3>
      <p>It is easy to ship something quickly that becomes impossible to change later. We architect for the version of your product that exists after you have learned what your users actually want, because almost every product we have built has needed to change direction at least once.</p>

      <h3>We say the uncomfortable thing early</h3>
      <p>If a feature you are attached to is going to cost more than it will return, if a timeline is not realistic, or if the simpler approach is the better one, you will hear it while there is still time to act on it. A studio that agrees with everything you say is not being easy to work with &mdash; it is being expensive later.</p>
    </div>
  </div>
</section>

<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Talk</span><h2>Come build the future with us.</h2><p>Whether you're a founder, an operator, or leading a product team — we'd like to hear what you're building.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="https://www.instagram.com/designworldstudi0" target="_blank" rel="noopener noreferrer" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="https://web.facebook.com/profile.php?id=61556130037043" target="_blank" rel="noopener noreferrer" aria-label="Facebook" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
