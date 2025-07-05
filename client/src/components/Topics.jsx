import React, { useState } from 'react'

function Topics() {
     const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    
  return (
    <div className={`p-6 mb-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className='text-lg font-bold mb-4'>
            Categories
        </h3> 
        <ul className='space-y-2'>
            <li>
                <a href="#" className='flex justify-between items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                    <span>Qunatum Physics</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        24
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className='flex justify-between items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                    <span>Algorithms & Data Structures</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        31
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className='flex justify-between items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                    <span>Machine Learning</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        42
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className='flex justify-between items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                    <span>Astrophysics</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        18
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className='flex justify-between items-center hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                    <span>Scientific Computing</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        27
                    </span>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Topics