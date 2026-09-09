import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-automation';

export const metadata: Metadata = {
  title: 'AI Workflow Automation Services',
  description: 'Replace manual busywork with intelligent, self-correcting AI automation. Lead scoring, document processing, and workflows that run your operations around the clock.',
  alternates: { canonical: "/ai-automation" },
  openGraph: {
    title: 'AI Workflow Automation Services | Design World Studio',
    description: 'Replace manual busywork with intelligent, self-correcting AI automation. Lead scoring, document processing, and workflows that run your operations around the clock.',
    url: "/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Workflow Automation Services | Design World Studio',
    description: 'Replace manual busywork with intelligent, self-correcting AI automation. Lead scoring, document processing, and workflows that run your operations around the clock.',
  },
};

export default function RoutePage() {
  return <Page route="ai-automation" html={HTML} />;
}
