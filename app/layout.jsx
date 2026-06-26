import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { company } from "./data/company";

export const metadata = {
  metadataBase: new URL(company.website),
  title: "DINGSHENG | Қазақстандағы банкет залдарының дизайны және жаңартылуы",
  description:
    "3D-дизайн, Қытайдан жеткізу, LED-экрандар, жарық, жиһаз және банкет залдары, мейрамханалар мен қонақүй иелері үшін құрылыс сүйемелдеуі."
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: [company.brandName, company.chineseName, company.legacyName],
    url: company.website,
    logo: company.logoUrl,
    email: company.email,
    telephone: company.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 502C, Building T12, Zhihui New City",
      addressLocality: "Foshan",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    },
    sameAs: [company.website]
  };

  return (
    <html lang="kk">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <SiteFooter />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
