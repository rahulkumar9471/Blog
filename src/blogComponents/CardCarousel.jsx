import React, { useState } from "react";

const CardCarousel = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const index = (currentIndex - 1 + cards.length) % cards.length;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const index = (currentIndex + 1) % cards.length;
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md z-10"
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="w-1/2 flex-shrink-0">
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-md"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default CardCarousel;
