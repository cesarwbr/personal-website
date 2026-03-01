const jsonldJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "ItemPage"],
      "@id": "https://cesarwilliam.com/nfl-live-hub",
      "url": "https://cesarwilliam.com/nfl-live-hub",
      "name": "NFL Live Hub",
      "isPartOf": {
        "@id": "https://cesarwilliam.com/",
      },
      "primaryImageOfPage": {
        "@id": "https://cesarwilliam.com/nfl-live-hub/#primaryimage",
      },
      "image": {
        "@id": "https://cesarwilliam.com/nfl-live-hub/#primaryimage",
      },
      "thumbnailUrl": "https://cesarwilliam.com/nfl-logo.png",
      "datePublished": "2024-04-12T14:02:12+00:00",
      "dateModified": "2024-04-12T14:02:12+00:00",
      "description":
        "Real-time NFL scores, stats, game recaps, standings, and fan chat in one extension.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": "https://cesarwilliam.com/nfl-live-hub/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cesarwilliam.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "NFL Live Hub",
            "item": "https://cesarwilliam.com/nfl-live-hub/",
          },
        ],
      },
      "inLanguage": "en-US",
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": ["https://cesarwilliam.com/nfl-live-hub"],
        },
      ],
    },
    {
      "@type": "ImageObject",
      "inLanguage": "en-US",
      "@id": "https://cesarwilliam.com/nfl-live-hub/#primaryimage",
      "url": "https://cesarwilliam.com/nfl-logo.png",
      "contentUrl": "https://cesarwilliam.com/nfl-logo.png",
      "width": 120,
      "height": 120,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cesarwilliam.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cesarwilliam.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "NFL Live Hub",
          "item": "https://cesarwilliam.com/nfl-live-hub/",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://cesarwilliam.com/#website",
      "url": "https://cesarwilliam.com/",
      "name": "Cesar Alvarenga",
      "description": "Technical Lead, AI",
      "publisher": { "@id": "https://cesarwilliam.com/#organization" },
      "inLanguage": "en-US",
      "copyrightHolder": { "@id": "https://cesarwilliam.com/#organization" },
    },
    {
      "@type": ["Organization", "Brand"],
      "@id": "https://cesarwilliam.com/#organization",
      "name": "Cesar Alvarenga",
      "url": "https://cesarwilliam.com/",
      "logo": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "@id": "https://cesarwilliam.com/#/schema/logo/image/",
        "url": "https://cesarwilliam.com/images/no-bg-shadow.png",
        "contentUrl": "https://cesarwilliam.com/images/no-bg-shadow.png",
        "width": 460,
        "height": 460,
        "caption": "Cesar Alvarenga",
      },
      "image": { "@id": "https://cesarwilliam.com/#/schema/logo/image/" },
      "sameAs": [
        "https://www.facebook.com/cesarwbr",
        "https://x.com/cesarwbr",
        "https://www.instagram.com/cesarwbr/",
        "https://www.linkedin.com/in/cesarwalvarenga",
        "https://www.pinterest.com/cesarwbr/",
        "https://www.youtube.com/cesarwbr",
      ],
      "makesOffer": {
        "@id": "https://cesarwilliam.com/nfl-live-hub/#/schema/offer",
      },
      "numberOfEmployees": 1,
      "founder": {
        "@type": "Person",
        "name": "Cesar Alvarenga",
        "url": "https://cesarwilliam.com/",
        "sameAs": "https://cesarwilliam.com/",
      },
      "foundingDate": "2010-05-01",
      "slogan":
        "Real-time NFL scores, stats, game recaps, standings, and fan chat in one extension.",
      "description":
        "Real-time NFL scores, stats, game recaps, standings, and fan chat in one extension.",
      "legalName": "Cesar Alvarenga",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Cesar Alvarenga",
        "description": "Cesar Alvarenga is a Technical Lead, AI building AI-powered products.",
        "url": "https://cesarwilliam.com/",
        "sameAs": ["https://cesarwilliam.com/"],
        "logo": "https://cesarwilliam.com/images/no-bg-shadow.png",
      },
    },
    {
      "@type": "Product",
      "@id": "https://cesarwilliam.com/nfl-live-hub/#/schema/product",
      "name": "NFL Live Hub",
      "mainEntityOfPage": {
        "@id": "https://cesarwilliam.com/nfl-live-hub/",
      },
      "brand": { "@id": "https://cesarwilliam.com/#organization" },
      "image": {
        "@id": "https://cesarwilliam.com/nfl-live-hub/#primaryimage",
      },
      "description":
        "Real-time NFL scores, stats, game recaps, standings, and fan chat in one extension.",
      "offers": {
        "@type": "Offer",
        "url": "https://cesarwilliam.com/nfl-live-hub",
        "priceCurrency": "USD",
        "price": "0",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-04-12T14:02:12+00:00",
        "priceValidUntil": "2027-04-12T14:02:12+00:00",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "5",
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Gabriel Carvalho",
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
          },
          "reviewBody":
            "I loved this extension because it presents the results easily accessible.",
        },
      ],
    },
  ],
};

export const jsonld = JSON.stringify(jsonldJson);
