import React, { useState } from 'react';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Star,
      price: 299,
      period: 'project',
      description: 'Perfect for small businesses and startups looking to establish their digital presence.',
      features: [
        'Custom Website Design',
        'Responsive Development',
        'Basic SEO Setup',
        'Contact Form Integration',
        '30 Days Support',
        'Google Analytics Setup',
        'Social Media Integration',
        'Basic Performance Optimization'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
      deliveryTime: '2-3 weeks'
    },
    {
      name: 'Professional',
      icon: Zap,
      price: 599,
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
        'Security Implementation',
        'Database Integration',
        'API Development'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500',
      deliveryTime: '4-6 weeks'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 1299,
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
        'Training & Documentation',
        'Scalability Planning',
        'Security Audit',
        'Performance Monitoring'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500',
      deliveryTime: '8-12 weeks'
    }
  ];

  const addOns = [
    { name: 'Mobile App Development', price: 499, description: 'Native iOS and Android apps' },
    { name: 'Advanced Analytics Setup', price: 99, description: 'Custom tracking and reporting' },
    { name: 'SEO Optimization Package', price: 149, description: 'Comprehensive SEO strategy' },
    { name: 'Maintenance Package', price: 99, description: 'Monthly updates and support' },
    { name: 'Content Creation', price: 99, description: 'Per page content writing' },
    { name: 'Logo & Brand Design', price: 199, description: 'Complete brand identity' }
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business needs. No hidden fees, no surprises - just exceptional value.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Check className="w-4 h-4" />
            <span className="font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
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
                      <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{plan.description}</p>
                      <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full inline-block">
                        Delivery: {plan.deliveryTime}
                      </div>
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
                    <Link
                      to="/auth"
                      className={`block w-full py-4 px-6 rounded-full font-semibold text-center transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl transform hover:scale-105'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Add-on Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your project with additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600">${addon.price}</div>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                {/* Removed Add to Project button, price is now shown above */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What\'s included in the project price?',
                answer: 'Each package includes everything listed in the features section. There are no hidden costs or surprise fees.'
              },
              {
                question: 'Do you offer payment plans?',
                answer: 'Yes, we offer flexible payment plans. Typically 50% upfront and 50% upon completion, but we can customize based on your needs.'
              },
              {
                question: 'What if I need changes after the project is complete?',
                answer: 'All packages include support for the specified period. After that, we offer maintenance packages starting at $299/month.'
              },
              {
                question: 'Can I upgrade my package during development?',
                answer: 'Absolutely! You can upgrade your package at any time during development. We\'ll adjust the timeline and pricing accordingly.'
              },
              {
                question: 'Do you offer custom packages?',
                answer: 'Yes, we create custom packages for unique requirements. Contact us to discuss your specific needs and get a tailored quote.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose your package and let's begin building something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;