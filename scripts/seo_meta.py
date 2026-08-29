import re, os

SEO_MAP = {
  "about": (
    "About Us — AI & Software Development Studio",
    "Meet Design World Studio: senior designers and engineers building websites, apps, and AI automation for ambitious businesses. No outsourcing, no juniors — just people who ship."
  ),
  "ai-agent": (
    "AI Agent Development Services — Autonomous Task Automation",
    "Custom AI agents that plan, decide, and execute multi-step tasks across your CRM, inbox, and internal tools — with human-in-the-loop approval for high-stakes actions."
  ),
  "ai-automation": (
    "AI Automation Services — Workflow & Business Process Automation",
    "Replace manual busywork with intelligent, self-correcting AI automation. Lead scoring, document processing, and workflows that run your operations around the clock."
  ),
  "ai-chatbot": (
    "AI Chatbot Development Services — Custom Chatbots for Sales & Support",
    "Custom AI chatbots trained on your product, tone, and data — resolving support and sales conversations with human-level nuance, deployed to your site, app, or WhatsApp."
  ),
  "ai-powered-software-development": (
    "AI-Powered Software Development Services",
    "Software with AI designed into the core architecture, not bolted on after launch. We build intelligent products that get smarter with every release."
  ),
  "ai-solutions": (
    "AI Solutions for Business — Agents, Chatbots & Automation",
    "Production-grade AI systems, not demos. AI agents that take action, automations that run your business, and AI chatbots that actually convert — built by Design World Studio."
  ),
  "android-development": (
    "Android App Development Services",
    "Native Android apps built with Kotlin for performance across the full device range — from budget phones to flagship devices."
  ),
  "blog": (
    "Blog — AI, Software & Web Development Insights",
    "Notes on AI-native development, mobile app strategy, SEO in the age of AI search, and how we scope, build, and ship digital products."
  ),
  "case-studies": (
    "Case Studies — Real Client Results",
    "In-depth looks at how Design World Studio shipped AI-powered apps, custom software, and websites for real clients — and what it moved for their business."
  ),
  "contact": (
    "Contact Us — Start Your Project",
    "Tell us what you're building. Our senior team replies within one business day with next steps — call, email, or fill out the form to get started."
  ),
  "cross-platform-development": (
    "Cross-Platform App Development Services",
    "One maintainable codebase, native-grade experience on every platform. We build cross-platform apps that don't feel like compromises."
  ),
  "ios-development": (
    "iOS App Development Services",
    "iOS apps crafted to Apple's own standard for polish and performance, built by a team that lives in the App Store guidelines."
  ),
  "learning-management-system": (
    "Custom LMS Development — Learning Management Systems",
    "Learning management systems learners actually finish, built on a platform your team fully controls — no per-seat SaaS fees, no vendor lock-in."
  ),
  "mobile-app-development": (
    "Mobile App Development Company — iOS & Android",
    "Native-grade iOS and Android mobile app development built for speed, retention, and real business outcomes — from MVP to full-scale product."
  ),
  "mvp-development": (
    "MVP Development Services — Launch Your Product Fast",
    "Ship a credible, investable MVP in weeks, not quarters. We help founders validate ideas fast without cutting corners on architecture."
  ),
  "process": (
    "Our Process — How We Build Your Product",
    "How Design World Studio takes a product from first conversation to live and improving — transparent milestones, no surprise scope creep."
  ),
  "real-estate-software": (
    "Real Estate Software Development Services",
    "Custom listing, CRM, and portfolio management tools built specifically for real estate operators, brokerages, and property managers."
  ),
  "seo": (
    "SEO Services — Technical & Content SEO That Ranks",
    "Technical and content SEO engineered for visibility, credibility, and compounding growth — measured in qualified traffic and revenue, not vanity rankings."
  ),
  "services": (
    "Our Services — Web, Mobile, Software & AI Development",
    "Fifteen disciplines under one roof: website development, mobile apps, custom software, and AI automation — design, engineering, and AI working together."
  ),
  "software-development": (
    "Custom Software Development Company",
    "Custom software engineered for reliability, security, and scale — built by senior engineers who own the architecture from day one."
  ),
  "web-app-development": (
    "Web App Development Services",
    "Complex, data-heavy web applications that stay fast as they scale — built with modern architecture and engineered for real usage, not demos."
  ),
  "website-development": (
    "Website Design & Development Company",
    "Cinematic, high-performance websites engineered to convert — combining design craft with technical SEO from the first line of code."
  ),
  "work": (
    "Our Work — Portfolio of AI & Software Projects",
    "Products we've turned into intelligent platforms — real apps, real clients, real results across travel, music, fintech, and workforce tech."
  ),
}

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

changed = []
for slug, (title, desc) in SEO_MAP.items():
    path = os.path.join(BASE, 'app', slug, 'page.tsx')
    if not os.path.exists(path):
        print('MISSING', path)
        continue
    src = open(path).read()
    m = re.search(r'export const metadata: Metadata = \{(.*?)\n\};\n', src, re.S)
    if not m:
        print('NO METADATA BLOCK', path)
        continue
    full_title = f"{title} | Design World Studio"
    new_block = f'''export const metadata: Metadata = {{
  title: {title!r},
  description: {desc!r},
  alternates: {{ canonical: "/{slug}" }},
  openGraph: {{
    title: {full_title!r},
    description: {desc!r},
    url: "/{slug}",
    type: "website",
  }},
  twitter: {{
    card: "summary_large_image",
    title: {full_title!r},
    description: {desc!r},
  }},
}};
'''
    src2 = src[:m.start()] + new_block + src[m.end():]
    open(path, 'w').write(src2)
    changed.append(slug)

print("updated:", len(changed))
print(changed)
