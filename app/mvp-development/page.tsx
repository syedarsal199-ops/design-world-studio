import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/mvp-development';

export const metadata: Metadata = {
  title: 'MVP Development Services — Launch Your Product Fast',
  description: 'Ship a credible, investable MVP in weeks, not quarters. We help founders validate ideas fast without cutting corners on architecture.',
  alternates: { canonical: "/mvp-development" },
  openGraph: {
    title: 'MVP Development Services — Launch Your Product Fast | Design World Studio',
    description: 'Ship a credible, investable MVP in weeks, not quarters. We help founders validate ideas fast without cutting corners on architecture.',
    url: "/mvp-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'MVP Development Services — Launch Your Product Fast | Design World Studio',
    description: 'Ship a credible, investable MVP in weeks, not quarters. We help founders validate ideas fast without cutting corners on architecture.',
  },
};

export default function RoutePage() {
  return <Page route="mvp-development" html={HTML} />;
}
