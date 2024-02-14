import React from 'react';
import banner from '../img/banner.jpg'
import PortraitCard from '../blogComponents/PortraitCard';
import SLandscapeCard from '../blogComponents/SLandscapeCard'; 
import image1 from '../img/banner.jpg'
import image2 from '../img/banner.jpg'
import image3 from '../img/banner.jpg'
import Carousel from '../blogComponents/Carousel';
import TopValues from '../blogComponents/TopValues';
import ExploreTopics from '../blogComponents/ExploreTopics';
import SponsoredAd from '../blogComponents/SponsoredAd';

const images = [image1, image2, image3];

const Home = () => {
  return (
    <>
      <section className='mt-5 mb-5'>
        <div className='px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <div className='w-full h-[500px] bg-no-repeat bg-center bg-cover rounded-[4px] relative' style={{ backgroundImage: `url(${banner})` }}>
            <div className='bg-[#203656] h-[500px] rounded-[4px] opacity-60'></div>
            <div className='absolute top-10 left-0 right-0 p-10'>
              <div className='w-full sm:w-full md:w-full lg:w-6/12 text-center sm:text-center md:text-center lg:text-center'>
                <h1 className='text-[#fff] text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold'>
                  Welcome to EducationToday,<br /> a Bloging page.
                </h1>
                <p className='text-[#fff] mt-8 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
                <div className='mt-8 flex justify-center gap-x-10'>
                  <button className='border-2 border-[#fff] hover:border-[#418160] p-3 font-semibold bg-[#fff] text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]'>Learn More</button>
                  <button className='border-2 border-[#fff] hover:border-[#418160] p-3 font-semibold bg-[#fff] text-[#418160] hover:bg-[#418160] hover:text-[#fff] rounded-[4px]'>Create Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <div className='px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <div>
            <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold'>Featured for members</h1>
            <div className='flex justify-center items-center'>
              <div className='w-2/12 border-[1.5px] border-[#000] mt-4'></div>
              <div className='w-10/12 border-[1px] border-gray mt-4'></div>
            </div>
          </div>
          <div className=''>
            <div className='lg:flex gap-x-10'>
              <div className='w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10'>
                  <PortraitCard />
                  <PortraitCard />
                </div>
              </div>
              <div className='w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 mt-10 sm:mt-10 md:mt-10 lg:mt-0'>
                <div className='flex flex-col gap-y-8 mt-10'>
                  <SLandscapeCard />
                  <SLandscapeCard />
                  <SLandscapeCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-10'>
        <div className='px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <SponsoredAd />
          <Carousel images={images} />
          <SponsoredAd />
        </div>
      </section>
      <section className='mt-10'>
        <div className='lg:flex gap-x-10 px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem]'>
          <div className='w-full sm:w-full md:w-full lg:w-8/12 xl:w-8/12 '>
            <div>
              <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold'>Latest Posts</h1>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-full md:w-full lg:w-4/12 xl:w-4/12 mt-10 sm:mt-10 md:mt-10 lg:mt-0">
            <div>
              <h1 className='text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold'>Popular Posts</h1>
              <div className='flex justify-center items-center'>
                <div className='w-2/12 border-[1.5px] border-[#000] mt-4'></div>
                <div className='w-10/12 border-[1px] border-gray mt-4'></div>
              </div>
            </div>
            <div className='flex flex-col gap-y-8 mt-10'>
              <SLandscapeCard />
              <SLandscapeCard />
              <SLandscapeCard />
              <SLandscapeCard />
              <SLandscapeCard />
              <SLandscapeCard />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ExploreTopics />
        </div>
      </section>
      <TopValues />
    </>
  )
}

export default Home