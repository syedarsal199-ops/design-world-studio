import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-real-estate-website-development-2026';

const TITLE = 'Real Estate Website Development in 2026: The Complete Guide for US Brokerages';
const DESCRIPTION =
  'Everything US real estate brokerages and PropTech companies need to know about website development in 2026 — must-have features, realistic costs, common mistakes, and how to choose a development partner.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-real-estate-website-development-2026' },
  keywords: [
    'real estate website development',
    'real estate web design',
    'IDX website development',
    'real estate web development company',
    'real estate website cost',
    'MLS integration website',
    'real estate SEO website',
    'custom real estate website',
  ],
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-09-02',
  dateModified: '2026-09-02',
  mainEntityOfPage: 'https://designworldstudio.com/blog-real-estate-website-development-2026',
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://designworldstudio.com/favicon.svg' },
  },
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <Page route="blog-real-estate-website-development-2026" html={HTML} />
    </>
  );
}
