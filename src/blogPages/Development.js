import React from 'react'; 
import CardCarousel from '../blogComponents/CardCarousel';

const cards = [
  {
    title: 'Card 1',
    description: 'Description for Card 1'
  },
  {
    title: 'Card 2',
    description: 'Description for Card 2'
  },
  {
    title: 'Card 3',
    description: 'Description for Card 3'
  }
];

const Development = () => {
  return (
    <div>
      <h1 className="text-center my-8 text-2xl font-bold">React Card Carousel Example</h1>
      <CardCarousel cards={cards} />
    </div>
  );
};

export default Development;
