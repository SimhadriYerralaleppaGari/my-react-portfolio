import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-center py-6 mt-10 border-t border-gray-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Simhadri Yerralaleppagari. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
