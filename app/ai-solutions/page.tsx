import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-solutions';

export const metadata: Metadata = {
  title: 'AI Solutions for Business — Agents, Chatbots & Automation',
  description: 'Production-grade AI systems, not demos. AI agents that take action, automations that run your business, and AI chatbots that actually convert — built by Design World Studio.',
  alternates: { canonical: "/ai-solutions" },
  openGraph: {
    title: 'AI Solutions for Business — Agents, Chatbots & Automation | Design World Studio',
    description: 'Production-grade AI systems, not demos. AI agents that take action, automations that run your business, and AI chatbots that actually convert — built by Design World Studio.',
    url: "/ai-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Solutions for Business — Agents, Chatbots & Automation | Design World Studio',
    description: 'Production-grade AI systems, not demos. AI agents that take action, automations that run your business, and AI chatbots that actually convert — built by Design World Studio.',
  },
};

export default function RoutePage() {
  return <Page route="ai-solutions" html={HTML} />;
}
