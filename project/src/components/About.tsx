import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-w-3 aspect-h-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with 5 years of experience in creating
              beautiful and functional web applications. I specialize in modern JavaScript
              frameworks and have a keen eye for design.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">New York, USA</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">5+ Years</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">hello@example.com</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Availability</h3>
                <p className="text-gray-600 dark:text-gray-300">Full-time</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;