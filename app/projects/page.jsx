import Image from "next/image";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, Ruler, Timer } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { caseStudies } from "../data/site";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const metadata = {
  title: "2025 China Banquet Hall Project Cases | DINGSHENG",
  description:
    "View DINGSHENG 2025 China banquet hall design, wedding hall renovation, themed venue and ballroom delivery case profiles with video, area, schedule and scope."
};

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero compact-hero">
        <Image src="/assets/case-ocean-theme-wedding-hall.png" alt="DINGSHENG banquet hall projects" fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="subpage-hero-content">
          <p className="eyebrow">Project Cases</p>
          <h1>2025 China Video Project Cases for Banquet Hall Design & Delivery</h1>
          <p>
            Browse DINGSHENG banquet hall video case profiles across major Chinese cities,
            including venue area, delivery period, project scope, design challenge and handover details.
          </p>
        </div>
      </section>

      <section className="section case-library">
        {caseStudies.map((item) => (
          <article className="case-library-card" key={item.title}>
            <div className="case-library-media">
              {item.video ? (
                <video
                  src={item.video}
                  poster={item.image}
                  controls
                  muted
                  playsInline
                  preload="none"
                  aria-label={`${item.title} project video`}
                />
              ) : (
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 100vw, 50vw" />
              )}
            </div>
            <div className="case-library-copy">
              <span>{item.type}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <div className="case-facts">
                <small>
                  <MapPin size={15} />
                  {item.location}
                </small>
                <small>
                  <CalendarDays size={15} />
                  {item.period}
                </small>
                <small>
                  <Ruler size={15} />
                  {item.area}
                </small>
                <small>
                  <Timer size={15} />
                  {item.duration}
                </small>
              </div>
              <div className="metric-list">
                {item.metrics.map((metric) => (
                  <small key={metric}>
                    <CheckCircle2 size={15} />
                    {metric}
                  </small>
                ))}
              </div>
              {item.deliverables?.length ? (
                <div className="case-deliverables">
                  <strong>Delivered Scope</strong>
                  <ul>
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <div className="case-note-grid">
                <p>
                  <strong>Project Challenge:</strong> {item.challenge}
                </p>
                <p>
                  <strong>Delivery Result:</strong> {item.result}
                </p>
              </div>
              <a href={`/projects/${slugify(item.title)}`}>
                View Video Detail Page
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
