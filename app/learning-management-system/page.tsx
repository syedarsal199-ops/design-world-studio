import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/learning-management-system';

export const metadata: Metadata = {
  title: 'Custom LMS Development — Learning Management Systems',
  description: 'Learning management systems learners actually finish, built on a platform your team fully controls — no per-seat SaaS fees, no vendor lock-in.',
  alternates: { canonical: "/learning-management-system" },
  openGraph: {
    title: 'Custom LMS Development — Learning Management Systems | Design World Studio',
    description: 'Learning management systems learners actually finish, built on a platform your team fully controls — no per-seat SaaS fees, no vendor lock-in.',
    url: "/learning-management-system",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Custom LMS Development — Learning Management Systems | Design World Studio',
    description: 'Learning management systems learners actually finish, built on a platform your team fully controls — no per-seat SaaS fees, no vendor lock-in.',
  },
};

export default function RoutePage() {
  return <Page route="learning-management-system" html={HTML} />;
}
