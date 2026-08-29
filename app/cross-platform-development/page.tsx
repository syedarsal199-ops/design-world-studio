import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/cross-platform-development';

export const metadata: Metadata = {
  title: 'Cross-Platform App Development Services',
  description: "One maintainable codebase, native-grade experience on every platform. We build cross-platform apps that don't feel like compromises.",
  alternates: { canonical: "/cross-platform-development" },
  openGraph: {
    title: 'Cross-Platform App Development Services | Design World Studio',
    description: "One maintainable codebase, native-grade experience on every platform. We build cross-platform apps that don't feel like compromises.",
    url: "/cross-platform-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Cross-Platform App Development Services | Design World Studio',
    description: "One maintainable codebase, native-grade experience on every platform. We build cross-platform apps that don't feel like compromises.",
  },
};

export default function RoutePage() {
  return <Page route="cross-platform-development" html={HTML} />;
}
