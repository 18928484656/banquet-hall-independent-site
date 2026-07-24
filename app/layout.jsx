import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
import GoogleAdsTracker from "./components/GoogleAdsTracker";
import { company } from "./data/company";
import { GOOGLE_ADS_ID, WHATSAPP_CONVERSION_LABEL } from "./lib/googleAds";

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
              window.gtag_report_conversion = function gtag_report_conversion(url, targetMode) {
                var opened = false;
                var pendingWindow = null;
                if (targetMode === 'blank' && typeof(url) !== 'undefined') {
                  pendingWindow = window.open('about:blank', '_blank');
                }
                var openDestination = function () {
                  if (typeof(url) === 'undefined' || opened) return;
                  opened = true;
                  if (targetMode === 'blank') {
                    if (pendingWindow && !pendingWindow.closed) {
                      pendingWindow.location.href = url;
                      try {
                        pendingWindow.opener = null;
                      } catch (error) {}
                    } else {
                      window.open(url, '_blank', 'noopener,noreferrer');
                    }
                  } else {
                    window.location = url;
                  }
                };
                var callback = function () {
                  openDestination();
                };
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'conversion', {
                    'send_to': '${GOOGLE_ADS_ID}/${WHATSAPP_CONVERSION_LABEL}',
                    'event_callback': callback,
                    'event_timeout': 500
                  });
                  window.setTimeout(openDestination, 450);
                } else {
                  openDestination();
                }
                return false;
              };
              if (!window.__whatsappConversionListenerInstalled) {
                window.__whatsappConversionListenerInstalled = true;
                document.addEventListener('click', function handleWhatsAppConversionClick(event) {
                  if (event.defaultPrevented || event.__whatsappConversionTracked) return;
                  var target = event.target;
                  var link = target && target.closest ? target.closest('a[href]') : null;
                  if (!link) return;
                  var href = link.href || link.getAttribute('href') || '';
                  var isWhatsAppLink = href.indexOf('wa.me/') !== -1 ||
                    href.indexOf('api.whatsapp.com') !== -1 ||
                    href.indexOf('whatsapp.com') !== -1;
                  if (!isWhatsAppLink) return;
                  event.__whatsappConversionTracked = true;
                  event.preventDefault();
                  event.stopPropagation();
                  if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion(href, link.target === '_blank' ? 'blank' : 'same');
                  } else if (link.target === '_blank') {
                    window.open(href, '_blank', 'noopener,noreferrer');
                  } else {
                    window.location.href = href;
                  }
                }, true);
              }
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
