import Image from "next/image";
import { ArrowRight, CheckCircle2, Factory, Globe2, Hammer, Lightbulb, UsersRound } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { company } from "../data/company";

export const metadata = {
  title: "About DINGSHENG | Guangdong Dingsheng Design Co., Ltd.",
  description:
    "Learn about Guangdong Dingsheng Design Co., Ltd., a Foshan-based banquet hall design and project delivery company with design, construction, operation and supply chain capabilities."
};

const capabilities = [
  ["Concept Planning", "Venue positioning, brand story, guest flow and style direction before design starts.", Lightbulb],
  ["Banquet Hall Design", "Modular design elements, ceiling language, stage, lighting scenes and soft decoration.", UsersRound],
  ["Direct Construction Control", "Experienced construction team with hidden works control and no outsourcing mindset.", Hammer],
  ["Operation Empowerment", "Venue planning, staff workflow training, marketing planning and short-video operation support.", Globe2],
  ["Foshan Supply Chain", "Located in China's building materials hub for ceramic, metal, stone, lighting and interior resources.", Factory]
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero compact-hero">
        <Image src="/assets/classic-luxury-hall.png" alt="DINGSHENG banquet space design company" fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="subpage-hero-content">
          <p className="eyebrow">Company Introduction</p>
          <h1>{company.legalName}</h1>
          <p>
            A Foshan-based professional design company focused on full-process hotel banquet hall,
            wedding venue and high-end commercial space delivery.
          </p>
        </div>
      </section>

      <section className="section about-intro">
        <div>
          <p className="section-kicker">Dingsheng Banquet Space Design</p>
          <h2>From spatial storytelling to project delivery and operation value.</h2>
        </div>
        <div>
          <p>
            {company.chineseName} is located in Foshan, Guangdong, known as China's building
            materials hub. The company focuses on full-scale hotel banquet hall projects and
            provides integrated solutions from concept planning and design implementation to
            construction landing, procurement coordination and post-opening support.
          </p>
          <p>
            The design philosophy is "{company.philosophy}". Through precise design language,
            DINGSHENG helps venue owners express brand stories, improve guest experience and turn
            high-aesthetic spaces into commercially valuable event destinations.
          </p>
        </div>
      </section>

      <section className="section proof-strip about-proof">
        {company.proof.map(([value, label]) => (
          <div className="proof-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section about-capabilities">
        <div className="section-heading">
          <p className="section-kicker">Enterprise Advantages</p>
          <h2>Integrated design, construction, operation and supply chain capability.</h2>
        </div>
        <div className="services-grid">
          {capabilities.map(([title, copy, Icon]) => (
            <article className="service-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="/inquiry">
                Discuss this capability
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-banner">
        <div>
          <p className="section-kicker">Cooperation and Contact</p>
          <h2>Send your project information to DINGSHENG's banquet space design team.</h2>
          <p>
            WhatsApp: {company.whatsapp} · Email: {company.email} · WeChat: {company.wechat}
          </p>
        </div>
        <a className="btn btn-primary" href="/inquiry">
          Request Project Proposal
          <CheckCircle2 size={18} />
        </a>
      </section>
    </main>
  );
}
