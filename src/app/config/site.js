// config/site.js (or app/config/site.js)

export const siteConfig = {
    name: "NotionX",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://notionx.ai",
    
    // Useful paths
    paths: {
      blog: "/blog",
      images: "/images",
      blogImages: "/images/Blog-page",
    },
    
    // Social links (if needed)
    social: {
      twitter: "https://twitter.com/notionx",
      linkedin: "https://linkedin.com/company/notionx",
    },
    
    // Logo
    logo: "/navbar-logo.svg"
  };