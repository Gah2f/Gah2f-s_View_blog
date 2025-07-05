import React from 'react'

function CategoriesCard({title, darkMode, count, lastUpdated, img}) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className='h-40 overflow-hidden'>
            <img src={img} alt={title} className='w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105' />
        </div>
        <div className='p-4'>
            <h3 className='text-lg font-bold mb-2'>
                {title}
            </h3>
            <div className='flex justify-between text-sm'>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {count} articles
                </span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Updated: {lastUpdated}

                </span>
            </div>
        </div>
    </div>
  )
}

export default CategoriesCard