import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import BeTheAnswer from '@/../public/images/WhyUs/BeTheAnswer.svg';
import FasterResults from '@/../public/images/WhyUs/FasterResults.svg';
import FutureProofStrategy from '@/../public/images/WhyUs/FutureProofStrategy.svg';
import MeasurableROI from '@/../public/images/WhyUs/MeasurableROI.svg';

const Whyus = () => {
    return (
      <div className="mb-20 mt-10 sm:mt-0 px-3">
        <section 
          className="py-12 sm:py-20 bg-[var(--pastelbrown)] container mx-auto rounded-3xl border border-[var(--stroke)]"
          aria-labelledby="why-choose-us"
        >
          <div className="flex flex-col px-6 sm:px-10 xl:px-20">
            {/* Badge */}
            <div className="relative sm:w-6/12 p-[1px] rounded-full bg-[conic-gradient(at_center,_#FFB900,_#F4364C,_#FFB900)] mb-6">
              <div className="flex flex-row gap-2.5 items-center bg-white rounded-full py-[0.44rem] px-3 text-[var(--foreground)] text-base font-normal content-font">
                <div className="p-2 rounded-full text-white bg-[conic-gradient(at_center,_#FFB900,_#F4364C,_#FFB900)]" aria-hidden="true">
                  <BiSearch />
                </div>
                Search has changed...
              </div>
            </div>
  
            <header>
              <h2 id="why-choose-us" className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[var(--foreground)] heading-font xl:w-6/12">
                Here's why our clients win in AI answers.
              </h2>
            </header>
  
            {/* Benefits List */}
            <ul className="mt-10 sm:mt-[3.75rem] grid gap-7 sm:gap-10 xl:gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 list-none">
              {[
                {
                  img: BeTheAnswer,
                  title: "Be THE Answer",
                  desc: "Don't compete for clicks. Be the definitive AI recommendation when customers ask."
                },
                {
                  img: FasterResults,
                  title: "Faster Results",
                  desc: "Achieve AI visibility in 4-6 weeks vs. 6-12 months for traditional SEO."
                },
                {
                  img: FutureProofStrategy,
                  title: "Future Proof Strategy",
                  desc: "Align with how customers actually search today: asking AI tools direct questions."
                },
                {
                  img: MeasurableROI,
                  title: "Measurable ROI",
                  desc: "Track AI mentions, branded searches, and qualified leads from AI-powered discovery."
                }
              ].map((benefit, i) => (
                <li key={i} className="text-[var(--foreground)] rounded-2xl">
                  <figure>
                    <Image
                      src={benefit.img}
                      alt="Benefit Images"
                      loading="lazy"
                      className="sm:mb-6 w-24 h-24 md:w-fit md:h-fit"
                      aria-hidden="true"
                    />
                    <figcaption>
                      <h3 className="heading-font text-left font-semibold text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                        {benefit.desc}
                      </p>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  };

export default Whyus;