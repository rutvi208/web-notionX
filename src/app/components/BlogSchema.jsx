import { siteConfig } from "@/app/config/site";
export default function BlogSchema({
    url,
    headline,
    description,
    image,
    datePublished,
    dateModified,
    authorName,
    authorUrl,
    // publisherLogo,
    articleBody,
    articleSection,
    keywords = [],
    wordCount,
  }) {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`
      },
      headline,
      description,
      image: {
        "@type": "ImageObject",
        url: image,
        width: 1200,
        height: 630,
      },
      datePublished,
      dateModified,
      author: {
        "@type": "Person",
        name: authorName,
        url: authorUrl,
      },
      "publisher": {
        "@id": `${siteConfig.url}/#organization`
      }, 
      url,
      articleBody,
      articleSection,
      keywords,
      ...(wordCount && { wordCount }),
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".article-body", ".content-font"]
      },
      "interactionStatistic": [
        {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/ReadAction",
          "userInteractionCount": 1247
        },
        {
          "@type": "InteractionCounter",
          "interactionType": "https://schema.org/ShareAction",
          "userInteractionCount": 89
        }
      ]
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  }
  