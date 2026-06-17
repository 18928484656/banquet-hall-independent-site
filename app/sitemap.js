import { getBlogIndex } from "./blog/blogData";
import { company } from "./data/company";
import { caseStudies } from "./data/site";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function sitemap() {
  const base = company.website;
  const now = new Date();
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/design-styles",
    "/about",
    "/contact",
    "/inquiry",
    "/blog"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8
    })),
    ...caseStudies.map((item) => ({
      url: `${base}/projects/${slugify(item.title)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72
    })),
    ...getBlogIndex().map((post) => ({
      url: `${base}${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65
    }))
  ];
}
