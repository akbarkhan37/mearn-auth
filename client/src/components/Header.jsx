import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md rounded-b-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-extrabold text-red-600 tracking-tight">AuthApp</span>
        </Link>

        {/* Right: Navigation */}
        <nav>
          <ul className="flex space-x-8 text-base font-semibold">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-1 rounded transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'bg-red-100 text-red-600'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Optional test area */}
      <div className="bg-gradient-to-r from-green-300 to-blue-300 p-4 text-xl text-center font-medium rounded-b-lg shadow-inner">
        Tailwind Test
      </div>
    </header>
  );
};

export default Header;