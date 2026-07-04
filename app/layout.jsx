import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import GoogleAdsTracker from "./components/GoogleAdsTracker";
import { company } from "./data/company";
import { GOOGLE_ADS_ID } from "./lib/googleAds";

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
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ADS_ID}');
            `
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <SiteFooter />
        <FloatingWhatsAppButton />
        <GoogleAdsTracker />
      </body>
    </html>
  );
}
