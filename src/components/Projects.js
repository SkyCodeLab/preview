import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Enterprise CRM Migration",
      category: "enterprise",
      description: "Led the migration of a legacy CRM system to a cloud-native architecture, improving performance by 300% and reducing operational costs by 40%.",
      technologies: ["Azure", ".NET Core", "SQL Server", "Docker", "Kubernetes"],
      features: [
        "Microservices architecture",
        "Real-time data synchronization", 
        "Advanced analytics dashboard",
        "Mobile-responsive interface"
      ],
      image: "fas fa-users",
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "HRMS Cloud Platform",
      category: "enterprise",
      description: "Developed a comprehensive Human Resource Management System with automated workflows, employee self-service portal, and advanced reporting capabilities.",
      technologies: ["AWS", "Python", "Angular", "PostgreSQL", "Redis"],
      features: [
        "Employee lifecycle management",
        "Automated payroll processing",
        "Performance tracking",
        "Compliance reporting"
      ],
      image: "fas fa-briefcase",
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 3,
      title: "Real-time Call Integration",
      category: "integration",
      description: "Built a real-time communication system integrating VoIP services with existing business applications, enabling seamless customer interactions.",
      technologies: ["Node.js", "WebRTC", "Socket.io", "MongoDB", "Docker"],
      features: [
        "HD voice/video calling",
        "Screen sharing capabilities",
        "Call recording & analytics",
        "CRM integration"
      ],
      image: "fas fa-phone",
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 4,
      title: "Outlook Add-in Suite",
      category: "integration",
      description: "Created a suite of Outlook add-ins to enhance productivity, including email templates, scheduling assistants, and CRM integration tools.",
      technologies: ["JavaScript", "Office.js", "Azure AD", "Graph API", ".NET"],
      features: [
        "Email template management",
        "Smart scheduling",
        "Contact synchronization",
        "Activity tracking"
      ],
      image: "fas fa-envelope",
      demoLink: "#",
      codeLink: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "AI-Powered DevOps Pipeline",
      category: "ai-devops",
      description: "Implemented an intelligent CI/CD pipeline that uses machine learning to predict deployment risks and optimize resource allocation.",
      technologies: ["Python", "TensorFlow", "Jenkins", "Kubernetes", "Prometheus"],
      features: [
        "Predictive failure analysis",
        "Automated rollback decisions",
        "Resource optimization",
        "Performance monitoring"
      ],
      image: "fas fa-robot",
      demoLink: "#",
      codeLink: "#",
      status: "In Progress"
    },
    {
      id: 6,
      title: "Cloud Cost Optimization AI",
      category: "ai-devops",
      description: "Developed an AI system that analyzes cloud usage patterns and automatically optimizes resource allocation to reduce costs while maintaining performance.",
      technologies: ["Python", "AWS Lambda", "Machine Learning", "CloudWatch", "Terraform"],
      features: [
        "Usage pattern analysis",
        "Automated scaling recommendations",
        "Cost prediction models",
        "Resource rightsizing"
      ],
      image: "fas fa-chart-line",
      demoLink: "#",
      codeLink: "#",
      status: "In Progress"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'enterprise', label: 'Enterprise' },
    { key: 'integration', label: 'Integration' },
    { key: 'ai-devops', label: 'AI & DevOps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of enterprise solutions, integrations, and AI-powered innovations
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card p-6 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                  <i className={project.image}></i>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2 text-xs"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a 
                  href={project.demoLink}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Demo
                </a>
                <a 
                  href={project.codeLink}
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  <i className="fab fa-github mr-2"></i>
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <a href="#contact" className="btn-primary">
            <i className="fas fa-handshake mr-2"></i>
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;