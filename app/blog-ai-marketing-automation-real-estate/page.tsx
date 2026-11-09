import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-marketing-automation-real-estate';

const TITLE = 'AI Marketing Automation for Real Estate: Email, SMS & the Nurture Sequence That Actually Converts';
const META_TITLE = 'AI Marketing Automation for Real Estate';
const DESCRIPTION =
  'Only 16% of agents use marketing automation at all. Real 2026 data on email vs. SMS response rates, what AI nurture tools cost, and how to build a sequence that doesn’t go cold.';
const URL = 'https://www.designworldstudio.com/blog-ai-marketing-automation-real-estate';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-marketing-automation-real-estate' },
  keywords: [
    'AI marketing automation real estate',
    'real estate email marketing automation',
    'real estate SMS marketing automation',
    'real estate lead nurture software',
    'AI drip campaign real estate',
    'real estate marketing automation cost',
    'Real Geeks Geek AI pricing',
    'Lofty AI Sales Agent pricing',
    'real estate email vs SMS response rate',
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
  datePublished: '2026-10-26',
  dateModified: '2026-10-26',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Marketing Automation' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
    { '@type': 'Thing', name: 'Lead Nurture' },
  ],
  citation: [
    'National Association of Realtors 2026 Technology Report',
    'GetResponse Email Marketing Benchmarks 2026',
    'TextUs 2026 SMS Response Rate Survey',
    'Harvard Business Review Lead Response Study',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is AI marketing automation for real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "It's software that automatically nurtures leads with personalized email and text sequences based on their behavior — what they clicked, searched, or ignored — rather than sending every lead the same fixed drip campaign on a calendar.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is email or SMS better for real estate lead nurture?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'They serve different moments. Email benchmarks around a 42.71% open rate in real estate and is the better channel for longer, educational content. SMS gets roughly four times the response rate of outreach email (34.7% vs. 8.5%, per a 2026 TextUs survey) and is the better channel for anything time-sensitive, like a new listing match or a showing confirmation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI marketing automation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Entry-level CRM drip campaigns are often bundled into a platform's base plan, around $299 to $449 a month. A dedicated AI layer that personalizes and adapts the sequence typically runs as an add-on, from roughly $60 to $200 a month depending on lead volume and the platform.",
      },
    },
    {
      '@type': 'Question',
      name: "Do I need a dedicated AI tool if my CRM already has drip campaigns?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Only if your current drip campaigns don't adapt to what a lead actually does. A scheduled sequence that sends the same five emails to everyone regardless of engagement is table stakes now, not automation in any meaningful sense — the value is in behavior-triggered personalization.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it legal to text leads automatically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Only with documented opt-in consent, under TCPA rules, and a working opt-out that's honored immediately. This is the one part of marketing automation where getting it wrong carries real legal exposure, so it has to be built in from the start, not added later.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does marketing automation connect to AI lead scoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "They're meant to run together. Lead scoring tells you who to prioritize; marketing automation is what keeps everyone else warm until they're ready, and feeds engagement data back into the score so it keeps improving.",
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
      <Page route="blog-ai-marketing-automation-real-estate" html={HTML} />
    </>
  );
}
