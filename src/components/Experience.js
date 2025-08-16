import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Cloud AI Engineer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading AI/ML integration projects with cloud platforms, developing MLOps pipelines, and architecting intelligent automation solutions.",
      achievements: [
        "Implemented AI-powered DevOps pipeline reducing deployment failures by 60%",
        "Designed cloud-native ML infrastructure serving 1M+ daily predictions",
        "Led team of 5 engineers in developing enterprise AI solutions",
        "Reduced cloud costs by 35% through intelligent resource optimization"
      ],
      technologies: ["AWS", "Python", "TensorFlow", "Kubernetes", "MLOps"],
      icon: "fas fa-brain",
      color: "purple"
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudFirst Technologies",
      period: "2021 - 2023",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Specialized in cloud infrastructure automation, CI/CD pipeline optimization, and container orchestration across multiple cloud platforms.",
      achievements: [
        "Migrated 50+ applications to containerized microservices architecture",
        "Implemented Infrastructure as Code reducing provisioning time by 80%",
        "Established monitoring and alerting systems improving uptime to 99.9%",
        "Automated deployment processes for 20+ development teams"
      ],
      technologies: ["Docker", "Kubernetes", "Terraform", "Jenkins", "AWS", "Azure"],
      icon: "fas fa-cogs",
      color: "blue"
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Enterprise Solutions Inc.",
      period: "2019 - 2021",
      location: "New York, NY",
      type: "Full-time",
      description: "Developed enterprise web applications using modern frameworks, integrated third-party services, and optimized application performance.",
      achievements: [
        "Built CRM system handling 10,000+ daily active users",
        "Developed real-time communication features using WebRTC",
        "Created Outlook add-ins improving team productivity by 40%",
        "Optimized database queries reducing response time by 70%"
      ],
      technologies: [".NET Core", "Angular", "SQL Server", "Azure", "JavaScript"],
      icon: "fas fa-code",
      color: "green"
    },
    {
      id: 4,
      title: "Software Developer",
      company: "StartupTech",
      period: "2017 - 2019",
      location: "Austin, TX",
      type: "Full-time",
      description: "Contributed to various web development projects, learned modern development practices, and gained experience with cloud technologies.",
      achievements: [
        "Developed responsive web applications using Angular and React",
        "Implemented RESTful APIs serving mobile and web clients",
        "Participated in agile development processes and code reviews",
        "Contributed to open-source projects and internal tools"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "Git"],
      icon: "fas fa-laptop-code",
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: "bg-purple-500 border-purple-500 text-purple-600",
      blue: "bg-blue-500 border-blue-500 text-blue-600", 
      green: "bg-green-500 border-green-500 text-green-600",
      orange: "bg-orange-500 border-orange-500 text-orange-600"
    };
    return colors[color];
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through diverse roles and technologies, building expertise in modern software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 ${getColorClasses(exp.color).split(' ')[1]} ${getColorClasses(exp.color).split(' ')[0]} flex items-center justify-center z-10`}>
                <i className={`${exp.icon} text-white text-sm`}></i>
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {exp.location} • {exp.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-${exp.color}-100 dark:bg-${exp.color}-900 text-${exp.color}-800 dark:text-${exp.color}-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <i className="fas fa-check-circle text-green-500 mr-3 mt-0.5 flex-shrink-0"></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { number: "6+", label: "Years Experience", icon: "fas fa-calendar-alt" },
            { number: "50+", label: "Projects Completed", icon: "fas fa-project-diagram" },
            { number: "20+", label: "Technologies Mastered", icon: "fas fa-tools" },
            { number: "99.9%", label: "Uptime Achieved", icon: "fas fa-chart-line" }
          ].map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                <i className={stat.icon}></i>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;