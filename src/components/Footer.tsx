
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Youtube,
} from 'lucide-react';
import Logo from './Logo';
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'UI/UX Design', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
      { name: 'E-commerce', href: '/services' },
      { name: 'Consulting', href: '/services' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Free Tools', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '/contact' },
      { name: 'FAQ', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'GDPR Compliance', href: '/gdpr-compliance' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/omytech_kenya', name: 'Facebook' },
    { icon: 'x-twitter', href: 'https://x.com/omytech_kenya', name: 'X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/omytech-kenya/', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/omytech_kenya', name: 'Instagram' },
    { icon: 'tiktok', href: 'https://tiktok.com/@omytech_kenya', name: 'TikTok' },
    { icon: Youtube, href: 'https://youtube.com/@omytech_kenya', name: 'YouTube' }
  ];

  const currentYear = new Date;
  return (
    <footer className="bg-black text-white relative border-t border-cyan-500/20">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200 hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12 items-start">
          {/* Company Info (left) */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Logo size="sm" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">OMYTECH</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We forge exceptional digital experiences that drive growth and success. 
              From stunning websites to powerful mobile apps, we transform your vision into reality.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">info@omytech.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+254-715-367-859</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">UpperHill, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Services & Company (right) */}
          <div className="lg:col-span-2 flex flex-col lg:flex-row justify-end gap-10 lg:gap-20">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on digital trends, development tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Awards */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 md:justify-start md:mb-0">
            <span className="text-gray-300 mr-2">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon === 'x-twitter' ? (
                  <i className="bi bi-twitter-x text-[20px]" />
                ) : social.icon === 'tiktok' ? (
                  <i className="bi bi-tiktok text-[20px]" />
                ) : (
                  React.createElement(social.icon, { className: 'w-5 h-5' })
                )}
              </a>
            ))}
          </div>

          {/* Awards/Certifications */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">A+</div>
              <div className="text-xs text-gray-400">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">★★★★★</div>
              <div className="text-xs text-gray-400">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">#1</div>
              <div className="text-xs text-gray-400">Local Agency</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-400">
                © {currentYear.getFullYear()} OMYTECH. 
              </span>
              <span className="text-gray-400">All Rights Reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;