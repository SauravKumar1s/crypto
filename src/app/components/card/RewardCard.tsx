import Image from 'next/image';
import React from 'react';
Image
type RewardCardProps = {
    image:string,
    title:string,
    from:string,
    to:string,
};

const RewardCard:React.FC<RewardCardProps> = ({image,title,from,to}) => {
    
    return (
        <div className='p-5 my-10 items-center border max-w-[15rem] bg-slate-100 flex flex-col gap-3  justify-center'>
        <Image src={image} alt="coint_logo" height={100} width={100}/>
        <h1>{title}</h1>
        <span>APR <span className='text-green-500'>{from} - {to} </span></span>
        <span className='bg-slate-200 text-bold rounded-full shadow-2xl max-w-[2rem] p-3'>{">"}</span>
    </div>
    );
    

}
export default RewardCard;