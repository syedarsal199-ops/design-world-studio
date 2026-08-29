import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/process';

export const metadata: Metadata = {
  title: 'Our Process — How We Build Your Product',
  description: 'How Design World Studio takes a product from first conversation to live and improving — transparent milestones, no surprise scope creep.',
  alternates: { canonical: "/process" },
  openGraph: {
    title: 'Our Process — How We Build Your Product | Design World Studio',
    description: 'How Design World Studio takes a product from first conversation to live and improving — transparent milestones, no surprise scope creep.',
    url: "/process",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Our Process — How We Build Your Product | Design World Studio',
    description: 'How Design World Studio takes a product from first conversation to live and improving — transparent milestones, no surprise scope creep.',
  },
};

export default function RoutePage() {
  return <Page route="process" html={HTML} />;
}
