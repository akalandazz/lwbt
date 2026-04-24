export function getLawFirmSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: "John Doe",
    description:
      "John Doe, Attorney at Law — 20+ years of relentless advocacy in corporate law, civil litigation, family law, and real estate across Georgia.",
    url: "https://www.johndoelaw.com",
    telephone: "+14045550190",
    email: "john@johndoelaw.com",
    image: "https://www.johndoelaw.com/images/john-doe.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "191 Peachtree Street NE, Suite 3200",
      addressLocality: "Atlanta",
      addressRegion: "GA",
      postalCode: "30303",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.7489954,
      longitude: -84.3879824,
    },
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
    priceRange: "$$",
    openingHours: ["Mo-Fr 09:00-18:00"],
    sameAs: [
      "https://www.linkedin.com/in/johndoelaw",
      "https://www.facebook.com/johndoelaw",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "J.D.",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "Harvard Law School",
        },
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "State Bar of Georgia",
      },
      {
        "@type": "Organization",
        name: "Atlanta Bar Association",
      },
    ],
  };
}

export function getLegalServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `John Doe Law — ${name}`,
    description,
    url,
    provider: {
      "@type": "Attorney",
      name: "John Doe",
      telephone: "+14045550190",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
  };
}
