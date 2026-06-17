import { readFileSync } from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content", "blog");
const indexPath = path.join(contentDir, "leduss-110-blog-index.csv");
const packPath = path.join(contentDir, "leduss-110-seo-blog-content-pack.md");

function parseCsvLine(line) {
  return [...line.matchAll(/"([^"]*)"/g)].map((match) => match[1]);
}

export function getBlogIndex() {
  const csv = readFileSync(indexPath, "utf8");
  return csv
    .trim()
    .split("\n")
    .slice(1)
    .map((line, index) => {
      const [title, keyword, intent, slug, cluster] = parseCsvLine(line);
      return {
        id: index + 1,
        title,
        keyword,
        intent,
        slug,
        path: slug,
        slugKey: slug.replace("/blog/", ""),
        cluster
      };
    });
}

export function getArticleBySlug(slug) {
  const item = getBlogIndex().find((entry) => entry.slugKey === slug);

  if (!item) {
    return null;
  }

  const pack = readFileSync(packPath, "utf8");
  const articles = pack.split(/\n---\n\n## Article \d+\n\n/g).slice(1);
  const markdown = articles.find((article) => article.includes(`**URL Slug:** ${item.slug}`));

  if (!markdown) {
    return null;
  }

  const meta = {
    seoTitle: markdown.match(/\*\*SEO Title:\*\* (.+)/)?.[1]?.trim(),
    description: markdown.match(/\*\*Meta Description:\*\* (.+)/)?.[1]?.trim(),
    h1: markdown.match(/^# (.+)$/m)?.[1]?.trim()
  };

  return {
    ...item,
    ...meta,
    markdown
  };
}

export function getFeaturedArticles() {
  const priority = new Set([
    "banquet-hall-design-cost-guide-what-affects-budget-in-overseas-projects",
    "hotel-ballroom-renovation-cost-guide-scope-downtime-and-upgrade-priorities",
    "turnkey-banquet-hall-solution-what-should-be-included-before-you-sign"
  ]);

  const all = getBlogIndex();
  return [
    ...all.filter((item) => priority.has(item.slugKey)),
    ...all.filter((item) => !priority.has(item.slugKey)).slice(0, 3)
  ];
}
