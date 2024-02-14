'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Button } from '@/components/ui/button'
import { Eye} from 'lucide-react';
import { useShoppingCart } from "use-shopping-cart"

export default function Carousel({ bikes }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const {cartCount, cartDetails, shouldDisplayCart, handleCartClick, totalPrice} = useShoppingCart()
  return (
    <section className=''>
      <div className='container'>
        <div className='flex max-lg:flex-col  items-center justify-center'>
          <div  className=' flex flex-col justify-between gap-4'>
            <h1 className='text-left text-2xl uppercase font-bold mb-2'>
              Where <span className='text-red-500'>Joyful</span> Cycling Begins
            </h1>
            <p className='text-left'>
              The Worlds Premium Brands In One Destination
            </p>
            <div className='flex gap-2 mt-3'>
              <Link href={'/our'} className='h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md'>SHOP NOW</Link>
              <Button variant='destructive' onClick={handleCartClick}>YOUR CART</Button>
            </div>
            <div></div>
          </div>

          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='h-[256] w-[400px] rounded-lg cursor-grab '
          >
            {bikes.map((image, index) => (
              <SwiperSlide key={index}>
                <div className='flex h-full w-full items-center justify-center relativ'>
                  <Image
                    src={urlFor(image.images[0]).url()}
                    alt={image.name}
                    width={400}
                    height={256}
                    className='block h-full w-full object-cover'
                  />
                  <Link href={`product/${image._id}`}className='absolute top-1 right-1 bg-red-500 text-white p-1 rounded-sm'>
                  <Eye />
                </Link>
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
          className='thumbs mt-3 h-[240px] w-[1144px] max-lg:w-[400px] max-lg:h-[160px]  '
          breakpoints={{
            640:{
              slidesPerView: 1
            },
            768:{
              slidesPerView: 2
            },
            1024:{
              slidesPerView: 4
            },
            1440:{
              slidesPerView: 4
            }
          }}
        >
          {bikes.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center bg-secondary border-2 border-border rounded-lg px-2 py-10 max-lg:py-14 relative'>
                <div className='absolute top-1 left-2 bg-gray-500 text-white max-lg:text-sm p-1 rounded-sm'>
                  {image.name}
                </div>
                <Link href={`product/${image._id}`}className='absolute top-1 right-1 bg-red-500 text-white p-1 rounded-sm '>
                  <Eye className='max-lg:h-[22px]'/>
                </Link>
                <Image
                  src={urlFor(image.images[0]).url()}
                  alt={image.name}
                  width={200}
                  height={123}
                  className='block h-full w-full object-cover max-lg:w-[150px] max-lg:h-[92px] '
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
