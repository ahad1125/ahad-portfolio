import { SITE_INFO } from "@/config/site";

export function SEO({ title, description, keywords, image, path }) {
  const pageTitle = title ? `${title} | ${SITE_INFO.name}` : `${SITE_INFO.name} – ${SITE_INFO.description}`;
  const pageDescription = description || SITE_INFO.description;
  const canonicalUrl = `${SITE_INFO.url}${path || ""}`;
  const ogImage = image || SITE_INFO.ogImage;
  const keywordsString = Array.isArray(keywords) 
    ? keywords.join(", ") 
    : keywords || SITE_INFO.keywords?.join(", ");

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {keywordsString && <meta name="keywords" content={keywordsString} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={ogImage} />
    </>
  );
}
