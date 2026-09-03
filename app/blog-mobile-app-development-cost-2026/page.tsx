import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-mobile-app-development-cost-2026';

const TITLE = "Mobile App Development Cost in 2026: What You'll Actually Pay";
const DESCRIPTION =
  'How much does mobile app development cost in 2026? Real price ranges for MVPs, full-featured apps, and enterprise platforms, plus what actually drives the cost up or down.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-mobile-app-development-cost-2026' },
  keywords: [
    'mobile app development cost',
    'how much does it cost to build an app',
    'app development cost 2026',
    'mobile app development pricing',
    'cost to build a mobile app',
    'MVP app development cost',
    'custom app development cost',
  ],
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: '2026-09-03',
  dateModified: '2026-09-03',
  image: 'https://designworldstudio.com/media/mobile-app-cost-2026.webp',
  mainEntityOfPage: 'https://designworldstudio.com/blog-mobile-app-development-cost-2026',
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
      <Page route="blog-mobile-app-development-cost-2026" html={HTML} />
    </>
  );
}
