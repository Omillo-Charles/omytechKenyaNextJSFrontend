import React from 'react';
import { FileText, UserCheck, Shield, AlertTriangle, RefreshCw, Mail } from 'lucide-react';

const TermsOfService = () => (
  <div className="pt-20 min-h-screen bg-gradient-to-br from-cyan-950 via-black to-purple-950 flex items-center justify-center">
    <div className="relative w-full max-w-3xl mx-auto px-4 py-16">
      <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/20 shadow-2xl rounded-3xl p-10 md:p-16 relative overflow-hidden animate-fade-in">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-12 h-12 text-cyan-400 drop-shadow-lg animate-bounce" />
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight">Terms of Service</h1>
          </div>
          <p className="mb-8 text-lg text-cyan-100 font-medium">Last updated: <span className="text-cyan-300 font-semibold">June 2024</span></p>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><UserCheck className="w-6 h-6 text-cyan-300" /> 1. Acceptance of Terms</h2>
            <p className="text-cyan-100 text-base leading-relaxed">By accessing or using OMYTECH's website and services, you agree to these Terms of Service.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Shield className="w-6 h-6 text-cyan-300" /> 2. Use of Services</h2>
            <ul className="list-disc pl-8 text-cyan-100 space-y-1">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree not to misuse our services or attempt to access them using unauthorized means.</li>
            </ul>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><FileText className="w-6 h-6 text-cyan-300" /> 3. Intellectual Property</h2>
            <p className="text-cyan-100 text-base leading-relaxed">All content, trademarks, and data on this site are the property of OMYTECH or its licensors.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><AlertTriangle className="w-6 h-6 text-cyan-300" /> 4. Limitation of Liability</h2>
            <p className="text-cyan-100 text-base leading-relaxed">OMYTECH is not liable for any indirect, incidental, or consequential damages arising from your use of our services.</p>
          </section>
          <section className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><RefreshCw className="w-6 h-6 text-cyan-300" /> 5. Changes to Terms</h2>
            <p className="text-cyan-100 text-base leading-relaxed">We may update these Terms of Service at any time. Continued use of our services constitutes acceptance of the new terms.</p>
          </section>
          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3"><Mail className="w-6 h-6 text-cyan-300" /> 6. Contact Us</h2>
            <p className="text-cyan-100 text-base leading-relaxed">For questions about these Terms, contact us at <a href="mailto:omytechkenya@gmail.com" className="text-cyan-400 underline hover:text-cyan-200 transition">omytechkenya@gmail.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService; 