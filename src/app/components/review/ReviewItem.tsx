import React from 'react';
import Image from 'next/image';
type ReviewItemProps = {
    title:string,
    description:string,
    time:string,
    image:string,
    className:string,
};

const ReviewItem:React.FC<ReviewItemProps> = ({title,description,image,time,className}) => {
    
    return <div className={`${className} border p-3`}>

    <div className='flex items-center gap-3'>
      <Image src={image}
       alt='profile_img'
       height={100} width={100}
       className='rounded-full w-10 shadow-xl'
       />
        <span className='text-sm'>{title}</span>
    </div>
    <p className='fond-medium text-black_100 max-w-[25rem]'>{description} </p>
    <span className='text-xs text-offwhite_100'>{time}</span>
       </div>
}
export default ReviewItem;