import React, { useState } from "react";
import LatestListCard from "./LatestListCard";
import { images } from "../assets/images";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function LatestArticles() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest Articles</h2>

        <div className="flex items-center">
          <span className="mr-2">Sort by:</span>
          <select
            className={`p-2 rounded-lg border-none ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <option>Most Recent</option>
            <option>Most Popular</option>
            <option>Most Commented</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <LatestListCard
          title="Understanding Feynman Path Integrals Through Computational Methods"
          description="A comprehensive exploration of path integral formulation in quantum mechanics with computational implementations."
          tags={["Quantum Mechanics", "Computational Physics"]}
          views={1243}
          comments={32}
          imgurl={images.Feymanpath}
          darkMode={darkMode}
        />

        <LatestListCard
          title="Optimizing Physics Simulations with GPU Acceleration"
          description="Learn how to leverage GPU computing to dramatically speed up complex physics simulations and visualizations."
          tags={["Scientific Computing", "GPU Programming"]}
          views={986}
          comments={24}
          imgurl={images.Gpuacceleration}
          darkMode={darkMode}
        />
        <LatestListCard
          title="Implementing the Standard Model in Python"
          description="A practical guide to coding fundamental particle interactions and testing predictions of the Standard Model."
          tags={["Particle Physics", "Python"]}
          views={754}
          comments={18}
          imgurl={images.Standardmodelinpython}
          darkMode={darkMode}
        />
        <LatestListCard
          title="Quantum Machine Learning: Algorithms and Applications"
          description="Exploring the intersection of quantum computing and machine learning with practical examples and code implementations."
          tags={["Quantum Computing", "Machine Learning"]}
          views={1567}
          comments={41}
          imgurl={images.QuantumandML}
          darkMode={darkMode}
        />
      </div> 

      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
            <ChevronLeftIcon/> 
            Previous
          </button>

          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
            1
          </button>

          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
            2
          </button>

          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
            3
          </button>

          <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer`}>
            Next <ChevronRightIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestArticles;
