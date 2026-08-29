import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-powered-software-development';

export const metadata: Metadata = {
  title: 'AI-Powered Software Development Services',
  description: 'Software with AI designed into the core architecture, not bolted on after launch. We build intelligent products that get smarter with every release.',
  alternates: { canonical: "/ai-powered-software-development" },
  openGraph: {
    title: 'AI-Powered Software Development Services | Design World Studio',
    description: 'Software with AI designed into the core architecture, not bolted on after launch. We build intelligent products that get smarter with every release.',
    url: "/ai-powered-software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI-Powered Software Development Services | Design World Studio',
    description: 'Software with AI designed into the core architecture, not bolted on after launch. We build intelligent products that get smarter with every release.',
  },
};

export default function RoutePage() {
  return <Page route="ai-powered-software-development" html={HTML} />;
}
