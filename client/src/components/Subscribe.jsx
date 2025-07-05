import React, { useState } from 'react'

function Subscribe() {
    const [darkMode, setDarkMode] = useState(false);
      const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
  return (
    <div className={`p-6 mb-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h3 className='text-lg font-bold mb-4'>
            Subscribe to Newsletter
        </h3> 
        <p className='text-sm mb-4'>
            Get the latest articles and updates delivered to your inbox.
        </p> 

        <form className='space-y-3'>
            <div>
                <input type="email" placeholder='Your email address' className={`w-full p-3 rounded-lg border-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'} focus:ring-2 focus:ring-blue-500 outline-none`} />
            </div> 
            <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer'>
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default Subscribe