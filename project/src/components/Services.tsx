import React from 'react';
import { Code2, Palette, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Web Development',
      description: 'Creating responsive and dynamic web applications using modern frameworks.',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces with great user experience.',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Building scalable server-side applications and RESTful APIs.',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;