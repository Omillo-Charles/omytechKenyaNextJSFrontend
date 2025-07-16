import React from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = React.useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ecommerce', name: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCorp Enterprise Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive enterprise platform with advanced analytics, real-time collaboration, and seamless integrations.',
      tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      views: '12.4k',
      featured: true
    },
    {
      id: 2,
      title: 'FinanceFlow Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      description: 'Revolutionary mobile banking app with AI-powered insights and biometric security.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase', 'TensorFlow'],
      liveUrl: '#',
      githubUrl: '#',
      views: '8.7k',
      featured: true
    },
    {
      id: 3,
      title: 'ShopSphere E-commerce',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=800&q=80',
      description: 'Multi-vendor marketplace with advanced search, AR try-on, and personalized recommendations.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'Stripe', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      views: '15.2k',
      featured: false
    },
    {
      id: 4,
      title: 'DataViz Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      description: 'Real-time analytics dashboard with interactive visualizations and predictive modeling.',
      tech: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      views: '6.3k',
      featured: false
    },
    {
      id: 5,
      title: 'TravelMate App Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      description: 'Complete UI/UX design system for a travel planning and booking application.',
      tech: ['Figma', 'Adobe XD', 'Principle', 'Framer', 'Sketch'],
      liveUrl: '#',
      githubUrl: '#',
      views: '9.1k',
      featured: true
    },
    {
      id: 6,
      title: 'HealthTracker Pro',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive health monitoring app with wearable integration and AI coaching.',
      tech: ['Flutter', 'Firebase', 'TensorFlow', 'HealthKit', 'GraphQL'],
      liveUrl: '#',
      githubUrl: '#',
      views: '4.8k',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of successful projects that showcase innovation, creativity, and technical excellence.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-4"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-200 transform hover:scale-110"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">{project.views}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">All Projects</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-4 sm:gap-0 w-full sm:w-auto">
              <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
                <Filter className="w-5 h-5 text-gray-500" />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-center justify-center">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Eye className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-900">{project.views}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 font-semibold hover:text-purple-600 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See Your Project Here?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something amazing together that will be the next showcase in our portfolio.
          </p>
          <Link to="/auth" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;