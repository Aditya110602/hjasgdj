import React from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'React', percentage: 90 },
    { name: 'TypeScript', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'UI/UX Design', percentage: 85 },
    { name: 'DevOps', percentage: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                <span className="text-indigo-600 dark:text-indigo-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.percentage}%`,
                    animation: 'growWidth 1.5s ease-out forwards',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;