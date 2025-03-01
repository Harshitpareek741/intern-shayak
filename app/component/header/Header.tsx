"use client";
import Image from 'next/image';
import React, { useState } from "react";
import image from '@/public/logo.webp';

interface HeaderProps {
  color?: string;
  opacity?: string;
}

const Header: React.FC<HeaderProps> = ({ color = "slate-950", opacity = "5" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-gray-800 bg-opacity-40 border-gray-200 dark:bg-${color} z-10 dark:bg-opacity-${opacity} md:rounded-full rounded-none mt-5 shadow-lg backdrop-blur-sm transition-all duration-300`}>
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo and Heading (heading hidden on mobile) */}
          <a href="#" className="flex items-center space-x-3">
            <div className="flex rounded-full overflow-hidden">
              <Image src={image} height={40} width={40} alt="Interview.Ai Logo" />
            </div>
            <span className="hidden md:inline self-center text-2xl font-bold text-white">Interview.Ai</span>
          </a>
          {/* Right: Mobile Toggle and Navigation */}
          <div className="flex items-center">
            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle main menu</span>
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block transition-all duration-300`} id="mobile-menu">
              <ul className="flex flex-col md:flex-row md:space-x-8 text-center">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors md:bg-transparent md:text-blue-100 md:hover:text-blue-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded transition-colors md:hover:bg-transparent md:hover:text-blue-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded transition-colors md:hover:bg-transparent md:hover:text-blue-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded transition-colors md:hover:bg-transparent md:hover:text-blue-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 text-gray-200 hover:bg-gray-700 rounded transition-colors md:hover:bg-transparent md:hover:text-blue-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
