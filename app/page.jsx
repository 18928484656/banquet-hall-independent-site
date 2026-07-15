import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  DraftingCompass,
  ExternalLink,
  Globe2,
  Hammer,
  Headphones,
  Layers3,
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

const services = [
  {
    icon: DraftingCompass,
    title: "Banquet Hall Design & Planning",
    copy: "Concept planning, layout, theme creation, ceiling design, stage planning and guest flow optimization."
  },
  {
    icon: Hammer,
    title: "Construction & Interior Fit-out",
    copy: "Ceiling, wall, flooring, stage, lighting, furniture, materials procurement and site coordination."
  },
  {
    icon: Headphones,
    title: "Lighting, AV & Smart Systems",
    copy: "Integrated lighting, LED screens, sound, stage effects, controls and immersive scene systems."
  },
  {
    icon: Wand2,
    title: "Luxury Wedding Hall Design",
    copy: "High-end wedding spaces with customized themes, photo-worthy scenes and premium visual impact."
  },
  {
    icon: Building2,
    title: "Hotel Ballroom Renovation",
    copy: "Upgrade old ballrooms into profitable multi-function venues with stronger experience and visual value."
  },
  {
    icon: Layers3,
    title: "Operations Empowerment",
    copy: "Venue planning, equipment procurement, staff workflow training, marketing planning and short-video support."
  }
];

const styles = [
  {
    name: "Luxury Gold Hall",
    image: "/assets/luxury-gold-hall.jpg",
    tag: "Premium wedding venue"
  },
  {
    name: "Ocean Theme Hall",
    image: "/assets/ocean-theme-hall.png",
    tag: "Immersive ceremony scene"
  },
  {
    name: "Crystal White Hall",
    image: "/assets/crystal-white-hall.png",
    tag: "Elegant hotel ballroom"
  },
  {
    name: "Theater Banquet Hall",
    image: "/assets/red-theater-hall.png",
    tag: "High-impact event space"
  }
];

const proof = [
  ...company.proof
];

const slugify = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function HomePage() {
  const featuredCase = caseStudies[0];

  return (
    <main>
      <SiteHeader />
      <h1 className="visually-hidden">
        Қазақстандағы банкет залдарының дизайны және жаңартылуы
      </h1>

      <section className="hero">
        <Image
          className="hero-video"
          src="/assets/hero-banquet-epc-premium.png"
          alt="Luxury banquet hall EPC design and construction by DINGSHENG"
          fill
          sizes="100vw"
          priority
          loading="eager"
        />
        <div className="hero-shade"></div>
        <div className="hero-content">
          <p className="eyebrow">Қазақстандағы банкет залдарына арналған шешімдер</p>
          <h2>Қазақстандағы банкет залдарының дизайны және жаңартылуы</h2>
          <p className="hero-copy">
            3D-дизайн, Қытайдан жеткізу, LED-экрандар, жарық, жиһаз және банкет залдары,
            мейрамханалар мен қонақүй иелері үшін құрылыс сүйемелдеуі.
          </p>
          <div className="hero-points" aria-label="Core delivery strengths">
            <span>
              <CheckCircle2 size={17} />
              Залдың 3D-дизайны
            </span>
            <span>
              <CheckCircle2 size={17} />
              Қытайдан жеткізу
            </span>
            <span>
              <CheckCircle2 size={17} />
              LED, жарық және жиһаз
            </span>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/inquiry">
              Жобалық ұсыныс алу
              <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="/projects">
              Жобаларды көру
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-video-label" aria-hidden="true">
          <span>Кешенді сүйемелдеу</span>
          <strong>Дизайн, жеткізу, жарық, LED және құрылыс.</strong>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span></span>
          Explore
        </div>
      </section>

      <section className="proof-strip" aria-label="Company proof">
        {proof.map(([value, label]) => (
          <div className="proof-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section intro">
        <div>
          <p className="section-kicker">What DINGSHENG Delivers</p>
          <h2>From concept to opening, one project partner for high-value banquet spaces.</h2>
        </div>
        <p>
          {company.legalName} helps hotel owners, wedding venue operators and investors transform
          venue ideas into profitable event spaces. Our planning connects design, materials,
          construction, lighting, AV systems and operation support so the final venue is beautiful,
          buildable and commercially practical.
        </p>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <p className="section-kicker">Core Services</p>
          <h2>Design, procurement, construction and turnkey delivery.</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={28} />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <a href="#contact">
                  Discuss this service
                  <ChevronRight size={16} />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section id="styles" className="section dark-band">
        <div className="section-heading">
          <p className="section-kicker">Design Styles</p>
          <h2>Visual themes that help venues sell the experience before the event starts.</h2>
        </div>
        <div className="style-grid">
          {styles.map((style) => (
            <article className="style-card" key={style.name}>
              <Image src={style.image} alt={style.name} fill sizes="(max-width: 760px) 100vw, 25vw" />
              <div>
                <span>{style.tag}</span>
                <h3>{style.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="case" className="section case-section">
        <div className="case-card">
          <div className="case-content">
            <p className="section-kicker">Featured Case Study</p>
            <h2>{featuredCase.title}: turning high-aesthetic design into commercial value.</h2>
            <p>
              {featuredCase.summary}
            </p>
            <div className="case-metrics">
              <span>
                <strong>{featuredCase.area}</strong>
                project area
              </span>
              <span>
                <strong>{featuredCase.duration}</strong>
                delivery period
              </span>
              <span>
                <strong>2025</strong>
                China project
              </span>
            </div>
          </div>
          <div className="case-media">
            <video
              src={featuredCase.video}
              poster={featuredCase.image}
              controls
              muted
              playsInline
              preload="metadata"
              aria-label={`${featuredCase.title} featured project video`}
            />
          </div>
        </div>
      </section>

      <section className="section project-preview-section">
        <div className="section-heading">
          <p className="section-kicker">More Project Directions</p>
          <h2>Show customers clear proof of what their banquet hall can become.</h2>
        </div>
        <div className="project-preview-grid">
          {caseStudies.map((item) => (
            <a className="project-preview-card link-card" href={`/projects/${slugify(item.title)}`} key={item.title}>
              <div className="project-preview-media">
                <Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 100vw, 25vw" />
              </div>
              <div className="project-preview-body">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="section-actions">
          <a className="btn btn-primary" href="/projects">
            View More Cases
            <ArrowRight size={18} />
          </a>
          <a className="btn btn-dark" href="/services">
            Explore Product Pages
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      <section className="section markets">
        <div className="section-heading">
          <p className="section-kicker">Target Markets</p>
          <h2>Prepared for hotel, wedding venue and EPC projects across key overseas markets.</h2>
        </div>
        <div className="market-list">
          {markets.map((market) => (
            <span key={market}>
              <MapPin size={17} />
              {market}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Start Your Project</p>
          <h2>Request a free banquet hall design proposal.</h2>
          <p>
            Tell us your country, venue type, size, timeline and budget range. A project consultant
            will help you clarify the next design and quotation steps.
          </p>
          <div className="contact-lines">
            <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              {company.whatsapp}
            </a>
            <a href={company.mailto}>
              <Mail size={18} />
              {company.email}
            </a>
          </div>
        </div>
        <InquiryForm />
      </section>

      <section className="map-section home-map-section">
        <div className="map-copy">
          <p className="section-kicker">Company Location</p>
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
