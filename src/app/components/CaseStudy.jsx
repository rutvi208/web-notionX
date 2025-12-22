
import Image from 'next/image';
import TesstimonialBg from '@/../public/images/backgrounds/Testimonial-Bg.webp';
import { siteConfig } from "@/app/config/site";

const CaseStudy = () => {

    const casestudySchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "NotionX Client Success Stories",
      "description": "Real results from our GEO optimization services",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "@id": `${siteConfig.url}/#casestudy-extension-architecture`,
            "headline": "Extension Architecture: AI Growth Unlocked in 3.5 Months",
            "description": "33% increase in AI mentions, 110 AI Overview appearances, and 51 ChatGPT mentions for London-based architectural design firm",
            "articleBody": "Despite a solid SEO foundation and strong brand presence, their content wasn't breaking through into Google AI Overviews and other AI search engines. We optimized AI-focused content clusters, enhanced internal linking, and expanded schema markup to boost AI Overview indexing and drive ChatGPT mentions.",
            "datePublished": "2025-11-15",
            "author": {
              "@type": "Organization",
              "name": "NotionX",
              "@id": `${siteConfig.url}/#organization`
            },
            "publisher": {
              "@id": `${siteConfig.url}/#organization`
            },
            "about": {
              "@type": "Service",
              "name": "GEO Optimization Services",
              "serviceType": "AI Search Optimization"
            },
            "keywords": ["GEO", "AI SEO", "ChatGPT optimization", "AI Overviews", "Architecture industry"]
          }
        }
      ]
    };

    return (
        <section aria-labelledby="case-study-heading">
            {/* Enhanced Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(casestudySchema) }}
            />
            <div className="mx-auto container pt-16 sm:pt-20 lg:pt-28 px-5 lg:px-8 2xl:px-0">
                <header>
                    <h2 id="case-study-heading" className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Real Results</h2>
                    <p className="text-lg lg:text-xl content-font mt-3">Proven impact of GEO across industries.</p>
                </header>

                {/* case study cards */}
                <article className="mt-10 sm:mt-12 lg:mt-20 border-[0.0625rem] border-[#9B715C] rounded-2xl lg:rounded-[1.25rem] px-5 py-8 sm:py-10 sm:px-8 xl:my-12 2xl:py-14 lg:px-10">
                    <span className="text-[var(--mudbrown)] text-lg xl:text-xl tracking-tighter sm:mb-2">Architecture</span>
                
                    <h3 className="font-normal tracking-tighter text-2xl sm:text-3xl lg:text-[2.5rem] text-left">Extension Architecture</h3>
                    
                    <div className="mt-6 lg:mt-4 xl:mt-8 2xl:mt-12 items-center flex flex-col xl:grid xl:grid-cols-2 space-y-10 xl:space-y-0 space-x-0 lg:space-x-6 2xl:space-x-10">
                        {/* left section */}
                        <div className="flex flex-col justify-between h-full space-y-6 sm:space-y-4 xl:space-y-0">
                            <dl className='flex flex-col space-y-6 xl:space-y-0 sm:flex-row space-x-6 sm:space-x-8 2xl:space-x-12 sm:items-center 2xl:justify-around lg:mt-10 xl:mt-12'>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <dt className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+33%</dt>
                                    <dd className='content-font text-lg lg:text-xl mt-1'>AI Mentions</dd>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <dt className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+110</dt>
                                    <dd className='content-font text-lg lg:text-xl mt-1'>AI Overview</dd>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 md:-mt-5 xl:mt-0 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <dt className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+51</dt>
                                    <dd className='content-font text-lg lg:text-xl mt-1'>ChatGPT Mentions</dd>
                                </div>
                            </dl>
                            <aside className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-lg lg:rounded-xl p-4 sm:p-5'>
                                <Image
                                    src={TesstimonialBg}
                                    alt="Tesstimonial Background"
                                    loading="lazy"
                                    className='absolute inset-0 object-cover h-full w-full' 
                                    // z index not added
                                />
                                <div className="relative inset-0 z-auto space-y-3.5">
                                    <p className='text-xl lg:text-2xl font-medium'>AI Growth Unlocked in Just 3.5 Months</p>
                                    <p className="content-font text-lg xl:text-xl">London-based architectural design firm helping homeowners plan and build extensions, loft conversions, and renovations with expert planning approval support.</p>
                                </div>
                            </aside>
                        </div>

                        {/* right section */}
                        <div className='flex flex-col space-y-6 sm:space-y-8'>
                            <div>
                                <h4 className='text-xl lg:text-2xl font-medium'>The Challenge</h4>
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-lg xl:text-xl'>Despite a solid SEO foundation and strong brand presence, their content wasn't breaking through into Google AI Overviews and other AI search engines — limiting next-level visibility.</p>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl lg:text-2xl font-medium'>The GEO Solution</h4>
                                {/* className='flex flex-row justify-between items-center' <p className='content-font text-sm lg:text-lg'>Results in 3.5 months</p> */}
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-lg xl:text-xl'>We optimized AI-focused content clusters, enhanced internal linking, and expanded schema markup to boost AI Overview indexing and drive ChatGPT mentions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default CaseStudy;