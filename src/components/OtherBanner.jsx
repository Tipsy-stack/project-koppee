import overlayBottomImg from "../images/overlay-bottom.png";
import { Link, useLocation } from "react-router-dom";

const OtherBanner = ({ title }) => {
  const location = useLocation();

  // get the last part of the route (after "/")
  const page =
    location.pathname === "/" ? "Home" : location.pathname.replace("/", "");
  return (
    <section
      className="h-[70vh] w-full relative flex justify-center items-center bg-[#fffbf2]"
      id="banner"
    >
      <div className="text-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold text-white uppercase">
          {title}
        </h1>
        <div className="flex flex-row justify-center items-center mt-5 text-white gap-3">
          <p>
            <Link to="/" className="hover:underline">Home</Link>
          </p>
          <p>/</p>
          <p className="capitalize">{page}</p>
        </div>
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
