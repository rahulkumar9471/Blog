import React from 'react';
import banner from '../img/banner.jpg';
import PortraitCard from '../blogComponents/PortraitCard'; 
import { Link } from 'react-router-dom';
import BlogSidebar from '../blogTemplate/BlogSidebar';

const design = () => {
  return (
    <>
      <section className='mt-5 mb-5'>
        <div className='px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <div className='w-full h-[96px] bg-no-repeat bg-center bg-cover rounded-[4px] relative' style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-[#203656] h-[96px] rounded-[4px] opacity-60'></div>
            <div className='absolute flex items-center w-full top-0 p-7'>
              <div className='w-full sm:w-full md:w-full text-left sm:text-center md:text-left lg:text-left'>
                <div className='flex justify-between items-center'>
                  <h1 className='text-[#fff] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                    Ui/Ux Design
                  </h1>
                  <div className='flex justify-between items-center text-[#fff]'>
                    <h1 className='text-xl'>
                      <Link to="/">
                        Home
                      </Link>
                    </h1>
                    <span className='ml-2 mr-2 font-bold text-xl'>/</span>
                    <h6 className='text-l'>
                      <Link to="/design">
                        Ui/Ux Design
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <div className='lg:flex gap-x-10 px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <div className='w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 '>
            <div>
              <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold'>Trending Posts</h1>
              <div className='flex justify-center items-center'>
                <div className='w-2/12 border-[1.5px] border-[#000] mt-4'></div>
                <div className='w-10/12 border-[1px] border-gray mt-4'></div>
              </div>
            </div>
            <div className=''>
              <div className='lg:flex gap-x-10'>
                <div className='container'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10'>
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                    <PortraitCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar />
        </div>
      </section>
    </>
  )
}

export default design