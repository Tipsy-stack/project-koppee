import overlayBottomImg from "../images/overlay-bottom.png";

const OtherBanner = ({ title }) => {
  return (
    <section
      className="h-[70vh] w-full relative flex justify-center items-center bg-[#fffbf2]"
      id="banner"
    >
      <div>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold text-white uppercase">
          {title}
        </h1>
      </div>
      <div className="absolute bottom-0 z-10 flex w-full">
        <img
          src={overlayBottomImg}
          alt="overlayimage"
          className="w-1/3 object-contain"
        />
        <img
          src={overlayBottomImg}
          alt="overlayimage"
          className="w-1/3 object-contain"
        />
        <img
          src={overlayBottomImg}
          alt="overlayimage"
          className="w-1/3 object-contain"
        />
      </div>
    </section>
  );
};
export default OtherBanner;
