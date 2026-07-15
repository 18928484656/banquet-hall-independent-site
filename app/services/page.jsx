import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { serviceDetails } from "../data/site";
import { company } from "../data/company";

export const metadata = {
  title: "One-Stop China Banquet Hall EPC Design, Procurement & Global Installation | DINGSHENG",
  description:
    "DINGSHENG provides one-stop banquet hall EPC delivery from Chinese designers, engineers, factory procurement and Chinese installation teams for overseas projects."
};

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero">
        <Image src="/assets/hero-banquet-epc-premium.png" alt="DINGSHENG banquet hall services" fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="subpage-hero-content">
          <p className="eyebrow">Services & Product Pages</p>
          <h1>China-Based One-Stop Banquet Hall EPC Delivery Worldwide</h1>
          <p>
            Chinese designers and engineers create the plan, China factories handle material sourcing,
            and experienced Chinese installation teams travel overseas for on-site construction. One
            company manages design, procurement, coordination, installation and handover, with no
            middlemen or multiple supplier communication.
          </p>
        </div>
      </section>

      <section className="section product-page-grid">
        {serviceDetails.map((service, index) => (
          <article className="product-detail-card" key={service.title}>
            <div className="product-media">
              <Image src={service.image} alt={service.title} fill sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className="product-copy">
              <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
              <p className="section-kicker">{service.eyebrow}</p>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <div className="deliverables">
                {service.deliverables.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </span>
                ))}
              </div>
              <div className="buyer-box">
                <strong>Best for</strong>
                <span>{service.buyer}</span>
              </div>
              <a className="btn btn-primary" href="/inquiry">
                Request Service Proposal
                <ArrowRight size={18} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="contact-banner">
        <div>
          <p className="section-kicker">Need a Project Plan?</p>
          <h2>Send your venue size, country and project stage. We will help you clarify the scope.</h2>
        </div>
        <a className="btn btn-primary" href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} />
          WhatsApp Consultant
        </a>
      </section>
    </main>
  );
}
