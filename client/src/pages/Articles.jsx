import React from 'react'
import { useAppContext } from '../Context/AppContext'

function Articles() {
  const {navigate} = useAppContext();
  return (
    <div>
      <h1 className='text-5xl font-bold'>This is article page.</h1>
    </div>
  )
}

export default Articles