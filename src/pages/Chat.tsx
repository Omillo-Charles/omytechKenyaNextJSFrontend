import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const placeholderMessages = [
  { id: 1, sender: 'Admin', text: 'Hello! How can I help you today?', time: '09:00 AM' },
  { id: 2, sender: 'You', text: 'Hi! I have a question about my project.', time: '09:01 AM' },
  { id: 3, sender: 'Admin', text: 'Sure, please go ahead.', time: '09:02 AM' },
];

export default function Chat() {
  const [messages, setMessages] = useState(placeholderMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Read query params
  const params = new URLSearchParams(location.search);
  const projectId = params.get('projectId');
  const adminId = params.get('adminId');
  const clientId = params.get('clientId');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      {
        id: msgs.length + 1,
        sender: 'You',
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setInput('');
  };

  // Determine chat partner label
  let chatPartner = 'Support';
  if (adminId) chatPartner = `Admin (${adminId})`;
  if (clientId) chatPartner = `Client (${clientId})`;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center py-12 px-2">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-2xl flex flex-col h-[70vh] border border-gray-800">
        <div className="px-6 py-4 border-b border-gray-800 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-cyan-400">Chat</h2>
            <span className="text-xs text-gray-400">{chatPartner}</span>
          </div>
          {projectId && (
            <div className="text-xs text-gray-500">Project ID: {projectId}</div>
          )}
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-900">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${msg.sender === 'You' ? 'bg-cyan-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                <div>{msg.text}</div>
                <div className="text-xs text-gray-400 mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSend} className="p-4 border-t border-gray-800 bg-gray-900 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow hover:opacity-90 transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 