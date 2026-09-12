'use client';
import React, { useEffect } from 'react';

const SITE = 'https://www.designworldstudio.com';

/** Words that should keep their canonical casing in a breadcrumb label. */
const ACRONYMS: Record<string, string> = {
  ai: 'AI',
  mvp: 'MVP',
  seo: 'SEO',
  lms: 'LMS',
  idx: 'IDX',
  crm: 'CRM',
  roi: 'ROI',
  ui: 'UI',
  ux: 'UX',
  ios: 'iOS',
  us: 'US',
};

/** Names that a slug can't produce correctly on its own. */
const NAMES: Record<string, string> = {
  'work-ziptrip': 'ZipTrip',
  'work-crewiq': 'CrewIQ',
  'work-fovera': 'Fovera',
  'work-joytify': 'Joytify',
  'work-youdj-mixer': 'YouDJ Mixer',
  'work-unbroken-investing': 'Unbroken Investing',
  'blog-proptech-solutions-2026': 'PropTech Solutions',
  'blog-ai-agents-real-estate': 'AI Agents for Real Estate',
  'blog-real-estate-crm-development': 'Real Estate CRM Development',
  'blog-mobile-app-development-cost-2026': 'Mobile App Development Cost',
  'blog-real-estate-mobile-app-2026': 'Real Estate Mobile App Development',
  'blog-real-estate-website-development-2026': 'Real Estate Website Development',
  'blog-choosing-mobile-app-approach': 'Choosing Your Mobile Stack',
  'blog-mvp-to-scale-architecture': 'From MVP to Scale',
  'blog-seo-in-ai-search-era': 'SEO in the Age of AI Search',
  'blog-ai-native-development': 'AI-Native Development',
  'blog-ai-chatbot-roi': 'The Real ROI of AI Chatbots',
  'learning-management-system': 'Custom LMS Development',
  'ai-powered-software-development': 'AI-Powered Software Development',
};

function labelFor(route: string): string {
  if (NAMES[route]) return NAMES[route];
  const slug = route.replace(/^(blog|work)-/, '');
  return slug
    .split('-')
    .map((w) => ACRONYMS[w.toLowerCase()] ?? w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/**
 * Breadcrumb trail for a route, mirroring the breadcrumb already shown on the
 * page. Returns null for the home page, where a single-item trail says nothing.
 */
function breadcrumbSchema(route: string) {
  if (!route || route === 'home') return null;

  const trail: { name: string; url: string }[] = [{ name: 'Home', url: SITE }];

  if (route.startsWith('blog-')) {
    trail.push({ name: 'Blog', url: `${SITE}/blog` });
  } else if (route.startsWith('work-')) {
    trail.push({ name: 'Work', url: `${SITE}/work` });
  }

  trail.push({ name: labelFor(route), url: `${SITE}/${route}` });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Renders one route's markup and signals the runtime to (re)boot. */
export default function Page({ route, html }: { route: string; html: string }) {
  useEffect(() => {
    document.body.setAttribute('data-page', route);
    const w = window as any;
    if (typeof w.__siteBoot === 'function') w.__siteBoot();
  }, [route, html]);

  const crumbs = breadcrumbSchema(route);

  return (
    <>
      {crumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
        />
      )}
      <div className="page active" id={`route-${route}`} dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
