import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion";

const faqData = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    value: "item-1",
  },
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on 'Forgot Password' on the login page.",
    value: "item-2",
  },
  {
    question: "What is the return policy?",
    answer: "Our return policy allows returns within 30 days of purchase.",
    value: "item-3",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact support via email at support@example.com or call us at (123) 456-7890.",
    value: "item-4",
  },
  {
    question: "Where can I find the terms and conditions?",
    answer:
      "The terms and conditions can be found at the bottom of our website.",
    value: "item-5",
  },
];

const Faq = () => {
  return (
    <main className="">
      <div className="md:w-[50%] mx-auto">
        <div className="flex flex-col items-center gap-6 py-8 px-4 md:px-0">
          <h2 className="text-center text-[#0f1728] text-3xl md:text-4xl font-semibold font-['Inter'] leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[#475466] text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
            Everything you need to know about the product and billing.
          </p>
        </div>
        <Accordion type="single" collapsible className="px-4">
          {faqData.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-[#0f1728]">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-[#475466]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="p-8 bg-[#f8f9fb] rounded-2xl flex-col justify-start items-center gap-8 inline-flex w-full mt-10">
        <div className="flex flex-col items-center gap-6 p-6 bg-[#f8f9fb] rounded-2xl">
          <div className="flex justify-center relative pb-6">
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center absolute left-2">
              <img className="rounded-full" src="./assets/avatar.jpg" />
            </div>
            <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center absolute z-10 -top-2">
              <img className="rounded-full" src="./assets/avatar.jpg" />
            </div>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center absolute right-2">
              <img className="rounded-full" src="./assets/avatar.jpg" />{" "}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[#0f1728] text-xl font-semibold leading-loose">
              Still have questions?
            </div>
            <div className="text-[#475466]  md:text-lg font-normal leading-7 max-w-md mx-auto">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </div>
          </div>
          <div className="flex justify-center">
            <div className="px-5 py-3 bg-[#7e56d8] rounded-lg shadow border border-[#7e56d8] flex items-center">
              <div className="text-white text-base font-semibold leading-normal">
                Get in touch
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Faq;
