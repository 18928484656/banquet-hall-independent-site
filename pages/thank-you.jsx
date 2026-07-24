import Head from "next/head";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { company } from "../app/data/company";
import { GOOGLE_ADS_ID, LEAD_CONVERSION_LABEL, WHATSAPP_CONVERSION_LABEL } from "../app/lib/googleAds";

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>Thank You | DINGSHENG Banquet Hall Project Inquiry</title>
        <meta name="description" content="Your banquet hall project inquiry has been submitted successfully." />
        <meta name="robots" content="noindex,nofollow" />
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
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                'send_to': '${GOOGLE_ADS_ID}/${LEAD_CONVERSION_LABEL}',
                'value': 1.0,
                'currency': 'CNY'
              });
            `
          }}
        />
      </Head>
      <main>
        <header className="site-header">
          <a className="brand" href="/" aria-label="DINGSHENG home">
            <img src={company.logo} alt="Dingsheng Banquet Hall Space Design logo" width="148" height="64" />
          </a>
          <div className="header-actions">
            <a
              className="header-cta"
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => {
                event.preventDefault();
                if (typeof window.gtag_report_conversion === "function") {
                  window.gtag_report_conversion(event.currentTarget.href, "blank");
                } else {
                  window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </header>
        <section className="thank-you-section">
          <div className="thank-you-card">
            <span className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={34} />
            </span>
            <p className="section-kicker">Inquiry Submitted</p>
            <h1>Thank you. Our project consultant will contact you soon.</h1>
            <p>
              We have received your banquet hall project information. Please keep your email and
              WhatsApp available so our team can confirm your venue size, design direction and next
              quotation steps.
            </p>
            <div className="thank-you-actions">
              <a
                className="btn btn-primary"
                href={company.whatsappLeadHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => {
                  event.preventDefault();
                  if (typeof window.gtag_report_conversion === "function") {
                    window.gtag_report_conversion(event.currentTarget.href, "blank");
                  } else {
                    window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
                  }
                }}
              >
                <MessageCircle size={18} />
                WhatsApp Now
              </a>
              <a className="btn btn-dark" href="/projects">
                View Project Cases
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
