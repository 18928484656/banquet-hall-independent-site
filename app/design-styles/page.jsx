import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import { designStyles } from "../data/site";

export const metadata = {
  title: "Luxury Banquet Hall Design Styles | DINGSHENG",
  description:
    "Explore DINGSHENG luxury gold, ocean theme, crystal white, technology event and classic banquet hall design styles for hotels and wedding venues."
};

export default function DesignStylesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="subpage-hero compact-hero">
        <Image src="/assets/hero-banquet-epc-premium.png" alt="Luxury banquet hall design styles" fill priority sizes="100vw" />
        <div className="subpage-shade" />
        <div className="subpage-hero-content">
          <p className="eyebrow">Design Style Gallery</p>
          <h1>Luxury Banquet Hall Styles for Different Venue Positioning</h1>
          <p>
            Choose a style direction based on target customers, budget level, event type and
            marketing positioning.
          </p>
        </div>
      </section>

      <section className="section style-library">
        {designStyles.map(([name, image, tag, copy]) => (
          <article className="style-library-card" key={name}>
            <Image src={image} alt={name} fill sizes="(max-width: 760px) 100vw, 33vw" />
            <div>
              <span>{tag}</span>
              <h2>{name}</h2>
              <p>{copy}</p>
              <a href="/inquiry">
                Request This Style
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
