/* Runtime shim: lets the site script be re-booted on every Next.js route
   change without stacking duplicate listeners, timers or observers. */
(function(){
  if (window.__siteShimInstalled) return;
  window.__siteShimInstalled = true;

  var tracked = [];
  var intervals = [];
  var observers = [];
  var booting = false;

  var rawAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, fn, opts){
    if (booting) tracked.push({ t: this, type: type, fn: fn, opts: opts });
    return rawAdd.call(this, type, fn, opts);
  };

  var rawSetInterval = window.setInterval;
  window.setInterval = function(){
    var id = rawSetInterval.apply(window, arguments);
    if (booting) intervals.push(id);
    return id;
  };

  var RawIO = window.IntersectionObserver;
  if (RawIO) {
    window.IntersectionObserver = function(cb, opt){
      var o = new RawIO(cb, opt);
      if (booting) observers.push(o);
      return o;
    };
    window.IntersectionObserver.prototype = RawIO.prototype;
  }

  var RawMO = window.MutationObserver;
  if (RawMO) {
    window.MutationObserver = function(cb){
      var o = new RawMO(cb);
      if (booting) observers.push(o);
      return o;
    };
    window.MutationObserver.prototype = RawMO.prototype;
  }

  function teardown(){
    tracked.forEach(function(r){
      try { r.t.removeEventListener(r.type, r.fn, r.opts); } catch (e) {}
    });
    tracked = [];
    intervals.forEach(function(id){ clearInterval(id); });
    intervals = [];
    observers.forEach(function(o){ try { o.disconnect(); } catch (e) {} });
    observers = [];
  }

  window.__siteBoot = function(){
    if (typeof window.__bootSite !== 'function') return;
    teardown();
    booting = true;
    try { window.__bootSite(); }
    catch (e) { console.error('[site boot]', e); }
    finally { booting = false; }
  };
})();
