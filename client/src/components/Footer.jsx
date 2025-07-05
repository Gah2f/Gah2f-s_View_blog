import React, { useState } from "react";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-700"
      } py-12`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">Gah2f's View</span>
            </div>

            <p className="text-sm mb-4">
              Exploring the fascinating intersection of physics and programming.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <XIcon />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <GitHubIcon />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Quantum Physics
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Algorithms
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Scientific Computing
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="hover:text-shadow-blue-600 transition-colors duration-200 cursor-pointer"
                >
                  Astrophysics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>

            <p className="text-sm mb-4">
              Subscribe to get notified about new articles and updates.
            </p>

            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full p-3 rounded-lg border-none ${
                    darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
                  } focus:ring-2 focus:ring-blue-500 outline-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2025 Gah2f's view. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="text-sm hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
