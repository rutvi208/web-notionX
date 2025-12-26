
import Image from "next/image";
import ChatGPT from '@/../public/images/HeroSection/ChatGPT.svg';
import Gemini from '@/../public/images/HeroSection/Gemini.png';
import Perplexity from '@/../public/images/HeroSection/Perplexity.svg';
import Claude from '@/../public/images/HeroSection/Claude-logo.svg';
import Grok from '@/../public/images/HeroSection/Grok-logo.svg';
import { siteConfig } from "@/app/config/site";

const AskAISection = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "name": "Ask AI About NotionX",
    "description": "Let ChatGPT, Claude, or Perplexity explain NotionX's AI SEO and GEO services",
    "isPartOf": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "AI Assistant Links",
      "description": "Direct links to ask AI assistants about NotionX services",
      "numberOfItems": 3,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "name": "Ask ChatGPT about NotionX",
            "url": "https://chat.openai.com/?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.",
            "description": "Start a ChatGPT conversation about NotionX AI SEO services"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "name": "Ask Gemini about NotionX",
            "url": "https://www.google.com/search?udm=50&aep=11&q=Tell%20me%20about%20notionX.ai%20and%20their%20AI%20SEO%20and%20GEO%20services.%20What%20services%20do%20they%20offer%20and%20how%20can%20they%20help%20improve%20my%20brand%20visibility%20in%20AI%20search%3F%20Please%20include%20their%20website%20link.%0A%0A",
            "description": "Start a Gemini conversation about NotionX AI SEO services"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "WebPage",
            "name": "Ask Claude about NotionX",
            "url": "https://claude.ai/new?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.",
            "description": "Start a Claude conversation about NotionX AI SEO services"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "WebPage",
            "name": "Ask Perplexity about NotionX",
            "url": "https://www.perplexity.ai/search/new?q=Tell+me+about+NotionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.",
            "description": "Start a Perplexity conversation about NotionX AI SEO services"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "WebPage",
            "name": "Ask Grok about NotionX",
            "url": "https://x.com/i/grok?text=Tell%20me%20about%20notionX.ai%20and%20their%20AI%20SEO%20and%20GEO%20services.%20What%20services%20do%20they%20offer%20and%20how%20can%20they%20help%20improve%20my%20brand%20visibility%20in%20AI%20search%3F%20Please%20include%20their%20website%20link.",
            "description": "Start a Grok conversation about NotionX AI SEO services"
          }
        }
      ]
    },
    "about": {
      "@type": "Service",
      "name": "NotionX AI SEO and GEO Services",
      "provider": {
        "@id": `${siteConfig.url}/#organization`
      },
      "serviceType": "AI Search Engine Optimization"
    }
  };

  const aiLinks = [
    {
      name: 'ChatGPT',
      logo: ChatGPT,
      url: 'https://chat.openai.com/?q=Tell+me+about+notionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      },
    {
      name: 'Gemini',
      logo: Gemini,
      url: 'https://www.google.com/search?udm=50&aep=11&q=Tell%20me%20about%20notionX.ai%20and%20their%20AI%20SEO%20and%20GEO%20services.%20What%20services%20do%20they%20offer%20and%20how%20can%20they%20help%20improve%20my%20brand%20visibility%20in%20AI%20search%3F%20Please%20include%20their%20website%20link.%0A%0A',
    },
    {
      name: 'Claude',
      logo: Claude,
      url: 'https://claude.ai/new?q=Tell+me+about+notionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      },
    {
      name: 'Perplexity',
      logo: Perplexity,
      url: 'https://www.perplexity.ai/search/new?q=Tell+me+about+notionX.ai+and+their+AI+SEO+and+GEO+services.+What+services+do+they+offer+and+how+can+they+help+improve+my+brand+visibility+in+AI+search%3F+Please+include+their+website+link.',
      //bgColor: 'bg-[#9B715C]',
      //textColor: 'text-white',
      //borderColor: 'border-[#9B715C]'
    },
    {
      name: 'Grok',
      logo: Grok,
      url: 'https://x.com/i/grok?text=Tell%20me%20about%20notionX.ai%20and%20their%20AI%20SEO%20and%20GEO%20services.%20What%20services%20do%20they%20offer%20and%20how%20can%20they%20help%20improve%20my%20brand%20visibility%20in%20AI%20search%3F%20Please%20include%20their%20website%20link.',
    }
  ];

  return (
    <section className="px-5 lg:px-8 2xl:px-0 pb-10 lg:pb-20 xl:pb-28">
      {/* Enhanced Structured Data */}
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl lg:rounded-[1.25rem] border border-[var(--stroke)] bg-[var(--pastelbrown)] overflow-hidden">
          <div className="p-6 sm:p-8 xl:p-12">
            <div className="flex flex-col gap-8 lg:gap-12 items-center text-center">
              {/* Left Content */}
              <div className="lg:col-span-2">
                <h2 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem] text-[var(--foreground)]">
                  Still not sure if NotionX is right for you?
                </h2>
                <p className="content-font text-base sm:text-lg lg:text-xl mt-4 text-[#0f0a08c1] lg:w-8/12 mx-auto">
                  Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a button and see what your favorite AI says about NotionX and GEO services.
                </p>
              </div>

              {/* Right Buttons */}
              <div className="w-full">
                <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 justify-center flex-wrap">
                  {aiLinks.map((ai) => {
                    //const Icon = ai.icon;
                    return (
                        <div key={ai.name} className="px-[1px] py-[1px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)] rounded-full">
                            <div className="px-6 sm:px-10 xl:px-8 py-3.5 bg-white text-[var(--foreground)] rounded-full flex justify-center">
                                <a
                                    href={ai.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center gap-3 rounded-full font-semibold text-base lg:text-lg`}
                                >
                                    {/* <Icon className="w-5 h-5" /> */}
                                    <Image src={ai.logo} alt="AI Logo" className="h-5 w-5 lg:h-6 lg:w-6" />
                                    <span className="content-font">Ask {ai.name}</span>
                                </a>
                            </div>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskAISection;