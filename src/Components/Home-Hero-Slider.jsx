import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeHeroSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="home-hero-slide-card">

                <img src="./img/home-page/01.jpg" alt="" />
                <div className='home-hero-slide-card-content slide-in-bottom'>
                    <h3>WELCOME TO OUR</h3>
                    <h1>ELEGENT FURNITURE</h1>
                    <h3>GALLERY 2024</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.</p>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="home-hero-slide-card">

                <img src="./img/home-page/02.jpg" alt="" />
                <div className='home-hero-slide-card-content slide-in-bottom'>
                    <h3>WELCOME TO OUR</h3>
                    <h1>ELEGENT FURNITURE</h1>
                    <h3>GALLERY 2024</h3>
                </div>

            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
