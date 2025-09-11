import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="hidden text-white cursor-pointer text-3xl absolute top-1/2 left-20 transform -translate-y-1/2 lg:block font-bold z-20"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="hidden text-white cursor-pointer text-3xl absolute top-1/2 right-20 transform -translate-y-1/2 lg:block font-bold z-20"
      >
        <FaAngleRight />
      </button>
    </>
  );
};
export default SwiperNavButtons;
