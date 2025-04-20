import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/research', label: 'Research' },
    { path: '/blog', label: 'Blog' },
    { path: '/cv', label: 'CV' },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-2 rounded-md transition-colors ${
              location.pathname === item.path
                ? 'bg-white text-gray-900 font-medium shadow-sm'
                : 'text-gray-600 hover:bg-white hover:text-gray-900'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar; 