import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/web-app-development';

export const metadata: Metadata = {
  title: 'Web App Development Services',
  description: 'Complex, data-heavy web applications that stay fast as they scale — built with modern architecture and engineered for real usage, not demos.',
  alternates: { canonical: "/web-app-development" },
  openGraph: {
    title: 'Web App Development Services | Design World Studio',
    description: 'Complex, data-heavy web applications that stay fast as they scale — built with modern architecture and engineered for real usage, not demos.',
    url: "/web-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Web App Development Services | Design World Studio',
    description: 'Complex, data-heavy web applications that stay fast as they scale — built with modern architecture and engineered for real usage, not demos.',
  },
};

export default function RoutePage() {
  return <Page route="web-app-development" html={HTML} />;
}
