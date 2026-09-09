import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/seo';

export const metadata: Metadata = {
  title: 'Technical & Content SEO Services',
  description: 'Technical and content SEO engineered for visibility, credibility, and compounding growth — measured in qualified traffic and revenue, not vanity rankings.',
  alternates: { canonical: "/seo" },
  openGraph: {
    title: 'Technical & Content SEO Services | Design World Studio',
    description: 'Technical and content SEO engineered for visibility, credibility, and compounding growth — measured in qualified traffic and revenue, not vanity rankings.',
    url: "/seo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Technical & Content SEO Services | Design World Studio',
    description: 'Technical and content SEO engineered for visibility, credibility, and compounding growth — measured in qualified traffic and revenue, not vanity rankings.',
  },
};

export default function RoutePage() {
  return <Page route="seo" html={HTML} />;
}
