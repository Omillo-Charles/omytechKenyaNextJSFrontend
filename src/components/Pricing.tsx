import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Star,
      price: 2999,
      period: 'project',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Setup',
        'Contact Form Integration',
        '30 Days Support',
        'Google Analytics Setup'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional',
      icon: Zap,
      price: 5999,
      period: 'project',
      description: 'Ideal for growing businesses that need advanced features and functionality.',
      features: [
        'Everything in Starter',
        'E-commerce Integration',
        'Advanced SEO',
        'Content Management System',
        'Email Marketing Setup',
        '90 Days Support',
        'Performance Optimization',
        'Social Media Integration'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 12999,
      period: 'project',
      description: 'Comprehensive solution for large organizations with complex requirements.',
      features: [
        'Everything in Professional',
        'Custom App Development',
        'Advanced Analytics',
        'Multi-language Support',
        'Custom Integrations',
        '6 Months Support',
        'Dedicated Project Manager',
        'Priority Support',
        'Training & Documentation'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Pricing Plans
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that best fits your needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-bold text-gray-900">$</span>
                      <span className="text-5xl font-bold text-gray-900">{plan.price.toLocaleString()}</span>
                    </div>
                    <div className="text-gray-600 mt-2">per {plan.period}</div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl transform hover:scale-105'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique requirements.
          </p>
          <a
            href="#contact"
            className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200"
          >
            Contact us for a custom quote →
          </a>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              30-Day Money Back Guarantee
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We're confident in our work. If you're not completely satisfied with your project within 30 days, 
              we'll refund your money, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;