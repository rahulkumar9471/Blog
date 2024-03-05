import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowDownLong, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const toggleSidebar = props.toggleSidebar;
  const toggleSearchbar = props.toggleSearchbar;

  const [isHeaderFixed, setIsHeaderFixed] = useState(false); 
  const [isMoreLayouts, setMoreLayouts] = useState(false);
  const dropdownRef = useRef(null);

  const toggleisMoreLayouts = () => {
    setMoreLayouts(!isMoreLayouts); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHeaderFixed(
        scrollPosition > document.documentElement.clientHeight * 0.2
      );
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreLayouts(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  });

  return (
    <header
      className={`bg-white w-full z-10 shadow-md ${
        isHeaderFixed ? "fixed top-0" : ""
      }`}
    >
      <nav className="flex w-full justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] py-4 md:py-6 items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
              EducationToday
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-x-10 font-semibold items-center">
            <li className="hidden sm:hidden md:hidden lg:block">
              <button
                className="text-[#203656] hover:text-[#418160] flex items-center"
                onClick={toggleSearchbar}
              >
                <span className="mr-1">Search</span> <CiSearch className="" />
              </button>
            </li>
            <li className="hidden sm:hidden md:hidden lg:block">
              <Link
                to="Sign-in"
                className="text-[#203656] hover:text-[#418160]"
              >
                Sign in
              </Link>
            </li>
            <li className="hidden sm:hidden md:hidden lg:block">
              <Link
                to="Sign-up"
                className="border-2 border-[#418160] p-3 font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]"
              >
                Create an account
              </Link>
            </li>
            <li className="block sm:block md:block lg:block xl:hidden">
              <button
                className="border-2 border-[#418160] p-3 text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hidden sm:hidden md:hidden lg:hidden xl:block">
        <ul className="flex w-full justify-around px-[8rem] pb-6 pt-2 font-semibold">
          <li>
            <Link
              to="/"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Ui-Ux-Design"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Ui/Ux Design
            </Link>
          </li>
          <li>
            <Link
              to="/Web-Development"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Web Development
            </Link>
          </li>
          <li>
            <Link
              to="/Typography"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Typography
            </Link>
          </li>
          <li>
            <Link
              to="/Freelance-Business"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Freelance Business
            </Link>
          </li>
          <li className="flex justify-between items-center">
          <Link
              to="/Lifestyle"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Lifestyle
            </Link>
          </li>
          <li>
            <Link
              to="/Startups"
              className="text-[#203656] hover:text-[#418160] uppercase"
            >
              Startups
            </Link>
          </li>
          <li className="flex justify-between items-center">
            <button
              className="text-[#203656] hover:text-[#418160] uppercase mr-2"
              onClick={toggleisMoreLayouts}
            >
              More Layouts
            </button>
            <FaArrowDownLong />
            {isMoreLayouts && (
              <div ref={dropdownRef} className="absolute right-36 top-[7rem] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <ul>
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <Link to="/Contact-us">Contact us</Link>
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Option 2
                  </li>
                  <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    Option 3
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
