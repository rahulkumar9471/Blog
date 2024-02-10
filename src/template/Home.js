import React from 'react';
import banner from '../img/banner.jpg'

const Home = () => {
  return (
    <section className='mt-5'>
      <div className='px-[2rem] sm:px-[4rem] md:px-[4rem] lg:px-[6rem] xl:px-[10rem]'>
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
  )
}

export default Home