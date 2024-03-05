import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import SocialPlugin from "./SocialPlugin";

const Sidebar = (props) => {
  const isSidebarOpen = props.isSidebarOpen;
  const toggleSidebar = props.toggleSidebar;

  return (
    <div className="">
      <div
        className={`fixed ${
          isSidebarOpen ? "" : "hidden"
        } bg-[#000] max-w-full h-[100vh] top-0 right-0 bottom-0 left-0 shadow-md z-50 transition duration-300 ease-in-out opacity-70 `}
      ></div>
      <div
        className={`bg-[#fff] ${
          isSidebarOpen ? "max-w-[400px]" : "max-w-[0px]"
        } fixed top-0 right-0 h-[100vh] shadow-md z-50 transition-all duration-300 ease-out`}
      >
        <div className="text-right">
          <button className="px-2 mr-8 mt-4 py-1" onClick={toggleSidebar}>
            <MdClose className="text-2xl" />
          </button>
        </div>
        <div className="p-10">
          <div className="mt-1">
            <Link to="/">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text3xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
                EducationToday
              </h1>
            </Link>
          </div>
          <div className="mt-2 overflow-hidden">
            <ul className="flex-col">
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="/"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Home
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Ui-Ux-Design"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Ui/Ux Design
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Web-Development"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Web Development
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Typography"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Typography
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Freelance-Business"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Freelance Business
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Lifestyle"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Lifestyle
                </Link>
              </li>
              <li className="border-b-2 py-3 border-gray">
                <Link
                  to="Startups"
                  className="text-[#203656] hover:text-[#418160] uppercase"
                >
                  Startups
                </Link>
              </li>
              <li className="flex justify-between items-center border-b-2 py-3 border-gray">
                <Link
                  to="/"
                  className="text-[#203656] hover:text-[#418160] uppercase mr-2"
                >
                  More Layouts
                </Link>
                <FaArrowDownLong />
              </li>
            </ul>
            <div className="">
              <SocialPlugin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
