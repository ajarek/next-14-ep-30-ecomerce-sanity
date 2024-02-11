'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Button } from "@/components/ui/button"

export default function Carousel({bikes}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section className=''>
      <div className='container'>
        <div className='flex  items-center justify-center'>
          <div>

        <h1 className='text-left text-2xl uppercase font-bold mb-2'>Where <span className='text-red-500'>Joyful</span> <br/> Cycling Begins</h1>
       <p className='text-left'>
        The Worlds Premium Brands <br/> In One Destination
       </p>
       <div className='flex gap-2 mt-3'>
       <Button>SHOP NOW</Button>
       <Button variant="destructive">OUR BIKES</Button>
       </div>
       <div>

       </div>
          </div>
          
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='h-[246] w-[400px] rounded-lg cursor-grab'
        >
          {bikes.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={urlFor(image.images[0]).url()}
                  alt={image.name}
                  width={400}
                  height={256}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-[240px] w-[1144px]   '
        >
          {bikes.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center bg-secondary border-2 border-border rounded-lg px-2 py-10 relative'>
                <div className='absolute top-1 left-2 bg-red-500 text-white p-1 rounded-sm'>{image.name}</div>
                <Image
                  src={urlFor(image.images[0]).url()}
                  alt={image.name}
                  width={200}
                  height={123}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}