"use client";
import React, { useState } from 'react';

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const faqs = [
    {
      question: "Why is the sky blue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloremque laboriosam neque reprehenderit saepe eius dolorum vel consequuntur perspiciatis ad vero."
    },
    {
      question: "Why did the chicken cross the road?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "How many licks does it take to get to the center of a tootsie pop?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      question: "Where's Waldo?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Frequently asked questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 mb-4"
        >
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => toggle(index)}
          >
            <h2 className={`font-semibold text-lg ${selected === index ? "text-purple-600" : "text-gray-900"}`}>
              {faq.question}
            </h2>
            <span className={`${selected === index ? "rotate-180" : ""} transition-transform duration-300`}>
              ▼
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${selected === index ? "max-h-40" : "max-h-0"}`}
          >
            <p className="text-gray-500 py-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
