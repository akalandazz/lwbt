import type { Metadata } from "next";

export function buildMetadata(override: Partial<Metadata>): Metadata {
  return {
    title: override.title,
    description: override.description,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "John Doe Law",
      title:
        typeof override.title === "string"
          ? override.title
          : "John Doe Law — Atlanta Attorney at Law",
      description:
        typeof override.description === "string"
          ? override.description
          : "20+ years of relentless advocacy protecting individuals and businesses across Georgia.",
    },
    ...override,
  };
}
