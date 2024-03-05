import React from "react";
import SLandscapeCard from "./SLandscapeCard";

const LatestPosts = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 mt-10 sm:mt-10 md:mt-10 lg:mt-0">
      <div>
        <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
          Popular Posts
        </h1>
        <div className="flex justify-center items-center">
          <div className="w-2/12 border-[1.5px] border-[#000] mt-4"></div>
          <div className="w-10/12 border-[1px] border-gray mt-4"></div>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 mt-10">
        <SLandscapeCard />
        <SLandscapeCard />
        <SLandscapeCard />
        <SLandscapeCard />
        <SLandscapeCard />
        <SLandscapeCard />
      </div>
    </div>
  );
};

export default LatestPosts;
