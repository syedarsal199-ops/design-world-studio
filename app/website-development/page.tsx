import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/website-development';

export const metadata: Metadata = {
  title: 'Website Design & Development Company',
  description: 'Cinematic, high-performance websites engineered to convert — combining design craft with technical SEO from the first line of code.',
  alternates: { canonical: "/website-development" },
  openGraph: {
    title: 'Website Design & Development Company | Design World Studio',
    description: 'Cinematic, high-performance websites engineered to convert — combining design craft with technical SEO from the first line of code.',
    url: "/website-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Website Design & Development Company | Design World Studio',
    description: 'Cinematic, high-performance websites engineered to convert — combining design craft with technical SEO from the first line of code.',
  },
};

export default function RoutePage() {
  return <Page route="website-development" html={HTML} />;
}
