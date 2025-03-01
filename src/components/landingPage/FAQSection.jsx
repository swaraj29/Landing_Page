import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(3); // Set the fourth FAQ to be open initially

  const faqs = [
    {
      id: 1,
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      id: 2,
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      id: 3,
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
    {
      id: 4,
      question: "Are DocuTech signatures legally binding?",
      answer:
        "Yep! DocuTech signatures are totally legit and legally binding, just like signing with a pen—except digital and way cooler. As long as they follow the right security rules, courts accept them, so no worries there. Plus, they're encrypted and tracked, so it's safer than losing a paper contract in your junk drawer!",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          FAQs
        </h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="mb-4 ">
              {/* FAQ Question */}
              <button
                className={`w-full text-left p-5 flex justify-between items-center rounded-lg ${
                  openIndex === index
                    ? "bg-[#254A76] text-white"
                    : "bg-[#254A76] text-white"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <img src={minus} alt="Collapse" className="h-5 w-5" />
                  ) : (
                    <img src={plus} alt="Expand" className="h-5 w-5" />
                  )}
                </span>
              </button>

              {/* FAQ Answer */}
              {openIndex === index && (
                <div className="bg-white px-3 py-6 rounded-b-lg border-2 border-t-0 border-pink-100 shadow-sm ">
                  <p className="text-[#254A76] font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;