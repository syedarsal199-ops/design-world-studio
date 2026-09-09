import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-mvp-to-scale-architecture';

export const metadata: Metadata = {
  title: "From MVP to Scale: Architecture",
  description: "The MVP that gets rewritten at 10,000 users was scoped wrong on day one. How to architect a first build that survives its own success.",
  alternates: { canonical: "/blog-mvp-to-scale-architecture" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'From MVP to Scale: Architecting Your First Build for Growth',
  description: "The MVP that gets rewritten at 10,000 users was scoped wrong on day one. How to architect a first build that survives its own success.",
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: 'https://www.designworldstudio.com/blog-mvp-to-scale-architecture',
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
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
