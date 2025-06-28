import React from 'react';
import { Users, Award, Target, Heart, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Alex Chen',
      position: 'Founder & CEO',
      avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 10+ years of experience in digital transformation and startup growth.',
      skills: ['Strategic Leadership', 'Full-Stack Development', 'Business Development', 'Team Building'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@omy-tech.com'
      }
    },
    {
      name: 'Sarah Johnson',
      position: 'Creative Director',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Award-winning designer passionate about creating beautiful and intuitive user experiences.',
      skills: ['UI/UX Design', 'Brand Strategy', 'Design Systems', 'Creative Direction'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@omy-tech.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Technical Lead',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect specializing in scalable solutions and emerging technologies.',
      skills: ['System Architecture', 'Cloud Computing', 'DevOps', 'Mobile Development'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'marcus@omy-tech.com'
      }
    },
    {
      name: 'Emily Zhang',
      position: 'Growth Strategist',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Data-driven marketer focused on sustainable growth and customer success.',
      skills: ['Digital Marketing', 'Analytics', 'Growth Hacking', 'Customer Success'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@omy-tech.com'
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
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">OMY-TECH</span>
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
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full"></div>
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
                    className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200"
                  >
                    <Twitter className="w-4 h-4" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your digital vision to life.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200">
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;