import React from 'react';
import { PRECHROME, HEADER, MOBILE_MENU, TICKER, FOOTER, DYNAMIC_MOUNTS, PF_SOURCES } from './chrome';

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: PRECHROME }} />
      <div dangerouslySetInnerHTML={{ __html: HEADER }} />
      <div dangerouslySetInnerHTML={{ __html: MOBILE_MENU }} />
      <main>
        {children}
        {/* Persistent mounts: the site script builds each project/blog-post
            page once and appends it here, so the generated route (e.g.
            /work-<slug>, /blog-<slug>) keeps working across navigations
            instead of disappearing when the active page unmounts. */}
        <div dangerouslySetInnerHTML={{ __html: DYNAMIC_MOUNTS }} />
        {/* Hidden source decks for the home page's "Work we've designed &
            built" showcase, which clones its cards from the Website Dev,
            iOS Dev, and Real Estate pages at runtime. In the original
            single-file site all pages coexisted in the DOM so that clone
            always found its source; in Next.js only the active route is
            mounted, so these copies stay in the DOM persistently and
            site.js is patched to clone from them instead. */}
        <div dangerouslySetInnerHTML={{ __html: PF_SOURCES }} />
      </main>
      <div dangerouslySetInnerHTML={{ __html: TICKER }} />
      <div dangerouslySetInnerHTML={{ __html: FOOTER }} />
    </>
  );
}
