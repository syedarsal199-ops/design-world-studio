'use client';
import React, { useEffect } from 'react';

/** Renders one route's markup and signals the runtime to (re)boot. */
export default function Page({ route, html }: { route: string; html: string }) {
  useEffect(() => {
    document.body.setAttribute('data-page', route);
    const w = window as any;
    if (typeof w.__siteBoot === 'function') w.__siteBoot();
  }, [route, html]);

  return (
    <div className="page active" id={`route-${route}`} dangerouslySetInnerHTML={{ __html: html }} />
  );
}
