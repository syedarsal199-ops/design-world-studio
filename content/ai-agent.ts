export const HTML = `
<section class="page-hero aix-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><a href="/services" data-route="services">Services</a><span>/</span><span>AI Agent</span></div>
    <div class="aix-hero-grid">
      <div class="aix-hero-copy">
        <span class="kicker">AI Agent</span>
        <h1 class="page-title">
          <span class="reveal-line"><span>Agents that act,</span></span>
          <span class="reveal-line"><span class="text-gradient">not just chat.</span></span>
        </h1>
        <p class="page-sub">Autonomous agents that reason through a goal, pick their own tools, and take real action across your systems &mdash; with human approval on the steps that matter.</p>
        <div class="ap-feat-row">
          <div class="ap-feat" style="animation-delay:.85s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9.5 19a2.5 2.5 0 0 0 2.5-2.5z"/><path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 14.5 19 2.5 2.5 0 0 1 12 16.5z"/></svg></span><h4>Multi-Step Reasoning</h4><p>Plans a route to the goal instead of following a script.</p></div>
          <div class="ap-feat" style="animation-delay:.95s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1 5.4 5.2l-8.6 8.6a2.5 2.5 0 0 1-3.6-3.6z"/><path d="m5 7 3-3 2.5 2.5"/><circle cx="5" cy="16" r="2"/></svg></span><h4>Real Tool Use</h4><p>Reads and writes in your actual systems, not a sandbox.</p></div>
          <div class="ap-feat" style="animation-delay:1.05s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></span><h4>Human In The Loop</h4><p>Approval gates wherever an action is expensive or final.</p></div>
          <div class="ap-feat" style="animation-delay:1.15s"><span class="ap-feat-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg></span><h4>Fully Observable</h4><p>Every thought, tool call, and result recorded and replayable.</p></div>
        </div>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#agentSubmit" data-scroll-to="agentSubmit" data-cursor><span>Scope an Agent &rarr;</span></a>
          <a class="btn btn-outline" href="#agentTrace" data-scroll-to="agentTrace" data-cursor><span>Watch One Think</span></a>
        </div>
        <div class="ap-compat-bar"><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9.5 19a2.5 2.5 0 0 0 2.5-2.5z"/><path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 14.5 19 2.5 2.5 0 0 1 12 16.5z"/></svg>Reasoning</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1 5.4 5.2l-8.6 8.6a2.5 2.5 0 0 1-3.6-3.6z"/><path d="m5 7 3-3 2.5 2.5"/><circle cx="5" cy="16" r="2"/></svg>Tool use</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>Memory</span><span class="ap-compat-div"></span><span class="ap-compat-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>Guardrails</span></div>
      </div>
      <div class="aix-visual reveal">
        <div class="aix-visual-art">
          <img src="/media/afc94d09340f.webp" alt="Agent reasoning core visualisation" decoding="async">
        </div>
        <span class="aix-visual-badge"><i></i>Agent active &mdash; step 4 of 6</span>
        <div class="aix-float">
          <div class="aix-float-head"><b>Reasoning Trace</b><span>&#9679; thinking</span></div>
          <div class="aix-log">
            <div class="aix-log-row" style="animation-delay:1.3s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></span><span>Goal: <b>resolve refund #4471</b></span><time>&mdash;</time></div>
            <div class="aix-log-row" style="animation-delay:1.55s"><span class="aix-log-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></span><span>Read order + payment history</span><time>0.8s</time></div>
            <div class="aix-log-row" style="animation-delay:1.8s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 7.5v9M8.5 5h5a4 4 0 0 1 4 4v.5M8.5 19h5a4 4 0 0 0 4-4v-.5"/></svg></span><span>Chose <b>partial refund</b> path</span><time>1.4s</time></div>
            <div class="aix-log-row" style="animation-delay:2.05s"><span class="aix-log-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></span><span>Awaiting approval &mdash; <b>$240</b></span><time>&mdash;</time></div>
            <div class="aix-log-row" style="animation-delay:2.3s"><span class="aix-log-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></span><span>Blocked by policy until approved</span><time>&mdash;</time></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Anatomy</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">What Actually Makes Something An Agent</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">A chatbot answers. An agent decides, acts, checks the result, and adapts. These four parts are what separate the two.</p></div>
    <div class="aix-steps">
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 0 0-3 3 3 3 0 0 0-2 5.2A3 3 0 0 0 9.5 19a2.5 2.5 0 0 0 2.5-2.5z"/><path d="M12 5a3 3 0 0 1 3 3 3 3 0 0 1 2 5.2A3 3 0 0 1 14.5 19 2.5 2.5 0 0 1 12 16.5z"/></svg></div><div class="aix-step-n">STEP 01</div><h3>The Planner</h3><p>Breaks a goal into steps, decides the order, and revises the plan when a step returns something unexpected.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 1 5.4 5.2l-8.6 8.6a2.5 2.5 0 0 1-3.6-3.6z"/><path d="m5 7 3-3 2.5 2.5"/><circle cx="5" cy="16" r="2"/></svg></div><div class="aix-step-n">STEP 02</div><h3>The Tools</h3><p>Typed, permissioned functions into your real systems &mdash; read a record, issue a refund, book a slot, file a ticket.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div><div class="aix-step-n">STEP 03</div><h3>The Memory</h3><p>Context carried across the whole task and, where useful, across sessions, so the agent is not starting cold every time.</p></div>
      <div class="aix-step reveal"><div class="aix-step-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg></div><div class="aix-step-n">STEP 04</div><h3>The Guardrails</h3><p>Policy limits, approval thresholds, and hard stops that constrain what the agent is permitted to do on its own.</p></div>
    </div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid">
      <div class="aix-band-media reveal"><img src="/media/f340efc968ca.webp" alt="Reasoning layer" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Reasoning layer</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Reasoning</span><h2>Planning that survives contact with reality.</h2><p>The hard part of an agent is not the first plan &mdash; it is what happens when step three returns something the plan did not anticipate. We build agents that verify their own results, re-plan when reality disagrees, and know the difference between a recoverable error and a stop-and-ask.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Re-plans mid-task instead of failing on the first surprise</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Verifies the result of each action before moving on</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Distinguishes retryable failures from ones needing a human</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Bounded step budgets so nothing loops indefinitely</span></li></ul></div>
    </div>
  </div>
</section>
<section id="agentTrace">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Inside A Run</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">Watch An Agent Work Through A Real Task</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">This is a real trace shape from a support agent handling a refund request &mdash; every step it took, every tool it called, and the point where it stopped and asked a person.</p></div>
    <div class="aix-band-grid" style="align-items:start">
      <div class="aix-trace reveal" data-trace>
        <div class="aix-trace-bar"><i></i><i></i><i></i><b>agent-run &middot; refund-4471</b><span>&#9679; live</span></div>
        <div class="aix-trace-body">
          <div class="aix-tstep"><div class="aix-tdot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></div><div>
            <h4>Goal received <em>trigger</em></h4>
            <p>Customer emailed asking for a refund on a delayed order. Agent picked it up from the support queue.</p>
            <div class="aix-tcode">goal: <b>"resolve refund request"</b>
ticket: <i>#4471</i>  channel: <i>email</i></div></div></div>
          <div class="aix-tstep"><div class="aix-tdot cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></div><div>
            <h4>Gathering context <em>3 tool calls</em></h4>
            <p>Pulled the order, the delivery record, and the customer's history before deciding anything.</p>
            <div class="aix-tcode">orders.get(<i>4471</i>) &rarr; <b>delayed 9 days</b>
shipping.trace(<i>4471</i>) &rarr; <b>carrier fault</b>
customers.history(<i>c_882</i>) &rarr; <b>4 orders, 0 refunds</b></div></div></div>
          <div class="aix-tstep"><div class="aix-tdot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 7.5v9M8.5 5h5a4 4 0 0 1 4 4v.5M8.5 19h5a4 4 0 0 0 4-4v-.5"/></svg></div><div>
            <h4>Reasoning to a decision <em>plan</em></h4>
            <p>Full refund is not warranted &mdash; goods were delivered. Policy allows a shipping refund plus goodwill credit for carrier-fault delays over seven days.</p>
            <div class="aix-tcode">policy.check(<i>delay_carrier_fault</i>)
&rarr; refund shipping <b>$40</b> + credit <b>$200</b></div></div></div>
          <div class="aix-tstep active"><div class="aix-tdot gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></div><div>
            <h4>Approval gate hit <em>waiting</em></h4>
            <p>Total exceeds the $150 auto-approve threshold, so the agent stopped and routed it to a human with its full reasoning attached.</p>
            <div class="aix-tcode">threshold: <b>$150</b>  requested: <b>$240</b>
status: <i>awaiting human approval</i></div></div></div>
          <div class="aix-tstep pending"><div class="aix-tdot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z"/></svg></div><div>
            <h4>Execute <em>pending</em></h4>
            <p>On approval: issue the refund, apply the credit, and update the order record in one transaction.</p></div></div>
          <div class="aix-tstep pending"><div class="aix-tdot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/></svg></div><div>
            <h4>Close the loop <em>pending</em></h4>
            <p>Draft and send the customer reply, log the resolution, and close the ticket.</p></div></div>
        </div>
      </div>
      <div class="reveal">
        <div class="aix-approve">
          <div class="aix-approve-head"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></span><b>Approval requested</b><em>waiting</em></div>
          <p>The agent has done the work and stopped at the gate. A person sees exactly what it wants to do and why, then approves or overrides in one click.</p>
          <div class="aix-approve-rows">
            <div class="aix-approve-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/></svg><span>Refund shipping</span><small>$40.00</small></div>
            <div class="aix-approve-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span>Goodwill credit</span><small>$200.00</small></div>
            <div class="aix-approve-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg><span>Update order record</span><small>#4471</small></div>
          </div>
          <div class="aix-approve-acts">
            <button type="button" class="aix-approve-btn go" data-cursor>Approve &amp; run</button>
            <button type="button" class="aix-approve-btn" data-cursor>Modify</button>
            <button type="button" class="aix-approve-btn" data-cursor>Reject</button>
          </div>
        </div>
        <ul class="aix-band-list" style="margin-top:28px">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Thresholds are set per action type &mdash; refunds, sends, deletes, and writes can each have their own gate.</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Approvals can route to Slack, email, or your own tooling rather than another dashboard to check.</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Every decision, approval, and override is written to an immutable audit log.</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Where Agents Earn Their Keep</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">Tasks Worth Handing Over</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">Agents pay off on work that needs judgement across several systems &mdash; not on single-step tasks, where plain automation is cheaper and more predictable.</p></div>
    <div class="aix-cards">
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z"/></svg></div><h3>Support Resolution</h3><p>Reads the full history, decides the remedy, drafts the reply, and executes the refund or replacement once approved.</p><span class="aix-card-tag">Support</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg></div><h3>Research &amp; Enrichment</h3><p>Gathers information across sources, cross-checks it, and writes structured findings into your CRM.</p><span class="aix-card-tag">Sales</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg></div><h3>Document Review</h3><p>Reads contracts and filings, extracts terms, flags deviations from your standard positions, and summarises the risk.</p><span class="aix-card-tag">Legal ops</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6"/></svg></div><h3>Order Exceptions</h3><p>Handles the messy ones &mdash; partial stock, address failures, split shipments &mdash; deciding case by case.</p><span class="aix-card-tag">Commerce</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div><h3>Data Reconciliation</h3><p>Investigates mismatches across systems, works out which source is right, and proposes the correction.</p><span class="aix-card-tag">Finance</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div><h3>Scheduling Negotiation</h3><p>Works out a slot across calendars, constraints, and time zones, then books it and handles the rescheduling.</p><span class="aix-card-tag">Ops</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico gd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg></div><h3>Incident Triage</h3><p>First-line investigation on alerts &mdash; gathers logs, forms a hypothesis, and escalates with context attached.</p><span class="aix-card-tag">Engineering</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20a7 7 0 0 1 14 0"/></svg></div><h3>Onboarding Journeys</h3><p>Provisions accounts, chases missing information, and adapts the sequence to what each customer actually needs.</p><span class="aix-card-tag">Customer success</span></div>
      <div class="aix-card reveal" data-tilt-card><div class="aix-card-ico cy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg></div><h3>Analysis Requests</h3><p>Answers open questions against your data, checks its own numbers, and shows the working alongside the answer.</p><span class="aix-card-tag">Leadership</span></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="aix-metrics reveal"><img src="/media/b2f6eb9b3834.webp" alt="" aria-hidden="true" loading="lazy" decoding="async"><div class="aix-metrics-inner"><div class="aix-metric reveal"><b class="text-gradient">24/7</b><small>Always-on execution</small><p>Agents work the queue overnight and at weekends without a shift roster.</p></div><div class="aix-metric reveal"><b class="text-gradient">100%</b><small>Auditable actions</small><p>Every reasoning step and tool call is recorded and replayable.</p></div><div class="aix-metric reveal"><b class="text-gradient">50+</b><small>Tool integrations</small><p>Across support, finance, commerce, data, and internal systems.</p></div><div class="aix-metric reveal"><b class="text-gradient">6-10wks</b><small>To production</small><p>From scoping to an agent running live against real work.</p></div></div></div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid flip">
      <div class="aix-band-media reveal"><img src="/media/4db81ec969b6.webp" alt="Tool surface" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Tool surface</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Tool Use</span><h2>Scoped access to the systems that matter.</h2><p>An agent is only as useful as what it is permitted to touch. Each tool is a typed, permissioned function with its own limits &mdash; the agent can read a customer record without being able to delete one, and issue a refund up to a ceiling without being able to empty an account.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Least-privilege scopes defined per tool, not per agent</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Read and write separated so access can be granted gradually</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Rate and value ceilings enforced outside the model</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>New tools added without retraining or rebuilding the agent</span></li></ul></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Chatbot Or Agent?</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">Knowing Which One You Actually Need</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">A useful distinction, because the wrong choice is expensive in both directions. Plenty of problems are better served by a good chatbot &mdash; or by plain automation with no model in the loop at all.</p></div>
    <div class="aix-vs">
      <div class="aix-vs-col reveal">
        <h3>A Chatbot Is Enough When&hellip;</h3>
        <p>The job is answering, not doing.</p>
        <ul>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>The task is answering questions from known material</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Actions are one step and low-stakes, if there are any</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>A person stays in the conversation throughout</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Being wrong is embarrassing rather than costly</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>You need it live in weeks, not months</span></li>
        </ul>
      </div>
      <div class="aix-vs-col win reveal">
        <h3>You Need An Agent When&hellip; <em>agent</em></h3>
        <p>The job requires judgement and action.</p>
        <ul>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>The task spans several systems and several steps</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>The right next step depends on what the last one returned</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Real actions get taken &mdash; money moves, records change</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Cases vary enough that a fixed script keeps breaking</span></li>
          <li class="yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>You need an audit trail of why, not just what</span></li>
        </ul>
      </div>
    </div>
    <div class="related-row reveal" style="justify-content:center; margin-top:36px">
      <a href="/ai-chatbot" class="related-pill" data-route="ai-chatbot" data-cursor>See Smart Chatbot Development &rarr;</a>
      <a href="/ai-automation" class="related-pill" data-route="ai-automation" data-cursor>See AI Automation &rarr;</a>
    </div>
  </div>
</section>
<section class="aix-band">
  <div class="container">
    <div class="aix-band-grid">
      <div class="aix-band-media reveal"><img src="/media/b3a63ab5d3b1.webp" alt="Guardrail architecture" loading="lazy" decoding="async"><span class="aix-band-cap"><i></i>Guardrail architecture</span></div>
      <div class="aix-band-copy reveal"><span class="kicker">Safety</span><h2>Autonomy with a hand on the brake.</h2><p>The question is never whether an agent will eventually try something it should not &mdash; it is what stops it when it does. Guardrails live outside the model, in code that the model cannot talk its way past, and they fail closed rather than open.</p><ul class="aix-band-list"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Value and rate ceilings enforced in the tool layer, not the prompt</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Approval thresholds tuned per action type and per customer segment</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Hard stops on destructive operations, always requiring a person</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Instant kill switch and manual takeover on any running agent</span></li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/></svg><span>Immutable audit log of every action, approval, and override</span></li></ul></div>
    </div>
  </div>
</section>
<section>
  <div class="container">
    <div class="pillars">
      <div class="pillar glass reveal">
        <div>
          <h3>Multi-Step Reasoning</h3>
          <p>Agents that plan and execute multi-step tasks across your stack, without waiting on a human for every step.</p>
          <ul>
            <li>Multi-step task planning and execution</li>
            <li>Context retained across an entire workflow</li>
            <li>Fails gracefully and reports what happened</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">24/7</b><small>Always-on execution</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Native Tool Integrations</h3>
          <p>Native integrations with your CRM, inbox, and internal tools — agents that actually take action, not just suggest one.</p>
          <ul>
            <li>Native integrations with your existing stack</li>
            <li>Read and write access, scoped to what's needed</li>
            <li>Extensible to new tools as you add them</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">50+</b><small>Integrations supported</small></div>
      </div>
      <div class="pillar glass reveal">
        <div>
          <h3>Human-in-the-Loop</h3>
          <p>Approval gates for high-stakes actions, so autonomy never means losing control.</p>
          <ul>
            <li>Configurable approval thresholds</li>
            <li>Full audit trail on every action taken</li>
            <li>Instant override and manual takeover</li>
          </ul>
        </div>
        <div class="pillar-stat"><b class="text-gradient">100%</b><small>Auditable actions</small></div>
      </div>
    </div>
  </div>
</section>


<section class="bg-alt">
  <div class="container">
    <div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;"><span class="kicker">Questions</span><h2 class="section-title" style="max-width:820px; margin-inline:auto;">What Teams Ask Before Handing Over Control</h2><p class="section-sub" style="margin-inline:auto; text-align:center;">The concerns worth having. We would rather answer them now than in an incident review.</p></div>
    <div class="aix-faq"><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How do we stop it doing something catastrophic?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Guardrails sit outside the model, in the tool layer, where prompting cannot reach them. An agent that is not granted a delete tool cannot delete, regardless of what it concludes it should do. Value ceilings, rate limits, and approval thresholds are enforced in code, destructive operations always require a person, and there is a kill switch on every running agent.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>What if it makes the wrong call?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>It will sometimes, which is why the design assumes it. High-stakes actions sit behind approval gates. Actions that get through are reversible where the underlying system allows it. And every decision carries its reasoning trace, so a wrong call is diagnosable rather than mysterious &mdash; you can see which step went wrong and fix that specific thing.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Is this just a chatbot with extra steps?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>No, and the difference is architectural rather than cosmetic. A chatbot produces text. An agent produces actions: it plans, calls typed functions against real systems, reads the results, and adapts. The comparison section above lays out which one your problem actually needs &mdash; sometimes it is the chatbot, and we will tell you so.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How long does it take to build one?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Six to ten weeks to production for a first agent, most of which is spent on the tool layer and guardrails rather than the reasoning. The model is the easy part. Defining what the agent may touch, under what limits, with what fallbacks, is the actual engineering.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>Which model do you use?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Whichever fits the task, and we design so it can be swapped. Model capability is moving fast enough that locking your system to one provider is a liability. The tools, guardrails, and evaluation harness are ours; the model behind them is a component.</p></div></div><div class="aix-faq-item"><button type="button" class="aix-faq-q" data-faq data-cursor>How do you know it is working?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></button><div class="aix-faq-a"><p>Evaluation sets built from your real cases, run on every change, so you can see whether a modification improved things or quietly broke an edge case. Plus production monitoring on approval rates, override rates, and task completion &mdash; a rising override rate is the earliest signal that something has drifted.</p></div></div></div>
  </div>
</section>
<section>
  <div class="container">
    <div class="related-row reveal">
      <a href="/ai-automation" class="related-pill" data-route="ai-automation" data-cursor>AI Automation &rarr;</a>
      <a href="/ai-chatbot" class="related-pill" data-route="ai-chatbot" data-cursor>Smart Chatbot Development &rarr;</a>
      <a href="/services" class="related-pill" data-route="services" data-cursor>View all services &rarr;</a>
    </div>
  </div>
</section>
<section id="agentSubmit" class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let's Build</span><h2>Ready for an agent that actually gets things done?</h2><p>Tell us which decisions and tasks eat your team's time — we'll show you what an agent could take off your plate.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
