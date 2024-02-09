'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/pagination'

import Bike from './Bike'
const PopularBikeCarousel = ({ bikes }) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {bikes.map((bike) => (
        <SwiperSlide key={bike._id}>
          <Bike bike={bike}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default PopularBikeCarousel
