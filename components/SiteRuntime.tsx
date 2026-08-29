'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SiteRuntime() {
  const router = useRouter();

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
