import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Client Results',
  description: 'In-depth looks at how Design World Studio shipped AI-powered apps, custom software, and websites for real clients — and what it moved for their business.',
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: 'Case Studies — Real Client Results | Design World Studio',
    description: 'In-depth looks at how Design World Studio shipped AI-powered apps, custom software, and websites for real clients — and what it moved for their business.',
    url: "/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Case Studies — Real Client Results | Design World Studio',
    description: 'In-depth looks at how Design World Studio shipped AI-powered apps, custom software, and websites for real clients — and what it moved for their business.',
  },
};

export default function RoutePage() {
  return <Page route="case-studies" html={HTML} />;
}
