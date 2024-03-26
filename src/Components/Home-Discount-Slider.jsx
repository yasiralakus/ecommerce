import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeDiscountSlider() {
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
            <div>
                <div className="home-page-discount-card">

                    <img src="./img/home-page/discount01.jpg" alt="" />

                    <div>
                        <h1>Discount 50%</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus excepturi unde dolorum repellendus laboriosam delectus repudiandae, corporis eligendi exercitationem? Quo, ex voluptas id numquam dolore delectus facere quae cupiditate accusantium.</p>
                        <a href="">GET DISCOUNT <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="home-page-discount-card">

                    <img src="./img/home-page/discount02.jpg" alt="" />

                    <div>
                        <h1>Discount 50%</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus excepturi unde dolorum repellendus laboriosam delectus repudiandae, corporis eligendi exercitationem? Quo, ex voluptas id numquam dolore delectus facere quae cupiditate accusantium.</p>
                        <a href="">GET DISCOUNT <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="home-page-discount-card">

                    <img src="./img/home-page/discount01.jpg" alt="" />

                    <div>
                        <h1>Discount 50%</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus excepturi unde dolorum repellendus laboriosam delectus repudiandae, corporis eligendi exercitationem? Quo, ex voluptas id numquam dolore delectus facere quae cupiditate accusantium.</p>
                        <a href="">GET DISCOUNT <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <div className="home-page-discount-card">

                    <img src="./img/home-page/discount02.jpg" alt="" />

                    <div>
                        <h1>Discount 50%</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus excepturi unde dolorum repellendus laboriosam delectus repudiandae, corporis eligendi exercitationem? Quo, ex voluptas id numquam dolore delectus facere quae cupiditate accusantium.</p>
                        <a href="">GET DISCOUNT <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
