import React from "react";
import banner from "../img/banner.jpg";
import { Link } from "react-router-dom";

const SLandscapeCard = () => {
  return (
    <>
      <div className="flex justify-start items-center gap-x-6">
        <Link to="/Blog">
          <div className="overflow-hidden rounded-[4px] w-[150px] h-[110px]">
            <img
              src={banner}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt=""
            />
          </div>
        </Link>
        <div className="flex flex-col ">
          <div>
            <Link to="/Blog">
              <h1 className="text-xl font-bold hover:text-[#418160]">
                Google just showed us the Future of the game.
              </h1>
            </Link>
          </div>
          <div className="mt-3">
            <div>
              <h1>K.p.s Memorial High School</h1>
              <p>20 Mar 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SLandscapeCard;
