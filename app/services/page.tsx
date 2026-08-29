import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/services';

export const metadata: Metadata = {
  title: 'Our Services — Web, Mobile, Software & AI Development',
  description: 'Fifteen disciplines under one roof: website development, mobile apps, custom software, and AI automation — design, engineering, and AI working together.',
  alternates: { canonical: "/services" },
  openGraph: {
    title: 'Our Services — Web, Mobile, Software & AI Development | Design World Studio',
    description: 'Fifteen disciplines under one roof: website development, mobile apps, custom software, and AI automation — design, engineering, and AI working together.',
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Services — Web, Mobile, Software & AI Development | Design World Studio',
    description: 'Fifteen disciplines under one roof: website development, mobile apps, custom software, and AI automation — design, engineering, and AI working together.',
  },
};

export default function RoutePage() {
  return <Page route="services" html={HTML} />;
}
