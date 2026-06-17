import { Building2, ExternalLink, Mail, MapPin, MessageCircle, Navigation } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import InquiryForm from "../inquiry/InquiryForm";
import { company } from "../data/company";

export const metadata = {
  title: "Contact DINGSHENG | Banquet Hall Project Consultation",
  description:
    "Contact Guangdong Dingsheng Design Co., Ltd. for banquet hall design, construction, hotel ballroom renovation and project delivery support."
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-page">
        <div className="contact-page-copy">
          <p className="eyebrow">Project Consultation</p>
          <h1>Tell us about your banquet hall project.</h1>
          <p>
            Share your country, venue size, project type, budget range and timeline. We will help
            you clarify design direction, scope and next quotation steps.
          </p>
          <div className="contact-info-stack">
            <a href={company.whatsappHref}>
              <MessageCircle size={18} />
              WhatsApp: {company.whatsapp}
            </a>
            <a href={company.mailto}>
              <Mail size={18} />
              {company.email}
            </a>
            <span>
              <MapPin size={18} />
              {company.addressEn}
            </span>
            <span>
              <MessageCircle size={18} />
              WeChat: {company.wechat}
            </span>
          </div>
        </div>
        <div className="contact-page-form">
          <InquiryForm />
        </div>
      </section>

      <section className="map-section">
        <div className="map-copy">
          <p className="section-kicker">Foshan Project Office</p>
          <h2>Visit our Foshan banquet space design office.</h2>
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
            <a className="btn btn-dark" href={company.whatsappHref}>
              <MessageCircle size={18} />
              Confirm Visit
            </a>
          </div>
        </div>
        <div className="map-frame-wrap">
          <iframe
            title="DINGSHENG Foshan office map on OpenStreetMap"
            src={company.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="map-source-link"
            href={company.mapLarge}
            target="_blank"
            rel="noreferrer"
          >
            View larger map
            <ExternalLink size={14} />
          </a>
        </div>
      </section>
    </main>
  );
}
