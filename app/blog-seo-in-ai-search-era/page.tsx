import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-seo-in-ai-search-era';

export const metadata: Metadata = {
  title: "SEO in the Age of AI Search",
  description: "AI answers now sit in front of search results. What still works for visibility and what stopped, for teams that rely on organic traffic.",
  alternates: { canonical: "/blog-seo-in-ai-search-era" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'SEO in the Age of AI Search: What Actually Still Works',
  description: "AI answers now sit in front of search results. What still works for visibility and what stopped, for teams that rely on organic traffic.",
  datePublished: '2026-07-01',
  dateModified: '2026-07-01',
  mainEntityOfPage: 'https://www.designworldstudio.com/blog-seo-in-ai-search-era',
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
      <Page route="blog-seo-in-ai-search-era" html={HTML} />
    </>
  );
}
