import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-choosing-mobile-app-approach';

export const metadata: Metadata = {
  title: "Native, Cross-Platform, or AI-Assisted: Choosing Your Mobile Stack",
  description: "There\u2019s no universally \"best\" mobile stack \u2014 only the right choice for a given team, timeline, and feature set. The framework we use when scoping a client\u2019s build.",
  alternates: { canonical: "/blog-choosing-mobile-app-approach" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Native, Cross-Platform, or AI-Assisted: Choosing Your Mobile Stack',
  description: "There\u2019s no universally \"best\" mobile stack \u2014 only the right choice for a given team, timeline, and feature set. The framework we use when scoping a client\u2019s build.",
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: 'https://designworldstudio.com/blog-choosing-mobile-app-approach',
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://designworldstudio.com/favicon.svg' },
  },
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <Page route="blog-choosing-mobile-app-approach" html={HTML} />
    </>
  );
}
