import React from 'react';
import { ShieldCheck, User, Eye, Lock, RefreshCw, Mail } from 'lucide-react';

const PrivacyPolicy = () => (
  <div className="pt-20 min-h-screen bg-gradient-to-br from-cyan-950 via-black to-purple-950 flex items-center justify-center">
    <div className="relative w-full max-w-3xl mx-auto px-4 py-16">
      {/* Glassmorphism Card */}
      <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/20 shadow-2xl rounded-3xl p-10 md:p-16 relative overflow-hidden animate-fade-in">
        {/* Animated Gradient Blob */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <ShieldCheck className="w-12 h-12 text-cyan-400 drop-shadow-lg animate-bounce" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Privacy Policy</h1>
          </div>
          <p className="mb-8 text-lg text-cyan-100 font-medium">Last updated: <span className="text-cyan-300 font-semibold">June 2024</span></p>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><User className="w-6 h-6 text-cyan-300" /> 1. Introduction</h2>
            <p className="text-cyan-100 text-base leading-relaxed">OMYTECH is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Eye className="w-6 h-6 text-cyan-300" /> 2. Information We Collect</h2>
            <ul className="list-disc pl-8 text-cyan-100 space-y-1">
              <li>Personal information you provide (name, email, company, etc.)</li>
              <li>Usage data (pages visited, time spent, etc.)</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Lock className="w-6 h-6 text-cyan-300" /> 3. How We Use Your Information</h2>
            <ul className="list-disc pl-8 text-cyan-100 space-y-1">
              <li>To provide and improve our services</li>
              <li>To communicate with you</li>
              <li>To analyze usage and trends</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><ShieldCheck className="w-6 h-6 text-cyan-300" /> 4. Data Security</h2>
            <p className="text-cyan-100 text-base leading-relaxed">We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><RefreshCw className="w-6 h-6 text-cyan-300" /> 5. Your Rights</h2>
            <ul className="list-disc pl-8 text-cyan-100 space-y-1">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request data portability</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><RefreshCw className="w-6 h-6 text-cyan-300" /> 6. Changes to This Policy</h2>
            <p className="text-cyan-100 text-base leading-relaxed">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>
          </section>
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Mail className="w-6 h-6 text-cyan-300" /> 7. Contact Us</h2>
            <p className="text-cyan-100 text-base leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline hover:text-cyan-200 transition">omytechkenya@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy; 