import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Alex Chen',
      position: 'Founder & CEO',
      avatar: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer with 8+ years of experience building scalable web applications.',
      skills: ['React', 'Node.js', 'AWS', 'Leadership'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@pixelforge.com'
      }
    },
    {
      name: 'Sarah Johnson',
      position: 'Lead Designer',
      avatar: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'UI/UX designer passionate about creating beautiful and intuitive user experiences.',
      skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@pixelforge.com'
      }
    },
    {
      name: 'Marcus Rodriguez',
      position: 'Senior Developer',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Mobile app specialist with expertise in React Native and Flutter development.',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'marcus@pixelforge.com'
      }
    },
    {
      name: 'Emily Zhang',
      position: 'Digital Marketing Lead',
      avatar: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marketing strategist focused on data-driven campaigns and growth hacking.',
      skills: ['SEO/SEM', 'Analytics', 'Content Strategy', 'Social Media'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@pixelforge.com'
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the Creative Minds
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience in design, development, and digital marketing.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose PixelForge?
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Years Experience</div>
              <div className="text-gray-600">Building digital solutions that make a difference</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Projects Completed</div>
              <div className="text-gray-600">Successful launches across various industries</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Client Satisfaction</div>
              <div className="text-gray-600">Long-term partnerships built on trust and results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;