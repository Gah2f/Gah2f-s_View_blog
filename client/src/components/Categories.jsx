import React, { useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { images } from "../assets/images";

function Categories() {
  const [activeTab, setActiveTab] = useState("physics");
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="mb-12">
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab("physics")}
          className={`py-3 px-6 font-medium text-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer ${
            activeTab === "physics"
              ? "border-b-2 border-blue-600 text-blue-600"
              : ""
          }`}
        >
          Physics Articles
        </button>

        <button
          onClick={() => setActiveTab("coding")}
          className={`py-3 px-6 font-medium text-lg transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer ${
            activeTab === "coding"
              ? "border-b-2 border-blue-600 text-blue-600"
              : ""
          }`}
        >
          Coding Guides
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === "physics" ? (
          <>
            <CategoriesCard
              title="Quantum Mechanics"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.Quantummechanics}
              darkMode={darkMode}
            />
            <CategoriesCard
              title="Relativity"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.Relativity}
              darkMode={darkMode}
            />
            <CategoriesCard
              title="Astrophysics"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.Astroimage}
              darkMode={darkMode}
            />
          </>
        ) : (
          <>
            <CategoriesCard
              title="Algorithms"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.Algoimage}
              darkMode={darkMode}
            />
            <CategoriesCard
              title="Machine Learning"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.MachineLearning}
              darkMode={darkMode}
            />
            <CategoriesCard
              title="Scientific Computing"
              count={24}
              lastUpdated="July 1, 2025"
              img={images.SciComp}
              darkMode={darkMode}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;
