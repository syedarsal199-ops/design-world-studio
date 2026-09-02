import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import SiteRuntime from '@/components/SiteRuntime';
import ChatWidget from '@/components/ChatWidget';

const GA_MEASUREMENT_ID = 'G-JPH9SVSJPS';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://designworldstudio.com';
const SITE_NAME = 'Design World Studio';
const SITE_TITLE = 'Design World Studio \u2014 AI & Software Development Company | Web, Mobile & AI Automation';
const SITE_DESCRIPTION =
  'Design World Studio builds websites, mobile apps, custom software, and AI automation for ambitious businesses. AI agents, AI chatbots, MVP development, and full-stack engineering \u2014 rated by Clutch, BBB, and Trustpilot.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: '%s | Design World Studio' },
  description: SITE_DESCRIPTION,
  keywords: [
    'AI development company', 'software development agency', 'website development',
    'mobile app development', 'AI automation', 'AI agents', 'AI chatbot development',
    'custom software development', 'MVP development', 'web app development',
  ],
  icons: {
    icon: [{ url: '/favicon-32.png', type: 'image/png', sizes: '32x32' }],
    apple: [{ url: '/app-icon-180.png', sizes: '180x180' }],
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Design World Studio',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
  telephone: '+1-475-315-0205',
  email: 'Hello@designworldstudio.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 Old Kings Highway South #1067',
    addressLocality: 'Darien',
    addressRegion: 'CT',
    postalCode: '06820',
    addressCountry: 'US',
  },
  areaServed: 'US',
  priceRange: '$$',
  makesOffer: [
    'Website Development', 'Mobile App Development', 'Web App Development',
    'AI Automation', 'AI Agents', 'AI Chatbots', 'Custom Software Development',
    'MVP Development', 'SEO',
  ],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover' as const,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
        <SiteRuntime />
        <ChatWidget />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
