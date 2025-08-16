import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-bounce-slow">
              B
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Balraj
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 space-y-2">
            <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer
            </p>
            <p className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Cloud & DevOps Engineer
            </p>
            <p className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              Aspiring Cloud AI Engineer
            </p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Passionate about building scalable solutions, automating workflows, and exploring the intersection of cloud computing and artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '1s' }}>
            <a href="#projects" className="btn-primary">
              <i className="fas fa-code mr-2"></i>
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
            <i className="fas fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;