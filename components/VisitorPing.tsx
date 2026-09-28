"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const SESSION_KEY = 'dws_session';
const SEEN_KEY = 'dws_seen_before';
const COUNT_KEY = 'dws_page_count';

/**
 * Pings /api/visitor-alert on each page view so a Telegram alert can fire.
 * Fails silently — this must never affect what a visitor sees.
 */
export default function VisitorPing() {
  const pathname = usePathname();
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    // Guard against React strict-mode double-invoke and redundant re-renders.
    if (lastSent.current === pathname) return;
    lastSent.current = pathname;

    let isNewSession = false;
    let isReturning = false;
    let pageCount = 1;

    try {
      isNewSession = !sessionStorage.getItem(SESSION_KEY);
      if (isNewSession) sessionStorage.setItem(SESSION_KEY, String(Date.now()));

      isReturning = Boolean(localStorage.getItem(SEEN_KEY));
      localStorage.setItem(SEEN_KEY, '1');

      pageCount = Number(sessionStorage.getItem(COUNT_KEY) || '0') + 1;
      sessionStorage.setItem(COUNT_KEY, String(pageCount));
    } catch {
      // Private mode or blocked storage — send what we have.
    }

    const payload = JSON.stringify({
      path: pathname,
      referrer: document.referrer || '',
      isNewSession,
      isReturning,
      pageCount,
    });

    fetch('/api/visitor-alert', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {
      /* never surface tracking errors to the visitor */
    });
  }, [pathname]);

  return null;
}
