import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-mvp-to-scale-architecture';

export const metadata: Metadata = {
  title: "From MVP to Scale: Architecting Your First Build for Growth",
  description: "The MVP that has to be rewritten at 10,000 users was scoped wrong from the start. A few architectural decisions that cost nothing early and save everything later.",
  alternates: { canonical: "/blog-mvp-to-scale-architecture" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'From MVP to Scale: Architecting Your First Build for Growth',
  description: "The MVP that has to be rewritten at 10,000 users was scoped wrong from the start. A few architectural decisions that cost nothing early and save everything later.",
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: 'https://designworldstudio.com/blog-mvp-to-scale-architecture',
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
      <Page route="blog-mvp-to-scale-architecture" html={HTML} />
    </>
  );
}
