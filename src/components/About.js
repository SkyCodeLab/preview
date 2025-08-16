import React from 'react';

const About = () => {
  const journeySteps = [
    {
      phase: "Foundation",
      technologies: [".NET", "Python", "Angular", "Java"],
      description: "Started my journey building robust applications with enterprise-grade technologies",
      icon: "fas fa-code"
    },
    {
      phase: "Cloud Transformation", 
      technologies: ["AWS", "Azure", "GCP", "DevOps"],
      description: "Evolved into cloud architecture and DevOps practices, automating deployments and scaling infrastructure",
      icon: "fas fa-cloud"
    },
    {
      phase: "AI Integration",
      technologies: ["AI/ML", "MLOps", "Cloud AI", "Automation"],
      description: "Currently exploring AI/ML integration with cloud platforms to build intelligent, automated solutions",
      icon: "fas fa-brain"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey from traditional development to cloud-native AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate technologist with a diverse background spanning full-stack development, 
              cloud architecture, and DevOps engineering. My career has been defined by continuous 
              learning and adaptation to emerging technologies.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Starting with traditional enterprise technologies like .NET, Python, Angular, and Java, 
              I've evolved to become proficient in cloud platforms and DevOps practices. Today, I'm 
              focused on integrating AI and machine learning capabilities into cloud-native solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in building solutions that not only solve current problems but are also 
              scalable, maintainable, and future-ready. My approach combines technical expertise 
              with a deep understanding of business needs.
            </p>
          </div>
          
          <div className="relative">
            <div className="card p-8 text-center">
              <div className="text-6xl text-blue-600 dark:text-blue-400 mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Innovation Driven
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Always exploring new technologies and methodologies to deliver cutting-edge solutions
              </p>
            </div>
          </div>
        </div>

        {/* Career Journey */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Career Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white text-xl">
                      <i className={step.icon}></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.phase}
                    </h4>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {step.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-600 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;