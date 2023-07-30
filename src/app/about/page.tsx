import React from "react";
import Hero from "./Hero";
import OurMission from "./OurMission";
import OurEcoSystem from "./OurEcosystem";
import ContentCard from "../components/card/ContentCard";
import Testimonial from "./Testimonial";



const About = () => {
  return (
    <div>
      <Hero />
      <OurMission />
      <OurEcoSystem />
      <div className="flex justify-center py-24">
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/content1.png"
          imageOrderClass="order-1"
          button="User Protection"
          imageFloat="left" // Float the image to the left on small devices
        />
      </div>
      <div className="flex  justify-center py-24">
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/content1.png"
          imageOrderClass="float-left "
          button="User Protection"
        />
      </div>

      <div className="px-"></div>

      <div className="flex flex-col items-center  justify-center py-16">
        <h1 className=" text-start text-[50px] mb-10 ">Our Mission</h1>
        <ContentCard
          title="Working with Regulators"
          description="With fully segregated bankruptcy-remote accounts, assets held in custody would be returned to their rightful owners even if the custodial trust became insolvent."
          image="/content1.png"
          imageOrderClass="float-left"
          button="User Protection"
        />
      </div>
    <Testimonial/>

    </div>
  );
};
export default About;
