import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  return (
    <div>
      <div className="shadow-xl mt-4 p-2 rounded-md h-[200px] border-t-4 border-[#418160]">
        <div className="">
          <h1 className="text-center text-xl font-bold">Tags</h1>
        </div>
        <div className="flex flex-wrap justify-around items-center mt-2">
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Ui/Ux Design
          </Link>
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Web Development
          </Link>
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Typography
          </Link>
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Freelance Business
          </Link>
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Lifestyle
          </Link>
          <Link
            to="#"
            className="text-[#203656] hover:text-[#418160] font-bold"
          >
            #Startups
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tags;
