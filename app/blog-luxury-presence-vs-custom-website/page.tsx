import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-luxury-presence-vs-custom-website';

const TITLE = 'Luxury Presence vs. a Custom Website: What Realtors Actually Get';
const META_TITLE = 'Luxury Presence vs. Custom Website';
const DESCRIPTION =
  'Real pricing, real contract terms, and who each option actually fits — an honest comparison of the Luxury Presence platform against a custom-built, owned real estate website.';
const URL = 'https://www.designworldstudio.com/blog-luxury-presence-vs-custom-website';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-luxury-presence-vs-custom-website' },
  keywords: [
    'Luxury Presence vs custom website',
    'Luxury Presence alternative',
    'Luxury Presence pricing',
    'Luxury Presence review',
    'real estate website platform vs custom build',
    'best real estate website design company',
    'real estate website builder comparison',
    'custom real estate website development',
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
  datePublished: '2026-09-21',
  dateModified: '2026-09-21',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate Website Platforms' },
    { '@type': 'Thing', name: 'Custom Web Development' },
    { '@type': 'Thing', name: 'Real Estate Marketing Technology' },
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Luxury Presence worth the money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'For an established producer with 15+ transactions a year and an existing database, often yes — the platform is genuinely well-built and their client results are real. For a newer agent or one without a large existing contact list, the AI CRM has less to work with and the cost is harder to justify.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Luxury Presence actually cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Pricing isn't published, but based on plan tiers and third-party reporting, expect a $3,500–$5,000 setup fee plus $300–$1,500 a month depending on tier, on a required 12-month agreement — commonly $7,000–$23,000 in year one before ad spend.",
      },
    },
    {
      '@type': 'Question',
      name: 'What do I own if I build a custom website instead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Your domain, your content, and your codebase outright. There's no platform subscription tying your website to a vendor, and no contract term standing between you and switching providers later.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a custom website compete with a platform like Luxury Presence on SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, especially for a specific market or niche rather than trying to out-rank their flagship brand terms. A site built with proper IDX rendering, page speed, and consistent content targeted at your actual local market can compete well — it just starts from zero authority rather than inheriting a decade of theirs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a custom build include AI features too?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It can. Chatbots trained on your own listings and FAQs, and automated lead routing and follow-up, are things we build into custom sites directly — scoped to your workflow rather than a one-size-fits-all system.',
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
      <Page route="blog-luxury-presence-vs-custom-website" html={HTML} />
    </>
  );
}
