import React from "react";

type TitlesSpanProps = {
  title: string;
  subtitle: string;
};

const TitlesSpan: React.FC<TitlesSpanProps> = ({ title, subtitle }) => {
  return (
    <div className=" text-black_100 ">
      <h1 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl text-base leading-[40px] ">
        {title}
      </h1>
      <h2 className="leading-[24px] sm:text-base text-xs">{subtitle}</h2>
    </div>
  );
};
export default TitlesSpan;
