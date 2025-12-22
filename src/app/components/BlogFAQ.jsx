"use client";

import {useState } from 'react';

const faqs = [
  {
    question: "How do you rank your website in ChatGPT?",
    answer:
      "Focus on - content quality, structured data, and brand mentions. Make sure your website is easy for AI to - understand and reference.",
  },
  {
    question: "How to rank a brand on ChatGPT?",
    answer:
        "Use PR, influencer marketing, and monitor sentiment. Consistent brand visibility across online platforms helps - boost recognition.",
  },
  {
    question: "How to rank on ChatGPT for products?",
    answer:
      "Implement product schema and encourage user-generated content. Clear product details and reviews make it easier for ChatGPT to feature you.",
  },
  {
    question: "How to track ChatGPT visibility in search results?",
    answer:
      "Use brand monitoring tools and citation trackers. Regular audits can help you. Better spot gaps and improve performance.",
  },
  {
    question: "How to rank on ChatGPT in 2025?",
    answer:
      "Stay updated with - AI trends. Optimize for conversational relevance. Adapt as ChatGPT's algorithms evolve.",
  }
];

const BlogFAQ = () => {

const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

  return (
    <div>
        <div className="container mx-auto place-items-center pt-20 px-0 lg:px-8 2xl:px-0">
            <h2 className="heading-font text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Quick Answers</h2>
            <p className="text-lg lg:text-xl text-center content-font mt-3">Everything you need to know about GEO and AI search optimization.</p>
                
            <dl className="grid grid-cols-1 gap-3 lg:gap-5 my-16 lg:my-20 lg:w-[56.25rem]">
                {faqs.map((faq, index) => (
                    
                    <div key={index} className="rounded-lg border border-[var(--stroke)] text-lg lg:text-xl px-6">
                      <dt id={`faq-question-${index}`}>
                        {/* Question */}
                        <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex flex-row items-center justify-between py-4 text-left cursor-pointer"
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                        >
                        <h2 className={`header-font transition-colors duration-300 ${
                            openIndex === index ? "text-[var(--cta)]" : "text-[var(--foreground)]"
                          }`}>{faq.question}</h2>
                        <span className="text-[#AD8775] text-2xl 2xl:text-3xl" aria-hidden="true">
                            {openIndex === index ? "-" : "+"}
                        </span>
                        </button>
                      </dt> 

                        {/* Answer */}
                        <dd
                          id={`faq-answer-${index}`}
                          role="region"
                          aria-labelledby={`faq-question-${index}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openIndex === index ? "max-h-max" : "max-h-0"
                          }`}
                        >
                        
                            <h3 className="content-font pb-4 text-lg lg:text-xl text-[#333]">
                            {faq.answer}
                            </h3>
                        
                        </dd>
                    </div>
                    
                ))}
            </dl>
        </div>
    </div>
    )
}

export default BlogFAQ