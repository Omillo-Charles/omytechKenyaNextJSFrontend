import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Secure",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "API Integration"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that engage users and drive conversions.",
      features: [
        "User Research",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence and reach your target audience.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description:
        "Complete online stores with payment processing, inventory management, and customer analytics.",
      features: [
        "Payment Gateway",
        "Inventory System",
        "Admin Dashboard",
        "Mobile Optimized",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      title: "Consulting & Strategy",
      description:
        "Strategic guidance to help you make informed decisions about your digital transformation.",
      features: [
        "Technology Audit",
        "Digital Strategy",
        "Process Optimization",
        "Team Training",
      ],
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Add a mapping from service title to real pricing (lowest tier)
  const servicePricing: Record<string, { ksh: string; usd: string }> = {
    "Web Development": { ksh: "KES 25,000", usd: "~$188" },
    "Mobile App Development": { ksh: "KES 60,000", usd: "~$451" },
    "UI/UX Design": { ksh: "KES 15,000", usd: "~$113" },
    "Digital Marketing": { ksh: "KES 10,000/mo", usd: "~$75/mo" },
    "E-commerce Solutions": { ksh: "KES 25,000", usd: "~$188" },
    "Consulting & Strategy": { ksh: "KES 2,000/hr", usd: "~$15/hr" },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide end-to-end digital services that
            help businesses thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing */}
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    {servicePricing[service.title]?.ksh}{" "}
                    <span className="text-gray-200 font-normal ml-1">
                      ({servicePricing[service.title]?.usd})
                    </span>
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}
                      ></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
