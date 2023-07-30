import React from "react";
import Button from "../components/button/Button";


const OurMission = () => {
  return (
    <nav className="text-sm mt-10 px-10" >
      <div className="flex items-center gap-3 md:p-10  ">
        <div className=" font-semibold pb-10">
          <h1 className="text-[56px] leading-[72px]  md:max-w-[40rem]">
            Our Mission
          </h1>

          <p className="font-normal text-offwhite_100 text-xl mt-2 mb-10">
            At Binance, we believe that everyone should have the freedom to
            earn, hold, spend, share and give their money - no matter who you
            are or where you come from.
          </p>
   
          <Button text="Learn More"/>
        </div>
      </div>
    </nav>
  );
};

export default OurMission;
