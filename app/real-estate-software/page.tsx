import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/real-estate-software';

export const metadata: Metadata = {
  title: 'Real Estate Software Development Services',
  description: 'Custom listing, CRM, and portfolio management tools built specifically for real estate operators, brokerages, and property managers.',
  alternates: { canonical: "/real-estate-software" },
  openGraph: {
    title: 'Real Estate Software Development Services | Design World Studio',
    description: 'Custom listing, CRM, and portfolio management tools built specifically for real estate operators, brokerages, and property managers.',
    url: "/real-estate-software",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Real Estate Software Development Services | Design World Studio',
    description: 'Custom listing, CRM, and portfolio management tools built specifically for real estate operators, brokerages, and property managers.',
  },
};

export default function RoutePage() {
  return <Page route="real-estate-software" html={HTML} />;
}
