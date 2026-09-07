import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-proptech-solutions-2026';

const TITLE =
  'PropTech Solutions in 2026: AI Agents, Mobile Apps, Websites & Marketing for Real Estate';
const DESCRIPTION =
  'A complete guide to PropTech solutions for real estate in 2026 — AI agentic systems that respond in seconds, mobile apps, IDX websites, and marketing that compounds. With real market data and costs.';
const URL = 'https://www.designworldstudio.com/blog-proptech-solutions-2026';
const IMAGE = 'https://www.designworldstudio.com/media/proptech-solutions-stack.webp';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-proptech-solutions-2026' },
  keywords: [
    'proptech solutions',
    'proptech company',
    'AI agents for real estate',
    'agentic AI real estate',
    'real estate mobile app development',
    'real estate website development',
    'real estate marketing solutions',
    'real estate technology solutions',
    'IDX website development',
    'proptech development company',
    'AI lead qualification real estate',
    'real estate software development',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    images: [{ url: IMAGE, width: 1400, height: 598, alt: 'The four PropTech solution pillars' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: '2026-09-07',
  dateModified: '2026-09-07',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'PropTech' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
    { '@type': 'Thing', name: 'Artificial Intelligence' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PropTech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'PropTech (property technology) is software and digital infrastructure built specifically for the real estate industry — covering property search and listings, transaction management, AI-driven lead handling, property management, and investment analytics. The global market is projected to grow from roughly $50 billion in 2026 to $115 billion by 2033.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are AI agents in real estate, and how are they different from chatbots?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A chatbot answers questions. An AI agent takes actions — it qualifies a lead against your criteria, books showings on a real calendar, updates your CRM, runs multi-step follow-up sequences, and escalates to a human when a conversation warrants it. Agents close the gap between a lead arriving and a meaningful first response from hours to seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a full PropTech solution cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It depends on which pieces you need. A focused mobile app MVP starts around $15,000; a full-featured app runs $35,000 to $75,000; a custom website with IDX integration and conversion architecture typically falls between those; and an AI agent layer is scoped against how many workflows it automates. Most brokerages start with the single highest-leverage piece and build outward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a mobile app if I already have a good website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Not always. If your traffic is mostly search-driven and transactional, a fast, well-built website with strong conversion architecture may deliver better returns per dollar. An app earns its cost when you need repeat engagement — push notifications for new listings, an investor or tenant portal, or an audience that returns weekly.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to see results from real estate SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Realistically, three to six months before meaningful organic traffic arrives, and longer for competitive terms. That lag is why it is worth starting early — the compounding only begins once the content exists and is indexed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can AI agents work with my existing CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In most cases, yes. The major real estate CRMs expose APIs that allow an agent layer to read and write leads, notes, and activity. Integration effort varies by platform, and it is the first thing worth checking before scoping any AI project.',
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
      <Page route="blog-proptech-solutions-2026" html={HTML} />
    </>
  );
}
