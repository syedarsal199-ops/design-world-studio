'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function SiteRuntime() {
  const router = useRouter();
  const pathname = usePathname();

  // Turn the site script's navigation events into real Next.js route changes.
  useEffect(() => {
    const onNav = (e: Event) => {
      const route = (e as CustomEvent).detail?.route;
      if (!route) return;
      router.push(route === 'home' ? '/' : `/${route}`);
    };
    window.addEventListener('site:navigate', onNav as EventListener);
    return () => window.removeEventListener('site:navigate', onNav as EventListener);
  }, [router]);

  // Client-side navigation swaps the page content without re-running
  // site.js, so ".reveal" cards/sections on the new page never get
  // observed by the scroll-reveal animation and stay invisible until a
  // hard refresh. Re-scan for them every time the route changes.
  useEffect(() => {
    const w = window as any;
    const timer = setTimeout(() => {
      if (typeof w.__reobserveReveals === 'function') w.__reobserveReveals();
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Script src="/js/site-shim.js" strategy="beforeInteractive" />
      <Script
        src="/js/site.js"
        strategy="afterInteractive"
        onReady={() => {
          const w = window as any;
          if (typeof w.__siteBoot === 'function') w.__siteBoot();
        }}
      />
      <Script src="/js/site-motion.mjs" type="module" strategy="afterInteractive" />
    </>
  );
}
