'use client'

import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from '@/lib/images'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Carusel({bikes}) {
  return (
    <section className=' mx-auto flex items-center justify-center  p-4'>
      <div className='container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='h-[220px] w-[460px] rounded-lg  '
        >
          {bikes.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center  px-12 border-2 '>
                <Image
                  src={urlFor(image.images[0]).url()}
                  alt={image.name}
                  width={460}
                  height={220}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}