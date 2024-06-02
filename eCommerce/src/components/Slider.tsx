import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageMovie } from '../data/movies';
import 'swiper/css';
import 'swiper/css/navigation';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

interface SliderProps {
  slides: ImageMovie[];
}

export default function Slider({ slides }: SliderProps) {
  return (
    <Swiper
      className="relative cursor-pointer"
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.url}>
          <img src={slide.url} alt={slide.url} className="w-full rounded-xl" />
        </SwiperSlide>
      ))}
      <SlidePrevButton />
      <SlideNextButton />
    </Swiper>
  );
}
