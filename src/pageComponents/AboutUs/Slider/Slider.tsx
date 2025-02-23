'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';

const Slider = ({ images }) => {
  return (
    <div className={'sliderContainer'}>
      <h2 className={'title'}>Մեր գործերն</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} className={'slideImage'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
