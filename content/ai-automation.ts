export const HTML = `
<section class="page-hero aix-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="services">Services</a><span>/</span><span>AI Automation</span></div>
    <div class="aix-hero-grid">
      <div class="aix-hero-copy">
        <span class="kicker">AI Automation</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Automation that runs</span></span>
          <span class="reveal-line"><span class="text-gradient">while you sleep.</span></span>
        </h1>
        <p class="page-sub">We eliminate manual workflows with intelligent automation that runs your operations around the clock &mdash; audited, reliable, and self-correcting.</p>
        <div class="ap-feat-row">
          <div class="ap-feat" style="animation-delay:.85s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h4a5 5 0 0 0 0-10H11a5 5 0 0 1 0-10h0" transform="translate(0,5)"/></svg></span><h4>Workflow Mapping</h4><p>Every manual process audited before we automate it.</p></div>
          <div class="ap-feat" style="animation-delay:.95s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg></span><h4>Deep Integrations</h4><p>Connects natively to the tools you already run on.</p></div>
          <div class="ap-feat" style="animation-delay:1.05s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3z"/><path d="m9 12 2 2 4-4"/></svg></span><h4>Self-Correcting</h4><p>Flags anomalies and escalates instead of failing quietly.</p></div>
          <div class="ap-feat" style="animation-delay:1.15s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></span><h4>Measurable ROI</h4><p>Hours saved tracked from day one, not guessed at.</p></div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#autoSubmit" data-scroll-to="autoSubmit" data-cursor><span>Automate My Ops &rarr;</span></a>
          <a class="btn btn-outline" href="#autoRoi" data-scroll-to="autoRoi" data-cursor><span>Calculate Savings</span></a>
        </div>
        <div class="ap-compat-bar"><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>CRM</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>Inbox</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>Docs</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg>Commerce</span></div>
      </div>
      <div class="aix-visual reveal">
        <div class="aix-visual-art">
          <img src="/media/d6772645d0bc.webp" alt="Automation flow visualisation" decoding="async">
        </div>
        <span class="aix-visual-badge"><i></i>Live &mdash; 14 workflows running</span>
        <div class="aix-float">
          <div class="aix-float-head"><b>Automation Run</b><span>&#9679; active</span></div>
          <div class="aix-log">
            <div class="aix-log-row" style="animation-delay:1.3s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span><span>Parsed <b>38 inbound emails</b></span><time>0.4s</time></div>
            <div class="aix-log-row" style="animation-delay:1.55s"><span class="aix-log-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></span><span>Synced <b>12 records</b> to CRM</span><time>1.1s</time></div>
            <div class="aix-log-row" style="animation-delay:1.8s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg></span><span>Generated <b>7 invoices</b></span><time>2.6s</time></div>
            <div class="aix-log-row" style="animation-delay:2.05s"><span class="aix-log-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></span><span>Flagged <b>1 anomaly</b> for review</span><time>3.0s</time></div>
            <div class="aix-log-row" style="animation-delay:2.3s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg></span><span>Run complete &mdash; <b>0 errors</b></span><time>3.4s</time></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">How It Works</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">From Manual Mess to Measured Automation</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Four stages, run in the open. You see the map, the build, and the numbers &mdash; not a black box that someone else owns.</p></div>
    <div class="aix-steps">
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></div><div class="aix-step-n">STEP 01</div><h3>Audit &amp; Map</h3><p>We shadow the actual work, document every manual step, and rank it by hours burned and risk carried.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 7.5v9M8.5 5h5a4 4 0 0 1 4 4v.5M8.5 19h5a4 4 0 0 0 4-4v-.5"/></svg></div><div class="aix-step-n">STEP 02</div><h3>Design the Flow</h3><p>Each workflow is designed with its edge cases, fallbacks, and approval gates specified before anything is built.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg></div><div class="aix-step-n">STEP 03</div><h3>Build &amp; Integrate</h3><p>We connect natively to your stack, ship in small increments, and run new automations in parallel with the manual process first.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M12 3a9 9 0 0 0-9 9c0 2 .6 3.8 1.7 5.3M12 3a9 9 0 0 1 9 9c0 2-.6 3.8-1.7 5.3"/><path d="M14 13l3-4"/></svg></div><div class="aix-step-n">STEP 04</div><h3>Monitor &amp; Tune</h3><p>Live dashboards, anomaly alerts, and a monthly tuning pass so the automation keeps pace with the business.</p></div>
    </div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid">
      <div class="aix-band-media reveal"><img src="/media/050a677c8962.webp" alt="Orchestration layer" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Orchestration layer</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Orchestration</span><h2>One layer that speaks to every tool you already run.</h2><p>Most automation breaks because it is glued together with brittle scripts that nobody owns. We build a proper orchestration layer instead: typed integrations, retries, queues, and a single audit log across every system involved.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Native connectors for CRM, inbox, billing, and internal tools</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Queued and retried automatically when an API has a bad day</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Version-controlled, reviewed, and owned by your team</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>One audit trail across every system a workflow touches</span></li></ul></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">What We Automate</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">The Work Nobody Should Be Doing By Hand</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Nine of the most common places we find hours hiding. Most clients start with one and expand once the savings show up in the numbers.</p></div>
    <div class="aix-cards">
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></div><h3>Inbox Triage &amp; Routing</h3><p>Classify, prioritise, and route inbound email to the right owner &mdash; with drafted replies waiting for a one-click send.</p><span class="aix-card-tag">Support</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg></div><h3>Document Generation</h3><p>Contracts, invoices, and reports assembled from live data, formatted correctly, filed automatically.</p><span class="aix-card-tag">Finance</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div><h3>CRM Hygiene</h3><p>Deduplicate, enrich, and sync records across systems so your pipeline data is trustworthy on Monday morning.</p><span class="aix-card-tag">Sales</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg></div><h3>Order &amp; Fulfilment Flows</h3><p>Order intake through to dispatch and customer notification, with exception handling that catches the odd ones.</p><span class="aix-card-tag">Commerce</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></div><h3>Onboarding Sequences</h3><p>Accounts, permissions, welcome comms, and internal handoffs triggered the moment a deal closes.</p><span class="aix-card-tag">Ops</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/></svg></div><h3>Reconciliation</h3><p>Match transactions across systems nightly and surface only the mismatches that need a human eye.</p><span class="aix-card-tag">Finance</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div><h3>Scheduling &amp; Reminders</h3><p>Bookings, follow-ups, and escalation chains that adapt when someone does not respond.</p><span class="aix-card-tag">Ops</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></div><h3>Data Extraction</h3><p>Pull structured data out of PDFs, forms, and scanned documents and push it straight into your systems.</p><span class="aix-card-tag">Back office</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></div><h3>Reporting Packs</h3><p>Recurring dashboards and board packs generated, checked, and distributed on schedule.</p><span class="aix-card-tag">Leadership</span></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="aix-metrics reveal"><img src="/media/6960b45beacb.webp" alt="" aria-hidden="true" loading="lazy" decoding="async"><div class="aix-metrics-inner"><div class="aix-metric reveal"><b class="text-gradient">70%</b><small>Time saved on ops</small><p>Median reduction in hours spent on the mapped workflows.</p></div><div class="aix-metric reveal"><b class="text-gradient">3-6wks</b><small>To first automation</small><p>From kickoff to a live workflow running in production.</p></div><div class="aix-metric reveal"><b class="text-gradient">50+</b><small>Tools integrated</small><p>Across CRM, comms, finance, commerce, and data systems.</p></div><div class="aix-metric reveal"><b class="text-gradient">0</b><small>Silent failures</small><p>Every exception is surfaced, logged, and escalated to a person.</p></div></div></div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid flip">
      <div class="aix-band-media reveal"><img src="/media/47bf843db9b6.webp" alt="Operations telemetry" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Operations telemetry</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Visibility</span><h2>Every automated action, logged and measurable.</h2><p>You should never wonder what the robot did last night. Each run writes a structured record &mdash; what triggered it, what it touched, what it changed, and how long it took &mdash; surfaced on a dashboard your ops team actually reads.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Per-run traces with inputs, outputs, and timing</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Hours-saved tracked continuously, not estimated once</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Anomaly detection that escalates to a human on-call</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Exportable audit history for compliance reviews</span></li></ul></div>
    </div>
  </div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Before &amp; After</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">What Changes On The Ground</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">The honest version. Automation is not magic &mdash; it moves the work from repetitive execution to exception handling and oversight.</p></div>
    <div class="aix-vs">
      <div class="aix-vs-col reveal">
        <h3>Running It Manually</h3>
        <p>Where most teams are before we start.</p>
        <ul>
          <li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg><span>Hours lost to copy-paste between systems every day</span></li>
          <li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg><span>Errors found days later, by a customer, not a check</span></li>
          <li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg><span>Work stops when the person who knows the process is away</span></li>
          <li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg><span>No record of who changed what, or when, or why</span></li>
          <li class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg><span>Scaling volume means hiring proportionally</span></li>
        </ul>
      </div>
      <div class="aix-vs-col win reveal">
        <h3>Running It Automated <em>after</em></h3>
        <p>Where the same team lands, typically inside a quarter.</p>
        <ul>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>The repetitive path runs unattended, overnight and at volume</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Anomalies caught at the point of failure and escalated</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>The process is documented in code, not in one person's head</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Full audit trail on every automated action taken</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Volume scales without headcount scaling with it</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section id="autoRoi">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Savings Calculator</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">What Is The Busywork Actually Costing You?</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Move the sliders. The maths is deliberately simple and deliberately conservative &mdash; we assume automation removes 70% of the hours, not all of them.</p></div>
    <div class="aix-roi" data-roi>
      <div class="aix-roi-ctl reveal">
        <div class="aix-roi-field">
          <label>People doing this work <b data-roi-out="people">8</b></label>
          <input type="range" min="1" max="60" value="8" data-roi-in="people">
        </div>
        <div class="aix-roi-field">
          <label>Hours each, per week <b data-roi-out="hours">9</b></label>
          <input type="range" min="1" max="40" value="9" data-roi-in="hours">
        </div>
        <div class="aix-roi-field">
          <label>Blended hourly cost <b data-roi-out="rate">$45</b></label>
          <input type="range" min="15" max="180" step="5" value="45" data-roi-in="rate">
        </div>
        <p class="aix-roi-note">Blended cost means salary plus employment overhead &mdash; usually 1.25&ndash;1.4&times; base pay. Set it to what an hour of this team's time genuinely costs the business.</p>
      </div>
      <div class="aix-roi-out reveal">
        <div class="aix-roi-big text-gradient" data-roi-out="annual">$117,936</div>
        <small>Recoverable per year</small>
        <div class="aix-roi-split">
          <div><b data-roi-out="weekly">50</b><small>Hours back / week</small></div>
          <div><b data-roi-out="days">6.3</b><small>Working days / week</small></div>
        </div>
        <p class="aix-roi-note">Assumes 70% of the mapped hours are automatable and 46 working weeks a year. Your real number comes out of the audit in week one &mdash; this is the back-of-envelope version.</p>
      </div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>Workflow Mapping</h3>
          <p>We map every manual process end-to-end before writing a line of automation, so nothing breaks silently.</p>
          <ul>
            <li>Full audit of manual, repetitive workflows</li>
            <li>Prioritized by time saved and business impact</li>
            <li>Documented before a single automation ships</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">3-6wks</b><small>Avg. time to first automation live</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Integration &amp; Orchestration</h3>
          <p>Native integrations across your CRM, inbox, and internal tools — no brittle duct-tape scripts.</p>
          <ul>
            <li>Native integrations with 50+ common tools</li>
            <li>Orchestration across multi-step workflows</li>
            <li>Built to survive API and tool changes</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">50+</b><small>Tools integrated</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Self-Correcting Systems</h3>
          <p>Automations that flag anomalies and escalate to a human instead of failing silently in the background.</p>
          <ul>
            <li>Anomaly detection with automatic escalation</li>
            <li>Full audit trails on every automated action</li>
            <li>Human-in-the-loop for high-stakes steps</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">70%</b><small>Time saved on ops</small></div>
      </div>
    </div>
  </div>
</section>


<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Integrations</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">Connected To What You Already Run</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">We build on your stack rather than asking you to move to ours. If it has an API, a webhook, or a database we can reach, it can be part of a workflow.</p></div>
  </div>
  <div class="aix-marquee"><div class="aix-marquee-track"><span class="aix-chip-tool"><i class=""></i>Salesforce</span><span class="aix-chip-tool"><i class="cy"></i>HubSpot</span><span class="aix-chip-tool"><i class=""></i>Pipedrive</span><span class="aix-chip-tool"><i class="gd"></i>Zoho</span><span class="aix-chip-tool"><i class=""></i>Microsoft Dynamics</span><span class="aix-chip-tool"><i class="cy"></i>Airtable</span><span class="aix-chip-tool"><i class=""></i>Notion</span><span class="aix-chip-tool"><i class="gd"></i>Monday.com</span><span class="aix-chip-tool"><i class=""></i>Salesforce</span><span class="aix-chip-tool"><i class="cy"></i>HubSpot</span><span class="aix-chip-tool"><i class=""></i>Pipedrive</span><span class="aix-chip-tool"><i class="gd"></i>Zoho</span><span class="aix-chip-tool"><i class=""></i>Microsoft Dynamics</span><span class="aix-chip-tool"><i class="cy"></i>Airtable</span><span class="aix-chip-tool"><i class=""></i>Notion</span><span class="aix-chip-tool"><i class="gd"></i>Monday.com</span></div></div><div class="aix-marquee"><div class="aix-marquee-track"><span class="aix-chip-tool"><i class="cy"></i>Slack</span><span class="aix-chip-tool"><i class=""></i>Microsoft Teams</span><span class="aix-chip-tool"><i class="gd"></i>Gmail</span><span class="aix-chip-tool"><i class=""></i>Outlook</span><span class="aix-chip-tool"><i class="cy"></i>Zendesk</span><span class="aix-chip-tool"><i class=""></i>Intercom</span><span class="aix-chip-tool"><i class="gd"></i>Freshdesk</span><span class="aix-chip-tool"><i class=""></i>Front</span><span class="aix-chip-tool"><i class="cy"></i>Slack</span><span class="aix-chip-tool"><i class=""></i>Microsoft Teams</span><span class="aix-chip-tool"><i class="gd"></i>Gmail</span><span class="aix-chip-tool"><i class=""></i>Outlook</span><span class="aix-chip-tool"><i class="cy"></i>Zendesk</span><span class="aix-chip-tool"><i class=""></i>Intercom</span><span class="aix-chip-tool"><i class="gd"></i>Freshdesk</span><span class="aix-chip-tool"><i class=""></i>Front</span></div></div><div class="aix-marquee"><div class="aix-marquee-track"><span class="aix-chip-tool"><i class="gd"></i>Stripe</span><span class="aix-chip-tool"><i class=""></i>QuickBooks</span><span class="aix-chip-tool"><i class="cy"></i>Xero</span><span class="aix-chip-tool"><i class=""></i>NetSuite</span><span class="aix-chip-tool"><i class="gd"></i>SAP</span><span class="aix-chip-tool"><i class=""></i>Shopify</span><span class="aix-chip-tool"><i class="cy"></i>WooCommerce</span><span class="aix-chip-tool"><i class=""></i>Snowflake</span><span class="aix-chip-tool"><i class="gd"></i>Stripe</span><span class="aix-chip-tool"><i class=""></i>QuickBooks</span><span class="aix-chip-tool"><i class="cy"></i>Xero</span><span class="aix-chip-tool"><i class=""></i>NetSuite</span><span class="aix-chip-tool"><i class="gd"></i>SAP</span><span class="aix-chip-tool"><i class=""></i>Shopify</span><span class="aix-chip-tool"><i class="cy"></i>WooCommerce</span><span class="aix-chip-tool"><i class=""></i>Snowflake</span></div></div>
  <div class="container" style="margin-top:44px">
    <div class="related-row reveal" style="justify-content:center">
      <a class="related-pill" data-route="ai-agent" data-cursor>Need decisions, not just steps? See AI Agents &rarr;</a>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Questions</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">Things Teams Ask Us First</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">The practical concerns that come up in almost every first conversation.</p></div>
    <div class="aix-faq"><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Will this replace people on my team?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Almost never how it plays out. What automation removes is the repetitive execution layer &mdash; the copy-paste, the re-keying, the chasing. What is left is exception handling, judgement calls, and the work that was being squeezed out by the busywork. Most of our clients redeploy the time rather than the people. If headcount reduction is your explicit goal, we will say so in the audit rather than pretend otherwise.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>What happens when an automation breaks?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>It escalates rather than fails quietly, which is the single most important design decision. Every workflow has defined failure paths: retry with backoff, route to a human queue, or halt and alert, depending on how costly the step is. You get an alert with the run trace attached, not a silent gap you discover a week later.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How long before we see anything working?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>First live automation is typically three to six weeks in. The first week or two is audit and mapping, which feels slow but is what prevents automating a broken process. After the first workflow ships, subsequent ones move considerably faster because the integration layer already exists.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Do we need to change the tools we use?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>No. We build against your existing stack. Occasionally the audit surfaces a tool that genuinely blocks automation &mdash; no API, no export, no webhook &mdash; and we will flag that honestly, but a migration is a recommendation, never a precondition.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Who owns the automation once it is built?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>You do. Code lives in your repository, integrations run under your credentials, and we document it so your team can maintain and extend it. We offer ongoing support because most teams want it, not because you would be stranded without it.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How do you handle sensitive data?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Scoped credentials with least-privilege access, secrets held in your secret manager rather than ours, and no customer data leaving your environment unless a workflow explicitly requires it and you have signed off. For regulated work we will map data flows against your compliance requirements before building.</p></div></div></div>
  </div>
</section>
<section>
  <div class="container">
    <div class="related-row reveal">
      <a class="related-pill" data-route="ai-chatbot" data-cursor>Smart Chatbot Development &rarr;</a>
      <a class="related-pill" data-route="ai-agent" data-cursor>AI Agent &rarr;</a>
      <a class="related-pill" data-route="services" data-cursor>View all services &rarr;</a>
    </div>
  </div>
</section>
<section id="autoSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready to automate the busywork out of your operations?</h2><p>Tell us what's eating your team's time — we'll show you exactly what we'd automate first.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
