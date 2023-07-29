import TitlesSection from "./components/typography/TitlesSection";
import InfoCard from "./components/card/InfoCard";
import ContentCard from "./components/card/ContentCard";
import HeadingTitle from "./components/typography/HeadingTitle";
import HeadingTitleMd from "./components/typography/HeadingTitleMd";
import { BiSolidDownload } from "react-icons/bi";
import PopularCaseCard from "./components/card/PopularCaseCard";
import FaqItem from "./components/home/FaqItem";
import BusdCard from "./components/home/BusdCard";
export default function Home() {
  const faqData = [
    {
      question: "What is Tailwind CSS?",
      answer: "Tailwind CSS is a utility-first CSS framework...",
    },
    {
      question: "How do I install Tailwind CSS?",
      answer: "You can install Tailwind CSS using npm or yarn...",
    },
    // Add more FAQ items as needed
  ];
  return (
    <main className=" min-h-screen bg-yallow_50 text-black_100 ">
      <div>
        <div className="flex gap-3 sm:p-10 p-4 landing md:h-[70vh] md:px-10">
          <div className="md:basis-1/2 font-semibold pb-10 md:px-10">
            <h1 className=" md:text-[56px] text-2xl sm:leading-[72px]  md:max-w-[40rem] ">
              BUSD (Binance USD)
            </h1>
            <h3 className="sm:text-[32px] leading-[32px] text-yallow_400  mt-4 font-medium">
              Buy U.S Dollers(BUSD) through Binance Today!
            </h3>
            <p className="leading-[24px] text-offwhite_100 font-base mt-4">
              BUSD is 1:1 USD-backed stablecoin aproved by the New York State
              Department of Financial Services(NYDFS) and issued in
              partnershiped with paxos
            </p>
          </div>
        </div>
        {/* Titles */}
        <section className="mt-5 px-10">
          <div className="flex md:flex-row text-center flex-col gap-10  justify-around items-center ">
            <TitlesSection title="$38B" subtitle="Market Cap Today" />
            <TitlesSection title="6.7M" subtitle="# of Holders" />

            <HeadingTitleMd
              title="Deposit your Binance USD and earn interest"
              className="md:max-w-[23rem] "
            />
          </div>
        </section>

        <section className="mt-5 md:px-10">
          {/* Break Title Section */}
          <div className="flex items-center text-xl leading-[32px] text-offwhite_100 w-full px-10 gapy-10 ">
            <hr className="flex-1 w-full h-[2px] bg-offwhite_100 opacity-50" />{" "}
            <span className=" text-center">As of Jus 23,2023</span>{" "}
            <hr className="flex-1  w-full  h-[2px] bg-offwhite_100 opacity-50" />
          </div>
        </section>
        {/* Action Card Section */}
        <section className="my-5 md:px-10">
          <div className=" grid md:grid-cols-3 grid-cols-1 md:px-10">
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/bnbicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/bnbicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
            <InfoCard
              title="Convert Stablecoin"
              btn="0 fees"
              info="0 transection fee for BUSD/USD"
              image="/bnbicon.png"
              action="Convert to BUSD >"
              className="flex-1"
            />
          </div>
        </section>
        {/* why Busd */}
        <section className="my-5  md:mx-10 ">
          <div className="flex flex-col sm:gap-20 mt-5 space-y-4">
            <div className="sm:px-10 px-4 ">
              <HeadingTitle title="Why BUSD" />
            </div>

            <ContentCard
              title="Upholding High Standards that Build Trust"
              description="BUSD is fully regulated by a primary prudential regulator - the New York State Department of Financial Services (NYDFS), offering the highest level of consumer protection. All reserves are held 100% in cash and cash equivalents; hence customer funds are always available for 1:1 redemption."
              image="/section_side.png"
              button={"Hello"}
            />

            <ContentCard
              title="Fully Segregated Assets"
              description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
              image="/content1.png"
              imageOrderClass="sm:order-2"
              button={"Hello"}
            />

            <ContentCard
              title="Mass Adoption"
              description="BUSD is available on over 30 exchanges and has many popular use cases. Explore BUSD’s mass adoption and access your funds 24/7 with this blockchain-based solution for payment."
              image="/content2.png"
              button={"Hellos"}
            />
          </div>
        </section>

        {/* Reserve Breakdown Section */}
        <section className="my-10 grid-cols-12 py-12 sm:px-12 px-4  ">
          <HeadingTitle title="Monthly BUSD Reserve Breakdown" />
          <div className="flex justify-center rounded-xl overflow-x-auto gap-3 mt-20 bg-slate-200 md:w-4/5">
            <div className="flex flex-col gap-10 items-center boder py-10 flex-1">
              <h1 className="font-bold text-xl">Total Net Assets</h1>
              <p className="">U.S. Treasury Debt</p>
              <p className=""> Repurchase Agreements</p>
              <p>Cash Deposits</p>
            </div>
            <div className="flex-1 max-w-[15rem] ">
              <div className=" bg-white shadow-2xl rounded-xl h-full p-10 gap-10 flex flex-col  items-center  ">
                <h5>May Amount (%)</h5>
                <h1 className="font-bold text-2xl">5.28B</h1>
                <p>2.37B(44.97%)</p>
                <p>3.23B(67.97%)</p>
                <p>2.55B(59.71%)</p>
              </div>
            </div>

            <div className="flex flex-col gap-10 items-center  py-10 flex-1">
              <h5>May Amount (%)</h5>
              <h1 className="font-bold text-2xl ">5.28B</h1>
              <p>2.37B(44.97%)</p>
              <p>3.23B(67.97%)</p>
              <p>2.55B(59.71%)</p>
            </div>
          </div>
          <p className="py-10">
            {" "}
            <span className="cursor-pointer flex items-center justify-center">
              Download letest reserve report <BiSolidDownload />{" "}
            </span>
          </p>
        </section>
        {/* Attestaion Report */}
        <section className="pl-5 px-10">
          <div className="px-10">
            <HeadingTitle title="Attestation Report" />
          </div>

          <div className="overflow-x-auto">
            <div className=" text-xl">
              <div className="flex gap-3">
                <ul className="flex gap-12 ml-4 px-10">
                  <li className="py-10 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2020
                  </li>
                  <li className="py-10 hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2021
                  </li>
                  <li className="py-10  hover:bg-yallow_70 hover:text-yallow_150 rounded cursor-pointer">
                    2022
                  </li>
                  <li className="py-10  bg-yallow_70 text-yallow_150 rounded cursor-pointer">
                    2023
                  </li>

                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jan
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Feb
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Mar
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Apr
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    May
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jun
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Jul
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Aug
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Sep
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Oct
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Nov
                  </li>
                  <li className="hover:text-yallow_150 py-10  rounded cursor-pointer text-offwhite_100">
                    Dec
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="pl-5 px-10 mt-10">
          <div className="px-10">
            <HeadingTitle title="FAQ" />
          </div>
          <div className="mx-10">
            <FaqItem
              question={faqData[0].question}
              answer={faqData[0].answer}
              faqData={faqData}
            />
          </div>
        </section>
        <PopularCaseCard />
        <BusdCard />
      </div>
    </main>
  );
}
