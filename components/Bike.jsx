'use client'

import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { CgEye, CgShoppingBag } from 'react-icons/cg'
const Bike = ({ bike }) => {
  const popularBikeCat = bike.categories.find((bk) => bk.name === 'popular')
 
  return (
    <div className='' >
      <div className='border h-[328px] mb-5 p-4 overflow-hidden relative  '>
        <div className='bg-primary/5 w-full h-full flex justify-center items-center'>
        {popularBikeCat && (
            
            
          <div className='absolute top-8 left-8 bg-red-400 text-white px-3 text-sm uppercase font-medium'>
            Popular</div>
            )}
            <Image
              src={urlFor(bike.images[0]).url()}
              width={300}
              height={300}
              alt={bike.name}
            />
          
        </div>
      </div>

      
    </div>
  )
}

export default Bike
