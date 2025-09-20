import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-24 body-font ml-20 mr-20">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Follow Me</h3>
            <div className="flex space-x-4 text-xl">
              <a href="https://www.facebook.com/login.phps/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaFacebookF />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/codewithshumaila" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#hero" className="hover:text-indigo-400">Home</a></li>
              <li><a href="#about" className="hover:text-indigo-400">About Me</a></li>
              <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Contact</h3>
            <p className="text-gray-300">Email: shumailariaz215@gmail.com</p>
            <p className="text-gray-300">Phone: +92-301-4555946</p>
            <p className="text-gray-300">Location: Lahore, Pakistan</p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-12">
          &copy; 2025 Shumaila Riaz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
