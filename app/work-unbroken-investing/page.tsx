import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-unbroken-investing';

export const metadata: Metadata = {
  title: "Unbroken Investing — Case Study — Design World Studio",
  description: "AI-Powered Investment Platform: AI-matched deal flow with real-time underwriting and risk analysis",
  alternates: { canonical: "/work-unbroken-investing" },
};

export default function RoutePage() {
  return <Page route="work-unbroken-investing" html={HTML} />;
}
