import overlayBottomImg from "../images/overlay-bottom.png";
import overlayTopImg from "../images/overlay-top.png";
import background from "../images/bg.jpg";
import { useState } from "react";

function Content3() {
  return (
    <section className="mt-7">
      <div className="relative w-full">
        <div className="absolute z-20 -top-0.5 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>
        <div className="absolute z-20 -top-0.5 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>

        <div>
          <img
            src={background}
            alt=""
            className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] w-full object-cover"
          />
        </div>
        <div className="absolute text-center top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-secondary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              50% OFF
            </h2>
            <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-3">
              Sunday Special Offer
            </p>
            <p className="text-white text-[21px] sm:text-[12px] md:text-xl lg:text-2xl mt-2 md:mt-3 px-5">
              Only for Sunday from 1st Jan to 30th Jan 2045
            </p>
            <div className="flex sm:flex-row items-center justify-center mt-4 md:mt-6 lg:mt-8">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="p-3 sm:p-4 px-4 sm:px-6 md:px-8 w-10 min-w-[170px] md:min-w-[250px] placeholder:font-montserrat bg-white  focus:outline-secondary text-sm md:text-base"
              />

              <a href="/">
                <button className="bg-secondary text-[#212529]  font-montserrat cursor-pointer hover:bg-[#ed9837] font-semibold transition-colors p-3 sm:p-4 px-6 sm:px-8 w-full sm:w-auto text-sm md:text-base">
                  Sign Up
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-over bg-opacity-50 h-full w-full absolute top-0 left-0 z-10"></div>
        <div className="absolute -bottom-0.5 z-20 w-full">
          <img
            src={overlayBottomImg}
            alt="Overlay"
            className="w-1/22 object-contain"
          />
        </div>
        <div className="absolute -bottom-0.5 z-20 w-full">
          <img
            src={overlayBottomImg}
            alt="Overlay"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
export default Content3;
