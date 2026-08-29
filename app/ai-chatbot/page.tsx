import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ai-chatbot';

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services — Custom Chatbots for Sales & Support',
  description: 'Custom AI chatbots trained on your product, tone, and data — resolving support and sales conversations with human-level nuance, deployed to your site, app, or WhatsApp.',
  alternates: { canonical: "/ai-chatbot" },
  openGraph: {
    title: 'AI Chatbot Development Services — Custom Chatbots for Sales & Support | Design World Studio',
    description: 'Custom AI chatbots trained on your product, tone, and data — resolving support and sales conversations with human-level nuance, deployed to your site, app, or WhatsApp.',
    url: "/ai-chatbot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'AI Chatbot Development Services — Custom Chatbots for Sales & Support | Design World Studio',
    description: 'Custom AI chatbots trained on your product, tone, and data — resolving support and sales conversations with human-level nuance, deployed to your site, app, or WhatsApp.',
  },
};

export default function RoutePage() {
  return <Page route="ai-chatbot" html={HTML} />;
}
