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
          <p className="text-base md:text-2xl sm:text-lg tracking-widest text-center text-secondary">
            OUR SERVICES
          </p>
          <h1 className="text-2xl md:text-4xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Fresh & Organic Beans
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 px-25 py-10">
          {service.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-5 items-center sm:items-start justify-center"
            >
              {/* Image Section */}
              <div className="w-full sm:w-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-center sm:text-left">
                <h2 className="flex items-center gap-4">
                  <div className="bg-secondary flex items-center justify-center rounded-full w-[45px] h-[45px]">
                    {index === 0 && (
                      <FaTruck className="text-primary text-[20px]" />
                    )}
                    {index === 1 && (
                      <RiCupFill className="text-primary text-[20px]" />
                    )}
                    {index === 2 && (
                      <FaAward className="text-primary text-[20px]" />
                    )}
                    {index === 3 && (
                      <FaTable className="text-primary text-[20px]" />
                    )}
                  </div>
                  <span className="text-xl sm:text-2xl md:text-xl font-semibold">
                    {item.title}
                  </span>
                </h2>
                <p className="text-gray-600 mt-3 font-montserrat tracking-wide text-[14px] md:text-[13px] sm:text-[15px] sm:px-0">
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
