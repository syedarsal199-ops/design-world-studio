import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/about';

export const metadata: Metadata = {
  title: 'About Us — AI & Software Development Studio',
  description: 'Meet Design World Studio: senior designers and engineers building websites, apps, and AI automation. No outsourcing, no juniors — just people who ship.',
  alternates: { canonical: "/about" },
  openGraph: {
    title: 'About Us — AI & Software Development Studio | Design World Studio',
    description: 'Meet Design World Studio: senior designers and engineers building websites, apps, and AI automation. No outsourcing, no juniors — just people who ship.',
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Us — AI & Software Development Studio | Design World Studio',
    description: 'Meet Design World Studio: senior designers and engineers building websites, apps, and AI automation. No outsourcing, no juniors — just people who ship.',
  },
};

export default function RoutePage() {
  return <Page route="about" html={HTML} />;
}
