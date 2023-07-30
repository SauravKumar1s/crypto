import React from 'react'

const Hero = () => {
  return (
    <nav className="bg-white  text-sm ">
      <div className="flex items-center gap-3 p-10 landing h-[70vh] ">
        <div className="md:basis-1/2 font-semibold pb-10 sm:px-10">
          <h1 className=" md:text-[56px] text-xl leading-[72px]  md:max-w-[40rem]">
            Welcome to Binance
          </h1>
          <p className="leading-[24px] text-offwhite_100 text-xl mt-2">
            At Binance, we believe that everyone should have the freedom to earn, hold, spend, share and give their money - no matter who you are or where you come from.
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Hero