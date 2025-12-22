// components/BreadcrumbSchema.jsx

export default function BreadcrumbSchema({ breadcrumbs }) {
    // Validate that breadcrumbs array exists and has items
    if (!breadcrumbs || !Array.isArray(breadcrumbs) ||breadcrumbs.length === 0) {
      return null;
    }
  
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    );
  }