import React, { useState } from 'react'
import { images } from '../assets/images';

function RecentPost() {
    const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <div className={`p-6 mb-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className='text-lg font-bold mb-4'>
            Recent Posts
        </h3> 
        <ul className='space-y-4'>
            <li>
                <a href="#" className='flex items-start space-x-3 group cursor-pointer:'>
                    <div className='w-16 h-16 rounded overflow-hidden flex-shrink-0'>
                        <img src={images.QunEntanglement} alt="Quantum Entanglement" className='w-full h-full object-cover' />
                    </div> 

                    <div>
                        <h4 className='font-medium group-hover:text-blue-600 transition-colors duration-200'>
                            Quantum Entanglement and Its Computational Applications
                        </h4> 

                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            July 2, 2025
                        </p>
                    </div>
                </a>
            </li>

            <li>
                <a href="#" className='flex items-start space-x-3 group cursor-pointer:'>
                    <div className='w-16 h-16 rounded overflow-hidden flex-shrink-0'>
                        <img src={images.PyCode} alt="Pyhon Code" className='w-full h-full object-cover' />
                    </div> 

                    <div>
                        <h4 className='font-medium group-hover:text-blue-600 transition-colors duration-200'>
                            Advanced Python Techniques for Physics Simulations
                        </h4> 

                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                            June 30, 2025
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#" className='flex items-start space-x-3 group cursor-pointer:'>
                    <div className='w-16 h-16 rounded overflow-hidden flex-shrink-0'>
                        <img src={images.Networks} alt="Neural Network" className='w-full h-full object-cover' />
                    </div> 

                    <div>
                        <h4 className='font-medium group-hover:text-blue-600 transition-colors duration-200'>
                            Deep Learning Models for Particle Classification
                        </h4> 

                        <p className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                           June 28, 2025
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default RecentPost