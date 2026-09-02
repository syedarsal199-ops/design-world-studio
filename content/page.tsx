import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-real-estate-mobile-app-2026';

const TITLE = 'Real Estate Mobile App Development in 2026: The Complete Guide for US Agencies';
const DESCRIPTION =
  "Everything US real estate agencies and PropTech companies need to know about mobile app development in 2026 — must-have features, realistic costs, and how to choose a development partner.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-real-estate-mobile-app-2026' },
  keywords: [
    'real estate app development',
    'real estate mobile app development',
    'real estate app development company',
    'real estate app development USA',
    'AI-powered real estate app development',
    'cost to build a real estate app',
    'property listing app development',
    'real estate CRM app development',
  ],
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  mainEntityOfPage: 'https://designworldstudio.com/blog-real-estate-mobile-app-2026',
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://designworldstudio.com/favicon.svg' },
  },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build a real estate app?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused MVP typically ships in 6–10 weeks. A full-featured platform with AI matching, CRM integration, and virtual tours usually takes 3–6 months, depending on how much of it is custom-built versus integrated from existing services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a custom real estate app worth the investment compared to a template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For most brokerages and property companies, yes — a template can get a basic listing app live quickly, but it can't match your CRM, your lead workflow, or your brand, and it caps how much AI personalization you can ever add later.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need native iOS and Android apps, or is cross-platform enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the vast majority of real estate apps, a single cross-platform codebase delivers both iOS and Android from one engineering team, at a fraction of the cost and timeline of building two native apps separately.',
      },
    },
  ],
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Page route="blog-real-estate-mobile-app-2026" html={HTML} />
    </>
  );
}
