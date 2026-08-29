import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/contact';

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Project',
  description: "Tell us what you're building. Our senior team replies within one business day with next steps — call, email, or fill out the form to get started.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: 'Contact Us — Start Your Project | Design World Studio',
    description: "Tell us what you're building. Our senior team replies within one business day with next steps — call, email, or fill out the form to get started.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Contact Us — Start Your Project | Design World Studio',
    description: "Tell us what you're building. Our senior team replies within one business day with next steps — call, email, or fill out the form to get started.",
  },
};

export default function RoutePage() {
  return <Page route="contact" html={HTML} />;
}
