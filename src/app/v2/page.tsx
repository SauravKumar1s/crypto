import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import { RiArrowRightSLine } from "react-icons/ri";
import { BiLogoBitcoin } from "react-icons/bi";
import ReviewItem from "../components/review/ReviewItem";
import RewardCard from "../components/card/RewardCard";
import TitlesSpan from "../components/typography/TitleSpan";

export default function Home() {
  return (
    <main className=" min-h-screen bg-yallow_50">
      <div>
        {/* landing section */}
        {/* TODO:LAnding Image Needed */}
        <div className="flex gap-3 p-10 sm:text-start text-center items-center ml-[30px]  sm:ml-0">
          <div className="basis-1/2 ">
            <h1 className="font-semibold lg:text-5xl md:text-4xl sm:text-3 text-xl tracking-wider text-[#1e2329] max-w-[40rem]">
              Buy, trade ,And hold 360 cryptocurrencies on Binance
            </h1>
            <h3 className="md:text-xl sm:text-lg text-base  hover:slate-300 cursor-pointer mt-4">
              Trade Bitcoin for free{" "}
              <span className="text-slate-500 font-bold">{">"}</span>{" "}
            </h3>
            <div className="max-w-[25rem]">
              <button className="font-medium py-3 w-full text-center text-xs sm:text-base bg-yallow_500 mt-2 rounded hover:opacity-90">
                Sign Up With Email or Phone
              </button>
              <p className=" pl-[5rem] pt-1 text-center text-slate-400 text-xs sm:text-base">
                or continue with
              </p>
              <div className="flex items-center gap-5 pt-1 pl-3 text-xs sm:text-base">
                <button className="basis-1/2  py-3 bg-slate-200 hover:bg-slate-300 flex whitespace-nowrap items-center justify-center gap-1">
                  <FcGoogle /> Google
                </button>
                <button className="basis-1/2 justify-center py-3 bg-slate-200 hover:bg-slate-300 flex whitespace-nowrap items-center gap-1 text-xs sm:text-base">
                  Facebook
                </button>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            {/* <Image src={"/bitcoin-landing.png"} alt='landing_img' width={500} height={500} /> */}
          </div>
        </div>
        {/* Titles */}
        <div className="flex sm:flex-row flex-col text-center sm:text-start  sm:justify-around items-center">
          <TitlesSpan title="$38 Billion" subtitle="24h trading voliume" />
          <TitlesSpan title="350+" subtitle="Cryptocurency Listed" />
          <TitlesSpan title="140 Million" subtitle="Registered Users" />
          <TitlesSpan title="<0.10%" subtitle="Lowest transection fees" />
        </div>
        {/* slider Section */}
        <div>
          <div className="p-5 ">
            <Image
              src={"/banner.jpg"}
              alt="banner_img"
              width={700}
              height={400}
              className="rounded-xl   mx-auto"
            />
          </div>

          {/* Populer Crypto */}

          <div>
            <div className="flex items-center justify-between p-3 pb-5 pl-[5rem] pr-3">
              <h1 className="text-semibold lg:text-3xl md:text-2xl sm:text-xl text-lg ">
                Populer cryptocurrencies
              </h1>

              <p className="flex whitespace-nowrap items-center text-xs sm:text-base">
                view more markets{" "}
                <span>
                  {" "}
                  <RiArrowRightSLine />{" "}
                </span>{" "}
              </p>
            </div>
            <div>
              <table className="table-auto w-full sm:text-sm text-xs">
                <thead className=" py-5 text-offwhite_100 ">
                  <tr className="grid grid-cols-12">
                    <th className=" col-span-3">Name</th>
                    <th className=" col-span-3">Last Price</th>
                    <th className=" col-span-3">24hours Change</th>
                    <th className=" col-span-3">Market Cap</th>
                  </tr>
                </thead>
                <tbody className="md:text-base text-sm">
                  <tr className="grid grid-cols-12 py-5 text-center">
                    <td className="col-span-3 flex gap-1 justify-center items-center">
                      <span>
                        {" "}
                        <BiLogoBitcoin width={40} />{" "}
                      </span>{" "}
                      BNB <span className="text-offwhite_100 text-sm">BNB</span>
                    </td>
                    <td className="col-span-3">241.7</td>
                    <td className="col-span-3">-0.98</td>
                    <td className="col-span-3">$37.18M</td>
                  </tr>
                  <tr className="grid grid-cols-12 py-5 text-center">
                    <td className="col-span-3 flex gap-1 justify-center items-center">
                      <span>
                        {" "}
                        <BiLogoBitcoin width={40} />{" "}
                      </span>{" "}
                      BNB <span className="text-offwhite_100 text-sm">BNB</span>
                    </td>
                    <td className="col-span-3">241.7</td>
                    <td className="col-span-3">-0.98</td>
                    <td className="col-span-3">$37.18M</td>
                  </tr>
                  <tr className="grid grid-cols-12 py-5 text-center">
                    <td className="col-span-3 flex gap-1 justify-center items-center">
                      <span>
                        {" "}
                        <BiLogoBitcoin width={40} />{" "}
                      </span>{" "}
                      BNB <span className="text-offwhite_100 text-sm">BNB</span>
                    </td>
                    <td className="col-span-3">241.7</td>
                    <td className="col-span-3">-0.98</td>
                    <td className="col-span-3">$37.18M</td>
                  </tr>
                  <tr className="grid grid-cols-12 py-5 text-center">
                    <td className="col-span-3 flex gap-1 justify-center items-center">
                      <span>
                        {" "}
                        <BiLogoBitcoin width={40} />{" "}
                      </span>{" "}
                      BNB <span className="text-offwhite_100 text-sm">BNB</span>
                    </td>
                    <td className="col-span-3">241.7</td>
                    <td className="col-span-3">-0.98</td>
                    <td className="col-span-3">$37.18M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sing up section */}

          <section className="mt-10 sm:pl-[8rem] pl-[5rem] ">
            <h1 className="font-semibold text-xl sm:text-2xl text-black_100 ">
              Sign Up now to build your own portfolio for free!
            </h1>

            <button className="bg-yallow_400 my-10 py-2 px-10 font-medium cursor-pointer rounded hover:opacity-90">
              Get Started
            </button>
          </section>

          <section className="mt-10 sm:pl-[8rem] pl-[5rem] ">
            <div>
              <div className="flex md:flex-row flex-col items-center justify-between  pb-3 pr-3">
                <h1 className="text-bold text-[40px] text-black_100 ">
                  Tranding on Binance Feed
                </h1>

                <p className="flex whitespace-nowrap items-center">
                  view more{" "}
                  <span>
                    {" "}
                    <RiArrowRightSLine />{" "}
                  </span>{" "}
                </p>
              </div>
              <h2 className="text-offwhite_200 md:text-xl sm:text-lg text-md">
                Discover the latest crypto news and feed from news media and
                influencers.
              </h2>
            </div>
            {/* review seciton */}
            <div className="grid sm:grid-cols-12 grid-cols-1">
              <div className="py-10 flex sm:flex-row flex-col flex-wrap gap-3  col-span-8 mr-3 sm:mr-0">
                <ReviewItem
                  className="sm:w-[40%] w-full "
                  title="Crypto Man MM"
                  time="17hours ago"
                  image="/avatar.jpg"
                  description="Best 2 1000X GEMS for Big Profit Today I'm sharing you 2 best crypto coins for next bull run with 100... "
                />
                <ReviewItem
                  className="sm:w-[40%] w-full"
                  title="Crypto Man MM"
                  time="17hours ago"
                  image="/avatar.jpg"
                  description="Best 2 1000X GEMS for Big Profit Today I'm sharing you 2 best crypto coins for next bull run with 100... "
                />
                <ReviewItem
                  className="sm:w-[40%] w-full"
                  title="Crypto Man MM"
                  time="17hours ago"
                  image="/avatar.jpg"
                  description="Best 2 1000X GEMS for Big Profit Today I'm sharing you 2 best crypto coins for next bull run with 100... "
                />
                <ReviewItem
                  className="sm:w-[40%] w-full"
                  title="Crypto Man MM"
                  time="17hours ago"
                  image="/avatar.jpg"
                  description="Best 2 1000X GEMS for Big Profit Today I'm sharing you 2 best crypto coins for next bull run with 100... "
                />
              </div>
              <div className="col-span-4 bg-white flex flex-col items-center gap-3">
                <Image
                  src="/next.svg"
                  alt="feed_img"
                  height={40}
                  width={40}
                  className="w-[20rem] p-5 sm:mt-[8rem] mt-10"
                />
                <h1 className="font-semibold text-2xl text-black_100 leading-[32px]">
                  Worlds Largest Crypto Community
                </h1>
                <button className="py-3 px-8 bg-yallow_400 hover:opacity-90 font-medium rounded">
                  Explore Now
                </button>
              </div>
            </div>
          </section>
          {/* Daily Reward Section */}
          <section className=" py-3 pr-3 pl-10 sm:text-start text-center">
            <div className=" ">
              <h1 className="font-bold sm:text-[40px] text-2xl  text-black_100 ">
                Earn daily rewards on your idle tokens
              </h1>
            </div>
            <h2 className="text-offwhite_200 text-xl">
              Simple & Secure.Populer coins and start earning
            </h2>
            <div>
              <RewardCard
                title="USDT"
                image="/vercel.svg"
                from="0.38%"
                to="123.14%"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
