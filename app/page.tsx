import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/home';

export const metadata: Metadata = {
  title: "AI & Software Development Company \u2014 Web, Mobile & AI Automation",
  description: "Design World Studio designs, develops, automates, and scales intelligent digital products \u2014 websites, mobile apps, custom software, and AI automation \u2014 for ambitious businesses.",
  alternates: { canonical: "/" },
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Design World Studio offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Website design and development, mobile app development (iOS, Android, and cross-platform), custom web and software development, and AI solutions \u2014 AI agents, AI chatbots, and AI automation. Fifteen disciplines under one roof, so you're not stitching together five different vendors.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to build a website, app, or AI system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on scope \u2014 a marketing site, a full mobile app, and a custom AI agent have very different builds. Tell us what you're building on the contact page and we'll reply within one business day with a realistic range, not a template quote.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused MVP can ship in a matter of weeks. A full website or custom software platform is usually measured in months. We scope a timeline with you before any work starts, so there are no surprise delays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build AI automation and chatbots, or just websites and apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. AI is one of our core disciplines, not a bolt-on \u2014 we build production-grade AI agents, AI chatbots, and workflow automation alongside websites, mobile apps, and custom software.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with early-stage startups, or only established businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both. We build MVPs for founders who need to move fast and validate an idea, and we build full-scale platforms for established businesses ready to invest in custom software or AI automation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after my project launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We don't disappear at launch. Most engagements continue into ongoing support \u2014 monitoring performance, fixing issues, and shipping improvements as your product and traffic grow.",
      },
    },
  ],
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Page route="home" html={HTML} />
    </>
  );
}
