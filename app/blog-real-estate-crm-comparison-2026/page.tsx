import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-real-estate-crm-comparison-2026';

const TITLE = 'Follow Up Boss vs. kvCORE vs. Lofty: Which Real Estate CRM Should You Actually Buy in 2026?';
const META_TITLE = 'Follow Up Boss vs. kvCORE vs. Lofty: Best Real Estate CRM';
const DESCRIPTION =
  'Real 2026 pricing for Follow Up Boss, kvCORE (BoldTrail) and Lofty, what each one actually does differently, and which fits your team.';
const URL = 'https://www.designworldstudio.com/blog-real-estate-crm-comparison-2026';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-real-estate-crm-comparison-2026' },
  keywords: [
    'best real estate CRM software 2026',
    'Follow Up Boss vs kvCORE',
    'Follow Up Boss vs Lofty',
    'kvCORE vs Lofty',
    'BoldTrail pricing 2026',
    'Follow Up Boss pricing',
    'Lofty CRM pricing',
    'real estate CRM comparison',
    'real estate CRM for brokerages',
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
  datePublished: '2026-09-28',
  dateModified: '2026-09-28',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'Real Estate CRM Software' },
    { '@type': 'Thing', name: 'PropTech' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
  ],
  citation: [
    'Business Research Insights',
    'DataIntelo Real Estate CRM Market Report',
    'Luxury Presence CRM Pricing Guides',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which is cheaper, Follow Up Boss, kvCORE, or Lofty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Follow Up Boss is the cheapest to start, at $69/month for a solo agent, and the only one of the three with fully published pricing. kvCORE and Lofty are both quote-based, with third-party estimates starting around $449–$499/month for a small team, but the final number depends heavily on team size, negotiated terms, and which add-ons (AI, calling, ad management) you include.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Follow Up Boss include a website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. Follow Up Boss is a CRM and lead-response layer only — it connects to a website and lead sources you already have rather than providing its own. That is by design: it is built to be the CRM other real estate tools integrate with, not an all-in-one platform.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between kvCORE and BoldTrail?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'They are the same product. kvCORE rebranded as BoldTrail; pricing, features and the underlying platform carried over under the new name, so most 2026 sales conversations and quotes will reference BoldTrail directly.',
      },
    },
    {
      '@type': 'Question',
      name: "Is Lofty's AI Sales Agent worth the extra cost?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'It depends on lead volume. At roughly $60/month for 200 leads of AI coverage, it earns its cost quickly for a team with meaningful inbound volume and a follow-up gap. For a low-volume solo agent, the same budget is often better spent on faster manual follow-up than on automating a small number of leads.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from one of these to another later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, but data migration and contract terms make it more expensive than it should be, which is exactly why confirming contract length and export rights before signing matters. Moving CRMs is a common enough pain point that "how do I get my data out" is worth asking a vendor directly before you need the answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do any of these replace a custom real estate CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'For most brokerages, yes — that is the honest recommendation in the majority of cases. They stop being enough only when your business model itself is unusual: property management at scale, investment platforms, or workflows specific enough that no off-the-shelf product models them well.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which of these has the best API for building custom automation on top?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Follow Up Boss is generally the most open and best-documented of the three, which is why it is the most common CRM for teams layering a custom AI agent or voice agent on top rather than waiting for the CRM vendor to build one natively. Confirm current API scope with kvCORE or Lofty directly, since access can vary by plan tier.',
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
      <Page route="blog-real-estate-crm-comparison-2026" html={HTML} />
    </>
  );
}
