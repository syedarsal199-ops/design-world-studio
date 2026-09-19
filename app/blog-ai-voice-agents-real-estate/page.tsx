import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-voice-agents-real-estate';

const TITLE = 'AI Voice Agents for Real Estate: When a Phone Call Beats a Chat Widget';
const META_TITLE = 'AI Voice Agents for Real Estate';
const DESCRIPTION =
  'A chat widget only catches visitors already on your site. An AI voice agent answers every real phone call, 24/7, and books the showing. Where each one wins.';
const URL = 'https://www.designworldstudio.com/blog-ai-voice-agents-real-estate';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-voice-agents-real-estate' },
  keywords: [
    'AI voice agent for real estate',
    'AI voice agent real estate leads',
    'real estate call answering AI',
    'AI phone agent real estate',
    'real estate missed call automation',
    'AI voice assistant for brokerages',
    'voice AI vs chatbot real estate',
    'real estate lead response automation',
    'after hours call answering real estate',
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
  datePublished: '2026-09-18',
  dateModified: '2026-09-18',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'AI Voice Agents' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
    { '@type': 'Thing', name: 'Lead Response Automation' },
  ],
  citation: [
    'National Association of Realtors',
    'Real Trends / InsideSales Lead Response Study',
    'Inman Real Estate Technology Survey',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI voice agent for real estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "It's software that answers real phone calls — from a sign, a listing site, or a missed-call callback — and holds a real spoken conversation: qualifying the caller, answering listing questions, and booking a showing on a live calendar, then writing the outcome into the CRM.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is a voice agent better than a chat widget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "They solve different problems. A chat widget serves visitors already on your website who'd rather type a quick question. A voice agent serves everyone who picks up a phone instead — sign calls, Zillow \"contact agent\" buttons, and missed calls — which a chat widget never reaches at all.",
      },
    },
    {
      '@type': 'Question',
      name: "Will callers know they're talking to an AI?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'They should, and a well-built voice agent says so upfront. Disclosure carries less risk than concealment, and most callers are comfortable with an AI assistant handling the first call as long as it is not pretending to be human.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it actually book a showing during the call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, when it is connected to a live calendar with conflict checking — the same way a human coordinator would confirm a time on the spot rather than promising to follow up later.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does it replace an ISA or a live answering service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. It removes the gap when nobody is available — nights, weekends, overflow during a busy launch. Negotiation, judgment calls, and building the actual relationship stay human work; the voice agent’s job is making sure a ringing phone never goes unanswered.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI voice agent cost to set up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "It's scoped to call volume and how many workflows and systems it touches rather than sold as a flat package. A single use case, like after-hours sign calls, is typically weeks to build; a full multi-line setup with CRM writeback and callback logic is a larger engagement.",
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
      <Page route="blog-ai-voice-agents-real-estate" html={HTML} />
    </>
  );
}
