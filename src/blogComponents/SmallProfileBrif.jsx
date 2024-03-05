import React from "react";
import { Link } from "react-router-dom";
import banner from "../img/banner.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SmallProfileBrif = () => {
  return (
    <div className="shadow-2xl mt-8 p-8 rounded-md w-full border-t-4 border-[#418160]">
      <div className="md:flex text-center sm:text-center md:text-left  gap-x-6">
        <div className="w-[100px] h-[100px] sm:h-[100px] md:h-[84px] overflow-hidden rounded-full text-center sm:text-center md:text-center m-auto">
          <img
            src={banner}
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
            alt=""
          />
        </div>
        <div className="w-full flex flex-col mt-4 sm:mt-4 md:mt-0">
          <h1 className="text-xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
            Rahul Kumar
          </h1>
          <p className="mt-2  text-pretty">
            Include popular icons in your React projects easily with
            react-icons, which utilizes ES6 imports that allows you to include
            only the icons that your project is using.
          </p>
          <div className="flex items-center gap-x-5 mt-4 justify-center sm:justify-center md:justify-start">
            <Link to="">
              <FaFacebook className="text-xl hover:text-[#418160]" />
            </Link>
            <Link to="">
              <FaInstagram className="text-xl hover:text-[#418160]" />
            </Link>
            <Link to="">
              <FaTwitter className="text-xl hover:text-[#418160]" />
            </Link>
            <Link to="">
              <FaLinkedin className="text-xl hover:text-[#418160]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProfileBrif;
