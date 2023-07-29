import React from 'react';
import card1 from '../../assets/learn.png';
import Image from 'next/image';
import HeadingTitle from '../typography/HeadingTitle';

const cardsData = [
  {
    title: 'Introducing BUSD',
    imageSrc: card1,
  },
  {
    title: 'Binance Widens Access to Its Regulated, Licensed, and Fiat-backed BUSD Stablecoin',
    imageSrc: card1,
  },
  {
    title: 'Join BUSD Community',
    imageSrc: card1,
  },
];

const BusdCard: React.FC = () => {
  return (
    <>
    <div className='xl:px-20 px-4 sm:py-10'>
        <HeadingTitle title="Monthly BUSD Reserve Breakdown" />
    </div>
    
       
    <div className="flex justify-center items-center py-10 ">
          
      <div className="grid md:grid-cols-3 grid-cols-1 md:px-10 px-4 lg:gap-10 xl:gap-24 ">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg p-4 max-w-sm transition-transform transform hover:scale-105"
          >
            <Image
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </>
 
  );
};

export default BusdCard;
