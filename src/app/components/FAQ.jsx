"use client";

import {useState } from 'react';

const faqs = [
  {
    question: "What is GEO and how is it different from traditional SEO?",
    answer:
      "GEO focuses on ranking in AI generated answers across platforms like Google AI Overviews, ChatGPT, and Perplexity, whereas traditional SEO targets search engines. With our GEO services, your brand becomes part of the direct AI answer.",
  },
  {
    question: "What's included in the AI Visibility Audit?",
    answer:
      "Our AI Visibility Audit reviews how your business appears across AI platforms, identifies gaps in visibility, analyzes competitor presence, and delivers a prioritized action plan. You'll see where you stand today and what's required to secure top placement in AI-generated results.",
  },
  {
    question: "How quickly will I see results from GEO services?",
    answer:
      "Most clients begin noticing visibility improvements within 60-90 days, depending on competition and industry. Full impact — where your brand consistently appears in AI-generated answers — typically takes 3-4 months of optimization.",
  },
  {
    question: "Can I cancel my GEO service anytime?",
    answer:
      "Yes. Our services are flexible, and you can cancel at any time. However, since GEO requires consistent optimization, we recommend committing to at least 3 months to see lasting results.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "We optimize for Google AI Overviews, ChatGPT, and other leading AI-driven platforms.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "Is GEO future proof as AI evolves?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "What industries benefit the most from GEO?",
    answer:
      "GEO is highly effective for finance, healthcare, legal, real estate, e-commerce, SaaS, and local service businesses — any industry where being the trusted AI answer wins customer trust and conversions.",
  },
  {
    question: "Do I still need traditional SEO if I invest in GEO?",
    answer:
      " Yes, but their roles are different. Traditional SEO helps with long-term organic traffic from search engines, while GEO ensures your brand is visible inside AI generated answers. Together, they create a complete search strategy for today and the future.",
  },
  {
    question: "Do you know if GEO will work with my existing marketing strategy?",
    answer:
      "Absolutely. GEO is designed to complement SEO, paid ads, and content marketing. It integrates seamlessly with your current efforts to boost overall ROI.",
  }
];


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section aria-labelledby="faq-heading">
          <div className="container mx-auto place-items-center py-20 px-5 lg:px-8 2xl:px-0">
            <header className="text-center">
              <h2 id="faq-heading" className="heading-font text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Quick Answers</h2>
              <p className="text-lg lg:text-xl text-center content-font mt-3">Everything you need to know about GEO and AI search optimization.</p>
            </header>    
            <dl className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 my-16 lg:my-20 items-start">
              {faqs.map((faq, index) => (
                
                  <div key={index} className="rounded-lg border border-[var(--stroke)] text-lg lg:text-xl px-6">
                    <dt id={`faq-question-${index}`}>
                      {/* Question */}
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex flex-row items-center justify-between py-4 text-left cursor-pointer"
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                        //id={`faq-question-${index}`}
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
                          //role="region"
                          aria-labelledby={`faq-question-${index}`}
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              openIndex === index ? "max-h-[400px]" : "max-h-0"
                          }`}
                      >
                        
                            <p className="text-base pb-4 lg:text-lg xl:text-xl text-[#333]">
                            {faq.answer}
                            </p>
                        
                      </dd>
                  </div>
                
              ))}
            </dl> 
          </div>
        </section>
      )
  }

export default Faq;