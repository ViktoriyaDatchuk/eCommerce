import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { Image } from '@commercetools/platform-sdk';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface SliderProps {
  slides: Image[];
  isModal?: boolean;
}

export default function Slider({ slides, isModal }: SliderProps) {
  return (
    <Swiper
      modules={[Scrollbar]}
      className="relative cursor-pointer"
      spaceBetween={20}
      slidesPerView={1}
      scrollbar={isModal && { draggable: true }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.url}>
          <img
            src={slide.url}
            alt={slide.url}
            className="rounded-xl"
            style={{ width: '100%', maxHeight: '550px', objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
      {!isModal && <SlidePrevButton />}
      {!isModal && <SlideNextButton />}
    </Swiper>
  );
}
