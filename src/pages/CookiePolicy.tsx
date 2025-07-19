import React from 'react';
import { Cookie, Settings, BarChart3, Mail } from 'lucide-react';

const CookiePolicy = () => (
  <div className="pt-20 min-h-screen bg-gradient-to-br from-cyan-950 via-black to-purple-950 flex items-center justify-center">
    <div className="relative w-full max-w-3xl mx-auto px-4 py-16">
      <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/20 shadow-2xl rounded-3xl p-10 md:p-16 relative overflow-hidden animate-fade-in">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <Cookie className="w-12 h-12 text-cyan-400 drop-shadow-lg animate-bounce" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Cookie Policy</h1>
          </div>
          <p className="mb-8 text-lg text-cyan-100 font-medium">Last updated: <span className="text-cyan-300 font-semibold">June 2024</span></p>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Cookie className="w-6 h-6 text-cyan-300" /> 1. What Are Cookies?</h2>
            <p className="text-cyan-100 text-base leading-relaxed">Cookies are small text files stored on your device to help websites function and analyze usage.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><BarChart3 className="w-6 h-6 text-cyan-300" /> 2. How We Use Cookies</h2>
            <ul className="list-disc pl-8 text-cyan-100 space-y-1">
              <li>To remember your preferences</li>
              <li>To analyze site traffic and usage</li>
              <li>To improve our website and services</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Settings className="w-6 h-6 text-cyan-300" /> 3. Managing Cookies</h2>
            <p className="text-cyan-100 text-base leading-relaxed">You can control cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
          </section>
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Mail className="w-6 h-6 text-cyan-300" /> 4. Contact Us</h2>
            <p className="text-cyan-100 text-base leading-relaxed">For questions about our Cookie Policy, contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline hover:text-cyan-200 transition">omytechkenya@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default CookiePolicy; 