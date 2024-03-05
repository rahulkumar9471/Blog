import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash  } from "react-icons/fa6";

const SignInForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#418160] mb-5">Sign In</h1>
      </div>
      <div>
        <form>
          <div>
            <div>
              <label className="mb-[10px]">Username</label>
              <input
                type="text"
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-2 text-[#000] mt-2"
                placeholder="Username"
              />
            </div>
            <div className="relative">
              <label className="mb-[10px]">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="w-full sm:w-full rounded-[4px] border-2 border-[#418160] p-[10px] px-[10px] mb-1 text-[#000] mt-2"
                placeholder="Password"
              />
              <span className="absolute right-3 top-[44px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                {
                  showPassword ? <FaEye fontSize={24} fill="#418160"/> : <FaEyeSlash fontSize={24} fill="#418160"/>
                }
                
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded-[10px]"
                  id="invalidCheck"
                />
                <label htmlFor="invalidCheck">Remember Me</label>
              </div>
              <Link to="/Forgot-Password" className="hover:text-[#418160]">Forgot Password ?</Link>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full border-2 border-[#418160] p-3 font-semibold bg-[#418160] text-[#fff] hover:bg-[#fff] hover:text-[#418160]  rounded-[4px]"
              >
                Sign In
              </button>
            </div>
            <div className="flex justify-center items-center mt-4"> 
                <p>Don't have an account ?</p>
                <Link to="/Sign-up" className="ml-1 hover:text-[#418160]">Sign Up</Link> 
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
