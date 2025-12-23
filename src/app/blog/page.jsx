import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import HeroBg from '@/../public/images/backgrounds/HeroBg.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Blog1Thumbnail from '@/../public/images/Blog-page/Blog1-Thumbnail.webp';
import Blog2Thumbnail from '@/../public/images/Blog-page/Blog2-Thumbnail.webp';
import Blog3Thumbnail from '@/../public/images/Blog-page/Blog3-Thumbnail.webp';
import Blog4Thumbnail from '@/../public/images/Blog-page/Blog4-Thumbnail.webp';
import Blog5Thumbnail from '@/../public/images/Blog-page/Blog5-Thumbnail.webp';
import Blog6Thumbnail from '@/../public/images/Blog-page/Blog6-Thumbnail.webp';
import Blog7Thumbnail from '@/../public/images/Blog-page/Blog7-Thumbnail.webp';
import { siteConfig } from "@/app/config/site";
import AuthorImage from '@/../public/images/Blog-page/ManthanDesai_blogAuthor.webp';
// import dynamic from 'next/dynamic';
// const AskAISection = dynamic(() => import('@/app/components/AskAISection'), { ssr: true });
import AskAISection from '@/app/components/AskAISection';

const blogPosts = [
  {
    id: 1,
    href: "blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide",
    image: Blog1Thumbnail,
    title: "How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide",
    desc: "In the age of AI-powered search, visibility in Chat GPT is becoming - as crucial as ranking on Google. With 700 million weekly users interacting with Chat GPT - brands and websites must adapt to this new paradigm.",
    date: "Sep 12, 2025",
    readTime: "6 mins read",
    dateISO: "2025-09-12", // Added for proper datetime attribute
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 2,
    href: "blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2026",
    image: Blog2Thumbnail,
    title: "Complete Guide to ChatGPT Rank Tracking Tools in 2026!",
    desc: "The way people search online is evolving. AI tools like ChatGPT now influence how content is discovered. Traditional rank tracking methods no longer capture the full picture.",
    date: "Sep 25, 2025",
    readTime: "8 mins read",
    dateISO: "2025-09-25",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 3,
    href: "blog/best-chatgpt-seo-agency-and-services-for-ai-search-ranking",
    image: Blog3Thumbnail,
    title: "Best ChatGPT SEO Agency & Services for AI Search Ranking",
    desc: "With ChatGPT, Perplexity, and other AI search engines altering how people search, companies face a new contest. If AI-powered search cannot find your content - your brand does not exist. Traditional SEO tactics will not earn you a spot in AI-powered answers.",
    date: "Oct 13, 2025",
    readTime: "6 mins read",
    dateISO: "2025-10-13",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 4,
    href: "blog/how-to-rank-in-ai-overview-understand-the-seo-vs-geo-vs-aeo",
    image: Blog4Thumbnail,
    title: "How to Rank in AI Overview : Understand the SEO vs GEO vs AEO",
    desc: "What if the way we search the internet is transformed by 2025? Imagine asking a question and receiving not merely any answer. However, the precise one that you require—instantly delivered by AI-enabled tools.",
    date: "Oct 25, 2025",
    readTime: "7 mins read",
    dateISO: "2025-10-25",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 5,
    href: "blog/how-ai-overviews-are-stealing-your-traffic-recovery-and-ranking-strategies-for-2026",
    image: Blog5Thumbnail,
    title: "How AI Overviews Are Stealing Your Traffic Recovery & Ranking Strategies for 2026",
    desc: "The digital marketing landscape is experiencing its biggest transformation. A new era of search results has been introduced in the three decades since the commencement of Google.",
    date: "Nov 18, 2025",
    readTime: "8 mins read",
    dateISO: "2025-11-18",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 6,
    href: "blog/how-enterprises-are-transitioning-from-seo-to-geo?",
    image: Blog6Thumbnail,
    title: "How Enterprises are Transitioning From SEO To GEO?",
    desc: "90% of businesses are anxious about SEO's future. Discover how enterprises are shifting from SEO to GEO as AI reshapes digital discovery.",
    date: "Dec 28, 2025",
    readTime: "7 mins read",
    dateISO: "2025-12-28",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
  {
    id: 7,
    href: "blog/how-to-swiftly-rank-on-perplexity-ai-key-geo-and-seo-tips",
    image: Blog7Thumbnail,
    title: "How to Swiftly Rank on Perplexity AI: Key GEO and SEO Tips!",
    desc: "Want to get cited by Perplexity AI? Discover key GEO tips and Perplexity SEO strategies to boost your visibility on AI-driven search platforms.",
    date: "Dec 28, 2025",
    readTime: "6 mins read",
    dateISO: "2025-12-28",
    authorName: "Manthan D.",
    authorImage: AuthorImage,
  },
];

export const metadata = {
  title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
  keywords: "AI SEO, GEO, AEO, ChatGPT SEO, AI search ranking, notionX Blogs",
  description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
  openGraph: {
    title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
    description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
    url: `${siteConfig.url}${siteConfig.paths.blog}`,
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    type: "website",
  },
  twitter: {
    title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
    description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
    url: `${siteConfig.url}${siteConfig.paths.blog}`,
    images: [`${siteConfig.url}${siteConfig.paths.images}/notionX.webp`],
    card: "summary_large_image",
  },
  alternates: {
    canonical: `${siteConfig.url}${siteConfig.paths.blog}`,
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

const KnowledgeHub = () => {

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}${siteConfig.paths.blog}#webpage`,
    "url": `${siteConfig.url}${siteConfig.paths.blog}`,
    "name": "NotionX Blog - AI SEO & GEO Insights",
    "description": "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": blogPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${siteConfig.url}/${post.href}`,
        "name": post.title
      }))
    },    
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`
    },
    "breadcrumb": {
      "@id": `${siteConfig.url}${siteConfig.paths.blog}#breadcrumb`
    },
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "ReadAction",
      "target": [`${siteConfig.url}${siteConfig.paths.blog}`]
    }
  };

  // Enhanced blog schema with more structured data
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}${siteConfig.paths.blog}#blog`,
    url: `${siteConfig.url}${siteConfig.paths.blog}`,
    name: "NotionX Blog",
    headline: "The Future of Search Is Here",
    description: "Insights and strategies on AI SEO, GEO, and AI-powered brand discovery.",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    },    
    blogPost: blogPosts.map(post => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.desc,
      datePublished: post.dateISO,
      url: `${siteConfig.url}/${post.href}`,
      image: {
        "@type": "ImageObject",
        //url: `${siteConfig.url}${siteConfig.paths.blogImages}/${post.image}`,
        url: `${siteConfig.url}${post.image.src}`,
      },
      author: {
        "@type": "Person",
        name: post.authorName
      },
      "publisher": {
        "@id": `${siteConfig.url}/#organization`
      },     
      // mainEntityOfPage: {
      //   "@type": "WebPage",
      //   "@id": `${siteConfig.url}/blog/${post.slug}`
      // },
      // keywords: post.tag,
      // articleSection: post.tag,
      "inLanguage": "en-US"
    }))
  };

  // Breadcrumb schema for better navigation in search results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}${siteConfig.paths.blog}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item:  `${siteConfig.url}${siteConfig.paths.blog}`
      }
    ]
  };

  return (
    <>
      {/* Structured Data Scripts */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Content */}
      <main className='relative w-full min-h-screen overflow-visible'>
        {/* Background Image with proper semantic structure */}
        <figure className='absolute inset-0' aria-hidden="true">
          <Image
            src={HeroBg}
            alt=""  // Empty alt since it's decorative
            role="presentation"
            fill
            loading="lazy"
            className='object-cover h-full w-full'
            priority={false}
          />
        </figure>

        {/* Content Container */}
        <div className='absolute inset-0 z-10'>
          {/* Navigation Component */}
          <Navbar />
          
          {/* Hero Section - Header for the page */}
          <header 
            className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center"
            role="banner"
          >
            <h1 id="blog-posts-heading" className="sr-only">
              NotionX Blog
            </h1>
            <h2 className="heading-font text-3xl lg:text-5xl">
              The Future of Search Is Here
            </h2>
            <p className="content-font text-base mt-2 lg:mt-3 sm:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 px-3 mx-auto text-center">
              Learn how to optimize for AI-powered discovery and become the answer AI recommends when customers search for businesses like yours.
            </p>
          </header>

          {/* Blog Posts Section */}
          <section 
            className='container mx-auto mb-10 lg:mb-20 2xl:mb-24 justify-center place-items-center'
            aria-labelledby="blog-posts-heading"
            //role="feed"
            aria-busy="false"
          >
            <div 
              className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5'
              //role="list"
            >
              {blogPosts.map((blog, index) => (
                <article 
                  key={blog.id} 
                  className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden
                  bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'
                  //role="listitem"
                  aria-posinset={index + 1}
                  aria-setsize={blogPosts.length}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                    
                    {/* Featured Image */}
                    {/* <figure className='w-auto rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                      <Link 
                        href={blog.href} 
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${blog.title}`}
                      >
                        <Image 
                          src={blog.image} 
                          alt={`Featured image for ${blog.title}`}
                          width={600}
                          height={400}
                          className="object-cover"
                          loading="lazy"
                        />
                      </Link>
                    </figure> */}
                    <figure className='w-auto rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                      <Link 
                        href={blog.href} 
                        rel="noopener noreferrer"
                        aria-label={`Read article: ${blog.title}`}
                        className="cursor-pointer"
                      >
                        <div className="relative w-full aspect-[2.5/1]">
                          <Image
                            src={blog.image}
                            alt={`Featured image for ${blog.title}`}
                            //fill
                            width={700}
                            height={280}
                            sizes="(max-width: 768px) 100vw, 620px"
                                  // LCP image optimization
                            priority={index === 0}                // Enables eager loading for LCP automatically
                            fetchPriority={index === 0 ? "high" : "auto"}  // Correct for Next.js 14+
                            className="object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            //loading="lazy"
                          />
                        </div>
                      </Link>
                    </figure>

                    {/* Article Content Container */}
                    <div className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                      {/* Article Header */}
                      <header>
                        {/* Category Tag */}
                        {/* <span 
                          className="text-sm text-left text-[var(--foreground)] content-font inline-block"
                        >
                          {blog.tag}
                        </span> */}
                        
                        {/* Article Title */}
                        <h2
                          className="heading-font font-medium text-lg lg:text-xl leading-5 sm:leading-6 tracking-[-0.06rem] my-2"
                        >
                          <Link 
                            href={blog.href} 
                            rel="noopener noreferrer"
                            className="hover:text-[var(--cta)] transition-colors duration-200"
                          >
                            {blog.title}
                          </Link>
                        </h2>
                      </header>
                      
                      {/* Article Description */}
                      <p 
                        className="text-sm sm:text-base text-[#0f0a08d4] content-font mb-2 lg:mb-4"
                      >
                        {blog.desc}
                      </p>

                      {/* Article Footer */}
                      <footer className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between items-center mt-auto'>
                        {/* Publication Date and Read Time */}
                        {/* <div className='text-[#444444] content-font text-xs'>
                          <span className="author">
                            By <strong>{blog.authorName}</strong>
                          </span>
                          <span aria-hidden="true"> | </span>
                          <time 
                            dateTime={blog.dateISO}
                          >
                            {blog.date}
                          </time>
                          <span aria-hidden="true"> | </span>
                          <span>
                            {blog.readTime}
                          </span>
                        </div>  */}
                        <div className="flex items-center gap-2 text-[#444444] content-font text-xs">
                          <Image
                            src={blog.authorImage}
                            alt={`${blog.authorName} profile picture`}
                            width={28}
                            height={28}
                            className="rounded-full"
                          />

                          <div>
                            <span className="author block">
                              By <strong>{blog.authorName}</strong>
                            </span>

                            <span className="">
                              <time dateTime={blog.dateISO}>{blog.date}</time>
                              <span aria-hidden="true"> • </span>
                              {blog.readTime}
                            </span>
                          </div>
                        </div>

                        
                        {/* Read More Link */}
                        <Link 
                          href={blog.href}
                          className='cursor-pointer group text-[var(--cta)] content-font text-sm sm:text-lg flex items-center font-bold hover:text-[var(--cta)] transition duration-300'
                          aria-label={`Read more about ${blog.title}`}
                        >
                          <span>Read More</span>
                          {/* Hidden descriptive text for SEO + screen readers */}
                          <span className="sr-only">
                            about {blog.title}
                          </span>
                          <span 
                            className='text-[var(--cta)] ps-1 text-base sm:text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'
                            aria-hidden="true"
                          >
                            <HiMiniArrowSmallRight />
                          </span>
                        </Link>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            
          </section>
           
          <section aria-label="Ask AI Section">
            <AskAISection/>
          </section>

           {/* Footer Component */}
           <Footer />
         </div>
       </main>
     </>
   );
 };

 export default KnowledgeHub;