import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../data/company";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <div className="footer-logo">
          <Image src={company.logo} alt="Dingsheng Banquet Hall Space Design logo" width={190} height={190} />
        </div>
        <span>{company.legalName}</span>
        <p>{company.positioning}</p>
      </div>
      <div className="footer-links">
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
        <a href="/design-styles">Design Styles</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/inquiry">Inquiry</a>
      </div>
      <div className="footer-contact">
        <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} />
          WhatsApp: {company.whatsapp}
        </a>
        <a href={company.mailto}>
          <Mail size={16} />
          {company.email}
        </a>
        <span>
          <Phone size={16} />
          WeChat: {company.wechat}
        </span>
        <span>
          <MapPin size={16} />
          {company.addressEn}
        </span>
      </div>
      <div className="footer-bottom">
        <span>{company.chineseName}</span>
        <a href={company.website}>
          <Send size={14} />
          {company.domain}
        </a>
      </div>
    </footer>
  );
}
