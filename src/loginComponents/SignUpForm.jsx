import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SignUpForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#418160] mb-5">Sign Up</h1>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label className="mb-[10px]">Name</label>
              <input
                type="text"
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-2 text-[#000] mt-2"
                placeholder="Name"
              />
            </div>
            <div>
              <label className="mb-[10px]">Email</label>
              <input
                type="email"
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-2 text-[#000] mt-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="mb-[10px]">Mobile No.</label>
              <input
                type="number"
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-2 text-[#000] mt-2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Mobile No."
              />
            </div>
            <div className="relative">
              <label className="mb-[10px]">Password</label>
              <input
                type= {showPassword ? "text" : "password"}
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000] mt-2"
                placeholder="Password"
              />
              <span
                className="absolute right-3 top-[44px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <FaEye fontSize={24} fill="#418160" />
                ) : (
                  <FaEyeSlash fontSize={24} fill="#418160" />
                )}
              </span>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full border-2 border-[#418160] p-3 font-semibold bg-[#418160] text-[#fff] hover:bg-[#fff] hover:text-[#418160]  rounded-[4px]"
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center items-center mt-4">
              <p>Already have an account ?</p>
              <Link to="/Sign-in" className="ml-1 hover:text-[#418160]">
                Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
