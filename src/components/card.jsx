import React from 'react'
const card = ({props}) => {
    
  return (
    <div className='h-24 w-48 bg-red-700 flex justify-center items-center text-white text-2xl font-bold'>
        <h1 className='text-black bg-orange-500'>{props}</h1>
 </div>
  )
}

export default card
