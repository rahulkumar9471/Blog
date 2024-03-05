import React from "react";
import { Link } from "react-router-dom";
import banner from "../img/banner.jpg";
import BlogSidebar from "../blogTemplate/BlogSidebar";
import {
  FaFacebook,
  FaInstagram,
  FaRegBookmark,
  FaRegClock,
  FaRegFolder,
  FaTwitter,
} from "react-icons/fa6";
import SmallProfileBrif from "../blogComponents/SmallProfileBrif";
import { FaLinkedin } from "react-icons/fa";
import BlogComment from "../blogComponents/BlogComment";
import LeaveComment from "../blogComponents/LeaveComment";

const Blog = () => {
  return (
    <>
      <section className="mt-10">
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
          <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12">
            <div className="flex flex-wrap gap-x-1 text-l font-semibold">
              <h1>
                <Link to="">Home</Link>
              </h1>
              <p>/</p>
              <h1>
                <Link to="">Web Development</Link>
              </h1>
              <p>/</p>
              <h1>
                <Link to="">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="lg:flex gap-x-10 px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
          <div className="w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 ">
            <div className="">
              <div className="lg:flex gap-x-10">
                <div className="container">
                  <div className="grid grid-cols-1 gap-x-10">
                    <div className="W-full mt-10">
                      <div className="">
                        <div className="relative h-[300px] overflow-hidden rounded-[4px]">
                          <img
                            src={banner}
                            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                            alt=""
                          />
                          <span className="absolute right-3 top-6 mr-2 text-xl cursor-pointer z-10">
                            <FaRegBookmark fontSize={24} fill="#fff" />
                          </span>
                        </div>
                        <div className="mt-5">
                          <div className="flex justify-between items-center">
                            <div>
                              <h1 className="text-2xl font-bold">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </h1>
                              <div className="flex flex-wrap items-center mt-1 gap-x-4">
                                <h1>K.p.s Memorial High School</h1>
                                <div className="flex gap-x-1 items-center">
                                  <FaRegFolder />
                                  <p>Web Development</p>
                                </div>
                                <div className="flex gap-x-1 items-center">
                                  <FaRegClock />
                                  <p>20 Mar 2024</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="mt-3">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the
                            1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type
                            specimen book. It has survived not only five
                            centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum. Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry.
                          </p>
                        </div>
                        <div className="w-full border-[1px] border-gray mt-4"></div>
                        <div className="mt-5 flex flex-wrap justify-center sm:justify-between md:justify-between items-center">
                          <div className="flex flex-wrap items-center gap-x-2">
                            <Link
                              to=""
                              className="font-semibold text-[#203656] hover:text-[#418160]"
                            >
                              #Web
                            </Link>
                            <Link
                              to=""
                              className="font-semibold text-[#203656] hover:text-[#418160]"
                            >
                              #Development
                            </Link>
                            <Link
                              to=""
                              className="font-semibold text-[#203656] hover:text-[#418160]"
                            >
                              #Web Development
                            </Link>
                          </div>
                          <div className="flex justify-around items-center gap-x-2 mt-4 sm:mt-4 md:mt-0">
                            <Link to="">
                              <button className="shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full">
                                <FaFacebook className="text-xl hover:text-[#418160]" />
                              </button>
                            </Link>
                            <Link to="">
                              <button className="shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full">
                                <FaInstagram className="text-xl hover:text-[#418160]" />
                              </button>
                            </Link>
                            <Link to="">
                              <button className="shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full">
                                <FaTwitter className="text-xl hover:text-[#418160]" />
                              </button>
                            </Link>
                            <Link to="">
                              <button className="shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full">
                                <FaLinkedin className="text-xl hover:text-[#418160]" />
                              </button>
                            </Link>
                          </div>
                        </div>
                        <div className="mt-10">
                          <SmallProfileBrif />
                        </div>
                        <div className="mt-10">
                          <BlogComment />
                        </div>
                        <div className="mt-10">
                          <LeaveComment />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  );
};

export default Blog;
