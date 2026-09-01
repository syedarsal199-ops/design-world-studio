window.__bootSite = function(){

(function(){
  "use strict";
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var TITLES = {
    'home': "Design World Studio — Building the Future with AI & Technology",
    'services': "Services — Design World Studio",
    'website-development': "Website Development — Design World Studio",
    'mobile-app-development': "Mobile App Development — Design World Studio",
    'web-app-development': "Web App Development — Design World Studio",
    'ai-automation': "AI Automation — Design World Studio",
    'ai-chatbot': "Smart Chatbot Development — Design World Studio",
    'ai-agent': "AI Agent — Design World Studio",
    'seo': "SEO — Design World Studio",
    'mvp-development': "MVP Development — Design World Studio",
    'real-estate-software': "Real Estate Custom Software — Design World Studio",
    'learning-management-system': "Learning Management System — Design World Studio",
    'software-development': "Software Development — Design World Studio",
    'ai-powered-software-development': "AI-Powered Software Development — Design World Studio",
    'android-development': "Android Development — Design World Studio",
    'ios-development': "iOS Development — Design World Studio",
    'cross-platform-development': "Cross-Platform Development — Design World Studio",
    'ai-solutions': "AI Solutions — Design World Studio",
    'work': "Work — Design World Studio",
    'case-studies': "Case Studies — Design World Studio",
    'blog': "Blog — Design World Studio",
    'blog-admin': "Write a Post — Design World Studio",
    'process': "Process — Design World Studio",
    'about': "About — Design World Studio",
    'contact': "Contact — Design World Studio"
  };

  /* ---------- year ---------- */
  document.getElementById('year').textContent = '© ' + new Date().getFullYear() + ' Design World Studio. All rights reserved.';

  /* ---------- custom cursor ---------- */
  if (!window.matchMedia('(pointer: coarse)').matches) {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    var glow = document.getElementById('cursorGlow');
    var mx = window.innerWidth/2, my = window.innerHeight/2, rx = mx, ry = my, gx = mx, gy = my, scale = 1;
    var glowStarted = false;
    window.addEventListener('mousemove', function(e){
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate('+mx+'px,'+my+'px) translate(-50%,-50%)';
      if (!glowStarted && glow) {
        glowStarted = true;
        gx = mx; gy = my;
        glow.classList.add('active');
      }
    }, { passive:true });
    window.addEventListener('mouseover', function(e){
      scale = e.target.closest('[data-cursor]') ? 2.4 : 1;
    }, { passive:true });
    (function tick(){
      rx += (mx-rx)*.32; ry += (my-ry)*.32;
      ring.style.transform = 'translate('+rx+'px,'+ry+'px) translate(-50%,-50%) scale('+scale+')';
      if (glow) {
        /* a touch slower than the ring so the glow still feels like a soft
           light source rather than snapping exactly to the pointer, but
           close enough to read as attached to the cursor, not trailing it. */
        gx += (mx-gx)*.22; gy += (my-gy)*.22;
        glow.style.transform = 'translate('+gx+'px,'+gy+'px)';
      }
      requestAnimationFrame(tick);
    })();
  }

  /* ---------- header scroll + progress ---------- */
  var header = document.getElementById('siteHeader');
  var progressBar = document.getElementById('progress');
  window.addEventListener('scroll', function(){
    header.classList.toggle('scrolled', window.scrollY > 40);
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY/max)*100 : 0;
    progressBar.style.width = pct + '%';
  }, { passive:true });

  /* ---------- services mega-menu: opens instantly, closes with a grace
     delay so moving the mouse toward it (or pausing to read it) never
     causes it to snap shut before someone can click a service ---- */
  (function(){
    var item = document.querySelector('.nav-item-services');
    if (!item) return;
    var closeTimer = null;
    function open(){ clearTimeout(closeTimer); item.classList.add('mega-open'); }
    function scheduleClose(){ clearTimeout(closeTimer); closeTimer = setTimeout(function(){ item.classList.remove('mega-open'); }, 450); }
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', scheduleClose);
    item.addEventListener('focusin', open);
    item.addEventListener('focusout', function(e){
      if (!item.contains(e.relatedTarget)) scheduleClose();
    });
    item.querySelectorAll('.mega-menu-link, .related-pill').forEach(function(a){
      a.addEventListener('click', function(){ clearTimeout(closeTimer); item.classList.remove('mega-open'); });
    });
  })();

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobile-menu');
  burger.addEventListener('click', function(){
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  /* ---------- mobile menu: services accordion ---------- */
  menu.querySelectorAll('[data-mobile-toggle]').forEach(function(toggle){
    var key = toggle.getAttribute('data-mobile-toggle');
    var wrap = menu.querySelector('[data-mobile-submenu="' + key + '"]');
    var li = toggle.closest('li');
    if (!wrap || !li) return;
    toggle.addEventListener('click', function(){
      var open = li.classList.toggle('mobile-submenu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ---------- router ---------- */
  var ROUTES = ['home','services','website-development','mobile-app-development','web-app-development','ai-automation','ai-chatbot','ai-agent','seo','mvp-development','real-estate-software','learning-management-system','software-development','ai-powered-software-development','android-development','ios-development','cross-platform-development','ai-solutions','work','case-studies','blog','blog-admin','process','about','contact'];

  /* ==========================================================
     Blog: data-driven posts. Every post — the 5 built-in ones and
     any published later through the Blog Admin form — is a plain
     object in BLOG_POSTS. addPostToDOM() turns one object into a
     blog-index card plus a full routed page, and registers the
     route so the normal router picks it up like any other page.
     This is what makes the blog editable without touching markup.
     ========================================================== */
  function slugify(s){
    return String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,60) || 'post';
  }
  function escapeHtml(s){
    return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function inlineFormat(s){
    return escapeHtml(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  }
  function parseBody(raw){
    var lines = String(raw || '').replace(/\r\n/g,'\n').split('\n');
    var blocks = [], para = [], list = null;
    function flushPara(){ if (para.length){ blocks.push({ t:'p', c: para.join(' ') }); para = []; } }
    function flushList(){ if (list){ blocks.push(list); list = null; } }
    lines.forEach(function(line){
      var t = line.trim();
      if (!t){ flushPara(); flushList(); return; }
      if (t.indexOf('## ') === 0){ flushPara(); flushList(); blocks.push({ t:'h2', c: t.slice(3).trim() }); return; }
      if (t.indexOf('- ') === 0){ flushPara(); if (!list) list = { t:'ul', items:[] }; list.items.push(t.slice(2).trim()); return; }
      flushList(); para.push(t);
    });
    flushPara(); flushList();
    return blocks;
  }
  function blocksToHtml(blocks){
    return (blocks || []).map(function(b){
      if (b.t === 'h2') return '<h2>' + inlineFormat(b.c) + '</h2>';
      if (b.t === 'ul') return '<ul>' + b.items.map(function(i){ return '<li>' + inlineFormat(i) + '</li>'; }).join('') + '</ul>';
      return '<p>' + inlineFormat(b.c) + '</p>';
    }).join('');
  }
  function estimateReadTime(blocks){
    var words = (blocks || []).reduce(function(n, b){
      if (b.t === 'ul') return n + b.items.join(' ').split(/\s+/).length;
      return n + String(b.c || '').split(/\s+/).length;
    }, 0);
    return Math.max(1, Math.round(words / 200)) + ' min read';
  }
  function formatDate(iso){
    if (!iso) return '';
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString('en-US', { month:'short', year:'numeric' });
  }
  function safeGet(key){ try { return localStorage.getItem(key); } catch(e){ return null; } }
  function safeSet(key, val){ try { localStorage.setItem(key, val); } catch(e){} }

  var BLOG_POSTS = [
    { slug:'ai-native-development', tag:'AI Strategy', date:'2026-08-01',
      title:'Why AI-Native Development Is Beating "AI Bolted On"',
      excerpt:'Most teams are still adding AI as a feature after the fact. The products winning right now were architected around it from day one — here’s what that actually looks like in practice.',
      related:{ label:'Explore AI Solutions', route:'ai-solutions' },
      body:[
        {t:'p', c:'Almost every software product now claims to have "AI features." Very few were actually built around AI from the start — and that difference shows up fast, in cost, reliability, and how much the product can actually do.'},
        {t:'h2', c:'Two very different starting points'},
        {t:'p', c:'"AI bolted on" usually means a team ships their product, then later wires a chatbot widget or a summarization button onto the side of it. The AI layer talks to the rest of the system through the same APIs a human user would use — it has no deeper access to data, workflows, or context than the UI does.'},
        {t:'p', c:'AI-native means the data model, permissions, and workflows are designed with an AI agent as a first-class user from day one. The model can see structured context, take real actions through internal functions rather than screen-scraping a UI, and its outputs are validated against the same business rules as a human-driven action.'},
        {t:'h2', c:'Where the difference actually shows up'},
        {t:'ul', items:[
          '**Reliability.** Bolted-on integrations break constantly when the underlying product changes. Native integrations are part of the same codebase and evolve together.',
          '**Depth of action.** A bolted-on chatbot can usually only answer questions. A native AI agent can actually execute multi-step workflows — booking, refunding, updating a record — because it was given real, scoped access to do so.',
          '**Cost over time.** Retrofitting AI into a rigid system usually means rebuilding large parts of the data layer anyway. Building it in from the start avoids that second rebuild entirely.'
        ]},
        {t:'h2', c:'What this looks like in a real build'},
        {t:'p', c:'In practice, we design three things before writing a line of AI-specific code: a clean internal API surface the model can call safely, an explicit permission boundary so the AI can’t do more than the business rules allow, and a fallback path for when the model is uncertain — because the goal is a system that degrades gracefully, not one that hallucinates its way into a bad customer outcome.'},
        {t:'p', c:'None of this requires a bigger team or a longer timeline than a traditional build. It requires making the AI a design constraint from the first architecture conversation, not a feature request that lands on an engineer’s desk six months after launch.'}
      ]
    },
    { slug:'ai-chatbot-roi', tag:'AI Chatbots', date:'2026-08-01',
      title:'The Real ROI of AI Chatbots vs. Traditional Support',
      excerpt:'"Replace your support team with AI" is a bad pitch, because it’s not usually true. Here’s the honest, narrower version — and where the real ROI actually comes from.',
      related:{ label:'Explore AI Chatbot Development', route:'ai-chatbot' },
      body:[
        {t:'p', c:'"Replace your support team with AI" is a bad pitch, because it’s not usually true. The honest version is narrower, and more useful: AI chatbots are excellent at absorbing volume, and human agents are still better at judgment calls — the ROI comes from routing correctly between the two.'},
        {t:'h2', c:'Where AI chatbots clearly win'},
        {t:'ul', items:[
          '**Repetitive, well-defined questions.** Order status, business hours, return policy, password resets — high-volume, low-ambiguity requests that don’t need a human’s judgment.',
          '**Availability.** A well-scoped chatbot answers instantly at 2am on a Sunday, when a support queue would otherwise sit unattended until morning.',
          '**Consistency.** The same policy question gets the same correct answer every time, without depending on which agent happens to be on shift.'
        ]},
        {t:'h2', c:'Where they still fall short'},
        {t:'ul', items:[
          '**Emotionally charged situations.** A frustrated customer with a billing dispute usually needs to feel heard by a person, not routed through a script.',
          '**Ambiguous, multi-factor decisions.** Anything requiring judgment against unwritten context — an exception to policy, a genuinely novel edge case — is still a human call.',
          '**Trust-sensitive moments.** High-stakes conversations, like a large refund or a legal question, are where an all-AI experience actively erodes trust if handled wrong.'
        ]},
        {t:'h2', c:'How we actually scope the ROI'},
        {t:'p', c:'Before building a chatbot, we tag a client’s last few months of support tickets by category and complexity. Usually 60-80% of ticket volume falls into a handful of repetitive categories a chatbot can fully resolve. That’s the real target — not "replace support," but "absorb the categories that are wasting a human agent’s time," and hand off cleanly the moment a conversation moves outside that scope.'},
        {t:'p', c:'Done this way, the ROI is concrete: measurable ticket deflection, faster first-response time on the tickets that remain, and a support team spending its time on the conversations that actually need a person.'}
      ]
    },
    { slug:'mvp-to-scale-architecture', tag:'Architecture', date:'2026-07-15',
      title:'From MVP to Scale: Architecting Your First Build for Growth',
      excerpt:'The MVP that has to be rewritten at 10,000 users was scoped wrong from the start. A few architectural decisions that cost nothing early and save everything later.',
      related:{ label:'Explore MVP Development', route:'mvp-development' },
      body:[
        {t:'p', c:'"Move fast and don’t worry about scale yet" is good advice for features. It’s bad advice for a handful of foundational decisions that are cheap to get right on day one and expensive to fix once real users depend on the system.'},
        {t:'h2', c:'Speed and future-proofing aren’t actually opposites'},
        {t:'p', c:'The instinct with an MVP is to skip anything that isn’t strictly needed to prove the idea. That’s correct for most decisions — but a small set of architectural choices don’t cost extra time to get right, they just require knowing which ones matter before you start writing code.'},
        {t:'h2', c:'The decisions worth getting right from day one'},
        {t:'ul', items:[
          '**Data model ownership.** Design your core entities so a single source of truth exists for each piece of data. Retrofitting this after multiple features have grown their own copies of the same data is one of the most expensive refactors we see.',
          '**Auth and permissions as a layer, not a patch.** Building role-based access as a first-class concept — even with just two roles at launch — avoids a painful rewrite when a third and fourth role inevitably show up.',
          '**An API boundary between frontend and backend.** Even for a single-team MVP, treating the backend as a real API rather than a set of page-specific queries means you can add a mobile app, a partner integration, or an AI agent later without a rewrite.',
          '**Environment and deploy discipline.** A staging environment and a repeatable deploy process take an afternoon to set up early and save weeks of firefighting once you have paying customers who notice downtime.'
        ]},
        {t:'h2', c:'What you can safely skip'},
        {t:'p', c:'Micro-services, elaborate caching layers, horizontal auto-scaling, and highly optimized database indexing are all things that can wait. They’re solvable problems once you have real traffic patterns to design around — solving them speculatively before launch usually means solving the wrong problem.'},
        {t:'p', c:'The goal isn’t to over-engineer an MVP. It’s to make the handful of decisions that are nearly free today and genuinely expensive later, and consciously defer everything else.'}
      ]
    },
    { slug:'seo-in-ai-search-era', tag:'SEO', date:'2026-07-15',
      title:'SEO in the Age of AI Search: What Actually Still Works',
      excerpt:'AI-generated answers and chat-based search now sit in front of a large share of searches. That changes what SEO should prioritize, not whether SEO still matters.',
      related:{ label:'Explore SEO Services', route:'seo' },
      body:[
        {t:'p', c:'AI-generated answers and chat-based search now sit in front of a large share of searches before a user ever reaches a list of blue links. That’s a real shift — but it changes what SEO should prioritize, not whether SEO still matters.'},
        {t:'h2', c:'What’s actually changed'},
        {t:'ul', items:[
          '**Fewer clicks on informational queries.** When an AI answer fully satisfies a simple question, fewer users click through — which shifts the value of ranking for those queries downward.',
          '**AI answer engines cite sources.** Being cited inside an AI-generated answer is a new, meaningful visibility channel — separate from, but related to, traditional rankings.',
          '**Structured, well-organized content is easier for models to parse and cite accurately.** Clear headings, direct answers near the top of a page, and well-marked-up data all make a page more likely to be pulled into an AI answer correctly.'
        ]},
        {t:'h2', c:'What hasn’t changed'},
        {t:'ul', items:[
          '**Technical fundamentals still matter.** Site speed, crawlability, and clean structured data remain the foundation both traditional rankings and AI citation depend on.',
          '**Transactional and local intent still route to real sites.** Someone searching to book a service or buy a specific product still needs to land on an actual business’s page — AI overviews rarely fully satisfy that intent on their own.',
          '**Genuine topical authority still compounds.** Thin, keyword-stuffed content performs worse than ever; well-researched, genuinely useful content performs better than ever, in both traditional and AI-driven discovery.'
        ]},
        {t:'h2', c:'Where to actually spend effort in 2026'},
        {t:'p', c:'Prioritize the queries where a click still matters most — high-intent, transactional, and local searches — over purely informational queries an AI answer will likely intercept anyway. Structure content so both a search crawler and a language model can parse it cleanly: clear headers, direct answers, and legitimate structured data. And keep investing in the fundamentals that never stopped mattering — a fast, well-built site is still the baseline every ranking system, human or AI, is evaluating against.'}
      ]
    },
    { slug:'choosing-mobile-app-approach', tag:'Mobile', date:'2026-07-15',
      title:'Native, Cross-Platform, or AI-Assisted: Choosing Your Mobile Stack',
      excerpt:'There’s no universally "best" mobile stack — only the right choice for a given team, timeline, and feature set. The framework we actually use when scoping a client’s build.',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      body:[
        {t:'p', c:'There’s no universally "best" mobile stack — only the right choice for a given team, timeline, and feature set. Here’s the framework we actually use when scoping a client’s mobile build.'},
        {t:'h2', c:'Choose native (Swift / Kotlin) when...'},
        {t:'ul', items:[
          'The app leans heavily on platform-specific capabilities — deep camera control, ARKit/ARCore, complex background processing, or tight OS integration.',
          'Performance is a core differentiator, not a nice-to-have — real-time graphics, heavy on-device computation, or latency-sensitive interactions.',
          'You’re building for one platform first and can justify a second, fully separate codebase later.'
        ]},
        {t:'h2', c:'Choose cross-platform (React Native / Flutter) when...'},
        {t:'ul', items:[
          'You need iOS and Android from a single codebase, with one engineering team and one release cadence.',
          'The app is primarily UI, data, and workflow-driven rather than dependent on deep native APIs.',
          'Time-to-market across both platforms matters more than squeezing out the last few percent of native performance.'
        ]},
        {t:'h2', c:'Where AI-assisted development fits in'},
        {t:'p', c:'This isn’t a fourth stack — it’s a way of building faster inside whichever stack you choose. AI-assisted development means using AI tooling to accelerate boilerplate, generate and refactor components, and catch bugs earlier in the review cycle, while a human engineering team still owns the architecture and the judgment calls. Teams using it well are shipping meaningfully faster without changing which platform choice is right for the product.'},
        {t:'h2', c:'The actual decision framework'},
        {t:'p', c:'We start from the feature list, not a technology preference: if more than one or two features genuinely require deep native access, native wins even with two codebases. If the app is largely CRUD, content, and workflow-driven, cross-platform almost always wins on speed and maintenance cost. Either way, AI-assisted tooling gets layered in during implementation to compress the timeline — it’s an accelerant, not a stack decision in itself.'}
      ]
    }
  ];

  function buildPostCardHtml(post){
    return '<div class="blog-card reveal" data-route="' + post.route + '" data-cursor>' +
      '<div class="blog-meta"><span class="blog-tag">' + escapeHtml(post.tag) + '</span><span class="blog-date">' + escapeHtml(formatDate(post.date)) + ' · ' + escapeHtml(post.readTime) + '</span></div>' +
      '<h3>' + escapeHtml(post.title) + '</h3>' +
      '<p>' + escapeHtml(post.excerpt) + '</p>' +
      '<span class="blog-read">Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>' +
      '</div>';
  }
  function buildPostPageHtml(post){
    var relatedPill = post.related ? '<a class="related-pill" data-route="' + post.related.route + '" data-cursor>' + escapeHtml(post.related.label) + ' →</a>' : '';
    return '<div class="page" id="route-' + post.route + '">' +
      '<section class="page-hero" style="padding-bottom:48px;"><div class="grid-overlay"></div><div class="container page-hero-inner">' +
        '<div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="blog">Blog</a><span>/</span><span>' + escapeHtml(post.tag) + '</span></div>' +
        '<span class="kicker">' + escapeHtml(post.tag) + '</span>' +
        '<h1 class="page-title"><span class="reveal-line"><span>' + escapeHtml(post.title) + '</span></span></h1>' +
        '<div class="article-meta"><span class="blog-date">' + escapeHtml(formatDate(post.date)) + ' · ' + escapeHtml(post.readTime) + '</span></div>' +
      '</div></section>' +
      '<section class="bg-alt"><div class="container">' +
        '<div class="article-body">' + blocksToHtml(post.body) + '</div>' +
        '<div class="related-row reveal" style="margin-top:56px;">' + relatedPill + '<a class="related-pill" data-route="blog" data-cursor>Back to Blog →</a></div>' +
      '</div></section>' +
      '<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Let’s Build</span><h2>Have a project like this in mind?</h2><p>Tell us what you’re building — we’ll show you how we’d approach it.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I’m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>' +
      '</div>';
  }
  function addPostToDOM(post, prepend){
    var baseSlug = slugify(post.slug || post.title);
    var slug = baseSlug, n = 2;
    while (ROUTES.indexOf('blog-' + slug) !== -1) { slug = baseSlug + '-' + n; n++; }
    post.slug = slug;
    post.route = 'blog-' + slug;
    if (!post.readTime) post.readTime = estimateReadTime(post.body);
    ROUTES.push(post.route);
    TITLES[post.route] = post.title + ' — Design World Studio Blog';
    var grid = document.getElementById('blogGrid');
    if (grid) grid.insertAdjacentHTML(prepend ? 'afterbegin' : 'beforeend', buildPostCardHtml(post));
    var mount = document.getElementById('blogPostsMount');
    if (mount) mount.insertAdjacentHTML('beforeend', buildPostPageHtml(post));
    return document.getElementById('route-' + post.route);
  }
  if (!window.__blogPostsRegistered) {
    window.__blogPostsRegistered = true;
    BLOG_POSTS.forEach(function(p){ addPostToDOM(p, false); });
    try {
      var savedPosts = JSON.parse(safeGet('dws_custom_posts') || '[]');
      savedPosts.forEach(function(p){ addPostToDOM(p, true); BLOG_POSTS.unshift(p); });
    } catch(e){}
  }

  function currentRoute(){
    var p = location.pathname.replace(/^\/+|\/+$/g,'');
    if (!p) return 'home';
    return ROUTES.indexOf(p) !== -1 ? p : (document.body.getAttribute('data-page') || 'home');
  }
  function replayPageHero(routeEl){
    if (!routeEl || reducedMotion) return;
    var targets = routeEl.querySelectorAll('.page-hero .reveal-line span, .page-hero .page-sub, .page-hero .kicker, .page-hero .breadcrumb');
    targets.forEach(function(el){
      el.style.animation = 'none';
      /* eslint-disable-next-line no-unused-expressions */
      el.offsetHeight;
      el.style.animation = '';
    });
  }
  function navigate(pushHash){
    var route = currentRoute();
    var activeEl = null;
    ROUTES.forEach(function(r){
      var el = document.getElementById('route-'+r);
      if (el) el.classList.toggle('active', r === route);
      if (el && r === route) activeEl = el;
    });
    document.querySelectorAll('[data-route]').forEach(function(a){
      a.classList.toggle('active', a.getAttribute('data-route') === route);
    });
    document.title = TITLES[route] || TITLES.home;
    window.scrollTo({ top: 0, behavior: 'auto' });
    burger.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
    menu.querySelectorAll('.mobile-submenu-open').forEach(function(li){ li.classList.remove('mobile-submenu-open'); });
    menu.querySelectorAll('[data-mobile-toggle]').forEach(function(t){ t.setAttribute('aria-expanded', 'false'); });
    replayPageHero(activeEl);
  }
  function closeMegaMenu(){
    var nis = document.querySelector('.nav-item-services');
    if (!nis) return;
    nis.classList.remove('mega-open');
    if (document.activeElement && nis.contains(document.activeElement) && document.activeElement.blur) {
      document.activeElement.blur();
    }
    nis.classList.add('mega-dismissed');
  }
  (function(){
    var nis = document.querySelector('.nav-item-services');
    if (!nis) return;
    // re-arm the menu once the pointer genuinely leaves and returns
    nis.addEventListener('mouseleave', function(){ nis.classList.remove('mega-dismissed'); });
  })();
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-route]');
    if (!el) return;
    e.preventDefault();
    if (el.closest('.nav-item-services')) closeMegaMenu();
    var route = el.getAttribute('data-route');
    window.dispatchEvent(new CustomEvent('site:navigate', { detail: { route: route } }));
  });
  navigate();

  /* ---------- scroll reveal ---------- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  /* ---------- services grids ---------- */
  var SERVICES = [
    ['01','Website Design & Development','Cinematic, high-performance websites engineered to convert — sub-second load times, pixel-level craft, and copy that sells while you sleep.', '#4EA83A','#4FD1FF', ['Next.js','CMS','SEO-Ready']],
    ['02','Web App Development','Complex SaaS platforms, dashboards, and internal tools engineered to scale — real-time data, secure by default, built for reliability under real load.', '#4FD1FF','#C77DFF', ['SaaS','Real-Time','Dashboards']],
    ['03','Mobile App Development','Native-grade iOS and Android experiences designed for speed, retention, and 5-star reviews — shipped from a single, maintainable codebase.', '#4FD1FF','#4EA83A', ['iOS','Android','React Native']],
    ['04','AI Automation','We eliminate manual workflows with intelligent automation that runs your operations around the clock — fewer spreadsheets, faster ops, lower headcount cost.', '#D4B26A','#4EA83A', ['Workflows','Integrations','Zapier/Make']],
    ['05','Smart Chatbot Development','Conversational AI trained on your business data — support, sales, and onboarding handled instantly, in your brand voice, 24/7.', '#C77DFF','#4FD1FF', ['GPT-4/5','Live Chat','CRM Sync']],
    ['06','AI Agent','Autonomous agents that reason, decide, and take action across your tools — not just chat, real work done without a human in the loop.', '#FF6B6B','#D4B26A', ['Tool Use','Reasoning','Automation']],
    ['07','SEO','Technical and content SEO engineered for visibility, authority, and compounding organic growth — built to outlast algorithm updates.', '#FFA94D','#4EA83A', ['Technical SEO','Content','Analytics']],
    ['08','MVP Development','From idea to launch-ready product in weeks, not quarters — validated, investable, and architected to iterate fast once you have users.', '#4EA83A','#C77DFF', ['Rapid Build','Investor-Ready','Scalable']],
    ['09','Real Estate Custom Software','Property management, listing, and CRM platforms purpose-built for brokerages and operators — not a generic template stretched to fit.', '#4FD1FF','#FFA94D', ['Listings','CRM','Booking']],
    ['10','Learning Management System','Scalable LMS platforms with rich course delivery, analytics, and AI-assisted learning paths that keep completion rates high.', '#D4B26A','#FF6B6B', ['Courses','Analytics','AI Paths']],
    ['11','Software Development','Full-stack, enterprise-grade software engineered for reliability, security, and scale — built to pass audits, not just demos.', '#C77DFF','#4EA83A', ['Full-Stack','Security','Cloud']],
    ['12','AI-Powered Software Development','Software embedded with machine intelligence at its core, from day one — smarter defaults, predictive features, no bolted-on AI.', '#FF6B6B','#4FD1FF', ['ML Models','Prediction','APIs']],
    ['13','Android Development','Performance-tuned native Android applications built with modern architecture standards — fast on entry-level devices, not just flagships.', '#4EA83A','#D4B26A', ['Kotlin','Jetpack','Play Store']],
    ['14','iOS Development','Elegant, App Store-ready iOS applications crafted with Apple’s latest frameworks — the kind of polish reviewers actually notice.', '#4FD1FF','#C77DFF', ['Swift','SwiftUI','App Store']],
    ['15','Cross-Platform Development','One codebase, every platform — without compromising on native feel, performance, or the details that make an app feel handcrafted.', '#FFA94D','#4FD1FF', ['Flutter','React Native','One Codebase']],
    ['16','AI Solutions','End-to-end AI strategy and implementation — from data pipelines to production-grade models that actually ship and stay reliable.', '#C77DFF','#4EA83A', ['Strategy','Data Pipelines','MLOps']]
  ];
  var SERVICE_ROUTES = {
    'Website Design & Development': 'website-development',
    'Web App Development': 'web-app-development',
    'Mobile App Development': 'mobile-app-development',
    'AI Automation': 'ai-automation',
    'Smart Chatbot Development': 'ai-chatbot',
    'AI Agent': 'ai-agent',
    'SEO': 'seo',
    'MVP Development': 'mvp-development',
    'Real Estate Custom Software': 'real-estate-software',
    'Learning Management System': 'learning-management-system',
    'Software Development': 'software-development',
    'AI-Powered Software Development': 'ai-powered-software-development',
    'Android Development': 'android-development',
    'iOS Development': 'ios-development',
    'Cross-Platform Development': 'cross-platform-development',
    'AI Solutions': 'ai-solutions'
  };
  document.querySelectorAll('.js-services').forEach(function(grid){
    var limit = grid.hasAttribute('data-limit') ? parseInt(grid.getAttribute('data-limit'), 10) : SERVICES.length;
    var cards = [];
    SERVICES.slice(0, limit).forEach(function(s, i){
      var el = document.createElement('div');
      el.className = 'service-card' + (i === 0 ? ' spotlight' : '');
      el.style.setProperty('--sv', s[3]);
      el.style.setProperty('--sv2', s[4]);
      var route = SERVICE_ROUTES[s[1]];
      if (route) { el.setAttribute('data-route', route); el.setAttribute('data-cursor', ''); el.style.cursor = 'pointer'; }
      var tags = (s[5] || []).map(function(t){ return '<span>'+t+'</span>'; }).join('');
      el.innerHTML =
        '<div class="service-tint"></div>' +
        '<div class="service-body">' +
          '<div class="service-top"><span class="service-num">'+s[0]+'</span><span class="service-arrow">→</span></div>' +
          '<div><h3>'+s[1]+'</h3><p>'+s[2]+'</p><div class="service-tags">'+tags+'</div></div>' +
        '</div>';
      grid.appendChild(el);
      cards.push(el);
    });

    /* ---- auto-rotating spotlight, same living behavior as the hero ---- */
    if (cards.length > 1 && !reducedMotion) {
      var activeIdx = 0;
      var rotateSpotlight = function(){
        cards[activeIdx].classList.remove('spotlight');
        activeIdx = (activeIdx + 1) % cards.length;
        cards[activeIdx].classList.add('spotlight');
      };
      var spotlightTimer = setInterval(rotateSpotlight, 2800);
      grid.addEventListener('mouseenter', function(){ clearInterval(spotlightTimer); }, true);
      grid.addEventListener('mouseleave', function(){ spotlightTimer = setInterval(rotateSpotlight, 2800); }, true);
    }
  });

  /* ---------- portfolio grids ---------- */
  var PROJECTS = [
    { name:'ZipTrip', category:'AI-Powered Travel App', stat:'AI trip planning across flights, hotels, and cruises',
      tint:'linear-gradient(135deg, rgba(0,150,205,.48), rgba(6,24,66,.6))',
      tags:['AI Travel','Mobile App','iOS & Android'],
      img:'/media/96a794cf673e.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/55dad813ced5.webp', 'Splash &amp; brand'],
        ['/media/565a2dc33311.webp', 'Onboarding &mdash; AI trip planning'],
        ['/media/17b123adec8d.webp', 'Onboarding &mdash; book everything'],
        ['/media/db92996a9284.webp', 'Onboarding &mdash; plan less, save more'],
        ['/media/429e7c41bc70.webp', 'Sign in &amp; social auth'],
        ['/media/6fa3230cebfb.webp', 'OTP verification']
      ],
      details:[
        ['/media/37df21b731f7.webp', 'Travel-style personalisation', 'Travellers pick from layered preference tags &mdash; trip style, group type, and terrain &mdash; which seed the AI&rsquo;s itinerary suggestions from the very first session.'],
        ['/media/2a1fc165165c.webp', 'Destination discovery', 'Curated destination cards with real photography, ranked by the traveller&rsquo;s stated preferences rather than a generic popularity list.'],
        ['/media/2b6be0c24a0d.webp', 'Frictionless entry', 'Apple, Google, email, or continue-as-guest &mdash; because forcing an account before anyone has seen the value is the fastest way to lose a first-time user.']
      ],
      studioNote:'It was a great experience working with the ZipTrip team. We designed and developed their AI-powered mobile app together, and we are continuing to build out further AI features with them.',
      overview:'ZipTrip is an AI travel companion that turns a vague idea — a week off, a rough budget, a preference for mountains over beaches — into a bookable itinerary. We designed and built the mobile app end to end, from the brand and onboarding through to the AI planning experience and the booking flows behind it.',
      challenge:'Travel planning is fragmented across a dozen tabs: flights in one place, hotels in another, activities somewhere else, and no single view of what the trip actually costs. The brief was to collapse that into one conversation-led flow that still ends in a real, bookable itinerary — and to do it in an onboarding short enough that a first-time user reaches value before losing patience.',
      solutionPoints:[
        'A three-screen onboarding that captures travel style, group type, and terrain preference in under a minute, seeding the AI with enough signal to make its first suggestions genuinely personal rather than generic.',
        'An AI planning layer that assembles complete itineraries — flights, hotels, cruises, and activities — against the traveller’s stated budget and preferences, with everything bookable inside the app.',
        'A low-friction account model offering Apple, Google, email, and guest entry, so nobody is blocked behind a signup form before they have seen what the product does.',
        'A design system built for both platforms from one codebase, with the brand’s gradient identity carried through splash, onboarding, and every subsequent screen.'
      ],
      results:[ ['3', 'Taps to First Itinerary'], ['4', 'Booking Categories in One Flow'], ['iOS + Android', 'Shipped From One Codebase'] ]
    },
    { name:'CrewIQ', category:'AI-Powered Workforce App', stat:'AI job matching, verified clock-in, and transparent pay',
      tint:'linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6))',
      tags:['AI Matching','Workforce','iOS & Android'],
      img:'/media/f0b71b98daf7.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/581b5c5d8e8f.webp', 'Splash &amp; brand'],
        ['/media/e5903790d9fd.webp', 'Crew log-in'],
        ['/media/b4f76d7d8de6.webp', 'AI onboarding &mdash; skills &amp; certs'],
        ['/media/3abc9a2cb9d4.webp', 'Smart Match job feed'],
        ['/media/a7df439d80c8.webp', 'Smart clock-in verification'],
        ['/media/c4c049d82cba.webp', 'Timesheet &amp; payout'],
        ['/media/c9cd3b759c5b.webp', 'Crew Assistant']
      ],
      details:[
        ['/media/44e8a7656170.webp', 'Smart Match job feed', 'Every open job is scored against the crew member&rsquo;s skills, certifications, and drive radius, then ranked with the urgent ones surfaced first. Pay and distance sit on the card, so accepting or skipping is a one-glance decision.'],
        ['/media/b9b826ff7b2a.webp', 'Verified clock-in', 'Clock-in requires two independent proofs: a GPS fix inside the job-site geofence, and a badge photo matched against the profile on file. It removes buddy-punching without making an honest crew member jump through hoops.'],
        ['/media/abb3b2b5b570.webp', 'Transparent pay', 'Hours, jobs, average rate, and the exact payout date, broken down per client. The single most common support question in staffing is &ldquo;when do I get paid&rdquo; &mdash; this screen answers it before anyone has to ask.']
      ],
      studioNote:'It was a great experience working with the CrewIQ team. We designed and developed their AI-powered mobile app together, and we are continuing to build out further AI features with them.',
      overview:'CrewIQ is the AI workforce platform behind Varsobia Staffing Services — an app that matches field crews to property preservation, janitorial, and facilities jobs, verifies they are actually on site, and shows them exactly what they will be paid and when. We designed and built the mobile app end to end.',
      challenge:'Field staffing runs on phone calls, group texts, and paper timesheets. Dispatchers spend their day matching people to jobs by memory, crews chase managers to find out when they are getting paid, and nobody can prove who was on site without taking someone at their word. The brief was to replace all three of those with one app a crew member can run from a phone between jobs.',
      solutionPoints:[
        'A conversational onboarding that captures work types, certifications, and availability in five short steps — the profile data that makes every later match meaningful, gathered without a twenty-field form.',
        'An AI matching engine that scores open jobs against each crew member’s skills, certs, and drive radius, surfacing ranked matches with pay and distance on the card so accepting takes one tap.',
        'Verified clock-in combining a GPS geofence check with a badge-photo face match, giving clients defensible proof of attendance and removing buddy-punching from the process.',
        'Live timesheets with an estimated payout, a per-client breakdown, and a named deposit date, plus a Crew Assistant that answers pay, PTO, and shift questions in natural language.'
      ],
      results:[ ['5', 'Steps to a Complete Profile'], ['2-Factor', 'On-Site Verification'], ['iOS + Android', 'Shipped From One Codebase'] ]
    },
    { name:'Fovera', category:'AI-Powered Food Compliance App', stat:'AI-checked allergen data, recipe costing, and label approval in one app',
      tint:'linear-gradient(135deg, rgba(245,166,35,.42), rgba(10,13,19,.6))',
      tags:['Food Compliance','AI Allergen Data','iOS & Android'],
      img:'/media/c579cc61a782.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/bf7cf0d2ddae.webp', 'Splash &amp; brand'],
        ['/media/284a8b312417.webp', 'Home dashboard'],
        ['/media/af47874a5cd8.webp', 'Product &amp; allergen list'],
        ['/media/6a3f5ca29d19.webp', 'Fovera AI']
      ],
      details:[
        ['/media/7923a4865e1a.webp', 'At-a-glance compliance', 'The home screen surfaces active products, recipes waiting on review, open compliance warnings, and remaining AI credits in one glance &mdash; so a bakery owner starts the day knowing exactly what needs attention before anything slips.'],
        ['/media/ed4c4e6749f2.webp', 'Every product, allergen-tagged', 'Each product carries its allergen tags and review status &mdash; active, in review, or blocked &mdash; right in the list. Nothing ships to a label without the allergen data behind it being checked first.'],
        ['/media/071665d95d92.webp', 'Fovera AI on ingredient risk', 'Ask Fovera AI whether an ingredient is safe for a given label claim and it answers from the recipe&rsquo;s actual ingredient data, then suggests a compliant substitute and offers to re-run the recipe costing on the spot.']
      ],
      studioNote:'It was a great experience with the Fovera team. We designed and developed their AI-powered mobile app together, and we are continuing to build out further AI features with them.',
      overview:'Fovera is the compliance platform behind bakeries and food producers like Bramble Bakes &mdash; an app that takes a recipe from ingredient list to an approved, allergen-checked label without a spreadsheet or a food-safety consultant in the loop. We designed and built the mobile app end to end.',
      challenge:'Allergen and nutrition compliance in food production is normally tracked across spreadsheets, supplier spec sheets, and someone&rsquo;s memory of what changed in the last recipe revision. A single missed allergen note is a recall risk, and the review process that catches it is slow enough that recipes sit blocked for days. The brief was to put that whole check &mdash; ingredient by ingredient &mdash; on a phone, backed by AI rather than a manual read-through.',
      solutionPoints:[
        'A home dashboard that surfaces active products, recipes still in review, open compliance warnings, and remaining AI credits the moment the app opens, so nothing waits to be discovered.',
        'A product list where every item carries its own allergen tags and a clear status &mdash; active, in review, or blocked &mdash; instead of a compliance spreadsheet nobody has open.',
        'Fovera AI, an assistant that checks a proposed ingredient against a recipe&rsquo;s existing allergen profile, flags a conflict in plain language, and suggests a compliant substitute on request.',
        'A recipe-costing flow that re-runs automatically the moment an ingredient changes, so a substitution never leaves the cost sheet out of date.'
      ],
      results:[ ['128', 'Active Products Tracked'], ['AI-Checked', 'Allergen &amp; Nutrition Data'], ['iOS + Android', 'Shipped From One Codebase'] ]
    },
    { name:'Unbroken Investing', category:'AI-Powered Investment Platform', stat:'AI-matched deal flow with real-time underwriting and risk analysis',
      tint:'linear-gradient(135deg, rgba(46,204,140,.42), rgba(6,12,10,.6))',
      tags:['AI Investing','Real Estate','iOS & Android'],
      img:'/media/0f4b9b9f70de.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/ec2eebbf5e51.webp', 'Splash &amp; brand'],
        ['/media/af86614cc5d4.webp', 'Log in'],
        ['/media/2229d8255052.webp', 'Create account'],
        ['/media/d8bb984ca3c7.webp', 'Home dashboard'],
        ['/media/cf7fd6e8ac49.webp', 'Deals pipeline'],
        ['/media/85a9c2610509.webp', 'AI Investment Assistant'],
        ['/media/a4d4463e3fa6.webp', 'Investor matchmaking']
      ],
      details:[
        ['/media/5caabfc25638.webp', 'Portfolio at a glance', 'Portfolio AUM, average IRR, and active deal count sit at the top of the home screen, with recommended deals and AI-surfaced opportunities ranked underneath &mdash; an investor opens the app already knowing where things stand.'],
        ['/media/41dd747ffd47.webp', 'AI Investment Assistant', 'Ask the assistant whether a deal is worth reviewing and it answers against the investor&rsquo;s own portfolio &mdash; AUM, target IRR, and preferred markets &mdash; then returns target IRR, cash-on-cash, and minimum investment for that specific deal.'],
        ['/media/add933d42e07.webp', 'Underwriting risk, surfaced not buried', 'Every deal carries its primary underwriting risks in plain language &mdash; an occupancy gap, a renovation assumption, a refinancing exposure &mdash; alongside a portfolio-alignment score, so the risk a spreadsheet would hide is the first thing an investor sees.'],
        ['/media/ed5a3627a6e6.webp', 'AI-matched co-investors', 'The assistant matches investors who share the same criteria &mdash; the same market, the same deal size, the same asset class &mdash; and surfaces the strongest match first, turning a cold network into a warm introduction.']
      ],
      studioNote:'It was a great experience with the Unbroken Investing team. We designed and developed their AI-powered mobile app together, and we are continuing to build out further AI features with them.',
      overview:'Unbroken Investing is a private deal-flow platform for accredited investors &mdash; an app that surfaces AI-matched real-estate opportunities, underwrites them in real time, and connects investors with aligned co-investors. We designed and built the mobile app end to end.',
      challenge:'Private real-estate deal flow moves through email threads, PDF decks, and a sponsor&rsquo;s personal network &mdash; which means the deals an investor sees depend more on who they know than on what actually fits their portfolio, and the underwriting behind each one usually arrives as a wall of numbers with the real risk buried somewhere on page twelve. The brief was to replace that with a mobile-first pipeline where matching, underwriting, and networking all happen against the investor&rsquo;s own stated criteria.',
      solutionPoints:[
        'A home dashboard leading with portfolio AUM, average IRR, and active deal count, with recommended deals and AI-surfaced opportunities ranked directly underneath.',
        'An automated deal pipeline, filterable by asset class, that scores every listing against expected IRR, minimum investment, and risk rating before an investor opens it.',
        'An AI Investment Assistant that answers deal-specific questions against the investor&rsquo;s own portfolio profile and surfaces primary underwriting risks in plain language rather than in a footnote.',
        'An investor-matchmaking layer that connects members sharing identical criteria &mdash; market, deal size, asset class &mdash; ranked by AI match score.'
      ],
      results:[ ['18.0%', 'Target IRR, Top Deal'], ['94%', 'AI Portfolio-Fit Match'], ['iOS + Android', 'Shipped From One Codebase'] ]
    },
    { name:'YouDJ Mixer', category:'DJ &amp; Music Mixing App', stat:'A real dual-deck mixer anyone can pick up in minutes',
      tint:'linear-gradient(135deg, rgba(245,140,35,.42), rgba(13,10,10,.6))',
      tags:['DJ App','Music','iOS & Android'],
      img:'/media/f77ed8529fad.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/42c03859b6aa.webp', 'Everybody can be a DJ'],
        ['/media/e7a911e8ba68.webp', 'The most fun &amp; easy DJ app'],
        ['/media/167825f5c571.webp', 'Mix like a pro, no skills needed'],
        ['/media/54c650707de0.webp', 'All must-have DJ tools'],
        ['/media/760ad912684e.webp', '3000+ songs to rock the party']
      ],
      details:[
        ['/media/dd2232c16bef.webp', 'A real dual-deck mixer', 'Two full decks, live waveforms, and a working crossfader &mdash; the same mental model a DJ controller uses, rebuilt to run entirely on a phone screen with a thumb instead of a mixer.'],
        ['/media/1b7b2f48558c.webp', 'FX, PRO mode, and a live EQ rail', 'Effects, a PRO panel, and per-deck EQ sit one tap away from the deck itself, so shaping a transition never means leaving the mix to dig through a settings menu.'],
        ['/media/720800486ed2.webp', 'Search, save, and drop in', 'A built-in library of thousands of tracks, searchable by genre and mood, means a set can be built and mixed without ever leaving the app to source music first.']
      ],
      studioNote:'It was a great experience working with the YouDJ team. We designed and developed their DJ mixing app together, and we are continuing to build out further features with them.',
      overview:'YouDJ Mixer is a mobile DJ app built around one promise: a real dual-deck mixing experience, without the learning curve of a physical controller. We designed and built the mobile app end to end, from the deck interface down to the track library behind it.',
      challenge:'Real DJ software is built for people who already own a controller and already know beatmatching, cue points, and crossfading. That leaves almost everyone else out. The brief was to keep the genuine feel of a two-deck mixer &mdash; live waveforms, a working crossfader, real effects &mdash; while making the whole thing approachable enough that a first-time user is mixing within their first session.',
      solutionPoints:[
        'A dual-deck layout with live waveforms and a real crossfader, so the mixing model matches what an actual DJ setup feels like rather than a simplified toy version of one.',
        'FX, a PRO panel, and per-deck EQ placed directly beside the decks, keeping every shaping tool one tap from the mix instead of buried in a menu.',
        'A built-in, searchable library of thousands of tracks by genre and mood, so a set can be built and mixed without leaving the app to source music.',
        'An XP and rewards layer that turns practicing transitions into a reason to come back, instead of a mixer that is only interesting once.'
      ],
      results:[ ['2', 'Live Decks, One Phone'], ['3000+', 'Songs In-App'], ['iOS + Android', 'Shipped From One Codebase'] ]
    },
    { name:'Joytify', category:'Music &amp; Playlists App', stat:'320kbps streaming with synced lyrics and instant search',
      tint:'linear-gradient(135deg, rgba(140,70,220,.42), rgba(10,10,16,.6))',
      tags:['Music Streaming','Playlists','iOS & Android'],
      img:'/media/2e895bb72d74.webp',
      related:{ label:'Explore Mobile App Development', route:'mobile-app-development' },
      screens:[
        ['/media/823900a88fcf.webp', 'High streaming quality (320kbps AAC)'],
        ['/media/6c11032df89b.webp', 'Synced lyrics while you listen'],
        ['/media/f49e8a8225e7.webp', 'Find any song, instantly'],
        ['/media/271452c77aa8.webp', 'Custom gradients &amp; themes']
      ],
      details:[
        ['/media/a9db38f5e7cd.webp', '320kbps AAC streaming', 'Every track streams at a genuinely high bitrate rather than a compressed default, so the app sounds the way the artist mixed it &mdash; a detail most free music apps quietly skip.'],
        ['/media/f2703b75af49.webp', 'Lyrics synced to the beat', 'Time-synced lyrics scroll in step with the track, with the current line highlighted &mdash; built for singing along, not just reading static text underneath a player.'],
        ['/media/fd4a6fe307ac.webp', 'Search that finds the right version', 'A single search surfaces the studio track, the live version, covers, and video &mdash; so finding the exact recording someone has in their head takes one query, not five.']
      ],
      studioNote:'It was a great experience working with the Joytify team. We designed and developed their music streaming app together, and we are continuing to build out further features with them.',
      overview:'Joytify is a music streaming and playlist app built around sound quality and discovery &mdash; high-bitrate streaming, time-synced lyrics, and search that actually finds the recording someone has in their head. We designed and built the mobile app end to end.',
      challenge:'Most free-tier music apps quietly cut corners on the details that make listening feel good: compressed audio, lyrics that are static or missing, and search that returns the wrong version of a song more often than the right one. The brief was to build a listening app that treats those details as the product, not as an afterthought behind a subscription paywall.',
      solutionPoints:[
        'True 320kbps AAC streaming by default, so tracks sound the way they were mixed rather than the compressed version most free apps quietly serve.',
        'Time-synced lyrics that scroll and highlight in step with the track, built for singing along rather than just reading static text.',
        'Search spanning studio tracks, live versions, covers, and video in one query, so the exact recording someone wants is the first result, not the fifth guess.',
        'Custom gradients and themes across playlists and now-playing screens, so a user\'s library feels personal rather than templated.'
      ],
      results:[ ['320kbps', 'AAC Streaming Quality'], ['Synced', 'Lyrics On Every Track'], ['iOS + Android', 'Shipped From One Codebase'] ]
    }

  ];

  function buildProjectCardHtml(p, spotlight, showTags){
    var tagsHtml = showTags ? '<div class="tags">' + p.tags.map(function(t){ return '<span>'+escapeHtml(t)+'</span>'; }).join('') + '</div>' : '';
    return '<div class="project' + (spotlight ? ' spotlight' : '') + '" data-route="' + p.route + '" data-cursor style="--tint:' + p.tint + '; cursor:pointer;">' +
      '<img class="project-img" src="' + p.img + '" alt="' + escapeHtml(p.name) + ' — ' + escapeHtml(p.category) + '" loading="lazy">' +
      '<div class="project-tint"></div>' +
      '<div class="project-body"><small>' + escapeHtml(p.category) + '</small><h3>' + escapeHtml(p.name) + '</h3><p>' + escapeHtml(p.stat) + '</p>' + tagsHtml + '</div>' +
      '</div>';
  }
  function buildProjectPageHtml(p){
    var relatedPill = p.related ? '<a class="related-pill" data-route="' + p.related.route + '" data-cursor>' + escapeHtml(p.related.label) + ' →</a>' : '';
    var solutionHtml = '<ul>' + p.solutionPoints.map(function(s){ return '<li>' + inlineFormat(s) + '</li>'; }).join('') + '</ul>';
    var statsHtml = p.results.map(function(r){ return '<div class="stat reveal"><b>' + escapeHtml(r[0]) + '</b><small>' + escapeHtml(r[1]) + '</small></div>'; }).join('');
    var noteHtml = p.studioNote
      ? '<blockquote class="zt-note">' + escapeHtml(p.studioNote) + '<cite>Design World Studio</cite></blockquote>'
      : '';
    var screensHtml = p.screens
      ? '<section class="zt-screens"><div class="container">' +
          '<div class="section-head reveal" data-depth="1.1" style="text-align:center; align-items:center;">' +
            '<span class="kicker">The App</span>' +
            '<h2 class="section-title" style="max-width:820px; margin-inline:auto;">Every Screen We Shipped</h2>' +
            '<p class="section-sub" style="margin-inline:auto; text-align:center;">Real screens from the live build &mdash; splash through to verification.</p>' +
          '</div>' +
          '<div class="zt-phone-row">' +
            p.screens.map(function(s){
              return '<figure class="zt-phone reveal">' +
                '<div class="ph3d"><div class="ph3d-body"><div class="ph3d-screen">' +
                  '<img class="ph3d-shot" src="' + s[0] + '" alt="' + escapeHtml(p.name) + ' — ' + s[1].replace(/<[^>]+>/g, '') + '" loading="lazy" decoding="async">' +
                '</div><span class="ph3d-glare"></span></div></div>' +
                '<figcaption>' + s[1] + '</figcaption>' +
              '</figure>';
            }).join('') +
          '</div></div></section>'
      : '';
    var detailsHtml = p.details
      ? p.details.map(function(dt, di){
          return '<section class="aix-band"><div class="container"><div class="aix-band-grid' + (di % 2 ? ' flip' : '') + '">' +
            '<div class="aix-band-media reveal"><img src="' + dt[0] + '" alt="' + dt[1] + '" loading="lazy" decoding="async">' +
              '<span class="aix-band-cap"><i></i>' + dt[1] + '</span></div>' +
            '<div class="aix-band-copy reveal"><span class="kicker">Feature</span><h2>' + dt[1] + '</h2><p>' + dt[2] + '</p></div>' +
          '</div></div></section>';
        }).join('')
      : '';
    return '<div class="page" id="route-' + p.route + '">' +
      '<section class="page-hero" style="padding-bottom:48px;"><div class="grid-overlay"></div><div class="container page-hero-inner">' +
        '<div class="breadcrumb"><a data-route="home">Home</a><span>/</span><a data-route="work">Work</a><span>/</span><span>' + escapeHtml(p.name) + '</span></div>' +
        '<span class="kicker">' + escapeHtml(p.category) + '</span>' +
        '<h1 class="page-title"><span class="reveal-line"><span>' + escapeHtml(p.name) + '</span></span></h1>' +
        '<p class="page-sub">' + escapeHtml(p.stat) + '</p>' +
      '</div></section>' +
      '<section class="bg-alt"><div class="container">' +
        '<div class="article-body">' +
          '<p class="article-lead">' + inlineFormat(p.overview) + '</p>' +
          '<h2>The Challenge</h2><p>' + inlineFormat(p.challenge) + '</p>' +
          '<h2>What We Built</h2>' + solutionHtml + noteHtml +
        '</div>' +
        '<div class="stat-bar" style="margin-top:48px; max-width:760px;">' + statsHtml + '</div>' +
        '<div class="related-row reveal" style="margin-top:48px;">' + relatedPill + '<a class="related-pill" data-route="work" data-cursor>Back to Work →</a></div>' +
      '</div></section>' +
      screensHtml + detailsHtml +
      '<section class="final-cta submit-cta bg-alt"><div class="container"><div class="submit-cta-shell"><div class="submit-cta-grid"><div class="submit-cta-left reveal"><a class="submit-cta-mail" href="mailto:hello@designworldstudio.com" data-cursor><span class="submit-cta-mail-ico">&#9993;</span>hello@designworldstudio.com</a><span class="kicker">Your Project, Next</span><h2>Want an outcome like this one?</h2><p>Tell us about your product — we\’ll show you how we\’d approach it.</p><div class="submit-cta-socials"><a href="#" aria-label="X (Twitter)" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-6.6L4.8 22H1.6l8.1-9.3L1 2h7l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z"/></svg></a><a href="#" aria-label="Instagram" data-cursor><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a><a href="#" aria-label="LinkedIn" data-cursor><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.1 8.5h3.68V21H5.1V8.5Zm6.36 0h3.53v1.7h.05c.49-.93 1.7-1.92 3.5-1.92 3.75 0 4.44 2.47 4.44 5.68V21h-3.68v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-3.68V8.5Z"/></svg></a></div></div><div class="submit-cta-right reveal"><h3>Which of our services can support you?</h3><p class="submit-cta-sublabel">I’m looking for:</p><div class="submit-pill-group"><button type="button" class="submit-pill active" data-service="App Development">App</button><button type="button" class="submit-pill" data-service="Web Development">Web</button><button type="button" class="submit-pill" data-service="AI Automation">AI</button><button type="button" class="submit-pill" data-service="Software Development">Software</button></div><div class="submit-cta-fields"><input type="text" class="submit-input" placeholder="Full Name" data-field="name"><input type="email" class="submit-input" placeholder="Email Address" data-field="email"><input type="text" class="submit-input" placeholder="Tell us briefly what you need" data-field="brief"></div><button type="button" class="btn btn-primary submit-cta-btn" data-cursor><span>Start a Project &rarr;</span></button><p class="submit-cta-note">We usually reply within one business day.</p></div></div></div></div></section>' +
      '</div>';
  }
  if (!window.__projectRoutesRegistered) {
    window.__projectRoutesRegistered = true;
    (function registerProjectRoutes(){
    var mount = document.getElementById('portfolioPostsMount');
    PROJECTS.forEach(function(p){
      p.route = 'work-' + slugify(p.name);
      ROUTES.push(p.route);
      TITLES[p.route] = p.name + ' — Case Study — Design World Studio';
      if (mount) mount.insertAdjacentHTML('beforeend', buildProjectPageHtml(p));
    });
    /* the scroll-reveal observer above ran before these pages existed, so
       their .reveal elements were never observed and stayed invisible.
       Register them now that the markup is in the DOM. */
    if (mount) mount.querySelectorAll('.reveal').forEach(function(r){ io.observe(r); });
    /* project routes are registered after the first navigate() call (they're
       built from PROJECTS further down the script than the router setup) —
       re-resolve the current hash now so a direct deep link to a project
       page (e.g. opened in a new tab) still lands on the right page. */
    navigate();
  })();
  }

  document.querySelectorAll('.js-portfolio').forEach(function(grid){
    var limit = grid.hasAttribute('data-limit') ? parseInt(grid.getAttribute('data-limit'), 10) : PROJECTS.length;
    var showTags = grid.hasAttribute('data-tags');
    var cards = [];
    PROJECTS.slice(0, limit).forEach(function(p, i){
      grid.insertAdjacentHTML('beforeend', buildProjectCardHtml(p, i === 0, showTags));
      cards.push(grid.lastElementChild);
    });

    /* ---- auto-rotating spotlight: selected work changes on its own ---- */
    if (cards.length > 1 && !reducedMotion) {
      var activeIdx = 0;
      var rotateSpotlight = function(){
        cards[activeIdx].classList.remove('spotlight');
        activeIdx = (activeIdx + 1) % cards.length;
        cards[activeIdx].classList.add('spotlight');
      };
      var spotlightTimer = setInterval(rotateSpotlight, 3200);
      grid.addEventListener('mouseenter', function(){ clearInterval(spotlightTimer); }, true);
      grid.addEventListener('mouseleave', function(){ spotlightTimer = setInterval(rotateSpotlight, 3200); }, true);
    }
  });

  /* ==========================================================
     Sitewide cinematic extras: staggered card reveals and the
     continuous 3D scroll-cinema loop, applied across every page
     (not just home) so the whole site feels as alive as the hero.
     The home hero (#hero) itself is never touched by this block.
     ========================================================== */
  (function(){
    /* ---- staggered reveal for services/portfolio grids on every page ---- */
    document.querySelectorAll('.js-services .service-card, .js-portfolio .project').forEach(function(card, i){
      card.classList.add('reveal');
      card.style.transitionDelay = Math.min(i * 0.07, 0.42) + 's';
      io.observe(card);
    });

    /* ---- continuous 3D scroll-cinema ----
       Runs every frame (not just on scroll events) so cards, headings and
       backgrounds are always mid-motion relative to the viewport — a
       constant living depth effect rather than a one-off reveal. Pointer
       proximity adds an extra micro-tilt on top for cards near the cursor.
       Fully skipped under prefers-reduced-motion. */
    var hasHover = window.matchMedia('(hover: hover)').matches;
    var pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    if (hasHover) {
      window.addEventListener('mousemove', function(e){ pointer.x = e.clientX; pointer.y = e.clientY; }, { passive:true });
    }

    /* NOTE: anything carrying [data-depth] is driven by the scroll-depth
       parallax loop instead — excluded here so the two loops never fight
       over the same element's inline transform. */
    var notDepth = function(el){ return !el.hasAttribute('data-depth'); };
    var cineCards = Array.from(document.querySelectorAll('.pillar, .service-card, .project, .why-card, .process-row, .stat, .re-visual, .wd-type-card, .wd-industry, .wd-banner')).filter(notDepth);
    var cineBlocks = Array.from(document.querySelectorAll('.section-head, .about-right, .testi-wrap, .testi-cine-left, .testi-video-card, .contact-info, form.glass, .wd-why-media, .wd-process-visual')).filter(notDepth);
    var parallaxLayers = Array.from(document.querySelectorAll('.skyline'));
    var ctaGlowEls = Array.from(document.querySelectorAll('.final-cta'));

    function clamp(n, lo, hi){ return Math.max(lo, Math.min(hi, n)); }

    if (!reducedMotion) {
      (function cineLoop(){
        var vh = window.innerHeight;

        cineCards.forEach(function(el, i){
          var r = el.getBoundingClientRect();
          var cy = r.top + r.height / 2;
          var dist = clamp((cy - vh / 2) / (vh / 2), -1, 1);
          var wobble = Math.sin((i % 5) * 1.7) * 0.08;

          var hoverRotX = 0, hoverRotY = 0;
          if (hasHover) {
            var cx = r.left + r.width / 2;
            var dx = clamp((pointer.x - cx) / (r.width / 2 || 1), -1.6, 1.6);
            var dy = clamp((pointer.y - cy) / (r.height / 2 || 1), -1.6, 1.6);
            if (Math.abs(dx) < 1.4 && Math.abs(dy) < 1.4) {
              hoverRotX = dy * -7;
              hoverRotY = dx * 7;
            }
          }

          var scrollRotX = (dist + wobble) * -9;
          var translateY = Math.abs(dist) * 16;
          var scale = 1 - Math.abs(dist) * 0.035;

          el.style.transform =
            'perspective(900px) rotateX(' + (scrollRotX + hoverRotX).toFixed(2) + 'deg) ' +
            'rotateY(' + hoverRotY.toFixed(2) + 'deg) ' +
            'translateY(' + translateY.toFixed(1) + 'px) scale(' + scale.toFixed(3) + ')';
        });

        cineBlocks.forEach(function(el){
          var r = el.getBoundingClientRect();
          var cy = r.top + r.height / 2;
          var dist = clamp((cy - vh / 2) / (vh / 2), -1, 1);
          var rotX = dist * -5;
          var translateY = Math.abs(dist) * 10;
          el.style.transform = 'perspective(1100px) rotateX(' + rotX.toFixed(2) + 'deg) translateY(' + translateY.toFixed(1) + 'px)';
        });

        parallaxLayers.forEach(function(el, i){
          var r = el.getBoundingClientRect();
          var speed = i % 2 === 0 ? 0.06 : 0.1;
          var shift = clamp(r.top * speed, -30, 30);
          el.style.transform = 'translateY(' + shift.toFixed(1) + 'px)';
        });

        ctaGlowEls.forEach(function(el){
          var r2 = el.getBoundingClientRect();
          var cy2 = r2.top + r2.height / 2;
          var proximity = 1 - clamp(Math.abs(cy2 - vh / 2) / vh, 0, 1);
          el.style.setProperty('--glow-scale', (0.85 + proximity * 0.5).toFixed(3));
        });

        requestAnimationFrame(cineLoop);
      })();
    }

    /* ---- animated count-up for the About stats ---- */
    var countEls = document.querySelectorAll('.count-up b[data-count]');
    var countIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (!entry.isIntersecting) return;
        countIo.unobserve(entry.target);
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        if (reducedMotion) { el.textContent = target + suffix; return; }
        var start = performance.now();
        var duration = 1400;
        (function tick(now){
          var p = Math.min(1, (now - start) / duration);
          var eased = 1 - Math.pow(1 - p, 3);
          var dec = (el.getAttribute('data-count').split('.')[1] || '').length;
          el.textContent = (target * eased).toFixed(dec) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(start);
      });
    }, { threshold: 0.6 });
    countEls.forEach(function(el){ countIo.observe(el); });

    /* ---- real city skyline photo (About + Final CTA): slow Ken-Burns pan
       via CSS on .skyline-img, plus a light scatter of twinkling dots on
       top to keep the "living" city-lights feel over the real photo. ---- */
    function scatterTwinkle(container){
      if (!container) return;
      var count = window.innerWidth < 768 ? 16 : 34;
      for (var i = 0; i < count; i++){
        var dot = document.createElement('span');
        dot.style.left = (Math.random() * 100) + '%';
        dot.style.bottom = (4 + Math.random() * 55) + '%';
        dot.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
        dot.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + 's';
        container.appendChild(dot);
      }
    }
    scatterTwinkle(document.getElementById('skylineAboutTwinkle'));
    scatterTwinkle(document.getElementById('skylineCtaTwinkle'));

    /* ---- floating light orbs behind the AI Solutions pillars ---- */
    var orbsHost = document.getElementById('orbsAiSolutions');
    if (orbsHost && !reducedMotion) {
      var orbCount = window.innerWidth < 768 ? 6 : 12;
      for (var o = 0; o < orbCount; o++){
        var span = document.createElement('span');
        var size = 6 + Math.random() * 16;
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.left = (Math.random() * 100) + '%';
        span.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
        span.style.animationDuration = (10 + Math.random() * 10) + 's';
        span.style.animationDelay = (Math.random() * -20) + 's';
        orbsHost.appendChild(span);
      }
    }

    /* ---- floating diamond + star accents in every section, sitewide ---- */
    if (!reducedMotion) {
      var perSection = window.innerWidth < 768 ? 9 : 16;
      document.querySelectorAll('#hero, main section').forEach(function(section){
        if (section.querySelector(':scope > .diamond-field')) return;
        var field = document.createElement('div');
        field.className = 'diamond-field';
        for (var d = 0; d < perSection; d++){
          var el = document.createElement('i');
          var roll = Math.random();
          var isStar = roll < 0.4;
          var isGold = !isStar && roll > 0.75;
          if (isStar) el.className = 'star';
          else if (isGold) el.className = 'gold';
          var size = isStar ? (7 + Math.random() * 10) : (4 + Math.random() * 8);
          el.style.width = size + 'px';
          el.style.height = size + 'px';
          el.style.left = (Math.random() * 96 + 2) + '%';
          el.style.top = (Math.random() * 92 + 3) + '%';
          el.style.setProperty('--dx', (Math.random() * 80 - 40).toFixed(1) + 'px');
          el.style.setProperty('--dy', (-(60 + Math.random() * 190)).toFixed(1) + 'px');
          el.style.animationDuration = isStar
            ? (2.4 + Math.random() * 2.2).toFixed(1) + 's, ' + (10 + Math.random() * 10).toFixed(1) + 's'
            : (8 + Math.random() * 9).toFixed(1) + 's';
          el.style.animationDelay = isStar
            ? (Math.random() * -4).toFixed(1) + 's, ' + (Math.random() * -20).toFixed(1) + 's'
            : (Math.random() * -20).toFixed(1) + 's';
          field.appendChild(el);
        }
        section.appendChild(field);
      });
    }
  })();

  /* ---------- process timeline (full /process page) ----------
     Each step's .pf-step-visual currently renders a colorful brand-toned
     placeholder (no external image request, so it never breaks or slows
     the page down). Swap in a real photo by adding
     `<img src="..." alt="...">` as the first child of the matching
     .pf-step-visual element — the suggested shot is noted per step below
     and the fallback gradient will sit safely underneath it either way. */
  var STEPS = [
    ['01','Discover','We audit your business, users, and data to find where AI and design create real leverage — competitors, funnels, tech debt, and the moments users actually get stuck.',
      '#4EA83A','#4FD1FF','1–2 weeks',
      ['Stakeholder & user interviews','Competitive + technical audit','Scoped roadmap & proposal'],
      'Discovery workshop',
      '<circle cx="12" cy="12" r="7"/><path d="M21 21l-4.35-4.35"/>',
      'Team discovery workshop around a table with sticky notes and laptops',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
      'A signed scope, a fixed price, and a roadmap you actually understand.'],
    ['02','Design','High-fidelity, brand-driven design systems built for clarity, trust, and conversion — wireframes to pixel-perfect UI, tested with real users before a line of code ships.',
      '#4FD1FF','#4EA83A','2–3 weeks',
      ['Wireframes & user flows','Full UI design system','Interactive prototype'],
      'Design system in Figma',
      '<path d="M12 2v20M2 12h20"/><rect x="5" y="5" width="6" height="6" rx="1"/><rect x="13" y="13" width="6" height="6" rx="1"/>',
      'Designer reviewing UI mockups and a design system on screen',
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop',
      'A clickable prototype you can test with real users before we write code.'],
    ['03','Build','Engineering across web, mobile, and AI infrastructure — shipped in tight, iterative cycles with staging previews so you see progress every week, not just at the end.',
      '#D4B26A','#FF6B6B','3–10 weeks',
      ['Sprint-based development','Weekly staging previews','QA across devices & browsers'],
      'Engineering sprint',
      '<path d="M8 6L2 12l6 6M16 6l6 6-6 6"/>',
      'Close-up of colorful code on a developer\'s screen',
      'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop',
      'A production-grade build in staging, tested and ready to ship — not a rough draft.'],
    ['04','Automate','We layer in agents, chatbots, and automation to remove friction from every workflow — connecting your tools so busywork runs itself.',
      '#C77DFF','#4FD1FF','1–3 weeks',
      ['Workflow & integration mapping','AI agent / chatbot deployment','Internal team handoff & training'],
      'Automation mapping',
      '<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>',
      'Robotic automation arm representing intelligent workflow automation',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
      'Hours of manual work removed from your team’s week, every week.'],
    ['05','Scale','Post-launch optimization, SEO, and continuous iteration to compound your growth — we stay close after launch instead of disappearing.',
      '#FF6B6B','#D4B26A','Ongoing',
      ['Analytics & SEO baseline','Conversion-rate optimization','Monthly iteration cadence'],
      'Growth review',
      '<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"/>',
      'Analytics dashboard trending upward, reviewed on a laptop screen',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop',
      'A monthly report you can read in five minutes, showing exactly what moved and why.']
  ];
  var processList = document.getElementById('processList');
  if (processList) {
    STEPS.forEach(function(s, i){
      var el = document.createElement('div');
      el.className = 'pf-step reveal' + (i % 2 === 1 ? ' alt' : '');
      el.style.setProperty('--sv', s[3]);
      el.style.setProperty('--sv2', s[4]);
      var deliverables = s[6].map(function(d){ return '<li>'+d+'</li>'; }).join('');
      el.innerHTML =
        '<div class="pf-step-node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+s[8]+'</svg></div>' +
        '<div class="pf-step-card">' +
          '<div class="pf-step-top"><span class="pf-step-num">Step '+s[0]+'</span><span class="pf-step-duration">'+s[5]+'</span></div>' +
          '<h3>'+s[1]+'</h3>' +
          '<p>'+s[2]+'</p>' +
          '<ul class="pf-step-deliver">'+deliverables+'</ul>' +
          '<div class="pf-step-outcome"><b>You leave with:</b> '+s[11]+'</div>' +
        '</div>' +
        '<div class="pf-step-visual">' +
          '<div class="pf-step-visual-fallback"></div>' +
          '<div class="pf-step-visual-grid"></div>' +
          '<img src="'+s[10]+'" alt="'+s[9].replace(/"/g,'&quot;')+'" loading="lazy" decoding="async">' +
          '<span class="pf-step-visual-tag">'+s[7]+'</span>' +
        '</div>';
      processList.appendChild(el);
      io.observe(el);
    });
  }

  /* ---------- tech marquee ---------- */
  var STACK = ['React','Next.js','React Native','Swift','Kotlin','Node.js','Python','TensorFlow','PyTorch','OpenAI','LangChain','Three.js','GSAP','Tailwind CSS','PostgreSQL','AWS','Vercel','Supabase'];
  var marquee = document.getElementById('marqueeTrack');
  if (marquee) {
    STACK.concat(STACK).forEach(function(t){
      var s = document.createElement('span');
      s.textContent = t;
      marquee.appendChild(s);
    });
  }

  /* ---------- "start a project" cta ticker (global, above the footer) ---------- */
  var ctaTicker = document.getElementById('ctaTicker');
  if (ctaTicker) {
    var gemSvg = '<svg viewBox="0 0 24 24"><polygon points="12 2 21 8 12 22 3 8" fill="url(#gemGrad)"/><polygon points="3 8 12 2 12 22" fill="rgba(255,255,255,.2)"/><polygon points="21 8 12 2 12 22" fill="rgba(0,0,0,.16)"/></svg>';
    for (var ti = 0; ti < 16; ti++) {
      var item = document.createElement('span');
      item.className = 'cta-ticker-item';
      item.setAttribute('data-route', 'contact');
      item.setAttribute('data-cursor', '');
      item.innerHTML = gemSvg + 'Start a Project →';
      ctaTicker.appendChild(item);
    }
  }

  /* ---------- why us grid ---------- */
  var REASONS = [
    ['AI-native, not AI-washed','Intelligence is engineered into the architecture from day one — not bolted on as a marketing feature.','#4EA83A','<path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>'],
    ['Design-led engineering','Every product ships with the craft of a design studio and the rigor of a software house.','#4FD1FF','<path d="M12 2v20M2 12h20"/><rect x="5" y="5" width="6" height="6" rx="1"/><rect x="13" y="13" width="6" height="6" rx="1"/>'],
    ['Full-stack under one roof','Strategy, design, engineering, AI, and growth — one accountable team, zero handoff friction.','#D4B26A','<path d="M3 21V9l9-6 9 6v12H3z"/><path d="M9 21v-6h6v6"/>'],
    ['Built to scale, not just launch','We architect for the business you’ll be in two years, not just the demo you need next week.','#C77DFF','<path d="M3 17l6-6 4 4 8-8M21 7v6h-6"/>']
  ];
  var whyGrid = document.getElementById('whyGrid');
  if (whyGrid) {
    REASONS.forEach(function(r, i){
      var el = document.createElement('div');
      el.className = 'why-card glass reveal';
      el.style.setProperty('--sv', r[2]);
      el.innerHTML =
        '<div class="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+r[3]+'</svg></div>' +
        '<div><span class="service-num" style="font-size:12px;">0'+(i+1)+'</span><h3 style="margin-top:8px;">'+r[0]+'</h3><p>'+r[1]+'</p></div>';
      whyGrid.appendChild(el);
      io.observe(el);
    });
  }

  /* ---------- testimonials ---------- */
  var TESTIMONIALS = [
    ["“It was a great experience working with the ZipTrip team. We designed and developed their AI-powered mobile app together — and we are still building new AI features with them.”",'Project Note','ZipTrip · AI Travel App'],
    ["“It was a great experience working with the CrewIQ team. We designed and developed their AI-powered mobile app together — and we are still building new AI features with them.”",'Project Note','CrewIQ · AI Workforce App'],
    ["“From MVP to funded in six weeks. They moved faster than our internal team ever could, without cutting a single corner.”",'Priya Nair','Co-founder, Forge']
  ];
  var quoteEl = document.getElementById('testiQuote');
  if (quoteEl) {
    var tIndex = 0;
    var nameEl = document.getElementById('testiName');
    var roleEl = document.getElementById('testiRole');
    var dotsEl = document.getElementById('testiDots');
    TESTIMONIALS.forEach(function(_, i){
      var b = document.createElement('button');
      if (i===0) b.classList.add('active');
      b.addEventListener('click', function(){ showTesti(i); });
      dotsEl.appendChild(b);
    });
    function showTesti(i){
      tIndex = i;
      var t = TESTIMONIALS[i];
      if (reducedMotion) {
        quoteEl.textContent = t[0];
        nameEl.textContent = t[1];
        roleEl.textContent = t[2];
      } else {
        quoteEl.style.opacity = 0;
        quoteEl.style.transform = 'perspective(600px) rotateX(-90deg)';
        setTimeout(function(){
          quoteEl.textContent = t[0];
          nameEl.textContent = t[1];
          roleEl.textContent = t[2];
          quoteEl.style.transform = 'perspective(600px) rotateX(0deg)';
          quoteEl.style.opacity = 1;
        }, 320);
      }
      Array.from(dotsEl.children).forEach(function(d, idx){ d.classList.toggle('active', idx===i); });
    }
    quoteEl.style.transformOrigin = '50% 100%';
    quoteEl.style.transition = 'opacity .35s ease, transform .5s var(--ease, ease)';
    showTesti(0);
    if (!reducedMotion) {
      setInterval(function(){ showTesti((tIndex+1) % TESTIMONIALS.length); }, 6000);
    }
    var testiPrevBtn = document.getElementById('testiPrev');
    var testiNextBtn = document.getElementById('testiNext');
    if (testiPrevBtn) testiPrevBtn.addEventListener('click', function(){ showTesti((tIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); });
    if (testiNextBtn) testiNextBtn.addEventListener('click', function(){ showTesti((tIndex + 1) % TESTIMONIALS.length); });
  }

  /* ---------- contact form ---------- */
  document.querySelectorAll('.budget-pill').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.budget-pill').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    });
  });
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      var nameEl = contactForm.querySelector('[data-field="name"]');
      var emailEl = contactForm.querySelector('[data-field="email"]');
      var companyEl = contactForm.querySelector('[data-field="company"]');
      var messageEl = contactForm.querySelector('[data-field="message"]');
      var activeBudget = contactForm.querySelector('.budget-pill.active');
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      var errBox = document.getElementById('contactFormError');
      if (!errBox) {
        errBox = document.createElement('p');
        errBox.id = 'contactFormError';
        errBox.style.cssText = 'color:#ff6b6b; font-size:13px; margin-top:14px; display:none;';
        contactForm.querySelector('#formFields').appendChild(errBox);
      }
      errBox.style.display = 'none';

      var payload = {
        name: nameEl ? nameEl.value.trim() : '',
        email: emailEl ? emailEl.value.trim() : '',
        company: companyEl ? companyEl.value.trim() : '',
        budget: activeBudget ? activeBudget.textContent.trim() : '',
        message: messageEl ? messageEl.value.trim() : ''
      };
      if (!payload.name || !payload.email || !payload.message) {
        errBox.textContent = 'Please fill in your name, email, and a short message.';
        errBox.style.display = 'block';
        return;
      }

      var originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = '<span>Sending…</span>'; }

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function(res){ return res.json().then(function(data){ return { ok: res.ok, data: data }; }); })
        .then(function(result){
          if (!result.ok) throw new Error(result.data && result.data.error ? result.data.error : 'Something went wrong.');
          document.getElementById('formFields').style.display = 'none';
          document.getElementById('thankYou').style.display = 'flex';
        })
        .catch(function(err){
          errBox.textContent = err.message || 'Something went wrong. Please try again.';
          errBox.style.display = 'block';
        })
        .finally(function(){
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalBtnHtml; }
        });
    });
  }

  /* ---------- generic in-page smooth-scroll (used by the Smart Chatbot
     Development hero CTA to scroll down to that page's own reused
     submit-cta section, without touching location.hash / the router) ---------- */
  document.addEventListener('click', function(e){
    var el = e.target.closest('[data-scroll-to]');
    if (!el) return;
    var target = document.getElementById(el.getAttribute('data-scroll-to'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
  });


  /* ---------- home: portfolio showcase tabs ----------
     The home page shows the same two coverflow decks that live on the
     Website Development and iOS Development pages. Rather than duplicating
     ~1.4MB of embedded artwork in the markup, each deck is cloned from its
     source page at runtime — and because this runs *before* initCoverflow()
     below, the clones get picked up and wired as fully independent decks. */
  (function buildHomeShowcase(){
    var mount = document.getElementById('homeShowcase');
    if (!mount) return;
    if (mount.childElementCount) return;
    var tabs = mount.parentElement.querySelector('.home-pf-tabs');
    [['web', '#pfSourceWeb [data-pf]'],
     ['ios', '#pfSourceIos [data-pf]'],
     ['realestate', '#pfSourceRealestate [data-pf]']].forEach(function(pair, i){
      var src = document.querySelector(pair[1]);
      if (!src) return;
      var panel = document.createElement('div');
      panel.className = 'home-pf-panel' + (i === 0 ? ' on' : '');
      panel.setAttribute('data-pf-panel', pair[0]);
      var deckClone = src.cloneNode(true);
      /* Each deck opens on its 3rd card so the strongest work is the
         first thing visible when someone scrolls into this section. */
      deckClone.setAttribute('data-pf-start', '2');
      panel.appendChild(deckClone);
      mount.appendChild(panel);
    });
    if (!tabs) return;
    tabs.addEventListener('click', function(e){
      var btn = e.target.closest('[data-pf-tab]');
      if (!btn) return;
      var key = btn.getAttribute('data-pf-tab');
      tabs.querySelectorAll('[data-pf-tab]').forEach(function(b){
        var on = b === btn;
        b.classList.toggle('on', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      mount.querySelectorAll('[data-pf-panel]').forEach(function(p){
        p.classList.toggle('on', p.getAttribute('data-pf-panel') === key);
      });
      /* the revealed deck measured itself as 0-height while hidden; its
         ResizeObserver fires on reveal, but nudge a resize as well so the
         very first switch settles in the same frame */
      window.dispatchEvent(new Event('resize'));
    });
  })();




  /* ---------- SEO page: live SERP preview ----------
     Mirrors the title/URL/description fields into a Google-style result,
     truncating the way Google does and colouring the counters as the
     safe length is passed. Purely presentational; nothing is submitted. */
  (function initSerp(){
    var LIMITS = { title: 60, desc: 155 };
    document.querySelectorAll('[data-serp]').forEach(function(root){
      var ins = {}, outs = {}, counts = {}, meters = {};
      root.querySelectorAll('[data-serp-in]').forEach(function(el){ ins[el.getAttribute('data-serp-in')] = el; });
      root.querySelectorAll('[data-serp-out]').forEach(function(el){ outs[el.getAttribute('data-serp-out')] = el; });
      root.querySelectorAll('[data-serp-count]').forEach(function(el){ counts[el.getAttribute('data-serp-count')] = el; });
      root.querySelectorAll('[data-serp-meter]').forEach(function(el){ meters[el.getAttribute('data-serp-meter')] = el; });
      var hint = root.querySelector('[data-serp-hint]');
      var hintText = hint && hint.querySelector('span');

      function grade(len, limit){
        if (len > limit) return 'over';
        if (len > limit * 0.92) return 'warn';
        return '';
      }

      function paint(key){
        var val = ins[key].value;
        var limit = LIMITS[key];
        var out = outs[key];
        if (!out) return '';
        out.textContent = '';
        if (val.length > limit) {
          out.appendChild(document.createTextNode(val.slice(0, limit)));
          var tail = document.createElement('span');
          tail.className = 'trunc';
          tail.textContent = val.slice(limit, limit + 24) + '…';
          out.appendChild(tail);
        } else {
          out.textContent = val;
        }
        var g = grade(val.length, limit);
        if (counts[key]) {
          counts[key].textContent = val.length + ' / ' + limit;
          counts[key].className = g;
        }
        if (meters[key]) {
          meters[key].style.width = Math.min(100, val.length / limit * 100) + '%';
          meters[key].className = g;
        }
        return g;
      }

      function recalc(){
        if (outs.url && ins.url) outs.url.textContent = ins.url.value;
        var gt = paint('title');
        var gd = paint('desc');
        if (!hint || !hintText) return;
        var worst = (gt === 'over' || gd === 'over') ? 'over'
                  : (gt === 'warn' || gd === 'warn') ? 'warn' : '';
        hint.classList.toggle('warn', worst !== '');
        if (worst === 'over') {
          var which = [];
          if (gt === 'over') which.push('title');
          if (gd === 'over') which.push('description');
          hintText.textContent = 'Your ' + which.join(' and ') + ' will be cut off. Google truncates by pixel width rather than character count, so treat these limits as a guide — but anything past them is at risk, and the end of a description is exactly where the call to action usually lives.';
        } else if (worst === 'warn') {
          hintText.textContent = 'Close to the limit. Wide characters push the real cutoff earlier, so leaving a little headroom is safer than filling every character.';
        } else {
          hintText.textContent = 'Both lengths are inside the safe range. Google may still rewrite either one if it thinks a different phrasing better matches the query — that is normal and not a fault.';
        }
      }

      Object.keys(ins).forEach(function(k){ ins[k].addEventListener('input', recalc); });
      recalc();
    });
  })();

  /* ---------- service pages: tab explorers + role switchers ----------
     One delegated handler drives every [data-sx-tab] group: clicking a
     button activates it within its group and shows the matching pane. */
  (function initSxTabs(){
    document.addEventListener('click', function(e){
      var btn = e.target.closest('[data-sx-tab]');
      if (!btn) return;
      var group = btn.getAttribute('data-sx-tab');
      var idx = btn.getAttribute('data-sx-i');
      document.querySelectorAll('[data-sx-tab="' + group + '"]').forEach(function(b){
        b.classList.toggle('on', b === btn);
      });
      document.querySelectorAll('[data-sx-pane="' + group + '"]').forEach(function(p){
        p.classList.toggle('on', p.getAttribute('data-sx-i') === idx);
      });
    });
  })();

  /* ---------- AI pages: FAQ accordion, ROI calculator, card cursor glow ---------- */
  (function initAix(){
    /* --- FAQ accordion (single-open, height-animated) --- */
    document.querySelectorAll('[data-faq]').forEach(function(btn){
      btn.addEventListener('click', function(){
        var item = btn.closest('.aix-faq-item');
        var panel = item.querySelector('.aix-faq-a');
        var wasOpen = item.classList.contains('on');
        var group = item.parentElement;
        group.querySelectorAll('.aix-faq-item.on').forEach(function(other){
          other.classList.remove('on');
          other.querySelector('.aix-faq-a').style.maxHeight = '';
        });
        if (!wasOpen) {
          item.classList.add('on');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
    /* keep an open answer correctly sized if the window reflows */
    window.addEventListener('resize', function(){
      document.querySelectorAll('.aix-faq-item.on .aix-faq-a').forEach(function(p){
        p.style.maxHeight = p.scrollHeight + 'px';
      });
    });

    /* --- savings calculator --- */
    document.querySelectorAll('[data-roi]').forEach(function(root){
      var inputs = {};
      root.querySelectorAll('[data-roi-in]').forEach(function(el){ inputs[el.getAttribute('data-roi-in')] = el; });
      var outs = {};
      root.querySelectorAll('[data-roi-out]').forEach(function(el){ outs[el.getAttribute('data-roi-out')] = el; });

      function fillTrack(el){
        var min = +el.min, max = +el.max;
        el.style.setProperty('--fill', ((el.value - min) / (max - min) * 100) + '%');
      }
      function money(n){
        return '$' + Math.round(n).toLocaleString('en-US');
      }
      function recalc(){
        var people = +inputs.people.value, hours = +inputs.hours.value, rate = +inputs.rate.value;
        /* deliberately conservative: 70% of the mapped hours, 46 working weeks */
        var savedWeekly = people * hours * 0.7;
        var annual = savedWeekly * rate * 46;
        if (outs.people) outs.people.textContent = people;
        if (outs.hours)  outs.hours.textContent  = hours;
        if (outs.rate)   outs.rate.textContent   = '$' + rate;
        if (outs.weekly) outs.weekly.textContent = Math.round(savedWeekly);
        if (outs.days)   outs.days.textContent   = (savedWeekly / 8).toFixed(1);
        if (outs.annual) outs.annual.textContent = money(annual);
        Object.keys(inputs).forEach(function(k){ fillTrack(inputs[k]); });
      }
      Object.keys(inputs).forEach(function(k){
        inputs[k].addEventListener('input', recalc);
      });
      recalc();
    });

    /* --- pointer-following glow on the use-case cards --- */
    document.querySelectorAll('[data-tilt-card]').forEach(function(card){
      card.addEventListener('pointermove', function(e){
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
      });
    });

    /* --- agent trace: cycle the "active" step so the panel feels live --- */
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.querySelectorAll('[data-trace]').forEach(function(trace){
      if (reduced) return;
      var steps = Array.prototype.slice.call(trace.querySelectorAll('.aix-tstep'));
      var live = steps.filter(function(s){ return !s.classList.contains('pending'); });
      if (live.length < 2) return;
      var i = live.length - 1;
      setInterval(function(){
        live.forEach(function(s){ s.classList.remove('active'); });
        i = (i + 1) % live.length;
        live[i].classList.add('active');
      }, 2600);
    });
  })();

  /* ---------- app-service pages: shared real-screenshot deck ----------
     The Android / MVP / Mobile App Development pages show the same
     photographed app deck that lives on the iOS Development page. The
     artwork is embedded once, on the iOS page, and cloned into the other
     three decks at runtime so the file does not carry three more copies
     of ~1.4MB of base64. Runs *before* initCoverflow() so each clone is
     wired as its own fully independent deck. */
  (function shareAppDeck(){
    var src = document.querySelector('#route-ios-development [data-pf] .pf3d-track');
    if (!src) return;
    ['#andWork', '#mvpWork', '#mobWork'].forEach(function(sel){
      var track = document.querySelector(sel + ' [data-pf] .pf3d-track');
      if (!track || track === src) return;
      var clone = src.cloneNode(true);
      /* alt text is page-agnostic on the clones */
      clone.querySelectorAll('img[alt]').forEach(function(img){
        img.setAttribute('alt', img.getAttribute('alt').replace(' iOS app screen', ' app screen'));
      });
      track.replaceWith(clone);
    });
  })();

  /* ---------- 3D premium coverflow portfolio slider ----------
     Self-contained, class-scoped (no ids), pointer-drag + keyboard +
     arrows + dots, with an eased position spring so dragging and
     stepping both feel physical rather than snappy. Also tilts the
     whole deck as the section scrolls through the viewport, so the
     slider itself is part of the scroll experience. */
  (function initCoverflow(){
    var decks = document.querySelectorAll('[data-pf]');
    if (!decks.length) return;

    decks.forEach(function(deck){
      var stage = deck.querySelector('.pf3d-stage');
      var track = deck.querySelector('.pf3d-track');
      var cards = Array.prototype.slice.call(deck.querySelectorAll('.pf3d-card'));
      var dotsWrap = deck.querySelector('.pf3d-dots');
      var prevBtn = deck.querySelector('[data-pf-prev]');
      var nextBtn = deck.querySelector('[data-pf-next]');
      if (!track || cards.length === 0) return;

      var n = cards.length;
      var startIdx = Math.max(0, Math.min(n - 1, parseInt(deck.getAttribute('data-pf-start'), 10) || 0));
      var target = startIdx;      // index we're easing toward
      var pos = startIdx;         // current (fractional) position
      var dragging = false;
      var dragStartX = 0, dragStartPos = 0, moved = 0;
      var idle = true;

      /* dots */
      var dots = [];
      if (dotsWrap) {
        cards.forEach(function(_, i){
          var b = document.createElement('button');
          b.type = 'button';
          b.setAttribute('aria-label', 'Go to project ' + (i + 1));
          b.addEventListener('click', function(){ go(i); });
          dotsWrap.appendChild(b);
          dots.push(b);
        });
      }

      function metrics(){
        var w = stage.clientWidth;
        var cardW = parseFloat(getComputedStyle(cards[0]).width) || 380;
        // spacing tightens on narrow screens so neighbours still peek in
        var spacing = Math.min(cardW * 0.72, Math.max(w * 0.26, 150));
        var depth = w < 720 ? 200 : 320;
        var angle = w < 720 ? 32 : 42;
        return { spacing: spacing, depth: depth, angle: angle };
      }
      var M = metrics();

      /* measure the real card height and size the stage to it, so the deck
         is always vertically centred and never overflows — regardless of
         breakpoint, font loading, or how long a card's copy runs. */
      var lastFitH = 0;
      function fit(){
        var tallest = 0;
        cards.forEach(function(c){
          var prev = c.style.transform, pv = c.style.visibility, pf = c.style.filter;
          c.style.transform = 'none'; c.style.visibility = 'hidden'; c.style.filter = 'none';
          tallest = Math.max(tallest, c.offsetHeight);
          c.style.transform = prev; c.style.visibility = pv; c.style.filter = pf;
        });
        /* 0 while this route's .page is still display:none — the
           ResizeObserver below re-runs fit() the moment it becomes visible */
        if (!tallest || tallest === lastFitH) return;
        lastFitH = tallest;
        stage.style.height = Math.round(tallest + 48) + 'px';
        var mt = Math.round(-tallest / 2) + 'px';
        cards.forEach(function(c){ c.style.marginTop = mt; });
        M = metrics();
      }
      if (window.ResizeObserver) {
        new ResizeObserver(function(){ fit(); layout(); }).observe(stage);
      }

      function clampIdx(i){ return Math.max(0, Math.min(n - 1, i)); }
      function go(i){ target = clampIdx(i); kick(); }

      function layout(){
        var activeIdx = Math.round(pos);
        for (var i = 0; i < n; i++) {
          var c = cards[i];
          var d = i - pos;
          var ad = Math.abs(d);

          if (ad > 3.4) { c.style.visibility = 'hidden'; continue; }
          c.style.visibility = 'visible';

          var cl = Math.max(-1, Math.min(1, d));           // clamped for rotation
          var x = d * M.spacing;
          var z = -Math.min(ad, 3) * M.depth;
          var ry = -cl * M.angle - (d - cl) * (M.angle * 0.12);
          var sc = 1 - Math.min(ad, 3) * 0.045;
          var op = ad <= 1 ? 1 : Math.max(0, 1 - (ad - 1) * 0.42);
          var bl = ad <= 1 ? 0 : Math.min((ad - 1) * 2.2, 4.5);

          c.style.transform =
            'translate3d(' + x.toFixed(1) + 'px,0,' + z.toFixed(1) + 'px) ' +
            'rotateY(' + ry.toFixed(2) + 'deg) scale(' + sc.toFixed(3) + ')';
          c.style.opacity = op.toFixed(3);
          c.style.filter = bl ? 'blur(' + bl.toFixed(2) + 'px)' : 'none';
          c.style.zIndex = String(200 - Math.round(ad * 12));
          c.classList.toggle('is-active', i === activeIdx && ad < 0.55);
        }
        dots.forEach(function(b, i){ b.classList.toggle('active', i === activeIdx); });
      }

      /* eased position loop — only runs while there's motion to resolve */
      function tick(){
        var diff = target - pos;
        if (!dragging && Math.abs(diff) < 0.0006) {
          pos = target; layout(); idle = true; return;
        }
        if (!dragging) pos += diff * (Math.abs(diff) > 1.2 ? 0.155 : 0.115);
        layout();
        requestAnimationFrame(tick);
      }
      function kick(){ if (idle) { idle = false; requestAnimationFrame(tick); } }

      /* pointer drag */
      stage.addEventListener('pointerdown', function(e){
        dragging = true; moved = 0;
        dragStartX = e.clientX; dragStartPos = pos;
        stage.setPointerCapture && stage.setPointerCapture(e.pointerId);
        stage.style.cursor = 'grabbing';
        kick();
      });
      stage.addEventListener('pointermove', function(e){
        if (!dragging) return;
        var dx = e.clientX - dragStartX;
        moved = Math.abs(dx);
        pos = clampIdx2(dragStartPos - dx / M.spacing);
        layout();
      });
      function clampIdx2(v){ return Math.max(-0.4, Math.min(n - 1 + 0.4, v)); }
      function endDrag(){
        if (!dragging) return;
        dragging = false;
        stage.style.cursor = '';
        target = clampIdx(Math.round(pos));
        kick();
      }
      stage.addEventListener('pointerup', endDrag);
      stage.addEventListener('pointercancel', endDrag);
      stage.addEventListener('pointerleave', endDrag);
      stage.addEventListener('dragstart', function(e){ e.preventDefault(); });

      /* click a side card to bring it forward (ignored right after a drag) */
      cards.forEach(function(c, i){
        c.addEventListener('click', function(){
          if (moved > 6) return;
          if (i !== Math.round(pos)) go(i);
        });
      });

      if (prevBtn) prevBtn.addEventListener('click', function(){ go(Math.round(target) - 1); });
      if (nextBtn) nextBtn.addEventListener('click', function(){ go(Math.round(target) + 1); });

      /* keyboard when the deck is in view */
      document.addEventListener('keydown', function(e){
        if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
        var page = deck.closest('.page');
        if (page && !page.classList.contains('active')) return;
        var r = stage.getBoundingClientRect();
        if (r.bottom < 80 || r.top > window.innerHeight - 80) return;
        go(Math.round(target) + (e.key === 'ArrowRight' ? 1 : -1));
      });

      window.addEventListener('resize', function(){ M = metrics(); fit(); layout(); }, { passive:true });

      /* deck tilt driven by the section's scroll progress */
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) {
        var ticking = false;
        var onScroll = function(){
          if (ticking) return;
          ticking = true;
          requestAnimationFrame(function(){
            ticking = false;
            var r = stage.getBoundingClientRect();
            var vh = window.innerHeight;
            if (r.bottom < -200 || r.top > vh + 200) return;
            // -1 (entering from below) .. 0 (centered) .. 1 (leaving above)
            var p = ((vh / 2) - (r.top + r.height / 2)) / (vh / 2);
            p = Math.max(-1, Math.min(1, p));
            track.style.transform = 'rotateX(' + (p * -7).toFixed(2) + 'deg) translateY(' + (p * -18).toFixed(1) + 'px)';
          });
        };
        window.addEventListener('scroll', onScroll, { passive:true });
        onScroll();
      }

      fit();
      layout();
      kick();
      /* re-fit once webfonts settle, since the meta copy changes height */
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function(){ fit(); layout(); });
      }
    })
  })();

  /* ---------- page-wide scroll-depth parallax ----------
     Any element with data-depth gets a subtle Z-ish drift as it moves
     through the viewport, so long scrolls feel composed rather than flat.
     Runs on one shared rAF-throttled scroll listener. */
  (function initScrollDepth(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-depth]'));
    if (!els.length) return;
    var ticking = false;
    function update(){
      ticking = false;
      var vh = window.innerHeight;
      els.forEach(function(el){
        var r = el.getBoundingClientRect();
        if (r.bottom < -160 || r.top > vh + 160) return;
        var p = ((vh / 2) - (r.top + r.height / 2)) / (vh / 2);   // -1..1
        p = Math.max(-1.2, Math.min(1.2, p));
        var d = parseFloat(el.getAttribute('data-depth')) || 1;
        el.style.transform = 'translate3d(0,' + (p * -16 * d).toFixed(1) + 'px,0) scale(' + (1 + Math.abs(p) * 0.005 * d).toFixed(4) + ')';
      });
    }
    window.addEventListener('scroll', function(){
      if (ticking) return; ticking = true; requestAnimationFrame(update);
    }, { passive:true });
    window.addEventListener('resize', update, { passive:true });
    update();
  })();


  /* ---------- Real Estate page: 3D hero rig + floating feature panels ----------
     One shared rAF-throttled scroll/pointer loop drives every 3D element on the
     page: the hero device rig gets pointer-follow plus scroll rotation, and each
     feature-row panel cluster rotates as its stage passes through the viewport.
     Everything is class/attribute-scoped, so nothing here depends on ids. */
  (function initRealEstate3D(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var rigs = Array.prototype.slice.call(document.querySelectorAll('[data-res-rig] .res-rig'));
    var floats = Array.prototype.slice.call(document.querySelectorAll('[data-res-float] .res-float'));
    if (!rigs.length && !floats.length) return;

    var hasHover = window.matchMedia('(hover: hover)').matches;
    var px = 0.5, py = 0.5;   // normalised pointer, 0..1
    if (hasHover) {
      window.addEventListener('mousemove', function(e){
        px = e.clientX / window.innerWidth;
        py = e.clientY / window.innerHeight;
      }, { passive:true });
    }

    function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }

    /* progress of an element through the viewport: -1 below, 0 centred, 1 above */
    function progress(el){
      var r = el.getBoundingClientRect();
      var vh = window.innerHeight;
      if (r.bottom < -200 || r.top > vh + 200) return null;
      return clamp(((vh / 2) - (r.top + r.height / 2)) / (vh / 2), -1, 1);
    }

    var running = false;
    function frame(){
      running = false;

      rigs.forEach(function(rig){
        var p = progress(rig);
        if (p === null) return;
        /* base pose + scroll drift + a little pointer follow */
        var ry = -16 + p * 9 + (hasHover ? (px - 0.5) * 11 : 0);
        var rx = 6 - p * 5 - (hasHover ? (py - 0.5) * 7 : 0);
        rig.style.transform =
          'rotateY(' + ry.toFixed(2) + 'deg) rotateX(' + rx.toFixed(2) + 'deg) ' +
          'translateY(' + (p * -14).toFixed(1) + 'px)';
      });

      floats.forEach(function(fl){
        var p = progress(fl);
        if (p === null) return;
        fl.style.transform =
          'rotateY(' + (p * -9).toFixed(2) + 'deg) rotateX(' + (p * 6).toFixed(2) + 'deg) ' +
          'translateY(' + (p * -16).toFixed(1) + 'px) translateZ(' + (30 - Math.abs(p) * 30).toFixed(1) + 'px)';
      });
    }
    function schedule(){ if (!running) { running = true; requestAnimationFrame(frame); } }

    window.addEventListener('scroll', schedule, { passive:true });
    window.addEventListener('resize', schedule, { passive:true });
    if (hasHover) window.addEventListener('mousemove', schedule, { passive:true });
    window.addEventListener('hashchange', function(){ setTimeout(schedule, 60); });
    schedule();
  })();

  /* ---------- FAQ accordion (single-open, event-delegated, no ids) ---------- */
  document.addEventListener('click', function(e){
    var q = e.target.closest('.res-faq-q');
    if (!q) return;
    var item = q.closest('.res-faq-item');
    var list = q.closest('.res-faq-list');
    if (!item || !list) return;
    var wasActive = item.classList.contains('active');
    list.querySelectorAll('.res-faq-item').forEach(function(i){ i.classList.remove('active'); });
    if (!wasActive) item.classList.add('active');
  });


  /* ---------- App pages: 3D podium / phone rigs driven by scroll + pointer ----------
     Shares one rAF-throttled loop across every rig on every app page. Rigs are
     found by attribute, so adding another page needs no JS change. */
  (function initAppPages3D(){
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var podiums = Array.prototype.slice.call(document.querySelectorAll('[data-ap-podium]'));
    var tilts   = Array.prototype.slice.call(document.querySelectorAll('[data-ap-tilt]'));
    if (!podiums.length && !tilts.length) return;

    var hasHover = window.matchMedia('(hover: hover)').matches;
    var px = 0.5, py = 0.5;
    function clamp(v, lo, hi){ return Math.max(lo, Math.min(hi, v)); }
    function progress(el){
      var r = el.getBoundingClientRect(), vh = window.innerHeight;
      if (r.bottom < -220 || r.top > vh + 220) return null;
      return clamp(((vh / 2) - (r.top + r.height / 2)) / (vh / 2), -1, 1);
    }

    // Idle ambient sway so the podium/tilt rigs stay visibly alive even when
    // the visitor isn't scrolling or moving the pointer — layered underneath
    // the scroll- and pointer-driven rotation rather than replacing it.
    var t0 = null;
    function frame(now){
      if (t0 === null) t0 = now || 0;
      var t = ((now || 0) - t0) / 1000;
      var idleY = Math.sin(t * 0.55) * 3.2;
      var idleX = Math.cos(t * 0.42) * 2.2;
      podiums.forEach(function(el){
        var p = progress(el);
        if (p === null) return;
        var ry = -14 + p * 10 + idleY + (hasHover ? (px - 0.5) * 12 : 0);
        var rx = 7 - p * 6 + idleX - (hasHover ? (py - 0.5) * 8 : 0);
        el.style.transform = 'rotateY(' + ry.toFixed(2) + 'deg) rotateX(' + rx.toFixed(2) + 'deg) translateY(' + (p * -16 + Math.sin(t * 0.6) * 4).toFixed(1) + 'px)';
      });
      tilts.forEach(function(el){
        var p = progress(el);
        if (p === null) return;
        var amt = parseFloat(el.getAttribute('data-ap-tilt')) || 1;
        el.style.transform =
          'rotateY(' + (p * -11 * amt + idleY * 0.6 * amt).toFixed(2) + 'deg) rotateX(' + (p * 7 * amt + idleX * 0.6 * amt).toFixed(2) + 'deg) ' +
          'translateY(' + (p * -18 * amt).toFixed(1) + 'px)';
      });
      requestAnimationFrame(frame);
    }

    if (hasHover) window.addEventListener('mousemove', function(e){
      px = e.clientX / window.innerWidth; py = e.clientY / window.innerHeight;
    }, { passive:true });
    requestAnimationFrame(frame);
  })();

  /* ---------- App pages: solutions accordion (single-open) that also swaps
     the live screen inside the section's 3D phone. Event-delegated, no ids. */
  document.addEventListener('click', function(e){
    var q = e.target.closest('.ap-acc-q');
    if (!q) return;
    var item = q.closest('.ap-acc-item');
    var list = q.closest('.ap-acc-list-wrap');
    if (!item || !list) return;

    var wasActive = item.classList.contains('active');
    list.querySelectorAll('.ap-acc-item').forEach(function(i){ i.classList.remove('active'); });
    if (!wasActive) item.classList.add('active');

    /* cross-fade the matching app screen in this section's phone */
    var section = list.closest('.ap-sol');
    var target = item.classList.contains('active') ? item.getAttribute('data-screen') : null;
    if (!section) return;
    var screens = section.querySelectorAll('.ap-sol-visual .appui');
    if (!screens.length) return;
    if (!target) {
      /* nothing open — fall back to the first screen so the phone is never blank */
      target = screens[0].getAttribute('data-screen');
    }
    screens.forEach(function(s){ s.classList.toggle('on', s.getAttribute('data-screen') === target); });
  });

  /* ---------- wd-tech-tabs: scoped tab switching (event-delegated, no ids,
     so this component could be dropped onto more than one page safely) ---------- */
  document.addEventListener('click', function(e){
    var tab = e.target.closest('.wd-tech-tab');
    if (!tab) return;
    var group = tab.closest('.wd-tech');
    if (!group) return;
    group.querySelectorAll('.wd-tech-tab').forEach(function(t){ t.classList.remove('active'); });
    tab.classList.add('active');
    var key = tab.getAttribute('data-tab');
    group.querySelectorAll('.wd-tech-panel').forEach(function(p){
      p.classList.toggle('active', p.getAttribute('data-panel') === key);
    });
  });

  /* ---------- wd-process: single-open accordion (event-delegated) ---------- */
  document.addEventListener('click', function(e){
    var head = e.target.closest('.wd-process-head');
    if (!head) return;
    var item = head.closest('.wd-process-item');
    var list = head.closest('.wd-process-list');
    if (!item || !list) return;
    var wasActive = item.classList.contains('active');
    list.querySelectorAll('.wd-process-item').forEach(function(i){ i.classList.remove('active'); });
    if (!wasActive) item.classList.add('active');
  });

  /* ---------- submit-cta: colorful "Submit a Project" band (event-delegated
     so it works identically across every one of its many page instances,
     including ones injected later for blog posts / case studies, without
     ever relying on duplicate ids) ---------- */
  document.addEventListener('click', function(e){
    var pill = e.target.closest('.submit-pill');
    if (pill) {
      var group = pill.closest('.submit-pill-group');
      if (group) group.querySelectorAll('.submit-pill').forEach(function(b){ b.classList.remove('active'); });
      pill.classList.add('active');
      if (window.__animateSubmitPill) window.__animateSubmitPill(pill);
      return;
    }
    var submitBtn = e.target.closest('.submit-cta-btn');
    if (submitBtn) {
      var card = submitBtn.closest('.submit-cta-right');
      var nameEl = card ? card.querySelector('[data-field="name"]') : null;
      var emailEl = card ? card.querySelector('[data-field="email"]') : null;
      var briefEl = card ? card.querySelector('[data-field="brief"]') : null;
      var activePill = card ? card.querySelector('.submit-pill.active') : null;
      var prefill = {
        name: nameEl ? nameEl.value.trim() : '',
        email: emailEl ? emailEl.value.trim() : '',
        brief: briefEl ? briefEl.value.trim() : '',
        service: activePill ? activePill.getAttribute('data-service') : ''
      };
      try { sessionStorage.setItem('dws_prefill', JSON.stringify(prefill)); } catch(err){}
      if (window.__animateSubmitBtn) window.__animateSubmitBtn(submitBtn);
      window.dispatchEvent(new CustomEvent('site:navigate', { detail: { route: 'contact' } }));
      setTimeout(function(){
        try {
          var pre = JSON.parse(sessionStorage.getItem('dws_prefill') || '{}');
          var form = document.getElementById('contactForm');
          if (!form || (!pre.name && !pre.email && !pre.brief && !pre.service)) return;
          var nEl = form.querySelector('[data-field="name"]');
          var eEl = form.querySelector('[data-field="email"]');
          var mEl = form.querySelector('[data-field="message"]');
          if (nEl && pre.name) nEl.value = pre.name;
          if (eEl && pre.email) eEl.value = pre.email;
          if (mEl) {
            var lead = pre.service ? ('Interested in: ' + pre.service + '. ') : '';
            mEl.value = lead + (pre.brief || '');
          }
          sessionStorage.removeItem('dws_prefill');
        } catch(err){}
      }, 450);
    }
  });

  /* ---------- blog admin: publish a new post ---------- */
  var postForm = document.getElementById('postForm');
  if (postForm) {
    var pfDate = document.getElementById('pfDate');
    if (pfDate && !pfDate.value) {
      var today = new Date();
      var iso = today.getFullYear() + '-' + String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');
      pfDate.value = iso;
    }
    postForm.addEventListener('submit', function(e){
      e.preventDefault();
      var title = document.getElementById('pfTitle').value.trim();
      var tag = document.getElementById('pfTag').value.trim();
      var date = document.getElementById('pfDate').value || (pfDate ? pfDate.value : '');
      var excerpt = document.getElementById('pfExcerpt').value.trim();
      var bodyRaw = document.getElementById('pfBody').value;
      if (!title || !tag || !excerpt || !bodyRaw.trim()) return;

      var post = { title: title, tag: tag, date: date, excerpt: excerpt, body: parseBody(bodyRaw), slug: slugify(title) };
      var el = addPostToDOM(post, true);
      BLOG_POSTS.unshift(post);
      if (el) el.querySelectorAll('.reveal').forEach(function(r){ io.observe(r); });
      document.querySelectorAll('#blogGrid .blog-card.reveal').forEach(function(c){ io.observe(c); });

      try {
        var existing = JSON.parse(safeGet('dws_custom_posts') || '[]');
        existing.unshift(post);
        safeSet('dws_custom_posts', JSON.stringify(existing));
      } catch(err){}

      var codeLines = [
        '{ slug:' + JSON.stringify(post.slug) + ', tag:' + JSON.stringify(post.tag) + ', date:' + JSON.stringify(post.date) + ',',
        '  title:' + JSON.stringify(post.title) + ',',
        '  excerpt:' + JSON.stringify(post.excerpt) + ',',
        '  related:null,',
        '  body:' + JSON.stringify(post.body, null, 2).split('\n').join('\n  ') + ' },'
      ];
      var codeText = '// Paste this object into BLOG_POSTS (near the top of the <script> block):\n' + codeLines.join('\n');

      postForm.reset();
      if (pfDate) pfDate.value = date;
      document.getElementById('pfCode').value = codeText;
      document.getElementById('pfCodeWrap').style.display = 'block';
      document.getElementById('pfStatus').textContent = 'Published — previewing now in this browser.';

      location.hash = post.route;
    });
  }
  var pfCopyBtn = document.getElementById('pfCopyBtn');
  if (pfCopyBtn) {
    pfCopyBtn.addEventListener('click', function(){
      var codeEl = document.getElementById('pfCode');
      codeEl.select();
      try { document.execCommand('copy'); } catch(e){}
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeEl.value).catch(function(){});
      }
      pfCopyBtn.querySelector('span').textContent = 'Copied ✓';
      setTimeout(function(){ pfCopyBtn.querySelector('span').textContent = 'Copy post code'; }, 1800);
    });
  }

  /* ==========================================================
     Sub-page hero canvases: a lighter version of the home hero's
     procedural neural network, one per page-hero banner, so every
     page opens with the same animated, mouse-reactive feel as the
     home hero. Only the active route's canvas is ever drawn —
     the rest sit idle behind display:none for zero extra cost.
     ========================================================== */
  (function(){
    var canvases = Array.from(document.querySelectorAll('.page-hero-canvas[data-network]'));
    if (!canvases.length || reducedMotion) return;

    var rigs = canvases.map(function(cv){
      var ctx = cv.getContext('2d');
      var rig = {
        cv: cv, ctx: ctx, ready: false,
        W: 0, H: 0, DPR: Math.min(window.devicePixelRatio || 1, 2),
        nodes: [], edges: [],
        pointerX: 0, pointerY: 0, rotY: 0, rotX: 0, t0: null
      };
      function size(){
        var r = cv.getBoundingClientRect();
        rig.W = r.width || cv.parentElement.offsetWidth || 800;
        rig.H = r.height || cv.parentElement.offsetHeight || 360;
        cv.width = rig.W * rig.DPR;
        cv.height = rig.H * rig.DPR;
        ctx.setTransform(rig.DPR, 0, 0, rig.DPR, 0, 0);
      }
      function build(){
        rig.nodes = [];
        var count = rig.W < 700 ? 26 : 44;
        var golden = Math.PI * (3 - Math.sqrt(5));
        var radius = Math.max(120, Math.min(rig.W, rig.H) * 0.42);
        for (var i = 0; i < count; i++){
          var y = 1 - (i / (count - 1)) * 2;
          var r = Math.sqrt(1 - y * y);
          var theta = golden * i;
          rig.nodes.push({ x: Math.cos(theta) * r * radius, y: y * radius * 0.6, z: Math.sin(theta) * r * radius });
        }
        rig.edges = [];
        var maxDist = radius * 0.8;
        for (var i2 = 0; i2 < rig.nodes.length; i2++){
          var dists = [];
          for (var j = 0; j < rig.nodes.length; j++){
            if (i2 === j) continue;
            var a = rig.nodes[i2], b = rig.nodes[j];
            dists.push([j, Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)+(a.z-b.z)*(a.z-b.z))]);
          }
          dists.sort(function(p,q){ return p[1]-q[1]; });
          for (var k = 0; k < 2; k++){ if (dists[k][1] < maxDist) rig.edges.push([i2, dists[k][0]]); }
        }
      }
      size(); build();
      window.addEventListener('resize', function(){ size(); build(); });
      cv.parentElement.addEventListener('mousemove', function(e){
        var r = cv.getBoundingClientRect();
        rig.pointerX = ((e.clientX - r.left) / r.width) * 2 - 1;
        rig.pointerY = -((e.clientY - r.top) / r.height) * 2 + 1;
      }, { passive:true });
      return rig;
    });

    function project(p, cx, cy, focal, rotY, rotX){
      var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      var x1 = p.x*cosY - p.z*sinY, z1 = p.x*sinY + p.z*cosY;
      var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      var y2 = p.y*cosX - z1*sinX, z2 = p.y*sinX + z1*cosX;
      var scale = focal / (focal + z2 + 360);
      return { x: cx + x1*scale, y: cy + y2*scale, s: scale, z: z2 };
    }

    (function loop(now){
      rigs.forEach(function(rig){
        var page = rig.cv.closest('.page');
        if (!page || !page.classList.contains('active')) return;
        if (rig.t0 === null) rig.t0 = now;
        var t = (now - rig.t0) / 1000;
        var cx = rig.W * 0.5, cy = rig.H * 0.52, focal = 460;
        var targetRotY = rig.pointerX * 0.5 + t * 0.16;
        var targetRotX = rig.pointerY * 0.22 + Math.sin(t * 0.35) * 0.06;
        rig.rotY += (targetRotY - rig.rotY) * 0.05;
        rig.rotX += (targetRotX - rig.rotX) * 0.05;

        var ctx = rig.ctx;
        ctx.clearRect(0, 0, rig.W, rig.H);
        var projected = rig.nodes.map(function(n){ return project(n, cx, cy, focal, rig.rotY, rig.rotX); });

        ctx.lineWidth = 1;
        for (var i = 0; i < rig.edges.length; i++){
          var a = projected[rig.edges[i][0]], b = projected[rig.edges[i][1]];
          var twinkle = Math.sin(t * 1.1 + i) * 0.05;
          var alpha = Math.max(0, Math.min(0.4, 0.24 + (a.z+b.z)/2/1200 + twinkle));
          ctx.strokeStyle = 'rgba(78,168,58,'+alpha+')';
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
        for (var j = 0; j < projected.length; j++){
          var p = projected[j];
          var twinkle2 = Math.sin(t * 1.4 + j * 0.7) * 0.15;
          var r = Math.max(1, (1.8 + twinkle2) * p.s);
          var alpha2 = Math.max(0.12, Math.min(1, 0.45 + p.z/800 + twinkle2 * 0.4));
          ctx.beginPath();
          ctx.fillStyle = 'rgba(79,209,255,'+alpha2+')';
          ctx.arc(p.x, p.y, r, 0, Math.PI*2);
          ctx.fill();
        }
      });
      requestAnimationFrame(loop);
    })();
  })();

  /* ---------- hero canvas: procedural neural network ---------- */
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;   /* hero canvas only exists on the home route */
  var ctx = canvas.getContext('2d');
  var W, H, DPR = Math.min(window.devicePixelRatio || 1, 2);
  var nodes = [];
  var NODE_COUNT = window.innerWidth < 768 ? 55 : 110;
  var pointerX = 0, pointerY = 0, targetRotY = 0, targetRotX = 0, rotY = 0, rotX = 0;
  var scrollT = 0;

  function resize(){
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }

  function buildNodes(){
    nodes = [];
    var golden = Math.PI * (3 - Math.sqrt(5));
    var radius = 220;
    for (var i=0; i<NODE_COUNT; i++){
      var y = 1 - (i/(NODE_COUNT-1))*2;
      var r = Math.sqrt(1-y*y);
      var theta = golden * i;
      var jitter = 1 + (Math.sin(i*12.9898)*.5+.5)*.35;
      nodes.push({
        x: Math.cos(theta)*r*radius*jitter,
        y: y*radius*jitter,
        z: Math.sin(theta)*r*radius*jitter
      });
    }
  }

  var edges = [];
  function buildEdges(){
    edges = [];
    var maxDist = 220*0.85;
    for (var i=0;i<nodes.length;i++){
      var dists = [];
      for (var j=0;j<nodes.length;j++){
        if (i===j) continue;
        var a=nodes[i], b=nodes[j];
        var d = Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2+(a.z-b.z)**2);
        dists.push([j,d]);
      }
      dists.sort(function(p,q){ return p[1]-q[1]; });
      for (var k=0;k<3;k++){
        if (dists[k][1] < maxDist) edges.push([i, dists[k][0]]);
      }
    }
  }

  resize();
  buildNodes();
  buildEdges();
  window.addEventListener('resize', function(){ resize(); });

  window.addEventListener('mousemove', function(e){
    pointerX = (e.clientX / window.innerWidth) * 2 - 1;
    pointerY = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive:true });
  window.addEventListener('touchmove', function(e){
    if (!e.touches[0]) return;
    pointerX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    pointerY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
  }, { passive:true });
  window.addEventListener('scroll', function(){
    var maxScroll = window.innerHeight * 1.2;
    scrollT = Math.min(1, window.scrollY / maxScroll);
  }, { passive:true });

  function project(p, cx, cy, focal){
    var cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    var x1 = p.x*cosY - p.z*sinY;
    var z1 = p.x*sinY + p.z*cosY;
    var cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    var y2 = p.y*cosX - z1*sinX;
    var z2 = p.y*sinX + z1*cosX;
    var scale = focal / (focal + z2 + 400);
    return { x: cx + x1*scale, y: cy + y2*scale, s: scale, z: z2 };
  }

  var t0 = performance.now();
  function loop(now){
    var t = (now - t0) / 1000;
    var cx = W*0.72, cy = H*0.46;
    if (W < 900) { cx = W*0.5; cy = H*0.62; }
    var focal = 520;

    targetRotY = pointerX * 0.6 + t*0.06;
    targetRotX = pointerY * 0.28 + scrollT * 1.0;
    rotY += (targetRotY - rotY) * 0.04;
    rotX += (targetRotX - rotX) * 0.04;

    ctx.clearRect(0,0,W,H);

    var scale3d = 1 - scrollT*0.15;
    var projected = nodes.map(function(n){
      var p = { x:n.x*scale3d, y:n.y*scale3d, z:n.z*scale3d };
      return project(p, cx, cy, focal);
    });

    ctx.lineWidth = 1;
    for (var i=0;i<edges.length;i++){
      var a = projected[edges[i][0]], b = projected[edges[i][1]];
      var avgZ = (a.z+b.z)/2;
      var alpha = Math.max(0, Math.min(0.5, 0.32 + avgZ/1400));
      ctx.strokeStyle = 'rgba(78,168,58,'+alpha+')';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    for (var i=0;i<projected.length;i++){
      var p = projected[i];
      var r = Math.max(1, 2.2 * p.s);
      var alpha = Math.max(0.15, Math.min(1, 0.55 + p.z/900));
      ctx.beginPath();
      ctx.fillStyle = 'rgba(79,209,255,'+alpha+')';
      ctx.arc(p.x, p.y, r, 0, Math.PI*2);
      ctx.fill();
    }

    var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140);
    grad.addColorStop(0, 'rgba(78,168,58,0.18)');
    grad.addColorStop(1, 'rgba(78,168,58,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, 140, 0, Math.PI*2);
    ctx.fill();

    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

})();

};
