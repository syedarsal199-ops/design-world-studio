import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-ziptrip';

export const metadata: Metadata = {
  title: "ZipTrip — Case Study — Design World Studio",
  description: "AI-Powered Travel App: AI trip planning across flights, hotels, and cruises",
  alternates: { canonical: "/work-ziptrip" },
};

export default function RoutePage() {
  return <Page route="work-ziptrip" html={HTML} />;
}
