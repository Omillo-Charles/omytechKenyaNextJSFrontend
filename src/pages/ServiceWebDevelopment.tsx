import React from 'react';
import { Code, CheckCircle } from 'lucide-react';

const features = [
  'Responsive Design',
  'SEO Optimized',
  'Fast Loading',
  'Secure',
  'CMS Integration',
  'E-commerce Ready',
];

const ServiceWebDevelopment = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-24 pb-20">
    {/* Hero Section */}
    <section className="max-w-4xl mx-auto px-4 text-center mb-12">
      <div className="flex flex-col items-center justify-center mb-6">
        <span className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 mb-4 shadow-lg">
          <Code className="w-10 h-10 text-white" />
        </span>
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">Web Development</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          In today&apos;s digital world, your website is often the first impression customers have of your business. A professionally designed and developed website builds trust, showcases your brand, and drives conversions. Responsive, fast, and secure web solutions ensure you reach your audience on any device, anytime.
        </p>
      </div>
    </section>
    {/* Features Grid */}
    <section className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-10 mb-12 border border-cyan-900/40">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
            <span className="text-gray-200 text-lg">{feature}</span>
          </div>
        ))}
      </div>
    </section>
    {/* CTA Section */}
    <section className="text-center">
      <a href="/auth" className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:from-cyan-700 hover:to-blue-700 transition text-lg">
        Get Started
      </a>
    </section>
  </div>
);

export default ServiceWebDevelopment; 