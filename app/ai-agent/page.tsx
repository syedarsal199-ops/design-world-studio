import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-agent';

export const metadata: Metadata = {
  title: 'AI Agent Development Services — Autonomous Task Automation',
  description: 'Custom AI agents that plan, decide, and execute multi-step tasks across your CRM, inbox, and internal tools — with human-in-the-loop approval for high-stakes actions.',
  alternates: { canonical: "/ai-agent" },
  openGraph: {
    title: 'AI Agent Development Services — Autonomous Task Automation | Design World Studio',
    description: 'Custom AI agents that plan, decide, and execute multi-step tasks across your CRM, inbox, and internal tools — with human-in-the-loop approval for high-stakes actions.',
    url: "/ai-agent",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Agent Development Services — Autonomous Task Automation | Design World Studio',
    description: 'Custom AI agents that plan, decide, and execute multi-step tasks across your CRM, inbox, and internal tools — with human-in-the-loop approval for high-stakes actions.',
  },
};

export default function RoutePage() {
  return <Page route="ai-agent" html={HTML} />;
}
