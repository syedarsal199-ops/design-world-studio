import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-admin';

export const metadata: Metadata = {
  title: "Write a Post \u2014 Design World Studio",
  description: "Write and publish a new post.",
  alternates: { canonical: "/blog-admin" },
  robots: { index: false, follow: false },
};

export default function RoutePage() {
  return <Page route="blog-admin" html={HTML} />;
}
