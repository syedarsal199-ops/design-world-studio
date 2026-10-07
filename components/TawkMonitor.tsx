"use client";

import { useEffect } from 'react';

/**
 * Tawk.to — loaded for VISITOR MONITORING ONLY.
 *
 * The chat bubble is deliberately hidden: this site already has its own AI chat
 * widget (components/ChatWidget.tsx) in the same bottom-right corner, and two
 * launchers there is a mess. What we want from Tawk is the live visitor list —
 * who is on the site right now, their country/city, which page they're reading —
 * plus new-visitor push notifications in the Tawk dashboard and mobile apps.
 *
 * Set NEXT_PUBLIC_TAWK_SRC in Vercel to your embed URL, which looks like:
 *   https://embed.tawk.to/<propertyId>/<widgetId>
 * Leave it unset and this component does nothing at all.
 *
 * To show the chat bubble later: delete the hideWidget() call below and the
 * `iframe[title="chat widget"]` rule in globals.css.
 */

const TAWK_SRC = process.env.NEXT_PUBLIC_TAWK_SRC;
const SCRIPT_ID = 'tawk-monitor';

export default function TawkMonitor() {
  useEffect(() => {
    if (!TAWK_SRC) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const w = window as any;
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

    // Suppress the launcher as soon as the widget is ready.
    const prevOnLoad = w.Tawk_API.onLoad;
    w.Tawk_API.onLoad = function () {
      try {
        if (typeof prevOnLoad === 'function') prevOnLoad();
        if (typeof w.Tawk_API.hideWidget === 'function') w.Tawk_API.hideWidget();
      } catch {
        /* monitoring is best-effort; never break the page */
      }
    };

    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.async = true;
    s.src = TAWK_SRC;
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.head.appendChild(s);
  }, []);

  return null;
}
