import Image from "next/image";
import { ArrowRight, ChevronRight, MapPin, MessageCircle, Workflow } from "lucide-react";
import { markets, megaServices, megaSolutions } from "../data/site";
import { company } from "../data/company";
import LanguageSwitcher from "./LanguageSwitcher";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="DINGSHENG home">
        <Image src={company.logo} alt="Dingsheng Banquet Hall Space Design logo" width={148} height={64} priority />
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <div className="mega-trigger">
          <a className="nav-link" href="/services">
            Services
            <ChevronRight size={14} />
          </a>
          <div className="mega-menu" role="menu" aria-label="Services mega menu">
            <div className="mega-menu-inner">
              <div className="mega-feature">
                <span className="mega-icon">
                  <Workflow size={22} />
                </span>
                <p>Integrated Project Delivery</p>
                <h3>Design, procurement, construction and operation support in one system.</h3>
                <a href="/contact">
                  Request EPC Proposal
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="mega-column">
                <span className="mega-label">Core Services</span>
                {megaServices.map(([title, copy]) => (
                  <a className="mega-link" href="/services" key={title} role="menuitem">
                    <strong>{title}</strong>
                    <small>{copy}</small>
                  </a>
                ))}
              </div>
              <div className="mega-column">
                <span className="mega-label">Solutions</span>
                {megaSolutions.map(([title, copy]) => (
                  <a className="mega-link" href="/design-styles" key={title} role="menuitem">
                    <strong>{title}</strong>
                    <small>{copy}</small>
                  </a>
                ))}
              </div>
              <div className="mega-column mega-markets">
                <span className="mega-label">Target Markets</span>
                {markets.slice(0, 5).map((market) => (
                  <a className="market-pill" href="/contact" key={market} role="menuitem">
                    <MapPin size={14} />
                    {market}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href="/design-styles">Design Styles</a>
        <a href="/#engineering">Engineering</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/inquiry">Inquiry</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="header-actions">
        <LanguageSwitcher />
        <a className="header-cta" href={company.whatsappHref}>
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
