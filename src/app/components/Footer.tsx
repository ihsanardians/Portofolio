// app/components/Footer.js

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/50 text-gray-400 py-6 z-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Copyright */}
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Ihsan Ardiansyah. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/ihsanardiansyah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/ihsanardians"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub size={25} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
