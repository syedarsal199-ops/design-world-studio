import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/mobile-app-development';

const URL = 'https://www.designworldstudio.com/mobile-app-development';

export const metadata: Metadata = {
  title: 'Mobile App Development Company',
  description: "Native iOS and Android app development for startups nationwide, including New York and California \u2014 remote-first, built for speed, retention and real outcomes.",
  alternates: { canonical: "/mobile-app-development" },
  keywords: [
    "mobile app development company",
    "mobile app development company in USA",
    "mobile app development company New York",
    "mobile app development company California",
    "app developers NYC",
    "app development company Los Angeles",
    "app development company San Francisco",
    "iOS and Android app development",
    "custom mobile app development",
  ],
  openGraph: {
    title: 'Mobile App Development Company | Design World Studio',
    description: "Native iOS and Android app development for startups nationwide, including New York and California \u2014 remote-first, built for speed, retention and real outcomes.",
    url: "/mobile-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'Mobile App Development Company | Design World Studio',
    description: "Native iOS and Android app development for startups nationwide, including New York and California \u2014 remote-first, built for speed, retention and real outcomes.",
  },
};

const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Mobile App Development',
  provider: { '@type': 'ProfessionalService', name: 'Design World Studio', url: 'https://www.designworldstudio.com' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'State', name: 'New York' },
    { '@type': 'State', name: 'California' },
  ],
  mainEntityOfPage: URL,
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Do you build mobile apps for companies in New York or California?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. We're a remote-first studio based in Connecticut and work with startups and established companies across the US, including New York and California, over video calls and shared tools rather than a local office. Most clients find that faster and more flexible than working with an agency that requires in-person meetings." },
    },
    {
      '@type': 'Question',
      name: "Can you work on East Coast and West Coast time zones?",
      acceptedAnswer: { '@type': 'Answer', text: "Yes. We run a distributed process built around asynchronous updates and overlapping working hours, so New York (ET) clients get real-time collaboration during the day and California (PT) clients get a working overlap in our afternoons plus async progress they can review each morning." },
    },
    {
      '@type': 'Question',
      name: "Do you handle CCPA and other state-specific compliance for apps built for California users?",
      acceptedAnswer: { '@type': 'Answer', text: "We build with data-privacy requirements like the CCPA in mind from the architecture stage \u2014 consent handling, data minimization and deletion flows \u2014 rather than bolting them on before launch. We'll flag which regulations apply to your specific app during scoping." },
    },
  ],
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Page route="mobile-app-development" html={HTML} />
    </>
  );
}
