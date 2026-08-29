import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-native-development';

export const metadata: Metadata = {
  title: "Why AI-Native Development Is Beating \"AI Bolted On\"",
  description: "Most teams are still adding AI as a feature after the fact. The products winning right now were architected around it from day one \u2014 here\u2019s what that looks like in practice.",
  alternates: { canonical: "/blog-ai-native-development" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Why AI-Native Development Is Beating "AI Bolted On"',
  description: "Most teams are still adding AI as a feature after the fact. The products winning right now were architected around it from day one \u2014 here\u2019s what that looks like in practice.",
  datePublished: '2026-08-01',
  dateModified: '2026-08-01',
  mainEntityOfPage: 'https://designworldstudio.com/blog-ai-native-development',
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
      <Page route="blog-ai-native-development" html={HTML} />
    </>
  );
}
