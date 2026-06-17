import { company } from "./data/company";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${company.website}/sitemap.xml`,
    host: company.website
  };
}
