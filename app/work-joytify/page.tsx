import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-joytify';

export const metadata: Metadata = {
  title: "Joytify — Case Study — Design World Studio",
  description: "Music & Playlists App: 320kbps streaming with synced lyrics and instant search",
  alternates: { canonical: "/work-joytify" },
};

export default function RoutePage() {
  return <Page route="work-joytify" html={HTML} />;
}
