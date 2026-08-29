import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work';

export const metadata: Metadata = {
  title: 'Our Work — Portfolio of AI & Software Projects',
  description: "Products we've turned into intelligent platforms — real apps, real clients, real results across travel, music, fintech, and workforce tech.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: 'Our Work — Portfolio of AI & Software Projects | Design World Studio',
    description: "Products we've turned into intelligent platforms — real apps, real clients, real results across travel, music, fintech, and workforce tech.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Work — Portfolio of AI & Software Projects | Design World Studio',
    description: "Products we've turned into intelligent platforms — real apps, real clients, real results across travel, music, fintech, and workforce tech.",
  },
};

export default function RoutePage() {
  return <Page route="work" html={HTML} />;
}
