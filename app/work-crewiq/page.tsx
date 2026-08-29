import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/work-crewiq';

export const metadata: Metadata = {
  title: "CrewIQ — Case Study — Design World Studio",
  description: "AI-Powered Workforce App: AI job matching, verified clock-in, and transparent pay",
  alternates: { canonical: "/work-crewiq" },
};

export default function RoutePage() {
  return <Page route="work-crewiq" html={HTML} />;
}
