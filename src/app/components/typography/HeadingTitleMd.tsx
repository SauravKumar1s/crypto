import React from 'react';

type HeadingTitleMdProps = {
    title:string,
    className?:string
};

const HeadingTitleMd:React.FC<HeadingTitleMdProps> = ({title,className}) => {
    
    return <> <h2 className={`${className} leading-[46px] md:text-[28px] text-xl font-semibold`}>{title}</h2></>
}
export default HeadingTitleMd;