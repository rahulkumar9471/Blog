import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'


const SocialPlugin = () => {
    return (
        <div>
            <div className='flex justify-around items-center mt-5'>
                <div>
                    <Link to=''>
                        <button className='shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full'>
                            <FaFacebook className='text-xl hover:text-[#418160]' />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to=''>
                        <button className='shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full'>
                            <FaInstagram className='text-xl hover:text-[#418160]' />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to=''>
                        <button className='shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full'>
                            <FaTwitter className='text-xl hover:text-[#418160]' />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to=''>
                        <button className='shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full'>
                            <FaYoutube className='text-xl hover:text-[#418160]' />
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to=''>
                        <button className='shadow-xl flex items-center justify-center p-2 w-10 h-10 rounded-full'>
                            <SiGmail className='text-xl hover:text-[#418160]' />
                        </button>
                    </Link>
                </div>
            </div>
            <p className='mt-8 text-center'>
                <Link to="#">www.educationtoday.co</Link>
            </p>
        </div>
    )
}

export default SocialPlugin