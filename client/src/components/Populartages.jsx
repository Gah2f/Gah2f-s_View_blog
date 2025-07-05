import React, { useState } from 'react'

function Populartages() {
    const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <div className={`p-6 mb-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className='text-lg font-bold mb-4'>
            Popular Tags
        </h3> 

        <div className='flex flex-wrap gap-2'>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #QuantumComputing
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #Python
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #MachineLearning
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #Relativity
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #DataScience
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #Algorithms
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #ParticlePhysics
            </a>
            <a href="#" className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 cursor-pointer`}>
                #GPU
            </a>

        </div>
    </div>
  )
}

export default Populartages