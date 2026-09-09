import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-agent';

export const metadata: Metadata = {
  title: 'AI Agent Development Services',
  description: 'Custom AI agents that plan, decide and execute multi-step work \u2014 qualifying leads, updating your CRM, and escalating to a human when it matters.',
  alternates: { canonical: "/ai-agent" },
  openGraph: {
    title: 'AI Agent Development Services | Design World Studio',
    description: 'Custom AI agents that plan, decide and execute multi-step work \u2014 qualifying leads, updating your CRM, and escalating to a human when it matters.',
    url: "/ai-agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Agent Development Services | Design World Studio',
    description: 'Custom AI agents that plan, decide and execute multi-step work \u2014 qualifying leads, updating your CRM, and escalating to a human when it matters.',
  },
};

export default function RoutePage() {
  return <Page route="ai-agent" html={HTML} />;
}
