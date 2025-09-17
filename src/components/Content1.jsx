import aboutImg from "../images/about.png";
import { FaCheck } from "react-icons/fa";

const Content1 = () => {
  return (
    <section className="bg-[#fffbf2]">
      <div className="flex flex-col justify-center items-center py-8 lg:gap-4 md:">
        <div className="w-0.5 h-30 border border-secondary border-center"></div>
        <div>
          <p className="text-base md:text-2xl sm:text-lg tracking-widest text-center text-secondary">
            ABOUT US
          </p>
          <h1 className="text-2xl md:text-4xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Serving Since 1950
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row lg:items-center justify-center gap-5 px-10 py-12 md:px-5 lg:px-18">
          <div className="lg:w-1/2 md:w-[150%] md:h-full md:py-0 md:px-0 lg:text-left">
            <h1 className="text-[40px] md:text-4xl font-bold text-primary">
              Our Story
            </h1>
            <p className="tracking-wider font-semibold font-roboto text-[20px] md:text-xl mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, rem autem!
            </p>

            <p className="text-gray-600 mt-3 font-montserrat tracking-wide text-[16px] md:text-base leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              voluptatibus iste ratione fugit doloribus, numquam deserunt.
              Nesciunt rem mollitia, illum molestiae sapiente similique omnis,
              aliquid sed enim non labore.
            </p>

            <button className="mt-5 px-6 py-2 bg-[#452e26] text-white font-semibold cursor-pointer hover:bg-primary transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="lg:w-1/2 md:w-[150%] md:h-full md:py-8 h-full flex justify-center items-center">
            <img
              src={aboutImg}
              alt="About Us"
              className="w-72 lg:w-[450px] sm:w-80 md:w-96 h-[400px] object-cover"
            />
          </div>

          <div className="lg:w-1/2 md:w-[150%] md:h-full md:py-0 md:px-0 h-full px-3">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Our Vision
            </h1>
            <p className="text-gray-600 font-montserrat tracking-wide text-base md:text-base leading-relaxed mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio veritatis quidem quas omnis, debitis quisquam vel
              expedita aperiam dolorum, aut consequatur neque consectetur.
            </p>

            <ul className="space-y-4 text-lg md:text-xl font-roboto mt-3">
              <li className="flex items-center">
                <FaCheck className="text-secondary mr-2" />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-secondary mr-2" />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
              <li className="flex items-center">
                <FaCheck className="text-secondary mr-2" />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
            </ul>
            <button className="mt-5 px-6 py-2 bg-[#ac7a41] text-black font-semibold cursor-pointer hover:bg-secondary transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Content1;
