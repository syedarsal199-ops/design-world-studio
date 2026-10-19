import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-lead-scoring-real-estate';

const TITLE = "AI Lead Scoring for Real Estate: How It Works and What It's Worth in 2026";
const META_TITLE = 'AI Lead Scoring for Real Estate';
const DESCRIPTION =
  "41% of top brokerages never respond to a web lead at all. What AI lead scoring actually tracks, what Structurely, Ylopo and BoldTrail charge in 2026, and whether it's worth it over CRM-native scoring.";
const URL = 'https://www.designworldstudio.com/blog-ai-lead-scoring-real-estate';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-lead-scoring-real-estate' },
  keywords: [
    'AI lead scoring real estate',
    'real estate lead scoring software',
    'AI lead qualification real estate',
    'best AI lead scoring tools real estate',
    'Structurely vs Ylopo',
    'BoldTrail lead scoring',
    'kvCORE smart CRM lead scoring',
    'real estate CRM AI lead ranking',
    'real estate lead response automation',
  ],
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    images: [{ url: IMAGE, width: 512, height: 512, alt: 'Design World Studio' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: '2026-10-19',
  dateModified: '2026-10-19',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'AI Lead Scoring' },
    { '@type': 'Thing', name: 'Real Estate CRM' },
    { '@type': 'Thing', name: 'Lead Response Automation' },
  ],
  citation: [
    'National Association of Realtors',
    'Roof AI Brokerage Response Time Audit',
    'Pinova Real Estate Lead Response Analysis',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI lead scoring in real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "It's a system that ranks inbound leads by likelihood to convert, using behavioral signals — listing views, email engagement, saved searches, conversational answers about timeline and financing — instead of relying on an agent to guess from a static intake form.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is lead scoring the same thing as an AI voice agent or chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. A voice agent or chatbot talks to the lead. Lead scoring ranks the lead, often using the output of that conversation as one input. Many platforms do both, but scoring is the ranking layer, not the conversation itself.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a separate AI tool, or does my CRM already do this?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Platforms like BoldTrail (formerly kvCORE) and Follow Up Boss include behavior-based scoring and Smart Lists at no extra cost. A dedicated tool like Structurely or Ylopo adds a layer that actively qualifies leads through text or voice, which tends to produce a clearer signal but costs more and requires its own integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI lead scoring cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'CRM-native scoring is included in your existing subscription. Dedicated AI qualification tools run roughly $500 to $1,800+ a month depending on lead volume, plus pass-through messaging costs and, in some cases, a required upgrade to a specific CRM tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is AI lead scoring, really?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "It's only as good as the signals feeding it and the thresholds set around it. A model built on page views alone will rank an idly curious browser the same as a motivated buyer if both click a lot. The more reliable scores combine behavior with something the lead actually said — timeline, financing status, intent to view a property.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the fastest way to know if this would help my team?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Pull your lead list from the last 90 days and check two numbers: average first-response time, and what share of leads never got contacted at all. If either number is uncomfortable, scoring and automated qualification are solving a real problem, not a theoretical one.',
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
      <Page route="blog-ai-lead-scoring-real-estate" html={HTML} />
    </>
  );
}
