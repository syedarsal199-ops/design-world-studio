import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-solutions';

export const metadata: Metadata = {
  title: 'AI Solutions for Business',
  description: 'Production-grade AI systems, not demos. AI agents that take action, chatbots that resolve, and automation that removes real operational cost.',
  alternates: { canonical: "/ai-solutions" },
  openGraph: {
    title: 'AI Solutions for Business | Design World Studio',
    description: 'Production-grade AI systems, not demos. AI agents that take action, chatbots that resolve, and automation that removes real operational cost.',
    url: "/ai-solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Solutions for Business | Design World Studio',
    description: 'Production-grade AI systems, not demos. AI agents that take action, chatbots that resolve, and automation that removes real operational cost.',
  },
};

export default function RoutePage() {
  return <Page route="ai-solutions" html={HTML} />;
}
