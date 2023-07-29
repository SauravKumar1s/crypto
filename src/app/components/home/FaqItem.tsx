"use client";
import React, { useState } from "react";

interface faq {
  question: string;
  answer: string;
}
interface FaqItemProps {
  question: string;
  answer: string;
  faqData: Array<faq>;
}

const FaqItem: React.FC<FaqItemProps> = ({ faqData }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = (key: number) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return faqData.map((Faq, key) => (
    <div className="border-b border-gray-200 py-4" key={key}>
      <button
        className="w-full text-left font-semibold text-xl focus:outline-none"
        onClick={() => {
          toggleAccordion(key);
        }}
      >
        {Faq.question}
      </button>
      {isOpen && <p className="mt-2 text-gray-700">{Faq.answer}</p>}
    </div>
  ));
};

export default FaqItem;
