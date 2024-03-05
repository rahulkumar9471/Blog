import React from "react";
import banner from "../img/banner.jpg";

const BlogComment = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Comments ( 3 )</h2>
      </div>
      <div className="shadow-2xl mt-8 mb-10 p-4 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-md w-full border-t-4 border-[#418160]">
        <div className="flex items-start gap-x-4 mt-8">
          <div className="w-[120px] sm:w-[100px] md:w-[100px] h-[84px] overflow-hidden rounded-full text-center sm:text-center md:text-center mx-auto">
            <img
              src={banner}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-xl font-bold capitalize bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
              Rahul Kumar
            </h1>
            <p>
              16 Feb 2024 <span className="ml-2">10:49 Am</span>
            </p>
            <p className="mt-2 text-pretty">
              Include popular icons in your React projects easily with
              react-icons, which utilizes ES6 imports that allows you to include
              only the icons that your project is using.
            </p>
            <div className="mt-2">
              <button className="border-2 border-[#418160] font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] py-1 px-4 rounded-full">
                Reply
              </button>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-8">
          <div className="flex items-start gap-x-4">
            <div className="w-[120px] sm:w-[100px] md:w-[100px] h-[84px] overflow-hidden rounded-full text-center sm:text-center md:text-center mx-auto">
              <img
                src={banner}
                className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
                alt=""
              />
            </div>
            <div className="w-full flex flex-col">
              <h1 className="text-xl font-bold capitalize bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
                Rahul Kumar
              </h1>
              <p>
                16 Feb 2024 <span className="ml-2">10:49 Am</span>
              </p>
              <p className="mt-2 text-pretty">
                Include popular icons in your React projects easily with
                react-icons, which utilizes ES6 imports that allows you to
                include only the icons that your project is using.
              </p>
              <div className="mt-2">
                <button className="border-2 border-[#418160] font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] py-1 px-4 rounded-full">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-x-4 mt-8">
          <div className="w-[120px] sm:w-[100px] md:w-[100px] h-[84px] overflow-hidden rounded-full text-center sm:text-center md:text-center mx-auto">
            <img
              src={banner}
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 rounded-full"
              alt=""
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-xl font-bold capitalize bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text">
              Rahul Kumar
            </h1>
            <p>
              16 Feb 2024 <span className="ml-2">10:49 Am</span>
            </p>
            <p className="mt-2 text-pretty">
              Include popular icons in your React projects easily with
              react-icons, which utilizes ES6 imports that allows you to include
              only the icons that your project is using.
            </p>
            <div className="mt-2">
              <button className="border-2 border-[#418160] font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] py-1 px-4 rounded-full">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
