export const PRECHROME = `<div id="global-bg"><img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop" alt="" role="presentation"></div>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    <linearGradient id="gemGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFD98E"/>
      <stop offset="50%" stop-color="#E8A33D"/>
      <stop offset="100%" stop-color="#B5541C"/>
    </linearGradient>
    <linearGradient id="dwsG" x1="6" y1="4" x2="58" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#12B5A6"/>
      <stop offset="50%" stop-color="#4EA83A"/>
      <stop offset="100%" stop-color="#8FE23A"/>
    </linearGradient>
  </defs>
</svg>

<div id="progress"></div>
<div class="cursor-glow" id="cursorGlow"></div>
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-ring" id="cursorRing"></div>`;
export const HEADER = `<header id="siteHeader">
  <nav class="container">
    <a class="logo" data-route="home" data-cursor aria-label="Design World Studio — home"><img class="logo-mark" src="/media/dws-logo-icon.png" alt="" aria-hidden="true"><span class="logo-text">Design World Studio</span></a>
    <ul class="nav-links">
      <li class="nav-item-services">
        <a data-route="services" data-cursor>Services</a>
        <div class="mega-menu">
          <div class="mega-menu-cols">
            <div class="mega-col" style="--sv:#4EA83A;">
              <span class="mega-col-label">Web &amp; Software</span>
              <a class="mega-menu-link" data-route="website-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></span>
                <span class="mm-text"><b>Website Design &amp; Development</b><small>Cinematic, high-converting sites</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="web-app-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/></svg></span>
                <span class="mm-text"><b>Web App Development</b><small>SaaS, dashboards &amp; portals</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="mvp-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c2.8 1.8 4.5 5.2 4.5 8.8 0 1.9-.8 3.7-1.7 4.7l-2.8 2.8-2.8-2.8c-.9-1-1.7-2.8-1.7-4.7 0-3.6 1.7-7 4.5-8.8z"/><circle cx="12" cy="10.5" r="1.8"/><path d="M9 17.5l-1.5 3.5 3.5-1.5M15 17.5l1.5 3.5-3.5-1.5"/></svg></span>
                <span class="mm-text"><b>MVP Development</b><small>Idea to launch-ready, in weeks</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="software-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
                <span class="mm-text"><b>Software Development</b><small>Full-stack, engineered to scale</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="cross-platform-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span>
                <span class="mm-text"><b>Cross-Platform Development</b><small>One codebase, every platform</small></span>
                <span class="mm-arrow">→</span>
              </a>
            </div>
            <div class="mega-col" style="--sv:#7ABE6B;">
              <span class="mega-col-label">Mobile Apps</span>
              <a class="mega-menu-link" data-route="mobile-app-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></span>
                <span class="mm-text"><b>Mobile App Development</b><small>Native iOS &amp; Android apps</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="android-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9.5a6 6 0 0 1 12 0V16H6V9.5z"/><line x1="8" y1="4.5" x2="7" y2="2.5"/><line x1="16" y1="4.5" x2="17" y2="2.5"/><circle cx="9.5" cy="9" r=".6" fill="currentColor" stroke="none"/><circle cx="14.5" cy="9" r=".6" fill="currentColor" stroke="none"/><line x1="4" y1="10" x2="4" y2="15"/><line x1="20" y1="10" x2="20" y2="15"/><line x1="8" y1="16" x2="8" y2="20"/><line x1="16" y1="16" x2="16" y2="20"/></svg></span>
                <span class="mm-text"><b>Android Development</b><small>Native Kotlin, every device</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="ios-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="10" y1="19" x2="14" y2="19"/></svg></span>
                <span class="mm-text"><b>iOS Development</b><small>Crafted to Apple's own standard</small></span>
                <span class="mm-arrow">→</span>
              </a>
            </div>
            <div class="mega-col" style="--sv:#4FD1FF;">
              <span class="mega-col-label">AI &amp; Automation</span>
              <a class="mega-menu-link" data-route="ai-automation" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
                <span class="mm-text"><b>AI Automation</b><small>Workflows that run themselves</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="ai-chatbot" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z"/></svg></span>
                <span class="mm-text"><b>AI Chatbot</b><small>Support &amp; sales, handled instantly</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="ai-agent" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3"/><line x1="12" y1="2" x2="12" y2="8"/><circle cx="12" cy="2" r="1.4" fill="currentColor" stroke="none"/><circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none"/><line x1="9" y1="18" x2="15" y2="18"/></svg></span>
                <span class="mm-text"><b>AI Agent</b><small>Reasons, decides, takes action</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="ai-powered-software-development" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><rect x="10" y="10" width="4" height="4"/><line x1="12" y1="2" x2="12" y2="7"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="2" y1="12" x2="7" y2="12"/><line x1="17" y1="12" x2="22" y2="12"/></svg></span>
                <span class="mm-text"><b>AI-Powered Software Development</b><small>Intelligence built into the core</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="ai-solutions" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg></span>
                <span class="mm-text"><b>AI Solutions</b><small>Strategy to production models</small></span>
                <span class="mm-arrow">→</span>
              </a>
            </div>
            <div class="mega-col" style="--sv:#D4B26A;">
              <span class="mega-col-label">Specialized &amp; Growth</span>
              <a class="mega-menu-link" data-route="seo" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><polyline points="8 12 10 9 13 13 15 8"/></svg></span>
                <span class="mm-text"><b>SEO</b><small>Visibility that compounds</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="real-estate-software" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5L12 4l9 7.5"/><path d="M5 10v10h14V10"/><rect x="10" y="14" width="4" height="6"/></svg></span>
                <span class="mm-text"><b>Real Estate Custom Software</b><small>Listing, CRM &amp; portfolio tools</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <a class="mega-menu-link" data-route="learning-management-system" data-cursor>
                <span class="mm-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4.5h6a4 4 0 0 1 4 4V20a3 3 0 0 0-3-3H2z"/><path d="M22 4.5h-6a4 4 0 0 0-4 4V20a3 3 0 0 1 3-3h7z"/></svg></span>
                <span class="mm-text"><b>Learning Management System</b><small>Courses learners actually finish</small></span>
                <span class="mm-arrow">→</span>
              </a>
              <div class="mega-cta-card">
                <b>Not sure where to start?</b>
                <p>Tell us the problem — we'll map it to the right service, or blend two or three.</p>
                <a data-route="contact" data-cursor>Talk to the studio →</a>
              </div>
            </div>
          </div>
          <div class="mega-menu-foot">
            <p>Sixteen disciplines, one intelligent studio — design, engineering, and AI under one roof.</p>
            <a class="related-pill" data-route="services" data-cursor>View all services →</a>
          </div>
        </div>
      </li>
      <li><a data-route="ai-solutions" data-cursor>AI Solutions</a></li>
      <li><a data-route="work" data-cursor>Work</a></li>
      <li><a data-route="case-studies" data-cursor>Case Studies</a></li>
      <li><a data-route="blog" data-cursor>Blog</a></li>
      <li><a data-route="process" data-cursor>Process</a></li>
      <li><a data-route="about" data-cursor>About</a></li>
      <li><a data-route="contact" data-cursor>Contact</a></li>
    </ul>
    <a class="btn btn-outline nav-cta" data-route="contact" data-cursor><span>Start a Project →</span></a>
    <button class="burger" id="burger" aria-label="Toggle menu"><span></span><span></span></button>
  </nav>
</header>`;
export const MOBILE_MENU = `<div id="mobile-menu">
  <div class="mobile-menu-bg" aria-hidden="true">
    <div class="mobile-menu-glow g1"></div>
    <div class="mobile-menu-glow g2"></div>
    <div class="mobile-menu-glow g3"></div>
    <div class="grid-overlay"></div>
  </div>
  <ul>
    <li class="mobile-menu-services">
      <button type="button" class="mobile-menu-toggle" data-mobile-toggle="services" aria-expanded="false">
        <span class="mobile-menu-toggle-label"><span>Services</span></span>
        <span class="mobile-menu-chevron"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
      </button>
      <div class="mobile-submenu-wrap" data-mobile-submenu="services">
        <ul class="mobile-submenu">
          <li><a data-route="website-development">Website Design &amp; Development</a></li>
          <li><a data-route="web-app-development">Web App Development</a></li>
          <li><a data-route="mobile-app-development">Mobile App Development</a></li>
          <li><a data-route="android-development">Android Development</a></li>
          <li><a data-route="ios-development">iOS Development</a></li>
          <li><a data-route="cross-platform-development">Cross-Platform Development</a></li>
          <li><a data-route="software-development">Software Development</a></li>
          <li><a data-route="mvp-development">MVP Development</a></li>
          <li><a data-route="ai-automation">AI Automation</a></li>
          <li><a data-route="ai-chatbot">Smart Chatbot Development</a></li>
          <li><a data-route="ai-agent">AI Agent</a></li>
          <li><a data-route="ai-powered-software-development">AI-Powered Software Development</a></li>
          <li><a data-route="ai-solutions">AI Solutions</a></li>
          <li><a data-route="seo">SEO</a></li>
          <li><a data-route="real-estate-software">Real Estate Custom Software</a></li>
          <li><a data-route="learning-management-system">Learning Management System</a></li>
          <li><a class="mobile-submenu-all" data-route="services">View All Services →</a></li>
        </ul>
      </div>
    </li>
    <li><a data-route="ai-solutions">AI Solutions</a></li>
    <li><a data-route="work">Work</a></li>
    <li><a data-route="case-studies">Case Studies</a></li>
    <li><a data-route="blog">Blog</a></li>
    <li><a data-route="process">Process</a></li>
    <li><a data-route="about">About</a></li>
    <li><a data-route="contact">Contact</a></li>
  </ul>
  <div class="mobile-menu-foot">
    <div class="mobile-menu-badges">
      <span class="header-trust-badge"><img src="/media/badges/badge-clutch.png" alt="Clutch" loading="lazy"></span>
      <span class="header-trust-badge"><img src="/media/badges/badge-bbb.png" alt="BBB Accredited Business" loading="lazy"></span>
      <span class="header-trust-badge"><img src="/media/badges/badge-trustpilot.png" alt="Trustpilot" loading="lazy"></span>
    </div>
  </div>
</div>`;
export const TICKER = `<div class="cta-ticker">
  <div class="cta-ticker-track" id="ctaTicker"></div>
</div>`;
export const FOOTER = `<footer>
  <div class="footer-bg" aria-hidden="true"><img src="/media/footer-home.webp" alt="" loading="lazy"></div>
  <img class="footer-grain" src="/media/grain.svg" alt="" aria-hidden="true">
  <div class="footer-visual" aria-hidden="true">
    <svg viewBox="0 0 1600 300" preserveAspectRatio="xMidYMid slice" role="img">
      <defs>
        <linearGradient id="fvG1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#4EA83A"/><stop offset="55%" stop-color="#4FD1FF"/><stop offset="100%" stop-color="#0a0a0f" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="fvG2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#C77DFF"/><stop offset="55%" stop-color="#D4B26A"/><stop offset="100%" stop-color="#0a0a0f" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="fvG3" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#FF6B6B"/><stop offset="60%" stop-color="#4EA83A"/><stop offset="100%" stop-color="#0a0a0f" stop-opacity="0"/>
        </linearGradient>
        <filter id="fvBlur" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="46"/></filter>
        <radialGradient id="fvDot" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity=".9"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1600" height="300" fill="#07070a"/>
      <g opacity=".55" filter="url(#fvBlur)">
        <ellipse class="footer-aurora-ribbon r1" cx="260" cy="90" rx="420" ry="150" fill="url(#fvG1)"/>
        <ellipse class="footer-aurora-ribbon r2" cx="1180" cy="60" rx="480" ry="170" fill="url(#fvG2)"/>
        <ellipse class="footer-aurora-ribbon r3" cx="760" cy="220" rx="520" ry="140" fill="url(#fvG3)"/>
      </g>
      <g opacity=".8">
        <circle cx="220" cy="70" r="2.4" fill="#7ABE6B"/>
        <circle cx="410" cy="140" r="1.8" fill="#4FD1FF"/>
        <circle cx="640" cy="60" r="2.2" fill="#D4B26A"/>
        <circle cx="900" cy="170" r="1.6" fill="#C77DFF"/>
        <circle cx="1120" cy="90" r="2.4" fill="#4EA83A"/>
        <circle cx="1340" cy="150" r="1.8" fill="#FF6B6B"/>
        <circle cx="1480" cy="70" r="2.2" fill="#4FD1FF"/>
      </g>
    </svg>
    <div class="footer-visual-grid"></div>
  </div>
  <div class="container">
    <div class="footer-trust">
      <div class="footer-trust-badges">
        <a class="footer-trust-badge" href="#" target="_blank" rel="noopener" aria-label="Clutch" data-cursor><img src="/media/badges/badge-clutch.png" alt="Clutch" loading="lazy"></a>
        <a class="footer-trust-badge" href="#" target="_blank" rel="noopener" aria-label="Better Business Bureau Accredited Business" data-cursor><img src="/media/badges/badge-bbb.png" alt="BBB Accredited Business" loading="lazy"></a>
        <a class="footer-trust-badge" href="#" target="_blank" rel="noopener" aria-label="Trustpilot" data-cursor><img src="/media/badges/badge-trustpilot.png" alt="Trustpilot &ndash; 5 star rating" loading="lazy"></a>
      </div>
    </div>
    <div class="footer-grid">
      <div class="footer-brand">
        <p class="logo" style="font-size:22px;"><img class="logo-mark" src="/media/dws-logo-icon.png" alt="" aria-hidden="true"><span class="logo-text">Design World Studio</span></p>
        <p>An AI &amp; software development studio building intelligent digital products for ambitious businesses. Automate. Build. Scale.</p>
        <a class="btn btn-primary" style="margin-top:32px;" data-route="contact" data-cursor><span>Start a Project →</span></a>
        <div class="footer-socials">
          <a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a>
          <a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Dribbble" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M4 9.5c4 1.4 9 1.4 15.5.3M3.2 14.8c5-1 10.8-.2 14.8 2.4M9 3.3c3 4.2 5 9 5.4 17.2"/></svg></a>
          <a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <label>Services</label>
        <ul>
          <li><a data-route="website-development">Website Development</a></li>
          <li><a data-route="mobile-app-development">Mobile App Development</a></li>
          <li><a data-route="web-app-development">Web App Development</a></li>
          <li><a data-route="ai-automation">AI Automation</a></li>
          <li><a data-route="ai-agent">AI Agents</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <label>Solutions</label>
        <ul>
          <li><a data-route="ai-chatbot">AI Chatbots</a></li>
          <li><a data-route="real-estate-software">Real Estate Software</a></li>
          <li><a data-route="learning-management-system">Learning Management Systems</a></li>
          <li><a data-route="ai-powered-software-development">AI-Powered Software</a></li>
          <li><a data-route="seo">SEO</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <label>Studio</label>
        <ul>
          <li><a data-route="about">About</a></li>
          <li><a data-route="process">Process</a></li>
          <li><a data-route="work">Portfolio</a></li>
          <li><a data-route="case-studies">Case Studies</a></li>
          <li><a data-route="blog">Blog</a></li>
          <li><a data-route="contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <label>Contact Us</label>
        <div class="footer-contact">
          <div class="footer-contact-item">
            <span class="footer-contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
            <span class="footer-contact-body"><a href="tel:+14753150205" data-cursor>+1 475 315-0205</a><small>Mon&ndash;Fri, 9am&ndash;6pm ET</small></span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg></span>
            <span class="footer-contact-body"><a href="mailto:Hello@designworldstudio.com" data-cursor>Hello@designworldstudio.com</a><small>Replies within one business day</small></span>
          </div>
          <div class="footer-contact-item">
            <span class="footer-contact-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
            <span class="footer-contact-body"><span>30 Old Kings Highway South #1067</span><small>Darien, CT 06820, United States</small></span>
          </div>
        </div>
      </div>
    </div>
    <div class="hairline"></div>
    <div class="footer-bottom">
      <p id="year"></p>
      <div class="footer-bottom-links">
        <a href="mailto:hello@designworldstudio.com">hello@designworldstudio.com</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </div>
</footer>`;

export const DYNAMIC_MOUNTS = `<div id="portfolioPostsMount"></div>
<div id="blogPostsMount"></div>`;


export const PF_SOURCES = `<div id="pfSourceWeb" style="display:none"><div class="pf3d" data-pf data-pf-start="2">
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
  </div></div>
<div id="pfSourceIos" style="display:none"><div class="pf3d pf3d-phone" data-pf data-pf-start="2">
    <div class="pf3d-floor"></div>
    <div class="pf3d-stage"><div class="pf3d-track"><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/11ebe7ae8bc5.webp" alt="Second Line iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">Communications</span><h3>Second Line</h3><p>A second phone number with unlimited calling and StoreKit subscriptions handled in-app.</p></div></article><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/0a4a498cf380.webp" alt="Circle iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">Social</span><h3>Circle</h3><p>Group and personal feeds with stories, live reactions, and threaded comments.</p></div></article><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/c2cfd560898a.webp" alt="Gather iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">Events</span><h3>Gather</h3><p>Event invites with RSVP, host notes, and one-tap sync to Apple Calendar.</p></div></article><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/ef64413ec82a.webp" alt="Stillpoint iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">Health &amp; Wellness</span><h3>Stillpoint</h3><p>Guided meditation and sleep sessions, synced to HealthKit mindful minutes.</p></div></article><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/8c91047889d1.webp" alt="Fleetline iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">eCommerce</span><h3>Fleetline</h3><p>Product catalogue, loyalty points, and QR authenticity checks with one-tap reorder.</p></div></article><article class="pf3d-card"><div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen"><img class="ph3d-shot" src="/media/de24fa02498d.webp" alt="Arena iOS app screen" loading="lazy" decoding="async"></div><span class="ph3d-glare"></span></div></div><div class="pf3d-meta"><span class="pf3d-tag">Gaming</span><h3>Arena</h3><p>Player profiles, daily streaks, and rewards backed by Game Center leaderboards.</p></div></article></div></div>
    <div class="pf3d-ui">
      <button type="button" class="pf3d-nav" data-pf-prev aria-label="Previous project" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></button>
      <div class="pf3d-dots"></div>
      <button type="button" class="pf3d-nav" data-pf-next aria-label="Next project" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>
    <p class="pf3d-hint">Drag &nbsp;·&nbsp; Click a card &nbsp;·&nbsp; ← →</p>
  </div></div>
<div id="pfSourceRealestate" style="display:none"><div class="pf3d" data-pf data-pf-start="2">
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
  </div></div>`;
