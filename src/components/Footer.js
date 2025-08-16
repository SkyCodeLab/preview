import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://linkedin.com/in/balraj"
    },
    {
      name: "GitHub", 
      icon: "fab fa-github",
      url: "https://github.com/balraj"
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter", 
      url: "https://twitter.com/balraj"
    },
    {
      name: "Medium",
      icon: "fab fa-medium",
      url: "https://medium.com/@balraj"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-blue-400 mb-4">
              Balraj
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer | Cloud & DevOps Engineer | Aspiring Cloud AI Engineer
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Passionate about building scalable solutions, automating workflows, and exploring 
              the intersection of cloud computing and artificial intelligence.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <a href="mailto:balraj@example.com" className="hover:text-blue-400 transition-colors duration-300">
                  balraj@example.com
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <i className="fas fa-phone mr-3 text-blue-400"></i>
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <i className="fas fa-map-marker-alt mr-3 text-blue-400"></i>
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2 text-white">
                Stay Updated
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Get notified about new projects and insights
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300">
                  <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Balraj. All rights reserved. Built with React & Tailwind CSS.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <i className="fas fa-arrow-up text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;