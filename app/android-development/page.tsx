import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/android-development';

export const metadata: Metadata = {
  title: 'Android App Development Services',
  description: 'Native Android apps built with Kotlin for performance across the full device range — from budget phones to flagship devices.',
  alternates: { canonical: "/android-development" },
  openGraph: {
    title: 'Android App Development Services | Design World Studio',
    description: 'Native Android apps built with Kotlin for performance across the full device range — from budget phones to flagship devices.',
    url: "/android-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Android App Development Services | Design World Studio',
    description: 'Native Android apps built with Kotlin for performance across the full device range — from budget phones to flagship devices.',
  },
};

export default function RoutePage() {
  return <Page route="android-development" html={HTML} />;
}
