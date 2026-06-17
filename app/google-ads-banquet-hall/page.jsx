import {
  BadgeCheck,
  CheckCircle2,
  Factory,
  Globe2,
  PackageCheck,
  Plane,
  ShieldCheck,
  Sparkles,
  Timer,
  Wrench
} from "lucide-react";
import AdsLeadForm from "./AdsLeadForm";

const serviceName = "One-Stop Banquet Hall Design & EPC Delivery";

const heroPoints = [
  "China design team + factory sourcing",
  "Overseas installation support",
  "Quote-ready proposal for hotels and wedding venues"
];

const advantages = [
  ["Factory Price", Factory],
  ["Fast Delivery", Timer],
  ["OEM/ODM Support", Wrench],
  ["Global Shipping", Plane],
  ["Professional Manufacturer", BadgeCheck]
];

export const metadata = {
  title: "Get Quote | Banquet Hall Design & EPC Delivery",
  description:
    "Google Ads landing page for one-stop banquet hall design, procurement, construction and overseas installation support.",
  robots: {
    index: false,
    follow: false
  }
};

export default function GoogleAdsBanquetHallPage() {
  return (
    <main className="ads-landing">
      <section className="ads-hero">
        <div className="ads-hero-copy">
          <p className="ads-kicker">Google Ads Quote Page</p>
          <h1>{serviceName}</h1>
          <p className="ads-value">
            Design, procurement and installation coordination from China for overseas banquet hall
            projects.
          </p>

          <div className="ads-hero-points">
            {heroPoints.map((point) => (
              <span key={point}>
                <CheckCircle2 size={17} />
                {point}
              </span>
            ))}
          </div>

          <a className="ads-primary-link" href="#quote">
            Get Quote
          </a>
        </div>

        <div className="ads-hero-card" id="quote">
          <div>
            <span>Fast Response</span>
            <h2>Get a project quote</h2>
            <p>Name, email and phone are enough to start.</p>
          </div>
          <AdsLeadForm compact />
        </div>
      </section>

      <section className="ads-section ads-advantages">
        <div className="ads-section-head">
          <p className="ads-kicker">Why Buyers Contact Us</p>
          <h2>Clear supply, faster decision, fewer middlemen.</h2>
          <a href="#final-inquiry">Send Inquiry</a>
        </div>
        <div className="ads-advantage-grid">
          {advantages.map(([label, Icon]) => (
            <article key={label}>
              <Icon size={24} />
              <h3>{label}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="ads-section ads-product">
        <div>
          <p className="ads-kicker">Product / Service</p>
          <h2>Built for hotels, wedding venues and event centers.</h2>
        </div>
        <p>
          We help investors and venue operators create premium banquet spaces for weddings, family
          banquets, hotel events and commercial celebrations. Our team supports concept design,
          material sourcing, lighting and stage coordination, construction planning and overseas
          installation preparation. Send your venue size and country to receive a practical proposal.
        </p>
        <a className="ads-secondary-link" href="#final-inquiry">
          Ask for Proposal
        </a>
      </section>

      <section className="ads-section ads-trust">
        <div className="ads-trust-item">
          <ShieldCheck size={30} />
          <strong>Certifications</strong>
          <span>Project documents and supplier records</span>
        </div>
        <div className="ads-trust-item">
          <Globe2 size={30} />
          <strong>Export Countries</strong>
          <span>Support for overseas venue projects</span>
        </div>
        <div className="ads-trust-item">
          <PackageCheck size={30} />
          <strong>12+ Years</strong>
          <span>Commercial space design experience</span>
        </div>
        <div className="ads-trust-item">
          <Sparkles size={30} />
          <strong>1000+ Cases</strong>
          <span>Banquet hall project references</span>
        </div>
      </section>

      <section className="ads-final" id="final-inquiry">
        <div className="ads-final-copy">
          <p className="ads-kicker">Ready to Quote</p>
          <h2>Send your banquet hall requirements now.</h2>
          <p>
            Tell us your country, venue size and project stage. We will reply with the next design
            and quotation steps.
          </p>
        </div>
        <AdsLeadForm source="google_ads_final_cta" />
      </section>
    </main>
  );
}
