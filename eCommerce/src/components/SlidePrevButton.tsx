import { useSwiper } from 'swiper/react';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button className="absolute top-1/2 left-0 z-10" type="button" onClick={() => swiper.slidePrev()}>
      <img src="/Arrow1.png" alt="arrow" />
    </button>
  );
}
