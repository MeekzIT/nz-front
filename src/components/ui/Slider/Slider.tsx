'use client';

import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';
import { SliderComponentProps } from './types';

const SliderComponent = ({ data }: SliderComponentProps) => {
  const router = useRouter();

  const goToDetailsPage = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className={'sliderContainer'}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={28}
        slidesPerView={'auto'}
        navigation
        autoHeight={false}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: data.length >= 3 ? 2.5 : data.length,
          },
        }}
      >
        {data &&
          data.map((image: any, index: number) => {
            return (
              <SwiperSlide key={index} onClick={() => goToDetailsPage(image.id)}>
                <img src={image.image_11} alt={`Slide ${index}`} className={'slideImage'} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
