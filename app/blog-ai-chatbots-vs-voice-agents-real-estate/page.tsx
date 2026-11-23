import type { Metadata } from 'next';
import Page from '@/components/Page';
import { HTML } from '@/content/blog-ai-chatbots-vs-voice-agents-real-estate';

const TITLE = 'AI Chatbots vs. AI Voice Agents for Real Estate: Which One Does Your Brokerage Actually Need?';
const META_TITLE = 'AI Chatbots vs. AI Voice Agents for Real Estate';
const DESCRIPTION =
  "A chatbot catches the visitor on your website. A voice agent catches everyone who calls instead. Real 2026 data on cost, adoption, and which gap your brokerage actually has.";
const URL = 'https://www.designworldstudio.com/blog-ai-chatbots-vs-voice-agents-real-estate';
const IMAGE = 'https://www.designworldstudio.com/favicon.svg';

export const metadata: Metadata = {
  title: META_TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/blog-ai-chatbots-vs-voice-agents-real-estate' },
  keywords: [
    'AI chatbot vs AI voice agent real estate',
    'AI chatbot real estate',
    'AI voice agent real estate',
    'real estate lead response automation',
    'real estate AI comparison 2026',
    'chatbot vs voice agent for brokerages',
    'AI lead generation real estate',
    'real estate speed to lead',
    'AI tools for real estate agents 2026',
  ],
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: URL,
    type: 'article',
    images: [{ url: IMAGE, width: 512, height: 512, alt: 'Design World Studio' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [IMAGE] },
};

const ARTICLE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  datePublished: '2026-11-23',
  dateModified: '2026-11-23',
  mainEntityOfPage: URL,
  author: { '@type': 'Organization', name: 'Design World Studio' },
  publisher: {
    '@type': 'Organization',
    name: 'Design World Studio',
    logo: { '@type': 'ImageObject', url: 'https://www.designworldstudio.com/favicon.svg' },
  },
  about: [
    { '@type': 'Thing', name: 'AI Chatbots' },
    { '@type': 'Thing', name: 'AI Voice Agents' },
    { '@type': 'Thing', name: 'Real Estate Technology' },
  ],
  citation: [
    'National Association of Realtors 2026 Realtors Technology Report',
    'National Association of Realtors 2026 Profile of Home Buyers and Sellers',
    'Pied Piper Real Estate Lead Handling Effectiveness Study',
  ],
};

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Should a real estate brokerage choose a chatbot or a voice agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Most brokerages need both, because they solve different problems: a chatbot serves visitors already on your website who'd rather type, and a voice agent serves everyone who calls a number instead — sign calls, Zillow \"contact agent\" buttons, and missed calls — which a chatbot never sees at all. The right starting point is checking your own analytics and call logs to see which gap is bigger before buying either.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which one do buyers actually prefer in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "NAR's 2026 Profile of Home Buyers and Sellers found buyers rate text updates (74%) and personal phone calls (73%) as almost equally important, and a phone call is still the single most common way buyers first contact an agent (26%), ahead of text (9%) or email (8%). Buyers expect both channels, not one instead of the other.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an AI voice agent cost compared to a chatbot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Voice agents are usually priced per minute or per call volume, with real-world all-in costs often running $0.11–$0.31 per minute once the language model and telephony are included, or $29–$950 a month on a platform plan depending on the vendor and volume. Chatbot tooling is typically the cheaper of the two and is often bundled into a website platform rather than billed per conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do AI chatbots or voice agents actually get used much in real estate yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Broad AI use is climbing fast — NAR's 2026 survey found 48% of agents use AI at least weekly, and the share using no AI at all dropped from 32% to 21% in a single year. But 91% of that usage is a general tool like ChatGPT, not a purpose-built chatbot or voice agent connected to a CRM and phone line, which is exactly the gap a dedicated build closes.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a voice agent actually book a showing during the call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Yes, when it's connected to a live calendar with conflict checking, the same way a human coordinator would confirm a time on the spot instead of promising a follow-up. A chatbot can do the same thing in text form for a visitor who'd rather tap through a calendar than talk.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does either tool replace a live ISA or agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. Both exist to close the specific gap when nobody is available — after hours, during overflow, or on a form that a visitor abandons halfway through. Negotiation, judgment calls, and the actual relationship stay human work; the automation’s job is making sure no inquiry, typed or spoken, goes unanswered long enough to go cold.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can a brokerage actually get one of these live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'A single use case — a chat widget for one site, or a voice agent for after-hours sign calls — is typically a matter of weeks. A combined system writing both channels into the same CRM with shared reporting is a larger build, scoped to your actual call and traffic volume rather than a flat package price.',
      },
    },
  ],
};

export default function RoutePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Page route="blog-ai-chatbots-vs-voice-agents-real-estate" html={HTML} />
    </>
  );
}
