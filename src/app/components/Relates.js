import React from 'react'
import Image from 'next/image';


function relatives({name ,side}) {
  return (
    <div>
        <h1 className='text-center text-4xl p-7'>{name}</h1>
      <ul className='flex justify-center lg:justify-between flex-wrap gap-10 mb-10'>
        {side.map((val, i) => (
          <li key={i} className='flex flex-col items-center'>
            <Image
              src={val.photo}
              alt={`Photo of ${val.name}`}
              width={300}
              height={300}
              className='rounded-full' // Example: Apply rounded corners
            />
            <p className='mt-2'>{val.name}</p>
            <p className='text-sm text-gray-500'>{val.relation}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default relatives