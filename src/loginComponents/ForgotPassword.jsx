import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center mx-auto">
        <div className="shadow-xl border-t-4 border-[#418160] p-10 rounded-md">
          <div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-[#418160] mb-5">
                Forgot Password
              </h1>
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
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full border-2 border-[#418160] p-3 font-semibold bg-[#418160] text-[#fff] hover:bg-[#fff] hover:text-[#418160]  rounded-[4px]"
                    >
                      Send Link
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
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
