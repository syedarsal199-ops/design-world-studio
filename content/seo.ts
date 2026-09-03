export const HTML = `
<section class="page-hero aix-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><a href="/services" data-route="services">Services</a><span>/</span><span>SEO</span></div>
    <div class="aix-hero-grid">
      <div class="aix-hero-copy">
        <span class="kicker">SEO</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Visibility that</span></span>
          <span class="reveal-line"><span class="text-gradient">compounds over time.</span></span>
        </h1>
        <p class="page-sub">Technical and content SEO built by engineers who ship the fixes themselves &mdash; measured in qualified traffic and revenue, not in ranking screenshots for keywords nobody searches.</p>
        <div class="ap-feat-row">
          <div class="ap-feat" style="animation-delay:.85s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg></span><h4>Technical Foundation</h4><p>Crawlability and Core Web Vitals fixed in the code.</p></div>
          <div class="ap-feat" style="animation-delay:.95s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span><h4>Content That Ranks</h4><p>Written for the search intent, not the keyword density.</p></div>
          <div class="ap-feat" style="animation-delay:1.05s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg></span><h4>Authority Building</h4><p>Earned links from places that actually pass value.</p></div>
          <div class="ap-feat" style="animation-delay:1.15s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></span><h4>Revenue Reporting</h4><p>Tracked to pipeline, not to vanity impressions.</p></div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#seoSubmit" data-scroll-to="seoSubmit" data-cursor><span>Request an Audit &rarr;</span></a>
          <a class="btn btn-outline" href="#seoSerp" data-scroll-to="seoSerp" data-cursor><span>Try the SERP Preview</span></a>
        </div>
        <div class="ap-compat-bar"><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>Technical</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>Content</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>Authority</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 3-6 3v15l6-3 6 3 6-3V3l-6 3z"/><path d="M9 3v15M15 6v15"/></svg>Local</span></div>
      </div>
      <div class="aix-visual reveal">
        <div class="aix-visual-art"><img src="/media/9db654197884.webp" alt="Organic growth visualisation" decoding="async"></div>
        <span class="aix-visual-badge"><i></i>organic sessions &middot; 12 months</span>
        <div class="sx-panel">
          <div class="sx-panel-bar"><i></i><i></i><i></i><b>search console</b><span>&#9679; +214%</span></div>
          <div class="sx-panel-body">
            <div class="sx-lrn-rows">
              <div class="sx-lrn-row" style="animation-delay:1.3s"><div><span>Impressions</span><b>1.84M</b></div><div class="sx-lrn-track"><i style="--w:88%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.5s"><div><span>Clicks</span><b>96.2k</b></div><div class="sx-lrn-track"><i class="cy" style="--w:64%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.7s"><div><span>Avg. position</span><b>6.4</b></div><div class="sx-lrn-track"><i class="gd" style="--w:72%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.9s"><div><span>Pages ranking top 10</span><b>412</b></div><div class="sx-lrn-track"><i style="--w:54%"></i></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-alt" id="seoSerp">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Try It Yourself</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">Live Search Result Preview</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Type a title and description and watch how the result would render. The counters tell you when Google will start truncating &mdash; a surprising number of pages lose their call to action to an ellipsis.</p></div>
    <div class="seo-serp" data-serp>
      <div class="seo-fields reveal">
        <div class="seo-field">
          <label>Page title<b data-serp-count="title">0 / 60</b></label>
          <input type="text" data-serp-in="title" maxlength="120" value="Custom Software Development Company | Design World Studio">
          <div class="seo-meter"><i data-serp-meter="title"></i></div>
        </div>
        <div class="seo-field">
          <label>URL slug<b data-serp-count="url">&nbsp;</b></label>
          <input type="text" data-serp-in="url" maxlength="90" value="designworldstudio.com &rsaquo; services &rsaquo; software-development">
        </div>
        <div class="seo-field">
          <label>Meta description<b data-serp-count="desc">0 / 155</b></label>
          <textarea rows="4" data-serp-in="desc" maxlength="320">We design and build enterprise-grade software, mobile apps, and AI products. Engineering-led, delivery-focused, and built to last. Talk to our team today.</textarea>
          <div class="seo-meter"><i data-serp-meter="desc"></i></div>
        </div>
      </div>
      <div class="reveal">
        <div class="seo-preview">
          <div class="seo-preview-bar">Google &mdash; desktop result</div>
          <div class="seo-result">
            <div class="seo-res-url"><span class="seo-res-fav"></span><span data-serp-out="url"></span></div>
            <div class="seo-res-title" data-serp-out="title"></div>
            <div class="seo-res-desc" data-serp-out="desc"></div>
            <div class="seo-res-meta">
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z"/></svg>Rich result eligible</span>
              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>Indexed 2 days ago</span>
            </div>
          </div>
        </div>
        <div class="seo-hint" data-serp-hint><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Both lengths are inside the safe range. Google may still rewrite either one if it thinks a different phrasing better matches the query &mdash; that is normal and not a fault.</span></div>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Core Web Vitals</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">The Three Numbers Google Actually Measures</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Page experience is a real ranking input and a very real conversion one. These are the thresholds, and where most sites fail them.</p></div>
    <div class="seo-cwv">
      <div class="seo-gauge reveal">
        <div class="seo-gauge-ring">
          <svg viewBox="0 0 120 120"><circle class="trk" cx="60" cy="60" r="56"/><circle class="val" cx="60" cy="60" r="56" style="--off:42"/></svg>
          <div class="seo-gauge-num"><b>1.4s</b><small>LCP</small></div>
        </div>
        <h4>Largest Contentful Paint</h4>
        <p>How long until the main content is actually visible. Usually killed by unoptimised hero images, render-blocking CSS, or a slow server response.</p>
        <em>Good &lt; 2.5s</em>
      </div>
      <div class="seo-gauge reveal">
        <div class="seo-gauge-ring">
          <svg viewBox="0 0 120 120"><circle class="trk" cx="60" cy="60" r="56"/><circle class="val" cx="60" cy="60" r="56" style="--off:56"/></svg>
          <div class="seo-gauge-num"><b>84ms</b><small>INP</small></div>
        </div>
        <h4>Interaction to Next Paint</h4>
        <p>How quickly the page responds when someone taps or clicks. Almost always a main-thread problem: too much JavaScript doing too much at once.</p>
        <em>Good &lt; 200ms</em>
      </div>
      <div class="seo-gauge reveal">
        <div class="seo-gauge-ring">
          <svg viewBox="0 0 120 120"><circle class="trk" cx="60" cy="60" r="56"/><circle class="val" cx="60" cy="60" r="56" style="--off:32"/></svg>
          <div class="seo-gauge-num"><b>0.02</b><small>CLS</small></div>
        </div>
        <h4>Cumulative Layout Shift</h4>
        <p>How much the page jumps around while loading. Caused by images without dimensions, late-injected banners, and fonts swapping in.</p>
        <em>Good &lt; 0.1</em>
      </div>
    </div>
    <p class="section-sub reveal" style="margin:36px auto 0; text-align:center; max-width:780px;">We fix these in the codebase rather than reporting on them. That is the practical difference between an SEO agency and an engineering team that does SEO &mdash; the recommendations and the pull requests come from the same people.</p>
  </div>
</section>
<section class="aix-band">
  <div class="container"><div class="aix-band-grid">
    <div class="aix-band-media reveal"><img src="/media/65ed580fe59a.webp" alt="Technical foundation" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Technical foundation</span></div>
    <div class="aix-band-copy reveal"><span class="kicker">Technical SEO</span><h2>Fixed in the codebase, not listed in a PDF.</h2><p>Most SEO audits end with a document handed to a development team who never prioritise it. We are the development team, so findings become pull requests. That single difference is why technical work here finishes rather than accumulating.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Rendering, crawl budget, and indexation fixed at the framework level</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Core Web Vitals treated as an engineering budget enforced in CI</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Structured data implemented and validated against live rich-result tests</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Migrations and redesigns handled without losing existing rankings</span></li></ul></div>
  </div></div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">The Audit</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What We Actually Check</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Roughly 140 checks in the full audit. These are the ones that most often turn out to be the problem.</p></div>
    <div class="seo-audit">
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></span><div><b>Crawl &amp; index coverage</b><span>Which pages Google can reach, which it has chosen to ignore, and why. Orphaned pages and accidental noindex tags are found here constantly.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M12 3a9 9 0 0 0-9 9c0 2 .6 3.8 1.7 5.3M12 3a9 9 0 0 1 9 9c0 2-.6 3.8-1.7 5.3"/><path d="M14 13l3-4"/></svg></span><div><b>Core Web Vitals by template</b><span>Measured per page type from field data, because a slow product template affects thousands of pages while the homepage looks fine.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg></span><div><b>Duplicate &amp; thin content</b><span>Canonical conflicts, parameter duplication, and near-identical pages competing with each other for the same query.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></svg></span><div><b>Structured data</b><span>Schema validity and eligibility for rich results &mdash; and whether the markup actually matches what is on the page.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg></span><div><b>Internal linking</b><span>How authority flows through the site. Important pages buried five clicks deep is one of the most common and most fixable findings.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M10 19h4"/></svg></span><div><b>Mobile rendering</b><span>What Googlebot sees on mobile specifically, including content hidden behind interactions or not present until JavaScript runs.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></span><div><b>Keyword cannibalisation</b><span>Pages competing against each other for the same intent, which suppresses both rather than helping either.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg></span><div><b>Backlink profile health</b><span>What is pointing at you, what is worth keeping, and whether anything looks toxic enough to need disavowing.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg></span><div><b>International &amp; hreflang</b><span>Language and region targeting, where a misconfigured hreflang cluster can quietly suppress entire markets.</span></div></div>
      <div class="seo-check reveal"><span class="seo-check-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 20a6.5 6.5 0 0 0-2-4.7"/></svg></span><div><b>Competitor gap analysis</b><span>The queries competitors rank for and you do not, sorted by realistic winnability rather than raw volume.</span></div></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Outcomes</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What Engagements Have Delivered</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Medians across twelve-month engagements. Individual results vary a great deal with starting position and competitiveness.</p></div>
    <div class="sx-rail-stats"><div class="sx-stat reveal"><b class="text-gradient">+214%</b><small>Organic sessions</small><p>Median growth across twelve-month engagements.</p></div><div class="sx-stat reveal"><b class="text-gradient">&lt;1.5s</b><small>Median LCP</small><p>After technical work, on the templates that matter most.</p></div><div class="sx-stat reveal"><b class="text-gradient">412</b><small>Top-10 pages</small><p>Median count ranking on page one after twelve months.</p></div><div class="sx-stat reveal"><b class="text-gradient">0</b><small>Penalties</small><p>No manual actions across any site we have worked on.</p></div></div>
  </div>
</section>
<section class="aix-band">
  <div class="container"><div class="aix-band-grid flip">
    <div class="aix-band-media reveal"><img src="/media/f776afb1afbc.webp" alt="Content strategy" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Content strategy</span></div>
    <div class="aix-band-copy reveal"><span class="kicker">Content</span><h2>Written for intent, not for keyword density.</h2><p>Content that ranks and content that converts are usually the same content, because both require actually answering the question the searcher asked. We plan around topics and intent, then write things a person would willingly finish reading.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Topic clusters mapped to search intent across the funnel</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Briefs built from what currently ranks and what it fails to cover</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Existing content refreshed first &mdash; usually the fastest available win</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Written by people with subject knowledge, edited for accuracy</span></li></ul></div>
  </div></div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Scope</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What An Engagement Includes</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Most engagements combine several of these, weighted by where the audit says the opportunity actually is.</p></div>
    <div class="aix-cards"><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg></div><h3>Technical SEO</h3><p>Crawlability, indexation, site speed, structured data, and rendering &mdash; diagnosed and then fixed in the code.</p><span class="aix-card-tag">Foundation</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></div><h3>Content Strategy &amp; Production</h3><p>Topic clusters, briefs, and published content aimed at intent that converts rather than volume that flatters.</p><span class="aix-card-tag">Content</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg></div><h3>Digital PR &amp; Link Earning</h3><p>Earned coverage and genuinely useful assets. No link schemes, no private blog networks, no shortcuts that become liabilities.</p><span class="aix-card-tag">Authority</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 3-6 3v15l6-3 6 3 6-3V3l-6 3z"/><path d="M9 3v15M15 6v15"/></svg></div><h3>Local SEO</h3><p>Google Business Profile, location pages, citation consistency, and review strategy for multi-location businesses.</p><span class="aix-card-tag">Local</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9 4.5 4h15L21 9"/><path d="M4 9v11h16V9"/><path d="M9 20v-6h6v6"/></svg></div><h3>E-commerce SEO</h3><p>Faceted navigation, category architecture, product schema, and the duplication problems that plague large catalogues.</p><span class="aix-card-tag">Commerce</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg></div><h3>International SEO</h3><p>Hreflang, market-level targeting, and content localisation that goes beyond machine translation.</p><span class="aix-card-tag">Global</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/></svg></div><h3>Migration Support</h3><p>Redesigns and replatforms handled with redirect mapping and rank monitoring, so traffic survives the move.</p><span class="aix-card-tag">Risk</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z"/></svg></div><h3>AI Search Visibility</h3><p>Being cited in AI answers is becoming its own channel &mdash; structured, quotable content is how you show up in it.</p><span class="aix-card-tag">Emerging</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></div><h3>Analytics &amp; Attribution</h3><p>GA4, Search Console, and rank tracking wired to pipeline so SEO is reported in revenue rather than impressions.</p><span class="aix-card-tag">Measurement</span></div></div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Realistic Expectations</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What Happens, And When</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">SEO is slow, and anyone promising page one in thirty days is selling something. This is the honest shape of a twelve-month engagement.</p></div>
    <div class="seo-months">
      <div class="seo-month reveal" style="--p:.25"><em>MONTH 1&ndash;2</em><h4>Fix the foundation</h4><p>Technical audit, crawl and indexation fixes, Core Web Vitals work, and analytics set up so later changes are actually measurable.</p><b>~0%<small>Traffic change</small></b></div>
      <div class="seo-month reveal" style="--p:.5"><em>MONTH 3&ndash;5</em><h4>First movement</h4><p>Technical fixes get recrawled and existing pages start rising. Content production begins targeting the winnable gaps found in the audit.</p><b>+15&ndash;40%<small>Organic sessions</small></b></div>
      <div class="seo-month reveal" style="--p:.75"><em>MONTH 6&ndash;9</em><h4>Compounding</h4><p>Published content matures and starts ranking. Internal linking and earned authority push the whole cluster rather than single pages.</p><b>+60&ndash;120%<small>Organic sessions</small></b></div>
      <div class="seo-month reveal" style="--p:1"><em>MONTH 10&ndash;12</em><h4>Category presence</h4><p>Ranking across a topic rather than for isolated keywords, with a content engine your team can keep running without us.</p><b>+150&ndash;300%<small>Organic sessions</small></b></div>
    </div>
    <p class="section-sub reveal" style="margin:34px auto 0; text-align:center; max-width:780px;">Those ranges are what we have seen across engagements, not a guarantee. A site with severe technical debt moves faster at the start because the fixes unlock existing value; a mature, well-optimised site moves slower but from a much higher base.</p>
  </div>
</section>
<section><div class="container"><div class="sx-quote reveal"><p>Ranking for a keyword nobody buys from is a hobby. We optimise for the queries that end in a conversation with your sales team.</p><span>How we measure SEO</span></div></div></section>
<section>
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>Technical SEO</h3>
          <p>Site speed, crawlability, and structured data handled at the engineering level, not patched on after launch.</p>
          <ul>
            <li>Core Web Vitals and site speed optimization</li>
            <li>Clean crawlability and structured data</li>
            <li>Technical audits before and after launch</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">98</b><small>Avg. Lighthouse SEO score</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Content &amp; Authority</h3>
          <p>Content strategy tied to real search intent and topical authority, not keyword-stuffed filler.</p>
          <ul>
            <li>Search intent and keyword research</li>
            <li>Content built around topical authority</li>
            <li>Backlink and authority-building strategy</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">3x</b><small>Avg. organic traffic growth</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Ongoing Optimization</h3>
          <p>Monthly iteration based on real ranking and traffic data — SEO as a discipline, not a one-time audit.</p>
          <ul>
            <li>Monthly reporting on rankings and traffic</li>
            <li>Continuous on-page and content iteration</li>
            <li>Adapts to algorithm and market shifts</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">12mo+</b><small>Avg. client engagement</small></div>
      </div>
    </div>
  </div>
</section>


<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Questions</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What Clients Ask About SEO</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Including the sceptical ones, which are usually the fair ones.</p></div>
    <div class="aix-faq"><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How long until we see results?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Meaningful movement takes three to six months, and compounding growth takes nine to twelve. Anyone promising page one in thirty days is either targeting keywords with no competition or doing something that will eventually cost you. The one exception is a site with significant technical problems &mdash; fixing those can unlock existing value surprisingly quickly, because the content was already good enough to rank and something was preventing it.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Is SEO still worth it with AI answers taking over?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Yes, though the shape is changing. AI answers pull from the same underlying index, so being crawlable, structured, authoritative, and quotable now determines whether you are cited in an AI answer as well as whether you rank in a traditional result. What is genuinely declining is thin content that exists only to capture a simple factual query &mdash; an AI answers those directly now. Content with real depth, original data, or genuine expertise has become more valuable, not less.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Do you guarantee rankings?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>No, and you should be wary of anyone who does. Nobody controls Google&rsquo;s algorithm, and a guarantee is only possible by targeting keywords so uncompetitive that ranking for them is worthless. What we commit to is a defined scope of work, transparent reporting on what shipped, and honest assessment of what is and is not working &mdash; including telling you when a channel other than SEO would serve you better.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>What makes you different from an SEO agency?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>We are engineers. The most common failure in SEO is a thorough audit handed to a development team who never get to it, so the technical findings sit in a document for two years. Our recommendations become pull requests, written by the same people who found the problem. If your bottleneck is technical &mdash; and for most sites with real traffic it is &mdash; that difference is the entire engagement.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Will you use AI to write the content?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>We use AI as a drafting and research tool, and we are open about that. What we do not do is publish generated content unedited, because it reliably produces text that is plausible, generic, and occasionally wrong &mdash; which is exactly what search engines have spent two years learning to filter out. Everything published is edited by someone with subject knowledge and fact-checked.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>What happens if we stop?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Rankings decay slowly rather than collapsing. Technical fixes are permanent, published content keeps ranking until competitors overtake it, and earned links keep passing authority. Typically you would see gradual erosion over six to twelve months as competitors continue publishing. That is a genuine argument for continuity, but it is not the cliff some agencies imply.</p></div></div></div>
  </div>
</section>
<section>
  <div class="container"><div class="related-row reveal">
    <a href="/website-development" class="related-pill" data-route="website-development" data-cursor>Website Development &rarr;</a>
    <a href="/web-app-development" class="related-pill" data-route="web-app-development" data-cursor>Web App Development &rarr;</a>
    <a href="/services" class="related-pill" data-route="services" data-cursor>View all services &rarr;</a>
  </div></div>
</section>
<section id="seoSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready for SEO that compounds instead of fading?</h2><p>Tell us about your site — we'll show you where the biggest visibility gaps are.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
