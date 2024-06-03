import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="absolute top-1/2 right-0 z-10" type="button" onClick={() => swiper.slideNext()}>
      <img src="/Arrow2.png" alt="arrow" />
    </button>
  );
}
