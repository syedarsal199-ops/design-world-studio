import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/software-development';

export const metadata: Metadata = {
  title: 'Custom Software Development Company',
  description: 'Custom software engineered for reliability, security, and scale — built by senior engineers who own the architecture from day one.',
  alternates: { canonical: "/software-development" },
  openGraph: {
    title: 'Custom Software Development Company | Design World Studio',
    description: 'Custom software engineered for reliability, security, and scale — built by senior engineers who own the architecture from day one.',
    url: "/software-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Custom Software Development Company | Design World Studio',
    description: 'Custom software engineered for reliability, security, and scale — built by senior engineers who own the architecture from day one.',
  },
};

export default function RoutePage() {
  return <Page route="software-development" html={HTML} />;
}
