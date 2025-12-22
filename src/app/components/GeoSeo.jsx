
import Image from "next/image";
import tsv1 from "@/../public/images/GEO-SEO/SEO-visual1.webp";
import tsv2 from "@/../public/images/GEO-SEO/SEO-visual2.webp"; 
import tsv3 from "@/../public/images/GEO-SEO/SEO-visual3.webp";
import tsv4 from "@/../public/images/GEO-SEO/SEO-visual4.webp"; 
import geo1 from "@/../public/images/GEO-SEO/GEO-visual1.webp";
import geo2 from "@/../public/images/GEO-SEO/GEO-visual2.webp"; 
import geo3 from "@/../public/images/GEO-SEO/GEO-visual3.webp";
import geo4 from "@/../public/images/GEO-SEO/GEO-visual4.webp";

const GeoSeo = () => {
    return (
      <section className="bg-[var(--pastelbrown)]" aria-labelledby="geo-seo-heading">
        <div className="mx-auto container py-16 sm:py-20 lg:py-28 px-5 lg:px-8 2xl:px-0">
          <header>
            <h2 id="geo-seo-heading" className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">
              GEO vs SEO: What Changed
            </h2>
            <p className="text-lg lg:text-xl content-font mt-3">
              The AI search revolution requires a completely different approach to getting found online.
            </p>
          </header>
  
          {/* Comparison Content */}
          <div className="space-y-12 lg:space-y-14 mt-12 sm:mt-20 lg:mt-[6.25rem]">
            
            {/* Traditional SEO */}
            <article className="bg-white rounded-xl lg:rounded-[1.25rem] p-4 sm:p-7 lg:p-10">
              <h3 className="content-font font-semibold text-[#5D3E35] mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-4xl lg:text-[2.5rem] tracking-[-0.05rem]">
                Traditional SEO
              </h3>
              <ul className="grid gap-4 sm:gap-2 2xl:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 list-none">
                {[
                  { img: tsv1, text: "Requires users to click through to your site." },
                  { img: tsv2, text: "Competes with 9 other results on page one." },
                  { img: tsv3, text: "Focuses on driving traffic to your website." },
                  { img: tsv4, text: "Takes 6-12 months for significant results." },
                ].map((item, i) => (
                  <li key={i}>
                    <figure>
                      <Image
                        src={item.img}
                        alt={`Traditional SEO characteristic ${i + 1}`}
                        className="w-fit h-fit"
                      />
                      <figcaption className="content-font text-lg lg:text-xl text-[#5D3E35] ms-3.5 mt-4">
                        {item.text}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </article>
  
            {/* Transition Statement */}
            <div role="presentation" aria-hidden="true">
              <p className="content-font font-semibold italic text-2xl sm:text-4xl lg:text-5xl text-center">
                How GEO delivers results traditional SEO can't.
              </p>
            </div>
  
            {/* Generative Engine Optimization */}
            <article className="bg-white rounded-xl lg:rounded-[1.25rem] p-4 sm:p-7 lg:p-10">
              <h3 className="content-font font-semibold text-[#5D3E35] mb-6 sm:mb-8 lg:mb-10 text-2xl sm:text-4xl lg:text-[2.5rem] tracking-[-0.05rem]">
                Generative Engine Optimization
              </h3>
              <ul className="grid gap-4 sm:gap-2 2xl:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 list-none">
                {[
                  { img: geo1, text: "Optimizes for direct mentions in AI answers." },
                  { img: geo2, text: "Positions you as THE definitive answer, not an option." },
                  { img: geo3, text: "Focuses on direct recommendations & citations." },
                  { img: geo4, text: "Can deliver results in as little as 60-90 days." },
                ].map((item, i) => (
                  <li key={i}>
                    <figure>
                      <Image
                        src={item.img}
                        alt={`GEO benefit ${i + 1}`}
                        className="w-fit h-fit"
                      />
                      <figcaption className="content-font text-lg lg:text-xl text-[#5D3E35] ms-1 mt-4">
                        {item.text}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    );
  };

export default GeoSeo;