import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-showing-scheduling-software-real-estate-2026';

const TITLE =
  'ShowingTime+ vs. Showami vs. an AI Scheduling Agent: Which Actually Saves You Time in 2026?';
const META_TITLE = 'AI Showing Scheduling Software for Real Estate';
const DESCRIPTION =
  'ShowingTime+ raised its price 67% in November 2026. Real pricing for ShowingTime+, Showami, and an AI scheduling agent approach, and which one actually fits your team.';
const URL = 'https://www.designworldstudio.com/blog-ai-showing-scheduling-software-real-estate-2026';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-showing-scheduling-software-real-estate-2026' },
  keywords: [
    'AI showing scheduling software real estate',
    'ShowingTime+ pricing 2026',
    'Showami pricing',
    'real estate showing scheduling automation',
    'AI scheduling agent real estate',
    'showing coordination software',
    'best showing scheduling tool for realtors',
    'ShowingTime vs Showami',
    'real estate appointment scheduling AI',
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
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate Showing Scheduling' },
    { '@type': 'Thing', name: 'AI Scheduling Agents' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
  ],
  citation: [
    'National Association of Realtors 2026 Technology Report',
    'Zillow Consumer Housing Trends Report',
    'PricingSaaS ShowingTime Pricing History',
    'Showami Pricing',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the difference between ShowingTime+, Showami, and an AI scheduling agent?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "ShowingTime+ is a subscription calendar and confirmation platform. Showami is a pay-per-showing marketplace that supplies a local agent to physically attend a showing you can't. An AI scheduling agent is a conversational layer that handles the booking conversation itself — answering requests, checking a live calendar, and confirming — built around the CRM and calendar you already use rather than sold as a single off-the-shelf product.",
      },
    },
    {
      '@type': 'Question',
      name: "How much does ShowingTime's Appointment Center cost now?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The Appointment Center add-on rose from $15/month to $25/month in early November 2026, a 67% increase, according to pricing-tracking firm PricingSaaS. Base scheduling tools are often included at no extra cost through MLS membership; the Appointment Center is the paid add-on for live and after-hours coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Showami cost per showing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "The requesting agent sets a price between $45 and $400 per showing. The showing agent who accepts it keeps roughly $28 to $367 of that, plus 97% of any tip. There's no subscription fee; it's free to join and strictly pay-per-use.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do buyers actually prefer booking tours online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "64% of successful buyers say they somewhat or completely prefer booking an in-person tour online rather than by phone, per Zillow's Consumer Housing Trends research. That's a stated preference, not a guarantee that any specific tool converts better — but it's a strong signal that a scheduling flow routed entirely through a human inbox is behind what buyers expect.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will an AI scheduling agent replace my showing coordinator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. It removes the repetitive back-and-forth — confirming standard requests, checking the calendar, logging the outcome — so a human only has to step in for the exceptions: access issues, pushback, anything that needs judgment. The relationship and the edge cases stay human work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it worth building a custom AI scheduling agent instead of buying a tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It depends on volume and what you already have. A solo agent with a handful of listings is usually better served by an existing platform like ShowingTime+. A team or brokerage with real lead volume and an existing CRM tends to get more value from a scheduling agent built around that CRM, because it compounds with lead scoring and follow-up rather than living as a separate calendar.',
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
      <Page route="blog-ai-showing-scheduling-software-real-estate-2026" html={HTML} />
    </>
  );
}
