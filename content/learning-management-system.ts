export const HTML = `
<section class="page-hero aix-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="services">Services</a><span>/</span><span>Learning Management System</span></div>
    <div class="aix-hero-grid">
      <div class="aix-hero-copy">
        <span class="kicker">Learning Management System</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Learning platforms</span></span>
          <span class="reveal-line"><span class="text-gradient">built to actually engage.</span></span>
        </h1>
        <p class="page-sub">Course delivery, assessment, and analytics designed around completion rates rather than content storage &mdash; because an LMS nobody finishes is an expensive filing cabinet.</p>
        <div class="ap-feat-row">
          <div class="ap-feat" style="animation-delay:.85s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12.5V18c0 1.1 2.7 2 6 2s6-.9 6-2v-5.5"/></svg></span><h4>Built For Completion</h4><p>Designed around finishing, not just enrolling.</p></div>
          <div class="ap-feat" style="animation-delay:.95s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a4 4 0 0 1 0 8H10a4 4 0 0 0 0 8h5.5" transform="translate(0,-2)"/></svg></span><h4>Adaptive Paths</h4><p>Content that responds to how each learner is doing.</p></div>
          <div class="ap-feat" style="animation-delay:1.05s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></span><h4>Real Analytics</h4><p>Cohort data that tells you where people drop off.</p></div>
          <div class="ap-feat" style="animation-delay:1.15s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg></span><h4>SCORM &amp; xAPI</h4><p>Standards-compliant, so your content stays portable.</p></div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#lmsSubmit" data-scroll-to="lmsSubmit" data-cursor><span>Plan Your Platform &rarr;</span></a>
          <a class="btn btn-outline" href="#lmsRoles" data-scroll-to="lmsRoles" data-cursor><span>See It By Role</span></a>
        </div>
        <div class="ap-compat-bar"><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>Learners</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>Instructors</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H2a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V2a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H22a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>Admins</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>Analytics</span></div>
      </div>
      <div class="aix-visual reveal">
        <div class="aix-visual-art"><img src="/media/838d30bf7976.webp" alt="Knowledge graph visualisation" decoding="async"></div>
        <span class="aix-visual-badge"><i></i>2,480 learners active now</span>
        <div class="sx-panel">
          <div class="sx-panel-bar"><i></i><i></i><i></i><b>my learning</b><span>&#9679; 12-day streak</span></div>
          <div class="sx-panel-body">
            <div class="sx-lrn-top"><span class="sx-lrn-av"></span><div><b>Continue where you left off</b><small>Module 4 &middot; Data Modelling</small></div><em>68%</em></div>
            <div class="sx-lrn-rows">
              <div class="sx-lrn-row" style="animation-delay:1.3s"><div><span>Foundations</span><b>100%</b></div><div class="sx-lrn-track"><i style="--w:100%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.5s"><div><span>Data Modelling</span><b>68%</b></div><div class="sx-lrn-track"><i class="cy" style="--w:68%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.7s"><div><span>Applied Practice</span><b>24%</b></div><div class="sx-lrn-track"><i class="gd" style="--w:24%"></i></div></div>
              <div class="sx-lrn-row" style="animation-delay:1.9s"><div><span>Certification</span><b>Locked</b></div><div class="sx-lrn-track"><i style="--w:0%"></i></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-alt" id="lmsRoles">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Three Audiences, One Platform</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">Every Role Needs A Different Screen</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">An LMS fails when it is designed for whoever bought it. Learners, instructors, and administrators each need their own view of the same system.</p></div>
    <div class="sx-roles">
      <button type="button" class="sx-role on" data-sx-tab="lmsrole" data-sx-i="0" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>Learner</button>
      <button type="button" class="sx-role" data-sx-tab="lmsrole" data-sx-i="1" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>Instructor</button>
      <button type="button" class="sx-role" data-sx-tab="lmsrole" data-sx-i="2" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 7.9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H2a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V2a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H22a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/></svg>Administrator</button>
    </div>

    <div class="sx-pane on" data-sx-pane="lmsrole" data-sx-i="0">
      <div class="sx-screen"><div class="sx-screen-bar"><i></i><i></i><i></i><b>Learner dashboard</b></div>
      <div class="sx-screen-body">
        <div class="sx-mini"><b class="text-gradient">68%</b><small>Course progress</small><p>Picked up exactly where they stopped, on any device, with progress synced.</p><div class="sx-mini-bar"><i style="width:68%"></i></div></div>
        <div class="sx-mini"><b class="text-gradient">12</b><small>Day streak</small><p>Gentle habit mechanics that nudge without turning learning into a slot machine.</p></div>
        <div class="sx-mini"><b class="text-gradient">4/6</b><small>Modules done</small><p>Clear sense of what is left, so the finish line always feels reachable.</p></div>
        <div class="sx-mini wide"><small>Up next</small>
          <div class="sx-mini-list">
            <div class="sx-mini-row"><i></i><span>Watch &mdash; Normalisation in practice</span><b>14 min</b></div>
            <div class="sx-mini-row"><i class="cy"></i><span>Exercise &mdash; Model a booking system</span><b>25 min</b></div>
            <div class="sx-mini-row"><i class="gd"></i><span>Quiz &mdash; Module 4 checkpoint</span><b>8 min</b></div>
          </div></div>
      </div></div>
      <ul class="aix-band-list" style="margin-top:26px;max-width:820px">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Offline-capable mobile learning that syncs progress when the connection returns.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Adaptive sequencing that offers remedial content after a failed checkpoint rather than pushing on regardless.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Accessible by default &mdash; captions, transcripts, keyboard navigation, and screen-reader tested.</span></li>
      </ul>
    </div>

    <div class="sx-pane" data-sx-pane="lmsrole" data-sx-i="1">
      <div class="sx-screen"><div class="sx-screen-bar"><i></i><i></i><i></i><b>Instructor workspace</b></div>
      <div class="sx-screen-body">
        <div class="sx-mini"><b class="text-gradient">312</b><small>Enrolled</small><p>Across three active cohorts, with per-cohort pacing visible at a glance.</p></div>
        <div class="sx-mini"><b class="text-gradient">27</b><small>Awaiting grading</small><p>Queued submissions with rubric-based marking and reusable feedback snippets.</p></div>
        <div class="sx-mini"><b class="text-gradient">Mod 4</b><small>Drop-off point</small><p>Flagged automatically where a cohort stalls, so content gets fixed early.</p></div>
        <div class="sx-mini wide"><small>Cohort health</small>
          <div class="sx-mini-list">
            <div class="sx-mini-row"><i></i><span>Spring intake &mdash; on pace</span><b>84%</b></div>
            <div class="sx-mini-row"><i class="cy"></i><span>Corporate cohort B &mdash; slightly behind</span><b>61%</b></div>
            <div class="sx-mini-row"><i class="gd"></i><span>Self-paced &mdash; needs a nudge</span><b>38%</b></div>
          </div></div>
      </div></div>
      <ul class="aix-band-list" style="margin-top:26px;max-width:820px">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Authoring that does not require a developer &mdash; drag-in video, build a quiz, publish a module.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Rubric-based grading with reusable comment banks, because writing the same feedback fifty times is not teaching.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Question-level analytics that identify which assessment items are badly written, not just which learners struggled.</span></li>
      </ul>
    </div>

    <div class="sx-pane" data-sx-pane="lmsrole" data-sx-i="2">
      <div class="sx-screen"><div class="sx-screen-bar"><i></i><i></i><i></i><b>Administration</b></div>
      <div class="sx-screen-body">
        <div class="sx-mini"><b class="text-gradient">8,140</b><small>Active seats</small><p>Provisioned automatically from your HR system or identity provider.</p></div>
        <div class="sx-mini"><b class="text-gradient">96%</b><small>Compliance rate</small><p>Mandatory training tracked with automated reminders and escalation.</p></div>
        <div class="sx-mini"><b class="text-gradient">SSO</b><small>Identity</small><p>SAML and OIDC with SCIM provisioning, so leavers lose access the same day.</p></div>
        <div class="sx-mini wide"><small>Reporting</small>
          <div class="sx-mini-list">
            <div class="sx-mini-row"><i></i><span>Regulatory completion &mdash; exportable audit pack</span><b>Ready</b></div>
            <div class="sx-mini-row"><i class="cy"></i><span>Department breakdown &mdash; scheduled monthly</span><b>Auto</b></div>
            <div class="sx-mini-row"><i class="gd"></i><span>Certification expiry &mdash; 60-day warning</span><b>42 due</b></div>
          </div></div>
      </div></div>
      <ul class="aix-band-list" style="margin-top:26px;max-width:820px">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Role and group hierarchies that map to how your organisation is actually structured.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Audit-ready compliance exports for regulators, with immutable completion records.</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Multi-tenant support where you deliver training to several client organisations from one platform.</span></li>
      </ul>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">The Retention Problem</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">Where Learners Actually Drop Off</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Industry completion rates for self-paced online courses sit somewhere between 5% and 15%. These five moments are where the losses happen, and each one is a design problem.</p></div>
    <div class="sx-path">
      <div class="sx-path-step reveal"><div class="sx-path-n">01</div><div class="sx-path-body">
        <h4>The first session <em>~40% never return</em></h4>
        <p>Most learners who abandon a course do so before finishing the first module. The fix is structural: a genuine win inside the first ten minutes, no setup friction, and an obvious next action rather than a content library to browse.</p></div></div>
      <div class="sx-path-step reveal"><div class="sx-path-n">02</div><div class="sx-path-body">
        <h4>The first hard thing <em>competence dip</em></h4>
        <p>The point where difficulty first exceeds confidence is the second cliff. Adaptive sequencing matters here &mdash; a failed checkpoint should route to targeted support, not push the learner onward while quietly losing them.</p></div></div>
      <div class="sx-path-step reveal"><div class="sx-path-n">03</div><div class="sx-path-body">
        <h4>The middle stretch <em>motivation decay</em></h4>
        <p>Halfway through, the novelty is gone and the certificate is still distant. Progress visibility, streaks, and cohort presence all measurably help &mdash; but only when they reflect real progress rather than manufacturing false urgency.</p></div></div>
      <div class="sx-path-step reveal"><div class="sx-path-n">04</div><div class="sx-path-body">
        <h4>The assessment <em>fear of failing</em></h4>
        <p>Learners stall before a graded assessment more often than they fail one. Low-stakes practice attempts, clear rubrics published in advance, and a visible retake policy remove most of that hesitation.</p></div></div>
      <div class="sx-path-step reveal"><div class="sx-path-n">05</div><div class="sx-path-body">
        <h4>After completion <em>knowledge decay</em></h4>
        <p>Finishing is not learning. Spaced reinforcement, refresher prompts, and on-the-job reference material are what turn a completion certificate into retained capability six months later.</p></div></div>
    </div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid">
      <div class="aix-band-media reveal"><img src="/media/25c9dc00cb78.webp" alt="Learner experience" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Learner experience</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Engagement</span><h2>Designed around finishing, not enrolling.</h2><p>Enrolment is a vanity metric that most platforms optimise for because it is easy to move. We build for the harder number: the percentage of people who start something and actually complete it, which is the only figure that correlates with the outcome you bought the platform for.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Progress made visible at every level &mdash; lesson, module, and programme</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Adaptive paths that offer support after a failure rather than pushing on</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Spaced reinforcement scheduled after completion to fight decay</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Mobile and offline learning that syncs cleanly when connectivity returns</span></li></ul></div>
    </div>
  </div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Platform Capability</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What Gets Built</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">The modules most platforms need. Which of these you actually get built depends entirely on what your learners require.</p></div>
    <div class="aix-cards"><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22z"/><path d="M4 17.5h16"/></svg></div><h3>Course &amp; Content Delivery</h3><p>Structured pathways with video, documents, SCORM packages, and interactive blocks &mdash; sequenced or free-choice.</p><span class="aix-card-tag">Core</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6.5L4.2 18A2 2 0 0 0 6 21h12a2 2 0 0 0 1.8-3L15 9.5V3"/><path d="M8 3h8"/></svg></div><h3>Assessment Engine</h3><p>Quizzes, assignments, peer review, and proctored exams with question banks and randomised delivery.</p><span class="aix-card-tag">Core</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.5 6H14a4 4 0 0 1 0 8H10a4 4 0 0 0 0 8h5.5" transform="translate(0,-2)"/></svg></div><h3>Adaptive Learning Paths</h3><p>Content that branches on performance, so struggling learners get support and strong ones skip ahead.</p><span class="aix-card-tag">Engagement</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-1 8L12 19l4.5 2.5-1-8"/></svg></div><h3>Certification &amp; Credentials</h3><p>Verifiable certificates, expiry tracking, renewal reminders, and digital badges that survive verification.</p><span class="aix-card-tag">Compliance</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></div><h3>Analytics &amp; Reporting</h3><p>Cohort funnels, question-level item analysis, and scheduled exports for stakeholders who live in spreadsheets.</p><span class="aix-card-tag">Insight</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 20a6.5 6.5 0 0 0-2-4.7"/></svg></div><h3>Cohorts &amp; Social Learning</h3><p>Discussion, group projects, and peer feedback &mdash; the parts that make completion rates rise most reliably.</p><span class="aix-card-tag">Engagement</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg></div><h3>Standards &amp; Integrations</h3><p>SCORM, xAPI, LTI, plus HRIS and CRM sync so enrolment and completion flow both ways automatically.</p><span class="aix-card-tag">Integration</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div><h3>Security &amp; Compliance</h3><p>SSO, SCIM provisioning, GDPR/FERPA handling, audit logs, and data residency where regulation requires it.</p><span class="aix-card-tag">Governance</span></div><div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M18 16l.8 2.2L21 19l-2.2.8L18 22l-.8-2.2L15 19l2.2-.8z"/></svg></div><h3>AI-Assisted Learning</h3><p>Draft generation for authors, automated summaries, and a tutor that answers from your material with citations.</p><span class="aix-card-tag">Optional</span></div></div>
  </div>
</section>
<section>
  <div class="container"><div class="aix-metrics reveal"><img src="/media/48ecf49f77ce.webp" alt="" aria-hidden="true" loading="lazy" decoding="async"><div class="aix-metrics-inner"><div class="aix-metric reveal"><b class="text-gradient">3&times;</b><small>Completion uplift</small><p>Typical improvement over the content-library platforms we replace.</p></div><div class="aix-metric reveal"><b class="text-gradient">50k+</b><small>Concurrent learners</small><p>Peak load handled on platforms we have built and operate.</p></div><div class="aix-metric reveal"><b class="text-gradient">WCAG 2.2</b><small>Accessibility</small><p>AA compliance verified with assistive technology, not just automated checks.</p></div><div class="aix-metric reveal"><b class="text-gradient">99.9%</b><small>Uptime</small><p>Including exam periods, when availability matters most of all.</p></div></div></div></div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid flip">
      <div class="aix-band-media reveal"><img src="/media/9c5e5a6e89a3.webp" alt="Authoring tools" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Authoring tools</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Authoring</span><h2>Course creation that does not need a developer.</h2><p>If publishing a course update requires filing a ticket, courses stop getting updated. Authoring belongs to the people who know the subject, with version control and review workflows underneath so that autonomy does not become chaos.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Drag-and-drop authoring with video, quizzes, files, and interactive blocks</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Draft, review, and publish workflow with full version history</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>SCORM 1.2/2004 and xAPI import so existing content is not stranded</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Reusable content blocks shared across courses and updated in one place</span></li></ul></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Build Or Buy</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">An Honest Comparison</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Moodle and Canvas are genuinely good, and off-the-shelf is often the right call. Custom is worth it in specific circumstances &mdash; here is how to tell which you are in.</p></div>
    <div class="sx-table-wrap reveal"><table class="sx-table"><thead><tr><th></th><th class="c">Off-the-shelf</th><th class="c hi">Custom build</th></tr></thead><tbody><tr><td>Time to first cohort</td><td class="c">2-6 weeks</td><td class="c">3-6 months</td></tr><tr><td>Upfront cost</td><td class="c">Low</td><td class="c">Higher</td></tr><tr><td>Per-seat licence cost at scale</td><td class="c">Grows with seats</td><td class="c">Flat</td></tr><tr><td>Matches an unusual pedagogy</td><td class="c"><span class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></span></td><td class="c"><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td></tr><tr><td>Deep integration with your systems</td><td class="c">Limited</td><td class="c"><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td></tr><tr><td>You own the roadmap</td><td class="c"><span class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></span></td><td class="c"><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td></tr><tr><td>Full control of learner data</td><td class="c"><span class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 6 12 12M18 6 6 18"/></svg></span></td><td class="c"><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td></tr><tr><td>White-label as your own product</td><td class="c">Limited</td><td class="c"><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span></td></tr></tbody></table></div>
    <p class="section-sub reveal" style="margin:34px auto 0; text-align:center; max-width:760px;">Our rule of thumb: if a standard platform covers 80% of what you need, take it and live with the 20%. Custom earns its cost when the LMS <em>is</em> your product, when per-seat licensing at your scale exceeds the build, or when your teaching model simply does not fit the boxes an off-the-shelf platform provides.</p>
  </div>
</section>
<section><div class="container"><div class="sx-quote reveal"><p>An LMS does not have a content problem. It has a finishing problem &mdash; and no amount of uploaded video has ever solved it.</p><span>What we design against</span></div></div></section>
<section>
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>Course Delivery &amp; Content</h3>
          <p>Rich multimedia course delivery with structured learning pathways, not a folder of static PDFs.</p>
          <ul>
            <li>Rich multimedia course delivery</li>
            <li>Structured, sequenced learning pathways</li>
            <li>Certifications and completion tracking</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">12k+</b><small>Learners onboarded in 90 days</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Analytics &amp; Progress Tracking</h3>
          <p>Real engagement and completion data, so you know what's working and what learners are skipping.</p>
          <ul>
            <li>Engagement and completion analytics</li>
            <li>Cohort and individual progress tracking</li>
            <li>Reporting built for instructors and admins</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">85%</b><small>Avg. completion rate</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>AI-Assisted Learning Paths</h3>
          <p>Personalized pacing and recommendations that adapt to each learner instead of a one-size-fits-all course.</p>
          <ul>
            <li>Personalized pacing and recommendations</li>
            <li>AI-assisted content and quiz generation</li>
            <li>Adaptive paths based on real performance</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">2x</b><small>Faster skill mastery</small></div>
      </div>
    </div>
  </div>
</section>


<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Questions</span><h2 class="section-title" style="max-width:840px; margin-inline:auto;">What Comes Up When Planning A Platform</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">The practical questions from people who have usually been burned by an LMS before.</p></div>
    <div class="aix-faq"><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Should we just use Moodle or Canvas?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Very possibly, and we will say so if that is our honest read. Off-the-shelf platforms are mature, cheap to start, and cover the common cases well. Custom makes sense in three situations: the LMS is the product you are selling rather than an internal tool, per-seat licensing at your scale has grown past what a build would cost, or your teaching model genuinely does not fit the structures those platforms impose. Outside those, the standard platform usually wins.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Can we migrate our existing courses?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Yes. SCORM 1.2 and 2004 packages, xAPI statements, and most common export formats import directly. Learner records, completion history, and certificates migrate too &mdash; that part is usually more delicate than the content, because completion data often has compliance significance and cannot simply be approximated.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How do you actually improve completion rates?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Structurally, not with gamification sprinkled on top. The measures that move the number are: a real win inside the first session, adaptive support at the first difficult moment, visible progress throughout, low-stakes practice before graded assessment, and social presence so learners are not working alone. We instrument the funnel so you can see which stage is losing people and fix that specific stage rather than guessing.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Will it work on phones and offline?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Yes, and for many learner populations that is the primary experience rather than a fallback. Video downloads for offline viewing, progress queued locally and synced when a connection returns, and layouts designed for a phone first rather than a desktop layout squeezed down.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>What about accessibility and compliance?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>WCAG 2.2 AA is the baseline, tested with actual screen readers rather than only automated tooling. For regulated environments we handle GDPR and FERPA data requirements, immutable audit trails, and data residency. Compliance reporting is built as a first-class feature, because retrofitting an audit trail afterwards is painful and sometimes impossible.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How long does it take and what does it cost?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>A focused platform for a defined audience is typically three to four months; a multi-tenant product with authoring, assessment, and deep integrations runs six months or more. Cost tracks scope rather than seat count. We scope in phases so that a usable platform reaches real learners early and later phases are funded on the strength of what the first one demonstrated.</p></div></div></div>
  </div>
</section>
<section>
  <div class="container">
    <div class="related-row reveal">
      <a class="related-pill" data-route="web-app-development" data-cursor>Web App Development &rarr;</a>
      <a class="related-pill" data-route="software-development" data-cursor>Software Development &rarr;</a>
      <a class="related-pill" data-route="services" data-cursor>View all services &rarr;</a>
    </div>
  </div>
</section>
<section id="lmsSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready for an LMS learners actually finish?</h2><p>Tell us about your courses and learners — we'll show you how we'd structure the platform.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
