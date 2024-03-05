import React from "react";
import SLandscapeCard from "../blogComponents/SLandscapeCard";
import TopicsLists from "../blogComponents/TopicsLists";
import Info from "../blogComponents/Info";
import Carousel from "../blogComponents/Carousel";
import image1 from "../img/banner.jpg";
import image2 from "../img/banner.jpg";
import image3 from "../img/banner.jpg";
import SponsoredAd from "../blogComponents/SponsoredAd";
import Tags from "../blogComponents/Tags";

const images = [image1, image2, image3];

const BlogSidebar = () => {
  return (
    <>
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
        <div className="mt-10">
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
            Explore Topics
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-2/12 border-[1.5px] border-[#000] mt-4"></div>
            <div className="w-10/12 border-[1px] border-gray mt-4"></div>
          </div>
        </div>
        <TopicsLists />
        <Info />
        <div className="mt-4">
          <SponsoredAd />
          <Carousel images={images} />
          <SponsoredAd />
          <Tags />
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
