import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, Music2, Ruler, Timer, Wand2 } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import { caseStudies } from "../../data/site";
import { company } from "../../data/company";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const extras = {
  "guangzhou-red-gold-palace-wedding-hall": {
    label: "Theatrical Palace Ceremony",
    music: "Warm cinematic strings, soft timpani hits and elegant piano for a royal but comfortable wedding mood.",
    concept:
      "This page presents a red-gold palace style designed for high-value wedding packages. The strongest visual investment sits in the stage axis, ceiling rings and red-gold dining atmosphere, so guests understand the luxury positioning as soon as they enter.",
    details: ["Curved gold ceiling language", "Warm red wall rhythm", "Central stage and aisle axis", "Soft spotlight layers", "Family banquet comfort lighting", "Photo-ready ceremony entrance"]
  },
  "hangzhou-ice-blue-crystal-banquet-hall": {
    label: "Ice Blue Crystal Wedding Scene",
    music: "Dreamy ambient pop, glass bell textures and slow emotional build-up for a clean luxury ceremony feeling.",
    concept:
      "This case focuses on a blue crystal hall that feels fresh, premium and easy to film. The design keeps blue light in the ceiling and background while protecting warm table lighting for the dining experience.",
    details: ["Blue crystal ceiling atmosphere", "Bright ceremony stage", "Clean table presentation", "Hanging ball light system", "Photo mode lighting", "Dinner mode brightness balance"]
  },
  "wuhan-starry-ocean-technology-hall": {
    label: "Starry Ocean Technology Show",
    music: "Epic electronic orchestral music with deep bass pulses and sparkling synths for a futuristic entrance.",
    concept:
      "This technology-themed hall is designed for venues that need strong short-video impact. Starry ceiling forms, blue laser atmosphere and central stage control create a flexible space for weddings and corporate launches.",
    details: ["Galaxy ceiling elements", "Ocean blue light beam", "LED and AV interface", "Event show mode", "Wedding entrance route", "Technical commissioning checklist"]
  },
  "shanghai-white-forest-crystal-wedding-hall": {
    label: "White Forest Crystal Ceremony",
    music: "Soft piano, airy strings and light vocal pads for a gentle, emotional and premium wedding atmosphere.",
    concept:
      "A white forest hall should feel soft without becoming visually weak. The design uses floral ceiling structures, a runway-style aisle and crystal layers to build depth for photography and live ceremonies.",
    details: ["White floral ceiling", "Crystal curtain details", "Runway ceremony aisle", "Guest photo route", "Chandelier load coordination", "Soft luxury dining mood"]
  },
  "chengdu-champagne-gold-grand-ballroom": {
    label: "Champagne Gold Luxury Ballroom",
    music: "Elegant lounge orchestra, brushed cymbals and warm bass for a premium hotel banquet impression.",
    concept:
      "This ballroom direction is built for stable commercial performance. Champagne-gold ceiling waves and crystal lighting make the hall feel expensive while remaining suitable for weddings, annual dinners and family banquets.",
    details: ["Wave ceiling feature", "Champagne-gold palette", "Crystal lighting drop", "Large hall table planning", "Stage and aisle hierarchy", "Three-month delivery control"]
  },
  "shenzhen-deep-blue-immersive-ceremony-hall": {
    label: "Deep Blue Immersive Ceremony",
    music: "Dark cinematic electronic music with slow bass rise and clean impact hits for a dramatic entrance scene.",
    concept:
      "This compact hall is planned around an immersive dark-blue ceremony moment. The design separates show lighting from dinner lighting so the space can feel dramatic during ceremonies and practical during service.",
    details: ["Dark blue stage atmosphere", "Light tunnel rhythm", "Separate dinner lighting", "Safe guest movement", "Cable route review", "Final show-mode rehearsal"]
  },
  "nanjing-blue-mirror-star-river-hall": {
    label: "Blue Mirror Star River Aisle",
    music: "Modern chill electronic music, soft arpeggios and smooth bass for a fashionable blue wedding scene.",
    concept:
      "The mirror aisle is the commercial memory point of this hall. Reflection, blue lighting and table styling create depth while anti-slip details and service routes keep the project buildable.",
    details: ["Mirror aisle reflection", "Blue floral table scene", "Ceiling light strip", "Anti-slip material review", "Stage sightline control", "Premium brand dinner adaptability"]
  },
  "xiamen-mint-ocean-banquet-hall": {
    label: "Mint Ocean Fresh Wedding Hall",
    music: "Fresh tropical house, light percussion and soft wave-like synths for a coastal destination wedding mood.",
    concept:
      "A fresh mint ocean hall works well for coastal venues and younger wedding customers. The concept focuses the theme on the wall, ceiling detail and ceremony photo zone to keep the project cost under control.",
    details: ["Mint green-blue wall feature", "Wave ceiling detail", "Compact ceremony stage", "Maintenance-friendly finish", "Coastal wedding tone", "Fast two-month installation"]
  },
  "zhengzhou-white-dream-stage-wedding-hall": {
    label: "White Dream Stage Focus",
    music: "Romantic cinematic piano, soft choir layers and gentle crescendo for a pure bride entrance scene.",
    concept:
      "This white dream hall uses a strong stage arch and star-light background to make the bride entrance clear in video. The permanent structure stays clean, while flowers and fabrics can change by event package.",
    details: ["Large white stage arch", "Star-light backdrop", "Layered ceiling ribs", "Bride entrance sightline", "Replaceable floral styling", "Regular banquet compatibility"]
  },
  "qingdao-silver-blue-crystal-ballroom": {
    label: "Silver Blue Crystal Hotel Ballroom",
    music: "Refined cinematic lounge music, crystal bell accents and low strings for an elegant hotel reception mood.",
    concept:
      "This silver-blue crystal ballroom is designed for hotel-style operation. The permanent structure is refined and neutral, while lighting and table styling allow the venue to adapt to different event packages.",
    details: ["Crystal chandelier ceiling", "Silver-blue material palette", "Circular table planning", "Hotel banquet operation", "Lighting color variation", "Final handover documentation"]
  }
};

const getCase = (slug) => caseStudies.find((item) => slugify(item.title) === slug);

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: slugify(item.title) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: `${item.title} Video Case | DINGSHENG`,
    description: `${item.title} project video case with design style, construction scope, area, schedule and delivery details for banquet hall investors.`
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();
  const extra = extras[slug];
  const otherCases = caseStudies.filter((entry) => entry.title !== item.title).slice(0, 3);

  return (
    <main>
      <SiteHeader />
      <section className="project-story-hero">
        <div className="project-story-copy">
          <p className="section-kicker">Featured Video Case</p>
          <h1>{item.title}</h1>
          <p>{extra?.concept || item.summary}</p>
          <div className="story-metrics">
            <span><strong>{item.area}</strong>Venue area</span>
            <span><strong>{item.duration}</strong>Delivery period</span>
            <span><strong>{item.metrics[1]}</strong>Banquet capacity</span>
          </div>
          <div className="story-actions">
            <a className="btn btn-primary" href="/inquiry">Request Similar Design <ArrowRight size={18} /></a>
            <a className="btn btn-dark" href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              WhatsApp Project Video
            </a>
          </div>
        </div>
        <div className="project-story-video">
          <video src={item.video} poster={item.image} controls playsInline preload="metadata" aria-label={`${item.title} video`} />
        </div>
      </section>

      <section className="section project-story-grid">
        <article className="story-panel">
          <span><MapPin size={18} /> Project Address</span>
          <h2>{item.location}</h2>
          <p>{item.summary}</p>
        </article>
        <article className="story-panel">
          <span><CalendarDays size={18} /> 2025 Schedule</span>
          <h2>{item.period}</h2>
          <p>{item.result}</p>
        </article>
        <article className="story-panel">
          <span><Music2 size={18} /> Music Mood</span>
          <h2>{extra?.label || item.type}</h2>
          <p>{extra?.music || "Cinematic, comfortable and premium sound direction suitable for high-end banquet hall video promotion."}</p>
        </article>
      </section>

      <section className="section detail-split">
        <div>
          <p className="section-kicker">Design & Construction Details</p>
          <h2>A project story written for buyer trust, not only visual effect.</h2>
          <p>{item.challenge}</p>
          <div className="detail-fact-row">
            <small><Ruler size={16} /> {item.area}</small>
            <small><Timer size={16} /> {item.duration}</small>
            <small><Wand2 size={16} /> {item.type}</small>
          </div>
        </div>
        <div className="detail-check-card">
          <strong>Key Work Scope</strong>
          <ul>
            {item.deliverables.map((scope) => (
              <li key={scope}><CheckCircle2 size={17} /> {scope}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section style-detail-band">
        <div>
          <p className="section-kicker">Style Highlights</p>
          <h2>{extra?.label || item.type}</h2>
        </div>
        <div className="style-detail-grid">
          {(extra?.details || item.metrics).map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </section>

      <section className="section project-preview-section">
        <div className="section-heading">
          <p className="section-kicker">More Video Pages</p>
          <h2>Explore other banquet hall styles with different visual and music moods.</h2>
        </div>
        <div className="project-preview-grid three-up">
          {otherCases.map((entry) => (
            <a className="project-preview-card link-card" href={`/projects/${slugify(entry.title)}`} key={entry.title}>
              <div className="project-preview-media">
                <Image src={entry.image} alt={entry.title} fill loading="eager" sizes="(max-width: 760px) 100vw, 30vw" />
              </div>
              <div className="project-preview-body">
                <span>{entry.type}</span>
                <h3>{entry.title}</h3>
                <p>{entry.area} · {entry.duration} · 2025 China project case</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
