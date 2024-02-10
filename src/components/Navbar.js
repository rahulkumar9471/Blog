import React from 'react';
import { FaArrowDownLong, FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='bg-white w-full z-10 shadow-md'>
            <nav className='flex w-full justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] py-4 md:py-6 items-center'>
                <div>
                    <Link to="">
                        <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text'>
                            EducationToday
                        </h1>
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-x-10 font-semibold items-center'>
                        <li className='hidden sm:hidden md:hidden lg:block'>
                            <Link to="" className='text-[#203656] hover:text-[#418160]'>Search</Link>
                        </li>
                        <li className='hidden sm:hidden md:hidden lg:block'>
                            <Link to="" className='text-[#203656] hover:text-[#418160]'>Sign in</Link>
                        </li>
                        <li className='hidden sm:hidden md:hidden lg:block'>
                            <Link to="" className='border-2 border-[#418160] p-3 font-semibold text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]'>Create an account</Link>
                        </li>
                        <li className='block sm:block md:block lg:block xl:hidden'>
                            <button className='border-2 border-[#418160] p-3 text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]'>
                                <FaBars />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='hidden sm:hidden md:hidden lg:hidden xl:block'>
                <ul className='flex w-full justify-around px-[10rem] pb-6 pt-2 font-semibold'>
                    <li><Link to="/" className='text-[#203656] hover:text-[#418160] uppercase'>Home</Link></li>
                    <li><Link to="design" className='text-[#203656] hover:text-[#418160] uppercase'>Ui/Ux Design</Link></li>
                    <li><Link to="development" className='text-[#203656] hover:text-[#418160] uppercase'>Web Development</Link></li>
                    <li><Link to="" className='text-[#203656] hover:text-[#418160] uppercase'>Typography</Link></li>
                    <li><Link to="" className='text-[#203656] hover:text-[#418160] uppercase'>Freelance Business</Link></li>
                    <li><Link to="" className='text-[#203656] hover:text-[#418160] uppercase'>Lifestyle</Link></li>
                    <li><Link to="" className='text-[#203656] hover:text-[#418160] uppercase'>Startups</Link></li>
                    <li className='flex justify-between items-center'><Link to="" className='text-[#203656] hover:text-[#418160] uppercase mr-2'>More Layouts</Link><FaArrowDownLong /></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar