"use client";
import Script from "next/script";
import { siteConfig } from "@/app/config/site";

export default function AuthorSchema({
  name,
  url,
  role,
  image,
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "url": url,
    "roleName": role,
    "image": image,
    "publisher": {
        "@id": `${siteConfig.url}/#organization`
      }, 
  };

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
