import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-chatbot-roi';

export const metadata: Metadata = {
  title: "The Real ROI of AI Chatbots vs. Traditional Support",
  description: "\"Replace your support team with AI\" is a bad pitch. Here\u2019s the honest, narrower version \u2014 and where the real ROI actually comes from.",
  alternates: { canonical: "/blog-ai-chatbot-roi" },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Real ROI of AI Chatbots vs. Traditional Support',
  description: "\"Replace your support team with AI\" is a bad pitch. Here\u2019s the honest, narrower version \u2014 and where the real ROI actually comes from.",
  datePublished: '2026-08-01',
  dateModified: '2026-08-01',
  mainEntityOfPage: 'https://designworldstudio.com/blog-ai-chatbot-roi',
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
      <Page route="blog-ai-chatbot-roi" html={HTML} />
    </>
  );
}
