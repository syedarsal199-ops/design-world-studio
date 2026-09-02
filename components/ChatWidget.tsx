'use client';

import React, { useEffect, useRef, useState } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi, I'm the Design World Studio assistant. Ask me about our services, timelines, or how to start a project.",
};

const AUTO_OPEN_STORAGE_KEY = 'dws_chat_auto_opened';
const AUTO_OPEN_DELAY_MS = 1500;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, loading, open]);

  // Greet visitors automatically, once per browser session, shortly after
  // the site loads — rather than waiting for them to click the bubble.
  useEffect(() => {
    let alreadyOpened = false;
    try {
      alreadyOpened = sessionStorage.getItem(AUTO_OPEN_STORAGE_KEY) === '1';
    } catch {
      alreadyOpened = true;
    }
    if (alreadyOpened) return;

    const timer = setTimeout(() => {
      setOpen(true);
      try {
        sessionStorage.setItem(AUTO_OPEN_STORAGE_KEY, '1');
      } catch {
        // ignore
      }
    }, AUTO_OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong.');
      }
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dws-chat" data-open={open ? 'true' : 'false'}>
      {open && (
        <div className="dws-chat-panel" role="dialog" aria-label="Design World Studio chat assistant">
          <div className="dws-chat-head">
            <div className="dws-chat-head-info">
              <span className="dws-chat-dot" />
              <div>
                <strong>Design World Studio</strong>
                <span>AI assistant · usually replies instantly</span>
              </div>
            </div>
            <button
              type="button"
              className="dws-chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          <div className="dws-chat-body" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`dws-chat-msg ${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="dws-chat-msg assistant dws-chat-typing">
                <span></span><span></span><span></span>
              </div>
            )}
            {error && <div className="dws-chat-error">{error}</div>}
          </div>

          <form className="dws-chat-input" onSubmit={sendMessage}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our services..."
              aria-label="Message"
              disabled={loading}
            />
            <button type="submit" aria-label="Send message" disabled={loading || !input.trim()}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="dws-chat-fab"
        aria-label={open ? 'Close chat' : 'Open chat with Design World Studio assistant'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" /></svg>
        )}
      </button>
    </div>
  );
}
