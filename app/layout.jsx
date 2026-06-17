import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import { company } from "./data/company";

export const metadata = {
  metadataBase: new URL(company.website),
  title: "DINGSHENG | Luxury Banquet Hall Design & Construction",
  description:
    "Guangdong Dingsheng Design Co., Ltd. provides one-stop banquet hall design, construction, renovation and project delivery for hotels, wedding venues and event centers."
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
    <html lang="en">
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
