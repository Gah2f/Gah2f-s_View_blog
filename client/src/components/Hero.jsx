import React from 'react'
import { images } from '../assets/images'

function Hero() {
  return (
    <div className='mb-12 relative rounded-xl overflow-hidden'>

        <div className='flex flex-col md:flex-row items-center'>
            <div className='md:w-1/2 p-8 md:p-12 z-10'>
            <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                Exploring the intersection of Physics and Programming
            </h1> 
            <p className='text-lg mb-6'>
                Dive in to the world of physics and programming with our curated articles, tutorials, and insights. Whether you're a beginner or an expert, there's something for everyone.
            </p>
            <button className='px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200 !rounded-button whitespace-nowrap cursor-pointer'>
                Explore Articles
            </button>
            </div>

            <div className='md:w-1/2 h-full'>
            <img src={images.Heroimage} alt="Hero image" className='w-full h-full object-cover object-top'/>
            </div>

        </div>

    </div>
  )
}

export default Hero