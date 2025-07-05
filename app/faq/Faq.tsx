"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer: "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "24-hour notice required.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#33607F] text-center text-2xl sm:text-3xl md:text-4xl font-light mb-8">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#33607F]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="
                        flex items-center justify-center 
                        rounded-full border border-[#33607F] 
                        text-[#33607F] font-bold
                        text-xs sm:text-sm md:text-base 
                        w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9
                      "
                    >
                      &gt;
                    </motion.span>

               
                    <h3 className="text-[#33607F] text-sm sm:text-base md:text-lg font-normal">
                      {faq.question}
                    </h3>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden text-[#33607F] text-xs sm:text-sm md:text-base leading-relaxed"
                >
                  <p className="py-2 sm:py-3 px-2 sm:px-4">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
