export const HTML = `

<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="services">Services</a><span>/</span><span>Real Estate Software</span></div>
    <div class="res-hero-grid">
      <div class="res-hero-copy">
        <span class="kicker">Real Estate · Custom Software</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Software as strong as</span></span>
          <span class="reveal-line"><span class="text-gradient">the portfolio you've built.</span></span>
        </h1>
        <p class="page-sub">We build the listing platforms, IDX search, CRMs, and portfolio dashboards that real estate actually runs on — engineered around your workflow, not a template's.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#resSubmit" data-scroll-to="resSubmit" data-cursor><span>Submit a Project →</span></a>
          <a class="btn btn-outline" href="#resWork" data-scroll-to="resWork" data-cursor><span>See It In Action</span></a>
        </div>
        <div class="res-hero-trust">
          <div class="res-trust-dots"><span>JM</span><span>KU</span><span>MG</span><span>+</span></div>
          <p>15+ real estate platforms shipped for brokerages, developers, and portfolio owners.</p>
        </div>
      </div>

      <div class="res-rig-wrap" data-res-rig>
        <div class="res-chip c1"><span class="dot"></span>MLS synced · 4m ago</div>
        <div class="res-chip c2"><span class="dot"></span>New lead scored 94</div>
        <div class="res-chip c3"><span class="dot"></span>1,284 active listings</div>
        <div class="res-rig">
          <div class="res-monitor">
            <div class="res-screen">
              <img class="res-screen-img" src="/media/fe190af4e749.jpg" alt="" aria-hidden="true">
              <div class="res-screen-scan"></div>
              <div class="res-screen-ui">
                <div class="res-topbar">
                  <span class="res-brandmark">PORTFOLIO OS</span>
                  <span class="res-navdots"><i></i><i></i><i></i></span>
                </div>
                <div class="res-searchbar">Search by address, city, or MLS ID<b>Search</b></div>
                <div class="res-cardrow">
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>$2.8M</b><i></i><i></i></div></div>
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>$3.6M</b><i></i><i></i></div></div>
                  <div class="res-lcard"><div class="res-lcard-img"></div><div class="res-lcard-body"><b>$4.5M</b><i></i><i></i></div></div>
                </div>
              </div>
            </div>
          </div>
          <div class="res-phone">
            <div class="res-phone-screen">
              <img src="/media/fc6f0238c998.jpg" alt="" aria-hidden="true">
              <span class="res-phone-notch"></span>
              <div class="res-phone-ui">
                <div class="res-phone-pill">Saved search · Waterfront</div>
                <div class="res-phone-pill">3 new matches</div>
                <div class="res-phone-stat"><b>94</b><small>Lead score</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- capability cards -->
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;">
      <span class="kicker">What We Build</span>
      <h2 class="section-title" style="max-width:760px; margin-inline:auto;">Elevate your operation with a platform built around it</h2>
      <p class="section-sub" style="margin-inline:auto; text-align:center;">Custom software that connects listings, leads, and portfolio data into one system your team actually wants to use.</p>
    </div>
    <div class="res-cap-grid" data-depth="0.5">
      <div class="res-cap reveal">
        <div class="res-cap-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10 12 3l9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/></svg></div>
        <h3>Launch your listing platform</h3>
        <p>Full-lifecycle listing and property management, built around how your team actually leases and sells.</p>
      </div>
      <div class="res-cap reveal">
        <div class="res-cap-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.2" y2="16.2"/></svg></div>
        <h3>Get found on Google and AI search</h3>
        <p>SEO- and GEO-ready architecture so your listings surface as search itself keeps changing.</p>
      </div>
      <div class="res-cap reveal">
        <div class="res-cap-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.1a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Capture more qualified leads</h3>
        <p>Scoring, routing, and follow-up built into every search, listing, and valuation touchpoint.</p>
      </div>
    </div>
  </div>
</section>

<!-- 3D portfolio deck -->
<section id="resWork" class="wd-showcase">
  <div class="container">
    <div class="section-head reveal" data-depth="1.2" style="text-align:center; align-items:center;">
      <span class="kicker">Real Estate Work</span>
      <h2 class="section-title" style="max-width:820px; margin-inline:auto;">Real Estate Platforms We've Designed &amp; Built</h2>
      <p class="section-sub" style="margin-inline:auto; text-align:center;">Drag the deck, use the arrows, or tap a card — brokerages, marketplaces, and boutique portfolios we've shipped.</p>
    </div>
  </div>
  <div class="pf3d" data-pf data-pf-start="2">
    <div class="pf3d-floor"></div>
    <div class="pf3d-stage">
      <div class="pf3d-track">

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>skylineproperties.com</i></div>
            <div class="pf3d-shot"><img src="/media/fe190af4e749.jpg" alt="Skyline Properties luxury listings platform" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Luxury Brokerage</span>
            <h3>Skyline Properties</h3>
            <p>A high-rise listings platform with multi-facet search, agent profiles, and a booking flow tuned for premium inventory.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>nestoria.app</i></div>
            <div class="pf3d-shot"><img src="/media/9c1663ba61df.jpg" alt="Nestoria rental marketplace" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Rental Marketplace</span>
            <h3>Nestoria</h3>
            <p>A rentals marketplace with verified listings, saved favourites, and a three-step journey from search to signed lease.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>dreamhome.realty</i></div>
            <div class="pf3d-shot"><img src="/media/39abc1325bf5.jpg" alt="DreamHome residential real estate portal" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Residential Portal</span>
            <h3>DreamHome</h3>
            <p>A family-focused property portal with type-based browsing, agent matching, and a campaign system for seasonal offers.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>stonewyndhouse.com</i></div>
            <div class="pf3d-shot"><img src="/media/a6967cd959b5.jpg" alt="Stonewynd House boutique property and stays" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Boutique Stays</span>
            <h3>Stonewynd House</h3>
            <p>An editorial booking experience with live availability, room inventory, and a curated local guide as a content engine.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>aureo.homes</i></div>
            <div class="pf3d-shot"><img src="/media/a765d7b4c6b4.jpg" alt="Aureo architectural development showcase" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Developer Showcase</span>
            <h3>Aureo</h3>
            <p>A new-development launch site with 3D unit exploration, floorplan viewers, and reservation capture for off-plan sales.</p>
          </div>
        </article>

        <article class="pf3d-card">
          <div class="pf3d-frame">
            <div class="pf3d-chrome"><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><span class="pf3d-dot3"></span><i>maison-riveclaire.fr</i></div>
            <div class="pf3d-shot"><img src="/media/fc6f0238c998.jpg" alt="Maison Riveclaire boutique estate" loading="lazy" draggable="false"></div>
            <div class="pf3d-gloss"></div>
          </div>
          <div class="pf3d-meta">
            <span class="pf3d-tag">Estate &amp; Hospitality</span>
            <h3>Maison Riveclaire</h3>
            <p>A multilingual estate site pairing seasonal availability with a reservation engine and a quietly luxurious editorial layer.</p>
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

<!-- alternating 3D feature rows -->
<section class="bg-alt">
  <div class="container">

    <div class="res-row">
      <div class="res-row-visual reveal" data-res-float>
        <div class="res-float">
          <div class="res-panel">
            <div class="res-panel-head"><b>Property Search</b><span class="res-badge">IDX Live</span></div>
            <div class="res-listing">
              <div class="res-listing-img"><span class="res-listing-tag">Active</span></div>
              <div class="res-listing-body"><b>$895,000</b><small>3 bed · 2 bath · 3,200 sqft — 6789 W Diversey Ave, Chicago, IL</small></div>
            </div>
            <div class="res-sync"><span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg></span>MLS sync completed<em>4m ago</em></div>
          </div>
          <div class="res-panel res-panel-2">
            <div class="res-panel-head"><b>Saved</b><span class="res-badge">12</span></div>
            <div class="res-line m"></div><div class="res-line s"></div>
          </div>
        </div>
      </div>
      <div class="res-row-copy">
        <span class="res-eyebrow">IDX &amp; Property Search</span>
        <h2>Convert more buyers with IDX-integrated search</h2>
        <p>Your platform becomes the home search tool for your market, powered by a direct MLS connection. Saved searches, favourites, and alerts keep buyers coming back as inventory moves.</p>
        <ul class="res-row-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Direct MLS/RETS feed with sub-15-minute sync</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Map, polygon, and multi-facet filtering</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Saved searches with instant-match alerts</li>
        </ul>
      </div>
    </div>

    <div class="res-row flip">
      <div class="res-row-visual reveal" data-res-float>
        <div class="res-float">
          <div class="res-panel">
            <div class="res-panel-head"><b>Hey Kendall, let's stay in touch</b></div>
            <div class="res-field">Fill in your email address</div>
            <div class="res-field">First name</div>
            <div class="res-field">Phone number</div>
            <button type="button" class="res-submit" tabindex="-1" aria-hidden="true">Submit</button>
          </div>
          <div class="res-panel res-panel-3">
            <div class="res-panel-head"><b>Lead scored</b><span class="res-badge">94 · Hot</span></div>
            <div class="res-line m"></div><div class="res-line s"></div>
          </div>
        </div>
      </div>
      <div class="res-row-copy">
        <span class="res-eyebrow">Lead Capture &amp; CRM</span>
        <h2>Turn visitors into leads before they leave for a portal</h2>
        <p>While your team is out showing property, the platform is capturing. Valuation requests, saved-search sign-ups, and one-tap registration run around the clock — and every enquiry lands in your CRM with source and activity already attached.</p>
        <ul class="res-row-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>AI lead scoring and automatic routing</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Home valuation and one-tap registration</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Two-way sync with your existing CRM</li>
        </ul>
      </div>
    </div>

    <div class="res-row">
      <div class="res-row-visual reveal" data-res-float>
        <div class="res-float">
          <div class="res-panel">
            <div class="res-panel-head"><b>Local Visibility</b><span class="res-badge">Rank 1</span></div>
            <div class="res-map" style="margin-top:12px;">
              <div class="res-map-grid"></div>
              <span class="res-map-road" style="top:38%; left:0; width:100%;"></span>
              <span class="res-map-road" style="top:0; left:44%; width:2px; height:100%;"></span>
              <span class="res-pin" style="top:26%; left:38%;"></span>
              <span class="res-pin p2" style="top:58%; left:64%;"></span>
              <span class="res-pin p3" style="top:70%; left:24%;"></span>
            </div>
            <div class="res-serp"><span class="rank">#1</span><small>“luxury real estate + your city” — organic &amp; AI answers</small></div>
          </div>
        </div>
      </div>
      <div class="res-row-copy">
        <span class="res-eyebrow">Technical SEO &amp; AI Search</span>
        <h2>Rank on Google and show up in AI search</h2>
        <p>Every platform ships SEO- and GEO-ready, with the structured data, schema, and performance foundation Google and AI answer engines look for — so your listings keep surfacing as search keeps changing.</p>
        <ul class="res-row-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Listing, agent, and location schema markup</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Programmatic neighbourhood and area pages</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Core Web Vitals tuned for property media</li>
        </ul>
      </div>
    </div>

    <div class="res-row flip">
      <div class="res-row-visual reveal" data-res-float>
        <div class="res-float">
          <div class="res-panel">
            <div class="res-panel-head"><b>Portfolio Overview</b><span class="res-badge">Live</span></div>
            <div class="res-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div>
            <div class="res-kpis">
              <div class="res-kpi"><b>1,284</b><small>Units</small></div>
              <div class="res-kpi"><b>96%</b><small>Occupancy</small></div>
              <div class="res-kpi"><b>40%</b><small>Less admin</small></div>
            </div>
          </div>
        </div>
      </div>
      <div class="res-row-copy">
        <span class="res-eyebrow">Portfolio &amp; Operations</span>
        <h2>One dashboard for every property, lease, and owner</h2>
        <p>Investor reporting, lease tracking, and maintenance workflows in a single system — so owners, tenants, and your operations team are all looking at the same numbers, in real time.</p>
        <ul class="res-row-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Investor and portfolio-level dashboards</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Tenant, lease, and maintenance workflows</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>Automated owner statements and reporting</li>
        </ul>
      </div>
    </div>

  </div>
</section>

<!-- stats band -->
<section class="res-stats-band">
  <div class="res-arc" data-depth="0.8"></div>
  <div class="container">
    <div class="res-stats-grid">
      <h2 class="reveal">Powered by more property data than a template ever handles</h2>
      <div>
        <div class="res-stat-row reveal count-up"><b class="text-gradient" data-count="98" data-suffix="%">0</b><span>of MLS listings sync in under 15 minutes</span></div>
        <div class="res-stat-row reveal count-up"><b class="text-gradient" data-count="40" data-suffix="%">0</b><span>average reduction in admin overhead after launch</span></div>
        <div class="res-stat-row reveal count-up"><b class="text-gradient" data-count="15" data-suffix="+">0</b><span>real estate platforms designed, built, and shipped</span></div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
        <div class="res-faq-item active">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Do I really need custom software instead of an off-the-shelf platform?</button>
          <div class="res-faq-a"><p>If a standard platform covers your workflow, use it — we'll tell you so. Custom makes sense when your leasing, commission, or portfolio logic doesn't fit the box, or when you're paying per-seat fees on tools you've outgrown.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Can you connect directly to my MLS?</button>
          <div class="res-faq-a"><p>Yes. We build against MLS/RETS and RESO Web API feeds directly, including per-board compliance rules, so listings, photos, and status changes stay current without manual re-entry.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What does the build process look like?</button>
          <div class="res-faq-a"><p>Discovery and workflow mapping, then architecture and design, then build in reviewable increments. You see working software early and often — not a six-month silence followed by a reveal.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Will it work with the CRM and tools we already use?</button>
          <div class="res-faq-a"><p>In most cases, yes. We integrate with the CRMs, e-sign, accounting, and marketing tools you already run, and only replace a tool when replacing it is genuinely the cheaper path.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>Can my team manage content and listings ourselves?</button>
          <div class="res-faq-a"><p>Yes — pages, media, agent profiles, and campaign content are all client-editable. Your team shouldn't need a developer to change a headline or push a new development launch.</p></div>
        </div>
        <div class="res-faq-item">
          <button type="button" class="res-faq-q"><span class="res-faq-plus"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>What happens after launch?</button>
          <div class="res-faq-a"><p>We monitor, maintain, and keep improving — performance, SEO, and conversion. Real estate software isn't a one-off delivery; inventory, boards, and search engines all keep moving.</p></div>
        </div>
      </div>
    </div>
    <div class="related-row reveal" style="margin-top:64px;">
      <a class="related-pill" data-route="ai-solutions" data-cursor>AI Solutions →</a>
      <a class="related-pill" data-route="software-development" data-cursor>Software Development →</a>
      <a class="related-pill" data-route="services" data-cursor>View all services →</a>
    </div>
  </div>
</section>

<section id="resSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready for real estate software that fits how you operate?</h2><p>Tell us where the manual work is piling up — we'll show you what we'd build.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
