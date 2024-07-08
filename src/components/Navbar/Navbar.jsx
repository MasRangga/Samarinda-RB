import React, { useState } from "react";
import Icon from "../../images/level.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openKatalog, setOpenKatalog] = useState(false);

  const toggleDropdown = () => {
    setOpenKatalog(!openKatalog);
  };

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed px-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400">
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:h-[35px]"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              LevelUp Solutions
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
              {/* Katalog Dropdown */}
              <li className="p-2 mr-4 text-white hover:text-blue-400 cursor-pointer relative">
                <button onClick={toggleDropdown} className="flex items-center">
                  Katalog
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform ${
                      openKatalog ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openKatalog && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Produk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        UMKM
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-blue-500"
            >
              Get Started
            </button>
            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/70" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="sm:hidden">
            <ul className="pt-4">
              <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/about">About</Link>
              </li>
              <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/services">Services</Link>
              </li>
              {/* Katalog Dropdown */}
              <li className="text-white hover:text-blue-400 font-semibold pl-8 cursor-pointer pb-4 relative">
                <button onClick={toggleDropdown} className="flex items-center">
                  Katalog
                  <svg
                    className={`ml-2 h-5 w-5 transition-transform ${
                      openKatalog ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openKatalog && (
                  <ul className="mt-2 bg-gray-800 rounded-md py-1">
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                      >
                        Produk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="block px-4 py-2 text-white hover:bg-gray-700"
                      >
                        UMKM
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Mobile Get Started button */}
              <li className="text-right pt-4 pr-4">
                <button
                  type="button"
                  className="bg-blue-600 px-4 py-2 mb-5 text-white rounded-xl hover:bg-blue-500"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
