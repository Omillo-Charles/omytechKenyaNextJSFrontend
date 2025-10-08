import React from "react";
import {
  Code,
  Smartphone,
  Palette,
  TrendingUp,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

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
        "CMS Integration",
        "E-commerce Ready",
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at KES 25,000/ $188",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "API Integration",
        "Push Notifications",
        "App Store Optimization",
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at KES 60,000/ $451",
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
        "Brand Identity",
        "Interactive Design",
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at KES 15,000/ $113",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to grow your online presence and reach your target audience.",
      features: [
        "SEO/SEM",
        "Social Media",
        "Content Marketing",
        "Analytics",
        "PPC Campaigns",
        "Email Marketing",
      ],
      color: "from-green-500 to-teal-500",
      price: "Starting at KES 10,000/ $75/month",
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
        "Multi-currency",
        "Analytics",
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at KES 25,000/ $188",
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
        "Roadmap Planning",
        "ROI Analysis",
      ],
      color: "from-indigo-500 to-blue-500",
      price: "Starting at KES 2,000/ $15/hour",
    },
  ];

  return (
    <div className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to accelerate your business
            growth and digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">
                        Starting at
                      </div>
                      <div className="text-lg font-bold text-cyan-400">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={
                      service.title === "Web Development"
                        ? "/services/web-development"
                        : service.title === "Mobile App Development"
                        ? "/services/mobile-app-development"
                        : service.title === "UI/UX Design"
                        ? "/services/ui-ux-design"
                        : service.title === "Digital Marketing"
                        ? "/services/digital-marketing"
                        : service.title === "E-commerce Solutions"
                        ? "/services/ecommerce"
                        : service.title === "Consulting & Strategy"
                        ? "/services/consulting"
                        : "#"
                    }
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals and requirements",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Creating a roadmap for success",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with precision",
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploying and optimizing for growth",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss your project and create a custom solution that fits
            your needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
