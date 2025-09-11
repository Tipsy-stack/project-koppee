import { Link, NavLink } from "react-router";
import { RiMenu4Fill } from "react-icons/ri";
import { pageLinks } from "../dat";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full md:px-20 px-4 bg-primary lg:bg-transparent z-20">
      <div className="flex justify-between items-center h-[100px]">
        <Link to="/">
          <h1 className="text-white md:text-6xl font-bold sm:text-5xl text-4xl">
            KOPPEE
          </h1>
        </Link>
        <ul
          className={`flex lg:flex-row flex-col fixed lg:static top-0 z-50 left-0 w-1/2 bg-primary h-[100vh] lg:h-fit transform transition-all duration-300 lg:bg-transparent lg:translate-x-0 ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {pageLinks.map(({ id, text, path }) => (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                `capitalize text-lg font-semibold font-montserrat p-4 hover:text-secondary transition-all duration-300 ${
                  isActive ? "text-secondary" : "text-white"
                }`
              }
              onClick={() => setShowNav(false)}
            >
              {text}
            </NavLink>
          ))}
        </ul>
        <button
          className="lg:hidden h-[60px] w-[60px] outline-none border-1 border-gray-100 text-gray-400 hover:text-gray-600 flex justify-center items-center text-3xl font-semibold cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          <RiMenu4Fill />
        </button>
      </div>
    </header>
  );
};
export default Header;
