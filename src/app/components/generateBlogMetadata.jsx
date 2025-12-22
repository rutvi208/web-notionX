import { siteConfig } from "@/app/config/site";

export function generateBlogMetadata({
    title,
    description,
    slug,
    imageName, 
    author,
    section,
    publishedTime,
    modifiedTime,
    keywords = []
  }) {
    const baseUrl = siteConfig.url;
    const url = `${baseUrl}${siteConfig.paths.blog}/${slug}`;
    const imageUrl = `${baseUrl}${siteConfig.paths.blogImages}/${imageName}`;
  
    return {
      title: `${title}`,
      description,
      keywords,
      openGraph: {
        title: `${title}`,
        description,
        url,
        images: [imageUrl],
        type: "article",
        article: {
          published_time: publishedTime,
          modified_time: modifiedTime,
          author,
          section
        }
      },
      twitter: {
        title: `${title}`,
        description,
        url,
        images: [imageUrl],
      },
      alternates: {
        canonical: url
      }
    };
  }