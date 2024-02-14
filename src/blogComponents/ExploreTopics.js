import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'; 
import Info from './Info';

const ExploreTopics = () => {
  return (
    <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 mt-10 sm:mt-10 md:mt-10 lg:mt-0">
      <div>
        <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold'>Explore Topics</h1>
        <div className='flex justify-center items-center'>
          <div className='w-2/12 border-[1.5px] border-[#000] mt-4'></div>
          <div className='w-10/12 border-[1px] border-gray mt-4'></div>
        </div>
      </div>
      <div className="flex-col justify-between items-center mt-6">
        <ul>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Ui/Ux Design</span>
              </p>
              <p>(12)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Web Development</span>
              </p>
              <p>(65)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Typography</span>
              </p>
              <p>(45)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Freelance Business</span>
              </p>
              <p>(22)</p>
            </Link>
          </li> 
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Startups</span>
              </p>
              <p>(58)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Lifestyle</span>
              </p>
              <p>(25)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Typography</span>
              </p>
              <p>(19)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Web Development</span>
              </p>
              <p>(48)</p>
            </Link>
          </li>
          <li className="border-b-2 py-3 border-gray">
            <Link to=""
              className="flex justify-between items-center text-[#203656] hover:text-[#418160]">
              <p className='flex items-center'>
                <IoIosArrowForward className='mr-2' />
                <span className="font-bold">Ui/Ux Design</span>
              </p>
              <p>(14)</p>
            </Link>
          </li>
        </ul>
      </div>
      <Info />
    </div>
  )
}

export default ExploreTopics