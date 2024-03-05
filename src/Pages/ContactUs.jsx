import React from "react";
import Breadcrumb from "../blogComponents/Breadcrumb ";
import { FaPhone } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb />
      <section className="mt-10 w-full">
        <div className="px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]">
          <div className="lg:flex gap-x-10">
            <div className="w-full sm:w-full md:w-full lg:w-6/12 xl:w-6/12 ">
              <div className="shadow-xl border-t-4 border-[#418160] p-10 rounded-md">
                <div className="">
                  <h1 className="text-2xl mb-5">Send Message</h1>
                </div>
                <div>
                  <div>
                    <label className="mb-[10px]">Name</label>
                    <input
                      type="text"
                      className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="md:flex gap-x-4 w-full">
                  <div className="w-full sm:full md:w-1/2">
                    <label className="mb-[10px]">Email Id</label>
                    <input
                      type="text"
                      className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
                      placeholder="Email Id"
                    />
                  </div>
                  <div className="w-full sm:full md:w-1/2">
                    <label className="mb-[10px]">Phone No.</label>
                    <input
                      type="text"
                      className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
                      placeholder="Phone No."
                    />
                  </div>
                </div>
                <div>
                  <div className="">
                    <label className="mb-[10px]">Subject</label>
                    <input
                      type="text"
                      className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="mb-[10px]">Comment</label>
                    <textarea
                      className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
                      placeholder="Your Comments here..."
                    ></textarea>
                  </div>
                </div>
                <div className="">
                  <button className="border-2 hover:border-none border-[#418160] font-semibold text-[#418160] hover:text-[#fff] hover:bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] p-2 rounded-[4px] h-[46px] w-full sm:w-full md:w-[100px] flex justify-center items-center text-center align-middle mt-2 md:mt-0">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full md:w-full lg:w-6/12 xl:w-6/12 my-10 sm:my-10">
              <div className="flex flex-col justify-center items-center gap-y-10 m-auto">
                <div className="shadow-xl border-t-4 border-[#418160] px-10 py-6 rounded-md w-[330px]">
                  <div className="flex justify-start items-center gap-x-4">
                    <button className="p-4 shadow-xl rounded-md border-t-4 border-[#418160]">
                      <FaPhone className="text-2xl font-bold " />
                    </button>
                    <div>
                      <h2 className="text-2xl font-bold ">Phone</h2>
                      <p className="text-xl">+91 7368035305</p>
                    </div>
                  </div>
                </div>
                <div className="shadow-xl border-t-4 border-[#418160] px-10 py-6 rounded-md w-[330px]">
                  <div className="flex justify-start items-center gap-x-4">
                    <button className="p-4 shadow-xl rounded-md border-t-4 border-[#418160]">
                      <IoIosMailOpen className="text-2xl font-bold " />
                    </button>
                    <div>
                      <h2 className="text-2xl font-bold ">Email</h2>
                      <p className="text-xl">rk8717989@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="shadow-xl border-t-4 border-[#418160] px-10 py-6 rounded-md w-[330px]">
                  <div className="flex justify-start items-center gap-x-4">
                    <button className="p-4 shadow-xl rounded-md border-t-4 border-[#418160]">
                      <FaLocationDot className="text-2xl font-bold " />
                    </button>
                    <div>
                      <h2 className="text-2xl font-bold ">Location</h2>
                      <p className="text-xl">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
