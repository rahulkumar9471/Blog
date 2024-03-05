import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const TopicsLists = () => {
  return (
    <div className="flex-col justify-between items-center mt-6">
      <ul>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Ui/Ux Design</span>
            </p>
            <p>(12)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Web Development</span>
            </p>
            <p>(65)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Typography</span>
            </p>
            <p>(45)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Freelance Business</span>
            </p>
            <p>(22)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Startups</span>
            </p>
            <p>(58)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Lifestyle</span>
            </p>
            <p>(25)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Typography</span>
            </p>
            <p>(19)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Web Development</span>
            </p>
            <p>(48)</p>
          </Link>
        </li>
        <li className="border-b-2 py-3 border-gray">
          <Link
            to=""
            className="flex justify-between items-center text-[#203656] hover:text-[#418160]"
          >
            <p className="flex items-center">
              <IoIosArrowForward className="mr-2" />
              <span className="font-bold">Ui/Ux Design</span>
            </p>
            <p>(14)</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopicsLists;
