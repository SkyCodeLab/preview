import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "fas fa-cloud",
      color: "blue",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Azure", level: 85 },
        { name: "Google Cloud Platform", level: 80 },
        { name: "Cloud Architecture", level: 88 }
      ]
    },
    {
      title: "DevOps & Infrastructure",
      icon: "fas fa-cogs",
      color: "green",
      skills: [
        { name: "Docker & Kubernetes", level: 85 },
        { name: "CI/CD Pipelines", level: 90 },
        { name: "Infrastructure as Code", level: 82 },
        { name: "Monitoring & Logging", level: 80 }
      ]
    },
    {
      title: "Development",
      icon: "fas fa-code",
      color: "purple",
      skills: [
        { name: ".NET Core", level: 92 },
        { name: "Python", level: 88 },
        { name: "Angular/React", level: 85 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: "fas fa-database",
      color: "orange",
      skills: [
        { name: "SQL Server", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "AI & ML Tools",
      icon: "fas fa-brain",
      color: "pink",
      skills: [
        { name: "MLOps Pipelines", level: 75 },
        { name: "TensorFlow/PyTorch", level: 70 },
        { name: "AI Model Deployment", level: 78 },
        { name: "Data Engineering", level: 80 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "fas fa-tools",
      color: "indigo",
      skills: [
        { name: "Git & Version Control", level: 95 },
        { name: "Agile/Scrum", level: 88 },
        { name: "API Development", level: 90 },
        { name: "Microservices", level: 85 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      green: "from-green-500 to-green-600 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
      orange: "from-orange-500 to-orange-600 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      pink: "from-pink-500 to-pink-600 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"
    };
    return colors[color];
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit spanning cloud platforms, DevOps practices, and emerging AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} flex items-center justify-center text-white text-xl`}>
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Certifications/Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "AWS Certified", icon: "fab fa-aws", color: "orange" },
              { name: "Azure Certified", icon: "fab fa-microsoft", color: "blue" },
              { name: "Kubernetes Certified", icon: "fas fa-dharmachakra", color: "blue" },
              { name: "Agile Practitioner", icon: "fas fa-sync-alt", color: "green" }
            ].map((cert, index) => (
              <div key={index} className="card p-4 text-center">
                <div className={`text-3xl mb-2 text-${cert.color}-600`}>
                  <i className={cert.icon}></i>
                </div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;