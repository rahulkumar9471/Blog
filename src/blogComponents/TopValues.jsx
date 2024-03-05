import React from "react";
import { FcMindMap } from "react-icons/fc";
import { SiBrandfolder } from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

const TopValues = () => {
  return (
    <section className="mt-14">
      <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Top Values for You</h1>
          <p className="text-sm mt-2">
            Try Variety of benefits when using our services.
          </p>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around items-center gap-x-10">
            <div className="flex flex-col justify-center text-center gap-y-1 mt-5 sm:mt-5 md:mt-2 lg:mt-0">
              <div className="flex justify-center items-center">
                <button className="shadow-xl flex items-center justify-center p-2 w-20 h-20 rounded-full">
                  <FcMindMap className="text-4xl" />
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-semibold">
                  Expression and Creativity
                </h1>
              </div>
              <div className="mt-4">
                <p>
                  Blogging provides a platform for individuals to express
                  themselves, share their ideas, and showcase their creativity.
                  Whether it's through writing, photography, or other forms of
                  media, blogging allows people to explore their passions and
                  interests.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center text-center gap-y-1 mt-5 sm:mt-5 md:mt-2 lg:mt-0">
              <div className="flex justify-center items-center">
                <button className="shadow-xl flex items-center justify-center p-2 w-20 h-20 rounded-full">
                  <SiBrandfolder className="text-4xl" />
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-semibold">
                  Building a Personal Brand
                </h1>
              </div>
              <div className="mt-4">
                <p>
                  Blogging can help individuals establish and build their
                  personal brand. By consistently creating high-quality content
                  in a specific niche, bloggers can position themselves as
                  experts in their field and attract a loyal following.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center text-center gap-y-1 mt-5 sm:mt-5 md:mt-2 lg:mt-0">
              <div className="flex justify-center items-center">
                <button className="shadow-xl flex items-center justify-center p-2 w-20 h-20 rounded-full">
                  <FaNetworkWired className="text-4xl" />
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-semibold">
                  Networking and Collaboration
                </h1>
              </div>
              <div className="mt-4">
                <p>
                  Blogging enables individuals to connect with like-minded
                  people, industry professionals, and potential collaborators.
                  It provides opportunities for networking, building
                  relationships, and collaborating on projects or partnerships.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center text-center gap-y-1 mt-5 sm:mt-5 md:mt-2 lg:mt-0">
              <div className="flex justify-center items-center">
                <button className="shadow-xl flex items-center justify-center p-2 w-20 h-20 rounded-full">
                  <FaShareAlt className="text-4xl" />
                </button>
              </div>
              <div className="mt-4">
                <h1 className="text-xl font-semibold">
                  Sharing Knowledge and Expertise
                </h1>
              </div>
              <div className="mt-4">
                <p>
                  Blogging allows individuals to share their knowledge,
                  expertise, and experiences with a global audience. Whether
                  it's tutorials, how-to guides, or informative articles,
                  bloggers can provide valuable information and insights that
                  benefit others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopValues;
