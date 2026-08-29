import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/ios-development';

export const metadata: Metadata = {
  title: 'iOS App Development Services',
  description: "iOS apps crafted to Apple's own standard for polish and performance, built by a team that lives in the App Store guidelines.",
  alternates: { canonical: "/ios-development" },
  openGraph: {
    title: 'iOS App Development Services | Design World Studio',
    description: "iOS apps crafted to Apple's own standard for polish and performance, built by a team that lives in the App Store guidelines.",
    url: "/ios-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'iOS App Development Services | Design World Studio',
    description: "iOS apps crafted to Apple's own standard for polish and performance, built by a team that lives in the App Store guidelines.",
  },
};

export default function RoutePage() {
  return <Page route="ios-development" html={HTML} />;
}
