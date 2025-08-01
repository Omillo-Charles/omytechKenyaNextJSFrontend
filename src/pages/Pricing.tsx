import React, { useState, useEffect, useRef } from 'react';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Pricing = () => {
  const location = useLocation();
  const paymentSectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Scroll to payment section if coming from client dashboard
  useEffect(() => {
    if (location.state?.scrollToPayment && paymentSectionRef.current) {
      setTimeout(() => {
        paymentSectionRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 500); // Small delay to ensure page is fully loaded
    }
  }, [location.state]);

  const plans = [
    {
      name: 'Starter',
      icon: Star,
      price: 9999,
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
      price: 24999,
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
      price: 39999,
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
    { name: 'Mobile App Development', price: 24999, description: 'Native iOS and Android apps' },
    { name: 'Advanced Analytics Setup', price: 4999, description: 'Custom tracking and reporting' },
    { name: 'SEO Optimization Package', price: 4999, description: 'Comprehensive SEO strategy' },
    { name: 'Maintenance Package', price: 1499, description: 'Monthly updates and support' },
    { name: 'Content Creation', price: 2499, description: 'Per page content writing' },
    { name: 'Logo & Brand Design', price: 4999, description: 'Complete brand identity' }
  ];

  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([]);

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
                        <span className="text-3xl font-bold text-gray-900">KSh</span>
                        <span className="text-5xl font-bold text-gray-900">{plan.price.toLocaleString()}</span>
                      </div>
                      <div className="block text-xs text-gray-500 font-semibold border-b border-dashed border-gray-300 w-fit mx-auto mt-1 pb-0.5">
                        (~${Math.round(plan.price / 133)})
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
                  <div className="text-2xl font-bold text-blue-600">KSh {addon.price.toLocaleString()}</div>
                </div>
                <p className="text-gray-600 mb-4">{addon.description}</p>
                <div className="block text-xs text-gray-500 font-semibold border-b border-dashed border-gray-300 w-fit mx-auto mt-1 pb-0.5">
                  (~${Math.round(addon.price / 133)})
                </div>
                {/* Removed Add to Project button, price is now shown above */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="py-20 bg-white" ref={paymentSectionRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Payment Banner */}
          {location.state?.scrollToPayment && location.state?.projectName && (
            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Payment for Project</h3>
                  <p className="text-cyan-100">{location.state.projectName}</p>
                  <p className="text-sm text-cyan-200 mt-1">Project ID: {location.state.projectId}</p>
                </div>
                <div className="text-right">
                  <button
                    onClick={() => navigate('/client/dashboard')}
                    className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm"
                  >
                    Back to Dashboard
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Payment Methods</h2>
            <p className="text-xl text-gray-600">
              Secure and convenient payment options for your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* M-Pesa Payment */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-24 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {/* M-Pesa Logo */}
                  <svg className="w-16 h-10" viewBox="0 0 160 40" fill="none">
                    {/* M-Pesa background */}
                    <rect x="2" y="2" width="156" height="36" rx="4" fill="#00A651"/>
                    {/* M-Pesa text */}
                    <text x="80" y="24" textAnchor="middle" className="text-sm font-bold fill-white" style={{fontFamily: 'Arial, sans-serif'}}>M-PESA</text>
                    {/* M-Pesa icon elements */}
                    <circle cx="15" cy="20" r="4" fill="white" opacity="0.9"/>
                    <circle cx="145" cy="20" r="4" fill="white" opacity="0.9"/>
                    <rect x="12" y="16" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                    <rect x="142" y="16" width="6" height="8" rx="1" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">M-Pesa</h3>
                <p className="text-gray-600">Fast and secure mobile money payment</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Phone Number:</span>
                    <span className="text-green-600 font-bold">0745511354</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Send money to the number above</p>
                  <p>• Include your project reference</p>
                  <p>• Payment confirmation within minutes</p>
                </div>
              </div>
            </div>

            {/* PayPal Payment */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-24 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {/* PayPal Logo */}
                  <svg className="w-16 h-10" viewBox="0 0 160 40" fill="none">
                    {/* PayPal background */}
                    <rect x="2" y="2" width="156" height="36" rx="4" fill="#0070BA"/>
                    {/* PayPal text */}
                    <text x="80" y="24" textAnchor="middle" className="text-sm font-bold fill-white" style={{fontFamily: 'Arial, sans-serif'}}>PayPal</text>
                    {/* PayPal icon elements */}
                    <path d="M15 20 L25 20 M135 20 L145 20" stroke="white" strokeWidth="2" opacity="0.9"/>
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.8"/>
                    <circle cx="140" cy="20" r="2" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">PayPal</h3>
                <p className="text-gray-600">International payment solution</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Email:</span>
                    <span className="text-blue-600 font-bold">omytechkenya@gmail.com</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-2">
                  <p>• Send payment to the email above</p>
                  <p>• Include your project reference</p>
                  <p>• Instant payment confirmation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="mt-12 bg-gray-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Instructions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">For M-Pesa Payments:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Go to your M-Pesa menu</li>
                  <li>Select "Send Money"</li>
                  <li>Enter phone number: <span className="font-semibold text-green-600">0745511354</span></li>
                  <li>Enter the amount for your selected package</li>
                  <li>Add your project reference in the message</li>
                  <li>Confirm the transaction</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">For PayPal Payments:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Log in to your PayPal account</li>
                  <li>Click "Send & Request"</li>
                  <li>Enter email: <span className="font-semibold text-blue-600">omytechkenya@gmail.com</span></li>
                  <li>Enter the amount for your selected package</li>
                  <li>Add your project reference in the note</li>
                  <li>Complete the payment</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-yellow-800 text-xs font-bold">!</span>
                </div>
                <div>
                  <p className="text-yellow-800 font-semibold mb-1">Important:</p>
                  <p className="text-yellow-700 text-sm">
                    Please include your project reference or contact information when making payments. 
                    This helps us identify your payment and process your order quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
              <div key={index} className="bg-white rounded-xl p-6">
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