import React from 'react'
import { FaRegHeart } from 'react-icons/fa';


function Title({title}) {
  return (
    <div className='flex flex-col items-center text-center'>
    <h2 className='royal text-[11vmin] lg:text-[8vmin] text-pink-500  font-semibold'>{title}</h2>
    <div className='flex items-center gap-4'>
    <hr className='bg-pink-500 w-[10vmin] h-[3px]'/>
    <FaRegHeart className='text-red-600 text-[3vmin]'/>
    <hr className='bg-pink-500 w-[10vmin] h-[3px]'/>
    </div>
    </div>
  )
}

export default Title