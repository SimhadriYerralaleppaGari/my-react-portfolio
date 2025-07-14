import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Simhadri</h1>
        <ul className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700 dark:text-gray-200">
  <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
  <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
  <li><a href="#projects" className="hover:text-blue-600 transition">Projects</a></li>
  <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
