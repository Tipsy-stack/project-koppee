import { Link, NavLink } from "react-router";
import { RiMenu4Fill } from "react-icons/ri";
import { pageLinks } from "../dat";
import { useState } from "react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  return (
    <header className="absolute top-0 left-0 w-full md:px-20 px-4 bg-primary lg:bg-transparent z-20">
      <div className="flex justify-between items-center h-[100px]">
        <Link to="/">
          <h1 className="text-white md:text-6xl font-bold sm:text-5xl text-4xl">
            KOPPEE
          </h1>
        </Link>
        <ul
          className={`flex md:flex-row flex-col fixed md:static top-0 z-50 left-0 w-1/2 md:w-auto bg-primary h-[100vh] md:h-fit transform transition-all duration-300 md:bg-transparent md:translate-x-0 ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {pageLinks.map(({ id, text, path, children }) => {
            // Handle Pages dropdown
            if (children) {
              return (
                <div key={id} className="relative">
                  <button
                    onClick={() => setShowPagesDropdown(!showPagesDropdown)}
                    className="capitalize text-lg font-semibold font-montserrat p-4 hover:text-secondary transition-all duration-300 text-white flex items-center gap-1"
                  >
                    {text}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        showPagesDropdown ? "rotate-180" : ""
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      />
                    </svg>
                  </button>

                  {showPagesDropdown && (
                    <div className="md:absolute md:top-full md:left-0 md:w-48 lg:bg-white md:bg-white md:shadow-lg md:rounded-md static w-full">
                      {children.map(
                        ({ id: childId, text: childText, path: childPath }) => (
                          <NavLink
                            key={childId}
                            to={childPath}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-sm font-medium md:text-black md:hover:bg-secondary text-white hover:text-white ${
                                isActive
                                  ? "md:bg-gray-100 md:text-secondary z-20 text-secondary"
                                  : ""
                              }`
                            }
                            onClick={() => {
                              setShowNav(false);
                              setShowPagesDropdown(false);
                            }}
                          >
                            {childText}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              );
            }

            // Handle regular links
            return (
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
            );
          })}
        </ul>
        <button
          className="md:hidden h-[60px] w-[60px] outline-none border-1 border-gray-100 text-gray-400 hover:text-gray-600 flex justify-center items-center text-3xl font-semibold cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        >
          <RiMenu4Fill />
        </button>
      </div>
    </header>
  );
};
export default Header;
