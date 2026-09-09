import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-automation';

export const metadata: Metadata = {
  title: 'AI Workflow Automation Services',
  description: 'Replace manual busywork with AI automation that self-corrects \u2014 workflows, approvals and handoffs that run without someone remembering to.',
  alternates: { canonical: "/ai-automation" },
  openGraph: {
    title: 'AI Workflow Automation Services | Design World Studio',
    description: 'Replace manual busywork with AI automation that self-corrects \u2014 workflows, approvals and handoffs that run without someone remembering to.',
    url: "/ai-automation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Workflow Automation Services | Design World Studio',
    description: 'Replace manual busywork with AI automation that self-corrects \u2014 workflows, approvals and handoffs that run without someone remembering to.',
  },
};

export default function RoutePage() {
  return <Page route="ai-automation" html={HTML} />;
}
