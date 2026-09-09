import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-agents-real-estate';

const TITLE = "AI Agents for Real Estate: What They Actually Do (and What They Can't)";
const META_TITLE = 'AI Agents for Real Estate';
const DESCRIPTION =
  'AI agents qualify leads, book showings and update your CRM in seconds \u2014 unlike chatbots, which only answer. What they do, and what they shouldn\'t.';
const URL = 'https://www.designworldstudio.com/blog-ai-agents-real-estate';
const IMAGE = 'https://www.designworldstudio.com/media/ai-agents-vs-chatbot.webp';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-agents-real-estate' },
  keywords: [
    'AI agents for real estate',
    'agentic AI real estate',
    'AI lead qualification real estate',
    'real estate AI assistant',
    'AI chatbot vs AI agent',
    'real estate lead response automation',
    'AI agent CRM integration real estate',
    'PropTech AI agents',
    'AI for brokerages',
  ],
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    images: [{ url: IMAGE, width: 1400, height: 636, alt: 'Chatbot versus AI agent comparison' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: '2026-09-09',
  dateModified: '2026-09-09',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Artificial Intelligence Agents' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
    { '@type': 'Thing', name: 'Lead Management' },
  ],
  citation: [
    'National Association of Realtors',
    'Delta Media Group Annual Brokerage Survey 2026',
    'Real Trends / InsideSales',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI agent in real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "An AI agent is software that takes actions on a brokerage's behalf rather than only answering questions. In practice it responds to an inbound enquiry within seconds, qualifies the lead against the brokerage's criteria, books showings on a real calendar, updates the CRM, and escalates to a human agent when the conversation warrants it.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is an AI agent different from a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "A chatbot replies to questions inside a chat window and stops when the window closes. An AI agent has access to the brokerage's systems and can perform actions in them — checking calendars, writing CRM records, sending follow-ups days later, and deciding when to hand a conversation to a person.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI agent replace real estate agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. It replaces the gap between a lead arriving and a human responding to it. Negotiation, advice, judgement and the relationship itself remain human work. The realistic effect is that agents spend their time on qualified leads instead of losing three out of four before anyone picks up the phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI agents work with existing real estate CRMs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'In most cases, yes. The major real estate CRMs expose APIs that let an agent layer read and write leads, notes and activity. Integration effort varies by platform, and confirming it is the first step before scoping any project — an agent that cannot write back to your system of record creates more work than it removes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should an AI agent tell people it is not human?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. Disclosing that a prospect is speaking with an AI assistant is both the lower-risk position and the more effective one. Buyers are largely comfortable with an assistant handling the first response; what damages trust is discovering they were misled about it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI agent for real estate cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It is scoped against how many workflows it automates and how many systems it must integrate with, rather than sold as a fixed package. A focused agent covering first response and qualification for one lead source is a matter of weeks to build; a full platform handling multiple sources, routing rules and transaction support is a larger engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the biggest mistake brokerages make with AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Pointing them at content generation instead of response time. Listing descriptions and social captions were never the part of the business losing money. The measurable loss sits in the hours between an enquiry arriving and a human answering it.',
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
      <Page route="blog-ai-agents-real-estate" html={HTML} />
    </>
  );
}
