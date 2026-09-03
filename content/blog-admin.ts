export const HTML = `
<section class="page-hero" style="padding-bottom:48px;">
  <div class="grid-overlay"></div>
  <div class="container page-hero-inner">
    <div class="breadcrumb"><a href="/" data-route="home">Home</a><span>/</span><a href="/blog" data-route="blog">Blog</a><span>/</span><span>Write a Post</span></div>
    <span class="kicker">Studio Admin</span>
    <h1 class="page-title">
      <span class="reveal-line"><span>Write today's</span></span>
      <span class="reveal-line"><span class="text-gradient">blog post.</span></span>
    </h1>
    <p class="page-sub">Publishing here previews instantly in this browser. To make a post permanently live for every visitor, use "Copy post code" after publishing and send it back to have it baked into the live site.</p>
  </div>
</section>

<section class="bg-alt">
  <div class="container">
    <form id="postForm" class="glass" style="max-width:760px; margin:0 auto; padding:40px; border-radius:24px; display:flex; flex-direction:column; gap:22px;">

      <div>
        <label for="pfTitle" style="display:block; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(244,242,237,.45); margin-bottom:8px;">Title</label>
        <input id="pfTitle" required placeholder="e.g. How We Scope an AI Automation Project" style="width:100%; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.03); color:var(--bone); font-size:15px; font-family:inherit;">
      </div>

      <div style="display:flex; gap:16px; flex-wrap:wrap;">
        <div style="flex:1; min-width:200px;">
          <label for="pfTag" style="display:block; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(244,242,237,.45); margin-bottom:8px;">Category</label>
          <input id="pfTag" required placeholder="e.g. AI Automation" style="width:100%; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.03); color:var(--bone); font-size:15px; font-family:inherit;">
        </div>
        <div style="flex:1; min-width:200px;">
          <label for="pfDate" style="display:block; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(244,242,237,.45); margin-bottom:8px;">Date</label>
          <input id="pfDate" type="date" style="width:100%; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.03); color:var(--bone); font-size:15px; font-family:inherit;">
        </div>
      </div>

      <div>
        <label for="pfExcerpt" style="display:block; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(244,242,237,.45); margin-bottom:8px;">Excerpt (shown on the blog index card, 1-2 sentences)</label>
        <textarea id="pfExcerpt" required rows="2" style="width:100%; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.03); color:var(--bone); font-size:14px; font-family:inherit; resize:vertical;"></textarea>
      </div>

      <div>
        <label for="pfBody" style="display:block; font-size:12px; letter-spacing:.1em; text-transform:uppercase; color:rgba(244,242,237,.45); margin-bottom:8px;">Body</label>
        <textarea id="pfBody" required rows="14" placeholder="Write your article. Leave a blank line between paragraphs.&#10;Start a line with ## for a subheading.&#10;Start a line with - for a bullet point." style="width:100%; padding:14px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.14); background:rgba(255,255,255,.03); color:var(--bone); font-size:14.5px; line-height:1.7; font-family:inherit; resize:vertical;"></textarea>
        <p style="margin-top:8px; font-size:12px; color:rgba(244,242,237,.4);">Formatting: blank line = new paragraph · <code>## </code> at line start = subheading · <code>- </code> at line start = bullet point · <code>**bold**</code> works inline.</p>
      </div>

      <div style="display:flex; gap:14px; flex-wrap:wrap; align-items:center;">
        <button type="submit" class="btn btn-primary" data-cursor><span>Publish &amp; Preview →</span></button>
        <span id="pfStatus" style="font-size:13px; color:rgba(244,242,237,.5);"></span>
      </div>

      <div id="pfCodeWrap" style="display:none; margin-top:6px; padding:20px; border-radius:14px; border:1px solid rgba(78,168,58,.3); background:rgba(78,168,58,.06);">
        <p style="font-size:13px; color:rgba(244,242,237,.7); margin-bottom:12px;">Published and previewing now in this browser. To make it permanently live on the actual site for everyone, copy the code below and send it back to have it added to the source file:</p>
        <textarea id="pfCode" readonly rows="8" style="width:100%; padding:12px; border-radius:10px; border:1px solid rgba(255,255,255,.14); background:rgba(0,0,0,.35); color:rgba(244,242,237,.75); font-size:12px; font-family:'Space Mono',monospace; resize:vertical;"></textarea>
        <button type="button" id="pfCopyBtn" class="btn btn-outline" data-cursor style="margin-top:12px;"><span>Copy post code</span></button>
      </div>

    </form>
  </div>
</section>
`;
