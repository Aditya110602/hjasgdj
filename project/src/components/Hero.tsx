import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;