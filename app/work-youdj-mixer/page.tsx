import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-youdj-mixer';

export const metadata: Metadata = {
  title: "YouDJ Mixer — Case Study — Design World Studio",
  description: "DJ & Music Mixing App: A real dual-deck mixer anyone can pick up in minutes",
  alternates: { canonical: "/work-youdj-mixer" },
};

export default function RoutePage() {
  return <Page route="work-youdj-mixer" html={HTML} />;
}
