import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isDark, toggle } = useTheme();

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
            <ThemeToggle isDark={isDark} toggle={toggle} />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggle={toggle} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;