import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const Searchbar = (props) => {
  const toggleSearchbar = props.toggleSearchbar;
  const isSearchOpen = props.isSearchOpen;

  return (
    <div
      className={`fixed ${
        isSearchOpen ? "" : "hidden"
      } bg-[#fff] max-w-full h-[100vh] top-0 left-0 bottom-0 right-0 shadow-md z-50 transition duration-500 ease-in-out`}
    >
      <button
        className="absolute px-2 right-0 mr-8 mt-4 py-1 text-[#203656]"
        onClick={toggleSearchbar}
      >
        <MdClose className="text-2xl font-bold" />
      </button>
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-8 text-[#203656]">Press ESC to Close</h1>
        <div className="md:flex gap-x-2 w-10/12 justify-center mx-auto">
          <input
            type="text"
            className="w-full sm:w-full md:w-[500px] rounded-[50px] border-2 border-[#34433b] p-[10px] px-[10px] mb-1 text-[#000]"
            placeholder="Search..."
          />
          <button className="bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] p-2 rounded-[50px] h-[46px] w-full sm:w-full md:w-[100px] flex justify-center items-center text-center align-middle text-white font-bold mt-2 md:mt-0">
            <CiSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
