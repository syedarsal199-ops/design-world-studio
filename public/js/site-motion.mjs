
/* ---------- Submit-a-Project CTA: real Motion (Framer Motion for the web)
   scroll + interaction animations. Loaded as an ES module from a CDN since
   the site is vanilla JS. Uses a MutationObserver so every instance of the
   colorful "submit-cta" band animates the same way, no matter which page it
   renders on or whether it was added later (blog posts, case studies). ---------- */
try {
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion) {
    (async function(){
      var Motion;
      try {
        Motion = await import('https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm');
      } catch (err) { return; }
      var animate = Motion.animate, stagger = Motion.stagger, inView = Motion.inView;

      function initCard(section){
        if (section.__motionInit) return;
        section.__motionInit = true;

        var left = section.querySelector('.submit-cta-left');
        var right = section.querySelector('.submit-cta-right');
        var pills = section.querySelectorAll('.submit-pill');
        var fields = section.querySelectorAll('.submit-input');
        var btn = section.querySelector('.submit-cta-btn');
        var mail = section.querySelector('.submit-cta-mail');
        var socials = section.querySelectorAll('.submit-cta-socials a');

        inView(section, function(){
          if (left) animate(left, { opacity: [0, 1], x: [-28, 0] }, { duration: .7, easing: [.16,1,.3,1] });
          if (right) animate(right, { opacity: [0, 1], x: [28, 0] }, { duration: .7, delay: .08, easing: [.16,1,.3,1] });
          if (mail) animate(mail, { opacity: [0, 1], y: [10, 0] }, { duration: .5, delay: .18 });
          if (pills.length) animate(pills, { opacity: [0, 1], y: [12, 0] }, { duration: .45, delay: stagger(.06, { startDelay: .28 }) });
          if (fields.length) animate(fields, { opacity: [0, 1], y: [10, 0] }, { duration: .45, delay: stagger(.07, { startDelay: .42 }) });
          if (btn) animate(btn, { opacity: [0, 1], y: [10, 0] }, { duration: .5, delay: .68 });
          if (socials.length) animate(socials, { opacity: [0, 1], scale: [.7, 1] }, { duration: .4, delay: stagger(.05, { startDelay: .5 }) });
          return function(){};
        }, { amount: .3 });

        pills.forEach(function(p){
          p.addEventListener('mouseenter', function(){ animate(p, { scale: 1.06 }, { duration: .25, easing: [.16,1,.3,1] }); });
          p.addEventListener('mouseleave', function(){ animate(p, { scale: 1 }, { duration: .3, easing: [.16,1,.3,1] }); });
        });
        if (btn) {
          btn.addEventListener('mouseenter', function(){ animate(btn, { scale: 1.02 }, { duration: .25 }); });
          btn.addEventListener('mouseleave', function(){ animate(btn, { scale: 1 }, { duration: .3 }); });
        }
        socials.forEach(function(s){
          s.addEventListener('mouseenter', function(){ animate(s, { scale: 1.12, rotate: -6 }, { duration: .3, easing: [.16,1,.3,1] }); });
          s.addEventListener('mouseleave', function(){ animate(s, { scale: 1, rotate: 0 }, { duration: .3, easing: [.16,1,.3,1] }); });
        });
      }

      function scan(root){
        (root.querySelectorAll ? root.querySelectorAll('.submit-cta') : []).forEach(initCard);
      }
      scan(document);

      var mo = new MutationObserver(function(mutations){
        mutations.forEach(function(m){
          m.addedNodes && m.addedNodes.forEach(function(node){
            if (node.nodeType !== 1) return;
            if (node.classList && node.classList.contains('submit-cta')) initCard(node);
            scan(node);
          });
        });
      });
      mo.observe(document.body, { childList: true, subtree: true });

      window.__animateSubmitPill = function(pill){
        animate(pill, { scale: [1, 1.14, 1] }, { duration: .35, easing: [.16,1,.3,1] });
      };
      window.__animateSubmitBtn = function(btn){
        animate(btn, { scale: [1, .95, 1.03, 1] }, { duration: .45, easing: [.16,1,.3,1] });
      };
    })();
  }
} catch (err) { /* Motion is a progressive enhancement — the section still fully works without it */ }
