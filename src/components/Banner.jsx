import { Swiper, SwiperSlide } from "swiper/react";
import bannerImg1 from "../images/carousel-1.jpg";
import bannerImg2 from "../images/carousel-2.jpg";
import overlayBottomImg from "../images/overlay-bottom.png";
import SwiperNavButtons from "./SwiperNavButtons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Autoplay, Navigation } from "swiper/modules";

const banners = [
  {
    id: 1,
    img: bannerImg1,
  },
  {
    id: 2,
    img: bannerImg2,
  },
];

const Banner = () => {
  return (
    <section className="h-screen w-full">
      <div className="relative w-">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          speed={500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w- h-screen"
        >
          {banners.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <div className="h-screen w-full relative">
                <img
                  src={img}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-1/2 p-4 text-white text-center z-20 w-full sm:w-fit">
                  <p className="text-4xl text-secondary font-bold mb-2">
                    We Have Been Serving
                  </p>
                  <h2 className="md:text-9xl sm:text-7xl text-6xl font-bold mb-2">
                    COFFEE
                  </h2>
                  <p className="sm:text-4xl text-3xl font-bold">
                    * SINCE 1950 *
                  </p>
                </div>
                <div className="bg-overlay h-full w-full absolute top-0 left-0 z-10"></div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
        <div className="absolute bottom-0 z-20 flex w-full">
          <img
            src={overlayBottomImg}
            alt="overlayImg"
            className="w-1/3 object-contain"
          />
          <img
            src={overlayBottomImg}
            alt="overlayImg"
            className="w-1/3 object-contain"
          />
          <img
            src={overlayBottomImg}
            alt="overlayImg"
            className="w-1/3 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
