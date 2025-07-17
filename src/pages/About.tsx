import React from 'react';
import { Users, Award, Target, Heart, Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
// Official Bootstrap X (Twitter) icon SVG
const XTwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M2.97 1.67c.457-.3.997-.47 1.57-.47h6.92c.573 0 1.113.17 1.57.47.457.3.84.73 1.09 1.25.25.52.36 1.12.29 1.7v8.66c.07.58-.04 1.18-.29 1.7-.25.52-.633.95-1.09 1.25-.457.3-.997.47-1.57.47H4.54c-.573 0-1.113-.17-1.57-.47a2.77 2.77 0 0 1-1.09-1.25 3.13 3.13 0 0 1-.29-1.7V4.62c-.07-.58.04-1.18.29-1.7.25-.52.633-.95 1.09-1.25Zm1.57.53c-.37 0-.73.11-1.03.32-.3.2-.54.5-.7.84-.16.34-.23.73-.18 1.11v6.06l2.7-2.7 2.7 2.7 2.7-2.7 2.7 2.7V4.47c.05-.38-.02-.77-.18-1.11a1.77 1.77 0 0 0-.7-.84 1.77 1.77 0 0 0-1.03-.32H4.54Zm8.49 8.49-2.7-2.7-2.7 2.7-2.7-2.7v3.84c-.05.38.02.77.18 1.11.16.34.4.64.7.84.3.21.66.32 1.03.32h6.92c.37 0 .73-.11 1.03-.32.3-.2.54-.5.7-.84.16-.34.23-.73.18-1.11V7.99l-2.7 2.7Z"/>
  </svg>
);

const About = () => {
  const team = [
    {
      name: 'Omillo Charles',
      position: 'Founder & CEO',
      avatar: 'OC',
      bio: 'Visionary leader with a passion for digital innovation and business growth.',
      skills: ['Leadership', 'Strategy', 'Full-Stack Development', 'Business Growth'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'omillo@omytech.com'
      }
    },
    {
      name: 'Caredge Ombikhwa',
      position: 'Technical Lead',
      avatar: 'CO',
      bio: 'Expert in scalable systems and emerging technologies, driving technical excellence.',
      skills: ['System Architecture', 'Cloud', 'DevOps', 'Mobile Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'caredge@omytech.com'
      }
    },
    {
      name: 'Christopher Musyoki',
      position: 'Growth Strategist',
      avatar: 'CM',
      bio: 'Data-driven marketer dedicated to sustainable growth and client success.',
      skills: ['Digital Marketing', 'Analytics', 'Growth Hacking', 'Customer Success'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'christopher@omytech.com'
      }
    },
    {
      name: 'Japhet Bugaga',
      position: 'Creative Director',
      avatar: 'JB',
      bio: 'Award-winning designer focused on beautiful, intuitive user experiences.',
      skills: ['UI/UX Design', 'Branding', 'Design Systems', 'Creative Direction'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'japhet@omytech.com'
      }
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We build long-term partnerships based on trust and results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', description: 'Successful launches across industries' },
    { number: '98%', label: 'Client Satisfaction', description: 'Long-term partnerships built on trust' },
    { number: '50+', label: 'Team Members', description: 'Talented professionals worldwide' },
    { number: '5+', label: 'Years Experience', description: 'Proven track record of success' }
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">OMYTECH</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We're a passionate team of digital craftsmen dedicated to forging exceptional digital experiences 
                that drive growth and success for businesses worldwide.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">2019</div>
                  <div className="text-sm text-gray-400">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">Global</div>
                  <div className="text-sm text-gray-400">Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Our Mission</h3>
                <p className="leading-relaxed text-gray-300">
                  To empower businesses with innovative digital solutions that not only meet today's challenges 
                  but anticipate tomorrow's opportunities. We believe in the transformative power of technology 
                  when combined with human creativity and strategic thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-cyan-100 mb-2">{stat.label}</div>
                <div className="text-cyan-200">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The talented individuals who bring creativity, expertise, and passion to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-bold text-white bg-gradient-to-br from-cyan-500 to-purple-600">
                    {member.avatar}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-4">{member.position}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-gray-900 hover:border-cyan-400 transition-all duration-200"
                    aria-label="X"
                  >
                    <i className="bi bi-twitter-x text-[16px]" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wings Under OMYTECH Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-950 via-black to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Wings Under <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">OMYTECH</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              OMYTECH is more than a company—it's an ecosystem. Explore our specialized wings, each with a unique mission and creative spirit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Omytech Studio */}
            <div className="bg-gradient-to-br from-cyan-900/60 to-blue-900/60 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-cyan-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">Studio</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-300 mb-2">Omytech Studio</h3>
              <p className="text-gray-200 mb-2">We deliver world-class digital services to clients, from web and mobile development to branding and marketing. Your vision, our craft.</p>
              <span className="inline-block mt-2 px-4 py-1 bg-cyan-700/30 text-cyan-200 rounded-full text-xs font-semibold mb-4">Digital Services</span>
              <a href="https://studio.omytech.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-cyan-600 hover:to-blue-600 transition-all duration-200">Visit Studio</a>
            </div>
            {/* Omylabs */}
            <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-purple-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">Labs</span>
              </div>
              <h3 className="text-2xl font-bold text-purple-300 mb-2">Omylabs</h3>
              <p className="text-gray-200 mb-2">Our innovation hub—where we build software products and SaaS solutions that shape the future. Ideas become reality here.</p>
              <span className="inline-block mt-2 px-4 py-1 bg-purple-700/30 text-purple-200 rounded-full text-xs font-semibold mb-4">Software & SaaS</span>
              <a href="https://labs.omytech.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-purple-600 hover:to-pink-600 transition-all duration-200">Visit Labs</a>
            </div>
            {/* OmyGen */}
            <div className="bg-gradient-to-br from-green-900/60 to-emerald-900/60 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-green-700/30 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">Gen</span>
              </div>
              <h3 className="text-2xl font-bold text-green-300 mb-2">OmyGen</h3>
              <p className="text-gray-200 mb-2">We mentor and empower the next generation of techies—nurturing talent, creativity, and innovation for a brighter digital future.</p>
              <span className="inline-block mt-2 px-4 py-1 bg-green-700/30 text-green-200 rounded-full text-xs font-semibold mb-4">Mentorship</span>
              <a href="https://gen.omytech.com" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-green-600 hover:to-emerald-600 transition-all duration-200">Visit OmyGen</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 inline-block">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;