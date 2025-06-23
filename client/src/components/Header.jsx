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
            <li className="padding-10 mr-10">
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/services" >Services</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
