"use client";

import { useEffect } from 'react';

/**
 * Tawk.to live chat and visitor monitoring.
 *
 * This is the site's chat widget: the launcher is visible so visitors can start
 * a conversation, which you answer from the Tawk dashboard or mobile app. Tawk
 * also gives the live visitor list - who is on the site now, their country and
 * city, which page they are reading - plus new-visitor notifications.
 *
 * The embed id below is public by design - it ships in the page source of every
 * site running Tawk - so it lives in the code like the GA4 and Apollo ids.
 * NEXT_PUBLIC_TAWK_SRC overrides it if you ever need a different property.
 */

const TAWK_DEFAULT_SRC = 'https://embed.tawk.to/6ac6983bea955334bb041fc7/1k4bs5abp';
const TAWK_SRC = process.env.NEXT_PUBLIC_TAWK_SRC || TAWK_DEFAULT_SRC;
const SCRIPT_ID = 'tawk-monitor';

export default function TawkMonitor() {
  useEffect(() => {
    if (!TAWK_SRC) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const w = window as any;
    w.Tawk_API = w.Tawk_API || {};
    w.Tawk_LoadStart = new Date();

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
