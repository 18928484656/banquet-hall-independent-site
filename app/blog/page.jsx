import Image from "next/image";
import { ArrowRight, BookOpenCheck, SearchCheck, Sparkles } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { getBlogIndex } from "./blogData";

export const metadata = {
  title: "Banquet Hall Design Blog | DINGSHENG SEO Resource Center",
  description:
    "English B2B guides for banquet hall design, hotel ballroom renovation, EPC turnkey delivery, lighting, AV and overseas venue projects."
};

const clusterDescriptions = {
  "Project Budget, Planning and Delivery":
    "Budget, timeline, EPC, turnkey scope, procurement and supplier comparison guides.",
  "Design, Lighting, Layout and System Selection":
    "Practical guides for layout, ceiling, stage, lighting, AV, materials and venue operation.",
  "Renovation, Markets and Application Scenarios":
    "Hotel ballroom renovation, country market pages and scenario-based decision content."
};

export default function BlogPage() {
  const posts = getBlogIndex();
  const clusters = [...new Set(posts.map((post) => post.cluster))];

  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero compact-hero blog-hero">
        <Image src="/assets/hero-banquet-epc-premium.png" alt="DINGSHENG banquet hall design blog" fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="subpage-hero-content">
          <p className="eyebrow">SEO Resource Center</p>
          <h1>Banquet Hall Design, EPC & Renovation Guides</h1>
          <p>
            110 English B2B articles planned for Google SEO, AI Overview and overseas buyer
            decision searches.
          </p>
        </div>
      </section>

      <section className="section blog-summary-strip">
        <div>
          <SearchCheck size={24} />
          <strong>110</strong>
          <span>SEO articles</span>
        </div>
        <div>
          <BookOpenCheck size={24} />
          <strong>3</strong>
          <span>buyer-intent topic clusters</span>
        </div>
        <div>
          <Sparkles size={24} />
          <strong>AIO</strong>
          <span>FAQ, quick answers and structured CTAs</span>
        </div>
      </section>

      {clusters.map((cluster) => (
        <section className="section blog-cluster" key={cluster}>
          <div className="section-heading">
            <p className="section-kicker">{cluster}</p>
            <h2>{clusterDescriptions[cluster]}</h2>
          </div>
          <div className="blog-card-grid">
            {posts
              .filter((post) => post.cluster === cluster)
              .map((post) => (
                <article className="blog-card" key={post.slug}>
                  <span>Article {post.id}</span>
                  <h3>{post.title}</h3>
                  <p>{post.intent}</p>
                  <small>{post.keyword}</small>
                  <a href={post.slug}>
                    Read Article
                    <ArrowRight size={16} />
                  </a>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
