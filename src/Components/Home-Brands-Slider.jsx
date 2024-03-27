import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeBrandsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={60}
        loop={true}
        modules={[Pagination]}
        breakpoints={{
            1220: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 3,
            },
            430: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
          }}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="./img/home-page/brands01.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="./img/home-page/brands02.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="./img/home-page/brands03.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="./img/home-page/brands04.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="./img/home-page/brands05.png" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
