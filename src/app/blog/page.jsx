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
import AskAISection from '@/app/components/AskAISection';

// Blog posts data
const blogPosts = [
  { id: 1, href: "blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide", image: Blog1Thumbnail, title: "How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide", desc: "In the age of AI-powered search, visibility in Chat GPT is becoming - as crucial as ranking on Google. With 700 million weekly users interacting with Chat GPT - brands and websites must adapt to this new paradigm.", date: "Sep 12, 2025", readTime: "6 mins read", dateISO: "2025-09-12", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 2, href: "blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2026", image: Blog2Thumbnail, title: "Complete Guide to ChatGPT Rank Tracking Tools in 2026!", desc: "The way people search online is evolving. AI tools like ChatGPT now influence how content is discovered. Traditional rank tracking methods no longer capture the full picture.", date: "Sep 25, 2025", readTime: "8 mins read", dateISO: "2025-09-25", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 3, href: "blog/best-chatgpt-seo-agency-and-services-for-ai-search-ranking", image: Blog3Thumbnail, title: "Best ChatGPT SEO Agency & Services for AI Search Ranking", desc: "With ChatGPT, Perplexity, and other AI search engines altering how people search, companies face a new contest. If AI-powered search cannot find your content - your brand does not exist. Traditional SEO tactics will not earn you a spot in AI-powered answers.", date: "Oct 13, 2025", readTime: "6 mins read", dateISO: "2025-10-13", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 4, href: "blog/how-to-rank-in-ai-overview-understand-the-seo-vs-geo-vs-aeo", image: Blog4Thumbnail, title: "How to Rank in AI Overview : Understand the SEO vs GEO vs AEO", desc: "What if the way we search the internet is transformed by 2025? Imagine asking a question and receiving not merely any answer. However, the precise one that you require—instantly delivered by AI-enabled tools.", date: "Oct 25, 2025", readTime: "7 mins read", dateISO: "2025-10-25", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 5, href: "blog/how-ai-overviews-are-stealing-your-traffic-recovery-and-ranking-strategies-for-2026", image: Blog5Thumbnail, title: "How AI Overviews Are Stealing Your Traffic Recovery & Ranking Strategies for 2026", desc: "The digital marketing landscape is experiencing its biggest transformation. A new era of search results has been introduced in the three decades since the commencement of Google.", date: "Nov 18, 2025", readTime: "8 mins read", dateISO: "2025-11-18", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 6, href: "blog/how-enterprises-are-transitioning-from-seo-to-geo?", image: Blog6Thumbnail, title: "How Enterprises are Transitioning From SEO To GEO?", desc: "90% of businesses are anxious about SEO's future. Discover how enterprises are shifting from SEO to GEO as AI reshapes digital discovery.", date: "Dec 28, 2025", readTime: "7 mins read", dateISO: "2025-12-28", authorName: "Manthan D.", authorImage: AuthorImage },
  { id: 7, href: "blog/how-to-swiftly-rank-on-perplexity-ai-key-geo-and-seo-tips", image: Blog7Thumbnail, title: "How to Swiftly Rank on Perplexity AI: Key GEO and SEO Tips!", desc: "Want to get cited by Perplexity AI? Discover key GEO tips and Perplexity SEO strategies to boost your visibility on AI-driven search platforms.", date: "Dec 28, 2025", readTime: "6 mins read", dateISO: "2025-12-28", authorName: "Manthan D.", authorImage: AuthorImage },
];

const baseUrl = siteConfig.url;
const blogPath = siteConfig.paths.blog;

export const metadata = {
  title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
  keywords: "AI SEO, GEO, AEO, ChatGPT SEO, AI search ranking, notionX Blogs",
  description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies. Explore expert tips, guides, and trends from NotionX.",
  openGraph: {
    title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
    description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies.",
    url: `${baseUrl}${blogPath}`,
    images: [`${baseUrl}${siteConfig.paths.images}/notionX.webp`],
    type: "website",
  },
  twitter: {
    title: "NotionX Blog | GEO & AI SEO Strategies for Modern Brands",
    description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies.",
    card: "summary_large_image",
  },
  alternates: { canonical: `${baseUrl}${blogPath}` },
};

// Consolidated schema using @graph for single script tag
const getSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}${blogPath}#webpage`,
      url: `${baseUrl}${blogPath}`,
      name: "NotionX Blog - AI SEO & GEO Insights",
      description: "Read the latest insights on AI SEO, GEO, AI search visibility, and modern AI-powered marketing strategies.",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: blogPosts.map((post, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${baseUrl}/${post.href}`,
          name: post.title
        }))
      },
      isPartOf: { "@id": `${baseUrl}/#website` },
      breadcrumb: { "@id": `${baseUrl}${blogPath}#breadcrumb` },
      publisher: { "@id": `${baseUrl}/#organization` },
      inLanguage: "en-US",
      potentialAction: { "@type": "ReadAction", target: [`${baseUrl}${blogPath}`] }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}${blogPath}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}${blogPath}` }
      ]
    },
    {
      "@type": "Blog",
      "@id": `${baseUrl}${blogPath}#blog`,
      url: `${baseUrl}${blogPath}`,
      name: "NotionX Blog",
      headline: "The Future of Search Is Here",
      description: "Insights and strategies on AI SEO, GEO, and AI-powered brand discovery.",
      publisher: { "@id": `${baseUrl}/#organization` },
      blogPost: blogPosts.map(p => ({
        "@type": "BlogPosting",
        headline: p.title,
        description: p.desc,
        datePublished: p.dateISO,
        url: `${baseUrl}/${p.href}`,
        image: { "@type": "ImageObject", url: `${baseUrl}${p.image.src}` },
        author: { "@type": "Person", name: p.authorName },
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: "en-US"
      }))
    }
  ]
});

// BlogCard component - visually identical to original
const BlogCard = ({ blog, index, total }) => (
  <article 
    className="blog-card blog-card-gradient"
    aria-posinset={index + 1}
    aria-setsize={total}
    itemScope
    itemType="https://schema.org/BlogPosting"
  >
    <div className="flex flex-col gap-1 sm:gap-2 h-full items-stretch">
      {/* Image - matches original aspect ratio */}
      <figure className="blog-card-image">
        <Link href={blog.href} aria-label={`Read article: ${blog.title}`} className="cursor-pointer">
          <div className="relative w-full aspect-[2.5/1]">
            <Image
              src={blog.image}
              alt={`Featured image for ${blog.title}`}
              width={700}
              height={280}
              sizes="(max-width: 768px) 100vw, 620px"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </Link>
      </figure>

      {/* Content area - matches original layout */}
      <div className="blog-card-content">
        <header>
          <h2 className="blog-card-title heading-font">
            <Link href={blog.href} className="hover:text-[var(--cta)] transition-colors duration-200">
              {blog.title}
            </Link>
          </h2>
        </header>
        
        <p className="blog-card-desc content-font">{blog.desc}</p>

        {/* Footer - matches original: stacked on sm, row on lg */}
        <footer className="flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between items-center mt-auto">
          <div className="flex items-center gap-2 text-[#444444] content-font text-xs">
            <Image
              src={blog.authorImage}
              alt={`${blog.authorName} profile picture`}
              width={28}
              height={28}
              className="rounded-full"
            />
            <div>
              <span className="author block">By <strong>{blog.authorName}</strong></span>
              <span>
                <time dateTime={blog.dateISO}>{blog.date}</time>
                <span aria-hidden="true"> • </span>
                {blog.readTime}
              </span>
            </div>
          </div>
          
          <Link 
            href={blog.href}
            className="cursor-pointer group text-[var(--cta)] content-font text-sm sm:text-lg flex items-center font-bold hover:text-[var(--cta)] transition duration-300"
            aria-label={`Read more about ${blog.title}`}
          >
            <span>Read More</span>
            <span className="sr-only">about {blog.title}</span>
            <span className="text-[var(--cta)] ps-1 text-base sm:text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true">
              <HiMiniArrowSmallRight />
            </span>
          </Link>
        </footer>
      </div>
    </div>
  </article>
);

const KnowledgeHub = () => {
  return (
    <>
      {/* Single consolidated schema script */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />

      <main className="relative w-full min-h-screen overflow-visible">
        {/* Background */}
        <figure className="absolute inset-0" aria-hidden="true">
          <Image
            src={HeroBg}
            alt=""
            role="presentation"
            fill
            loading="lazy"
            className="object-cover h-full w-full"
            priority={false}
          />
        </figure>

        <div className="absolute inset-0 z-10">
          <Navbar />
          
          {/* Hero - matches original margins and layout */}
          <header 
            className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center"
            role="banner"
          >
            <h1 id="blog-posts-heading" className="sr-only">NotionX Blog</h1>
            <h2 className="heading-font text-3xl lg:text-5xl">The Future of Search Is Here</h2>
            <p className="content-font text-base mt-2 lg:mt-3 sm:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 px-3 mx-auto text-center">
              Learn how to optimize for AI-powered discovery and become the answer AI recommends when customers search for businesses like yours.
            </p>
          </header>

          {/* Blog Grid - matches original grid and spacing */}
          <section 
            className="container mx-auto mb-10 lg:mb-20 2xl:mb-24 justify-center place-items-center"
            aria-labelledby="blog-posts-heading"
            aria-busy="false"
          >
            <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5">
              {blogPosts.map((blog, index) => (
                <BlogCard 
                  key={blog.id} 
                  blog={blog} 
                  index={index} 
                  total={blogPosts.length} 
                />
              ))}
            </div>
          </section>
           
          <section aria-label="Ask AI Section">
            <AskAISection />
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default KnowledgeHub;