import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/mobile-app-development';

export const metadata: Metadata = {
  title: 'Mobile App Development Company — iOS & Android',
  description: 'Native-grade iOS and Android mobile app development built for speed, retention, and real business outcomes — from MVP to full-scale product.',
  alternates: { canonical: "/mobile-app-development" },
  openGraph: {
    title: 'Mobile App Development Company — iOS & Android | Design World Studio',
    description: 'Native-grade iOS and Android mobile app development built for speed, retention, and real business outcomes — from MVP to full-scale product.',
    url: "/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Mobile App Development Company — iOS & Android | Design World Studio',
    description: 'Native-grade iOS and Android mobile app development built for speed, retention, and real business outcomes — from MVP to full-scale product.',
  },
};

export default function RoutePage() {
  return <Page route="mobile-app-development" html={HTML} />;
}
