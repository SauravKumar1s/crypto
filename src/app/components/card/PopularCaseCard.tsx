import React from "react";
import RightIcon from "../Icon/RightIcon";
import Image from "next/image";
import launchPool from "../../assets/launch-pool.png";

const PopularCaseCard: React.FC = () => {
  return (
    <section className="text-gray-600 sm:px-10 px-4">
      <div className="container px-5 py-24 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  -m-4">
          <div className="md:p-4 lg:w-full md:w-full ">
            <div className="flex flex-row   border-2 rounded-lg border-gray-200 border-opacity-50 p-8  shadow-xl">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four
                </p>
                <a className="mt-3 text-sm text-yellow-700 inline-flex items-center bg-gray-200 p-1 px-10 rounded-3xl whitespace-nowrap">
                  Go to Binance Earn
                  <RightIcon />
                </a>
              </div>
              <div className="md:w-36 w-10 sm:h-auto h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src={launchPool} alt="earn" />
              </div>
            </div>
          </div>

          <div className="md:p-4 lg:w-full md:w-full ">
            <div className="flex flex-row   border-2 rounded-lg border-gray-200 border-opacity-50 p-8  shadow-xl">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-2xl title-font font-medium mb-3">
                  Shooting Stars
                </h2>
                <p className="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four
                </p>
                <a className="mt-3 text-sm text-yellow-700 inline-flex items-center bg-gray-200 p-1 px-10 rounded-3xl whitespace-nowrap">
                  Go to Binance Earn
                  <RightIcon />
                </a>
              </div>
              <div className="md:w-36 w-10 sm:h-auto h-10 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <Image src={launchPool} alt="earn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCaseCard;
