import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-fovera';

export const metadata: Metadata = {
  title: "Fovera — Case Study — Design World Studio",
  description: "AI-Powered Food Compliance App: AI-checked allergen data, recipe costing, and label approval in one app",
  alternates: { canonical: "/work-fovera" },
};

export default function RoutePage() {
  return <Page route="work-fovera" html={HTML} />;
}
