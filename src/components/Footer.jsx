import background from "../images/bg.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import overlayTopImg from "../images/overlay-top.png";

const footer = () => {
  return (
    <section className="">
      <div className="w-full h-[500px] relative">
        <div className="absolute lg:top-0 -top-0.5 z-30 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>

        <div className="absolute lg:top-0 -top-0.5 z-30 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>

        <div className=" lg:h-full relative w-full lg:w-full object-cover ">
          <img
            src={background}
            alt=""
            className="h-full w-full object-cover absolute inset-0"
          />

          <div className="bg-over lg:h-full lg:w-full h-full w-full object-fit lg:left-0 top-0 absolute z-20"></div>
          <div className="relative w-full flex lg:flex-row md:flex-row md:px-10 flex-col lg:px-15 md:gap-8 px-8 pb-10 pt-[150px] gap-12 mt-20 text-white z-20">
            <div className="w-full">
              <h2 className="lg:text-2xl text-lg font-semibold tracking-widest mb-5">
                GET IN TOUCH
              </h2>
              <div className="flex flex-col  gap-4">
                <p className="flex items-center gap-2 font-montserrat">
                  <FaLocationDot className="text-lg" />
                  123 Street, New York, USA
                </p>
                <p className="flex items-center gap-2 font-montserrat">
                  <IoCall className="text-lg" /> +012 345 67890
                </p>
                <p className="flex items-center gap-2 font-montserrat">
                  <LuMail className="text-lg" />
                  info@example.com
                </p>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold tracking-widest mb-5">
                FOLLOW US
              </h2>

              <p className="font-montserrat">
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>

              <div className="flex lg:gap-5 gap-2 md:gap-2 mt-5">
                <div>
                  <FaTwitter className="border-1 hover:bg-white hover:text-black h-[40px] w-[40px] outline-none text-4xl flex items-center justify-center p-2  " />
                </div>

                <div>
                  <FaFacebookF className="border-1 hover:bg-white hover:text-black h-[40px] w-[40px] outline-none text-4xl flex items-center justify-center p-2  " />
                </div>

                <div>
                  <FaLinkedinIn className="border-1 hover:bg-white hover:text-black h-[40px] w-[40px] outline-none text-4xl flex items-center justify-center p-2  " />
                </div>

                <div>
                  <FaInstagram className="border-1 hover:bg-white hover:text-black h-[40px] w-[40px] outline-none text-4xl flex items-center justify-center p-2  " />
                </div>
              </div>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold tracking-widest mb-5">
                OPEN HOURS
              </h2>
              <p className="md:mb-[6px] lg:mb-[6px] mb-4 font-montserrat md:font-semibold lg:font-semibold">MONDAY - FRIDAY</p>
              <p className="md:mb-[6px] lg:mb-[6px] mb-4 font-montserrat md:font-semibold lg:font-semibold">8.00 AM - 8.00 PM</p>
              <p className="md:mb-[6px] lg:mb-[6px] mb-4 font-montserrat md:font-semibold lg:font-semibold">SATURDAY - SUNDAY</p>
              <p className="md:mb-[6px] lg:mb-[6px] mb-4 font-montserrat md:font-semibold lg:font-semibold">2.00 PM - 8.00 PM</p>
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-semibold tracking-widest mb-5">
                NEWSLETTER
              </h2>
              <p className="font-montserrat">
                Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum
              </p>
              <div className="flex mt-5 items-stretch  gap-0 flex-row w-full">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="lg:px-2 lg:flex-2 lg:w-[70%] lg:py-5 md:px-[4px] md:w-[40%] md:flex-1 md:py-4 px-5 z-20 text-black  placeholder:font-montserrat bg-white  focus:outline-secondary"
                />

                <button className=" bg-secondary block lg:px-2 lg:py-5 md:py-4 md:flex-1 md:px-2 px-3.5 py-4 text-[#212529]  font-montserrat cursor-pointer hover:bg-[#ed9837] font-semibold ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <div className="relative lg:pt-18 lg:-mt-5 pb-8 lg:bottom-0 lg:w-full lg:h-[80px] text-white flex flex-col justify-center items-center z-20">
            <div className="w-full border border-gray-400/30 border-center"></div>
            <div className="mt-5 text-center font-montserrat text-[16px] flex flex-col gap-2">
              <p>
                Copyright &copy;{" "}
                <a href="#" className="text-secondary font-semibold">
                  Domain
                </a>
                . All Rights Reserved.
              </p>
              <p>
                Designed by{" "}
                <a href="#" className="text-secondary font-semibold">
                  HTML Codex
                </a>{" "}
                Distributed by{" "}
                <a href="#" className="text-secondary font-semibold">
                  ThemeWagon
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default footer;
