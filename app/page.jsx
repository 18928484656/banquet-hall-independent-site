import Image from "next/image";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  DraftingCompass,
  ExternalLink,
  Factory,
  Globe2,
  Hammer,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Wand2
} from "lucide-react";
import InquiryForm from "./inquiry/InquiryForm";
import SiteHeader from "./components/SiteHeader";
import { caseStudies, markets } from "./data/site";
import { company } from "./data/company";

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const signatureThemes = [
  {
    name: "Royal Galaxy",
    title: "Golden ceremonial ballroom for premium wedding bookings.",
    image: "/assets/luxury-gold-hall.jpg",
    href: "/design-styles",
    copy: "A grand ceiling rhythm, chandelier language and stage axis built for hotel ballrooms and destination wedding venues."
  },
  {
    name: "Atlantis Ocean",
    title: "Immersive blue banquet hall with deep-sea atmosphere.",
    image: "/assets/ocean-theme-hall.png",
    href: "/design-styles",
    copy: "Ocean lighting, sculptural curves and scene control for venues that need a memorable first-view impact."
  },
  {
    name: "Crystal White",
    title: "Clean luxury wedding hall for elegant ceremony photography.",
    image: "/assets/crystal-white-hall.png",
    href: "/design-styles",
    copy: "Soft white floral structure, crystal lighting and balanced table brightness for high-end wedding packages."
  },
  {
    name: "Opera Palace",
    title: "Theater-inspired event hall for ceremony, banquet and show.",
    image: "/assets/red-theater-hall.png",
    href: "/design-styles",
    copy: "Layered red and gold visual language with a stage-first layout for dramatic ceremonies and business events."
  }
];

const deliverySteps = [
  ["01", "Concept & Business Positioning", "Define venue type, target client, table capacity, ceremony route, theme direction and investment priority."],
  ["02", "Design Development", "Create layout, ceiling, stage, lighting, material moodboard and construction-ready coordination details."],
  ["03", "Factory Procurement", "Coordinate Chinese factories for lighting, metal, crystal, soft decoration, furniture and equipment packages."],
  ["04", "Global Installation & Handover", "Arrange construction guidance, on-site installation team support, final inspection and opening preparation."]
];

const serviceCards = [
  ["Banquet Hall Design", "Theme planning, layout, ceiling language, stage focal point and guest-flow planning.", DraftingCompass],
  ["EPC Turnkey Delivery", "Design, procurement, construction coordination, installation and project handover in one accountable system.", Hammer],
  ["Factory Supply Chain", "China-based sourcing for materials, lighting, furniture, AV, soft decoration and custom components.", Factory],
  ["Venue Launch Support", "Opening preparation, operation workflow, marketing-ready scenes and handover support for venue teams.", Wand2]
];

const honors = [
  ["16", "In-house designers"],
  ["12+", "Years of spatial design experience"],
  ["1000+", "Banquet hall project references"],
  ["21+", "Regions and project footprints"]
];

export default function HomePage() {
  const featuredCase = caseStudies[4] || caseStudies[0];
  const galleryCases = caseStudies.slice(0, 6);

  return (
    <main className="grammy-inspired-home">
      <SiteHeader />
      <h1 className="visually-hidden">
        DINGSHENG Luxury Banquet Hall Design, Procurement and Global EPC Installation
      </h1>

      <section className="editorial-hero">
        <Image
          className="editorial-hero-bg"
          src="/assets/hero-banquet-epc-premium.png"
          alt="Luxury banquet hall designed and delivered by DINGSHENG"
          fill
          sizes="100vw"
          priority
        />
        <div className="editorial-hero-shade" />
        <div className="editorial-hero-inner">
          <p className="section-kicker">DINGSHENG BANQUET HALL SPACE DESIGN</p>
          <h2>China-based luxury banquet hall design, procurement and global EPC delivery.</h2>
          <p>
            We help hotel owners, wedding venue investors and event center operators build
            high-value banquet spaces through Chinese designers, engineers, factories and
            installation teams. No auto-play video, no distraction: visitors see your venue value first.
          </p>
          <div className="hero-points editorial-points" aria-label="DINGSHENG delivery strengths">
            <span><CheckCircle2 size={17} /> Chinese design team</span>
            <span><CheckCircle2 size={17} /> Factory procurement</span>
            <span><CheckCircle2 size={17} /> Global installation</span>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/inquiry">
              Get EPC Proposal
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="/projects">
              View Project Cases
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
        <div className="editorial-hero-note" aria-label="Project positioning">
          <strong>One-stop China team</strong>
          <span>Design / Procurement / Construction / Handover</span>
        </div>
      </section>

      <section className="brand-story-section">
        <div className="brand-story-copy">
          <p className="section-kicker">ABOUT DINGSHENG</p>
          <h2>We turn a banquet hall concept into a commercial venue that customers want to book.</h2>
          <p>
            DINGSHENG is a Foshan-based banquet hall space design and project delivery company.
            Our work connects concept planning, engineering drawings, material procurement, lighting
            scenes, site installation and opening preparation, so overseas owners can work with one
            China-based project partner instead of many separate suppliers.
          </p>
          <a className="text-link" href="/about">
            Learn About Our Team
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="brand-story-media">
          <Image src="/assets/classic-luxury-hall.png" alt="Classic luxury banquet hall design" fill sizes="(max-width: 900px) 100vw, 46vw" />
        </div>
      </section>

      <section className="theme-selection-section">
        <div className="center-heading">
          <p className="section-kicker">SELECTION CENTER</p>
          <h2>Explore banquet hall themes before you invest in construction.</h2>
          <p>
            From golden palace atmosphere to ocean immersion and crystal-white ceremony halls,
            each direction can be developed into a practical EPC scope for your market.
          </p>
        </div>
        <div className="theme-showcase-grid">
          {signatureThemes.map((theme) => (
            <a className="theme-showcase-card" href={theme.href} key={theme.name}>
              <Image src={theme.image} alt={`${theme.name} banquet hall design`} fill sizes="(max-width: 760px) 100vw, 25vw" />
              <div>
                <span>{theme.name}</span>
                <h3>{theme.title}</h3>
                <p>{theme.copy}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="service-ritual-section">
        <div className="service-ritual-copy">
          <p className="section-kicker">PROJECT SERVICE</p>
          <h2>One-stop delivery for investors who need both visual impact and real construction control.</h2>
          <p>
            Inspired by high-end wedding venue presentation, this new homepage focuses on feeling,
            trust and clear project value, while keeping DINGSHENG's B2B inquiry path direct.
          </p>
          <a className="btn btn-primary" href="/services">
            View Service Scope
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="service-ritual-grid">
          {serviceCards.map(([title, copy, Icon]) => (
            <article key={title}>
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="delivery-timeline-section">
        <div className="center-heading">
          <p className="section-kicker">FROM IDEA TO OPENING</p>
          <h2>Project delivery is planned as a sequence, not a collection of disconnected suppliers.</h2>
        </div>
        <div className="delivery-timeline">
          {deliverySteps.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-case-editorial">
        <div className="featured-case-copy">
          <p className="section-kicker">FEATURED PROJECT</p>
          <h2>{featuredCase.title}</h2>
          <p>{featuredCase.summary}</p>
          <div className="case-metrics">
            <span><strong>{featuredCase.area}</strong>project area</span>
            <span><strong>{featuredCase.duration}</strong>delivery period</span>
            <span><strong>{featuredCase.period}</strong>project time</span>
          </div>
          <a className="text-link" href={`/projects/${slugify(featuredCase.title)}`}>
            Read Case Study
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="featured-case-video">
          <video
            src={featuredCase.video}
            poster={featuredCase.image}
            controls
            playsInline
            preload="metadata"
            aria-label={`${featuredCase.title} project video`}
          />
        </div>
      </section>

      <section className="gallery-mosaic-section">
        <div className="center-heading">
          <p className="section-kicker">PROJECT GALLERY</p>
          <h2>Different styles, one construction-ready banquet hall system.</h2>
        </div>
        <div className="gallery-mosaic">
          {galleryCases.map((item) => (
            <a href={`/projects/${slugify(item.title)}`} key={item.title}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 50vw, 20vw" />
              <span>{item.type}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="honor-section">
        <div className="honor-copy">
          <p className="section-kicker">TRUST & DELIVERY</p>
          <h2>Prepared for hotel, wedding venue and event center investors across global markets.</h2>
          <p>
            DINGSHENG focuses on practical delivery proof: design team capacity, factory procurement,
            construction preparation, project inspection and after-delivery support.
          </p>
        </div>
        <div className="honor-grid">
          {honors.map(([value, label]) => (
            <article key={label}>
              <Award size={22} />
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="destination-section">
        <div>
          <p className="section-kicker">SERVICE AREA</p>
          <h2>Designed in China, prepared for overseas delivery.</h2>
        </div>
        <div className="destination-list">
          {markets.map((market) => (
            <span key={market}>
              <Globe2 size={16} />
              {market}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section editorial-contact">
        <div className="contact-copy">
          <p className="section-kicker">START YOUR PROJECT</p>
          <h2>Tell us your venue size, country and target style.</h2>
          <p>
            We will help you clarify concept direction, scope, procurement needs and the next
            quotation steps for your banquet hall project.
          </p>
          <div className="contact-lines">
            <a href={company.whatsappHref}>
              <MessageCircle size={18} />
              {company.whatsapp}
            </a>
            <a href={company.mailto}>
              <Mail size={18} />
              {company.email}
            </a>
            <span>
              <MapPin size={18} />
              {company.addressEn}
            </span>
          </div>
        </div>
        <InquiryForm />
      </section>

      <section className="map-section home-map-section">
        <div className="map-copy">
          <p className="section-kicker">COMPANY LOCATION</p>
          <h2>Find DINGSHENG's Foshan project office on the map.</h2>
          <div className="map-address-card">
            <span className="map-card-icon">
              <Building2 size={22} />
            </span>
            <div>
              <strong>{company.legalName}</strong>
              <p>{company.addressCn}</p>
              <p>{company.addressEn}</p>
            </div>
          </div>
          <div className="map-actions">
            <a className="btn btn-primary" href={company.mapSearch} target="_blank" rel="noreferrer">
              <Navigation size={18} />
              Open in OpenStreetMap
            </a>
            <a className="btn btn-dark" href="/contact">
              Contact Office
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="map-frame-wrap">
          <iframe
            title="DINGSHENG Foshan office location map"
            src={company.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a className="map-source-link" href={company.mapLarge} target="_blank" rel="noreferrer">
            View larger map
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
