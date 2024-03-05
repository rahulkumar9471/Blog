import React from "react";

const LeaveComment = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Leave Comment</h2>
      </div>
      <div className="shadow-2xl mt-8 mb-10 p-4 sm:p-4 md:p-6 lg:p-6 xl:p-8 rounded-md w-full border-t-4 border-[#418160]">
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
          <div>
            <label className="mb-[10px]">Comment</label>
            <textarea
              className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000]"
              placeholder="Your Comments here..."
            ></textarea>
          </div>
        </div>
        <div>
          <button className="border-2 hover:border-none border-[#418160] font-semibold text-[#418160] hover:text-[#fff] hover:bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] p-2 rounded-[4px] h-[46px] w-full sm:w-full md:w-[100px] flex justify-center items-center text-center align-middle mt-2 md:mt-0">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
