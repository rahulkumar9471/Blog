import React from 'react';
import { Link } from 'react-router-dom';
import SocialPlugin from './SocialPlugin';

const Info = () => {
    return (
        <div>
            <div className='shadow-xl mt-14 px-10 py-16 rounded-md'>
                <div className='text-center'>
                    <Link to="#">
                        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text3xl font-bold uppercase bg-gradient-to-r from-[#34433b] via-[#418160] to-[#236543] inline-block text-transparent bg-clip-text'>
                            EducationToday
                        </h1>
                    </Link>
                    <p className='mt-4'>
                        Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
                    </p>
                </div>
                <SocialPlugin/>
            </div>
        </div>
    )
}

export default Info