import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#181818] mt-10'>
            <div className='mb-10'></div>
            <div className='w-full flex justify-between px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[10rem] py-4 md:py-16  text-white'>
                <div className='w-3/12 text-left'>
                    <Link to="">
                        <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text'>
                            EducationToday
                        </h1>
                    </Link>
                    <p className='mt-4'>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                    <ul className='mt-8 flex gap-x-10 items-center'>
                        <li className=''>
                            <Link className="text-xl" to=""><FaFacebook /></Link>
                        </li>
                        <li>
                            <Link className='text-xl' to=""><FaInstagram /></Link>
                        </li>
                        <li>
                            <Link className='text-xl' to=""><FaTwitter /></Link>
                        </li>
                        <li>
                            <Link className='text-xl' to=""><FaLinkedin /></Link>
                        </li>
                    </ul>
                    <p className='mt-8'>
                        <Link to="">WWW.Educationtoday.co</Link>
                    </p>
                </div>
                <div className='w-3/12 text-center'>
                    <div className='mb-5'>
                        <h1 className='text-xl'>Explore</h1>
                    </div>
                    <ul className='flex flex-col gap-y-3'>
                        <li>
                            <Link to="">Home</Link>
                        </li>
                        <li>
                            <Link to="">Our Projects</Link>
                        </li>
                        <li>
                            <Link to="">Profile</Link>
                        </li>
                        <li>
                            <Link to="">About us</Link>
                        </li>
                        <li>
                            <Link to="">Contact us</Link>
                        </li>
                        <li>
                            <Link to="">Create a account</Link>
                        </li>
                    </ul>
                </div> 
                <div className='w-3/12 text-center'>
                    <div className='mb-5'>
                        <h1 className='text-xl'>Explore</h1>
                    </div>
                    <ul className='flex flex-col gap-y-3'>
                        <li>
                            <Link to="">Ui/Ux Design</Link>
                        </li>
                        <li>
                            <Link to="">Web Development</Link>
                        </li>
                        <li>
                            <Link to="">Typography</Link>
                        </li>
                        <li>
                            <Link to="">Freelance Business</Link>
                        </li>
                        <li>
                            <Link to="">Lifestyle</Link>
                        </li>
                        <li>
                            <Link to="">Startups</Link>
                        </li>
                    </ul>
                </div> 
                <div className='w-3/12 text-center'>
                    <div className='mb-5'>
                        <h1 className='text-xl'>Contact</h1>
                    </div>
                    <div className=' text-center'>
                        <p>3rd floor, no 461, Sai sobagu, Outer Ring Rd, Teacher's Colony, Sector 5, HSR Layout, Bengaluru, Karnataka 560034</p>
                         
                            <Link className='text-xl flex items-center gap-x-2 text-center' to=''>
                                <IoIosMail/>
                                <p className='text-sm'>rahul@educationtoday.co</p>
                            </Link>

                            <Link className='text-l' to=''><FaPhoneAlt/></Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer