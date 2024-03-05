import React from "react";
import banner from "../img/banner.jpg";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const category = location.pathname.split("/").at(-1).replace("-", " ");

  return (
    <section className="mt-5 mb-5">
      <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
        <div
          className="w-full h-[96px] bg-no-repeat bg-center bg-cover rounded-[4px] relative"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="bg-[#203656] h-[96px] rounded-[4px] opacity-60"></div>
          <div className="absolute flex items-center w-full top-0 p-7">
            <div className="w-full sm:w-full md:w-full text-left sm:text-center md:text-left lg:text-left">
              <div className="flex flex-wrap justify-between items-center">
                <h1 className="text-[#fff] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
                  {category}
                </h1>
                <div className="flex justify-between items-center text-[#fff]">
                  <h1 className="text-xl">
                    <Link to="/">Home</Link>
                  </h1>
                  <span className="ml-2 mr-2 font-bold text-xl">/</span>
                  <h6 className="text-l">
                    <Link to="/design">{category}</Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
