import type { MetadataRoute } from 'next';

const BASE_URL = 'https://designworldstudio.com';

// Every static route in the site, grouped by priority tier.
const CORE = ['']; // home
const HIGH_VALUE = [
  'services', 'ai-solutions', 'contact', 'work', 'case-studies', 'about',
];
const SERVICE_PAGES = [
  'website-development', 'mobile-app-development', 'web-app-development',
  'ai-automation', 'ai-agent', 'ai-chatbot', 'seo', 'mvp-development',
  'real-estate-software', 'learning-management-system', 'software-development',
  'ai-powered-software-development', 'android-development', 'ios-development',
  'cross-platform-development',
];
const CONTENT_PAGES = [
  'process', 'blog',
  'blog-real-estate-mobile-app-2026',
  'blog-ai-chatbot-roi', 'blog-ai-native-development',
  'blog-choosing-mobile-app-approach', 'blog-mvp-to-scale-architecture',
  'blog-seo-in-ai-search-era',
];
const CASE_STUDY_PAGES = [
  'work-crewiq', 'work-fovera', 'work-joytify',
  'work-unbroken-investing', 'work-youdj-mixer', 'work-ziptrip',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  CORE.forEach((slug) => entries.push({
    url: `${BASE_URL}/${slug}`, lastModified: now, changeFrequency: 'weekly', priority: 1.0,
  }));
  HIGH_VALUE.forEach((slug) => entries.push({
    url: `${BASE_URL}/${slug}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9,
  }));
  SERVICE_PAGES.forEach((slug) => entries.push({
    url: `${BASE_URL}/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8,
  }));
  CASE_STUDY_PAGES.forEach((slug) => entries.push({
    url: `${BASE_URL}/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));
  CONTENT_PAGES.forEach((slug) => entries.push({
    url: `${BASE_URL}/${slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));

  return entries;
}
