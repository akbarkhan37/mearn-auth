import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold text-blue-600">MySite</h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8 text-gray-700 font-semibold text-lg">
            <li>
              <Link to="/" className="px-2 py-1 hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="px-2 py-1 hover:text-blue-600 transition">About</Link>
            </li>
            <li>
              <Link to="/signup" className="px-2 py-1 hover:text-blue-600 transition">Signup</Link>
            </li>
            {/* <li>
              <Link to="/contact" className="px-2 py-1 hover:text-blue-600 transition">Contact</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
