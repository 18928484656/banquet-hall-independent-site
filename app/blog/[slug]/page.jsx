import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Image as ImageIcon, MessageCircle } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import { getArticleBySlug, getBlogIndex } from "../blogData";
import { company } from "../../data/company";

export function generateStaticParams() {
  return getBlogIndex().map((post) => ({ slug: post.slugKey }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.seoTitle || article.title,
    description: article.description
  };
}

function inlineText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderMarkdown(markdown) {
  const lines = markdown
    .split("\n")
    .filter((line) => !line.startsWith("**SEO Title:**"))
    .filter((line) => !line.startsWith("**Meta Description:**"))
    .filter((line) => !line.startsWith("**URL Slug:**"))
    .filter((line) => !line.startsWith("**Primary Keyword:**"))
    .filter((line) => !line.startsWith("**Search Intent:**"))
    .filter((line) => !line.startsWith("**Theme Cluster:**"))
    .filter((line) => !line.startsWith("**Recommended Internal Links:**"));

  const output = [];
  let list = [];

  function flushList() {
    if (list.length) {
      output.push(
        <ul className="article-list" key={`list-${output.length}`}>
          {list.map((item) => (
            <li key={item}>{inlineText(item)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("- ")) {
      list.push(trimmed.slice(2));
      return;
    }

    flushList();

    if (trimmed.startsWith("# ")) {
      return;
    }

    if (trimmed.startsWith("## ")) {
      output.push(<h2 key={index}>{trimmed.slice(3)}</h2>);
      return;
    }

    if (trimmed.startsWith("### ")) {
      output.push(<h3 key={index}>{trimmed.slice(4)}</h3>);
      return;
    }

    if (trimmed.startsWith("**CTA Button:**") || trimmed.startsWith("**CTA Link:**")) {
      output.push(<p className="article-cta-line" key={index}>{inlineText(trimmed)}</p>);
      return;
    }

    output.push(<p key={index}>{inlineText(trimmed)}</p>);
  });

  flushList();
  return output;
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <SiteHeader />
      <section className="article-hero">
        <Image src="/assets/hero-banquet-epc-premium.png" alt={article.title} fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="article-hero-content">
          <p className="eyebrow">{article.cluster}</p>
          <h1>{article.h1 || article.title}</h1>
          <p>{article.description}</p>
          <div className="article-meta-row">
            <span>{article.keyword}</span>
            <span>{article.intent}</span>
          </div>
        </div>
      </section>

      <section className="article-layout">
        <aside className="article-sidebar">
          <div className="article-side-card">
            <strong>Project Inquiry</strong>
            <p>Send your venue size, country, timeline and design requirements.</p>
            <a className="btn btn-primary" href="/inquiry">
              Get a Quote
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="article-side-card">
            <strong>WhatsApp</strong>
            <p>Talk with {company.brandName} about banquet hall design, renovation or project delivery.</p>
            <a className="btn btn-dark" href={company.whatsappHref}>
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
          </div>
        </aside>

        <article className="article-body">
          {renderMarkdown(article.markdown)}
          <div className="article-image-preview">
            <ImageIcon size={22} />
            <div>
              <strong>Image prompts are included in this article.</strong>
              <p>
                Use the image plan sections for factory testing photos, shipment inspection,
                production scenes, product details and application visuals.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
