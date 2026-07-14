export const dynamic = "force-static"; // <-- Yeh line add karni hai
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://noorulhaq.dev/sitemap.xml",
  };
}
