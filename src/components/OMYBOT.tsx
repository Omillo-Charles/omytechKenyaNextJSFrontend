import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-04-17:generateContent';
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const OMYBOT = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Hi! I\'m OMYBOT. How can I help you on OMYTECH today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chatRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setShowButton(true); // Scrolling up
      } else if (currentScrollY > lastScrollY.current) {
        setShowButton(false); // Scrolling down
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { role: 'user', content: input }]);
    setLoading(true);
    setError('');
    const userMessage = input;
    setInput('');
    // Scroll to latest after user message
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 50);
    try {
      const res = await fetch(`${GEMINI_API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{
                text: `You are OMYBOT, the helpful assistant for OMYTECH (omytech.com), a modern tech agency based in Nairobi, Kenya. OMYTECH offers web development, mobile app development, UI/UX design, digital marketing, e-commerce solutions, and consulting. You help visitors understand OMYTECH’s services, pricing, team, and how to get started. Always answer as a representative of OMYTECH, and guide users to relevant pages or actions on this website. If asked about something unrelated to OMYTECH, politely steer the conversation back to the company’s offerings.`
              }]
            },
            { role: 'user', parts: [{ text: userMessage }] }
          ]
        })
      });
      const data = await res.json();
      console.log('Gemini API response:', data);
      const botReply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I didn\'t get that.';
      // Typewriter effect for bot reply
      let i = 0;
      const typeBotReply = () => {
        setMessages((msgs) => {
          const prev = msgs.filter(m => m.role !== 'bot' || m.content !== '');
          const last = msgs[msgs.length - 1];
          if (last && last.role === 'bot') {
            // Update last bot message
            return [...prev.slice(0, -1), { role: 'bot', content: botReply.slice(0, i) }];
          } else {
            // Add new bot message
            return [...msgs, { role: 'bot', content: botReply.slice(0, i) }];
          }
        });
        setTimeout(() => {
          if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
          }
        }, 10);
        if (i < botReply.length) {
          i++;
          setTimeout(typeBotReply, 15);
        } else {
          setLoading(false);
        }
      };
      typeBotReply();
    } catch (e) {
      setError('Something went wrong. Please try again later.');
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {showButton && (
        <button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open OMYBOT Chat"
        >
          <Bot className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-full bg-black border border-cyan-500/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 flex items-center justify-between">
            <span className="font-bold text-white text-lg">OMYBOT</span>
            <button onClick={() => setOpen(false)} className="text-white hover:text-gray-200">✕</button>
          </div>
          <div ref={chatRef} className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80 bg-black/90">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'bot' && (
                  <div className="flex-shrink-0">
                    <span className="bg-cyan-600/80 p-1 rounded-full flex items-center justify-center shadow-md">
                      <Bot className="w-4 h-4 text-white" />
                    </span>
                  </div>
                )}
                <div
                  className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow-md
                    ${msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-700 to-blue-700 text-white border border-cyan-500/40'
                      : 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-cyan-100 border border-cyan-700/30'}
                  `}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="flex-shrink-0">
                    <span className="bg-cyan-400/80 text-cyan-900 font-bold w-7 h-7 flex items-center justify-center rounded-full shadow-md text-xs">U</span>
                  </div>
                )}
              </div>
            ))}
            {loading && (
              <div className="text-cyan-400 text-xs">OMYBOT is typing...</div>
            )}
            {error && (
              <div className="text-red-400 text-xs">{error}</div>
            )}
          </div>
          <div className="p-3 border-t border-cyan-500/20 bg-black/80">
            <textarea
              className="w-full rounded-lg bg-gray-900 text-white p-2 resize-none focus:ring-2 focus:ring-cyan-500 outline-none"
              rows={2}
              placeholder="Ask OMYBOT anything about OMYTECH..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
            />
            <button
              className="mt-2 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-all disabled:opacity-50"
              onClick={handleSend}
              disabled={loading || !input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OMYBOT; 