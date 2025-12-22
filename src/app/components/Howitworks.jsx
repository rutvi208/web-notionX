
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const Howitworks = () => {
    return (
      <section 
        className="my-20 xl:my-28 container mx-auto px-6 flex flex-col items-center"
        aria-labelledby="how-it-works-heading"
      >
        <div className="space-y-16 sm:space-y-12 lg:space-y-0 xl:max-w-6xl 2xl:max-w-7xl flex flex-col lg:flex-row xl:items-center">
          
          {/* Left Text Section */}
          <header>
            <h2 id="how-it-works-heading" className="text-5xl lg:text-6xl xl:text-[4rem] sm:leading-14 lg:leading-16 xl:leading-20 font-medium tracking-[-0.16rem] text-[var(--foreground)] subheading-font sm:w-8/12 xl:w-6/12 2xl:w-6/12">
              Google's 10 <span className="font-light text-[#1A0DAB]">Blue Links</span> Don't Matter Anymore
            </h2>
          </header>
  
          {/* Statistics */}
          <div className="flex flex-col gap-8 lg:gap-10" role="list">
            {[
              { title: "63%", text: "Of searches now happen inside AI tools like ChatGPT, Perplexity, and Google's Gemini." },
              { title: "2.4X", text: "More trust in AI answers than in traditional search results." },
              { title: "ONE", text: "Definitive answer is what AI delivers — not ten options to choose from." },
              { title: "AI", text: "Response is the modern marketplace — if your business isn't present, you're left unseen." },
            ].map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[6rem_1fr] gap-4 sm:gap-6 xl:gap-10 border-s-2 border-[#D4BAAE] ps-2 lg:ps-5"
                role="listitem"
              >
                <p className="w-[6rem] text-left text-[var(--mudbrown)] heading-font font-semibold text-3xl lg:text-[2.50rem]">
                  {item.title}
                </p>
                <p className="content-font text-base sm:text-lg md:text-xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
  
        {/* Comparison Section */}
        <figure className="mt-12 lg:mt-16 xl:mt-20 xl:max-w-6xl 2xl:max-w-7xl bg-[#F2F2F2] rounded-lg lg:rounded-xl p-3 lg:p-5">
          <figcaption className="sr-only">
            Comparison between traditional search and AI search
          </figcaption>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-3 lg:mt-5">
            {/* Traditional Search */}
            <div>
              <h3 className="content-font font-semibold text-lg lg:text-xl mb-2 lg:mb-3">
                Traditional Search:
              </h3>
              <div className="bg-white rounded-lg p-3 xl:p-4">
                <p className="text-base text-[#1F2937] content-font">
                  Best plumbers near me
                </p>
                <div className="bg-[#D1D5DB] rounded-full h-1.5 w-9/12 mt-4" aria-hidden="true"></div>
                <div className="bg-[#D1D5DB] rounded-full h-1.5 w-8/12 mt-2" aria-hidden="true"></div>
                <div className="bg-[#D1D5DB] rounded-full h-1.5 w-7/12 mt-2" aria-hidden="true"></div>
              </div>
            </div>
  
            {/* AI Search */}
            <div>
              <h3 className="content-font font-semibold text-lg lg:text-xl mb-2 lg:mb-3">
                AI Search:
              </h3>
              <div className="bg-white rounded-lg p-3 xl:p-4">
                <p className="text-base text-[#1F2937] content-font">
                  Who's the best plumber near me?
                </p>
                <p className="text-sm text-[#222222] mt-2.5">
                  "Based on high ratings and customer reviews, <span className="text-[#1A0DAB]">Reliable Plumbing Services</span> is the best plumber in your area, known for their 24/7 emergency service and fair pricing..."
                </p>
              </div>
            </div>
          </div>
        </figure>
  
        {/* CTA Section */}
        <aside className="mt-10 lg:mt-24 xl:mt-36 container mx-auto justify-center place-items-center text-center">
          <h2 className="heading-font text-3xl lg:text-5xl">
            Know your AI presence. Grow your advantage.
          </h2>
          <p className="content-font text-base mt-2 lg:mt-3 lg:w-4/12 mx-auto text-center">
            Enter a website URL to analyze its performance for traditional search engines and AI-driven platforms.
          </p>
          
          <div className="mt-5 lg:mt-10 text-center mx-auto">
            <Link 
              href="https://geo.notionx.ai/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-[var(--cta)] text-lg lg:text-xl font-bold hover:underline flex justify-center items-center text-center mx-auto gap-2"
            >
              Get my AI visibility check 
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true">
                <HiMiniArrowSmallRight/> 
              </span>
            </Link>
          </div>
        </aside>
      </section>
    );
  };

export default Howitworks;

            {/* <div className="flex flex-col gap-8 lg:gap-10">
                    <div className="grid md:[grid-template-columns:auto_1fr] gap-6 border-s-2 border-[#D4BAAE] ps-2 lg:ps-5">
                        <h1 className="text-[var(--mudbrown)] heading-font font-semibold text-3xl lg:text-[2.50rem] ">63%</h1>
                        <p className="content-font min-w-min text-base sm:text-lg md:text-xl">Of searches now happen inside AI tools like ChatGPT, Perplexity, and Google's Gemini.</p>
                    </div>
                    <div className="grid md:[grid-template-columns:auto_1fr] gap-6 border-s-2 border-[#D4BAAE] ps-2 lg:ps-5">
                        <h1 className="text-[var(--mudbrown)] heading-font font-semibold text-3xl lg:text-[2.50rem] ">2.4X</h1>
                        <p className="content-font min-w-min text-base sm:text-lg md:text-xl">More trust in AI answers than in traditional search results.</p>
                    </div>
                    <div className="grid md:[grid-template-columns:auto_1fr] gap-6 border-s-2 border-[#D4BAAE] ps-2 lg:ps-5">
                        <h1 className="text-[var(--mudbrown)] heading-font font-semibold text-3xl lg:text-[2.50rem] ">ONE</h1>
                        <p className="content-font min-w-min text-base sm:text-lg md:text-xl">Definitive answer is what AI delivers — not ten options to choose from.</p>
                    </div>
                    <div className="grid md:[grid-template-columns:auto_1fr] gap-6 border-s-2 border-[#D4BAAE] ps-2 lg:ps-5">
                        <h1 className="text-[var(--mudbrown)] heading-font font-semibold text-3xl lg:text-[2.50rem] ">AI</h1>
                        <p className="content-font min-w-min text-base sm:text-lg md:text-xl">Response is the modern marketplace — if your business isn’t present, you’re left unseen.</p>
                    </div>
                </div> */}