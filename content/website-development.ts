export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="services">Services</a><span>/</span><span>Website Development</span></div>
    <div class="res-hero-grid">
      <div class="res-hero-copy">
        <span class="kicker">Website Development</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Websites built to</span></span>
          <span class="reveal-line"><span class="text-gradient">convert, not just impress.</span></span>
        </h1>
        <p class="page-sub">Cinematic, high-performance websites engineered on modern frameworks &mdash; fast, accessible, and built to turn visitors into customers rather than page views.</p>
        <div class="ap-feat-row">
          <div class="ap-feat" style="animation-delay:.85s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg></span><h4>Blazing-Fast Performance</h4><p>Sub-second loads, Core Web Vitals optimized.</p></div>
          <div class="ap-feat" style="animation-delay:.95s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 9h18M3 15h18M9 3c-2.4 2.6-3.6 5.8-3.6 9s1.2 6.4 3.6 9M15 3c2.4 2.6 3.6 5.8 3.6 9s-1.2 6.4-3.6 9"/></svg></span><h4>Pixel-Perfect Design</h4><p>Custom design systems, never a template.</p></div>
          <div class="ap-feat" style="animation-delay:1.05s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/><polyline points="8 12 10 9 13 13 15 8"/></svg></span><h4>SEO Built In</h4><p>Technical &amp; content SEO from day one.</p></div>
          <div class="ap-feat" style="animation-delay:1.15s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="14" height="11" rx="2"/><rect x="17" y="8" width="5" height="12" rx="1.2"/></svg></span><h4>Fully Responsive</h4><p>Flawless on every device and browser.</p></div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#webSubmit" data-scroll-to="webSubmit" data-cursor><span>Start a Project &rarr;</span></a>
          <a class="btn btn-outline" href="#wdWork" data-scroll-to="wdWork" data-cursor><span>See Our Work</span></a>
        </div>
        <div class="res-hero-trust">
          <div class="res-trust-dots"><span>AR</span><span>LN</span><span>TK</span><span>+</span></div>
          <p>60+ websites shipped for startups, agencies, and established brands.</p>
        </div>
        <div class="ap-compat-bar">
          <span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="14" rx="2"/><line x1="8" y1="22" x2="16" y2="22"/><line x1="12" y1="18" x2="12" y2="22"/></svg>Desktop</span>
          <span class="ap-compat-div"></span>
          <span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="10" y1="19" x2="14" y2="19"/></svg>Tablet</span>
          <span class="ap-compat-div"></span>
          <span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="10" y1="19" x2="14" y2="19"/></svg>Mobile</span>
          <span class="ap-compat-div"></span>
          <span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 15s1.2 1.5 3 1.5 3-1.5 3-1.5M9.5 10h.01M14.5 10h.01"/></svg>WCAG 2.2 AA</span>
        </div>
      </div>

      <div class="res-rig-wrap" data-res-rig>
        <div class="res-chip c1"><span class="dot"></span>Lighthouse 100 / 100</div>
        <div class="res-chip c2"><span class="dot"></span>LCP 0.9s</div>
        <div class="res-chip c3"><span class="dot"></span>3.2&times; conversion lift</div>
        <div class="res-rig">
          <div class="res-monitor">
            <div class="res-screen">
              <img class="res-screen-img" src="/media/8e5e84f83d4d.webp" alt="" aria-hidden="true">
              <div class="res-screen-scan"></div>
              <div class="res-screen-ui">
                <div class="res-topbar">
                  <span class="res-brandmark">STUDIO&nbsp;/&nbsp;WEB</span>
                  <span class="res-navdots"><i></i><i></i><i></i></span>
                </div>
                <div class="res-searchbar">Design systems, motion, and conversion<b>Explore</b></div>
                <div class="res-cardrow">
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>100</b><i></i><i></i></div></div>
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>0.9s</b><i></i><i></i></div></div>
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>3.2&times;</b><i></i><i></i></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="res-phone">
            <div class="res-phone-screen">
              <img src="/media/8e5e84f83d4d.webp" alt="" aria-hidden="true">
              <span class="res-phone-notch"></span>
              <div class="res-phone-ui">
                <span class="res-phone-pill">Responsive</span>
                <span class="res-phone-pill">WCAG 2.2 AA</span>
                <div class="res-phone-stat"><b>98</b><small>Mobile score</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>Design &amp; UX</h3>
          <p>Pixel-level design systems built for clarity, trust, and conversion — backed by real user research, not guesswork.</p>
          <ul>
            <li>Custom design systems, not templates</li>
            <li>Conversion-focused UX and information architecture</li>
            <li>Motion and micro-interactions that feel premium</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">3.2x</b><small>Avg. conversion lift</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Engineering</h3>
          <p>Built on modern frameworks like React and Next.js, with performance, accessibility, and SEO baked in from day one.</p>
          <ul>
            <li>React / Next.js, headless CMS-ready</li>
            <li>Core Web Vitals and Lighthouse-optimized</li>
            <li>Semantic markup and accessible by default</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">&lt;1s</b><small>Avg. load time</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>CMS &amp; Content</h3>
          <p>Flexible content systems your team can actually manage — no developer required for every headline or image swap.</p>
          <ul>
            <li>Client-editable pages and components</li>
            <li>Structured content for reuse across channels</li>
            <li>Built-in analytics and A/B testing hooks</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">100%</b><small>Client-editable</small></div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="wd-mosaic" data-depth="0.6">
      <div class="stat reveal count-up"><b data-count="180" data-suffix="+">0</b><small>Websites Shipped</small></div>
      <div class="stat reveal count-up"><b data-count="98" data-suffix="">0</b><small>Avg. Lighthouse Score</small></div>
      <div class="stat reveal"><b>3.2x</b><small>Avg. Conversion Lift</small></div>
      <div class="stat reveal"><b>&lt;1s</b><small>Avg. Load Time</small></div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="wd-banner reveal" data-depth="1.4">
      <span class="kicker">Let's Talk</span>
      <h2>Looking for a website that actually performs, not just looks nice in a mockup?</h2>
      <a class="btn btn-primary" data-route="contact" data-cursor><span>Book a Free Consultation →</span></a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1">
      <span class="kicker">What We Build</span>
      <h2 class="section-title">What Type of Web Solution Can We Build For You?</h2>
      <p class="section-sub">Six ways to ship — pick the shape that fits your product, or let us scope the right mix for you.</p>
    </div>
    <div class="wd-type-grid" data-depth="0.5">
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.8 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.8-3.8-9s1.3-6.4 3.8-9Z"/></svg></div>
        <h3>Custom Website Development</h3>
        <p>Responsive websites that showcase your brand and work smoothly on any device, with SEO baked in.</p>
        <div class="wd-type-tags"><span>Responsive Design</span><span>SEO Optimized</span><span>User-Friendly</span></div>
      </div>
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/></svg></div>
        <h3>Web Application Development</h3>
        <p>Dynamic web apps with interactive frontends and scalable backends — real-time features, built to solve real problems.</p>
        <div class="wd-type-tags"><span>Dynamic</span><span>Scalable Backend</span><span>Interactive UI</span></div>
      </div>
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg></div>
        <h3>E-Commerce Solutions</h3>
        <p>Secure, user-friendly storefronts with product listings, payment integrations, and inventory management built in.</p>
        <div class="wd-type-tags"><span>Secure Payments</span><span>Custom Stores</span><span>Inventory</span></div>
      </div>
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 3 21 8 12 13 3 8 12 3"/><polyline points="3 13 12 18 21 13"/><polyline points="3 17.5 12 22.5 21 17.5"/></svg></div>
        <h3>Content Management Systems</h3>
        <p>CMS solutions that let your team manage content without touching code — custom modules, secure by default.</p>
        <div class="wd-type-tags"><span>Easy Editing</span><span>Custom Modules</span><span>Secure</span></div>
      </div>
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg></div>
        <h3>Web Portal Development</h3>
        <p>Scalable, secure portals for customers, partners, or employees, with personalized dashboards and backend integration.</p>
        <div class="wd-type-tags"><span>Personalized</span><span>Secure Access</span><span>Integrated</span></div>
      </div>
      <div class="wd-type-card">
        <div class="wd-type-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2M9 6h6"/></svg></div>
        <h3>Progressive Web Apps</h3>
        <p>App-like experiences that work offline, load instantly, and install on any device — the web and mobile, blended.</p>
        <div class="wd-type-tags"><span>Offline-Ready</span><span>App-Like</span><span>Fast Loading</span></div>
      </div>
    </div>
  </div>
</section>

<section class="wd-showcase">
  <div class="container">
    <div class="section-head reveal" data-depth="1.2" style="text-align:center; align-items:center;">
      <span class="kicker">Selected Work</span>
      <h2 class="section-title" style="max-width:820px; margin-inline:auto;">Websites We've Designed &amp; Built</h2>
      <p class="section-sub" style="margin-inline:auto; text-align:center;">Drag the deck, use the arrows, or tap a card to bring it forward — a slice of the work we've shipped across industries.</p>
    </div>
  </div>

  <div class="pf3d" data-pf data-pf-start="2">
    <div class="pf3d-floor"></div>
    <div class="pf3d-stage">
      <div class="pf3d-track">

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>urbannest.studio</i></div>
            <div class="pf3d-shot"><img src="/media/115480974279.jpg" alt="Urban Nest real estate website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Real Estate</span>
            <h3>Urban Nest</h3>
            <p>An editorial property showcase with oversized type, cinematic imagery, and a listings experience built to convert enquiries.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>fellows.club</i></div>
            <div class="pf3d-shot"><img src="/media/bd63fa972d19.jpg" alt="Fellows private investor club website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Fintech</span>
            <h3>Fellows</h3>
            <p>A members-only investor club site — gated onboarding, live portfolio stats, and a landing page that sells belonging.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>visatravels.com</i></div>
            <div class="pf3d-shot"><img src="/media/67242a9d5f09.jpg" alt="Visa Travels booking website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Travel &amp; Booking</span>
            <h3>Visa Travels</h3>
            <p>A multi-filter trip discovery and booking platform with live availability, itinerary building, and payment integration.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>aeline.org</i></div>
            <div class="pf3d-shot"><img src="/media/d9dc2b248c40.jpg" alt="Aeline environmental nonprofit website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Non-Profit</span>
            <h3>Aeline</h3>
            <p>An impact-led campaign site with donation flows, volunteer sign-up, and a CMS the comms team runs entirely themselves.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>safari.explorer.app</i></div>
            <div class="pf3d-shot"><img src="/media/812ac3d0d8c9.jpg" alt="Safari explorer travel web app" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Web App</span>
            <h3>Safari Explorer</h3>
            <p>A 3D-mapped trip planner web app — interactive routes, live conditions, and saved itineraries in a single dashboard.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>zenze.agri</i></div>
            <div class="pf3d-shot"><img src="/media/542812ccf82c.jpg" alt="Zenze agritech platform website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">AgriTech</span>
            <h3>Zenze</h3>
            <p>A data platform for farms — IoT sensor dashboards, yield prediction, and field health, in a marketing site that explains it clearly.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>bauvorhaben.de</i></div>
            <div class="pf3d-shot"><img src="/media/2ea2796a659f.jpg" alt="Bauvorhaben architecture and construction website" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Architecture</span>
            <h3>Bauvorhaben</h3>
            <p>A design-and-build studio site with a full project catalogue, staged enquiry flow, and a gallery that does the selling.</p>
          </div>
        </article>

      </div>
    </div>

    <div class="pf3d-ui">
      <button type="button" class="pf3d-nav" data-pf-prev aria-label="Previous project" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
      <div class="pf3d-dots"></div>
      <button type="button" class="pf3d-nav" data-pf-next aria-label="Next project" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>
    <p class="pf3d-hint">Drag &nbsp;·&nbsp; Click a card &nbsp;·&nbsp; ← →</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1">
      <span class="kicker">Our Stack</span>
      <h2 class="section-title">Technologies We Use</h2>
    </div>
    <div class="wd-tech">
      <div class="wd-tech-tabs">
        <button type="button" class="wd-tech-tab active" data-tab="frontend">Frontend</button>
        <button type="button" class="wd-tech-tab" data-tab="backend">Backend</button>
        <button type="button" class="wd-tech-tab" data-tab="databases">Databases</button>
        <button type="button" class="wd-tech-tab" data-tab="cloud">Cloud &amp; Hosting</button>
        <button type="button" class="wd-tech-tab" data-tab="cms">CMS Platforms</button>
        <button type="button" class="wd-tech-tab" data-tab="devops">DevOps</button>
      </div>
      <div class="wd-tech-panel active" data-panel="frontend">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>React</span>
          <span class="wd-tech-badge"><span class="dot"></span>Next.js</span>
          <span class="wd-tech-badge"><span class="dot"></span>Vue.js</span>
          <span class="wd-tech-badge"><span class="dot"></span>TypeScript</span>
          <span class="wd-tech-badge"><span class="dot"></span>Tailwind CSS</span>
          <span class="wd-tech-badge"><span class="dot"></span>Framer Motion</span>
        </div>
      </div>
      <div class="wd-tech-panel" data-panel="backend">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>Node.js</span>
          <span class="wd-tech-badge"><span class="dot"></span>PHP / Laravel</span>
          <span class="wd-tech-badge"><span class="dot"></span>.NET Core</span>
          <span class="wd-tech-badge"><span class="dot"></span>Python / Django</span>
          <span class="wd-tech-badge"><span class="dot"></span>Ruby on Rails</span>
        </div>
      </div>
      <div class="wd-tech-panel" data-panel="databases">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>PostgreSQL</span>
          <span class="wd-tech-badge"><span class="dot"></span>MySQL</span>
          <span class="wd-tech-badge"><span class="dot"></span>MongoDB</span>
          <span class="wd-tech-badge"><span class="dot"></span>Redis</span>
        </div>
      </div>
      <div class="wd-tech-panel" data-panel="cloud">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>AWS</span>
          <span class="wd-tech-badge"><span class="dot"></span>Google Cloud</span>
          <span class="wd-tech-badge"><span class="dot"></span>Vercel</span>
          <span class="wd-tech-badge"><span class="dot"></span>Cloudflare</span>
          <span class="wd-tech-badge"><span class="dot"></span>Firebase</span>
        </div>
      </div>
      <div class="wd-tech-panel" data-panel="cms">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>WordPress</span>
          <span class="wd-tech-badge"><span class="dot"></span>Shopify</span>
          <span class="wd-tech-badge"><span class="dot"></span>Sanity</span>
          <span class="wd-tech-badge"><span class="dot"></span>Webflow</span>
        </div>
      </div>
      <div class="wd-tech-panel" data-panel="devops">
        <div class="wd-tech-badges">
          <span class="wd-tech-badge"><span class="dot"></span>Docker</span>
          <span class="wd-tech-badge"><span class="dot"></span>GitHub Actions</span>
          <span class="wd-tech-badge"><span class="dot"></span>Playwright</span>
          <span class="wd-tech-badge"><span class="dot"></span>Sentry</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1">
      <span class="kicker">Our Process</span>
      <h2 class="section-title">From First Conversation to Long-Term Partner</h2>
    </div>
    <div class="wd-process">
      <div class="wd-process-visual reveal" data-depth="1.3">
        <div class="grid-overlay"></div>
        <div class="wd-orbit">
          <div class="wd-orbit-ring"></div>
          <div class="wd-orbit-ring"></div>
          <div class="wd-orbit-ring"></div>
          <div class="wd-orbit-core"></div>
          <div class="wd-orbit-node" style="top:2%; left:50%;"></div>
          <div class="wd-orbit-node" style="top:50%; left:98%;"></div>
          <div class="wd-orbit-node" style="top:85%; left:18%;"></div>
        </div>
      </div>
      <div class="wd-process-list">
        <div class="wd-process-item active">
          <button type="button" class="wd-process-head"><span>Consultation</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>We start by understanding your business, audience, and goals — no generic questionnaires.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Planning</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Scope, sitemap, and technical architecture, mapped out before a single pixel is designed.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Design</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Custom design systems built for your brand — never a reskinned template.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Development</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Built on modern frameworks with performance, accessibility, and SEO from day one.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Testing</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Cross-device QA, performance audits, and accessibility checks before anything ships.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Deployment</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Smooth, zero-downtime launches with monitoring in place from minute one.</p></div>
        </div>
        <div class="wd-process-item">
          <button type="button" class="wd-process-head"><span>Maintenance</span><span class="wd-process-toggle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span></button>
          <div class="wd-process-body"><p>Ongoing updates, monitoring, and support — we don't disappear after launch.</p></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1">
      <span class="kicker">Industries We Serve</span>
      <h2 class="section-title">Built for the Realities of Your Industry</h2>
    </div>
    <div class="wd-industries" data-depth="0.7">
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 3l9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg><span>Real Estate</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0 5.2-8.8 10.6-8.8 10.6S3.2 13.8 3.2 8.6a4.6 4.6 0 0 1 8.8-1.9 4.6 4.6 0 0 1 8.8 1.9Z"/></svg><span>Healthcare</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 15s1.2 1.5 3 1.5 3-1.5 3-1.5M9.5 10h.01M14.5 10h.01"/></svg><span>Hospitality</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><span>Fintech</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg><span>E-Commerce</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12.5V18c0 1.1 2.7 2 6 2s6-.9 6-2v-5.5"/></svg><span>Education</span></div>
      <div class="wd-industry reveal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg><span>SaaS &amp; Tech</span></div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="wd-why-split">
      <div class="wd-why-media reveal" data-depth="1.5">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop" alt="Developer working on a website build" loading="lazy">
      </div>
      <div class="wd-why-list">
        <span class="kicker">Why Choose Us</span>
        <h2 class="section-title" style="margin-top:16px; font-size:clamp(1.8rem,3.4vw,2.6rem);">Why Choose Design World Studio for Web Development?</h2>
        <p class="section-sub" style="margin-top:16px;">We're not a template shop. Every build is custom-designed, engineered for performance, and handed off in a way your team can actually maintain.</p>
        <div style="margin-top:36px;">
          <div class="wd-why-row reveal">
            <div class="wd-why-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></div>
            <div><h4>Custom Design Systems</h4><p>Web solutions that align with your unique business goals and audience — never a reskinned template.</p></div>
          </div>
          <div class="wd-why-row reveal">
            <div class="wd-why-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"/></svg></div>
            <div><h4>Performance &amp; SEO Baked In</h4><p>Core Web Vitals and Lighthouse-optimized from the first commit, not bolted on after launch.</p></div>
          </div>
          <div class="wd-why-row reveal">
            <div class="wd-why-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
            <div><h4>Client-Editable Content</h4><p>Structured content and CMS access so your team can update pages without touching code.</p></div>
          </div>
          <div class="wd-why-row reveal">
            <div class="wd-why-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.5 8.5 0 0 1-3.8-1L3 20l1.2-5.1A8.4 8.4 0 1 1 21 11.5Z"/></svg></div>
            <div><h4>Transparent Communication</h4><p>Open collaboration at every stage — you always know exactly where the project stands.</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="related-row reveal">
      <a class="related-pill" data-route="mobile-app-development" data-cursor>Mobile App Development →</a>
      <a class="related-pill" data-route="web-app-development" data-cursor>Web App Development →</a>
      <a class="related-pill" data-route="services" data-cursor>View all services →</a>
    </div>
  </div>
</section>

<section id="webSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready for a website that works as hard as you do?</h2><p>Tell us about your business — we'll show you exactly how we'd design, build, and launch it.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
