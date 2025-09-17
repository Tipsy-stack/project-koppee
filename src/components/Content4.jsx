import { menu } from "../data";

function Content4() {
  return (
    <section className="mt-8">
      <div className="flex flex-col justify-center items-center py-8 gap-3">
        <div className="w-0.5 h-20 lg:h-30 border border-secondary border-center"></div>

        <div>
          <p className="text-[20px] md:text-2xl md:tracking-widest sm:text-lg tracking-widest text-center text-secondary">
            MENU & PRICING
          </p>
          <h1 className="text-3xl md:text-5xl sm:text-3xl lg:text-6xl font-bold text-center text-primary">
            Competitive Pricing
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row lg:items-center justify-center gap-10 px-10 py-12 md:px-12 lg:px-18">
          <div className="">
            <h2 className="lg:mb-15 md:text-4xl mb-8 text-2xl font-bold lg:text-5xl text-primary">
              Hot Coffee
            </h2>

            <div className="flex flex-col gap-8">
              {menu.map((item) => (
                <div key={item.id} className="flex gap-10">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="image"
                      className="rounded-full w-[300px] h-[90px] xs:w-[150px] xs:h-[90px] sm:w-[180px] sm:h-[110px] md:w-[200px] md:h-[100px] lg:w-[200px] lg:h-[120px] object-cover"
                    />

                    <p className="absolute flex justify-center items-center top-0 -mr-[6px] xs:-mr-[8px] sm:-mr-[10px] right-0 w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] z-20 bg-secondary text-gray-800 font-semibold text-lg xs:text-sm sm:text-base md:text-lg rounded-full">
                      ${item.price}
                    </p>
                  </div>

                  <div>
                    <h2 className="lg:text-2xl md:text-2xl text-xl text-primary font-semibold">
                      {item.title}
                    </h2>
                    <p className="font-montserrat text-[14px] lg:text-lg md:text-[15px] text-gray-600 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h2 className="lg:mb-15 md:text-4xl mb-8 text-2xl font-bold lg:text-5xl text-primary">
              Cold Coffee
            </h2>

            <div className="flex flex-col gap-8">
              {menu.map((item) => (
                <div key={item.id} className="flex gap-10">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt="image"
                      className="rounded-full w-[300px] h-[90px] xs:w-[150px] xs:h-[90px] sm:w-[180px] sm:h-[110px] md:w-[200px] md:h-[100px] lg:w-[200px] lg:h-[120px] object-cover"
                    />

                    <p className="absolute flex justify-center items-center top-0 -mr-[6px] xs:-mr-[8px] sm:-mr-[10px] right-0 w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] z-20 bg-secondary text-gray-800 font-semibold text-lg xs:text-sm sm:text-base md:text-lg rounded-full">
                      ${item.price}
                    </p>
                  </div>

                  <div>
                    <h2 className="lg:text-2xl md:text-2xl text-xl text-primary font-semibold">
                      {item.title}
                    </h2>
                    <p className="font-montserrat text-[14px] lg:text-lg md:text-[15px] text-gray-600 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Content4;
