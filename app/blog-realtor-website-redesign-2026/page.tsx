import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-realtor-website-redesign-2026';

const TITLE = 'What Realtors Should Know Before Redesigning Their Website in 2026';
const META_TITLE = 'Realtor Website Redesign: What to Know in 2026';
const DESCRIPTION =
  'IDX speed, mobile experience, and AI lead response are what actually determine ROI on a real estate website redesign — not the color palette. What to check before you sign.';
const URL = 'https://www.designworldstudio.com/blog-realtor-website-redesign-2026';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-realtor-website-redesign-2026' },
  keywords: [
    'realtor website redesign',
    'real estate website redesign 2026',
    'real estate website IDX integration',
    'real estate website mobile experience',
    'AI chatbot real estate website',
    'real estate lead routing automation',
    'how to choose a real estate web design company',
    'real estate website SEO',
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
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate Website Design' },
    { '@type': 'Thing', name: 'IDX Integration' },
    { '@type': 'Thing', name: 'Real Estate Lead Generation' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "What's the most important thing to fix in a real estate website redesign?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Whatever is standing between a visitor and the one action you want them to take — searching listings, requesting a valuation, or booking a call. A site that clearly funnels toward a single action outperforms one that tries to showcase everything at once.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does IDX integration really affect SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes. A slow or poorly built IDX feed can drag down page speed site-wide, and search engines penalize slow pages regardless of how good the listing content is. Whether listings are server-side or client-side rendered, and how often the feed syncs, both matter for rankings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I design for mobile first or desktop first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Mobile first. The majority of home searches now happen on a phone, so a site approved on a desktop monitor and only spot-checked on mobile is being optimized for the wrong device.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need an AI chatbot on my real estate website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Not strictly, but a chatbot trained on your actual listings and FAQs can capture serious after-hours inquiries that would otherwise go unanswered until morning. A generic, untrained chatbot is usually worse than none at all — visitors notice quickly when it's not actually useful.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who should own the code after my website is built?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "You should. Confirm before signing whether you'll own your domain, your content, and your codebase (or have a clear export path) — some agencies build on locked platforms that make switching providers later expensive or impossible.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I ask about support after launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Ask specifically what happens three months and twelve months after launch, and what it costs. A website needs ongoing attention for search rankings, plugin updates, security patches, and IDX feed maintenance — it isn't a one-time purchase.",
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
      <Page route="blog-realtor-website-redesign-2026" html={HTML} />
    </>
  );
}
