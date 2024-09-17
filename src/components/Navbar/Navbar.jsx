import React, { useState, useEffect } from "react";
import Icon from "../../images/level.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openKatalog, setOpenKatalog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleDropdown = () => {
    setOpenKatalog(!openKatalog);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-20 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg backdrop-blur-sm"
            : "bg-white shadow-lg"
        }`}
        style={{ height: scrolled ? "80px" : "100px" }} // Dynamic height
      >
        {/* Desktop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:h-[35px]"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-gray-900 font-semibold text-xl">
              LevelUp Solutions
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden">
              <li className="p-2 mr-4 text-gray-900 hover:text-primary cursor-pointer">
                <Link to="/">Beranda</Link>
              </li>
              <li className="p-2 mr-4 text-gray-900 hover:text-primary cursor-pointer">
                <Link to="/about">Tentang Kami</Link>
              </li>
              <li className="p-2 mr-4 text-gray-900 hover:text-primary cursor-pointer">
                <Link to="/services">Pelayanan</Link>
              </li>
              {/* Katalog Dropdown */}
              <li className="p-2 mr-4 text-gray-900 hover:text-primary cursor-pointer relative">
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
                        to="/produk"
                        className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        <FiShoppingBag 
                        className="w-5 mr-2 h-5"/>
                        Produk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/UMKM"
                        className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        <BsShop 
                        className="w-5 mr-2 h-5"/>
                        UMKM
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a
              href="http://bit.ly/JOINRUMAHBUMNSAMARINDA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 px-6 py-3 mb-5 text-white rounded-xl hover:bg-red-800 transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              <MdOutlineFeaturedPlayList />
              <span>Daftar Sekarang</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="sm:hidden block ml-4"
            >
              <GiHamburgerMenu size={30} className="mt-2 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="sm:hidden">
            <ul className="pt-4">
              <li className="text-gray-900 hover:text-primary font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/">Beranda</Link>
              </li>
              <li className="text-gray-900 hover:text-primary font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/about">Tentang Kami</Link>
              </li>
              <li className="text-gray-900 hover:text-primary font-semibold pl-8 cursor-pointer pb-4">
                <Link to="/services">Pelayanan</Link>
              </li>
              {/* Katalog Dropdown */}
              <li className="text-gray-900 hover:text-primary font-semibold pl-8 cursor-pointer pb-4 relative">
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
                        to="/produk"
                        className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                      >
                        <FiShoppingBag 
                        className="w-5 mr-2 h-5"/>
                        Produk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/UMKM"
                        className="flex items-center px-4 py-2 text-white hover:bg-gray-700"
                      >
                        <BsShop 
                        className="w-5 mr-2 h-5"/>
                        UMKM
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {/* Mobile Get Started button */}
              <li className="text-right pt-4 pr-4">
                <a
                  href="http://bit.ly/JOINRUMAHBUMNSAMARINDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 px-6 py-3 mb-5 text-white rounded-xl hover:bg-red-800 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <MdOutlineFeaturedPlayList />
                  <span>Daftar Sekarang</span>
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
