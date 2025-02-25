'use client';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.scss';
import { SliderComponentProps } from './types';

const SliderComponent = ({ images, data }: SliderComponentProps) => {
  const router = useRouter();

  const goToDetailsPage = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className={'sliderContainer'}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={28}
        slidesPerView={2.5}
        navigation
        autoHeight={false}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {/* //todo: test anelu hamar em toxe vro vraz karenanq linker dneneq tenanq ui vonca ashxatum petqa jnjenq hetagayum */}
        {images &&
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={`Slide ${index}`} className={'slideImage'} />
            </SwiperSlide>
          ))}

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
