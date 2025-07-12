import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SunnyIcon from "@mui/icons-material/Sunny";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "../Context/AppContext";
function Nav() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const { navigate, token } = useAppContext();
  return (
    <header className={`sticky top-0 z-50 shadow-2xl bg-white`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a onClick={() => navigate("/")} className="flex items-center">
            <span className="text-xl font-semibold">Gah2f's View</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            onClick={() => navigate("/")}
            className="font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => navigate("/articles")}
            className="font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Articles
          </a>

          <a
            onClick={() => navigate("/about")}
            className="font-medium hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSearch}
            className="p-2 rounded-full hover:gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <SunnyIcon /> : <DarkModeIcon />}
          </button>

          <button
            className="p-2 rounded-full hover:gray-100 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            aria-label="Search"
          >
            <span className="hidden md:inline"> {token ? 'Dashboard' : 'Login'} </span>
          </button>

          <button>
            <MenuIcon onClick={toggleMobileMenu} />
          </button>  
         </div>
      </div>
      {searchOpen && (
        <div
          className={`absolute w-full ${
            darkMode ? "bg-gray-800" : "text-white"
          } shadow-md p-4`}
        >
          <div className="container mx-auto flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search articles ..."
                className={`w-full p-3 pl-10 rounded-lg border-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-gray-700 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <button
              onClick={toggleSearch}
              className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
            >
              <CloseIcon className="text-gray-400" />
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="absolute top-16 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-48">
          <a href="">Home</a>
          <a href="">Articles</a>
          <a href="">Categories</a>
          <a href="">About</a>
        </div>
      )}
    </header>
  );
}

export default Nav;
