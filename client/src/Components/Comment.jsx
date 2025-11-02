import React from 'react'
import Image from './Image'

const comment = () => {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
        <div className='flex items-center gap-4'>
            <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
            <span className='font-medium'>John Doe</span>
            <span className='text-sm text-gray-500'>2 days ago</span>
        </div>
        <div className=''>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti molestiae harum quas ipsum nobis repudiandae, sint beatae ex? Perspiciatis ratione recusandae tempore labore ducimus alias, sint sit veniam eos ipsam.
            </p>
        </div>
    </div>
  )
}

export default comment