import React from 'react';
import HeadingTitleMd from './HeadingTitleMd';
type TitlesSectionProps = {
    title:string;
    subtitle:string;
};

const TitlesSection:React.FC<TitlesSectionProps> = ({title,subtitle}) => {
    
    return <div className=' text-black_100 '>
        
        <h1 className='font-light   text-yallow_500 leading-[80px] md:text-[80px] text-5xl '>{title}</h1>

        <HeadingTitleMd title={subtitle}/>
        
    </div>
}
export default TitlesSection;