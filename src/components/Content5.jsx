import background from "../images/bg.jpg";
import { FaCheck } from "react-icons/fa";
import overlayBottomImg from "../images/overlay-bottom.png";
import overlayTopImg from "../images/overlay-top.png";

function Content5() {
  return (
    <section className="flex justify-center items-center">
      <div className="w-[85vw] h-vh mb-15 lg:p-0 lg:mb-0 relative">
        <div className="absolute lg:top-0 -top-0.5 z-30 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>

        <div className="absolute lg:top-0 -top-0.5 z-30 flex w-full">
          <img src={overlayTopImg} alt="Overlay" className="w-full" />
        </div>

        <div className="h-[1200px] lg:h-full relative w-[85vw] lg:w-full object-fit top-0 ">
          <img src={background} alt="" className="h-full w-full object-cover" />

          <div className="bg-over lg:h-full lg:w-full h-full w-[85vw] object-fit lg:left-0 top-0 absolute z-20"></div>
        </div>

        <div className="absolute top-0 flex flex-col md:gap-0 lg:flex-row md:flex-row lg:gap-0 gap-10 lg:p-0 z-20 w-[85vw] lg:w-full lg:h-full h-full">
          <div className="bg-blue-900 md:justify-center flex flex-col justify-center px-12 py-8 lg:p-0 md:flex-1 lg:flex-2 flex-3 w-auto">
            <h2 className="text-secondary font-bold text-3xl md:text-2xl lg:text-7xl">
              30% OFF
            </h2>
            <p className="text-white lg:text-4xl text-2xl font-semibold lg:mt-5 mt-3">
              For Online Reservation
            </p>
            <p className="text-white mt-5 lg:text-lg text-[14px] font-montserrat leading-6">
              Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
              sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
              diam. Ea et erat ut sed diam sea
            </p>

            <ul className="space-y-4 lg:text-[20px] text-[16px] font-roboto mt-7 text-white">
              <li className="flex items-center">
                <FaCheck className="text-secondary lg:mr-2 mr-4" />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-secondary lg:mr-2 mr-4" />
                <span>Consectetur adipisicing elit.</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-secondary lg:mr-2 mr-4" />
                <span>Temporibus, odio accusamus.</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-700 md:justify-center flex flex-col p-10 lg:p-0 lg:flex-2 md:flex-1 justify-center w-auto">
            <h2 className="text-white font-bold text-2xl lg:text-4xl text-center mb-3">
              Book Your Table
            </h2>

            <form action="">
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                required
                placeholder="Name"
                className="border py-2 px-5 lg:p-4 w-full  text-gray-400 text-left mt-3 placeholder:font-montserrat border-secondary  focus:outline-secondary"
              />

              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                required
                placeholder="Email"
                className="border py-2 px-5 lg:p-4 w-full  text-gray-400 text-left mt-3 placeholder:font-montserrat border-secondary  focus:outline-secondary"
              />

              <label htmlFor="date"></label>
              <input
                type="date"
                id="date"
                required
                placeholder="Date"
                className="border py-2 px-5 lg:p-4 w-full  text-gray-400 text-left mt-3 placeholder:font-montserrat border-secondary  focus:outline-secondary"
              />

              <label htmlFor="time"></label>
              <input
                type="time"
                id="time"
                required
                placeholder="Time"
                className="border py-2 px-5 lg:p-4 w-full  text-gray-400 text-left mt-3 placeholder:font-montserrat border-secondary  focus:outline-secondary"
              />

              <label htmlFor="select"></label>
              <select
                id="select"
                required
                className="border py-2 px-5 lg:p-4 w-full  text-gray-400 text-left mt-3 placeholder:font-montserrat border-secondary  focus:outline-secondary"
              >
                <option value="Person">Person</option>
                <option value="Person1">Person 1</option>
                <option value="Person2">Person 2</option>
                <option value="Person3">Person 3</option>
                <option value="Person4">Person 4</option>
              </select>

              <a href="/">
                <button
                  type="submit"
                  className="bg-secondary hover:bg-[#ed9837] transition-all duration-300 text-primary w-full p-4 mt-3 cursor-pointer"
                >
                  Book Now
                </button>
              </a>
            </form>
          </div>
        </div>

        <div className="absolute lg:-bottom-1 -bottom-0.5 z-20 w-full">
          <img
            src={overlayBottomImg}
            alt="Overlay"
            className="w-1/22 object-contain"
          />
        </div>
        <div className="absolute lg:-bottom-1 -bottom-0.5 z-20 w-full">
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
export default Content5;
