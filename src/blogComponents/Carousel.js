import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; 

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        const index = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(index);
    };

    const goToNextSlide = () => {
        const index = (currentIndex + 1) % images.length;
        setCurrentIndex(index);
    };

    return (
        <div> 
            <div className="relative">
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 font-semibold bg-[#fff] text-[#418160] text-center opacity-40 hover:opacity-100 p-3 rounded-full z-10" onClick={goToPrevSlide}><IoIosArrowBack /></button>
                <div className="h-[200px] overflow-hidden relative rounded-[4px]">
                    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" />
                            </div>
                        ))}
                    </div>
                </div>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 font-semibold bg-[#fff] text-[#418160] text-center opacity-40 hover:opacity-100 p-3 rounded-full z-10" onClick={goToNextSlide}><IoIosArrowForward /></button>
            </div> 
        </div>
    );
};

export default Carousel;