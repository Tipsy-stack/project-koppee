import { service } from "../data";
import { FaTruck } from "react-icons/fa";
import { RiCupFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { FaTable } from "react-icons/fa";

const Content2 = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center py-8 gap-4">
        <div className="w-0.5 h-30 border border-secondary border-center"></div>

        <div>
          <p className="text-2xl md:text-2xl sm:text-lg tracking-widest text-center text-secondary">
            OUR SERVICES
          </p>
          <h1 className="text-4xl mt-2 md:mt-2 lg:mt-0 px-3 md:text-5xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Fresh & Organic Beans
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 md:px-10 lg:px-30 md:space-y-10 grid-cols-1 gap-5 px-25 py-10">
          {service.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center"
            >
              {/* Image Section */}
              <div className="w-[300px] lg:w-[780px] md:w-[850px] sm:w-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[300px] lg:h-[220px] lg:w-[780px] md:h-[180px] md:w-[850px] h-auto object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-[1200px] w-[300px] h-[200px] flex flex-col justify-center sm:text-left">
                <h2 className="flex items-center gap-4">
                  <div className="bg-secondary flex items-center justify-center rounded-full lg:w-[50px] lg:h-[50px] md:w-[50px] md:h-[45px] w-[55px] h-[50px]">
                    {index === 0 && (
                      <FaTruck className="text-primary md:text-xl text-[30px]" />
                    )}
                    {index === 1 && (
                      <RiCupFill className="text-primary md:text-xl text-[30px]" />
                    )}
                    {index === 2 && (
                      <FaAward className="text-primary md:text-xl text-[30px]" />
                    )}
                    {index === 3 && (
                      <FaTable className="text-primary md:text-xl text-[30px]" />
                    )}
                  </div>
                  <span className="text-[20px] lg:text-2xl sm:text-2xl md:text-2xl font-semibold">
                    {item.title}
                  </span>
                </h2>
                <p className="text-gray-600 mt-3 font-montserrat tracking-wide text-[14px] lg:text-[16px] md:text-[16px] sm:text-[15px] sm:px-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Content2;
