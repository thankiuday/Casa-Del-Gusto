import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({
  title = 'CASA DEL GUSTO - House of Taste',
  description = 'Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.',
  keywords = 'restaurant, fine dining, food, menu, reservations, culinary, Casa Del Gusto',
  ogImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop',
  ogType = 'website',
  canonicalUrl,
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export const SEOProvider = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default SEO;
