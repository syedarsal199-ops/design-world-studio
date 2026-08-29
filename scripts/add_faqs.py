import re, os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PLUS_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'

def faq_item(q, a, active=False):
    cls = 'res-faq-item active' if active else 'res-faq-item'
    return f'''        <div class="{cls}">
          <button type="button" class="res-faq-q"><span class="res-faq-plus">{PLUS_ICON}</span>{q}</button>
          <div class="res-faq-a"><p>{a}</p></div>
        </div>'''

def faq_section(items, related=None):
    body = '\n'.join(faq_item(q, a, i == 0) for i, (q, a) in enumerate(items))
    related_html = ''
    if related:
        pills = ''.join(f'<a class="related-pill" data-route="{r}" data-cursor>{label} →</a>' for r, label in related)
        related_html = f'\n    <div class="related-row reveal" style="margin-top:64px;">\n      {pills}\n    </div>'
    return f'''
<section>
  <div class="container">
    <div class="res-faq">
      <div class="section-head reveal" data-depth="1.1" style="margin-bottom:0;">
        <span class="kicker">FAQ</span>
        <h2 class="section-title" style="font-size:clamp(1.7rem,3.2vw,2.4rem);">Frequently Asked Questions</h2>
      </div>
      <div class="res-faq-list">
{body}
      </div>
    </div>{related_html}
  </div>
</section>
'''

FAQS = {
  'home': (
    [
      ("What services does Design World Studio offer?", "Website design and development, mobile app development (iOS, Android, and cross-platform), custom web and software development, and AI solutions &mdash; AI agents, AI chatbots, and AI automation. Fifteen disciplines under one roof, so you're not stitching together five different vendors."),
      ("How much does it cost to build a website, app, or AI system?", "It depends on scope &mdash; a marketing site, a full mobile app, and a custom AI agent have very different builds. Tell us what you're building on the contact page and we'll reply within one business day with a realistic range, not a template quote."),
      ("How long does a typical project take?", "A focused MVP can ship in a matter of weeks. A full website or custom software platform is usually measured in months. We scope a timeline with you before any work starts, so there are no surprise delays."),
      ("Do you build AI automation and chatbots, or just websites and apps?", "Both. AI is one of our core disciplines, not a bolt-on &mdash; we build production-grade AI agents, AI chatbots, and workflow automation alongside websites, mobile apps, and custom software."),
      ("Do you work with early-stage startups, or only established businesses?", "Both. We build MVPs for founders who need to move fast and validate an idea, and we build full-scale platforms for established businesses ready to invest in custom software or AI automation."),
      ("What happens after my project launches?", "We don't disappear at launch. Most engagements continue into ongoing support &mdash; monitoring performance, fixing issues, and shipping improvements as your product and traffic grow."),
    ],
    [('services','View all services'), ('ai-solutions','AI Solutions'), ('case-studies','Case Studies')]
  ),
  'services': (
    [
      ("Which service is right for my business?", "If you're not sure, that's a normal starting point &mdash; tell us the problem you're solving on the contact page and we'll map it to the right service, or blend two or three (for example, a website plus an AI chatbot)."),
      ("Can you combine multiple services into one project?", "Yes, and it's common. A typical engagement might pair website development with AI automation, or mobile app development with an AI-powered backend. We scope it as one coordinated project, not separate silos."),
      ("Do you offer ongoing support after delivery?", "Yes. Every service includes a path to ongoing support &mdash; maintenance, monitoring, and continued feature work after launch, so your product keeps improving instead of going stale."),
      ("How do you price a project?", "Pricing is scoped per project based on complexity, timeline, and the disciplines involved. Share your budget range on the contact form and we'll tell you honestly what's achievable within it."),
      ("Can I start with one service and add more later?", "Yes. Many clients start with a website or MVP, then add AI automation, a chatbot, or a mobile app once the first phase is live and proving value."),
    ],
    [('ai-solutions','AI Solutions'), ('work','See Our Work'), ('contact','Start a Project')]
  ),
  'ai-solutions': (
    [
      ("What's the difference between an AI agent, AI automation, and an AI chatbot?", "An AI agent plans and executes multi-step tasks autonomously across your tools. AI automation replaces manual, repetitive workflows with self-correcting processes. An AI chatbot handles conversational support and sales. Most businesses end up using a mix of all three."),
      ("Is my data safe when we build a custom AI system?", "Yes &mdash; we build with human-in-the-loop approval on high-stakes actions, scoped access to your systems, and no training of third-party models on your proprietary data without explicit agreement."),
      ("Can AI automation integrate with our existing CRM and tools?", "In most cases, yes. We build native integrations with the CRM, inbox, and internal tools you already use, so AI automation fits into your existing stack instead of forcing you to replace it."),
      ("How long does it take to build a production AI system?", "A focused AI chatbot or single automation can launch in a few weeks. A more complex AI agent with multiple integrations typically takes longer &mdash; we'll give you a realistic timeline after a short scoping call."),
      ("Do I need a large dataset to get started with AI?", "No. Most of our AI chatbot and automation work is trained on your existing docs, FAQs, and product data &mdash; not a massive proprietary dataset. We'll tell you upfront if your use case genuinely needs more data."),
    ],
    [('ai-agent','AI Agents'), ('ai-chatbot','AI Chatbots'), ('ai-automation','AI Automation')]
  ),
  'contact': (
    [
      ("How fast will I hear back after reaching out?", "Within one business day, typically faster. You'll get a reply from someone who can actually scope your project &mdash; not an automated sales queue."),
      ("What information should I include in my first message?", "A short description of what you're building, your rough budget range, and any timeline constraints. The more detail you share, the more useful our first reply will be."),
      ("Is the scoping call really free?", "Yes. The first call is free and there's no obligation &mdash; it's a conversation to understand what you need and tell you honestly whether we're the right fit."),
      ("Do you sign NDAs?", "Yes, on request, before we discuss any proprietary details of your project."),
      ("What if I'm not sure which service I need yet?", "That's fine &mdash; tell us the problem you're trying to solve, not the solution you think you need. We'll map it to the right service, or a mix of a few."),
    ],
    None
  ),
}

for slug, (items, related) in FAQS.items():
    path = os.path.join(BASE, 'content', f'{slug}.ts')
    src = open(path).read()
    section = faq_section(items, related)
    marker = '<section class="final-cta'
    idx = src.index(marker)
    new_src = src[:idx] + section.strip() + '\n\n' + src[idx:]
    open(path, 'w').write(new_src)
    print('added FAQ to', slug, 'section len', len(section))
