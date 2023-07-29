import React from "react";
import Image from "next/image";
import testi from "../../app/assets/testi.png";

const Testimonial: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-10 rounded-lg p-4 py-24">
        <div className="w-44 overflow-hidden">
          <Image
            src={testi}
            alt="Testimonial Person"
            width={400}
            height={500}
          />
        </div>

        <div className="ml-4">
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-gray-600">
            "I had a fantastic experience with this company. The team was
            professional, and their service exceeded my expectations. I highly
            recommend them!"
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 rounded-lg p-4">
        <div className="ml-4">
          <h3 className="text-xl md:text-end font-bold">John Doe</h3>
          <p className="text-gray-600 ">
            "I had a fantastic experience with this company. The team was
            professional, and their service exceeded my expectations. I highly
            recommend them!"
          </p>
        </div>
        <div className="w-44  overflow-hidden">
          <Image
            src={testi}
            alt="Testimonial Person"
            width={400}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
