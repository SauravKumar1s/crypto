import React from 'react';
import {AiOutlineLink} from "react-icons/ai"
type HeadingTitleProps = {
    title:string
};

const HeadingTitle:React.FC<HeadingTitleProps> = ({title}) => {
    
    return <>
    <h2 className='flex-wrap font-semibold md:text-[40px] text-xl leading-[48px] flex items-center gap-1 whitespace-nowrap'>
        {title} 
    <span className='cursor-pointer'><AiOutlineLink /></span> 
    </h2>
    </>
}
export default HeadingTitle;