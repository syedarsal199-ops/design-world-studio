import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-real-estate-website-platform-comparison-2026';

const TITLE = 'Sierra Interactive vs. Luxury Presence vs. Custom Website: Which Real Estate Website Platform Fits in 2026?';
const META_TITLE = 'Sierra Interactive vs. Luxury Presence vs. Custom Website';
const DESCRIPTION =
  'Real 2026 pricing for Sierra Interactive, Luxury Presence, and a custom-built website — what each actually costs, what they do differently, and which fits your business.';
const URL = 'https://www.designworldstudio.com/blog-real-estate-website-platform-comparison-2026';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-real-estate-website-platform-comparison-2026' },
  keywords: [
    'Sierra Interactive vs Luxury Presence',
    'Sierra Interactive pricing 2026',
    'Luxury Presence pricing 2026',
    'real estate website platform comparison',
    'best real estate website platform 2026',
    'custom real estate website vs platform',
    'real estate website cost 2026',
    'real estate IDX website comparison',
    'which real estate website platform to choose',
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
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate Websites' },
    { '@type': 'Thing', name: 'Sierra Interactive' },
    { '@type': 'Thing', name: 'Luxury Presence' },
  ],
  citation: [
    'National Association of Realtors 2026 Technology Survey',
    'Sierra Interactive Pricing',
    'Luxury Presence Pricing',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, Sierra Interactive, Luxury Presence, or a custom website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Sierra Interactive has the lowest published entry point at roughly $300/month for a solo agent, and it's the only one of the three with transparent published tiers. Luxury Presence typically starts higher once the $3,500–$5,000 setup fee is counted. A custom build has no recurring platform fee at all — it's a one-time project cost, usually $5,000–$12,000 for a mid-range IDX site, with only light ongoing hosting and feed fees after launch.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Sierra Interactive include a CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes — CRM, dialer, texting and automation are built into every tier, which is a meaningful difference from Luxury Presence and a custom build, both of which typically connect to a CRM rather than including one natively.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Luxury Presence worth the setup fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'For an established producer with 15+ transactions a year and an existing contact database, often yes — their AI CRM and managed marketing genuinely work when there is real data and volume behind them. For a newer agent without that database yet, the fee is harder to justify against a lighter-cost alternative.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a custom website compete with these platforms on lead generation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, when it is built with the same fundamentals — real IDX rendering, fast load times, and AI chat or voice routing scoped to your actual leads — rather than treated as a static brochure. It starts without a platform’s inherited template authority, but it isn’t competing on authority; it’s competing on fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I stop paying for Sierra Interactive or Luxury Presence?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'The website and its lead tools go down with the subscription on both platforms — you are renting the infrastructure, not owning it. A custom build has no equivalent risk; the domain, code and content stay yours whether or not you ever hire anyone to touch it again.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a custom real estate website take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A mid-range custom site with IDX integration typically takes several weeks to a couple of months depending on scope; a full custom platform with AI search and deep CRM integration runs longer. Either way it is scoped against your actual requirements rather than a fixed template timeline.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do any of these three include AI voice or chat agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Sierra and Luxury Presence both offer AI-driven lead engagement as an add-on (Lead Engage and the AI CRM, respectively). A custom build can include the same thing natively.',
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
      <Page route="blog-real-estate-website-platform-comparison-2026" html={HTML} />
    </>
  );
}
