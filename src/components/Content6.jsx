import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from "../data";

import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Content6() {
  return (
    <section className="mt-8">
      <div className="flex flex-col justify-center items-center py-8 px-5 z-20 gap-4">
        <div className="w-0.5 h-20 lg:h-30 border border-secondary border-center"></div>

        <div>
          <p className="text-[20px] md:text-2xl sm:text-lg tracking-widest text-center text-secondary">
            TESTIMONIAL
          </p>
          <h1 className="text-3xl md:text-4xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Our Clients Say
          </h1>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          speed={500}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            // For mobile devices
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // For tablets
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            // For desktops
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper w-full"
        >
          {testimonial.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center h-75">
                <div className="flex flex-row items-center gap-4 w-full mt-10 px-6 md:px-10 lg:px-16">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18px] md:text-[20.4px] font-semibold text-primary">
                      {item.name}
                    </h3>
                    <p className="text-[14px] md:text-[16px] text-gray-500 italic font-montserrat ">
                      {item.title}
                    </p>
                  </div>
                </div>
                <p className=" text-gray-600 font-montserrat px-6 md:px-10 lg:px-16 mb-5 lg:text-lg text-[14px]">
                  {item.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Content6;
