import { useEffect, useRef } from "react";
import {
  Check,
  Star,
  Zap,
  Crown,
  ArrowRight,
  Code,
  Smartphone,
  Palette,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Pricing = () => {
  const location = useLocation();
  const paymentSectionRef = useRef<HTMLDivElement>(null);

  // Scroll to payment section if needed
  useEffect(() => {
    if (location.state?.scrollToPayment && paymentSectionRef.current) {
      setTimeout(() => {
        paymentSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500); // Small delay to ensure page is fully loaded
    }
  }, [location.state]);

  const serviceCategories = [
    {
      name: "Web Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      services: [
        {
          name: "Frontend Development",
          description: "Modern responsive websites using React/Next.js",
          price: 25000,
          features: [
            "Responsive Design",
            "Modern UI/UX",
            "SEO Optimized",
            "Fast Loading",
          ],
        },
        {
          name: "Backend Development",
          description: "Secure APIs using Node.js, Firebase, or Appwrite",
          price: 30000,
          features: [
            "RESTful APIs",
            "Database Design",
            "Authentication",
            "Security",
          ],
        },
        {
          name: "Full Stack Package",
          description: "Complete website (frontend + backend + hosting)",
          price: 50000,
          features: [
            "Frontend + Backend",
            "Database Setup",
            "Hosting",
            "SSL Certificate",
          ],
        },
      ],
    },
    {
      name: "Mobile App Development",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      services: [
        {
          name: "Android Apps",
          description: "Native Android apps with Firebase backend",
          price: 60000,
          features: [
            "Native Performance",
            "Firebase Integration",
            "Play Store Ready",
            "Push Notifications",
          ],
        },
        {
          name: "iOS Apps",
          description: "Native Swift apps",
          price: 70000,
          features: [
            "Swift Development",
            "iOS Guidelines",
            "App Store Ready",
            "Core Data",
          ],
        },
        {
          name: "Cross-Platform Apps",
          description: "React Native or Flutter apps",
          price: 65000,
          features: [
            "Single Codebase",
            "iOS & Android",
            "Native Performance",
            "Cost Effective",
          ],
        },
      ],
    },
    {
      name: "Design & Consulting",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      services: [
        {
          name: "UI/UX Design",
          description: "Custom designs in Figma or Adobe XD",
          price: 15000,
          features: [
            "User Research",
            "Wireframes",
            "Prototypes",
            "Design System",
          ],
        },
        {
          name: "SEO & Marketing",
          description: "Boost visibility & rankings",
          price: 10000,
          period: "month",
          features: [
            "Keyword Research",
            "Content Strategy",
            "Analytics",
            "Monthly Reports",
          ],
        },
        {
          name: "Maintenance & Support",
          description: "Monthly updates, backups & optimization",
          price: 5000,
          period: "month",
          features: [
            "Regular Updates",
            "Security Monitoring",
            "Backups",
            "Performance Optimization",
          ],
        },
        {
          name: "Tech Consulting",
          description: "1-on-1 expert sessions",
          price: 2000,
          period: "hour",
          features: [
            "Architecture Review",
            "Code Review",
            "Best Practices",
            "Technology Guidance",
          ],
        },
      ],
    },
  ];

  const addOns = [
    {
      name: "Advanced Analytics Setup",
      price: 4999,
      description: "Custom tracking and reporting",
    },
    {
      name: "SEO Optimization Package",
      price: 4999,
      description: "Comprehensive SEO strategy",
    },
    {
      name: "Maintenance Package",
      price: 1499,
      description: "Monthly updates and support",
    },
    {
      name: "Content Creation",
      price: 2499,
      description: "Per page content writing",
    },
    {
      name: "Logo & Brand Design",
      price: 4999,
      description: "Complete brand identity",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4" />
            <span className="font-medium">Transparent Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Simple, Clear{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Professional digital solutions with no hidden fees. Choose the
            service that fits your needs and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Check className="w-4 h-4" />
              <span className="font-medium">30-day money-back guarantee</span>
            </div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
              <Crown className="w-4 h-4" />
              <span className="font-medium">Premium support included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of digital services. All
              prices are starting amounts and can be customized to your needs.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="relative">
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div
                      className={`inline-flex items-center space-x-4 ${category.bgColor} px-6 py-3 rounded-2xl mb-6`}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3
                        className={`text-2xl font-bold ${category.textColor}`}
                      >
                        {category.name}
                      </h3>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
                      >
                        {/* Price Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${category.bgColor} ${category.textColor}`}
                          >
                            Starting at
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">
                              KES {service.price.toLocaleString()}
                            </div>
                            {service.period && (
                              <div className="text-sm text-gray-500">
                                per {service.period}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Service Info */}
                        <div className="mb-6">
                          <h4 className="text-lg font-bold text-gray-900 mb-2">
                            {service.name}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center space-x-2"
                            >
                              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <Link
                          to="/contact"
                          className={`block w-full py-3 px-4 rounded-xl font-semibold text-center transition-all duration-200 bg-gradient-to-r ${category.color} text-white hover:shadow-lg group-hover:scale-105`}
                        >
                          Get Started
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4" />
              <span className="font-medium">Premium Add-ons</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Enhance Your Project
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your project to the next level with our premium add-on
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {addon.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    KES {addon.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">
                    (~${Math.round(addon.price / 133)})
                  </div>
                </div>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {addon.description}
                </p>
                <Link
                  to="/contact"
                  className="block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg group-hover:scale-105"
                >
                  Add to Project
                </Link>
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
                  <h3 className="text-xl font-bold mb-2">
                    Payment for Project
                  </h3>
                  <p className="text-cyan-100">{location.state.projectName}</p>
                  <p className="text-sm text-cyan-200 mt-1">
                    Project ID: {location.state.projectId}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Payment Methods
            </h2>
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
                    <rect
                      x="2"
                      y="2"
                      width="156"
                      height="36"
                      rx="4"
                      fill="#00A651"
                    />
                    {/* M-Pesa text */}
                    <text
                      x="80"
                      y="24"
                      textAnchor="middle"
                      className="text-sm font-bold fill-white"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      M-PESA
                    </text>
                    {/* M-Pesa icon elements */}
                    <circle cx="15" cy="20" r="4" fill="white" opacity="0.9" />
                    <circle cx="145" cy="20" r="4" fill="white" opacity="0.9" />
                    <rect
                      x="12"
                      y="16"
                      width="6"
                      height="8"
                      rx="1"
                      fill="white"
                      opacity="0.8"
                    />
                    <rect
                      x="142"
                      y="16"
                      width="6"
                      height="8"
                      rx="1"
                      fill="white"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  M-Pesa
                </h3>
                <p className="text-gray-600">
                  Fast and secure mobile money payment
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">
                      Phone Number:
                    </span>
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
                    <rect
                      x="2"
                      y="2"
                      width="156"
                      height="36"
                      rx="4"
                      fill="#0070BA"
                    />
                    {/* PayPal text */}
                    <text
                      x="80"
                      y="24"
                      textAnchor="middle"
                      className="text-sm font-bold fill-white"
                      style={{ fontFamily: "Arial, sans-serif" }}
                    >
                      PayPal
                    </text>
                    {/* PayPal icon elements */}
                    <path
                      d="M15 20 L25 20 M135 20 L145 20"
                      stroke="white"
                      strokeWidth="2"
                      opacity="0.9"
                    />
                    <circle cx="20" cy="20" r="2" fill="white" opacity="0.8" />
                    <circle cx="140" cy="20" r="2" fill="white" opacity="0.8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  PayPal
                </h3>
                <p className="text-gray-600">International payment solution</p>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Email:</span>
                    <span className="text-blue-600 font-bold">
                      info@omytech.co.ke
                    </span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Payment Instructions
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  For M-Pesa Payments:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Go to your M-Pesa menu</li>
                  <li>Select "Send Money"</li>
                  <li>
                    Enter phone number:{" "}
                    <span className="font-semibold text-green-600">
                      0745511354
                    </span>
                  </li>
                  <li>Enter the amount for your selected package</li>
                  <li>Add your project reference in the message</li>
                  <li>Confirm the transaction</li>
                </ol>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  For PayPal Payments:
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Log in to your PayPal account</li>
                  <li>Click "Send & Request"</li>
                  <li>
                    Enter email:{" "}
                    <span className="font-semibold text-blue-600">
                      info@omytech.co.ke
                    </span>
                  </li>
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
                  <p className="text-yellow-800 font-semibold mb-1">
                    Important:
                  </p>
                  <p className="text-yellow-700 text-sm">
                    Please include your project reference or contact information
                    when making payments. This helps us identify your payment
                    and process your order quickly.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and services.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What's included in the project price?",
                answer:
                  "Each package includes everything listed in the features section. There are no hidden costs or surprise fees.",
              },
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes, we offer flexible payment plans. Typically 50% upfront and 50% upon completion, but we can customize based on your needs.",
              },
              {
                question:
                  "What if I need changes after the project is complete?",
                answer:
                  "All packages include support for the specified period. After that, we offer maintenance packages starting at $299/month.",
              },
              {
                question: "Can I upgrade my package during development?",
                answer:
                  "Absolutely! You can upgrade your package at any time during development. We'll adjust the timeline and pricing accordingly.",
              },
              {
                question: "Do you offer custom packages?",
                answer:
                  "Yes, we create custom packages for unique requirements. Contact us to discuss your specific needs and get a tailored quote.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
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
            Choose your package and let's begin building something amazing
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200 flex items-center justify-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
