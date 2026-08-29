import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog';

export const metadata: Metadata = {
  title: 'Blog — AI, Software & Web Development Insights',
  description: 'Notes on AI-native development, mobile app strategy, SEO in the age of AI search, and how we scope, build, and ship digital products.',
  alternates: { canonical: "/blog" },
  openGraph: {
    title: 'Blog — AI, Software & Web Development Insights | Design World Studio',
    description: 'Notes on AI-native development, mobile app strategy, SEO in the age of AI search, and how we scope, build, and ship digital products.',
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Blog — AI, Software & Web Development Insights | Design World Studio',
    description: 'Notes on AI-native development, mobile app strategy, SEO in the age of AI search, and how we scope, build, and ship digital products.',
  },
};

export default function RoutePage() {
  return <Page route="blog" html={HTML} />;
}
