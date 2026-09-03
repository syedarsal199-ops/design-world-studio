export const HTML = `
<section class="page-hero">
  <div class="grid-overlay"></div>
  <canvas class="page-hero-canvas" data-network></canvas>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><span>Work</span></div>
    <span class="kicker">Selected Work</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>Products we've turned</span></span>
      <span class="reveal-line"><span class="text-gradient">into intelligent platforms.</span></span>
    </h1>
    <p class="page-sub">A glimpse at the outcomes behind the pixels — every project engineered to move a real metric, not just look good in a portfolio.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <div class="stat-bar" style="margin-bottom:64px;">
      <div class="stat reveal"><b>120+</b><small>Projects Delivered</small></div>
      <div class="stat reveal"><b>$40M+</b><small>Client Revenue Influenced</small></div>
      <div class="stat reveal"><b>9</b><small>Industries Served</small></div>
      <div class="stat reveal"><b>4.9★</b><small>Avg. Client Rating</small></div>
    </div>
    <div class="portfolio-grid">
      <a class="project spotlight" data-cursor href="/work-ziptrip" style="--tint:linear-gradient(135deg, rgba(0,150,205,.48), rgba(6,24,66,.6)); cursor:pointer;">
        <img class="project-img" src="/media/96a794cf673e.webp" alt="ZipTrip — AI-Powered Travel App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Travel App</small><h3>ZipTrip</h3><p>AI trip planning across flights, hotels, and cruises</p><div class="tags"><span>AI Travel</span><span>Mobile App</span><span>iOS &amp; Android</span></div></div>
      </a>
      <a class="project" data-cursor href="/work-crewiq" style="--tint:linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6)); cursor:pointer;">
        <img class="project-img" src="/media/f0b71b98daf7.webp" alt="CrewIQ — AI-Powered Workforce App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Workforce App</small><h3>CrewIQ</h3><p>AI job matching, verified clock-in, and transparent pay</p><div class="tags"><span>AI Matching</span><span>Workforce</span><span>iOS &amp; Android</span></div></div>
      </a>
      <a class="project" data-cursor href="/work-fovera" style="--tint:linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6)); cursor:pointer;">
        <img class="project-img" src="/media/c579cc61a782.webp" alt="Fovera — AI-Powered Food Compliance App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Food Compliance App</small><h3>Fovera</h3><p>AI-checked allergen data, recipe costing, and label approval in one app</p><div class="tags"><span>Food Compliance</span><span>AI Allergen Data</span><span>iOS &amp; Android</span></div></div>
      </a>
      <a class="project" data-cursor href="/work-unbroken-investing" style="--tint:linear-gradient(135deg, rgba(46,204,140,.42), rgba(6,12,10,.6)); cursor:pointer;">
        <img class="project-img" src="/media/0f4b9b9f70de.webp" alt="Unbroken Investing — AI-Powered Investment Platform" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>AI-Powered Investment Platform</small><h3>Unbroken Investing</h3><p>AI-matched deal flow with real-time underwriting and risk analysis</p><div class="tags"><span>AI Investing</span><span>Real Estate</span><span>iOS &amp; Android</span></div></div>
      </a>
      <a class="project" data-cursor href="/work-youdj-mixer" style="--tint:linear-gradient(135deg, rgba(245,140,35,.42), rgba(13,10,10,.6)); cursor:pointer;">
        <img class="project-img" src="/media/f77ed8529fad.webp" alt="YouDJ Mixer — DJ &amp; Music Mixing App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>DJ &amp; Music Mixing App</small><h3>YouDJ Mixer</h3><p>A real dual-deck mixer anyone can pick up in minutes</p><div class="tags"><span>DJ App</span><span>Music</span><span>iOS &amp; Android</span></div></div>
      </a>
      <a class="project" data-cursor href="/work-joytify" style="--tint:linear-gradient(135deg, rgba(140,70,220,.42), rgba(10,10,16,.6)); cursor:pointer;">
        <img class="project-img" src="/media/2e895bb72d74.webp" alt="Joytify — Music &amp; Playlists App" loading="lazy">
        <div class="project-tint"></div>
        <div class="project-body"><small>Music &amp; Playlists App</small><h3>Joytify</h3><p>320kbps streaming with synced lyrics and instant search</p><div class="tags"><span>Music Streaming</span><span>Playlists</span><span>iOS &amp; Android</span></div></div>
      </a>
    </div>
  </div>
</section>

<section class="final-cta submit-cta"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Your Project, Next</span><h2>Let's build something worth featuring here.</h2><p>Tell us about your product — we'll show you how we'd approach it.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I&rsquo;m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>
`;
