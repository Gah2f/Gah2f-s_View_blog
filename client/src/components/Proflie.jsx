import React, { useState } from "react";
import { images } from "../assets/images";

function Proflie() {
     const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <div className={`p-6 mb-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={images.Nebiyu} alt="Profile image" />
            </div> 
            <h3 className="text-xl font-bold mb-2">
                Nebiyu D. Nebiyeleul
            </h3> 
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Physics researcher and Freelancer Full stack web developer
            </p> 
            <p className="text-sm mb-4">
                Exploring the fascinating intersection of quantum physics and
                computational methods.
            </p> 
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer">
                View Profile
            </button>
        </div>
    </div>
  );
}

export default Proflie;
