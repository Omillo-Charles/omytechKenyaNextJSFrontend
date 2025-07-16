import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Code, Palette, TrendingUp, CheckCircle, Users, Award, Clock, Rocket, Star, Globe, Eye, BarChart3 } from 'lucide-react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Cutting-edge websites that dominate the digital landscape',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designs so beautiful, they make competitors weep',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Marketing strategies that break the internet',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  const stats = [
    { icon: Rocket, number: '500+', label: 'Projects Launched', gradient: 'from-cyan-400 to-blue-500' },
    { icon: Star, number: '99%', label: 'Success Rate', gradient: 'from-yellow-400 to-orange-500' },
    { icon: Globe, number: '50+', label: 'Countries', gradient: 'from-green-400 to-emerald-500' },
    { icon: Zap, number: '24/7', label: 'Innovation', gradient: 'from-purple-400 to-pink-500' }
  ];

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated grid - responsive sizing */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: window.innerWidth < 768 ? '30px 30px' : '50px 50px',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.1}px)`
          }}
        ></div>
        
        {/* Mouse follow effect - only on desktop */}
        <div 
          className="absolute inset-0 opacity-30 hidden md:block"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`
          }}
        ></div>
        
        {/* Floating orbs - responsive count */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: `linear-gradient(45deg, #06b6d4, #3b82f6)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Large floating elements - responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 sm:w-24 h-12 sm:h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center w-full">
          {/* Floating badge - responsive */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-500/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-bounce">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-cyan-400 animate-spin" />
            <span className="text-cyan-300 font-medium text-sm sm:text-base">Next-Gen Digital Solutions</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main heading - fully responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 leading-tight">
            <span className="block animate-pulse">WE BUILD</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '0.5s' }}>
              DIGITAL
            </span>
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse" style={{ animationDelay: '1s' }}>
              EMPIRES
            </span>
          </h1>

          {/* Description - responsive text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in px-4">
            🚀 We don't just create websites - we forge digital experiences that <span className="text-cyan-400 font-bold">dominate markets</span>, 
            <span className="text-purple-400 font-bold"> captivate audiences</span>, and <span className="text-pink-400 font-bold">generate millions</span>. 
            Ready to join the digital revolution?
          </p>

          {/* Epic CTA buttons - responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <Link
              to="/auth"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-12 py-4 sm:py-6 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 font-bold text-base sm:text-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2 sm:space-x-3">
                <Rocket className="w-5 sm:w-6 h-5 sm:h-6 group-hover:animate-bounce" />
                <span className="whitespace-nowrap">LAUNCH MY PROJECT</span>
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6 group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </Link>
            
            <Link
              to="/portfolio"
              className="group border-2 border-cyan-400 text-cyan-400 px-6 sm:px-12 py-4 sm:py-6 rounded-full hover:bg-cyan-400 hover:text-black backdrop-blur-sm transition-all duration-300 font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3"
            >
              <Eye className="w-5 sm:w-6 h-5 sm:h-6 group-hover:scale-125 transition-transform duration-200" />
              <span className="whitespace-nowrap">VIEW OUR WORK</span>
            </Link>
          </div>

          {/* Animated stats - responsive grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 px-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-r ${stat.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 text-white group-hover:animate-pulse" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator - responsive */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-cyan-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Preview - responsive */}
      <section className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6">
              WHAT WE <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">DOMINATE</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              🔥 The digital services that make competitors cry and customers obsessed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 hover:scale-105 cursor-pointer overflow-hidden"
                >
                  {/* Animated background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{feature.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-white font-bold text-base sm:text-lg transition-colors duration-200 group"
            >
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Epic CTA Section - responsive */}
      <section className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Animated background elements - responsive */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-4 sm:left-8 w-3 sm:w-4 h-3 sm:h-4 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 relative z-10">
              READY TO <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">DOMINATE</span> YOUR MARKET?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 relative z-10 px-4">
              💥 Let's build something that breaks the internet and makes your competitors jealous
            </p>
            <Link
              to="/auth"
              className="relative z-10 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all duration-300 font-bold text-base sm:text-lg inline-flex items-center space-x-2 sm:space-x-3"
            >
              <Zap className="w-5 sm:w-6 h-5 sm:h-6 animate-pulse" />
              <span className="whitespace-nowrap">START THE REVOLUTION</span>
              <Rocket className="w-5 sm:w-6 h-5 sm:h-6 animate-bounce" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;