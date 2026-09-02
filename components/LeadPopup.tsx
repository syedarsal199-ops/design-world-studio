'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'dws_lead_popup_shown';
const DELAY_MS = 3000;
const SERVICES = ['Web Development', 'Mobile App Development', 'AI Automation', 'Software Development', 'Something else'];

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [service, setService] = useState('Web Development');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only ever show once per browser session (not once per page — this
    // effect can technically re-run across client-side navigations, but
    // the sessionStorage check keeps it to a single appearance per visit).
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      // sessionStorage can throw in some privacy modes — fail safe by not showing.
      alreadyShown = true;
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // ignore — worst case it can show again on a later page this session
      }
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || status === 'sending') return;
    setStatus('sending');
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          service,
          message: message || `(No message provided — sent from the welcome popup, interested in ${service}.)`,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Something went wrong.');
      setStatus('sent');
      setTimeout(() => setOpen(false), 3000);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (!open) return null;

  return (
    <div className="dws-popup-overlay" role="dialog" aria-modal="true" aria-label="Start a project inquiry">
      <div className="dws-popup-card glass-strong">
        <button type="button" className="dws-popup-close" aria-label="Close" onClick={close}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === 'sent' ? (
          <div className="dws-popup-success">
            <h3>Thanks — got it!</h3>
            <p>We usually reply within one business day.</p>
          </div>
        ) : (
          <>
            <span className="kicker">Have a Project in Mind?</span>
            <h3>Let&rsquo;s talk about what you&rsquo;re building.</h3>
            <p className="dws-popup-sub">Tell us a bit about it and we&rsquo;ll show you how we&rsquo;d approach it — no obligation.</p>

            <form onSubmit={handleSubmit} className="dws-popup-form">
              <div className="dws-popup-fields">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === 'sending'}
                />
              </div>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                disabled={status === 'sending'}
                aria-label="Service you're interested in"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <textarea
                placeholder="Tell us briefly what you need (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === 'sending'}
                rows={2}
              />

              {error && <div className="dws-popup-error">{error}</div>}

              <div className="dws-popup-actions">
                <button type="button" className="dws-popup-decline" onClick={close}>
                  Maybe later
                </button>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  <span>{status === 'sending' ? 'Sending…' : 'Send Inquiry →'}</span>
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
