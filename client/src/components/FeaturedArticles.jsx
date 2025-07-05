import React, { useState } from "react";
import ArticleCard from "./ArticleCard";
import { images } from "../assets/images";

function FeaturedArticles() {
     const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Featured Articles</h2>

        <a
          href=""
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium cursor-pointer"
        >
          View All
        </a>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ArticleCard 
        title='Quantum Computing: The Next Frontier'
        excerpt='Exploring how quantum bits are revolutionizing computational capabilities and solving previously impossible problems.'
        readingTime={8}
        date='July 3, 2025'
        author="Dr. Emma Chen"
        imgurl={images.Quantumcom}
        darkMode={darkMode}
        />

         <ArticleCard 
        title='Simulating Black Holes with Python"'
        excerpt='A step-by-step guide to creating computational models of black hole physics using Python and specialized libraries."'
        readingTime={12}
        date='June 29, 2025'
        author='Prof. James Wilson'
        imgurl={images.Blackholesimulation}
        darkMode={darkMode}
        />

        <ArticleCard 
        title='Neural Networks for Particle Physics"'
        excerpt='How machine learning is transforming particle detection and classification at CERN and other research facilities.'
        date='July 1, 2025'
        author="Dr. Sarah Patel"
        imgurl={images.NeuralNetworks}
        darkMode={darkMode}
        />

       
      </div>
    </div>
  );
}

export default FeaturedArticles;
