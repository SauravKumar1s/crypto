import React from 'react'
import Image from 'next/image'
import HeadingTitleMd from '../typography/HeadingTitleMd'
import Button from '../button/Button'
type ContentCardProps = {
    image: string;
    title: string;
    description: string;
    imageOrderClass?: string;
    button: string;
    imageFloat?: "left" | "right"; 
  };
  

const ContentCard: React.FC<ContentCardProps> = ({
    title,
    description,
    image,
    imageOrderClass,
    button,
    imageFloat, // New prop to float the image
  }) => {
    return (
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-5 px-10">
        <div
          className={`${
            imageOrderClass ? imageOrderClass : ""} ${
            imageFloat === "left" ? "lg:col-span-6 order-1" : "lg:col-span-6"
          }`}
        >
          <Image src={image} alt="Content_Image1" height={200} width={600} />
        </div>
        <div className="col-span-6 max-w-[29rem] flex flex-col items-center justify-center">
          <div>
            <HeadingTitleMd title={title} />
            <p className="leading-[24px] text-offwhite_100 mt-10 mb-10">{description}</p>
            <Button text={button} />
          </div>
          
        </div>
      </div>
    );
  };
  
export default ContentCard
